<template>
  <div class="vux-step">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'step',
    props: {
      value: Number,
      backgroundColor: {
        type: String,
        default: '#fff'
      },
      gutter: {
        type: String,
        default: '10px'
      }
    },
    created () {
      this.current = this.value
    },
    mounted () {
      this._mapPropsToChildComponent()
    },
    watch: {
      value (val) {
        this.current = val
      },
      current (val) {
        this._mapPropsToChildComponent()
        this.$emit('input', val)
      }
    },
    data () {
      return {
        current: 0
      }
    },
    methods: {
      _mapPropsToChildComponent () {
        const _this = this
        const len = this.$children.length - 1
        this.$children.forEach((child, index) => {
          child.currentStepNumber = (index + 1).toString()
          child.currentStepLast = index === len

          if (index === _this.current) {
            child.currentStatus = 'process'
          } else if (index < _this.current) {
            child.currentStatus = 'finish'
          } else {
            child.currentStatus = 'wait'
          }
        })
      }
    }
  }
</script>

<style lang="less">
  @import '../../styles/base/fn.less';
  .vux-step {
    display: flex;
  }
  .vux-step-item {
    display: inline-block;
    position: relative;
    overflow: hidden;
  }

  .vux-step-item-with-tail {
    flex: 1;
  }

  .vux-step-item-tail {
    height: 1*@rem;
    position: absolute;
    left: 0;
    top: 12*@rem;
    padding: 0 0;
    transition: all 0.4s ease 0s;
  }

  .vux-step-item-tail-finish {
    background: @brand none repeat scroll 0 0;
  }

  .vux-step-item-tail-process,
  .vux-step-item-tail-wait {
    background: #ccc none repeat scroll 0 0;
  }

  .vux-step-item-icon {
    width: 22*@rem;
    height: 22*@rem;
    display: inline-block;
    text-align: center;
  }

  .vux-step-item-checked::before {
    font-size: @font-size-base !important;
    line-height: 22*@rem;
    margin: 0 !important;
    transform: translateY(-4px);
  }

  .vux-step-item-title {
    font-size: 0.8rem;
  }

  .vux-step-item-head {
    position: relative;
    display: inline-block;
    margin-right: -4*@rem;

    .vux-step-item-head-inner {
      width: 22*@rem;
      height: 22*@rem;
      line-height: 22*@rem;
      border-radius: 99*@rem;
      text-align: center;

      transition: all 0.4s ease 0s;
      background: #fff none repeat scroll 0 0;
    }
  }

  .vux-step-item-head-finish .vux-step-item-head-inner {
    border: 1px solid @brand;
    color: @brand;
  }

  .vux-step-item-head-process .vux-step-item-head-inner {
    border: 1px solid @brand;
    color: #fff;
    background: @brand none repeat scroll 0 0;
  }

  .vux-step-item-head-wait .vux-step-item-head-inner {
    border: 1px solid #888;
    color: #888;
  }

  .vux-step-item-main {
    display: inline-block;
    position: relative;
    vertical-align: top;
    color: #888;
    padding-left: 5*@rem;
  }

  .vux-step-item-main-process {
    font-weight: bold;
    color: #666;
  }
</style>
