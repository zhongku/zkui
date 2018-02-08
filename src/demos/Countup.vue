<template>
  <div style="text-align:center;">
    <m-countup :start-val="1" :end-val="1388" :duration="2" class="demo1"></m-countup>
    <br/>
    <m-countup :end-val="88.88" :duration="3" :decimals="2" class="demo1"></m-countup>
    <br>
    <m-countup :end-val="1024" :duration="4" :start="doStart" class="demo1"></m-countup>
    <div style="padding:0 15px;">
      <m-button @click.native="doStart=true" type="primary"> {{ $t('Start') }} </m-button>
    </div>
  </div>
</template>

<script>
import { MCountup, MButton } from 'src/widgets'

export default {
  components: {
    MCountup,
    MButton
  },
  data () {
    return {
      doStart: false
    }
  }
}
</script>

<style scoped>
.demo1 {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  font-size: 6em;
  color: #04BE02;
}
</style>
