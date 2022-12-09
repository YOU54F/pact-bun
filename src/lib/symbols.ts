export const PactFfi_SYMBOLS = {
  malloc: {
    name: "malloc",
    args: ["usize"],
    returns: "pointer"
  },
  calloc: {
    name: "calloc",
    args: ["usize", "usize"],
    returns: "pointer"
  },
  realloc: {
    name: "realloc",
    args: ["pointer", "usize"],
    returns: "pointer"
  },
  free: {
    name: "free",
    args: ["pointer"],
    returns: "void"
  },
  posix_memalign: {
    name: "posix_memalign",
    args: ["pointer", "usize", "usize"],
    returns: "i32"
  },
  abort: {
    name: "abort",
    args: [],
    returns: "void"
  },
  getenv: {
    name: "getenv",
    args: ["pointer"],
    returns: "pointer"
  },
  realpath: {
    name: "realpath",
    args: ["pointer", "pointer"],
    returns: "pointer"
  },
  pactffi_version: {
    name: "pactffi_version",
    args: [],
    returns: "cstring"
  },
  pactffi_init: {
    name: "pactffi_init",
    args: ["cstring"],
    returns: "void"
  },
  pactffi_init_with_log_level: {
    name: "pactffi_init_with_log_level",
    args: ["cstring"],
    returns: "void"
  },
  pactffi_enable_ansi_support: {
    name: "pactffi_enable_ansi_support",
    args: [],
    returns: "void"
  },
  pactffi_log_message: {
    name: "pactffi_log_message",
    args: ["cstring", "cstring", "cstring"],
    returns: "void"
  },
  pactffi_match_message: {
    name: "pactffi_match_message",
    args: ["pointer", "pointer"],
    returns: "pointer"
  },
  pactffi_mismatches_get_iter: {
    name: "pactffi_mismatches_get_iter",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_mismatches_delete: {
    name: "pactffi_mismatches_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_mismatches_iter_next: {
    name: "pactffi_mismatches_iter_next",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_mismatches_iter_delete: {
    name: "pactffi_mismatches_iter_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_mismatch_to_json: {
    name: "pactffi_mismatch_to_json",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_mismatch_type: {
    name: "pactffi_mismatch_type",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_mismatch_summary: {
    name: "pactffi_mismatch_summary",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_mismatch_description: {
    name: "pactffi_mismatch_description",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_mismatch_ansi_description: {
    name: "pactffi_mismatch_ansi_description",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_get_error_message: {
    name: "pactffi_get_error_message",
    args: ["cstring", "i32"],
    returns: "i32"
  },
  pactffi_log_to_stdout: {
    name: "pactffi_log_to_stdout",
    args: ["i32"],
    returns: "i32"
  },
  pactffi_log_to_stderr: {
    name: "pactffi_log_to_stderr",
    args: ["i32"],
    returns: "i32"
  },
  pactffi_log_to_file: {
    name: "pactffi_log_to_file",
    args: ["cstring", "i32"],
    returns: "i32"
  },
  pactffi_log_to_buffer: {
    name: "pactffi_log_to_buffer",
    args: ["i32"],
    returns: "i32"
  },
  pactffi_logger_init: {
    name: "pactffi_logger_init",
    args: [],
    returns: "void"
  },
  pactffi_logger_attach_sink: {
    name: "pactffi_logger_attach_sink",
    args: ["cstring", "i32"],
    returns: "i32"
  },
  pactffi_logger_apply: {
    name: "pactffi_logger_apply",
    args: [],
    returns: "i32"
  },
  pactffi_fetch_log_buffer: {
    name: "pactffi_fetch_log_buffer",
    args: ["cstring"],
    returns: "cstring"
  },
  pactffi_parse_pact_json: {
    name: "pactffi_parse_pact_json",
    args: ["cstring"],
    returns: "pointer"
  },
  pactffi_pact_model_delete: {
    name: "pactffi_pact_model_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_consumer_get_name: {
    name: "pactffi_consumer_get_name",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_message_new: {
    name: "pactffi_message_new",
    args: [],
    returns: "pointer"
  },
  pactffi_message_new_from_json: {
    name: "pactffi_message_new_from_json",
    args: ["u32", "cstring", "i32"],
    returns: "pointer"
  },
  pactffi_message_new_from_body: {
    name: "pactffi_message_new_from_body",
    args: ["cstring", "cstring"],
    returns: "pointer"
  },
  pactffi_message_delete: {
    name: "pactffi_message_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_message_get_contents: {
    name: "pactffi_message_get_contents",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_message_set_contents: {
    name: "pactffi_message_set_contents",
    args: ["pointer", "cstring", "cstring"],
    returns: "void"
  },
  pactffi_message_get_contents_length: {
    name: "pactffi_message_get_contents_length",
    args: ["pointer"],
    returns: "usize"
  },
  pactffi_message_get_contents_bin: {
    name: "pactffi_message_get_contents_bin",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_message_set_contents_bin: {
    name: "pactffi_message_set_contents_bin",
    args: ["pointer", "cstring", "usize", "cstring"],
    returns: "void"
  },
  pactffi_message_get_description: {
    name: "pactffi_message_get_description",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_message_set_description: {
    name: "pactffi_message_set_description",
    args: ["pointer", "cstring"],
    returns: "i32"
  },
  pactffi_message_get_provider_state: {
    name: "pactffi_message_get_provider_state",
    args: ["pointer", "u32"],
    returns: "pointer"
  },
  pactffi_message_get_provider_state_iter: {
    name: "pactffi_message_get_provider_state_iter",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_provider_state_iter_next: {
    name: "pactffi_provider_state_iter_next",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_provider_state_iter_delete: {
    name: "pactffi_provider_state_iter_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_message_find_metadata: {
    name: "pactffi_message_find_metadata",
    args: ["pointer", "cstring"],
    returns: "cstring"
  },
  pactffi_message_insert_metadata: {
    name: "pactffi_message_insert_metadata",
    args: ["pointer", "cstring", "cstring"],
    returns: "i32"
  },
  pactffi_message_get_metadata_iter: {
    name: "pactffi_message_get_metadata_iter",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_message_metadata_iter_next: {
    name: "pactffi_message_metadata_iter_next",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_message_metadata_iter_delete: {
    name: "pactffi_message_metadata_iter_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_message_metadata_pair_delete: {
    name: "pactffi_message_metadata_pair_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_message_pact_new_from_json: {
    name: "pactffi_message_pact_new_from_json",
    args: ["cstring", "cstring"],
    returns: "pointer"
  },
  pactffi_message_pact_delete: {
    name: "pactffi_message_pact_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_message_pact_get_consumer: {
    name: "pactffi_message_pact_get_consumer",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_message_pact_get_provider: {
    name: "pactffi_message_pact_get_provider",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_message_pact_get_message_iter: {
    name: "pactffi_message_pact_get_message_iter",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_message_pact_message_iter_next: {
    name: "pactffi_message_pact_message_iter_next",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_message_pact_message_iter_delete: {
    name: "pactffi_message_pact_message_iter_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_message_pact_find_metadata: {
    name: "pactffi_message_pact_find_metadata",
    args: ["pointer", "cstring", "cstring"],
    returns: "cstring"
  },
  pactffi_message_pact_get_metadata_iter: {
    name: "pactffi_message_pact_get_metadata_iter",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_message_pact_metadata_iter_next: {
    name: "pactffi_message_pact_metadata_iter_next",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_message_pact_metadata_iter_delete: {
    name: "pactffi_message_pact_metadata_iter_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_message_pact_metadata_triple_delete: {
    name: "pactffi_message_pact_metadata_triple_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_provider_get_name: {
    name: "pactffi_provider_get_name",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_provider_state_get_name: {
    name: "pactffi_provider_state_get_name",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_provider_state_get_param_iter: {
    name: "pactffi_provider_state_get_param_iter",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_provider_state_param_iter_next: {
    name: "pactffi_provider_state_param_iter_next",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_provider_state_delete: {
    name: "pactffi_provider_state_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_provider_state_param_iter_delete: {
    name: "pactffi_provider_state_param_iter_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_provider_state_param_pair_delete: {
    name: "pactffi_provider_state_param_pair_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_pact_message_iter_delete: {
    name: "pactffi_pact_message_iter_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_pact_message_iter_next: {
    name: "pactffi_pact_message_iter_next",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_pact_sync_message_iter_next: {
    name: "pactffi_pact_sync_message_iter_next",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_pact_sync_message_iter_delete: {
    name: "pactffi_pact_sync_message_iter_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_pact_sync_http_iter_next: {
    name: "pactffi_pact_sync_http_iter_next",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_pact_sync_http_iter_delete: {
    name: "pactffi_pact_sync_http_iter_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_sync_message_new: {
    name: "pactffi_sync_message_new",
    args: [],
    returns: "pointer"
  },
  pactffi_sync_message_delete: {
    name: "pactffi_sync_message_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_sync_message_get_request_contents: {
    name: "pactffi_sync_message_get_request_contents",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_sync_message_set_request_contents: {
    name: "pactffi_sync_message_set_request_contents",
    args: ["pointer", "cstring", "cstring"],
    returns: "void"
  },
  pactffi_sync_message_get_request_contents_length: {
    name: "pactffi_sync_message_get_request_contents_length",
    args: ["pointer"],
    returns: "usize"
  },
  pactffi_sync_message_get_request_contents_bin: {
    name: "pactffi_sync_message_get_request_contents_bin",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_sync_message_set_request_contents_bin: {
    name: "pactffi_sync_message_set_request_contents_bin",
    args: ["pointer", "cstring", "usize", "cstring"],
    returns: "void"
  },
  pactffi_sync_message_get_number_responses: {
    name: "pactffi_sync_message_get_number_responses",
    args: ["pointer"],
    returns: "usize"
  },
  pactffi_sync_message_get_response_contents: {
    name: "pactffi_sync_message_get_response_contents",
    args: ["pointer", "usize"],
    returns: "cstring"
  },
  pactffi_sync_message_set_response_contents: {
    name: "pactffi_sync_message_set_response_contents",
    args: ["pointer", "usize", "cstring", "cstring"],
    returns: "void"
  },
  pactffi_sync_message_get_response_contents_length: {
    name: "pactffi_sync_message_get_response_contents_length",
    args: ["pointer", "usize"],
    returns: "usize"
  },
  pactffi_sync_message_get_response_contents_bin: {
    name: "pactffi_sync_message_get_response_contents_bin",
    args: ["pointer", "usize"],
    returns: "cstring"
  },
  pactffi_sync_message_set_response_contents_bin: {
    name: "pactffi_sync_message_set_response_contents_bin",
    args: ["pointer", "usize", "cstring", "usize", "cstring"],
    returns: "void"
  },
  pactffi_sync_message_get_description: {
    name: "pactffi_sync_message_get_description",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_sync_message_set_description: {
    name: "pactffi_sync_message_set_description",
    args: ["pointer", "cstring"],
    returns: "i32"
  },
  pactffi_sync_message_get_provider_state: {
    name: "pactffi_sync_message_get_provider_state",
    args: ["pointer", "u32"],
    returns: "pointer"
  },
  pactffi_sync_message_get_provider_state_iter: {
    name: "pactffi_sync_message_get_provider_state_iter",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_sync_http_new: {
    name: "pactffi_sync_http_new",
    args: [],
    returns: "pointer"
  },
  pactffi_sync_http_delete: {
    name: "pactffi_sync_http_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_sync_http_get_request_contents: {
    name: "pactffi_sync_http_get_request_contents",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_sync_http_set_request_contents: {
    name: "pactffi_sync_http_set_request_contents",
    args: ["pointer", "cstring", "cstring"],
    returns: "void"
  },
  pactffi_sync_http_get_request_contents_length: {
    name: "pactffi_sync_http_get_request_contents_length",
    args: ["pointer"],
    returns: "usize"
  },
  pactffi_sync_http_get_request_contents_bin: {
    name: "pactffi_sync_http_get_request_contents_bin",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_sync_http_set_request_contents_bin: {
    name: "pactffi_sync_http_set_request_contents_bin",
    args: ["pointer", "cstring", "usize", "cstring"],
    returns: "void"
  },
  pactffi_sync_http_get_response_contents: {
    name: "pactffi_sync_http_get_response_contents",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_sync_http_set_response_contents: {
    name: "pactffi_sync_http_set_response_contents",
    args: ["pointer", "cstring", "cstring"],
    returns: "void"
  },
  pactffi_sync_http_get_response_contents_length: {
    name: "pactffi_sync_http_get_response_contents_length",
    args: ["pointer"],
    returns: "usize"
  },
  pactffi_sync_http_get_response_contents_bin: {
    name: "pactffi_sync_http_get_response_contents_bin",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_sync_http_set_response_contents_bin: {
    name: "pactffi_sync_http_set_response_contents_bin",
    args: ["pointer", "cstring", "usize", "cstring"],
    returns: "void"
  },
  pactffi_sync_http_get_description: {
    name: "pactffi_sync_http_get_description",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_sync_http_set_description: {
    name: "pactffi_sync_http_set_description",
    args: ["pointer", "cstring"],
    returns: "i32"
  },
  pactffi_sync_http_get_provider_state: {
    name: "pactffi_sync_http_get_provider_state",
    args: ["pointer", "u32"],
    returns: "pointer"
  },
  pactffi_sync_http_get_provider_state_iter: {
    name: "pactffi_sync_http_get_provider_state_iter",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_parse_matcher_definition: {
    name: "pactffi_parse_matcher_definition",
    args: ["cstring"],
    returns: "pointer"
  },
  pactffi_matcher_definition_error: {
    name: "pactffi_matcher_definition_error",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_matcher_definition_value: {
    name: "pactffi_matcher_definition_value",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_matcher_definition_delete: {
    name: "pactffi_matcher_definition_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_matcher_definition_generator: {
    name: "pactffi_matcher_definition_generator",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_matcher_definition_value_type: {
    name: "pactffi_matcher_definition_value_type",
    args: ["pointer"],
    returns: "i32"
  },
  pactffi_matching_rule_iter_delete: {
    name: "pactffi_matching_rule_iter_delete",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_matcher_definition_iter: {
    name: "pactffi_matcher_definition_iter",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_matching_rule_iter_next: {
    name: "pactffi_matching_rule_iter_next",
    args: ["pointer"],
    returns: "pointer"
  },
  pactffi_matching_rule_to_json: {
    name: "pactffi_matching_rule_to_json",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_generator_to_json: {
    name: "pactffi_generator_to_json",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_generator_generate_string: {
    name: "pactffi_generator_generate_string",
    args: ["pointer", "cstring"],
    returns: "cstring"
  },
  pactffi_generator_generate_integer: {
    name: "pactffi_generator_generate_integer",
    args: ["pointer", "cstring"],
    returns: "u16"
  },
  pactffi_string_delete: {
    name: "pactffi_string_delete",
    args: ["cstring"],
    returns: "void"
  },
  pactffi_create_mock_server: {
    name: "pactffi_create_mock_server",
    args: ["cstring", "cstring", "bool"],
    returns: "i32"
  },
  pactffi_get_tls_ca_certificate: {
    name: "pactffi_get_tls_ca_certificate",
    args: [],
    returns: "cstring"
  },
  pactffi_create_mock_server_for_pact: {
    name: "pactffi_create_mock_server_for_pact",
    args: ["u16", "cstring", "u8"],
    returns: "i32"
  },
  pactffi_create_mock_server_for_transport: {
    name: "pactffi_create_mock_server_for_transport",
    args: ["pointer", "cstring", "u16", "cstring", "cstring"],
    returns: "i32"
  },
  pactffi_mock_server_matched: {
    name: "pactffi_mock_server_matched",
    args: ["i32"],
    returns: "bool"
  },
  pactffi_mock_server_mismatches: {
    name: "pactffi_mock_server_mismatches",
    args: ["i32"],
    returns: "cstring"
  },
  pactffi_cleanup_mock_server: {
    name: "pactffi_cleanup_mock_server",
    args: ["i32"],
    returns: "bool"
  },
  pactffi_write_pact_file: {
    name: "pactffi_write_pact_file",
    args: ["i32", "cstring", "bool"],
    returns: "i32"
  },
  pactffi_mock_server_logs: {
    name: "pactffi_mock_server_logs",
    args: ["i32"],
    returns: "cstring"
  },
  pactffi_generate_datetime_string: {
    name: "pactffi_generate_datetime_string",
    args: ["cstring"],
    returns: "pointer"
  },
  pactffi_check_regex: {
    name: "pactffi_check_regex",
    args: ["cstring", "cstring"],
    returns: "u8"
  },
  pactffi_generate_regex_value: {
    name: "pactffi_generate_regex_value",
    args: ["cstring"],
    returns: "pointer"
  },
  pactffi_free_string: {
    name: "pactffi_free_string",
    args: ["cstring"],
    returns: "void"
  },
  pactffi_new_pact: {
    name: "pactffi_new_pact",
    args: ["cstring", "cstring"],
    returns: "pointer"
  },
  pactffi_new_interaction: {
    name: "pactffi_new_interaction",
    args: ["u16", "cstring"],
    returns: "u32"
  },
  pactffi_new_message_interaction: {
    name: "pactffi_new_message_interaction",
    args: ["u16", "cstring"],
    returns: "u32"
  },
  pactffi_new_sync_message_interaction: {
    name: "pactffi_new_sync_message_interaction",
    args: ["pointer", "cstring"],
    returns: "pointer"
  },
  pactffi_upon_receiving: {
    name: "pactffi_upon_receiving",
    args: ["u32", "cstring"],
    returns: "u8"
  },
  pactffi_given: {
    name: "pactffi_given",
    args: ["u32", "cstring"],
    returns: "u8"
  },
  pactffi_interaction_test_name: {
    name: "pactffi_interaction_test_name",
    args: ["u32", "cstring"],
    returns: "u32"
  },
  pactffi_given_with_param: {
    name: "pactffi_given_with_param",
    args: ["u32", "cstring", "cstring", "cstring"],
    returns: "u8"
  },
  pactffi_with_request: {
    name: "pactffi_with_request",
    args: ["u32", "cstring", "cstring"],
    returns: "u8"
  },
  pactffi_with_query_parameter: {
    name: "pactffi_with_query_parameter",
    args: ["u32", "cstring", "usize", "cstring"],
    returns: "u8"
  },
  pactffi_with_query_parameter_v2: {
    name: "pactffi_with_query_parameter_v2",
    args: ["u32", "cstring", "usize", "cstring"],
    returns: "u8"
  },
  pactffi_with_specification: {
    name: "pactffi_with_specification",
    args: ["pointer", "i32"],
    returns: "u8"
  },
  pactffi_with_pact_metadata: {
    name: "pactffi_with_pact_metadata",
    args: ["u16", "cstring", "cstring", "cstring"],
    returns: "u8"
  },
  pactffi_with_header: {
    name: "pactffi_with_header",
    args: ["u32", "i32", "cstring", "usize", "cstring"],
    returns: "u8"
  },
  pactffi_with_header_v2: {
    name: "pactffi_with_header_v2",
    args: ["u32", "i32", "cstring", "usize", "cstring"],
    returns: "u8"
  },
  pactffi_response_status: {
    name: "pactffi_response_status",
    args: ["u32", "u16"],
    returns: "u8"
  },
  pactffi_with_body: {
    name: "pactffi_with_body",
    args: ["u32", "i32", "cstring", "cstring"],
    returns: "u8"
  },
  pactffi_with_binary_file: {
    name: "pactffi_with_binary_file",
    args: ["u32", "i32", "cstring", "u8", "usize"],
    returns: "bool"
  },
  pactffi_with_multipart_file: {
    name: "pactffi_with_multipart_file",
    args: ["u32", "i32", "cstring", "cstring", "cstring"],
    returns: "pointer"
  },
  pactffi_pact_handle_get_message_iter: {
    name: "pactffi_pact_handle_get_message_iter",
    args: ["u16"],
    returns: "pointer"
  },
  pactffi_pact_handle_get_sync_message_iter: {
    name: "pactffi_pact_handle_get_sync_message_iter",
    args: ["u16"],
    returns: "pointer"
  },
  pactffi_pact_handle_get_sync_http_iter: {
    name: "pactffi_pact_handle_get_sync_http_iter",
    args: ["u16"],
    returns: "pointer"
  },
  pactffi_new_message_pact: {
    name: "pactffi_new_message_pact",
    args: ["cstring", "cstring"],
    returns: "u16"
  },
  pactffi_new_message: {
    name: "pactffi_new_message",
    args: ["u16", "cstring"],
    returns: "u32"
  },
  pactffi_message_expects_to_receive: {
    name: "pactffi_message_expects_to_receive",
    args: ["u32", "cstring"],
    returns: "void"
  },
  pactffi_message_given: {
    name: "pactffi_message_given",
    args: ["u32", "cstring"],
    returns: "void"
  },
  pactffi_message_given_with_param: {
    name: "pactffi_message_given_with_param",
    args: ["u32", "cstring", "cstring", "cstring"],
    returns: "void"
  },
  pactffi_message_with_contents: {
    name: "pactffi_message_with_contents",
    args: ["u32", "cstring", "u8", "cstring"],
    returns: "void"
  },
  pactffi_message_with_metadata: {
    name: "pactffi_message_with_metadata",
    args: ["u32", "cstring", "cstring"],
    returns: "void"
  },
  pactffi_message_reify: {
    name: "pactffi_message_reify",
    args: ["u32"],
    returns: "cstring"
  },
  pactffi_write_message_pact_file: {
    name: "pactffi_write_message_pact_file",
    args: ["u16", "cstring", "bool"],
    returns: "i32"
  },
  pactffi_with_message_pact_metadata: {
    name: "pactffi_with_message_pact_metadata",
    args: ["u16", "cstring", "cstring", "cstring"],
    returns: "void"
  },
  pactffi_pact_handle_write_file: {
    name: "pactffi_pact_handle_write_file",
    args: ["u16", "cstring", "u8"],
    returns: "i32"
  },
  pactffi_new_async_message: {
    name: "pactffi_new_async_message",
    args: ["u16", "cstring"],
    returns: "u32"
  },
  pactffi_free_pact_handle: {
    name: "pactffi_free_pact_handle",
    args: ["u16"],
    returns: "u32"
  },
  pactffi_free_message_pact_handle: {
    name: "pactffi_free_message_pact_handle",
    args: ["u16"],
    returns: "u32"
  },
  pactffi_verify: {
    name: "pactffi_verify",
    args: ["cstring"],
    returns: "i32"
  },
  pactffi_verifier_new: {
    name: "pactffi_verifier_new",
    args: [],
    returns: "pointer"
  },
  pactffi_verifier_new_for_application: {
    name: "pactffi_verifier_new_for_application",
    args: ["cstring", "cstring"],
    returns: "pointer"
  },
  pactffi_verifier_shutdown: {
    name: "pactffi_verifier_shutdown",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_verifier_set_provider_info: {
    name: "pactffi_verifier_set_provider_info",
    args: ["cstring", "cstring", "cstring", "cstring", "u16", "cstring"],
    returns: "void"
  },
  pactffi_verifier_add_provider_transport: {
    name: "pactffi_verifier_add_provider_transport",
    args: ["pointer", "cstring", "u16", "cstring", "cstring"],
    returns: "void"
  },
  pactffi_verifier_set_filter_info: {
    name: "pactffi_verifier_set_filter_info",
    args: ["pointer", "cstring", "cstring", "u8"],
    returns: "void"
  },
  pactffi_verifier_set_provider_state: {
    name: "pactffi_verifier_set_provider_state",
    args: ["pointer", "cstring", "u8", "u8"],
    returns: "void"
  },
  pactffi_verifier_set_verification_options: {
    name: "pactffi_verifier_set_verification_options",
    args: ["pointer", "u8", "u64"],
    returns: "i32"
  },
  pactffi_verifier_set_coloured_output: {
    name: "pactffi_verifier_set_coloured_output",
    args: ["pointer", "u8"],
    returns: "i32"
  },
  pactffi_verifier_set_no_pacts_is_error: {
    name: "pactffi_verifier_set_no_pacts_is_error",
    args: ["pointer", "u8"],
    returns: "i32"
  },
  pactffi_verifier_set_publish_options: {
    name: "pactffi_verifier_set_publish_options",
    args: ["pointer", "cstring", "pointer", "cstring", "u16", "cstring"],
    returns: "i32"
  },
  pactffi_verifier_set_consumer_filters: {
    name: "pactffi_verifier_set_consumer_filters",
    args: ["pointer", "pointer", "u16"],
    returns: "void"
  },
  pactffi_verifier_add_custom_header: {
    name: "pactffi_verifier_add_custom_header",
    args: ["pointer", "cstring", "cstring"],
    returns: "void"
  },
  pactffi_verifier_add_file_source: {
    name: "pactffi_verifier_add_file_source",
    args: ["pointer", "cstring"],
    returns: "void"
  },
  pactffi_verifier_add_directory_source: {
    name: "pactffi_verifier_add_directory_source",
    args: ["pointer", "cstring"],
    returns: "void"
  },
  pactffi_verifier_url_source: {
    name: "pactffi_verifier_url_source",
    args: ["pointer", "cstring", "cstring", "cstring", "cstring"],
    returns: "void"
  },
  pactffi_verifier_broker_source: {
    name: "pactffi_verifier_broker_source",
    args: ["pointer", "cstring", "cstring", "cstring", "cstring"],
    returns: "void"
  },
  pactffi_verifier_broker_source_with_selectors: {
    name: "pactffi_verifier_broker_source_with_selectors",
    args: [
      "pointer",
      "cstring",
      "cstring",
      "cstring",
      "cstring",
      "u8",
      "cstring",
      "cstring",
      "u16",
      "cstring",
      "cstring",
      "u16",
      "cstring",
      "u16"
    ],
    returns: "void"
  },
  pactffi_verifier_execute: {
    name: "pactffi_verifier_execute",
    args: ["pointer"],
    returns: "i32"
  },
  pactffi_verifier_cli_args: {
    name: "pactffi_verifier_cli_args",
    args: [],
    returns: "pointer"
  },
  pactffi_verifier_logs: {
    name: "pactffi_verifier_logs",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_verifier_logs_for_provider: {
    name: "pactffi_verifier_logs_for_provider",
    args: ["cstring"],
    returns: "cstring"
  },
  pactffi_verifier_output: {
    name: "pactffi_verifier_output",
    args: ["pointer", "u8"],
    returns: "cstring"
  },
  pactffi_verifier_json: {
    name: "pactffi_verifier_json",
    args: ["pointer"],
    returns: "cstring"
  },
  pactffi_using_plugin: {
    name: "pactffi_using_plugin",
    args: ["pointer", "cstring", "cstring"],
    returns: "u32"
  },
  pactffi_cleanup_plugins: {
    name: "pactffi_cleanup_plugins",
    args: ["pointer"],
    returns: "void"
  },
  pactffi_interaction_contents: {
    name: "pactffi_interaction_contents",
    args: ["pointer", "u8", "cstring", "cstring"],
    returns: "u32"
  }
} as const;
