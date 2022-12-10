## Tutorial Prerequisites

- Nothing! Just you and a bit of time

## Install Deno

> I know, Deno huh? It's just to setup the correct library. I'll write one a Bun soon.

1. `curl -fsSL https://deno.land/x/install/install.sh | sh`{{exec}}
1. `echo 'export DENO_INSTALL="/root/.deno"' >> ~/.bashrc `{{exec}}
1. `echo 'export PATH="$DENO_INSTALL/bin:$PATH"' >> ~/.bashrc `{{exec}}
1. `source ~/.bashrc`{{exec}}
1. `deno --version`{{exec}}

## Get the Pact FFI

1. `deno run -A --unstable https://deno.land/x/pact/src/downloadFfi.ts --run`{{exec}}

## Install Bun


1. `curl -fsSL https://bun.sh/install | bash`{{exec}}
2. `source ~/.bashrc`{{exec}}
3. `bun --version`


## Setup your first project

1. `mkdir getting_started_with_pact_bun`{{exec}}
1. `cd getting_started_with_pact_bun`{{exec}}
1. `bun init`{{exec}}
1. `bun add pact-bun`{{exec}}
1. `touch helloPactBun.ts`{{exec}}

```ts
import { PactBun, Pact } from "pact-bun";
const pact = new PactBun();
console.log(pact.getPactFfiVersion());
```{{copy}}

1. `bun run helloPactBun.ts`{{exec}}

## Run the Examples

1. `git clone https://github.com/YOU54F/pact-bun`{{exec}}
1. `cd pact-bun`{{exec}}
1. `bun install`{{exec}}
1. `curl -fsSL https://raw.githubusercontent.com/pact-foundation/pact-plugins/main/scripts/install-plugin-cli.sh | bash`{{exec}}
1. `export PATH="/root/bin/:$PATH"' >> ~/.bashrc`{{exec}}
1. `source ~/.bashrc`{{exec}}
1. `pact-plugin-cli -y install https://github.com/pactflow/pact-protobuf-plugin/releases/latest`{{exec}}

## gRPC AreaCalculator

1. `bun run src/grpc.consumer.test.ts`{{exec}}

## HTTP Service

1. `bun run src/http.consumer.test.ts`{{exec}}

##  Pact Verifier

1. `bun run src/verifier.test.ts`{{exec}}

## Pact Broker

1. `curl pact.saf.dev -Lso - | bash -s -- broker deploy mybroker 8000`{{exec}}
    1. Open the [Pact Broker]({{TRAFFIC_HOST1_8000}}) and observe it's contents.
    2. You can check the Docker logs for the Pact Broker, `docker logs mybroker_pact_broker_1`{{exec}}
    3. Restart the container if there was any issues `docker restart mybroker_pact_broker_1`{{exec}}
