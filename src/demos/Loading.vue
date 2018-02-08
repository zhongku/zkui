<template>
  <div>
    <m-group>
      <m-switch :title="$t('Toggle')" v-model="show1" @on-change="show1change"></m-switch>
    </m-group>
    <div v-transfer-dom>
      <loading :show="show1" :text="text1"></loading>
    </div>
    <div style="padding: 15px;">
      <m-button @click.native="showLoading" type="primary">{{ $t('Show loading') }}</m-button>
    </div>
    <div style="padding: 15px;">
      <m-button @click.native="showDelayLoading" type="primary">{{ $t('Show delay loading') }}</m-button>
    </div>
  </div>
</template>

<i18n>
Show loading:
  en: show loading (close in 2s)
  zh-CN: 显示loading (2s后关闭)
Show delay loading:
  en: show loading delay after 1s
  zh-CN: 延时1s后显示
</i18n>

<script>
import { MLoading, MGroup, MSwitch, MButton, TransferDomDirective as TransferDom } from 'src/widgets'

export default {
  directives: {
    TransferDom
  },
  components: {
    MLoading,
    MGroup,
    MSwitch,
    MButton
  },
  data () {
    return {
      show1: false,
      text1: 'Processing'
    }
  },
  methods: {
    showLoading () {
      this.$zk.loading.show({
        text: 'MLoading'
      })
      setTimeout(() => {
        this.$zk.loading.hide()
      }, 2000)
    },
    showDelayLoading () {
      this.$zk.loading.show({
        text: 'MLoading',
        delay: 1e3
      })
      setTimeout(() => {
        this.$zk.loading.hide()
      }, 2000)
    },
    show1change (val) {
      if (val) {
        tick(0, (percent) => {
          if (percent === 100) {
            this.show1 = false
            return
          }
          this.text1 = `${percent}%`
        })
      }
    }
  }
}

function tick (i, cb) {
  setTimeout(function () {
    i++
    cb(i)
    if (i < 100) {
      tick(i, cb)
    }
  }, 10)
}
</script>
