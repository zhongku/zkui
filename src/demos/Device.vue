<template>
  <div>
    <m-group>
      <m-cell v-for="(item, key) in $device" :key="key" :title="key">{{item}}</m-cell>
    </m-group>
  </div>
</template>

<script>
import { MGroup, MCell } from 'src/widgets'

export default {
  components: {
    MGroup,
    MCell
  }
}
</script>