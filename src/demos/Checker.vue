<template>
  <div style="padding: 15px 0;">
    <m-divider>{{ $t('MRadio: no default value') }}</m-divider>
    <div class="box">
      <m-checker v-model="demo1" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
      <m-checker-item value="1">{{ $t('潘') }}</m-checker-item>
      <m-checker-item value="2">{{ $t('闲') }}</m-checker-item>
      <m-checker-item value="3">{{ $t('邓') }}</m-checker-item>
      <m-checker-item value="4">{{ $t('小') }}</m-checker-item>
      <m-checker-item value="5">{{ $t('驴') }}</m-checker-item>
      </m-checker>
      <br>
      <span>{{ $t('Current value is') }}: {{ demo1 }}</span>
      <br>
    </div>

    <m-divider>{{ $t('radioRequired') }}</m-divider>
    <div class="box">
      <m-checker v-model="demo1Required" radio-required default-item-class="demo1-item" selected-item-class="demo1-item-selected">
      <m-checker-item value="1">{{ $t('潘') }}</m-checker-item>
      <m-checker-item value="2">{{ $t('闲') }}</m-checker-item>
      <m-checker-item value="3">{{ $t('邓') }}</m-checker-item>
      <m-checker-item value="4">{{ $t('小') }}</m-checker-item>
      <m-checker-item value="5">{{ $t('驴') }}</m-checker-item>
      </m-checker>
      <br>
      <span>{{ $t('Current value is') }}: {{ demo1Required }}</span>
      <br>
    </div>

    <m-divider>{{ $t('MRadio: object value') }}</m-divider>
    <div class="box">
      <m-checker v-model="demo11" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <m-checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</m-checker-item>
      </m-checker>
      <br>
      <span>{{ $t('Current value is') }}: {{demo11}}</span>
      <br>
      <br>
      <m-checker v-model="demo12" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <m-checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</m-checker-item>
      </m-checker>
      <br>
      <span>{{ $t('Current value is') }}: {{demo12}}</span>
      <br>
    </div>

    <m-divider>{{ $t('Checkbox: object value') }}</m-divider>
    <div class="box">
      <m-checker v-model="demo21" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <m-checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</m-checker-item>
      </m-checker>
      <br>
      <span>{{ $t('Current value is') }}: {{demo21}}</span>
      <br>
      <br>
      <m-checker v-model="demo22" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <m-checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</m-checker-item>
      </m-checker>
      <br>
      <span>{{ $t('Current value is') }}: {{demo22}}</span>
       <br>
      <br>
      <m-checker v-model="demo23" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected" :max="2">
        <m-checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</m-checker-item>
      </m-checker>
      <br>
      <span>{{ $t('Current value is') }}: {{demo23}}</span>
      <br>
    </div>


    <m-divider>{{ $t('Checkbox') }}</m-divider>
    <div class="box">
       <m-checker v-model="demo1Checkbox" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <m-checker-item :value="1">{{ $t('白') }}</m-checker-item>
        <m-checker-item :value="2">{{ $t('富') }}</m-checker-item>
        <m-checker-item :value="3">{{ $t('美') }}</m-checker-item>
      </m-checker>
      <br>
      <span>{{ $t('Current value is') }}: {{demo1Checkbox}}</span>
      <br>
    </div>

    <m-divider>{{ $t('Checkbox with max limit 2') }}</m-divider>
    <div class="box">
      <m-checker v-model="demo1CheckboxMax" :max="2" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <m-checker-item value="1">1</m-checker-item>
        <m-checker-item value="2">2</m-checker-item>
        <m-checker-item value="3">3</m-checker-item>
      </m-checker>
      <br>
      <span>{{ $t('Current value is') }}: {{demo1CheckboxMax}}</span>
      <br>
    </div>

    <m-divider>{{ $t('Default value 2') }}</m-divider>
    <div class="box">
      <m-checker v-model="demo2" default-item-class="demo2-item" selected-item-class="demo2-item-selected">
        <m-checker-item value="1">1</m-checker-item>
        <m-checker-item value="2">2</m-checker-item>
        <m-checker-item value="3">3</m-checker-item>
      </m-checker>
      <br>
      <span>{{ $t('Current value is') }}: {{demo2}}</span>
      <br>
    </div>

    <m-divider>{{ $t('Custom styles') }}</m-divider>
    <div class="box">
       <m-checker v-model="demo3" default-item-class="demo3-item" selected-item-class="demo3-item-selected">
        <m-checker-item value="one">
          <img src="http://placeholder.qiniudn.com/80x50/FF3B3B/ffffff" alt="">
        </m-checker-item>
        <m-checker-item value="two">
          <img src="http://placeholder.qiniudn.com/80x50/FFEF7D/ffffff" alt="">
        </m-checker-item>
        <m-checker-item value="three">
          <img src="http://placeholder.qiniudn.com/80x50/8AEEB1/ffffff" alt="">
        </m-checker-item>
      </m-checker>
      <br>
      <span>{{ $t('Current value is') }}: {{demo3}}</span>
      <br>
    </div>

    <m-divider>{{ $t('Used in a popup') }}</m-divider>
    <m-group>
      <m-cell :title="$t('Select color')" :value="demo4" is-link @click.native="showPopup=true"></m-cell>
    </m-group>
    <div v-transfer-dom>
      <m-popup v-model="showPopup" class="checker-popup">
        <div style="padding:10px 10px 40px 10px;">
          <p style="padding: 5px 5px 5px 2px;color:#888;">Colors</p>
          <m-checker
          v-model="demo4"
          default-item-class="demo4-item"
          selected-item-class="demo4-item-selected"
          disabled-item-class="demo4-item-disabled">
            <m-checker-item :value="$t('花跟叶')" @on-item-click="onItemClick"> {{ $t('花跟叶') }} </m-checker-item>
            <m-checker-item :value="$t('鸟与树')" @on-item-click="onItemClick"> {{ $t('鸟与树') }} </m-checker-item>
            <m-checker-item :value="$t('我和你')" @on-item-click="onItemClick"> {{ $t('我和你') }} </m-checker-item>
            <m-checker-item :value="$t('全套礼品装')" disabled @on-item-click="onItemClick"> {{ $t('全套礼品装') }} </m-checker-item>
          </m-checker>
        </div>
      </m-popup>
    </div>

    <m-divider>{{ $t('A real world radio example') }} {{demo5}}</m-divider>
    <m-checker
    v-model="demo5"
    default-item-class="demo5-item"
    selected-item-class="demo5-item-selected"
    >
      <m-checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">￥{{i*300}}</m-checker-item>
    </m-checker>
    <br/>
    <m-divider>{{ $t('A real world checkbox example') }} {{demo6}}</m-divider>
    <m-checker
    v-model="demo6"
    type="checkbox"
    default-item-class="demo5-item"
    selected-item-class="demo5-item-selected"
    >
      <m-checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">{{[$t('good'), $t('nice'),$t('awesome')][i - 1]}}</m-checker-item>
    </m-checker>
  </div>
