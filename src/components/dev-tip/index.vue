<template>
  <div class="vux-dev-tip">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'dev-tip'
}
</script>

<style>
.vux-dev-tip {
  padding:5px 10*@rem;
  background-color: #FFCC00;
  color:#000;
  margin-bottom:0.3em;
  font-size:12*@rem;
}
</style>
