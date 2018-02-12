<template>
  <div :style="{margin:gap}">
    <slot></slot>
    <slot name="label"></slot>
<span v-text="htmlCode"></span>
  </div>

</template>

<script>
export default {
  name: 'box',
  props: {
    gap: String,
    label: String
  },
  data () {
    return {
      hasLabelSlot: false,
      htmlCode:''
    }
  },
   mounted () {
    this.$slots.label && (this.hasLabelSlot = true)
//console.dir(this.label)
    //this.htmlCode =this.$slots.label
     console.info(this.$slots.label)
  }
}
</script>
