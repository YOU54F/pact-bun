import { cstr, loadPactFfi, libraryLocation } from "./lib/mod";
const Pact = loadPactFfi(libraryLocation);

Pact.pactffi_logger_init();
Pact.pactffi_logger_attach_sink(cstr("stdout"), 3);
Pact.pactffi_logger_apply();
Pact.pactffi_log_message(
  cstr("pact-bun-ffi"),
  cstr("INFO"),
  cstr(`hello from ffi version: ${Pact.pactffi_version()}`))

const PactTestHttp = () => {

  console.log("🚀 Pact Mock Server Test - HTTP 🚀");

  const pact = {
    consumer: { name: "pact-bun-ffi" },
    interactions: [
      {
        description: "a retrieve Mallory request",
        request: {
          method: "GET",
          path: "/mallory",
          query: "name=ron&status=good"
        },
        response: {
          body: "That is some good Mallory.",
          headers: { "Content-Type": "text/html" },
          status: 200
        }
      }
    ],
    metadata: {
      "pact-bun": { ffi: Pact.pactffi_version(), version: "1.0.0" },
      pactRust: { mockserver: "0.9.5", models: "1.0.0" },
      pactSpecification: { version: "1.0.0" }
    },
    provider: { name: "Alice Service" }
  };
  const mock_server_port = Pact.pactffi_create_mock_server(
    cstr(JSON.stringify(pact)),
    cstr("127.0.0.1:4432"),
    false
  );
  Pact.pactffi_log_message(
    cstr("pact-bun-ffi"),
    cstr("INFO"),
    cstr(`mock_server_port: ${mock_server_port}`)
  );

  const matched = Pact.pactffi_mock_server_matched(mock_server_port);
  Pact.pactffi_log_message(
    cstr("pact-bun-ffi"),
    cstr("INFO"),
    cstr(`pactffi_mock_server_matched: ${matched}`)
  );

  if (!matched) {
    const mismatches = Pact.pactffi_mock_server_mismatches(mock_server_port);
    console.log("🚨 tests failed, check out the errors below 👇");
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
      cstr("pact-bun-ffi"),
      cstr("INFO"),
      cstr(`pactffi_write_pact_file: ${res_write_pact}`)
    );
  }

  const pactffi_cleanup_mock_server_result =
  Pact.pactffi_cleanup_mock_server(mock_server_port);
  Pact.pactffi_log_message(
    cstr("pact-bun-ffi"),
    cstr("INFO"),
    cstr(`pactffi_cleanup_mock_server: ${pactffi_cleanup_mock_server_result}`)
  );
  console.log("🧹 Cleaned up Pact processes");
};

PactTestHttp();

Pact.$$close()