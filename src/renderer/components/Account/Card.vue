<template>
    <div class="box">
        <div class="card-top">
            <div>Backup</div>|
            <div @click="showRemove" :class="{inactive: account_count === 1}">Remove</div>
        </div>
        <div class="card-content">
            <div class="amount">
                <div class="wallet-name"> {{account.AccountName}} </div>
                <div class="wallet-amount">$ {{totalAmount.usd}}</div>
            </div>
            <img src="../../assets/icon/account-card.png" alt="">
        </div>
        <div class="buttom">
            <div class="coins">
                <img src="../../assets/icon/eth-icon.png" alt="" class="coin" v-for="item in account.Coins">
            </div>
            <div class="date"> Create Date: 04.07.2019</div>
        </div>

        <el-dialog
                custom-class="remove-dialog"
                :visible.sync="dialogVisibleRemove"
                :show-close="false"
                :center="true"
               >
            <div class="remove-dialog-title">Are you sure you want to remove your account?</div>
            <div class="remove-dialog-content">Your mnemonic phrases are correct. Are you confirm to remove the account?</div>
            <div slot="footer" class="dialog-footer">
                <span class="no" @click="dialogVisibleRemove = false">No, I don’t want</span>
                 <el-button class="yes" @click="remove">Yes</el-button>
          </div>
        </el-dialog>
    </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    data() {
      return {
        dialogVisibleRemove: false,
      };
    },
    props: {
      account: { type: Object },
    },
    computed: {
      totalAmount: {
        get() {
          return {
            btc: this.account.Coins.reduce((total, coin) => total.btc + coin.btc),
            usd: this.account.Coins.reduce((total, coin) => total.usd + coin.usd),
          };
        },
      },
      ...mapState({
        account_count: state => state.account.accounts.length,
      }),
    },
    methods: {
      showRemove() {
        if (this.account_count > 1) {
          this.dialogVisibleRemove = true;
        }
      },
      remove() {
        this.dialogVisibleRemove = false;
        this.$store.dispatch('removeAccount', this.account._id);
      },
    },
  };
</script>

<style lang="scss" scoped>
.box{
    width: 350px;
    height: 186px;
    background: #FFFFFF;
    box-shadow: 0px 6px 18px rgba(15, 65, 140, 0.08);
    border-radius: 8px;
    padding: 13px 15px 13px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    .card-top{
        font-style: normal;
        font-weight: 600;
        font-size: 9px;
        line-height: 11px;
        letter-spacing: 0.06em;
        color: #1840C1;
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
        .inactive{
            color: #E0E0E0;
        }
    }
    .buttom{
        display: flex;
        justify-content: space-between;
    }
    .card-content{
        display: flex;
        justify-content: space-between;
        .amount{
            .wallet-name{
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 18px;
                letter-spacing: 0.03em;
                color: #BDBDBD;
            }
            .wallet-amount{
                font-style: normal;
                font-weight: 500;
                font-size: 30px;
                line-height: 45px;
                letter-spacing: 0.03em;
                color: #111111;
            }
        }
        img{
            width: 112.99px;
            height: 85px;
        }
    }
    .coins{
        display: flex;
        justify-content: space-around;
        width: 93px;
        .coin{
            width: 22px;
            height: 22px;
        }
    }
    .date{
        font-style: normal;
        font-weight: normal;
        font-size: 9px;
        line-height: 11px;
        letter-spacing: 0.03em;
        color: #E0E0E0;
    }
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
                width: 40px;
                height: 19px;
                text-align: center;
                justify-content: center;
                display: flex;
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

</style>
