// const Web3 = require('web3');

import Web3 from 'web3';
// window.Tx = require('ethereumjs-tx').Transaction;
// Promise = require('bluebird');
// const bitcore = require('bitcore-lib');
import { Transaction } from 'ethereumjs-tx';
import Common from 'ethereumjs-common';


// const web3 = new Web3();
window.web3 = new Web3();

window.web3.setProvider(new Web3.providers.HttpProvider('https://fsn.dev/api'));

// eslint-disable-next-line import/prefer-default-export,max-len
export async function buildTx(fromAddress, myContract, contractAddress, fun, funParams, privateKey) {
  // eslint-disable-next-line
  // console.log('buildTx', fromAddress, ABI, contractAddress, fun, funParams);
  // const myContract = new window.web3.eth.Contract(JSON.parse(ABI), contractAddress);
  const count = await window.web3.eth.getTransactionCount(fromAddress);
  const gasLimit = 200000;
  const data = await myContract.methods[fun](...funParams).encodeABI();

  const gasPrice = await window.web3.eth.getGasPrice();

  const rawTransaction = {
    from: fromAddress,
    nonce: window.web3.utils.toHex(count),
    gasPrice: window.web3.utils.toHex(gasPrice),
    gasLimit: window.web3.utils.toHex(gasLimit),
    to: contractAddress,
    value: '0x0',
    data,
  };

  const FSN_MAIN = Common.forCustomChain('mainnet', {
    name: 'fns',
    networkId: 32659,
    chainId: 32659,
  }, 'byzantium');

  // console.log(rawTransaction);

  window.tx = new Transaction(rawTransaction, { common: FSN_MAIN });
  // const privateKey1 = Buffer.from(this.fromprivateKey, 'hex')
  // const privateKey = 'cd0f9bcc719b63744d1aa2d0420dfa337aa77ac64a4dfec15437e3fd0d965edc';
  // const privateKey2 = privateKey.split('x')[1];
  window.tx.sign(Buffer.from(privateKey, 'hex'));
  return window.tx;
}


export async function sendTx(raw) {
  console.log('raw', `0x${raw}`);
  return window.web3.eth.sendSignedTransaction(`0x${raw}`);
}

export async function callView(myContract, fun, funParams) {
  console.log('callView:', fun, funParams);
  // const myContract = new window.web3.eth.Contract(JSON.parse(ABI), contractAddress);
  const data = await myContract.methods[fun](...funParams).call();
  return data;
}

export function privateKeyToAddress(pk) {
  const data = window.web3.eth.accounts.privateKeyToAccount(pk);
  return data.address;
}

export function getContract(ABI, contractAddress) {
  return new window.web3.eth.Contract(JSON.parse(ABI), contractAddress);
}
