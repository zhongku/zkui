<template>
  <div>
    <wepay-input title="支付金额" description="最多可输入金额500元" info="支付金额给商户" v-model="money">
      <m-button type="primary" slot="button">立即支付 {{money}}</m-button>
    </wepay-input>
  </div>
</template>

<script>
import { MWepayinput, MButton } from 'src/widgets'

export default {
  components: {
    MWepayinput,
    MButton
  },
  data () {
    return {
      money: ''
    }
  }
}
</script>