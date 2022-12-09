import { PactBun, Pact } from "./pactBun";

const pact = new PactBun();
const pactContents = {
  "pact:proto": `${process.cwd()}/proto/area_calculator.proto`,
  "pact:proto-service": "Calculator/calculateOne",
  "pact:content-type": "application/protobuf",
  request: {
    rectangle: {
      length: "matching(number, 3)",
      width: "matching(number, 4)",
    },
  },
  response: { value: ["matching(number, 12)"] },
};
console.log(
  "🚀 Testing gRPC Area Calculator with Pact Protobuf Plugin  🚀\n",
  {
    pactContents,
  },
);

await pact
  .setupLoggers()
  // Arrange
  .newPact("area-calculator-consumer", "area-calculator-provider")
  .addMetaDataToPact(pact.getPactFfiVersion())
  .newSyncMessageInteraction("A gRPC calculateOne request")
  .setPactSpecification(Pact.PactSpecification.PactSpecification_V4)
  .usingPactPlugin("protobuf")
  .withInteractionContents(
    Pact.InteractionPart.InteractionPart_Request,
    "application/grpc",
    pactContents,
  )
  .createMockServerForTransport("grpc")
  .executeTest(async () => {
    const expected = [12];
    // Act
    const mockServerPort = pact.getMockServerPort();
    // const results = await getShapeMessage(mockServerPort);
    // Assert
    // assertEquals(results.value, expected);
  })
  .then((results: string) => console.log(results));