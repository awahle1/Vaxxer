const HDWalletProvider = require("@truffle/hdwallet-provider");
import infuraUrl = '/secrets';
const mnemonic = '/secrets';
const Web3 = require("web3");
const provider = new HDWalletProvider(mnemonic, infuraUrl);
const web3 = new Web3(provider);

const compilerOutput = require("./compile");
const abi = compilerOutput.abi;
const bytecode = compilerOutput.evm.bytecode.object;

async function deploy() {
  const accounts = await web3.eth.getAccounts();
  console.log("deploying from", accounts[0]);
  const contract = await new web3.eth.Contract(abi)
    .deploy({
      data: bytecode,
      arguments: [],
    })
    .send({
      from: accounts[0],
      gas: "10000000",
    });
  provider.engine.stop();
  console.log("deployed to", contract.options.address);
}

deploy();
