<template>
  <div>

    <m-group title="禁用内置验证及显示成功或者错误样式">
      <m-input title="禁用验证" placeholder="I'm placeholder" novalidate :icon-type="iconType" :show-clear="false" @on-blur="onBlur" placeholder-align="right"></m-input>
    </m-group>
    <div style="padding:15px;">
      <m-button @click.native="iconType = 'success'" type="primary"> set success</m-button>
      <m-button @click.native="iconType = 'error'" type="primary"> set error</m-button>
      <m-button @click.native="iconType = ''" type="primary"> set empty</m-button>
    </div>

    <m-group title="is-type传入function">
      <m-input title="必须输入2333" :is-type="be2333" placeholder="I'm placeholder"></m-input>
    </m-group>

    <m-group title="mask">
      <m-input title="手机号码格式化" mask="999 9999 9999" v-model="maskValue" :max="13" is-type="china-mobile"></m-input>
      <m-cell title="value" :value="maskValue"></m-cell>
      <m-input title="(99) 9-99" mask="(99) 9-99" v-model="maskValue2" :max="9"></m-input>
    </m-group>

    <m-group title="使用icon代替title">
      <m-input title="必须输入2333" :is-type="be2333" placeholder="I'm placeholder">
        <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
      </m-input>
    </m-group>

    <m-group title="max is alias to maxlength">
      <m-input title='max=5' :max="5" @on-change="change" v-model="maxValue"></m-input>
    </m-group>

    <m-group title="debounce = 1000">
      <m-input title='debounce' :debounce="500" @on-change="change" v-model="debounceValue"></m-input>
    </m-group>

    <m-group title="disabled">
      <m-input title='value' disabled v-model="disabledValue"></m-input>
    </m-group>

    <m-group title="set type = tel">
      <m-input title='value' type="tel"></m-input>
    </m-group>


    <m-group title="html title">
      <m-input label-width="4em" :title='`<span style="${style}">hello</span>`' placeholder="I'm placeholder"></m-input>
    </m-group>
    <div style="padding:15px;">
      <m-button @click.native="style = 'color:red;'" type="primary">set red</m-button>
      <m-button @click.native="style = 'color:green'" type="primary">set green</m-button>
      <m-button @click.native="style = 'color:#000'" type="primary">set default</m-button>
    </div>

    <m-group title="Default">
      <m-input title="message" placeholder="I'm placeholder"></m-input>
    </m-group>

    <m-group title="不显示清除按钮">
      <m-input title="message" required placeholder="I'm placeholder" :show-clear="false" autocapitalize="characters"></m-input>
    </m-group>

    <m-group title="focus事件">
      <m-input title="focus-handler" placeholder="focus me!" :show-clear="true" @on-focus="onFocus"></m-input>
    </m-group>

    <m-group title="set is-type=china-name">
      <m-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></m-input>
    </m-group>

    <m-group title="set keyboard=number and is-type=china-mobile">
      <m-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></m-input>
    </m-group>

    <m-group title="set is-type=email">
      <m-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></m-input>
    </m-group>

    <m-group title="set min=2 and max=5">
      <m-input title="2-5个字符" placeholder="" :min="2" :max="5"></m-input>
    </m-group>

    <m-group title="确认输入">
      <m-input title="请输入6位数字" type="text" placeholder="" v-model="password" :min="6" :max="6" @on-change="change"></m-input>
      <m-input title="请确认6位数字" v-model="password2" type="text" placeholder="" :equal-with="password"></m-input>
    </m-group>

    <m-group title="enter事件">
      <m-input title="输入完成后回车" type="text" placeholder="" v-model="enterText"
        @on-enter="onEnter"></m-input>
    </m-group>

    <m-group title="验证码" class="weui-cells_form">
      <m-input title="验证码" class="weui-cell_vcode">
        <img slot="right" class="weui-vcode-img" src="https://i.loli.net/2017/09/18/59bf7f32425d5.jpg">
      </m-input>
      <m-input title="发送验证码" class="weui-vcode">
        <m-button slot="right" type="primary" mini>发送验证码</m-button>
      </m-input>
    </m-group>

    <m-group title="check if value is valid when required===true">
      <m-input title="message" placeholder="I'm placeholder" ref="input01" required></m-input>
      <m-cell title="click to get valid value" :value="'$valid value:' + valid1" @click.native="getValid1"></m-cell>
    </m-group>

     <m-group title="check if value is valid when required===false">
      <m-input title="message" placeholder="I'm placeholder" :required="false" ref="input02" @click.native="getValid2"></m-input>
      <m-cell title="click to get valid value" :value="'$valid value:' + valid2" @click.native="getValid2"></m-cell>
    </m-group>

  </div>
</template>

<script>
import { MInput, MGroup, MButton, MCell } from 'src/widgets'

export default {
  components: {
    MInput,
    MButton,
    MGroup,
    MCell
  },
  data () {
    return {
      password: '123465',
      password2: '',
      enterText: '',
      valid1: false,
      valid2: false,
      iconType: '',
      be2333: function (value) {
        return {
          valid: value === '2333',
          msg: 'Must be 2333'
        }
      },
      style: '',
      disabledValue: 'hello',
      debounceValue: '',
      maxValue: '',
      maskValue: '13545678910',
      maskValue2: ''
    }
  },
  methods: {
    getValid1 () {
      this.valid1 = this.$refs.input01.valid
    },
    getValid2 () {
      this.valid2 = this.$refs.input02.valid
    },
    change (val) {
      console.log('on change', val)
    },
    onBlur (val) {
      console.log('on blur', val)
    },
    onFocus (val, $event) {
      console.log('on focus', val, $event)
    },
    onEnter (val) {
      console.log('click enter!', val)
    }
  }
}
</script>
<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
