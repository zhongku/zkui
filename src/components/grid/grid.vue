<template>
  <div class="weui-grids">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'grid',
    methods: {
      countColumn () {
        this.childrenSize = this.$children.length
      }
    },
    props: {
      rows: {
        type: Number,
        validator () {
          /* istanbul ignore if */
          if (process.env.NODE_ENV === 'development') {
            console.warn(
              '[VUX warn] Grid rows 属性已经废弃，使用 cols 代替。单行列数为自动计算'
            )
          }
          return true
        }
      },
      cols: {
        type: Number
      }
    },
    computed: {
      column () {
        return this.cols || this.childrenSize
      }
    },
    data () {
      return {
        childrenSize: 3
      }
    }
  }
</script>
<style lang="less">
  .grid-icon-middle {
    .weui-grid {
      padding: 8*@rem 8*@rem;
    }
    .weui-grid__icon {
      width: 3rem;
      height: 3rem;
    }
  }
</style>
