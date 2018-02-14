<template>
  <div>
    <div class="weui-wepay-pay">
      <div class="weui-wepay-pay__bd">
        <div class="weui-wepay-pay__inner">
            <h1 class="weui-wepay-pay__title" v-html="title"></h1>
            <div class="weui-wepay-pay__inputs"> <strong class="weui-wepay-pay__strong" v-html="label || '￥'"></strong>
                <input type="number" class="weui-wepay-pay__input" :placeholder="placeholder" v-model="currentValue" number></div>
            <div class="weui-wepay-pay__intro">
              <slot name="description"><div v-html="description"></div></slot>
            </div>
        </div>
      </div>
      <div class="weui-wepay-pay__ft">
        <p class="weui-wepay-pay__info" v-html="info"></p>
        <div class="weui-wepay-pay__btn">
          <slot name="button"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wepay-input',
  props: ['title', 'description', 'placeholder', 'info', 'label', 'value'],
  created () {
    this.currentValue = this.value
  },
  data () {
    return {
      currentValue: ''
    }
  },
  watch: {
    value (newVal) {
      this.currentValue = newVal
    },
    currentValue (newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>

<style lang="less">
.weui-wepay-pay-wrap{
  background-color: #fbf9fe;
}
.weui-msg{
  position: relative;
  z-index: 1;
}
.weui-wepay-pay {
  position: relative;
  z-index: 1;
  padding: 15*@rem;
}
.weui-wepay-pay__inner {
  background-color: #FFFFFF;
  padding: 16*@rem;
  position: relative;
  z-index: 0;
}
.weui-wepay-pay__inner:after {
  content: " ";
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #DDDDDD;
  transform: scale(0.5);
  transform-origin: 0 0;
  box-sizing: border-box;
}
.weui-wepay-pay__title {
  
  color: #333333;
  font-weight: normal;
}
.weui-wepay-pay__inputs {
  margin-top: 12*@rem;
  padding-bottom: 18*@rem;
  position: relative;
  z-index: 2;
  color: #333333;
}
.weui-wepay-pay__inputs:after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1*@rem;
  border-bottom: 1px solid #DDDDDD;
  color: #DDDDDD;
  transform-origin: 0 100%;
  transform: scaleY(0.5);
}
.weui-wepay-pay__strong {
  position: absolute;
  color: #000000;
  font-size: 28*@rem;
  line-height: 1;
  left: -6*@rem;
  top: -3*@rem;
  font-weight: normal;
}
.weui-wepay-pay__input {
  padding-left: 28*@rem;
  width: 100%;
  box-sizing: border-box;
  border: none;
  outline: 0;
  height: 40*@rem;
  line-height: 40*@rem;
  font-size: 40*@rem;
}
.weui-wepay-pay__input::-webkit-textfield-decoration-container {
  background-color: transparent;
}
.weui-wepay-pay__input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.weui-wepay-pay__input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
.weui-wepay-pay__input::-webkit-input-placeholder {
  color: #EEEEEE;
}
.weui-wepay-pay__intro {
  
  color: #9e9e9e;
  margin-top: 14*@rem;
}
.weui-wepay-pay__info {
  
  color: #9e9e9e;
  margin-top: 16*@rem;
  text-align: center;
}
.weui-wepay-pay__btn {
  margin-top: 12*@rem;
}
.weui-wepay-logo-default{
  font-size: 16*@rem;
}
</style>