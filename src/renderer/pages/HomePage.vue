<template>
    <div id="home">
        <Sidebar/>
        <div class="right">
          <Top/>
          <WalletContent v-show="navigate === 'wallet'"/>
          <ContractContent v-show="navigate === 'account'"/>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Sidebar from '../components/Home/Sidebar';
import Top from '../components/Home/Top';
import WalletContent from '../components/Wallet/Content';
import ContractContent from '../components/Contract/Content';
export default {
  components: {
    Sidebar,
    Top,
    WalletContent,
    ContractContent,
  },
  mounted() {
    // console.log(this.address)
    // setInterval(this.getAmount, 10000) //  10s
    // this.getAmount();
  },
  computed: {
    ...mapState({
      address: state => state.Mnemonic.default_address,
      navigate: state => state.home.navigate,
    }),
  },
  methods: {
    sendTxpage() {
      this.$router.push('/send_tx');
    },
    getAmount() {
      this.$store.dispatch('getAccount');
    },
  },
};
</script>

<style lang="scss" scoped>
    @import url('../assets/main.css');
    #home {
        background: #F8F8F8;
        width: 100%;
        height: 100%;
        display: flex;
        .right{
            width: 100%;
            height: 100%;
        }
    }
</style>
