<template>
  <section>
       <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__hd">
          <label class="weui-label">验证码</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" placeholder="请输入验证码" v-model="verifyPhoneCode">
        </div>
        <div class="weui-cell__ft">
          <button class="weui-vcode-btn" @click="sendMessage()">{{word}}</button>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      word: '发送验证码',
      isOvertime: false
    }
  },
  methods: {
    sendMessage(){
      if(this.isOvertime){
        return false
      }
      let that = this
      let time = 60
      var sendTimer = setInterval(function(){
        that.isOvertime = true
        time--
        that.word = "重新发送"+time
        if(time < 0){
          that.isOvertime = false
          clearInterval(sendTimer)
          that.word = "获取验证码"
        }
      },1000)
    }
  }
}
</script>

