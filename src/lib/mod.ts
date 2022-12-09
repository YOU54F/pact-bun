import { PactFfi } from "./types";
import { PactFfi_SYMBOLS } from "./symbols";
export * from "./safe-ffi";
import { dlopen, FFIType, suffix } from "ffi";

export const {
  ExpressionValueType,
  InteractionPart,
  LevelFilter,
  MatchingRuleResult_Tag,
  PactSpecification,
  StringResult_Tag,
} = PactFfi;

// export type {
//   ExpressionValueType,
//   InteractionPart,
//   LevelFilter,
//   MatchingRuleResult_Tag,
//   PactSpecification,
//   StringResult_Tag
// };

import * as path from "path";
import { homedir, platform } from "os";
export const PACT_FFI_VERSION = "v0.3.15";
export const PACT_FFI_LOCATION = path.join(
  homedir() ?? "",
  ".pact",
  "ffi",
  PACT_FFI_VERSION
);
export const libraryFilename =
  platform() === "darwin"
    ? "libpact_ffi.dylib"
    : platform() === "win32"
    ? "pact_ffi.dll"
    : "libpact_ffi.so";

export const libraryLocation = path.join(PACT_FFI_LOCATION, libraryFilename);

export function loadPactFfi(path: string): typeof PactFfi {
  const lib = dlopen(path, PactFfi_SYMBOLS);

  return { ...lib.symbols, $$close: () => lib.close() } as never;
}
