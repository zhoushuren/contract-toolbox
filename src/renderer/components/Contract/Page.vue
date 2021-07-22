<template>
  <div class="page">
    <div class="line1">
      <ImportAddress @onChange=changeContractAddress />
      <ImportABI @onChange="changeABI"/>
      <SelectWallet @onChange="changeWallet"/>
    </div>
    <Buttons :abi="abi" :isOk="isOk" :loading="loading" @onClick="onClick"/>
      <Result :result="result" :loading="loading" @cancel="cancel"/>
  </div>
</template>

<script>
import ImportABI from './ImportABI';
import ImportAddress from './ImportAddress';
import SelectWallet from './SelectWallet';
import Buttons from './Buttons';
import Result from './Result';
import { buildTx, callView, sendTx, getContract } from '../../lib/contract';
export default {
  data() {
    return {
      selectWalletIndex: 0,
      selectWalletAddress: '',
      contractAddress: '',
      abi: '',
      result: {},
      isOk: false,
      loading: false,
      contract: {},
      privateKey: '',
    };
  },
  components: {
    ImportABI,
    ImportAddress,
    Buttons,
    Result,
    SelectWallet,
  },
  methods: {
    changeContractAddress(address) {
      this.contractAddress = address;
      this.checkStatus();
    },
    changeABI(abi) {
      console.log(abi);
      this.abi = abi;
      this.checkStatus();
    },
    changeWallet({
      wallet,
      address,
      privateKey,
    }) {
      console.log(wallet, address);
      this.selectWalletIndex = wallet;
      this.selectWalletAddress = address;
      this.privateKey = privateKey;
      this.checkStatus();
    },
    checkStatus() {
      console.log('checkStatus', this.selectWalletAddress, this.contractAddress);
      if (this.abi !== '' && this.selectWalletAddress !== '' && this.contractAddress !== '') {
        this.contract = getContract(this.abi, this.contractAddress);
        this.isOk = true;
      }
    },
    onClick({
      name, paramsArr, stateMutability,
    }) {
      // console.log('onClickPage', name, paramsArr);
      if (stateMutability === 'view') {
        this.callView({
          name,
          paramsArr,
        });
      } else {
        this.sendTx(name, paramsArr);
      }
    },
    async callView({
      name,
      paramsArr,
    }) {
      // console.log('callView2', name, paramsArr);
      this.loading = true;
      // console.log('callView2', this.abi, this.contractAddress, name, paramsArr);
      try {
        const data = await callView(this.contract, name, paramsArr);
        // console.log(data);
        // this.$store.dispatch('addResult', { data });
        this.result = { data };
        this.loading = false;
      } catch (e) {
        this.result = { error: e };
        this.loading = false;
      }
    },
    async sendTx(name, params) {
      this.loading = true;
      console.log('sendTx page', name, params);
      console.log('sendTx page', this.selectWalletAddress, this.abi, this.contractAddress, name, params);
      // eslint-disable-next-line max-len
      const tx = await buildTx(this.selectWalletAddress, this.contract, this.contractAddress, name, params, this.privateKey);
      try {
        const data = await sendTx(tx.serialize().toString('hex'));
        // console.log('res', res);
        this.result = data;
        // this.$store.dispatch('addResult', res);
        this.loading = false;
      } catch (e) {
        console.error('error:', e);
        this.result = { error: e };
        this.loading = false;
      }
    },
    cancel() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.page{
  display: flex;
  flex-direction: column;
  height: calc(100vh - 220px);
}
.line1{
  display: flex;
  flex-direction: row;
}
</style>
