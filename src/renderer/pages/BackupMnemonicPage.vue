<template>
    <div id="wrapper">
        <BackupMnemonic v-if="!backuped" />
        <ConfirmMnemonic v-else />
        <div class="but">
            <el-button @click="pre">Pre</el-button>
            <el-button @click="next">Next</el-button>
        </div>
    </div>
</template>

<script>

import BackupMnemonic from '../components/Mnemonic/BackupMnemonic';
import ConfirmMnemonic from '../components/Mnemonic/ConfirmMnemonic';

export default {
  data() {
    return {
      backuped: false,
    };
  },
  components: {
    ConfirmMnemonic,
    BackupMnemonic,
  },

  methods: {
    next() {
      if (this.backuped === false) {
        this.backuped = true;
      } else {
        this.$store.dispatch('confirmMnemonic');
        this.$router.push('/home');
      }
    },
    pre() {
      if (this.backuped === true) {
        this.backuped = false;
      } else {
        this.$router.go(-1);
      }
    },
  },
  mounted() {
    // console.log(this.Mnemonic.mnemonic)
  },
};
</script>

<style scoped>
    @import url('../assets/main.css');
    .content{
        border: 1px solid red;
        width: 500px;
        height: 200px;
        display: flex;
        flex-direction: row;
    }
    .box {
        width: 400px;
        height: 300px;
    }
</style>
