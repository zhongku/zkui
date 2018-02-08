<template>
  <div>
    <m-group>
      <m-cell v-for="(type, index) in types" :title="type" :key="type" :inline-desc="index === 3 ? 'size=40px' : ''">
        <spinner :type="type" :size="index === 3 ? '40px' : ''"></spinner>
      </m-cell>
    </m-group>
  </div>
</template>

<script>
import { MSpinner, MGroup, MCell } from 'src/widgets'

export default {
  components: {
    MSpinner,
    MCell,
    MGroup
  },
  data () {
    return {
      types: ['android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral']
    }
  }
}
</script>
