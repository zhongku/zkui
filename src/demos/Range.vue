<template>
  <div>
    <m-group title="default range">
      <m-cell title="Default" :inline-desc="'value: '+data1" primary="content">
        <m-range v-model="data1" @on-change="onChange"></m-range>
      </m-cell>
      <m-cell title="allow decimals" :inline-desc="'value is: '+data2" primary="content">
        <m-range v-model="data2" decimal></m-range>
      </m-cell>
      <m-cell title="value=20" :inline-desc="'value is: '+data3" primary="content">
        <m-range v-model="data3"></m-range>
      </m-cell>
    </m-group>
    <m-group title="min and max">
      <m-cell title="min=8" :inline-desc="'value is: '+data4" primary="content">
        <m-range v-model="data4" :min="8"></m-range>
      </m-cell>
      <m-cell title="max=88" :inline-desc="'value is: '+data5" primary="content">
        <m-range v-model="data5" :max="88"></m-range>
      </m-cell>
      <m-cell title="min and max" :inline-desc="'value is: '+data6" primary="content">
        <m-range v-model="data6" :min="7" :max="77"></m-range>
      </m-cell>
      <m-cell title="change min and max" primary="content">
        <m-range v-model="dynamiValue" :min="min" :max="max" :step="step"></m-range>
      </m-cell>
      <m-cell title="current value" :value="dynamiValue + ''"></m-cell>
    </m-group>
    <br>
    <div style="margin:0 10px;">
      <m-button type="primary" @click.native="update">update min = {{min}}, max = {{max}} and step = {{step}}</m-button>
    </div>

    <m-group title="MStep">
      <m-cell title="step=10" :inline-desc="'valus is: '+data7" primary="content">
        <m-range v-model="data7" :min="7" :max="77" :step="10"></m-range>
      </m-cell>
    </m-group>

    <m-group title="disabled">
      <m-cell title="disabled=true" :inline-desc="'valus is: '+data8" primary="content">
        <m-range v-model="data8" disabled></m-range>
      </m-cell>
      <m-cell title="Opacity" :inline-desc="'valus is: '+data8" primary="content">
        <m-range v-model="data8" disabled :disabled-opacity="0.1"></m-range>
      </m-cell>
    </m-group>

    <m-group title="bar height">
      <m-cell title="Line width" :inline-desc="'value is: '+data9" primary="content">
        <m-range v-model="data9" :range-bar-height="4"></m-range>
      </m-cell>
    </m-group>

    <m-group title="custom min and max html">
      <m-cell title="文字大小" :inline-desc="'font size: ' + data10" primary="content">
        <m-range v-model="data10" :min="12" :max="22" min-HTML="<span style='font-size:12px;'>小</span>" max-HTML="<span style='font-size:22px;'>大</span>"></m-range>
      </m-cell>
      <m-cell title="bcontentness" :inline-desc="'value is: ' + data11 + '%'" primary="content">
        <m-range v-model="data11" min-HTML="<span style='font-size:16px;color:#F90;'>☼</span>" max-HTML="<span style='font-size:30px;color:#F90;'>☼</span>"></m-range>
      </m-cell>
    </m-group>

    <m-group title="two way binding">
      <m-cell title="Default" primary="content">
        <m-range v-model="data12"></m-range>
      </m-cell>
      <m-cell title="Default" primary="content">
        <m-range v-model="data12"></m-range>
      </m-cell>
    </m-group>

    <m-group :title="'use v-show ' + 'data: ' + data13">
      <m-cell title="Default" primary="content">
        <m-range :step="10" v-model="data13" v-show="showData13"></m-range>
      </m-cell>
    </m-group>

  </div>
</template>

<script>
import { MButton, MRange, MGroup, MGrouptitle, MCell } from 'src/widgets'

export default {
  components: {
    MRange,
    MGroup,
    MGrouptitle,
    MCell,
    MButton
  },
  mounted () {
    setTimeout(() => {
      this.showData13 = true
    }, 2000)
  },
  data () {
    return {
      data1: 0,
      data2: 0,
      data3: 20,
      data4: 18,
      data5: 28,
      data6: 37,
      data7: 17,
      data8: 25,
      data9: 50,
      data10: 14,
      data11: 30,
      data12: 0,
      data13: 10,
      showData13: false,
      min: 0,
      max: 100,
      step: 1,
      dynamiValue: 0
    }
  },
  methods: {
    onChange (val) {
      console.log('change', val)
    },
    update () {
      this.min = Math.floor(Math.random() * 30)
      this.max = Math.floor(50 + Math.random() * 100)
      this.step = 1 + Math.floor(Math.random() * 10)
    }
  }
}
</script>
