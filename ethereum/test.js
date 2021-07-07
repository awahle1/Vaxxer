// 0x26d6E6df51bBC699401330F2aF24e830892AAF7E
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compilerOutput = require("./compile");
const interface = compilerOutput.abi;
const bytecode = compilerOutput.evm.bytecode.object;

let vaxxer;
let accounts;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  vaxxer = await new web3.eth.Contract(interface)
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '2000000' });
});

describe('Vaxxer Contract', () => {
  it('deploys a contract', () => {
    assert.ok(vaxxer.options.address);
  });

  it('shows the owner\'s address', async () => {
    const owner = await vaxxer.methods.owner().call();
    assert.equal(owner, accounts[0]);
  });

  it('allows the owner to add validators', async () => {
    await vaxxer.methods.addValidator(accounts[1]).send({from: accounts[0], gas:'1000000'});
    assert(vaxxer.methods.validators(accounts[1]));
  });

  it('allows validators to add records', async () => {
    await vaxxer.methods.addValidator(accounts[1]).send({from: accounts[0], gas:'1000000'});
    const first = "Elon";
    const last = "Musk";
    const brand = "moderna";
    const dose = "XY3689";
    const dob = 03141989;
    const address = accounts[2];
    await vaxxer.methods.addRecord(first, last, brand, dose, dob, address)
      .send({from: accounts[1], gas: '1000000'});
    assert(await vaxxer.methods.inSystem(address));
  });

  it('adds a one and done record', async () => {
    const first = "John";
    const last = "Doe";
    const brand = "johnson";
    const dose = "AB1234";
    const dob = 03151967;
    const address = accounts[3];
    await vaxxer.methods.addRecord(first, last, brand, dose, dob, address)
      .send({from: accounts[0], gas: '1000000'});
    assert(await vaxxer.methods.inSystem(address));
    assert(await vaxxer.methods.fullyVaxxed(address));
  });

  it('adds two doses and marks fully vaxxed', async () => {
    const first = "Mike";
    const last = "Wazowski";
    const brand = "pfizer";
    let dose = "DC1234";
    const dob = 12151987;
    const address = accounts[4];
    await vaxxer.methods.addRecord(first, last, brand, dose, dob, address)
      .send({from: accounts[0], gas: '1000000'});
    assert(await vaxxer.methods.inSystem(address));
    dose = "AZ9876";
    await vaxxer.methods.addRecord(first, last, brand, dose, dob, address)
      .send({from: accounts[0], gas: '1000000'});
    assert(await vaxxer.methods.fullyVaxxed(address));
  });

});
