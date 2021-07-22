<template>
  <div class="box">
    Contract execution result:
    <p class="text" v-if="loading">
      Loading...
    </p>
    <p class="json-text" v-else>
      <vue-json-pretty :path="'root'" :showLength="true" :data="result" :showSelectController="true" @click="handleClick"> </vue-json-pretty>
    </p>
  </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

export default {
  props: {
    result: {
      type: Object,
      default: {},
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    VueJsonPretty,
  },
  computed: {
  },
  methods: {
    handleClick() {},
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  //max-width: 1400px;
  min-height: 200px;
  background: #FFFFFF;
  box-shadow: 0px 6px 18px rgba(15, 65, 140, 0.08);
  border-radius: 8px;
  padding: 13px 15px 13px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  margin-top: 20px;
  overflow: hidden;
  word-break: break-all;
  .json-text{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
}
</style>
