---
title: loadProgramKeys
description: loadProgramKeys
---

`loadProgramKeys` loads the necessary keys to generate the proofs for the transaction. It goes through the imports and functions from the `main.aleo` in the same directory and synthesize the proving & verifying keys needed to generate a zero-knowledge proof. The keys are stored in `build`. We recommend you run this before your service starts.

## Usage

Make sure you include your program's `main.aleo` and `program.json` in the same directory.

```ts
await loadProgramKeys();
```
