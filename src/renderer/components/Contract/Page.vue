<template>
  <div>
    <div class="line1">
      <ImportAddress @onChange=changeContractAddress />
      <ImportABI @onChange="changeABI"/>
      <SelectWallet @onChange="changeWallet"/>
    </div>
    <Buttons :abi="abi" :isOk="isOk" @onClick="onClick"/>
    <Result :result="result"/>
  </div>
</template>

<script>
import ImportABI from './ImportABI';
import ImportAddress from './ImportAddress';
import SelectWallet from './SelectWallet';
import Buttons from './Buttons';
import Result from './Result';
import { buildTx, callView, sendTx } from '../../lib/contract';
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
    }) {
      console.log(wallet, address);
      this.selectWalletIndex = wallet;
      this.selectWalletAddress = address;
      this.checkStatus();
    },
    checkStatus() {
      console.log('checkStatus', this.selectWalletAddress, this.contractAddress);
      if (this.abi !== '' && this.selectWalletAddress !== '' && this.contractAddress !== '') {
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
      console.log('callView2', name, paramsArr);
      this.loading = true;
      console.log('callView2', this.abi, this.contractAddress, name, paramsArr);
      const data = await callView(this.abi, this.contractAddress, name, paramsArr);
      console.log(data);
      // this.$store.dispatch('addResult', { data });
      this.result = { data };
      this.loading = false;
    },
    async sendTx(name, params) {
      console.log('sendTx page', name, params);
      console.log('sendTx page', this.selectWalletAddress, this.abi, this.contractAddress, name, params);
      // eslint-disable-next-line max-len
      const tx = await buildTx(this.selectWalletAddress, this.abi, this.contractAddress, name, params);
      try {
        const data = await sendTx(tx.serialize().toString('hex'));
        // console.log('res', res);
        this.result = data;
        // this.$store.dispatch('addResult', res);
      } catch (e) {
        console.error('error:', e);
        this.result = { error: e };
      }
    },
  },
};
</script>

<style scoped>
.line1{
  display: flex;
  flex-direction: row;
}
</style>
