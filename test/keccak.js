const path = require("path");

const chai = require("chai");
const assert = chai.assert;

const wasm_tester = require("circom_tester").wasm;

const utils = require("./utils");
const keccak256 = require("keccak256");

describe("Keccak 32bytes full hash test", function () {
    this.timeout(100000);

    let cir;
    before(async () => {
		cir = await wasm_tester(path.join(__dirname, "circuits", "keccak_256_256_test.circom"));
		await cir.loadConstraints();
		console.log("n_constraints", cir.constraints.length);
    });

    it ("Keccak 1 (testvector generated from go)", async () => {
		const input = [116, 101, 115, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		const expectedOut = [37, 17, 98, 135, 161, 178, 88, 97, 125, 150, 143,
			65, 228, 211, 170, 133, 153, 9, 88, 212, 4, 212, 175, 238, 249,
			210, 214, 116, 170, 85, 45, 21];

		const inIn = utils.bytesToBits(input);
		const witness = await cir.calculateWitness({ "in": inIn }, true);
		const stateOut = witness.slice(1, 1+(32*8));
		const stateOutBytes = utils.bitsToBytes(stateOut);

		// console.log(stateOutBytes, expectedOut);
		assert.deepEqual(stateOutBytes, expectedOut);
    });
});