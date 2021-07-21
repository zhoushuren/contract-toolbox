<template>
    <div class="account home-card">
        <div class="account-top">
            <div class="account-name">
                <div class="title">Account Name</div>
                <div class="value">{{accountNameList[accountIndex]}}</div>
            </div>
            <div class="total-amount">
                <div class="amount">
                    {{baseCoin === 'u' ? totalAmount.usd : totalAmount.btc }}
                </div>
                <div class="remark">Total Amount</div>
            </div>

            <div class="switch-coin">
                <div class="switch-coin-button" :class="{'switch-coin-select': baseCoin === 'u'}" @click="changeBaseCoin('u')">$</div>
                <div class="switch-coin-button" :class="{'switch-coin-select': baseCoin === 'b'}" @click="changeBaseCoin('b')">B</div>
            </div>
        </div>
        <div class="account-balance">
            <div class="table-title">
                <div class="title">Coins</div>
                <div class="viewall">View All</div>
            </div>

            <div class="table-list">
                <div class="list-row" v-for="item in accounts[accountIndex].Coins">
                    <div class="coin">
                        <img class="coin-icon" src="../../assets/icon/bitcoin.png" alt="">
                        <div class="coin-text">{{item.name}}</div>
                        <div class="coin-name">({{item.symbol}})</div>
                    </div>

                    <div class="amount">
                        <div class="coin-amount">{{item.amount}} {{item.symbol}}</div>
                        <div class="base-amount"> / ${{item.usd}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    data() {
      return {
      };
    },
    computed: {
      ...mapState({
        accounts: state => state.account.accounts,
        accountNameList: state => state.account.accountNameList,
        baseCoin: state => state.account.baseCoin,
        accountIndex: state => state.account.accountIndex,
      }),
      totalAmount: {
        get() {
          return {
            btc: this.accounts[this.accountIndex].Coins.reduce((total, coin) => total.btc + coin.btc),
            usd: this.accounts[this.accountIndex].Coins.reduce((total, coin) => total.usd + coin.usd),
          };
        },
      },
    },
    mounted() {
      // this.$store.dispatch('getAccount')
    },
    methods: {
      changeBaseCoin(name) {
        this.$store.commit('CHANGE_BASE_COIN', name);
      },
    },
  };
</script>

<style lang="scss" scoped>
    @import url('../../assets/style/home.scss');
    @import url('../../assets/main.css');
.account{
    width: 746px;
    height: 449px;
    display: flex;
    background: #FFFFFF;
    border-radius: 10px;
    margin: 34px 34px 31px 40px;
    display: flex;
    flex-direction: column;
    .account-top{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .value{
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 29px;
            letter-spacing: 0.03em;
            color: #1840C1;
        }
        .total-amount{
            text-align: center;
            margin-top: 63px;
            .amount{
                font-family: Tahoma;
                /*font-family: 'Roboto', sans-serif;*/
                font-style: normal;
                font-weight: 600;
                font-size: 40px;
                line-height: 60px;
                letter-spacing: 0.03em;
                color: #111111;
            }
            .remark{
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
                line-height: 18px;
                letter-spacing: 0.03em;
                color: #BDBDBD;
            }
        }
        .switch-coin{
            margin-top: 32px;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.03em;
            color: #FFFFFF;
            background: rgba(24, 64, 193, 0.06);
            border-radius: 4px;
            width: 50px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            .switch-coin-button{
                width: 24px;
                height: 20px;
                font-style: normal;
                font-weight: bold;
                font-size: 12px;
                line-height: 20px;
                letter-spacing: 0.03em;
                color: #000000;
                text-align: center;
                cursor: pointer;

            }
            .switch-coin-select {
                width: 24px;
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

    }
    .account-balance{
        margin-top: 23px;
        .table-title{
            display: flex;
            justify-content: space-between;
            .title{
                font-style: normal;
                font-weight: bold;
                font-size: 15px;
                line-height: 18px;
                letter-spacing: 0.03em;
                color: #333333;
            }
            .viewall{
                font-style: normal;
                font-weight: bold;
                font-size: 10px;
                line-height: 12px;
                text-align: right;
                letter-spacing: 0.196923px;
                color: #1840C1;
            }
        }
        .table-list{
            display: flex;
            flex-direction: column;
            .list-row{
                width: 687px;
                height: 66px;
                display: flex;
                justify-content: space-between;
                padding: 17px 0px 17px 0px;
                .coin{
                    display: flex;
                }
                .coin-icon{
                    width: 32px;
                    height: 32px;
                }
                .coin-text{
                    line-height: 34px;
                    margin-left: 20px;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 15px;
                    letter-spacing: 0.03em;
                    color: #111111;
                }
                .coin-name{
                    font-style: normal;
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 34px;
                    letter-spacing: 0.03em;
                    color: #828282;
                    margin-left: 4px;
                }

            }
            .amount{
                display: flex;
                .coin-amount{
                    font-family: Tahoma;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 15px;
                    line-height: 22px;
                    text-align: right;
                    letter-spacing: 0.03em;
                    color: #111111;
                }
                .base-amount{
                    font-family: Tahoma;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 19px;
                    text-align: right;
                    letter-spacing: 0.03em;
                    color: #BDBDBD;
                }
            }
        }
    }
}

</style>
