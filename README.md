# Circom Gadget: Keccak hashing algorithm

This repository implements the [standard structure for a remote Circom Gadget](https://github.com/lurk-lab/template-circom-gadget)
over a Circom circuit for the Keccak hasing algorithm.

> ⚠️ : This is still experimental, do not use in production.

## Overview

The Keccak circuit we are using expects a 256-bits input and outputs and 256-bits digest. It has to be noted that it expects
the bits of each bytes to be ordered from the to be ordered from the least significant (rightmost) to the most significant 
(leftmost).

The compiled assets (r1cs & wasm files) for each versions are accessible in their respective
[releases](https://github.com/lurk-lab/keccak-circom-gadget/releases).

To understand how releases are handled, please refer to the Circom Gadget template README.

## Test

Install dependencies:
```shell
$ npm i
```

And run tests:
```shell
$ npm run test
```

## Contributing

When contributing, ensures that you properly update the `Unreleased` part of the Changelog. The details written in the section
will be automatically used to generate the next release description.

## Credits

This repository is based on the development done by [@vocdoni](https://github.com/vocdoni/keccak256-circom/).