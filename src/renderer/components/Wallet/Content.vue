<template>
  <div class="content">
    <div class="line1">
     <el-link class="add-wallet" @click="addWallet">
       Add Wallet
       <i class="el-icon-plus"></i>
     </el-link>
    </div>
    <div class="line2">
      <template v-for="(wallet, index) in wallets">
        <List :wallet2="wallet" @deleteWallet=deleteWallet(index) />
      </template>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import ImportWallet from '../NewWallet/ImportWallet';
import List from './List';
export default {
  components: {
    ImportWallet,
    List,
  },
  mounted() {
    console.log('mounted:', this.wallets);
  },
  computed: {
    ...mapState({
      wallets: state => state.wallet.wallets,
    }),
  },
  methods: {
    addWallet() {
      console.log('aaaa');
      this.$store.dispatch('addWallet');
    },
    deleteWallet(index) {
      this.$store.dispatch('delWallet', index);
    },
  },
};
</script>

<style lang="scss" scoped>
.content{
  display: flex;
  flex-direction: column;
}
.line1{
  display: flex;
  flex-direction: row;
  height: 100px;
  .add-wallet{
    margin: 20px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.03em;
    color: #000000;
    display: inline-block;
    float: left;
    width: 123px;
    height: 23px;
  }
}

.line2{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
