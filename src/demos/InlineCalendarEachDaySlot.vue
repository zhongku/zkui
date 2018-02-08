<template>
  <div>
    <m-inline-calendar>
      <template slot="each-day" slot-scope="props"><!-- use scope="props" when vue < 2.5.0 -->
        <span v-show="props.isShow" :class="props.className">{{ props.date.date }}</span>
      </template>
    </m-inline-calendar>
  </div>
</template>

<script>
import { MInlinecalendar } from 'src/widgets'

export default {
  components: {
    MInlinecalendar
  }
}
</script>
