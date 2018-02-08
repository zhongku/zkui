<template>
  <div>
    <m-inline-calendar v-model="value" @on-change="onChange"></m-inline-calendar>
    <br>
    {{ value }}
    <div style="padding:15px;">
      <m-button type="primary" @click.native="updateValue">update value</m-button>
    </div>
  </div>
</template>

<script>
import { MInlinecalendar, dateFormat, MButton } from 'src/widgets'

const today = dateFormat(new Date(), 'YYYY-MM-DD')
const yesterday = dateFormat(new Date().getTime() - 24 * 3600 * 1000, 'YYYY-MM-DD')

export default {
  components: {
    MInlinecalendar,
    MButton
  },
  data () {
    return {
      value: [yesterday, today]
    }
  },
  methods: {
    onChange (val) {
      console.log('on-change', val)
    },
    updateValue () {
      if (this.value.length === 1) {
        this.value = [yesterday, today]
      } else {
        this.value = [today]
      }
    }
  }
}
</script>
