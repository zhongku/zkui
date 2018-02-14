<template>
  <span v-text="text" :class="['vux-badge', {'vux-badge-dot': typeof text === 'undefined', 'vux-badge-single': typeof text !== 'undefined' && text.toString().length === 1}]"></span>
</template>

<script>
export default {
  name: 'badge',
  props: {
    text: [String, Number]
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';

.vux-badge {
  display: inline-block;
  text-align: center;
  background: @badge-bg-color;
  color: #fff;
  
  height: 16*@rem;
  line-height: 16*@rem;
  border-radius: 8*@rem;
  padding: 0 6*@rem;
  background-clip: padding-box;
  vertical-align: middle;
}
.vux-badge-single {
  padding: 0;
  width: 16*@rem;
}
.vux-badge-dot {
  height: auto;
  padding: 5px
}
</style>
