<template>
  <div>
    <m-group>
      <m-switch :title="$t('Show Me')" v-model="show"></m-switch>
    </m-group>
    <div v-transfer-dom>
      <m-alert v-model="show" :title="$t('Congratulations')" @on-show="onShow" @on-hide="onHide"> {{ $t('Your Message is sent successfully~') }}</m-alert>
    </div>

    <m-group title="Prop: content">
      <m-switch :title="$t('Show Me')" v-model="show2"></m-switch>
    </m-group>
    <div v-transfer-dom>
      <m-alert v-model="show2" :title="$t('Congratulations')" :content="$t('Your Message is sent successfully~')"></m-alert>
    </div>

    <m-group :title="$t('Use as a plugin')">
      <m-cell :title="$t('Show Me')" @click.native="showPlugin" is-link></m-cell>
      <m-cell :title="$t('Will auto close in 3s')" @click.native="showPluginAuto" is-link></m-cell>
    </m-group>

    <m-group :title="$t('Use as a module')">
      <m-cell :title="$t('Show Me')" @click.native="showModule" is-link></m-cell>
      <m-cell :title="$t('Will auto close in 3s')" @click.native="showModuleAuto" is-link></m-cell>
    </m-group>
  </div>
</template>

<i18n>
Show Me:
  zh-CN: 显示
Use as a plugin:
  zh-CN: 以插件方式调用
Congratulations:
  zh-CN: 恭喜
Your Message is sent successfully~:
  zh-CN: 消息已成功发送
Do you m-agree?:
  zh-CN: 同意不?
Will auto close in 3s:
  zh-CN: 3秒后关闭
</i18n>

<script>
import { AlertModule, MAlert, MGroup, MSwitch, MCell, TransferDomDirective as TransferDom } from 'src/widgets'

export default {
  directives: {
    TransferDom
  },
  components: {
    MAlert,
    MGroup,
    MSwitch,
    MCell
  },
  data () {
    return {
      show: false,
      show1: false,
      show2: false
    }
  },
  methods: {
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    showPlugin () {
      this.$zk.alert.show({
        title: 'VUX is Cool',
        content: this.$t('Do you m-agree?'),
        onShow () {
          console.log('Plugin: I\'m showing')
        },
        onHide () {
          console.log('Plugin: I\'m hiding now')
        }
      })
    },
    showModule () {
      AlertModule.show({
        title: 'VUX is Cool',
        content: this.$t('Do you m-agree?'),
        onShow () {
          console.log('Module: I\'m showing')
        },
        onHide () {
          console.log('Module: I\'m hiding now')
        }
      })
    },
    showModuleAuto () {
      this.showModule()
      setTimeout(() => {
        AlertModule.hide()
      }, 3000)
    },
    showPluginAuto () {
      this.showPlugin()
      setTimeout(() => {
        this.$zk.alert.hide()
      }, 3000)
    }
  }
}
</script>
