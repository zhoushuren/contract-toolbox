const electron = require('electron');
const app = electron.remote.app;
const Datastore = require('nedb');
const Promise = require('bluebird');
// const db = new Datastore({filename: './wallet.db', autoload: true})

const db = {};
const userData = app.getPath('userData');
console.log(userData);
db.password = new Datastore({ filename: `${userData}/password.db`, autoload: true });
db.account = new Datastore({ filename: `${userData}/account.db`, autoload: true });
db.amount = new Datastore({ filename: `${userData}/amount.db`, autoload: true });

export function find(type, cond) {
  return new Promise((resolve, reject) => {
    db[type].find(cond, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

export function save(type, data) {
  return new Promise((resolve, reject) => {
    db[type].insert(data, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

export function delele(type, data) {
  return new Promise((resolve, reject) => {
    db[type].remove(data, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}
