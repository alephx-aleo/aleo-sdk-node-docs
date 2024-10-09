---
title: Quick Start
description: Quickly start running a program execution here
---

Aleo SDK Node is a SDK to run Aleo program execution. A SDK built on top of `snarkVM` and provides easy to use APIs to run program execution in Node.js.

Currently, it only supports:
1. Loading program keys for program execution
2. Build program execution transaction

For other use cases, please use [@provablehq/sdk](https://www.npmjs.com/package/@provablehq/sdk).

## Installation
To install `aleo-sdk-node`, please run the following commands in your terminal

```bash
npm install aleo-sdk-node
```

## Usage
1. Load program keys
Make sure you include `main.aleo` and `program.json` in the same directory. Then run `loadProgramKeys`.
```ts
await loadProgramKeys();
```

2. Build execution transaction
Use `buildExecutionTransaction` to build your transaction. Make sure you save the execution results for broadcasting to the network.
```ts
const privateKey = process.env.PRIVATE_KEY;
const options = {
    privateKey,
    endpoint: "https://api.explorer.provable.com/v1",
    functionName: "hello",
    inputs: [
        "5u32",
        "5u32"
    ],
    programId: "hello_hello.aleo",
    priorityFee: BigInt(0),
    baseFee: BigInt(11323),
    enableLog: true // NOTE: For debugging purposes
};
const execution = await buildExecutionTransaction(options);
```

3. Broadcast transaction to network
Using the execution transaction result, broadcast it to the network.
```ts
const txn = execution.transaction // NOTE: From output of step (2) build execution transaction
const url = new URL('https://api.explorer.provable.com/v1/testnet/transaction/broadcast');
const config = {
    body: txn,
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    }
}
const res = await fetch(url, config);
const data = await res.json();
```

