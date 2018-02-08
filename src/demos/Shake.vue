<template>
  <div>
    <p style="text-align:center">shake your phone</p>
    <shake @shake="shake" :threshold="5"></shake>
  </div>
</template>

<script>
import { MShake } from 'src/widgets'

export default {
  components: {
    MShake
  },
  methods: {
    'on-shake' () {
      alert('share')
    }
  }
}
</script>
