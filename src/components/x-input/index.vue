<template>
	<div class="vux-x-input weui-cell" :class="{'weui-cell_warn': showWarn, 'disabled': disabled}">
    <div class="weui-cell__hd">
      <div :style="labelStyles" v-if="hasRestrictedLabel">
        <slot name="restricted-label"></slot>
      </div>
      <slot name="label">
        <label class="weui-label" :class="labelClass" :style="{width: labelWidth || $parent.labelWidth || labelWidthComputed, textAlign: $parent.labelAlign, marginRight: $parent.labelMarginRight}" v-if="title" v-html="title" :for="`vux-x-input-${uuid}`"></label>
        <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
      </slot>
    </div>
    <div class="weui-cell__bd weui-cell__primary" :class="placeholderAlign ? `vux-x-input-placeholder-${placeholderAlign}` : ''">
      <input
      :id="`vux-x-input-${uuid}`"
      v-if="!type || type === 'text'"
      class="weui-input"
      :maxlength="max"
      :autocomplete="autocomplete"
      :autocapitalize="autocapitalize"
      :autocorrect="autocorrect"
      :spellcheck="spellcheck"
      :style="inputStyle"
      type="text"
      :name="name"
      :pattern="pattern"
      :placeholder="placeholderTitle"
      :readonly="readonly"
      :disabled="disabled"
      v-model="currentValue"
      @focus="focusHandler"
      @blur="onBlur"
      @keyup="onKeyUp"
      ref="input"/>
      <input
      :id="`vux-x-input-${uuid}`"
      v-if="type === 'number'"
      class="weui-input"
      :maxlength="max"
      :autocomplete="autocomplete"
      :autocapitalize="autocapitalize"
      :autocorrect="autocorrect"
      :spellcheck="spellcheck"
      :style="inputStyle"
      type="number"
      :name="name"
      :pattern="pattern"
      :placeholder="placeholderTitle"
      :readonly="readonly"
      :disabled="disabled"
      v-model="currentValue"
      @focus="focusHandler"
      @blur="onBlur"
      @keyup="onKeyUp"
      ref="input"/>
      <input
      :id="`vux-x-input-${uuid}`"
      v-if="type === 'email'"
      class="weui-input"
      :maxlength="max"
      :autocomplete="autocomplete"
      :autocapitalize="autocapitalize"
      :autocorrect="autocorrect"
      :spellcheck="spellcheck"
      :style="inputStyle"
      type="email"
      :name="name"
      :pattern="pattern"
      :placeholder="placeholderTitle"
      :readonly="readonly"
      :disabled="disabled"
      v-model="currentValue"
      @focus="focusHandler"
      @blur="onBlur"
      @keyup="onKeyUp"
      ref="input"/>
      <input
      :id="`vux-x-input-${uuid}`"
      v-if="type === 'password'"
      class="weui-input"
      :maxlength="max"
      :autocomplete="autocomplete"
      :autocapitalize="autocapitalize"
      :autocorrect="autocorrect"
      :spellcheck="spellcheck"
      :style="inputStyle"
      type="password"
      :name="name"
      :pattern="pattern"
      :placeholder="placeholderTitle"
      :readonly="readonly"
      :disabled="disabled"
      v-model="currentValue"
      @focus="focusHandler"
      @blur="onBlur"
      @keyup="onKeyUp"
      ref="input"/>
      <input
      :id="`vux-x-input-${uuid}`"
      v-if="type === 'tel'"
      class="weui-input"
      :maxlength="max"
      :autocomplete="autocomplete"
      :autocapitalize="autocapitalize"
      :autocorrect="autocorrect"
      :spellcheck="spellcheck"
      :style="inputStyle"
      type="tel"
      :name="name"
      :pattern="pattern"
      :placeholder="placeholderTitle"
      :readonly="readonly"
      :disabled="disabled"
      v-model="currentValue"
      @focus="focusHandler"
      @blur="onBlur"
      @keyup="onKeyUp"
      ref="input"/>
    </div>
    <div class="weui-cell__ft">
      <!-- <m-icon name='zk-success' type="clear" v-show="!equalWith && showClear && currentValue && !readonly && !disabled" @click.native="clear"></m-icon> -->

      <m-icon name='zk-warning' @click.native="onClickErrorIcon" class="vux-input-icon" type="warn" :title="!valid ? firstError : ''" v-show="showWarn"></m-icon>
      <m-icon name='zk-warning' @click.native="onClickErrorIcon" class="vux-input-icon" type="warn" v-if="!novalidate && hasLengthEqual && dirty && equalWith && !valid"></m-icon>

      <m-icon name='zk-success' type="success" v-show="!novalidate && equalWith && equalWith === currentValue && valid"></m-icon>

      <m-icon name='zk-success' type="success" class="vux-input-icon" v-show="novalidate && iconType === 'success'"></m-icon>
      <m-icon name='zk-warning' type="warn" class="vux-input-icon" v-show="novalidate && iconType === 'error'"></m-icon>

      <slot name="right"></slot>
    </div>

    <toast
    v-model="showErrorToast"
    type="text"
    width="auto"
    :time="600">{{ firstError }}</toast>
  </div>
