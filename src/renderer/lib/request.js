import axios from 'axios';

const reqeust = axios.create({
  // baseURL: 'http://api.dabax.io',
  baseURL: 'http://127.0.0.1:7001',
  timeout: 1000,
  headers: { 'X-By': 'dabax' },
});

export async function getAllBalance(address) {
  return reqeust.post('/all/balance', { address });
}
export async function getBalance(coin, address) {
  return reqeust.get(`/${coin}/balance/${address}`);
}
export async function getBtcUtxo(address) {
  return reqeust.get(`/btc/utxo/${address}`);
}
export async function getBtcTxHistory(address) {
  return reqeust.get(`/btc/txHistory/${address}`);
}
export async function getBtcTxDetail(txid) {
  return reqeust.get(`/btc/txDetail/${txid}`);
}
export async function getFee(coin, txid) {
  return reqeust.get(`/${coin}/fee/${txid}`);
}
export async function sendTx(coin, rowTx) {
  return reqeust.post(`/${coin}/sendTx`, { rowBody: rowTx });
}

export async function uploadPublicKey({
  pubKey, name, path, singleAddress,
}) {
  return reqeust.post('/wallet', {
    pubKey, name, path, singleAddress,
  });
}

export async function updateAccount(pubKey, addresses) {
  return reqeust.post(`/wallet/${pubKey}`, addresses);
}
