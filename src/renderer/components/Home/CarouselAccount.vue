<template>
    <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
            <Account/>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
  import Account from './Account';
  export default {
    components: {
      Account,
    },
  };
</script>

<style scoped>
.el-carousel{
    width: 746px;
    height: 449px;
}
.el-carousel >>> .el-carousel__container{
    width: 746px;
    height: 449px;
}

</style>
