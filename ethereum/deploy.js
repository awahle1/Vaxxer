const HDWalletProvider = require("@truffle/hdwallet-provider");
const infuraUrl = "https://rinkeby.infura.io/v3/d42870b1087941f5bf9d2799a66ae36a";
const mnemonic = 'spring arm add basket double reunion umbrella away library roof breeze park';
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
