import { PactBun, Pact } from "./pactBun";

const expected = "That is some good Mallory.";

const pact = new PactBun();
await pact
  .setupLoggers(Pact.LevelFilter.LevelFilter_Info)
  // Arrange
  .newPact("pact-bun", "Alice-Service")
  .addMetaDataToPact(pact.getPactFfiVersion())
  .newInteraction("a retrieve Mallory request")
  .setPactSpecification(Pact.PactSpecification.PactSpecification_V4)
  .withRequest("/mallory", "GET")
  .withQueryParamV2([
    { name: "name", value: "ron" },
    { name: "status", value: "good" }
  ])
  .withResponse(200)
  .withHeader(
    Pact.InteractionPart.InteractionPart_Response,
    "content-type",
    "text/html"
  )
  .withBody(
    Pact.InteractionPart.InteractionPart_Response,
    "text/html",
    expected
  )
  .createMockServerForTransport("http", "0.0.0.0", 0)
  .executeTest(async () => {
    // Act
    const response = await fetch(
      // `http://localhost:${pact.getMockServerPort()}/mallory?name=ron`,
      `http://localhost:${pact.getMockServerPort()}/mallory?name=ron&status=good`,
      {
        method: "GET"
      }
    );
    // Assert
    const actual = await response.text();
    console.log(actual);
    console.log(expected);
    console.log(actual === expected);
    // expect(actual).toEqual(expected);
  })
  .then((results) => console.log(results));