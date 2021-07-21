<template>
    <div class="account-currency">
        <div class="left">
            <div class="title">Account currency</div>

            <div class="coin-list">
                <div class="item">
                    <img src="../../assets/icon/eth-icon.png" alt="">
                    <div class="coin-name">Bitcoin</div>
                    <div class="balance">0.00 BTC/ $0.00</div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="title">Address</div>
        </div>
    </div>
</template>

<script>
  export default {
  };
</script>

<style lang="scss" scoped>
.account-currency{
    width: 1090px;
    height: 436px;
    background: #FFFFFF;
    border-radius: 10px;
    margin-top: 42px;
    padding: 23px 42px 42px 23px;
    display: flex;
    .left{
        width: 436px;
        .coin-list{
            display: flex;
            flex-direction: column;
            .item{
                display: flex;
                justify-content: space-between;
                img{
                    width: 22px;
                    height: 22px;
                }
                .coin-name{
                    font-style: normal;
                    font-weight: bold;
                    font-size: 15px;
                    line-height: 18px;
                    color: #111111;
                }
                .balance{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 15px;
                    line-height: 22px;
                    text-align: right;
                    letter-spacing: 0.03em;
                    color: #BDBDBD;
                }

            }
        }
    }
}
</style>
