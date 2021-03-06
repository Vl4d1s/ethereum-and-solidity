const path = require("path");
const fs = require("fs");
const solc = require("solc"); // solc is a Solidity compiler

const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(lotteryPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "Lottery.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
    optimizer: {
      enabled: true,
    },
  },
};

const {
  abi: interface,
  evm: {
    bytecode: { object },
  },
} = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  "Lottery.sol"
].Lottery;

module.exports = { interface, object };
