<template>
    <main>
        <div class="content">
            <div class="title">Import</div>
            <div class="process-line"></div>
            <div class="step">Step 1：</div>
            <el-form
                    :model="form"
                    status-icon
                    :rules="rules"
                    ref="form"
                    class="form"
            >
                <el-form-item label="Please import your mnemonic phrase here" prop="name" class="textarea-item">
                    <el-input
                            type="textarea"
                            placeholder="Input mnemonic words separated by a space"
                            v-model="form.name"
                            autocomplete="off"
                            resize="none"
                            maxlength="128"
                    ></el-input>
                    <div class="text">We will verify this phrase in the next step </div>
                </el-form-item>

                <el-form-item class="button">
                    <el-button @click="submitForm('form')" class="inner-button">
                        Import
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </main>
</template>

<script>
  export default {
    data() {
      return {
        form: {},
        rules: {},
      };
    },
    methods: {
      submitForm() {
      },
    },
  };
</script>

<style scoped>
    @import url('../../assets/main.css');

    .title{
        left: calc(50% - 236px/2 - 27.62px);
        top: calc(50% - 29px/2 - 148.5px);
        font-size: 24px;
        line-height: 29px;
        font-weight: bold;
        font-style: normal;
        letter-spacing: 0.03em;
        color: #1840C1;
        margin-bottom: 21px;
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
    .el-form-item__label{
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        color: #111111;
        letter-spacing: 0em;
    }
    .content /deep/ .el-textarea__inner{
        height: 150px;
    }
    .textarea-item{
        height: 140px;
    }
    .password-text{
        left: calc(50% - 279px/2 - 5.5px);
        top: calc(50% - 31px/2 + 135.5px);
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.03em;
        color: #1840C1;
        margin-top: 4.8px;
    }
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
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
    .text{
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;
        color: #999999;
        margin-top: 5px;
    }
    .button{
        margin-top: 83px;
        display: flex;
        justify-content: center;
    }
    .inner-button{
        width: 290px;
    }
    .step{
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #1840C1;
        margin-top: 10px;
    }
    .el-textarea{
        margin-top: 6px;
    }
    .content /deep/ textarea{
        padding: 8px 13px;
    }
    .content /deep/ textarea::placeholder{
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 13px;
        color:  #BDBDBD;
        opacity: 0.6
    }
</style>
