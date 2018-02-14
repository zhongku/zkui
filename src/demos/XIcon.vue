<template>
  <div>
    <group>
      <cell title="used in cell">
        <x-icon type="ios-plus" class="cell-x-icon" @click="console"></x-icon>
      </cell>
    </group>
    <div style="padding: 15px;">

      <!-- <x-icon type="ios-heart" size="30"></x-icon>
      <x-icon type="ios-heart-outline" size="30"></x-icon> -->
    </div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
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
