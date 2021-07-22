<template>
    <div class="sidebar">
        <div class="logo">
            <div class="logo-text">Contract Tools</div>
        </div>
        <div class="sidebar-menu">
            <div class="sidebar-menu-list">
                <div class="sidebar-menu-item" @click="select('wallet')"  :class="{ 'sidebar-menu-item-select' : navigate === 'wallet'}">
                    <div class="icon-wallet-noselected"/> <div>Wallet</div>
                </div>
                <div class="sidebar-menu-item " @click="select('account')"  :class="{ 'sidebar-menu-item-select' : navigate === 'account'}">
                    <div class="icon-account-noselected"/> <div>Contract</div>
                </div>
                <div class="line"></div>
            </div>
        </div>
        <div class="settings">
            <img src="../../assets/icon/settings.png" alt="">
        </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex';
  import TitleButton from '../TitleButton';
  export default {
    components: {
      TitleButton,
    },
    methods: {
      select(label) {
        this.$store.dispatch('changeMenu', label);
      },
    },
    computed: {
      ...mapState({
        navigate: state => state.home.navigate,
      }),
    },
  };
</script>

<style lang="scss" scoped>
.sidebar{
    width: 260px;
    height: 100%;
    display: flex;
    flex-direction: column;
}
    .logo{
        height: 54px;
        display: inline-block;
        padding: 17px 0px 15px 27px;

        background: #FFFFFF;
        img{
            width: 20px;
            height: 20px;
            display: inline-block;
            float: left;
        }
        .logo-text{
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 21px;
            letter-spacing: 0.03em;
            color: #000000;
            margin-left: 10px;
            display: inline-block;
            float: left;
            height: 23px;
        }
    }
.sidebar-menu{
    background: #FFFFFF;
    width: 260px;
    height: 100%;
    margin-top: 2px;
    .sidebar-menu-list{
        width: 199px;
        height: 237px;
        display: flex;
        flex-direction: column;
        margin: 52px 31px 0px 30px;
        .sidebar-menu-item{
            cursor: pointer;
            display: flex;
            height: 33px;
            width: 100%;
            padding: 7px 28.63px 7px 28.63px;
            border-radius: 4px;
            font-style: normal;
            font-weight: bold;
            font-size: 15px;
            line-height: 18px;
            letter-spacing: 0.03em;
            color: #BDBDBD;
            margin-bottom: 20px;
            .icon-wallet-noselected{
                width: 16.63px;
                height: 15.75px;
                display: inline-block;
                background: url("../../assets/icon/wallet-noselect.png");
                background-size: cover;
                margin-right: 12.75px;
            }
            .icon-account-noselected{
                width: 16.63px;
                height: 15.75px;
                display: inline-block;
                background: url("../../assets/icon/account.png");
                background-size: cover;
                margin-right: 12.75px;
            }
            .icon-comm-noselected{
                width: 16.63px;
                height: 15.75px;
                display: inline-block;
                background: url("../../assets/icon/community.png");
                background-size: cover;
                margin-right: 12.75px;
            }
        }
        .sidebar-menu-item-select {
            background: #1840C1;
            color: #FFFFFF;
            .icon-wallet-noselected{
                width: 16.63px;
                height: 15.75px;
                display: inline-block;
                background: url("../../assets/icon/wallet-selected.png");
                background-size: cover;
                margin-right: 12.75px;
            }
            .icon-account-noselected{
                width: 16.63px;
                height: 15.75px;
                display: inline-block;
                background: url("../../assets/icon/accounted.png");
                background-size: cover;
                margin-right: 12.75px;
            }
            .icon-comm-noselected{
                width: 16.63px;
                height: 15.75px;
                display: inline-block;
                background: url("../../assets/icon/communityed.png");
                background-size: cover;
                margin-right: 12.75px;
            }
        }
        .line{
            border: 1px solid #E0E0E0;
            display: inline-block;
            width: 173px;
            margin: 0 auto;
        }

        .donate{
            width: 140px;
            height: 36px;
            margin-top: 30.67px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                width: 36px;
                height: 36px;
            }
            .text{
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 17px;
                letter-spacing: 0.03em;
                color: #111111;

            }
        }

    }
}
.settings{
    background: #FFFFFF;

    img{
        width: 28px;
        height: 28px;
        margin: 0px 0px 37px 52px;
    }
}
</style>
