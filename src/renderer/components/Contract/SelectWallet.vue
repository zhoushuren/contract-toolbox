<template>
  <div class="box">
    <el-select v-model="account" placeholder="Wallet Account" @change="changeWallet">
      <el-option
          v-for="(item, index) in wallets"
          :key="index"
          :label="item.name"
          :value="index">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      account: '',
      address: '',
    };
  },
  computed: {
    ...mapState({
      wallets: state => state.wallet.wallets,
    }),
  },
  methods: {
    changeWallet() {
      // this.$store.dispatch('changeABI', this.abiJSON);
      // eslint-disable-next-line prefer-destructuring
      const address = this.wallets[this.account].address;
      // eslint-disable-next-line prefer-destructuring
      const privateKey = this.wallets[this.account].privateKey;
      this.$emit('onChange', { address, wallet: this.account, privateKey });
    },
  },
};
</script>

<style scoped>
.box {
  width: 350px;
  height: 186px;
  background: #FFFFFF;
  box-shadow: 0px 6px 18px rgba(15, 65, 140, 0.08);
  border-radius: 8px;
  padding: 13px 15px 13px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
}
</style>
