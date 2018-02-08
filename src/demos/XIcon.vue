<template>
  <div>
    <m-group>
      <m-cell title="used in cell">
        <m-icon type="ios-plus" class="cell-x-icon" @click="console"></m-icon>
      </m-cell>
    </m-group>
    <div style="padding: 15px;">
      <m-icon type="ios-ionic-outline" size="30"></m-icon>
      <m-icon type="ios-arrow-back" size="30"></m-icon>
      <m-icon type="ios-arrow-forward" size="30"></m-icon>
      <m-icon type="ios-arrow-up" size="30"></m-icon>
      <m-icon type="ios-arrow-right" size="30"></m-icon>
      <m-icon type="ios-arrow-down" size="30"></m-icon>
      <m-icon type="ios-arrow-left" size="30"></m-icon>
      <m-icon type="ios-arrow-thin-up" size="30"></m-icon>
      <m-icon type="ios-arrow-thin-right" size="30"></m-icon>
      <m-icon type="ios-arrow-thin-down" size="30"></m-icon>
      <m-icon type="ios-arrow-thin-left" size="30"></m-icon>
      <m-icon type="ios-circle-filled" size="30"></m-icon>
      <m-icon type="ios-circle-outline" size="30"></m-icon>
      <m-icon type="ios-checkmark-empty" size="30"></m-icon>
      <m-icon type="ios-checkmark-outline" size="30"></m-icon>
      <m-icon type="ios-checkmark" size="30"></m-icon>
      <m-icon type="ios-plus-empty" size="30"></m-icon>
      <m-icon type="ios-plus-outline" size="30"></m-icon>
      <m-icon type="ios-plus" size="30"></m-icon>
      <m-icon type="ios-close-empty" size="30"></m-icon>
      <m-icon type="ios-close-outline" size="30"></m-icon>
      <m-icon type="ios-close" size="30"></m-icon>
      <m-icon type="ios-minus-empty" size="30"></m-icon>
      <m-icon type="ios-minus-outline" size="30"></m-icon>
      <m-icon type="ios-minus" size="30"></m-icon>
      <m-icon type="ios-information-empty" size="30"></m-icon>
      <m-icon type="ios-information-outline" size="30"></m-icon>
      <m-icon type="ios-information" size="30"></m-icon>
      <m-icon type="ios-help-empty" size="30"></m-icon>
      <m-icon type="ios-help-outline" size="30"></m-icon>
      <m-icon type="ios-help" size="30"></m-icon>
      <m-icon type="ios-search" size="30"></m-icon>
      <m-icon type="ios-search-strong" size="30"></m-icon>
      <m-icon type="ios-star" size="30"></m-icon>
      <m-icon type="ios-star-half" size="30"></m-icon>
      <m-icon type="ios-star-outline" size="30"></m-icon>
      <m-icon type="ios-heart" size="30"></m-icon>
      <m-icon type="ios-heart-outline" size="30"></m-icon>
    </div>
  </div>
</template>

<script>
import { MGroup, MCell } from 'src/widgets'

export default {
  components: {
    MGroup,
    MCell
  },
  methods: {
    console () {
      console.log('click')
    }
  }
}
</script>

<style>
.vux-x-icon {
  fill: #F70968;
}
.cell-x-icon {
  display: block;
  fill: green;
}
</style>