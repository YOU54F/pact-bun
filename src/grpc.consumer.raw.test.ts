import {
  cstr,
  loadPactFfi,
  libraryLocation,
  PactSpecification,
  LevelFilter,
  InteractionPart
} from "./lib/mod";

const Pact = loadPactFfi(libraryLocation);
Pact.pactffi_logger_init();
Pact.pactffi_logger_attach_sink(cstr("stdout"), LevelFilter.LevelFilter_Info);
Pact.pactffi_logger_apply();
cstr("pact-bun"),
  cstr("INFO"),
  cstr(`hello from ffi version: ${Pact.pactffi_version()}`);
const PactTestGrpc = async () => {
  console.log("🚀 Running Pact Protobuf Plugin Test with gRPC 🚀");
  const contents = {
    "pact:proto": `${process.cwd()}/proto/area_calculator.proto`,
    "pact:proto-service": "Calculator/calculateOne",
    "pact:content-type": "application/protobuf",
    request: {
      rectangle: { length: "matching(number, 3)", width: "matching(number, 4)" }
    },
    response: { value: ["matching(number, 12)"] }
  };

  // Setup pact for testing

  const pact = Pact.pactffi_new_pact(
    cstr("grpc-consumer-bun"),
    cstr("area-calculator-provider")
  );
  console.log("pact");
  console.log(pact);
  Pact.pactffi_log_message(
    cstr("pact-bun"),
    cstr("INFO"),
    cstr(`pactffi_new_pact: ${pact})`)
  );
  const pactffi_with_pact_metadata_res = Pact.pactffi_with_pact_metadata(
    pact,
    cstr("pact-bun"),
    cstr("ffi"),
    cstr(Pact.pactffi_version())
  );
  console.log("pactffi_with_pact_metadata_res");
  console.log(pactffi_with_pact_metadata_res);
  const message_pact = Pact.pactffi_new_sync_message_interaction(
    pact,
    cstr("A gRPC calculateOne request")
  );
  console.log("message_pact");
  console.log(message_pact);
  Pact.pactffi_log_message(
    cstr("pact-bun"),
    cstr("INFO"),
    cstr(`pactffi_new_sync_message_interaction: ${message_pact}`)
  );
  console.log("try pactffi_with_specification");
  const pactffi_with_specification_res = Pact.pactffi_with_specification(
    pact,
    PactSpecification.PactSpecification_V4
  );
  console.log("pactffi_with_specification_res");
  console.log(pactffi_with_specification_res);
  // Start mock server
  const pactffi_using_plugin_res = Pact.pactffi_using_plugin(
    pact,
    cstr("protobuf"),
    cstr("0.1.17")
  );
  console.log("pactffi_using_plugin_res", contents);
  console.log(pactffi_using_plugin_res);
  console.log("setting pactffi_interaction_contents_res");

  const pactffi_interaction_contents_res = Pact.pactffi_interaction_contents(
    message_pact,
    InteractionPart.InteractionPart_Request,
    cstr("application/grpc"),
    cstr(JSON.stringify(contents))
  );
  console.log("pactffi_interaction_contents_res");
  console.log(pactffi_interaction_contents_res);
  const mock_server_port = Pact.pactffi_create_mock_server_for_transport(
    pact,
    cstr("0.0.0.0"),
    0,
    cstr("grpc"),
    null
  );
  console.log("mock_server_port");
  console.log(mock_server_port);
  Pact.pactffi_log_message(
    cstr("pact-bun"),
    cstr("INFO"),
    cstr(`pactffi_create_mock_server_for_transport: ${mock_server_port}`)
  );

  // This is where we would make our client request and assert the results

  // check results and write pact

  const matched = Pact.pactffi_mock_server_matched(mock_server_port);
  Pact.pactffi_log_message(
    cstr("pact-bun"),
    cstr("INFO"),
    cstr(`pactffi_mock_server_matched: ${matched}`)
  );

  if (!matched) {
    const mismatches = Pact.pactffi_mock_server_mismatches(mock_server_port);
    console.log("🚨 tests failed, check out the errors below 👇");
    console.log(mismatches);
    console.log(JSON.stringify(JSON.parse(mismatches), null, "\t"));
  } else {
    console.log("✅ tests passed 👌");
    const PACT_FILE_DIR = "./pacts";
    const res_write_pact = Pact.pactffi_write_pact_file(
      mock_server_port,
      cstr(PACT_FILE_DIR),
      0
    );
    Pact.pactffi_log_message(
      cstr("pact-bun"),
      cstr("INFO"),
      cstr(`pactffi_write_pact_file: ${res_write_pact}`)
    );
  }

  const pactffi_cleanup_mock_server_result =
    Pact.pactffi_cleanup_mock_server(mock_server_port);
  Pact.pactffi_log_message(
    cstr("pact-bun"),
    cstr("INFO"),
    cstr(`pactffi_cleanup_mock_server: ${pactffi_cleanup_mock_server_result}`)
  );
  Pact.pactffi_cleanup_plugins(pact);
  console.log("🧹 Cleaned up Pact processes");
};

console.log("Hello from Pact Bun FFI - Version", Pact.pactffi_version());

PactTestGrpc();

Pact.$$close()