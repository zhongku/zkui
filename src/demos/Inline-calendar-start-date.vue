<template>
<div>
  <m-divider>set start-date as TODAY</m-divider>
  <m-inline-calendar
  start-date="TODAY"
  end-date="2017-06-18">
  </m-inline-calendar>
   <m-divider>set end-date as TODAY</m-divider>
  <m-inline-calendar
  end-date="TODAY">
  </m-inline-calendar>
  
</div>
</template>

<script>
import { MInlinecalendar, MDivider } from 'src/widgets'

export default {
  data () {
    return {
    }
  },
  components: {
    MInlinecalendar,
    MDivider
  }
}
</script>

