<template>
    <div id="wrapper">
        <el-form :inline="false" :model="form" class="send" label-width="100px" >
            <el-form-item label="Address">
                <el-input v-model="form.address" placeholder="Address"></el-input>
            </el-form-item>
            <el-form-item label="Amount">
                <el-input v-model="form.amount" placeholder="Amount"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Send</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          address: '',
          amount: '',
          account: '',
        },
      };
    },
    methods: {
      onSubmit() {
        this.$store.dispatch('sendTx', { address: this.form.address, amount: this.form.amount, account: this.account });
      },
    },
  };
</script>

<style scoped>
    @import url('../assets/main.css');
    .send{
        width: 100%;
    }
</style>
