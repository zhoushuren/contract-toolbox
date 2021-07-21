<template>
    <div>
        <div>Backup</div>
        <div class="content">
            <div>{{mnemonic}}</div>
        </div>

    </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    computed: {
      ...mapState({
        mnemonic: state => state.Mnemonic.mnemonic,
      }),
    },
  };
</script>

<style scoped>

</style>
