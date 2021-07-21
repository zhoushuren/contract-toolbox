<template>
  <div class="box">
    <el-input
        @change="commitAddress()"
        type="text"
        :autosize="{ minRows: 7, maxRows: 7}"
        placeholder="import contract Address"
        v-model="contractAddress">
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contractAddress: '',
    };
  },
  methods: {
    commitAddress() {
      // this.$store.dispatch('changeContractAddress', this.contractAddress);
      this.$emit('onChange', this.contractAddress);
    },
  },
};
</script>

<style scoped>
.box {
  width: 350px;
  height: 186px;
  background: #FFFFFF;
  box-shadow: 0px 6px 18px rgba(15, 65, 140, 0.08);
  border-radius: 8px;
  padding: 13px 15px 13px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
}
</style>
