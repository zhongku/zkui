<template>
  <div class="vux-cell-box">
    <div class="weui-cell vux-tap-active weui-cell_access" @click="onClick" v-show="showCell">
      <div class="weui-cell__hd">
        <slot name="title" label-class="weui-label" :label-style="labelStyles" :label-title="title">
          <label class="weui-label" :class="labelClass" :style="labelStyles" v-if="title" v-html="title"></label>
        </slot>
        <m-inline-desc v-if="inlineDesc">{{ inlineDesc }}</m-inline-desc>
      </div>
      <div class="vux-cell-primary vux-popup-picker-select-box">
        <div class="vux-popup-picker-select" :style="{textAlign: valueTextAlign}">
          <span class="vux-popup-picker-value vux-cell-value" v-if="!displayFormat && !showName && value.length">{{value | array2string}}</span>
          <span class="vux-popup-picker-value vux-cell-value" v-if="!displayFormat && showName && value.length">{{value | value2name(data)}}</span>
          <span class="vux-popup-picker-value vux-cell-value" v-if="displayFormat && value.length">{{ displayFormat(value, value2name(value, data)) }}</span>
          <span v-if="!value.length && placeholder" v-text="placeholder" class="vux-popup-picker-placeholder vux-cell-placeholder"></span>
        </div>
      </div>
      <div class="weui-cell__ft">
      </div>
    </div>

    <div v-transfer-dom="isTransferDom">
      <popup
      v-model="showValue"
      class="vux-popup-picker"
      :id="`vux-popup-picker-${uuid}`"
      @on-hide="onPopupHide"
      @on-show="onPopupShow"
      :popup-style="popupStyle">
        <div class="vux-popup-picker-container">
          <div class="m-popup-parameter">
                <ul class="m-popup-parameter-top">
                  <li class="top-img">
                    <img src="../../../static/images/swiper/01.jpg" alt="qwe">
                  </li>
                  <li class="top-title">
                    <p>杨雨哥的阿迪达斯</p>
                    <span>￥15.9</span>
                  </li>
                </ul>
                <h2>颜色</h2>
              <ul class="m-popup-parameter-color">
                 <li class="active">粉色</li>
              </ul>
                <h2>尺码</h2>
              <ul class="m-popup-parameter-size">
                <li class="active">120cm</li>
              </ul>

            <m-number  name="num" :title="Ltitle" :min="0"></m-number>

            <div class="m-popup-parameter-bottom">
            <m-box gap="0.2rem 0.2rem">
              <m-button  type="primary" action-type="button" @click.native="onHide(true)" >去开团</m-button>
            </m-box>
            </div>
            <div class="m-popup-parameter-close" @click="onHide(false)">
              <div class="icon">
                <m-icon name="zk-close" class="metal"></m-icon>
              </div>
            </div>
          </div>
        </div>
      </popup>
    </div>

  </div>
</template>

<i18n>
cancel_text:
  en: cancel
  zh-CN: 取消
confirm_text:
  en: ok
  zh-CN: 完成
</i18n>

<script>
import Picker from '../m-picker'
import Cell from '../m-cell'
import Popup from '../m-popup'
import PopupHeader from '../m-popup-header'
import InlineDesc from '../m-inline-desc'
import FlexboxItem from '../m-flexbox/flexbox-item'
import Flexbox from '../m-flexbox/flexbox'
import array2string from 'src/service/filters/array2String'
import value2name from 'src/service/filters/value2name'
import uuidMixin from 'src/service/libs/mixin_uuid'
import TransferDom from 'src/service/directives/transfer-dom'

const getObject = function (obj) {
  return JSON.parse(JSON.stringify(obj))
}

