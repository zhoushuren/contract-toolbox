<template>
    <div class="content">
        <div class="line1">
            <Account/>
            <Transaction/>
        </div>

        <div class="line2">
            <Recent/>
            <Portfoilo/>
            <MiniProgram/>
        </div>
    </div>
</template>

<script>
  import Account from './Account';
  import Transaction from './Transaction';
  import Recent from './Recent';
  import Portfoilo from './Portfoilo';
  import MiniProgram from './MiniProgram';
  import CarouselAccount from './CarouselAccount';

  export default {
    components: {
      Account,
      Transaction,
      Recent,
      Portfoilo,
      MiniProgram,
      CarouselAccount,
    },
  };
</script>

<style lang="scss" scoped>
.content{
    display: flex;
    flex-direction: column;
}
.line1{
    display: flex;
    flex-direction: row;
}

.line2{
    display: flex;
    flex-direction: row;
}
</style>
