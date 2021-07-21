<template>
    <div class="content">
      <el-button @click="dialogFormVisible = true">
        Add Contract
        <i class="el-icon-plus"></i>
      </el-button>

      <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
        <el-tab-pane
            v-for="(item, index) in contracts"
            :key="index"
            :label="item.name"
            :name="item.name"
        >
         <Page />
        </el-tab-pane>
      </el-tabs>
      <el-dialog title="Remark" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="Remark">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addContract()"> Submit</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Page from './Page';
  export default {
    data() {
      return {
        editableTabsValue: '0',
        form: {},
        dialogFormVisible: false,
      };
    },
    components: {
      Page,
    },
    computed: {
      ...mapState({
        contracts: state => state.contract.contracts,
      }),
    },
    methods: {
      removeTab(targetName) {
        this.$store.dispatch('rmContract', targetName);
      },
      addContract() {
        this.$store.dispatch('addContract', this.form);
        this.dialogFormVisible = false;
      },
    },
  };
</script>

<style lang="scss" scoped>
.content{
    padding: 40px 38px 32px 38px;
    padding-right: 40px;
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: space-between;*/
}
    .card-list{
        display: flex;
        justify-content: start;

    }
    .line1{
      display: flex;
      flex-direction: row;
    }
.add-contract{
  //margin: 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  //line-height: 21px;
  letter-spacing: 0.03em;
  color: #000000;
  //display: inline-block;
  float: left;
  //width: 223px;
  //height: 53px;
}
</style>
