import { FfiSpecificationVersion } from './pactcore.ffi';
import { ConsumerMessagePact, ConsumerPact } from './pactcore.d';
export declare type LogLevel = 'debug' | 'error' | 'info' | 'trace' | 'warn';
export declare const makeConsumerPact: (consumer: string, provider: string, version?: FfiSpecificationVersion, logLevel?: LogLevel) => ConsumerPact;
export declare const makeConsumerMessagePact: (consumer: string, provider: string, version?: FfiSpecificationVersion, logLevel?: LogLevel) => ConsumerMessagePact;
export declare const makeConsumerAsyncMessagePact: (consumer: string, provider: string, version?: FfiSpecificationVersion, logLevel?: LogLevel) => ConsumerMessagePact;

export * from './pactcore.d';
