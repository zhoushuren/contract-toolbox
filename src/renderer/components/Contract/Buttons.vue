<template>
  <div class="box">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item v-for="(val, index ) in funcNoParams" class="form-label">
        <el-button size="mini" :disabled="!isOk" :loading="loading" type="primary" @click="call(index, val.name)" v-if="!val.select && val.stateMutability === 'nonpayable'">{{val.name}}</el-button>
        <el-button size="mini" :disabled="!isOk" :loading="loading" v-else-if="val.stateMutability === 'view' && !val.select" type="success" @click="callNoParams(index, val.name, val.stateMutability)">{{val.name}}</el-button>
      </el-form-item>

      <!--params-->
      <el-form-item v-for="(val, index ) in abiFun" class="form-label">
        <el-input size="mini" v-model="formString[val.name]" :placeholder="val.name" v-if="!val.select && val.inputs.length > 0"></el-input>
        <i v-if="val.inputs.length >1 " class="el-icon-arrow-down"  @click="select(index)" />
        <el-button size="mini" @click="callStringParams(index, val.name, val.stateMutability)" :loading="loading" :disabled="!isOk" type="primary" v-if="!val.select">{{val.name}}</el-button>

        <div class="sub-input" v-if="val.select">
          <el-input size="mini"  v-for="inp in val.inputs" v-model="form[inp.name]" :placeholder="inp.name + '(' + inp.type + ')' " />
          <el-button size="mini" :disabled="!isOk" type="primary" :loading="loading" @click="callParams(index, val.name, val.stateMutability)">{{val.name}}</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    abi: {
      type: String,
      default: '',
    },
    isOk: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      formInline: '',
      abiFun: [],
      funcNoParams: [],
      form: [],
      formString: [],
    };
  },
  computed: {
    // ...mapState({
    //   abi: state => state.contract.abi,
    //   contractAddress: state => state.contract.contractAddress,
    // }),
  },
  watch: {
    abi(val) {
      this.readerForm(val);
    },
  },
  mounted() {
    this.readerForm(this.abi);
  },
  methods: {
    readerForm(abi) {
      try {
        const objABI = JSON.parse(abi);
        // console.log(objABI);
        // 分有参数和没参数的两种
        const fun = [];
        const funcNoParams = [];
        // eslint-disable-next-line no-restricted-syntax
        for (const val of objABI) {
          if (val.type === 'function') {
            if (val.inputs.length === 0) {
              funcNoParams.push(val);
            } else {
              fun.push({
                ...val,
              });
            }
          }
        }
        this.abiFun = fun;
        // console.log(funcNoParams);
        this.funcNoParams = funcNoParams;
      } catch (e) {
        // console.error(e);
      }
    },
    select(index) {
      // console.log('aaaaa', !this.abiFun[index].select, index);
      this.abiFun[index].select = !this.abiFun[index].select;
      this.$set(this.abiFun, index, this.abiFun[index]);
    },
    async callNoParams(index, name, stateMutability) {
      // 计算参数
      const paramsArr = [];
      console.log('callView2111', name, paramsArr, stateMutability);
      if (stateMutability === 'view') {
        console.log('onClick', { name, paramsArr, stateMutability });
        this.$emit('onClick', { name, paramsArr, stateMutability });
      } else if (stateMutability === 'nonpayable') {
        this.sendTx(index, name, paramsArr);
      }
    },
    async callParams(index, name, stateMutability) {
      // 计算参数
      const paramsArr = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const val of this.abiFun[index].inputs) {
        paramsArr.push(this.form[val.name]);
      }
      this.$emit('onClick', { name, paramsArr, stateMutability });
    },
    async sendTx(index, name, noParams, stateMutability) {
      console.log('sendTx but', index, name, noParams);
      this.$emit('onClick', { name, noParams, stateMutability });
    },
    callStringParams(index, name, stateMutability) {
      // const paramsArr = [];
      const str = this.formString[name];
      try {
        const arr = str.split(',');
        console.log('callStringParams', str, arr);
        if (arr.length !== this.abiFun[index].inputs.length) {
          throw new Error('params len err');
        }
        console.log('callStringParams', index, name, stateMutability, str, arr);
        this.$emit('onClick', { name, paramsArr: arr, stateMutability });
      } catch (e) {
        console.log('build string', e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  //height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 6px 18px rgba(15, 65, 140, 0.08);
  border-radius: 8px;
  padding: 13px 15px 13px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  .form-label{
    //display: flex;
    //flex-direction: row;
  }
  .el-input {
    width: 280px;
  }

  .sub-input{
    display: flex;
    flex-direction: column;
    .el-input{
      margin: 5px 0px 5px 0px;
    }
  }
}
</style>
