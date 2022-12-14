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

  .verifierSetPublishOptions({
    providerVersion,
    providerBranch: "main",
    providerTags: ["some", "tags", "yo"],
    buildUrl: "http://funkyurl.com",
  })





  // **** You can filter on consumers

  .verifierSetConsumerFilters({ names: ["area-calculator-consumer"] })

  // **** You can filter on consumers and provider state/no state
  // .verifierSetFilterInfo({
  //   description:'yolo'
  // })

  // **** Various ways to get pact files

  // .verifierAddDirectorySource({ pathToDir: pactDir })
  .verifierBrokerSource({
    url:"http://localhost:8000"
  })

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