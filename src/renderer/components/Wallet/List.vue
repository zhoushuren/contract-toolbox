<template>
  <div class="box">
    <div class="line1" v-if="wallet2.editMode ===false">
      <div>{{wallet2.name}}</div>
      <div class="edit-del">
        <i class="el-icon-edit" @click="wallet2.editMode = true"></i>
        <i class="el-icon-delete" @click="deleteWallet"></i>
      </div>
    </div>
    <div v-if="wallet2.editMode" class="edit">
      <el-input
          type="text"
          placeholder="Wallet Name"
          v-model="wallet2.name"
          maxlength="10"
          show-word-limit
      />
      <el-input
          type="text"
          placeholder="Private Key"
          v-model="wallet2.privateKey"
      />
      <el-button type="primary" round @click="submit">Submit</el-button>
    </div>
    <div class="address">
      {{wallet2.address}}
    </div>
  </div>
</template>

<script>
import { privateKeyToAddress } from '../../lib/contract';
export default {
  props: {
    wallet2: {
      type: Object,
      default: {
        return: {
          name: '',
          privateKey: '',
          editMode: true,
        },
      },
    },
  },
  data() {
    return {
      text: '',
      editMode: true,
      address: '',
      wallet: {
        name: '',
        privateKey: '',
        editMode: true,
        address: '',
      },
    };
  },
  mounted() {
    console.log('aaa', this.wallet2);
  },
  methods: {
    submit() {
      this.wallet2.editMode = false;
      // 请求生成地址
      this.wallet2.address = privateKeyToAddress(this.wallet2.privateKey);
      console.log('aaaaaa', this.wallet2.address);
      this.$store.dispatch('setWallet', this.wallet2);
      // this.editMode = false;
    },
    deleteWallet() {
      this.$emit('deleteWallet');
    },
  },
};
</script>

<style scoped>
.box {
  width: 330px;
  height: 200px;
  background: #FFFFFF;
  box-shadow: 0px 6px 18px rgba(15, 65, 140, 0.08);
  border-radius: 8px;
  /*padding: 13px 15px 13px 15px;*/
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  padding: 20px;
  margin-top: 20px;
}
.line1{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.edit{
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.edit-del{
  width: 50px;
  display: flex;
  justify-content: space-between;
}
.address{
  font-size: 12px;
  color: #888484;
}
</style>
