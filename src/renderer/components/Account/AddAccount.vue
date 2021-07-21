<template>
    <div class="add-account">
        <div class="box" @click="dialogVisibleAddAccount=true">
            <img src="../../assets/icon/+.png" alt="">
        </div>
        <el-dialog
                custom-class="add-dialog"
                :visible.sync="dialogVisibleAddAccount"
                :show-close="false"
                :center="true"
        >
            <div class="remove-dialog-title">Create New Account</div>
            <div class="remove-dialog-content">
                <el-input placeholder="Enter your Account Name" v-model="accountName"/>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button class="yes" @click="create">Create account</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
  // import {createAccount} from '../../lib/account'
  export default {
    data() {
      return {
        dialogVisibleAddAccount: false,
        accountName: '',
      };
    },
    methods: {
      open() {
        // this.$prompt('', 'Create Account', {
        //   confirmButtonText: 'Create Account',
        //   cancelButtonText: false
        // }).then(({ value }) => {
        //   // createAccount(value)
        //   this.$store.dispatch('createAccount')
        // }).catch(() => {
        // })
      },
      create() {
        this.$store.dispatch('createAccount', this.accountName);
        this.dialogVisibleAddAccount = false;
      },
    },
  };
</script>

<style lang="scss" scoped>
.add-account{
    margin-left: 20px;
    /deep/ .el-dialog{
        width: 355px;
        height: 169px;
        border-radius: 8px;
        .el-dialog__header{padding: 0px;}
        .remove-dialog-title{
            font-style: normal;
            font-weight: bold;
            font-size: 15px;
            line-height: 18px;
            color: #111111;
        }
        .remove-dialog-content {
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 16px;
            color: #111111;
            border-radius: 8px;
        }
        .dialog-footer{
            display: flex;
            justify-content: flex-end;
            .yes{
                width: 88px;
                height: 19px;
                text-align: center;
                justify-content: center;
                display: flex;
                font-style: normal;
                font-weight: 500;
                font-size: 10px;
                line-height: 0px;
                text-align: center;
            }
            .no{
                font-style: normal;
                font-weight: 500;
                font-size: 9px;
                line-height: 21px;
                letter-spacing: 0.02em;
                color: #111111;
                margin-right: 14px;
                cursor: pointer;
            }
        }
    }
}
.box{
    width: 341px;
    height: 178px;
    border: 2px solid #1840c1;
    border-style: dashed;
    display: flex;
    align-items:center;
    img{
        margin-left: 40px;
    }
}
</style>
