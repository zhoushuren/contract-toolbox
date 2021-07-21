<template>
    <div class="title-button">
        <div class="close" @click="close">
            <i class="x"></i>
            <i class="y"></i>
        </div>
        <div class="min" @click="min">
            <i class="x"></i>
        </div>
        <div class="max">

        </div>
    </div>
</template>

<script>
  import { ipcRenderer } from 'electron';
  export default {
    methods: {
      min() {
        ipcRenderer.send('min');
      },
      max() {
        ipcRenderer.send('max');
      },
      close() {
        ipcRenderer.send('close');
      },
    },
  };
</script>

<style lang="scss" scoped>
.title-button{
    display: flex;
    justify-content: space-around;
    width: 65px;
    height: 14px;
    .close{
        width: 14px;
        height: 14px;
        background: #FE5646;
        border-radius: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .min{
        width: 14px;
        height: 14px;
        background: #FFC02D;
        border-radius: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .max{
        width: 14px;
        height: 14px;
        background: #5ADD41;
        border-radius: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        .x{
            position: absolute;
            width: 5px;
            height: 5px;
            background: #41A62E;
        }
    }
}
.title-button:hover {
    .close {
        .x{
            display: inline-block;
            width: 1.61px;
            height: 9.65px;
            background: #D32717;
            transform: rotate(45deg);
            position: absolute;
        }
        .y{
            display: inline-block;
            width: 1.61px;
            height: 9.65px;
            background: #D32717;
            transform: rotate(-45deg);
            position: absolute;
        }
    }
    .min{
        .x {
            display: inline-block;
            width: 1.61px;
            height: 9.65px;
            background: #E1A822;
            transform: rotate(90deg);
            position: absolute;
        }
    }
}
</style>
