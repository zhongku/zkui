<template>
  <input
    type="file"
    :name="$parent.name"
    :id="$parent.inputId || $parent.name"
    :accept="$parent.accept"
    @change="change"
    :webkitdirectory="$parent.directory && $parent.features.directory"
    :directory="$parent.directory && $parent.features.directory"
    :multiple="$parent.multiple && $parent.features.html5"
  />
</template>
<script>
/* eslint-disable */ 
// eslint-disable-next-line
export default {
  methods: {
    change(e) {
      this.$destroy()
      this.$parent.addInputFile(e.target)
   
      new this.constructor({
        parent: this.$parent,
        el: this.$el
      })
    }
  }
}
</script>
