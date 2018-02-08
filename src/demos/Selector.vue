<template>
  <div>

    <m-group :title="'no placeholder, the current value is : ' + defaultValue">
      <selector ref="defaultValueRef" title="省份" :options="list" v-model="defaultValue"></selector>
    </m-group>

    <div style="padding:15px;">
      <m-button type="primary" @click.native="getValue('defaultValueRef')">get full value</m-button>
    </div>

    <m-group title="with placeholder">
      <selector placeholder="请选择省份" v-model="demo01" title="省份" name="district" :options="list" @on-change="onChange"></selector>
    </m-group>

    <m-group title="without title">
      <selector placeholder="请选择省份" v-model="demo02" :options="list"></selector>
    </m-group>

    <m-group title="set value=广西">
      <selector v-model="value1" title="省份" :options="plainList" @on-change="onChange"></selector>
    </m-group>

    <m-group title="readonly, displays just like a cell">
      <selector value="gd" readonly title="省份" :options="list"></selector>
    </m-group>

    <m-group title="use plain options">
      <selector ref="plainValueRef" value="C" title="MSelector" :options="list1" @on-change="onChange"></selector>
    </m-group>

    <div style="padding:15px;">
      <m-button type="primary" @click.native="getValue('plainValueRef')">get full value</m-button>
    </div>

    <m-group :title="'boolean selector: ' + value3">
      <selector v-model="value3" title="Vux Is Cool" :options="list2"></selector>
    </m-group>

    <m-group :title="$t('set valueMap for directly using API data')" label-width="5em">
      <selector ref="valueMapRef" v-model="valueMapValue" :value-map="['idValue', 'idLabel']" title="MSelector" :options="valueMapList" @on-change="onChange"></selector>
      <m-cell-box align-items="flex-start"><pre>{{ valueMapList }}</pre></m-cell-box>
      <m-cell title="value" :value="valueMapValue"></m-cell>
    </m-group>
    
    <div style="padding:15px;">
      <m-button type="primary" @click.native="getValue('valueMapRef')">get full value</m-button>
    </div>

  </div>
</template>

<script>
import { MSelector, MGroup, MCell, MCellbox, MButton } from 'src/widgets'

export default {
  components: {
    MGroup,
    MSelector,
    MCell,
    MCellbox,
    MButton
  },
  data () {
    return {
      demo01: null,
      demo02: '',
      defaultValue: 'gd',
      plainList: ['广东', '广西'],
      list: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}],
      list2: [{key: true, value: '是'}, {key: false, value: '否'}],
      value1: '广西',
      value3: true,
      list1: ['A', 'B', 'C'],
      valueMapValue: 'key01',
      valueMapList: [{
        idValue: 'key01',
        idLabel: 'value01',
        otherProp: 'prop01'
      }, {
        idValue: 'key02',
        idLabel: 'value02',
        otherProp: 'prop02'
      }]
    }
  },
  methods: {
    onChange (val) {
      console.log(val)
    },
    getValue (ref) {
      this.$zk.alert.show({
        title: 'getFullValue',
        content: this.$refs[ref].getFullValue()
      })
    }
  }
}
</script>
