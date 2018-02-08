<template>
  <div>
    <m-popup v-model="show" height="100%">
        <m-group title="更多">
          <m-popup-picker title="活动类型："
               :data="pickerList" v-model="pickerValue" :columns="1" show-name>
          </m-popup-picker>        
        </m-group>
</m-popup>
<a @click="show=true">show</a>
  </div>
</template>

<script>
import { MPopup, MPopuppicker, MGroup } from 'src/widgets'

export default {
  components: {
    MPopup,
    MPopuppicker,
    MGroup
  },
  data () {
    return {
      show: false,
      pickerList: [
        {name: '无', value: '', parent: 0},
        {name: '法会', value: '1', parent: 0},
        {name: '放生', value: '2', parent: 0}
      ],
      pickerValue: ['2']
    }
  }
}
</script>
