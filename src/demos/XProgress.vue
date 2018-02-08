<template>
  <div>
    <br>
    <m-progress :percent="percent1"></m-progress>
    <br>
    <box gap="10px">
      <m-progress :percent="percent2" :show-cancel="false"></m-progress>
    </box>
  </div>
</template>

<script>
import { MProgress, MBox } from 'src/widgets'

export default {
  components: {
    MProgress,
    MBox
  },
  data () {
    return {
      percent1: 30,
      percent2: 60
    }
  }
}
</script>
