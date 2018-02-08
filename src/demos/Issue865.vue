<template>
  <div>
    <m-group labelWidth="4em" label-margin-right="1em">
      <m-input title="密码" type="password" placeholder="请输入6~20位密码" required :min="6" :max="20" v-model="password" ref="password"></m-input>
      <m-input title="确认密码" :type="passwordType" placeholder="请确认输入" v-model="confirmPassword" required :min="6" :max="20" :equal-with="password" ref="confirmPassword" :show-clear="false">
        <span slot="right" @click="passwordType=passwordType === 'password' ? 'text' : 'password'">显示{{passwordType === 'password' ? '明文' : '密文'}}</span>
      </m-input>
    </m-group>
    <div style="padding:15px;">
      <m-button @click.native="getValid" type="primary">GET valid</m-button>
    </div>
  </div>
</template>

<script>
import { MGroup, MInput, MButton } from 'src/widgets'

export default {
  components: {
    MGroup,
    MInput,
    MButton
  },
  data () {
    return {
      password: '',
      confirmPassword: '',
      passwordType: 'password'
    }
  },
  methods: {
    getValid () {
      console.log(this.$refs.confirmPassword.valid)
    }
  }
}
</script>