<template>
  <div>
    <m-group label-width="4.5em" label-margin-right="2em" label-align="right">
      <m-cell title="MCell" value="value" is-link></m-cell>
      <m-cell title="MCell" value="value" is-link value-align="left"></m-cell>
      <m-input title="上报人" v-model="value1"></m-input>
      <m-input placeholder="I'm placeholder">
        <img slot="restricted-label" style="display:inline-block;vertical-align:middle;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
      </m-input>
      <m-input title="上<i class='vux-blank-half'></i>报<i class='vux-blank-half'></i>人" v-model="value1"></m-input>
      <m-number title="Quantity" align="left" v-model="numberValue" button-style="round" :min="0" :max="5"></m-number>
      <m-datetime title="时&emsp;&emsp;&nbsp;间" v-model="time1" value-text-align="left"></m-datetime>
      <selector title="隐患类别" :options="['工艺技术', '其他']" v-model="value2"></selector>
      <selector title="隐患类别" placeholder="Placeholder" :options="['工艺技术', '其他']" v-model="value7"></selector>
      <selector title="隐患类别" :options="['工艺技术', '其他']" v-model="value8"></selector>
      <m-input title="隐患部位" placeholder="必填" v-model="value3"></m-input>
      <m-input title="密码" type="password" placeholder="必填" v-model="value4"></m-input>
      <m-popup-picker title="请选择" :data="list" v-model="value5" value-text-align="left"></m-popup-picker>
      <m-popup-picker title="请选择" placeholder="Required" :data="list" v-model="value6" value-text-align="left"></m-popup-picker>
      <m-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></m-address>
      <m-textarea title="详细信息" placeholder="请填写详细信息" :show-counter="false" :rows="3"></m-textarea>
      <m-textarea placeholder="请填写详细信息" :show-counter="false" :rows="3">
        <img slot="restricted-label" style="display:inline-block;vertical-align:middle;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
      </m-textarea>
    </m-group>
    <br>
    <m-group>
      <m-group-title slot="title">I'm a title<span style="float:right;">right</span></m-group-title>
      <m-cell title="cell"></m-cell>
    </m-group>
    <br>
    <m-group title="justify" label-width="5.5em" label-margin-right="2em" label-align="justify">
      <m-cell title="哈哈" value="value" is-link></m-cell>
      <m-cell title="哈哈哈哈哈" value="value" is-link value-align="left"></m-cell>
      <m-input title="上报人" v-model="value1"></m-input>
      <m-number title="Quantity" align="left" v-model="numberValue" button-style="round" :min="0" :max="5"></m-number>
      <m-datetime title="时间" v-model="time1" value-text-align="left"></m-datetime>
      <selector title="隐患类别" :options="['工艺技术', '其他']" v-model="value2"></selector>
      <m-popup-picker title="请选择" :data="list" v-model="value5" value-text-align="left"></m-popup-picker>
      <m-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left" label-align="justify"></m-address>
      <m-switch title="选择"></m-switch>
      <m-textarea title="详细信息" placeholder="请填写详细信息" :show-counter="false" :rows="3"></m-textarea>
    </m-group>
    <br>
  </div>
</template>

<script>
  import { MGrouptitle, MGroup, MCell, MInput, MSelector, MPopuppicker, MDatetime, MNumber, ChinaAddressData, MAddress, MTextarea, MSwitch } from 'src/widgets'

  export default {
    components: {
      MGroup,
      MGrouptitle,
      MCell,
      MInput,
      MSelector,
      MPopuppicker,
      MAddress,
      MDatetime,
      MNumber,
      MTextarea,
      MSwitch
    },
    data () {
      return {
        addressData: ChinaAddressData,
        addressValue: ['广东省', '深圳市', '南山区'],
        value1: '张三',
        value2: '工艺技术',
        value3: '',
        value7: '',
        value8: '',
        value4: '',
        time1: '2017-06-01',
        value5: ['A'],
        value6: [],
        list: [['A', 'B', 'C']],
        numberValue: 0
      }
    }
  }
</script>
