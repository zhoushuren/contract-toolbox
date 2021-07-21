<template>
    <div class="container">
        <div class="title">input mnemonic</div>
        <div class="box">
            <div @click="select(mnemonic)" class="item" :class="{selected:  result_mnemonics.indexOf(mnemonic) >= 0 ? true : false}" v-for="(mnemonic,index) in shuffle_mnemonics">{{mnemonic}}</div>
        </div>
        <div class="box">
            <div v-for="mnemonic in result_mnemonics" class="item">{{mnemonic}}</div>
        </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex';
  import _ from 'lodash';
  export default {
    data() {
      return {
        comfirm_mnemonics: new Set(),
        result_mnemonics: [],
      };
    },
    computed: {
      ...mapState({
        shuffle_mnemonics: state => _.shuffle(state.Mnemonic.mnemonic.split(' ')),
        correct_mnemonics: state => state.Mnemonic.mnemonic.split(' '),
      }),
    },
    methods: {
      select(mnemonic) {
        if (this.comfirm_mnemonics.has(mnemonic)) {
          this.comfirm_mnemonics.delete(mnemonic);
        } else {
          this.comfirm_mnemonics.add(mnemonic);
        }
        this.result_mnemonics = Array.from(this.comfirm_mnemonics);
      },
      submit() {
        // if (this.result_mnemonics.join('') === this.correct_mnemonics.join('')) {
        //   this.$store.dispatch('confirmMnemonic')
        // } else {
        //   alert('error')
        // }
      },
    },
  };
</script>

<style scoped>
.container{
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.title{
    font-size: 18px;
}

.box{
    width: 300px;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid red;
}
.item{
    height: 20px;
    margin: 10px;
    border: 1px solid green;
}
.selected {
    background: red;
}
</style>
