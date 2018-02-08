<template>
  <div>
    <div style="padding:15px;">
      <m-button @click.native="showPosition('top')" type="primary">Top</m-button>
      <m-button @click.native="showPosition('middle')" type="primary">Middle</m-button>
      <m-button @click.native="showPosition('bottom')" type="primary">Bottom</m-button>
      <m-button @click.native="showPosition('')" type="primary">Default</m-button>
    </div>

    <m-toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="Hello World" :position="position">{{ $t('Basic Usage') }}</m-toast>
    <m-group>
      <m-switch :title="$t('Basic Usage')" v-model="show1"></m-switch>
      <m-switch :title="$t('type:text')" v-model="show2"></m-switch>
      <m-switch :title="$t('type:cancel')" v-model="show3"></m-switch>
      <m-switch :title="$t('type:warn')" v-model="show4"></m-switch>
      <m-switch :title="$t('time:1s')" v-model="show5"></m-switch>
      <m-switch :title="$t('long text')" v-model="show6"></m-switch>
    </m-group>

    <m-toast v-model="show1" @on-hide="onHide">{{ $t('Basic Usage') }}</m-toast>
    <m-toast v-model="show2" type="text">{{$t('success')}}</m-toast>
    <m-toast v-model="show3" type="cancel">{{$t('type:cancel')}}</m-toast>
    <m-toast v-model="show4" type="warn">{{$t('type:warn')}}</m-toast>
    <m-toast v-model="show5" :time="1000">{{$t('time:1s')}}</m-toast>
    <m-toast v-model="show6" type="text" width="20em">{{$t('show me code')}}</m-toast>

    <m-group :title="$t('prop:text')">
      <m-switch :title="$t('type:success')" v-model="show7"></m-switch>
      <m-switch :title="$t('type:text')" v-model="show8"></m-switch>
    </m-group>

    <m-toast v-model="show7" text="Hello World"></m-toast>
    <m-toast v-model="show8" type="text" text="Hello World"></m-toast>

    <m-group :title="$t('As a plugin(>=v0.1.3)')">
      <m-switch :title="$t('default')" v-model="show9" @on-change="onChange"></m-switch>
    </m-group>
    <div style="padding:15px;">
      <m-button type="primary" @click.native="$zk.toast.text('How are you~', 'top')">use text function</m-button>
    </div>
  </div>
</template>

<i18n>
type:text:
  zh-CN: type为text
type:cancel:
  zh-CN: type为cancel
type:success:
  zh-CN: type为success
type:warn:
  zh-CN: type为警告
time:1s:
  zh-CN: 显示时间1s
long text:
  zh-CN: 很长的文字
success:
  zh-CN: 成功啦~
show me code:
  zh-CN: Talk is cheap, show me the code.
prop:text:
  zh-CN: 设置text
default:
  zh-CN: 默认
As a plugin(>=v0.1.3):
  zh-CN: 插件形式调用
position:
  zh-CN: 位置
</i18n>

<script>
import { MToast, MGroup, MSwitch, MButton } from 'widgets'

export default {
  components: {
    MToast,
    MGroup,
    MSwitch,
    MButton
  },
  methods: {
    showPosition (position) {
      this.position = position
      this.showPositionValue = true
    },
    onHide () {
      console.log('on hide')
    },
    onChange (val) {
      const _this = this
      if (val) {
        console.dir(this.$widgets)
        this.$zk.toast.show({
          text: 'Hello World',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding')
            _this.show9 = false
          }
        })
      } else {
        this.$zk.toast.hide()
      }
    }
  },
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      position: 'default',
      showPositionValue: false
    }
  }
}
</script>
