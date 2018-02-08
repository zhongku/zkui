<template>
  <div>
    <m-group title="single column" label-width="5em">
      <m-popup-picker :title="title1" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" :placeholder="$t('please select')"></m-popup-picker>
      <m-popup-picker :popup-title="$t('please select')" :title="title1" :data="list1" v-model="value1_1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" :placeholder="$t('please select')">
        <template slot="title" slot-scope="props"><!-- use scope="props" when vue < 2.5.0 -->
          <span :class="props.labelClass" :style="props.labelStyle" style="height:24px;">
            <span class="demo-icon demo-icon-big" style="font-size:20px;vertical-align:middle;"></span>
            <span style="vertical-align:middle;">手机</span>
          </span>
        </template>
      </m-popup-picker>
    </m-group>
    <br>
    <div class="picker-buttons">
       <m-button type="primary" @click.native="value1=[]">将值置为空</m-button>
       <m-button type="primary" @click.native="changeList10">重新赋值列表</m-button>
       <m-button type="primary" @click.native="changeList11">push方式更改列表</m-button>
     </div>
     <m-group title="double columns">
       <m-popup-picker :title="title2" :data="list2" v-model="value2"></m-popup-picker>
     </m-group>
     <br>

     <m-group title="chained columns">
       <m-popup-picker :title="title3" :data="list3" :columns="3" v-model="value3" ref="picker3"></m-popup-picker>
       <m-cell title="获取值对应的文字" :value="$refs.picker3&&$refs.picker3.getNameValues()"></m-cell>
       <m-popup-picker :title="title4" :data="list3" :columns="3" v-model="value4" show-name></m-popup-picker>
     </m-group>

     <br>
     <div class="picker-buttons">
       <m-button type="primary" @click.native="changeList21">push方式更改列表</m-button>
     </div>

     <br>
     <m-divider>Control the visibility of popup-picker</m-divider>
     <div style="margin: 0 15px;">
       <m-button @click.native="showPopupPicker = true" type="primary">Show MPopuppicker. value: {{value5 }}</m-button>
     </div>
     <m-group>
       <m-popup-picker :show.sync="showPopupPicker" :show-cell="false" title="TEST" :data="[['1', '2', '3', '4', '5']]" v-model="value5"></m-popup-picker>
     </m-group>

     <br>
     <m-group title="隐藏时不影响其他popup-picker的mask">
       <m-switch title="ishide popup-picker" v-model="switch6"></m-switch>
       <m-popup-picker v-if="!switch6" title="显示值" :data="['我不会影响遮罩层'.split('')]" v-model="value6"></m-popup-picker>
     </m-group>

     <br>
     <br>

     <m-group title="显示格式化">
      <m-popup-picker title="时间" :inline-desc="`当前值[${formatDemoValue}]`"  v-model="formatDemoValue" :data="[['01','02','03'],['11','12','13']]" :display-format="format"></m-popup-picker>
     </m-group>
  </div>
</template>

<i18n>
please select:
  zh-CN: 请选择
</i18n>

<script>
import { MPopuppicker, MGroup, MCell, MPicker, MButton, MDivider, MSwitch } from 'src/widgets'

export default {
  components: {
    MPopuppicker,
    MGroup,
    MPicker,
    MButton,
    MDivider,
    MCell,
    MSwitch
  },
  methods: {
    onChange (val) {
      console.log('val change', val)
    },
    changeList10 () {
      this.list1 = [['小米1', 'iPhone1', '华为1', '情怀1', '三星1', '其他1', '不告诉你1']]
    },
    changeList11 () {
      this.list1[0].push('我是push条目')
    },
    changeList20 () {

    },
    changeList21 () {
      this.list3.push({
        name: '美国002_007',
        value: '0007',
        parent: 'usa002'
      })
    },
    onShow () {
      console.log('on show')
    },
    onHide (type) {
      console.log('on hide', type)
    }
  },
  data () {
    return {
      title1: '手机机型',
      title2: '详细机型',
      title3: '联动显示值',
      title4: '联动显示文字',
      list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
      list2: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你'], ['小米1', 'iPhone2', '华为3', '情怀4', '三星5', '其他6', '不告诉你7']],
      list3: [{
        name: '中国',
        value: 'china',
        parent: 0
      }, {
        name: '美国',
        value: 'USA',
        parent: 0
      }, {
        name: '广东',
        value: 'china001',
        parent: 'china'
      }, {
        name: '广西',
        value: 'china002',
        parent: 'china'
      }, {
        name: '美国001',
        value: 'usa001',
        parent: 'USA'
      }, {
        name: '美国002',
        value: 'usa002',
        parent: 'USA'
      }, {
        name: '广州',
        value: 'gz',
        parent: 'china001'
      }, {
        name: '深圳',
        value: 'sz',
        parent: 'china001'
      }, {
        name: '广西001',
        value: 'gx001',
        parent: 'china002'
      }, {
        name: '广西002',
        value: 'gx002',
        parent: 'china002'
      }, {
        name: '美国001_001',
        value: '0003',
        parent: 'usa001'
      }, {
        name: '美国001_002',
        value: '0004',
        parent: 'usa001'
      }, {
        name: '美国002_001',
        value: '0005',
        parent: 'usa002'
      }, {
        name: '美国002_002',
        value: '0006',
        parent: 'usa002'
      }],
      value1: ['iPhone'],
      value1_1: ['iPhone'],
      value2: ['iPhone', '华为3'],
      value3: [],
      value4: [],
      showPopupPicker: false,
      value5: ['2'],
      switch6: false,
      value6: [],
      formatDemoValue: ['01', '12'],
      format: function (value, name) {
        return `${value[0]}:${value[1]}`
      }
    }
  }
}
</script>

<style scoped>
.picker-buttons {
  margin: 0 15px;
}
</style>
