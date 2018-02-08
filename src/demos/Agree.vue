<template>
  <div>
    <m-agree>阅读并同意<a href="javascript:void(0);">《相关条款》</a></m-agree>
    <m-agree v-model="valueTrue">阅读并同意<a href="javascript:void(0);">《相关条款》</a></m-agree>
  </div>
</template>

<script>
import { MAgree } from 'src/widgets'

export default {
  components: {
    MAgree
  },
  data () {
    return {
      valueTrue: true
    }
  }
}
</script>