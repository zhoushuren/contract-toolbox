<template>
  <div id="wrapper">
      111111
  </div>
</template>

<script>
  // import CreateWallet from '../components/NewWallet/CreateWallet'
  // import ImportWallet from '../components/NewWallet/ImportWallet'
  // import {existPassword} from '../lib/account'
  import TitleButton from '../components/TitleButton';
  export default {
    name: 'landing-page',
    data() {
      return {
        form: {},
        rules: {},
        show: 'create',
        switchCreateAndImport: 'Don’t have account?  Create now!',
      };
    },
    components: {
      TitleButton,
      // CreateWallet,
      // ImportWallet
    },
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      },
      clickCreate() {
        this.$router.push('/create_wallet');
      },
      importAccount() {
      },
      switchPage() {
        this.show = this.show === 'import' ? 'create' : 'import';
      },
    },
    async mounted() {
      // const exist = await this.$store.dispatch('getMnemonic')
      // const exist = await existPassword()
      // if (exist.length !== 0) {
      //   this.$router.push('/home')
      // }
    },
  };
</script>

<style scoped>
  @import url('../assets/main.css');
  @import url('../assets/style/form.scss');
  .logo {
      /*border: red solid 1px;*/
      display: flex;
      justify-content: center;
      align-items: center;

  }
  .logo img{
      width: 472px;
      height: 63.52px;
  }
.switch{
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.03em;
    color: #1840C1;
    cursor:pointer;
    margin-top: 18px;
}
  /*.fade-enter-active, .fade-leave-active {*/
  /*    transition: opacity .3s ease;*/
  /*}*/
  /*.fade-enter, .fade-leave-to !* .fade-leave-active below version 2.1.8 *! {*/
  /*    opacity: 0;*/
  /*}*/
  .fade-enter-active {
      transition: all .2s;
  }
  .fade-leave-active {
      transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to
      /* .slide-fade-leave-active for below version 2.1.8 */ {
      transform: translateX(-200px);
      opacity: 0;
  }
</style>