</template>

<script>
import Base from '../../libs/base'
import Icon from '../icon'
import Toast from '../toast'
import InlineDesc from '../inline-desc'
import isEmail from 'validator/lib/isEmail'
import isMobilePhone from 'validator/lib/isMobilePhone'
import isCurrency from 'validator/lib/isCurrency'
import Debounce from '../../tools/debounce'
import mask from 'vanilla-masker'

// 正则教程 https://www.npmjs.com/package/validator
// https://github.com/chriso/validator.js
const validators = {
  'email': {
    fn: isEmail,
    msg: '邮箱格式'
  },
  'mobile': {
    fn (str) {
      str = str.replace(/\s/g,"")
      return isMobilePhone(str, 'zh-CN')
    },
    msg: '手机号码'
  },
  'china-name': {
    fn (str) {
      return str.length >= 2 && str.length <= 6
    },
    msg: '中文姓名'
  },
  'idcard': {
    fn (str) {
      var regex = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      str = str.replace(/\s/g,"")
      return regex.test(str)
    },
    msg: '身份证号码'
  },
  'currency' : {
    fn (str) {
      str = str.replace(/\s/g,"")
        var xsd=str.toString().split(".")
            if(xsd.length>1){
            if(xsd[1].length === 1){
            str=str+"0"
        }
        }

      console.dir(isCurrency(str))
      return isCurrency(str)
    },
    msg: '金额格式不对，请输入两位小数以内的数字'
  }
}
export default {
  name: 'v-input',
  created () {
    this.currentValue = (this.value === undefined || this.value === null) ? '' : (this.mask ? this.maskValue(this.value) : this.value)
    if(this.placeholder === undefined || !this.placeholder){
      this.placeholderTitle = '请输入'+this.title
    }else{
      this.placeholderTitle = this.placeholder
    }

    /* istanbul ignore if */
    if (process.env.NODE_ENV === 'development') {
      if (!this.title && !this.placeholder && !this.currentValue) {
        console.warn('no title and no placeholder?')
      }
    }

    if (this.required && typeof this.currentValue === 'undefined') {
      this.valid = false
    }
    this.handleChangeEvent = true
    if (this.debounce) {
      this._debounce = Debounce(() => {
        this.$emit('on-change', this.currentValue)
      }, this.debounce)
    }
  },
  beforeMount () {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true
    }
  },
  beforeDestroy () {
    if (this._debounce) {
      this._debounce.cancel()
    }
  },
  mixins: [Base],
  components: {
    Icon,
    InlineDesc,
    Toast
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: [String, Number],
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    keyboard: String,
    inlineDesc: String,
    isType: [String, Function],
    min: Number,
    max: Number,
    showClear: {
      type: Boolean,
      default: true
    },
    equalWith: String,
    textAlign: String,
    // https://github.com/yisibl/blog/issues/3
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    novalidate: {
      type: Boolean,
      default: false
    },
    iconType: String,
    debounce: Number,
    placeholderAlign: String,
    labelWidth: String,
    mask: String,
    shouldToastError: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    labelStyles () {
      return {
        width: this.labelWidthComputed || this.$parent.labelWidth || this.labelWidthComputed,
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      }
    },
    labelClass () {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      }
    },
    pattern () {
      if (this.keyboard === 'number' || this.isType === 'mobile') {
        return '[0-9]*'
      }
    },
    labelWidthComputed () {
      const width = this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1
      if (width < 10) {
        return width + 'em'
      }
    },
    hasErrors () {
      return Object.keys(this.errors).length > 0
    },
    inputStyle () {
      if (this.textAlign) {
        return {
          textAlign: this.textAlign
        }
      }
    },
    showWarn () {
      return !this.novalidate && !this.equalWith && !this.valid && this.firstError && (this.touched || this.forceShowError)
    }
  },
  methods: {
    onClickErrorIcon () {
      if (this.shouldToastError && this.firstError) {
        this.showErrorToast = true
      }
      this.$emit('on-click-error-icon', this.firstError)
    },
    maskValue (val) {
      const val1 = this.mask ? mask.toPattern(val, this.mask) : val
      return val1
    },
    reset (value = '') {
      this.dirty = false
      this.currentValue = value
      this.firstError = ''
      this.valid = true
    },
    clear () {
      this.currentValue = ''
      this.focus()
    },
    focus () {
      this.$refs.input.focus()
    },
    blur () {
      this.$refs.input.blur()
    },
    focusHandler ($event) {
      this.$emit('on-focus', this.currentValue, $event)
    },
    onBlur ($event) {
      this.setTouched()
      this.validate()
      this.$emit('on-blur', this.currentValue, $event)
    },
    onKeyUp (e) {
      if (e.key === 'Enter') {
        e.target.blur()
        this.$emit('on-enter', this.currentValue, e)
      }
    },
    getError () {
      let key = Object.keys(this.errors)[0]
      this.firstError = this.errors[key]
    },
    validate () {
      if (typeof this.equalWith !== 'undefined') {
        this.validateEqual()
        return
      }
      this.errors = {}

      if (!this.currentValue && !this.required) {
        this.valid = true
        return
      }

      if (!this.currentValue && this.required) {
        this.valid = false
        this.formValid = false
        this.errors.required = '必填哦'
        this.getError()
        return
      }

      if (typeof this.isType === 'string') {
        const validator = validators[this.isType]
        if (validator) {
          let value = this.currentValue

          if (this.isType === 'mobile' && this.mask === '999 9999 9999') {
            value = this.currentValue.replace(/\s+/g, '')
          }

          this.valid = validator[ 'fn' ](value)
          if (!this.valid) {
            this.forceShowError = true
            this.errors.format = validator[ 'msg' ] + '格式不对哦~'
            this.getError()
            return
          } else {
            delete this.errors.format
          }
        }
      }

      if (typeof this.isType === 'function') {
        const validStatus = this.isType(this.currentValue)
        this.valid = validStatus.valid
        if (!this.valid) {
          this.errors.format = validStatus.msg
          this.forceShowError = true
          this.getError()
          return
        } else {
          delete this.errors.format
        }
      }

      if (this.min) {
        if (this.currentValue.length < this.min) {
          this.errors.min = `最少应该输入${this.min}个字符`
          this.valid = false
          this.formValid = false
          this.getError()
          return
        } else {
          delete this.errors.min
        }
      }

      if (this.max) {
        if (this.currentValue.length > this.max) {
          this.errors.max = `最多可以输入${this.max}个字符`
          this.valid = false
          this.formValid = false
          this.forceShowError = true
          return
        } else {
          this.forceShowError = false
          delete this.errors.max
        }
      }

      this.valid = true
    },
    validateEqual () {
      if (!this.equalWith && this.currentValue) {
        this.valid = false
        this.formValid = false
        this.errors.equal = '输入不一致'
        return
      }
      let willCheck = this.dirty || this.currentValue.length >= this.equalWith.length
      // 只在长度符合时显示正确与否
      if (willCheck && this.currentValue !== this.equalWith) {
        this.valid = false
        this.formValid = false
        this.errors.equal = '输入不一致'
        return
      } else {
        if (!this.currentValue && this.required) {
          this.valid = false
          this.formValid = false
        } else {
          this.valid = true
          this.formValid = false
          delete this.errors.equal
        }
      }
    }
  },
  data () {
    let data = {
      hasRestrictedLabel: false,
      firstError: '',
      forceShowError: false,
      hasLengthEqual: false,
      valid: true,
      formValid: true,
      currentValue: '',
      placeholderTitle: '',
      showErrorToast: false
    }
    return data
  },
  watch: {
    mask (val) {
      if (val && this.currentValue) {
        this.currentValue = this.maskValue(this.currentValue)
      }
    },
    valid () {
      this.getError()
    },
    value (val) {
      this.currentValue = val
    },
    equalWith (newVal) {
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true
        }
        this.validateEqual()
      } else {
        this.validate()
      }
    },
    currentValue (newVal) {
      if (!this.equalWith && newVal) {
        this.validateEqual()
      }
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true
        }
        this.validateEqual()
      } else {
        this.validate()
      }
      this.$emit('input', this.maskValue(newVal))
      if (this._debounce) {
        this._debounce()
      } else {
        this.$emit('on-change', newVal)
      }
    }
  }
}
</script>

<style lang="less">
@import '../../styles/widget/weui_cell/weui_access';
@import '../../styles/widget/weui_cell/weui_cell_global';
@import '../../styles/widget/weui_cell/weui_form/weui_form_common';
@import '../../styles/widget/weui_cell/weui_form/weui_vcode';
.vux-x-input .vux-x-input-placeholder-right input::-webkit-input-placeholder {
  text-align: right;
}
.vux-x-input .vux-x-input-placeholder-center input::-webkit-input-placeholder {
  text-align: center;
}
.vux-x-input .vux-input-icon {
  font-size: 21*@rem;
}
.vux-input-icon.weui-icon-warn:before, .vux-input-icon.weui-icon-success:before {
  font-size: 21*@rem;
}
.vux-x-input .weui-icon {
  padding-left: 5*@rem;
}
.vux-x-input.weui-cell_vcode {
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
}
.vux-x-input.disabled {
  color: rgba(0, 0, 0, 0.3);
}
</style>
