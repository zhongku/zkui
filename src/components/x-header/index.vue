<template>
  <div class="vux-header">
    <div class="vux-header-left">
      <slot name="overwrite-left">
        <transition :name="transition">
          <a class="vux-header-back" @click.preventDefault v-show="_leftOptions.showBack" @click="onClickBack">{{ typeof _leftOptions.backText === 'undefined' ? _leftOptions.backText : _leftOptions.backText}}</a>
        </transition>
        <transition :name="transition">
          <div class="left-arrow" @click="onClickBack" v-show="_leftOptions.showBack"></div>
        </transition>
      </slot>
      <slot name="left"></slot>
    </div>
    <h1 class="vux-header-title" @click="$emit('on-click-title')" v-if="!shouldOverWriteTitle">
      <slot>
        <transition :name="transition">
          <span v-show="title">{{title}}</span>
        </transition>
      </slot>
    </h1>
    <div class="vux-header-title-area" v-if="shouldOverWriteTitle">
      <slot name="overwrite-title"></slot>
    </div>
    <div class="vux-header-right">
      <a class="vux-header-more" @click.preventDefault @click="$emit('on-click-more')" v-if="rightOptions.showMore"></a>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<i18n>
back_text:
  en: Back
  zh-CN: 返回
</i18n>

<script>
  import objectAssign from 'object-assign'

  export default {
    name: 'x-header',
    props: {
      leftOptions: Object,
      title: String,
      transition: String,
      rightOptions: {
        type: Object,
        default () {
          return {
            showMore: false
          }
        }
      }
    },
    beforeMount () {
      if (this.$slots['overwrite-title']) {
        this.shouldOverWriteTitle = true
      }
    },
    computed: {
      _leftOptions () {
        return objectAssign({
          showBack: true,
          preventGoBack: false
        }, this.leftOptions || {})
      }
    },
    methods: {
      onClickBack () {
        if (this._leftOptions.preventGoBack) {
          this.$emit('on-click-back')
        } else {
          this.$router ? this.$router.back() : window.history.back()
        }
      }
    },
    data () {
      return {
        shouldOverWriteTitle: false
      }
    }
  }
</script>

<style lang="less">
  @import '../../styles/variable.less';

  .vux-header {
    position: relative;
    // padding: 3*@rem 0;
    box-sizing: border-box;
    background-color: @header-background-color;
  }
  .vux-header .vux-header-title {
    line-height: 3rem;
    text-align: center;
    font-size: @h4-font-size;
    font-weight: 400;
    color: @header-title-color;
  }
  .vux-header-title-area,
  .vux-header .vux-header-title {
    margin: 0 88*@rem;
    height: 35*@rem;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .vux-header .vux-header-title > span {
    display: inline-block;
  }
  .vux-header .vux-header-left,
  .vux-header .vux-header-right {
    position: absolute;
    top: 7*@rem;
    display: block;
    line-height: 21*@rem;
    color: @header-text-color;
  }
  .vux-header .vux-header-left a,
  .vux-header .vux-header-left button,
  .vux-header .vux-header-right a,
  .vux-header .vux-header-right button {
    float: left;
    margin-right: 8*@rem;
    color: @header-text-color;
  }
  .vux-header .vux-header-left a:active,
  .vux-header .vux-header-left button:active,
  .vux-header .vux-header-right a:active,
  .vux-header .vux-header-right button:active {
    opacity: 0.5;
  }
  .vux-header .vux-header-left {
    left: 10*@rem;
  }
  .vux-header .vux-header-left .vux-header-back {
    padding-left: 16*@rem;
  }
  .vux-header .vux-header-left .left-arrow {
    position: absolute;
    width: 30*@rem;
    height: 30*@rem;
    top: -2*@rem;
    left: -5*@rem;

    &:before {
      content: '';
      position: absolute;
      width: 9*@rem;
      height: 9*@rem;
      border: 1px solid @header-arrow-color;
      border-width: 1px 0 0 1px;
      transform: rotate(315deg);
      top: 8*@rem;
      left: 7*@rem;
    }
  }
  .vux-header .vux-header-right {
    right: 15*@rem;
  }
  .vux-header .vux-header-right a,
  .vux-header .vux-header-right button {
    margin-left: 8*@rem;
    margin-right: 0;
  }
  .vux-header .vux-header-right .vux-header-more:after {
    content: '\2022\0020\2022\0020\2022\0020';
    font-size: 16*@rem;
  }
  .vux-header-fade-in-right-enter-active {
    animation: fadeinR 0.5s;
  }
  .vux-header-fade-in-left-enter-active {
    animation: fadeinL 0.5s;
  }
  @keyframes fadeinR {
    0% {
      opacity: 0;
      transform: translateX(150px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fadeinL {
    0% {
      opacity: 0;
      transform: translateX(-150px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