export default {
  name: 'popup-picker',
  directives: {
    TransferDom
  },
  created () {
    if (typeof this.show !== 'undefined') {
      this.showValue = this.show
    }
  },
  mixins: [uuidMixin],
  components: {
    Picker,
    Cell,
    Popup,
    PopupHeader,
    Flexbox,
    FlexboxItem,
    InlineDesc
  },
  filters: {
    array2string,
    value2name
  },
  props: {
    valueTextAlign: {
      type: String,
      default: 'right'
    },
    title: String,
    cancelText: String,
    confirmText: String,
    data: {
      type: Array,
      default () {
        return []
      }
    },
    placeholder: String,
    columns: {
      type: Number,
      default: 0
    },
    fixedColumns: {
      type: Number,
      default: 0
    },
    value: {
      type: Array,
      default () {
        return []
      }
    },
    showValue: Boolean,
    showName: Boolean,
    inlineDesc: [String, Number, Array, Object, Boolean],
    showCell: {
      type: Boolean,
      default: true
    },
    show: Boolean,
    displayFormat: Function,
    isTransferDom: {
      type: Boolean,
      default: true
    },
    columnWidth: Array,
    popupStyle: Object,
    popupTitle: String
  },
  computed: {
    labelStyles () {
      return {
        display: 'block',
        width: this.$parent.labelWidth || this.$parent.$parent.labelWidth || 'auto',
        textAlign: this.$parent.labelAlign || this.$parent.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight || this.$parent.$parent.labelMarginRight
      }
    },
    labelClass () {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      }
    }
  },
  methods: {
    value2name,
    getNameValues () {
      return value2name(this.currentValue, this.data)
    },
    onClick () {
      this.showValue = true
    },
    onHide (type) {
      this.showValue = false
      if (type) {
        this.closeType = true
        this.currentValue = getObject(this.tempValue)
      }
      if (!type) {
        this.closeType = false
        if (this.value.length > 0) {
          this.tempValue = getObject(this.currentValue)
        }
      }
    },
    onPopupShow () {
      // reset close type to false
      this.closeType = false
      this.$emit('on-show')
    },
    onPopupHide (val) {
      if (this.value.length > 0) {
        this.tempValue = getObject(this.currentValue)
      }
      this.$emit('on-hide', this.closeType)
    },
    onPickerChange (val) {
      if (JSON.stringify(this.currentValue) !== JSON.stringify(val)) {
        // if has value, replace it
        if (this.value.length) {
          const nowData = JSON.stringify(this.data)
          if (nowData !== this.currentData && this.currentData !== '[]') {
            this.tempValue = getObject(val)
          }
          this.currentData = nowData
        } else { // if no value, stay quiet
          // if set to auto update, do update the value
        }
      }
      const _val = getObject(val)
      this.$emit('on-shadow-change', _val, value2name(_val, this.data).split(' '))
    }
  },
  watch: {
    value (val) {
      if (JSON.stringify(val) !== JSON.stringify(this.tempValue)) {
        this.tempValue = getObject(val)
        this.currentValue = getObject(val)
      }
    },
    currentValue (val) {
      this.$emit('input', getObject(val))
      this.$emit('on-change', getObject(val))
    },
    show (val) {
      this.showValue = val
    },
    showValue (val) {
      this.$emit('update:show', val)
    }
  },
  data () {
    return {
      onShowProcess: false,
      tempValue: getObject(this.value),
      closeType: false,
      currentData: JSON.stringify(this.data), // used for detecting if it is after data change

      currentValue: this.value,
      Ltitle:'购买数量',
      Btext:'关闭'
    }
  }
}
</script>

<style lang="less">
@import "../../assets/css/weui/weui.less";
@import "../../assets/css/vux-ui/index";
.vux-cell-primary {
  flex: 1;
}
.vux-cell-box {
  position: relative;
}
.vux-cell-box:not(:first-child):before {
  content: " ";
  position: absolute;
  top: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #D9D9D9;
  color: #D9D9D9;
  transform-origin: 0 0;
  transform: scaleY(0.5);
  left: 15px;
}
.vux-popup-picker-header {
  height: 44px;
  color: @popup-picker-header-text-color;
  background-color: @popup-picker-header-bg-color;
  font-size: @popup-picker-header-font-size;
  position: relative;
  &:after {
    .setBottomLine(#e5e5e5);
  }
}
.vux-popup-picker-value {
  /* display: inline-block; */
}
.vux-popup-picker-header-menu {
  text-align: left;
  padding-left: 15px;
  line-height: 44px;
}
.vux-popup-picker-header-menu-right {
  text-align: right;
  padding-right: 15px;
}
.vux-popup-picker-select {
  width: 100%;
  position: relative;
}
.vux-popup-picker-select-box.weui-cell__bd:after {
  content: " ";
  display: inline-block;
  transform: rotate(45deg);
  height: 6px;
  width: 6px;
  border-width: 2px 2px 0 0;
  border-color: #C8C8CD;
  border-style: solid;
  position: relative;
  top: -2px;
  position: absolute;
  top: 50%;
  right: 15px;
  margin-top: -3px;
}
.vux-popup-picker-cancel {
  color: @popup-picker-header-cancel-text-color;
}
.vux-popup-picker-placeholder {
  color: #999;
}
.vux-popup-dialog {
  background: white;
}
.m-popup-parameter{
  padding:10px 10px 3rem 10px;
  position: relative;
}
.m-popup-parameter-top{
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.m-popup-parameter-top li.top-title{
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.m-popup-parameter-top li.top-img>img{
    width: 4rem;
    height:4rem;
}
.m-popup-parameter-top li.top-title{
  padding-top:1rem;
  padding-left:10px;
}
.m-popup-parameter-top li.top-title >p{
    font-size:0.65rem;
    color:#000;
    margin-bottom:-0.2rem;
}
.m-popup-parameter-top li.top-title >span{
  font-size:0.65rem;
  color:#e60044;
}
.m-popup-parameter>h2{
  margin-top:0.5rem;
  font-size: 0.708rem;
  color:#000;
  height:1.5rem;
  line-height: 1.5rem;
}
.m-popup-parameter-color,.m-popup-parameter-size{
  border-bottom:1px solid rgba(229,229,229,.4);
}
  .m-popup-parameter-color:after,.m-popup-parameter-size:after{
    content: '';
    display: block;
    clear: both;
  }
.m-popup-parameter-color li,.m-popup-parameter-size li{
  float: left;
  margin-right:10px;
  margin-bottom:10px;
  padding:0 10px;
  background: #e5e5e5;
  border-radius: 10px;
}
.m-popup-parameter-color li.active ,.m-popup-parameter-size li.active{
  background: #e60044;
  color:white;
}
.m-popup-parameter div.weui-cell{
  border-bottom:1px solid rgba(229,229,229,.4);
}
  .m-popup-parameter div.weui-cell >div>p{
    color:#000;
    font-size:0.708rem;
  }
  .m-popup-parameter-bottom{
    position:absolute;
    bottom:0;
    left:0;
    width: 100%;
  }
  .m-popup-parameter-close{
    width: 1rem;
    height:1rem;
    position: absolute;
    top:10px;
    right:10px;
  }
</style>
