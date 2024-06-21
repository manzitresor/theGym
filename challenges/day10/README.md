## Convert boolean values to strings 'Yes' or 'No'.

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

## Promise State

As you know, a promise is in one of these states: pending, fulfilled, rejected.

Implement the async function getState that determines a state of a promise.

```sh
const p = Promise.resolve();
const state = await getState(p); // === "fulfilled"

const p = Promise.reject();
const state = await getState(p); // === "rejected"

const p = new Promise(() => {});
const state = await getState(p); // === "pending"
```