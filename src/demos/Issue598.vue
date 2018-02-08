<template>
  <div>
    <m-group>
      <m-popup-picker title="Select" :inline-desc="value" :data="list" v-model="value" show-name ref="picker"></m-popup-picker>
    </m-group>
    <div style="padding:15px;">
      <m-button @click.native="getValue" type="primary">Get names</m-button>
    </div>
  </div>
</template>

<script>
import { MGroup, MPopuppicker, MButton } from 'src/widgets'

export default {
  components: {
    MGroup,
    MPopuppicker,
    MButton
  },
  methods: {
    getValue () {
      alert(this.$refs.picker.getNameValues())
    }
  },
  data () {
    return {
      value: ['', ''],
      list: [
        [
          {name: '全部', value: ''},
          {name: '相关性', value: 'relative'},
          {name: '入驻时间', value: 'time_asc'},
          {name: '新店推荐', value: 'time_desc'},
          {name: '店铺评价', value: 'rate_desc'},
          {name: '评价数', value: 'ratecount_desc'}
        ],
        [
          {name: '全部', value: ''},
          {name: '相关性', value: 'relative'},
          {name: '入驻时间', value: 'time_asc'},
          {name: '新店推荐', value: 'time_desc'},
          {name: '店铺评价', value: 'rate_desc'},
          {name: '评价数', value: 'ratecount_desc'}
        ]
      ]
    }
  }
}
</script>