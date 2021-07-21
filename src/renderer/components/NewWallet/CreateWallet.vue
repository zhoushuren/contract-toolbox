<template>
    <main>
        <div class="content">
            <div class="title">Create your account</div>
            <el-form
                    :model="form"
                    status-icon
                    :rules="rules"
                    ref="form"
                    class="form"
            >
                <el-form-item label="Create your Account Name" prop="name">
                    <el-input
                            type="text"
                            v-model="form.name"
                            autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="Security Password" prop="pass">
                    <el-input
                            type="password"
                            v-model="form.pass"
                            autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="Enter your Password again" prop="checkPass">
                    <el-input
                            type="password"
                            v-model="form.checkPass"
                            autocomplete="off"
                    ></el-input>
                </el-form-item>
                <div class="password-text">Tip: This Password is only used for your wallet’s security</div>
                <el-form-item  prop="">
                    <el-checkbox v-model="form.checked">By continuing I certify that I am 18 years of age, and I agree to the User Agreement and Privacy Policy.</el-checkbox>
                </el-form-item>
                <el-form-item class="button">
                    <el-button @click="createAccount('form')" :disabled="lodding">
                        Create account
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </main>
</template>

<script>
  import { createPassword, createAccount } from '../../lib/account';
  export default {
    data() {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.checkPass !== '') {
            this.$refs.form.validateField('checkPass');
          }
          callback();
        }
      };
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        lodding: false,
        form: {
          name: '',
          pass: '',
          checkPass: '',
        },
        rules: {
          name: [
            { required: true, message: 'Please enter a name', trigger: 'blur' },
            {
              min: 3, max: 18, message: '3 to 18 characters in length', trigger: 'blur',
            },
          ],
          pass: [
            { required: true, message: 'Please enter a password', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' },
          ],
          checkPass: [
            { required: true, message: 'Please enter a password', trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      },
      clickCreate() {
        this.$router.push('/create_wallet');
      },
      createAccount(formName) {
        this.lodding = true;
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            await createPassword(this.form.pass);
            await createAccount(this.form.name);
            this.$router.push('/home');
          } else {
            this.lodding = false;
            return false;
          }
        });
      },
    },
  };
</script>

<style scoped>
    @import url('../../assets/style/form.scss');

    .title{
        left: calc(50% - 236px/2 - 27.62px);
        top: calc(50% - 29px/2 - 148.5px);
        font-size: 24px;
        line-height: 29px;
        font-weight: bold;
        font-style: normal;
        letter-spacing: 0.03em;
        color: #1840C1;
        text-align: center;
    }
    .content {
        width: 290px;
        height: 422px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 63px;
    }
    .password-text{
        left: calc(50% - 279px/2 - 5.5px);
        top: calc(50% - 31px/2 + 135.5px);
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.03em;
        color: #1840C1;
        margin-top: 4.8px;
        font-style: normal;
        font-weight: normal;
    }
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    main > div { flex-basis: 50%; }
    .import{
        left: calc(50% - 242px/2 - 1px);
        top: calc(50% - 20px/2 + 291px);
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.03em;

        color: #1840C1;

    }
    .content /deep/  .el-checkbox__label{
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.03em;
        color: #111111;

    }
    .button {
        margin-top: 15px;
        margin-bottom: 0px;
    }
    .content /deep/ .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
        border-color: white;
        background-color: white;
    }
</style>
