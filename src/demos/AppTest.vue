<template>
  <div>
    <m-group>
      <m-cell title="device id" :value="deviceId"></m-cell>
      <m-cell title="device model" :value="deviceModel"></m-cell>
    </m-group>
    <div style="padding:15px;">
      <m-button @click.native="alert" type="primary">Native MAlert</m-button>
      <m-button @click.native="toast" type="primary">Native MToast</m-button>
    </div>
  </div>
</template>

<script>
import { MGroup, MCell, MButton } from 'src/widgets'

export default {
  components: {
    MGroup,
    MCell,
    MButton
  },
  methods: {
    alert () {
      this.$api.alert({
        title: 'Hello World',
        msg: 'I\'m native alert',
        buttons: ['Cool']
      })
    },
    toast () {
      this.$api.toast({
        msg: 'Native MToast',
        duration: 6000,
        location: 'bottom'
      })
    }
  },
  mounted () {
    this.$deviceready(() => {
    /*  this.deviceId = api.deviceId
      this.deviceModel = api.deviceModel*/
      this.$api.setFullScreen({
        fullScreen: true
      })
      this.$api.setStatusBarStyle({
        style: 'dark',
        color: '#fff'
      })
    })
  },
  data () {
    return {
      deviceId: '',
      deviceModel: ''
    }
  }
}
</script>