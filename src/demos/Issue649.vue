<template>
    <div class="record-component">
        <div>{{number}}</div>
        <m-range class="value-range" v-model="number" :min="min" :max="max" :step="step" :range-bar-height="rangeBarHeight" decimal></m-range>
    </div>
</template>

<script>
import { MRange } from 'src/widgets'

export default {
  data () {
    return {
      number: 10,
      min: 0,
      max: 250,
      step: 1,
      rangeBarHeight: 4,
      error: null
    }
  },
  components: {
    MRange
  }
}
</script>

<style scoped>
.record-component {
  padding: 10px 0 0;
}
.value-range {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 40px !important;
  margin-left: 40px !important;
}
</style>