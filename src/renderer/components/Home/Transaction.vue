<template>
    <div class="transaction home-card">
        <div class="title">
            Transaction
        </div>

        <div class="switch-direction">
            <div class="switch-button">Send</div>
            <div class="switch-button switch-select">Receive</div>
        </div>

        <div class="amount">
            <div class="coin-amount">
                <img class="coin-icon" src="../../assets/icon/bitcoin.png" alt="">
                <div class="amount-value"> 5234 BTC</div>
            </div>
            <div class="base-amount">$ 89,041,8USD</div>
        </div>

        <div class="trans">
            <el-form
                    :model="form"
                    status-icon
                    :rules="rules"
                    ref="form"
                    class="trans-form"
            >
                <el-form-item label="Source Account" prop="name">
                    <el-input
                            type="text"
                            v-model="form.name"
                            autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="Recipient Address" prop="pass">
                    <el-input
                            type="text"
                            v-model="form.pass"
                            autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="Transaction Speed" prop="fee">
                    <el-slider v-model="form.fee" :format-tooltip="formatTooltip"></el-slider>
                </el-form-item>

                <el-form-item class="button">
                    <el-button @click="createAccount('form')">
                        Comfirm
                    </el-button>
                </el-form-item>

            </el-form>
        </div>
    </div>
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
      formatTooltip(val) {
        return val / 100;
      },
    },
  };
</script>

<style lang="scss" scoped>
.transaction{
    width: 324px;
    height: 449px;
    background: #FFFFFF;
    border-radius: 10px;
    margin: 34px 34px 31px 0px;
    display: flex;
    flex-direction: column;

    .switch-direction{
        margin-top: 32px;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.03em;
        color: #FFFFFF;
        background: rgba(24, 64, 193, 0.06);
        border-radius: 4px;
        width: 235px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        .switch-button{
            width: 121px;
            height: 20px;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0.03em;
            color: #1840C1;
            text-align: center;

        }
        .switch-select {
            width: 121px;
            height: 20px;
            left: calc(50% - 24px/2 + 245px);
            top: calc(50% - 20px/2 - 271px);
            color: #FFFFFF;
            background: #1840C1;
            border-radius: 4px;
            line-height: 20px;
            font-weight: bold;
            font-size: 12px;
        }
    }
    .amount{
        display: flex;
        flex-direction: column;
        margin-top: 23px;
        align-items: center;
        height: 52px;
        .coin-amount{
            display: flex;
            height: 30px;
            .coin-icon{
                width: 26px;
                height: 26px;
            }
            .amount-value{
                /*font-family: Poppins;*/
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 26px;
                letter-spacing: 0.03em;
                color: #111111;
                margin-left: 9px;
            }
        }
        .base-amount{
            font-family: Poppins;
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 19px;
            letter-spacing: 0.03em;
            color: #BDBDBD;
            text-align: center;
        }
    }
    .trans-form{
        /*margin-top: 12px;*/
       .el-input >>> .el-input__inner{

        }
    }
    .trans-form /deep/ .el-input__inner {
        opacity: 0.6;
        border: 1px solid #1840C1;
        box-sizing: border-box;
        border-radius: 4px;
    }
}
</style>
