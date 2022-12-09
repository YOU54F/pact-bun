# pact-bun

[Pact](http://pact.io/) Contract Testing with [Bun](https://bun.sh/)


<p align="center">
  <a href="https://bun.sh"><img src="https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png" alt="Logo" height=80 width=80></a><img src="https://i.pinimg.com/originals/01/9e/e0/019ee012b9ca5318b09d2f5696fc54ee.png" height="80" width="80"><img src="https://user-images.githubusercontent.com/19932401/206557102-f5141b7d-a4f4-441b-84f6-ede3552c4696.png" height="80" width="80">
  <br />
  <br />
</p>

Try out Pact-Bun in your browser, via our [interactive tutorial](https://killercoda.com/pact-bun/course/tutorials/pact-bun)

## Pre-Reqs

- [Bun](https://bun.sh/) for your platform
- [Pact FFI](https://github.com/pact-foundation/pact-reference/tree/master/rust/pact_ffi#pact-ffi) Library
  - [Releases](https://github.com/pact-foundation/pact-reference/releases?q=%22Pact+FFI+Library%22&expanded=true)


| OS      | Architecture | Supported |
| ------- | ------------ | --------- |
| OSX     | x86_64       | ✅        |
| OSX     | arm          | ✅        |
| Linux   | x86_64       | ✅        |
| Linux   | arm          | ✅        |
| Windows | x86_64       | ✅        | 

* Bun only supports Windows via WSL. 
* You can use [pact-js](https://github.com/pact-foundation/pact-js) / [deno-pact](https://github.com/YOU54F/deno-pact) as alternative TypeScript/JavaScript Pact libraries.

You can install the correct FFI library with the following command.

```sh
deno run -A --unstable https://deno.land/x/pact/src/downloadFfi.ts --run
```

- Checks if it exists in `${HOME}/.pact/ffi/<pact_ffi_version>`
- Downloads the necessary library for your architecture
- Executes the library to ensure it works

## Installing

In a new project:

```bash
bun init
bun add pact-bun
```

In an new project:

```bash
bun add pact-bun
```

## How to get started

- `bun run helloPactBun.ts`

```ts
import { PactBun, Pact } from "pact-bun";
const pact = new PactBun();
console.log(pact.getPactFfiVersion());
```

- `bun run helloPactBun.ts`

## Examples

Run an example by

1. `git clone git@github.com:YOU54F/pact-bun.git`
2. `cd pact-bun`
3. `bun install`
4. `bun run <name of test>`

### gRPC Area Calculator

`bun run src/grpc.consumer.test.ts`

- The Proto File -
  [area_calculator.proto](./src/usage/areaCalculator/area_calculator.proto)
- The Client Pact test
  [grpc.consumer.test.ts](./src/grpc.consumer.test.ts)

### HTTP service

`bun run src/http.consumer.test.ts`

- The Client Pact test
  [http.consumer.test.ts](./src/http.consumer.test.ts)

### Pact Verifications

`bun run src/verifier.test.ts`

- Pact verification task, tests multiple transport protocols
  [verifier.test.ts](./src/usage/verifier.test.ts)

### Docker

If you want to try out a Pact Broker to publish, view and retrieve your pact files, you can try out this quick start quick.

You'll need `docker-compose`.

- `curl pact.saf.dev -Lso - | bash -s -- broker deploy mybroker 8000`
