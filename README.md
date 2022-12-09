# pact-bun

<p align="center">
  <a href="https://bun.sh"><img src="https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png" alt="Logo" height=80 width=80></a><img src="https://i.pinimg.com/originals/01/9e/e0/019ee012b9ca5318b09d2f5696fc54ee.png" height="80" width="80"><img src="https://user-images.githubusercontent.com/19932401/206557102-f5141b7d-a4f4-441b-84f6-ede3552c4696.png" height="80" width="80">
  <br />
  <br />
</p>


Pretty early demo of utilising [Pact](http://pact.io/) with [Bun](https://bun.sh/)

To install dependencies:

```bash
bun init
bun add pact-bun
```

To use:

```bash

import {
    cstr,
    loadPactFfi,
    libraryLocation,
    PactSpecification,
    LevelFilter,
    InteractionPart
  } from "pact-bun";


const Pact = loadPactFfi(libraryLocation);
console.log("Hello via Bun!",Pact.pactffi_version());

Pact.pactffi_logger_init();
Pact.pactffi_logger_attach_sink(cstr("stdout"), LevelFilter.LevelFilter_Info);
Pact.pactffi_logger_apply();
Pact.pactffi_log_message(cstr("pact-bun"),
  cstr("INFO"),
  cstr(`hello from ffi version: ${Pact.pactffi_version()}`));

```

Check out

- [grpc.consumer.test.ts](./src/grpc.consumer.test.ts)
- [http.consumer.test.ts](./src/http.consumer.test.ts)
