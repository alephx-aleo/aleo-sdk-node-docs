---
title: buildExecutionTransaction
description: buildExecutionTransaction
---

`buildExecutionTransaction` builds an Aleo execution transaction that is not broadcasted to the network. To broadcast your transaction, please look into [Aleo documentation](https://developer.aleo.org/testnet/public_endpoints/transaction_broadcast/).

### Usage

```ts
const options = {
  privateKey,
  endpoint: "https://api.explorer.provable.com/v1",
  functionName: "hello",
  inputs: ["5u32", "5u32"],
  programId: "hello_hello.aleo",
  priorityFee: BigInt(0),
  baseFee: BigInt(11323),
  enableLog: true,
};
const execution = await buildExecutionTransaction(options);
```

### Options

`buildExecutionTransaction` accepts 1 parameter (`BuildExecutionOptions`), the options for building the execution transaction.

| Parameter    | Type     | Description                                      |
| ------------ | -------- | ------------------------------------------------ |
| baseFee      | bigint   | Base fee to execute transaction in microcredits  |
| endpoint     | string   | Aleo network API                                 |
| functionName | string   | Name of function to be executed                  |
| inputs       | string[] | Array of input values in string                  |
| priorityFee  | bigint   | Priority fee for the transaction in microcredits |
| privateKey   | string   | Private key                                      |
| programId    | string   | Aleo program ID. It should end in `.aleo`        |
| enableLog    | boolean  | Enable logging for debugging purposes            |

### Return

An execution result object will be returned. The interface for `ExecutionResult` is as follows.

```ts
interface ExecutionResult {
  executionTime: string;
  id: string;
  transaction: string;
}
```

| Property      | Type   | Description                                                        |
| ------------- | ------ | ------------------------------------------------------------------ |
| executionTime | string | Execution time for building the transaction in seconds             |
| id            | string | Transaction ID                                                     |
| transaction   | string | Stringified transaction payload to be used to broadcast to network |
