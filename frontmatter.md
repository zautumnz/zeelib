# zeelib

Utility library in TypeScript, with a focus on Node and FP utils and emphasis on
_not_ rewriting builtin features.

* [npm](https://npmjs.com/package/zeelib)
* [Changes](./CHANGELOG.md)
* [Contributing](./.github/CONTRIBUTING.md)
* [License (MIT)](./LICENSE.md)

----

## Installation

`npm i zeelib`

## Usage

See the docs below for details (generated from types and comments). Example:

```typescript
import * as z from 'zeelib'

const answer = await z.prompt('Pick a letter')
if (z.isEmpty(answer)) process.exit(1)
```

----

<details>
  <summary>Full Docs</summary>

