<template>
  <div id="wrapper">
    <main>
      <el-form
        :model="form"
        status-icon
        :rules="rules"
        ref="form"
        class="form"
      >
        <el-form-item label="Name" prop="name">
          <el-input
            type="text"
            v-model="form.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass">
          <el-input
            type="password"
            v-model="form.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Repat Password" prop="checkPass">
          <el-input
            type="password"
            v-model="form.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">
            Commit
          </el-button>
          <el-button @click="resetForm('form')">Return</el-button>
        </el-form-item>
      </el-form>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        pass: '',
        checkPass: '',
        age: '',
      },
      rules: {
      },
    };
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate(async (valid) => {
        // this.$store.commit('SET_WALLET_NAME', {name: this.form.name, password: this.form.pass})
        this.$store.dispatch('generateMnemonic', { name: this.form.name, password: this.form.pass });
        this.$router.push('/backup_mnemonic');
      });
    },
    resetForm() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    height: 500px;
  }
  .form{
    width: 100%;
  }
</style>
