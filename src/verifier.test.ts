import * as path from 'path'
import { PactBun, Pact } from "./pactBun";


const pactDir = path.join(process.cwd(), "pacts");
const httpPort = 3000;
const grpcPort = 37757;
const providerName = "area-calculator-provider";
const providerVersion = "foo-sha-123";
console.log("🚀 executing verifier");

// Get yourself a verifier
const pact = new PactBun();

pact
  .verifier()
  .setupLoggers(Pact.LevelFilter.LevelFilter_Info)
  // **** Setup applicable transports

  // You can set the provider info for a consumer if they have a single transport
  // this is also where you set the provider name
  // if you use a different scheme, like tcp, it will read the transport from the
  // pact interaction

  .verifierSetProviderInfo({
    name: providerName,
    port: httpPort,
  })
  .verifierAddProviderTransports([
    { protocol: "grpc", port: grpcPort, scheme: "tcp" },
  ])
  // **** You could add just provider transports,
  // and include one for http (regular pact mock verifier)

  // .verifierAddProviderTransports([
  //   { protocol: "grpc", port: grpcPort, scheme: "tcp" },
  //   { protocol: "http", port: httpPort, scheme: "http" }
  // ])

  // **** Verification opts

  .verifierSetVerificationOptions({
    disableSslVerification: false,
    requestTime: 5000,
  })
  // **** Set your publishing opts

//   .verifierSetPublishOptions({
//     providerVersion,
//     providerBranch: "main",
//     providerTags: ["some", "tags", "yo"],
//     buildUrl: "http://funkyurl.com",
//   })


// 2022-12-09T22:31:34.611225Z  INFO ThreadId(01) pact_ffi: hello from ffi version: 0.3.15 source="pact-deno-ffi"
// 473 |   }
// 474 | 
// 475 |   private arr2Ptrs(arr: string[]) {
// 476 |     const buffer = new BigInt64Array(arr.length);
// 477 |     arr.map((a, i) => {
// 478 |       buffer[i] = BigInt(a);
//                       ^
// SyntaxError: Failed to parse String to BigInt
//       at /Users/saf/dev/ffi_stuff/pact-bun/src/pactBun.ts:478:18
//       at arr2Ptrs (/Users/saf/dev/ffi_stuff/pact-bun/src/pactBun.ts:477:4)
//       at verifierSetPublishOptions (/Users/saf/dev/ffi_stuff/pact-bun/src/pactBun.ts:448:8)
//       at /Users/saf/dev/ffi_stuff/pact-bun/src/verifier.test.ts:48:3





  // **** You can filter on consumers

  // .verifierSetConsumerFilters({ names: ["area-calculator-consumer"] })

  // **** You can filter on consumers and provider state/no state
  // .verifierSetFilterInfo({
  //   description:'yolo'
  // })

  // **** Various ways to get pact files

  .verifierAddDirectorySource({ pathToDir: pactDir })
  // .verifierBrokerSource({
  //   url:"http://localhost:8001"
  // })

  // .verifierBrokerSourceWithSelectors({
  //   url: "http://localhost:8001",
  //   providerTags: ["main"],
  //   providerBranch: "main",
  //   consumerVersionTags: ["foo"],
  //   consumerVersionSelectors: [{ matchingBranch: true }],
  //   enablePending: true,
  //   includeWipPactsSince: true
  // })

  // .verifierAddFileSource({
  //   pathToFile:
  //     "./pacts/area-calculator-consumer-area-calculator-provider.json"
  // })

  // .verifierAddUrlSource({
  //   url:
  //     "http://0.0.0.0:8001/pacts/provider/area-calculator-provider/consumer/area-calculator-consumer/latest",
  // })

  .verifierExecute();