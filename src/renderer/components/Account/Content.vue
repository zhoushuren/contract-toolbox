<template>
    <div class="content">
    22222
    </div>
</template>

<script>
  // import { mapState } from 'vuex';
  // import Card from './Card';
  // import AddAccount from './AddAccount';
  // import AccountCurrency from './AccountCurrency';
  export default {
    components: {
      // Card,
      // AccountCurrency,
      // AddAccount,
    },
    computed: {
      // ...mapState({
      //   accounts: state => state.account.accounts,
      //   accountNameList: state => state.account.accountNameList,
      //   baseCoin: state => state.account.baseCoin,
      //   accountIndex: state => state.account.accountIndex,
      // }),
    },
  };
</script>

<style lang="scss" scoped>
.content{
    padding: 40px 38px 32px 38px;
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: space-between;*/
}
    .card-list{
        display: flex;
        justify-content: start;

    }
</style>
