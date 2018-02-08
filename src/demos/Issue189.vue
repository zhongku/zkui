<template>
  <div>
    <m-divider>issue 189</m-divider>
    <m-group>
      <m-popup-picker title="test" :data="list3" :columns="3" :value.sync="value3" @on-shadow-change="onShadowChange" placeholder="Please select"></m-popup-picker>
    </m-group>
    <picker v-if="fuck" :data="list3" :columns="3" :value.sync="value3"></picker>
    <m-group>
      <m-cell title="value" :value="value3 | json"></m-cell>
    </m-group>
    <br>
    <div style="margin: 0 10px;">
      <m-button @click="update" type="primary">list 2</m-button>
      <m-button @click="update2" type="primary">list 1</m-button>
    </div>
  </div>
</template>

<script>
import { MCell, MGroup, MPicker, MPopuppicker, MButton, MDivider } from 'src/widgets'
const list = [{
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
}]

export default {
  components: {
    MCell,
    MPopuppicker,
    MGroup,
    MButton,
    MDivider,
    MPicker
  },
  methods: {
    onShadowChange (val) {
      console.log('on-shadow-change', val)
    },
    update () {
      this.list3 = [{
        name: 'a',
        value: 'a',
        parent: 0
      }, {
        name: 'b',
        value: 'b',
        parent: 0
      }, {
        name: 'c',
        value: 'c',
        parent: 'a'
      }, {
        name: 'd',
        value: 'd',
        parent: 'b'
      }]
    },
    update2 () {
      this.list3 = list
    }
  },
  data () {
    return {
      list3: list,
      value3: []
    }
  }
}
</script>