</template>

<i18n>
'MRadio: no default value':
  zh-CN: 单选，默认不选中任何项
潘:
  en: A
闲:
  en: B
邓:
  en: C
小:
  en: D
驴:
  en: E
白:
  en: White
富:
  en: Rich
美:
  en: Beautiful
花跟叶:
  en: Red
鸟与树:
  en: Blue
我和你:
  en: Green
全套礼品装:
  en: Yellow
Checkbox:
  zh-CN: 多选
Checkbox with max limit 2:
  zh-CN: 多选，最多只能选2个
Current value is:
  zh-CN: 当前值为
Default value 2:
  zh-CN: 默认值 2
Custom styles:
  zh-CN: 自定义样式
Select color:
  zh-CN: 选择颜色
Used in a popup:
  zh-CN: MPopup 组件中使用
A real world radio example:
  zh-CN: 单选常见例子
A real world checkbox example:
  zh-CN: 多选常见例子
good:
  zh-CN: 好
nice:
  zh-CN: 很好
awesome:
  zh-CN: 特别好
'MRadio: object value':
  zh-CN: 单选：object类型
'Checkbox: object value':
  zh-CN: 多选：object类型
</i18n>

<script>
import { MChecker, CheckerItem, MDivider, MGroup, MCell, MPopup, TransferDom } from 'src/widgets'

export default {
  directives: {
    TransferDom
  },
  components: {
    MChecker,
    CheckerItem,
    MDivider,
    MGroup,
    MCell,
    MPopup
  },
  methods: {
    onItemClick (value, disabled) {
      console.log(value, disabled)
      if (!this.disabled) {
        this.showPopup = false
      }
    }
  },
  data () {
    return {
      items1: [{
        key: '1',
        value: 'A'
      }, {
        key: '2',
        value: 'B'
      }, {
        key: '3',
        value: 'C'
      }],
      demo1: '',
      demo1Required: '',
      demo11: null,
      demo12: {key: '2', value: 'B'},
      demo21: null,
      demo22: [{key: '2', value: 'B'}],
      demo23: null,
      demo1Checkbox: [2, 1],
      demo1CheckboxMax: ['2', '3'],
      demo2: '2',
      demo3: '',
      demo4: this.$t('花跟叶'),
      showPopup: false,
      demo5: 1,
      demo6: [2, 3]
    }
  }
}
</script>

<style scoped>
.box {
  padding: 0 15px;
}
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
.demo2-item {
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
}
.demo2-item-selected {
  border-color: green;
}
.demo3-item {
  padding: 5px 5px;
  font-size: 0;
}
.demo3-item-selected {
  outline: 1px solid #8B8AEE;
}
.demo4-item {
  background-color: #ddd;
  color: #222;
  font-size: 14px;
  padding: 5px 10px;
  margin-right: 10px;
  line-height: 18px;
  border-radius: 15px;
}
.demo4-item-selected {
  background-color: #FF3B3B;
  color: #fff;
}
.demo4-item-disabled {
  color: #999;
}
.demo5-item {
  width: 100px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 6px;
}
.demo5-item-selected {
  background: #ffffff url(../assets/demo/checker/active.png) no-repeat right bottom;
  border-color: #ff4a00;
}
</style>
