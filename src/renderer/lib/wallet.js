
const bip39 = require('bip39');
const bitcore = require('bitcore-lib');

// const server = require('bitcore-wallet-service/ts_build/lib/server')
// const { uploadPublicKey, updateAccount } = require('./request')
const { find, save } = require('./localStoage');

export function createMnemonic() {
  const mne = bip39.generateMnemonic();
  return mne;
}
// create a wallet account
export async function createWallet(wallet) {
  const data = await find({ name: wallet.name });
  // const account = createAddress(wallet.mnemonic)
  if (data.length > 0) {
    throw Error('name is existed!');
  }
  return save(wallet);
}
export function createAddress(mnemonic, coin = 0, index = 0) {
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const prk = bitcore.HDPrivateKey.fromSeed(seed);
  const derive = prk.derive(`m/44'/${coin}'/0'/0`);
  const deriveChild = derive.deriveChild(index);

  return {
    privateKey: deriveChild.privateKey.toWIF(),
    publicKey: deriveChild.publicKey.toString(),
    address: deriveChild.publicKey.toAddress().toString(),
  };
}

export async function getAccountBalance(mnemonic) {
  const { address } = createAddress(mnemonic);
  console.log(address);
}

export function getMneonic() {
  return find({ type: { $exists: true } });
}

export function sendTX({ address, amount, account }) {
  const privateKey = new bitcore.PrivateKey('L1uyy5qTuGrVXrmrsvHWHgVzW9kKdrp27wBC7Vs6nZDTF2BRUVwy');
  const utxo = {
    txId: '115e8f72f39fad874cfab0deed11a80f24f967a84079fb56ddf53ea02e308986',
    outputIndex: 0,
    address: '17XBj6iFEsf8kzDMGQk5ghZipxX49VXuaV',
    script: '76a91447862fe165e6121af80d5dde1ecb478ed170565b88ac',
    satoshis: 50000,
  };
  const transaction = new bitcore.Transaction()
    .from(utxo)
    .to('1Gokm82v6DmtwKEB8AiVhm82hyFSsEvBDK', 15000)
    .change('17XBj6iFEsf8kzDMGQk5ghZipxX49VXuaV')
    .fee(100)
    .sign(privateKey);
  // console.log(res)
  console.log(transaction.toString());
}

// function _selectInput(input, totalAmount) {
// }

export function getCoinList() {
}

export function setUploadPublicKey(name, mnemonic) {
  // const seed = bip39.mnemonicToSeedSync(mnemonic)
  // const pubk = bitcore.HDPublicKey.fromSeed(seed)
  // const derive = pubk.derive("m/44'/0'/0'/0")
  // const deriveChild = derive.deriveChild(0)
  // let address = deriveChild.publicKey.toAddress().toString()
  //
  // return uploadPublicKey({
  //   pubKey: pubk,
  //   name: name,
  //   path: 0,
  //   singleAddress: address
  // })
}

export function setUpdateAccount(mnemonic) {
  // const seed = bip39.mnemonicToSeedSync(mnemonic)
  // const pubk = bitcore.HDPublicKey.fromSeed(seed)
  // return updateAccount(pubk)
}
