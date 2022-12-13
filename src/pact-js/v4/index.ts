
import { ConsumerPact } from '../pact.d';
import {makeConsumerPact} from '../consumer'
import { UnconfiguredInteraction } from './http/index';
import { PactV4Options, V4UnconfiguredInteraction } from './http/types';
import { V4ConsumerPact } from './types';
// import { version as pactPackageVersion } from '../../package.json';
import { V4UnconfiguredSynchronousMessage } from './message/types';
import { UnconfiguredSynchronousMessage } from './message/index';

export class PactV4 implements V4ConsumerPact {
  private pact: ConsumerPact;

  constructor(private opts: PactV4Options) {
    // if (!Deno.env.get("ENABLE_FEATURE_V4")) {
    // // if (!process.env.ENABLE_FEATURE_V4) {
    //   throw Error(
    //     "The v4 package is currently in beta and requires the 'ENABLE_FEATURE_V4' environment variable to be set"
    //   );
    // }

    this.pact = makeConsumerPact(
      opts.consumer,
      opts.provider,
      opts.spec,
      opts.logLevel
    );

    this.pact.addMetadata('pact-js', 'version', 'pactPackageVersion');
  }

  addInteraction(): V4UnconfiguredInteraction {
    return new UnconfiguredInteraction(
      this.pact,
      this.pact.newInteraction(''),
      this.opts
    );
  }

  addSynchronousInteraction(
    description: string
  ): V4UnconfiguredSynchronousMessage {
    return new UnconfiguredSynchronousMessage(
      this.pact,
      this.pact.newSynchronousMessage(description),
      this.opts
    );
  }
}
