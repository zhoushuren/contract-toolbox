import config from './config';

const bip39 = require('bip39');
// const bitcore = require('bitcore-lib')

// const server = require('bitcore-wallet-service/ts_build/lib/server')
const { find, save, delele } = require('./localStoage');

export async function createPassword(password) {
  const res = await find('password', { type: 'password' });
  if (res.length > 0) {
    throw Error('password exist!');
  }
  return save('password', { password });
}

export function updatePassword() {

}
// @return bool
export function checkPassword() {

}
// @return bool
export function existPassword() {
  return find('password');
}
// @return bool
export async function createAccount(name) {
  const mnemonic = bip39.generateMnemonic();
  const coins = config.bipCoins.map((coin) => {
    coin.account = name;
    coin.amount = 0;
    coin.usd = 0;
    coin.btc = 0;
    return coin;
  });

  await save('account', {
    AccountName: name,
    Mnemonic: mnemonic,
    Coins: coins,
  });
}
export function importAccount() {

}

export function removeAccount(_id) {
  return delele('account', { _id });
}
