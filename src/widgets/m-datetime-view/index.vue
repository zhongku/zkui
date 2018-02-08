<template>
  <div></div>
</template>

<script>
import Datetime from '../m-datetime'
import Picker from '../m-datetime/datetimepicker'
import objectAssign from 'object-assign'

export default {
  name: 'datetime-view',
  extends: Datetime,
  methods: {
    render () {
      this.$nextTick(() => {
        this.picker && this.picker.destroy()
        this.picker = new Picker(objectAssign(this.pickerOptions, {
          renderInline: true
        }))
        this.picker.show()
      })
    }
  }
}
</script>
