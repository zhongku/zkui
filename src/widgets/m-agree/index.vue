<template>
  <label :for="`vux-agree-${uuid}`" class="weui-agree">
    <input :id="`vux-agree-${uuid}`" type="checkbox" v-model="currentValue" class="weui-agree__checkbox">
    <span class="weui-agree__text">
      <slot>{{ text }}</slot>
    </span>
  </label>
</template>

<script>
import uuidMixin from 'src/service/mixins/uuid'

export default {
  name: 'v-agree',
  mixins: [uuidMixin],
  props: {
    value: {
      type: Boolean,
      default: true
    },
    text: String
  },
  created () {
    this.currentValue = this.value
  },
  data () {
    return {
      currentValue: false
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="less">
@import "../../assets/css/weui/weui.less";
@import "../../assets/css/vux-ui/index.less";
.weui-agree__text,.weui-agree__text a{
  font-size: 0.320rem;
}
</style>