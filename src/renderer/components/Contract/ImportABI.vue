<template>
  <div class="box">
    <el-form>
      <el-form-item
          prop="abiJSON"
          :rules="[
      { validator: checkJSON, message: 'JSON ERROR', trigger: 'blur'},
    ]"
      >
        <el-input
            @change="commitABI()"
            type="textarea"
            :autosize="{ minRows: 7, maxRows: 7}"
            placeholder="import ABI JSON"
            v-model="abiJSON">
        </el-input>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      abiJSON: '',
    };
  },
  methods: {
    // eslint-disable-next-line consistent-return
    commitABI() {
      // this.$store.dispatch('changeABI', this.abiJSON);
      try {
        JSON.parse(this.abiJSON);
        this.$emit('onChange', this.abiJSON);
      } catch (e) {
        return false;
      }
    },
    checkJSON(rule, value, cb) {
      try {
        JSON.parse(this.abiJSON);
        cb();
      } catch (e) {
        cb(e);
      }
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
