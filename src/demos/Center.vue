<template>
  <div>
    <div style="margin:15*@rem;border:1px solid green;height:100*@rem;border-radius:5*@rem;" :class="item" v-for="item in ['vux-center-h', 'vux-center-v', 'vux-center']">
      <div style="text-align:center;">
        <div style="color:red;">.{{item}}</div>
        <div>Be Cool with Vue and WeUI</div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import '~vux/src/styles/vux/center';
</style>