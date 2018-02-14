<template>
  <div class="weui-wepay-flow" :class="{'weui-wepay-flow_vertical': orientation ===
  'vertical'}">
    <div class="weui-wepay-flow__bd">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'flow',
    props: {
      orientation: {
        type: String,
        default: 'horizontal'
      }
    }
  }
</script>

<style lang="less">
  @import '../../styles/base/fn.less';
  @bubbleCorlor: #ff8a00;
  .setBubbleCommon(@height,@backgroundColor,@fontSize,@color,@borderRadius) {
    height: @height;
    line-height: @height;
    background-color: @backgroundColor;
    font-size: @fontSize;
    color: @color;
    white-space: nowrap;
    padding: 0 6*@rem;
    position: relative;
    border-radius: @borderRadius;
    &:after {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      overflow: hidden;
      font-size: 0;
      position: absolute;
    }
  }
  .setBubblePrivate(@direction, @backgroundColor) when (@direction = top) {
    &:after {
      border-color: @backgroundColor transparent transparent transparent;
      border-style: solid;
      border-width: 5px 3*@rem;
      left: 50%;
      transform: translate(-50%, 0);
      bottom: -10*@rem;
    }
  }
  .setBubblePrivate(@direction, @backgroundColor) when (@direction = bottom) {
    &:after {
      border-color: transparent transparent @backgroundColor transparent;
      border-style: dashed dashed solid dashed;
      border-width: 5px 3*@rem;
      left: 50%;
      transform: translate(-50%, 0);
      top: -10*@rem;
    }
  }
  .setBubblePrivate(@direction, @backgroundColor) when (@direction = left) {
    &:after {
      border-color: transparent transparent transparent @backgroundColor;
      border-style: solid;
      border-width: 3px 5*@rem;
      top: 50%;
      transform: translate(0, -50%);
      right: -10*@rem;
    }
  }
  .setBubblePrivate(@direction, @backgroundColor) when (@direction = right) {
    &:after {
      border-color: transparent @backgroundColor transparent transparent;
      border-style: solid;
      border-width: 3px 5*@rem;
      top: 50%;
      transform: translate(0, -50%);
      left: -10*@rem;
    }
  }
  .weui-wepay-flow,
  .weui-wepay-flow-auto {
    padding: 40*@rem;
  }
  .weui-wepay-flow__bd {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .weui-wepay-flow__li {
    width: 14*@rem;
    height: 14*@rem;
    position: relative;
    z-index: 1;
    .weui-wepay-flow__state {
      position: absolute;
      left: 0;
      top: 0;
      width: 14*@rem;
      height: 14*@rem;

      line-height: 14*@rem;
      text-align: center;
      color: #fff;
      border-radius: 7*@rem;
      box-sizing: border-box;
    }
  }
  .weui-wepay-flow__state {
    background-color: #e2e2e2;
    .weui-wepay-flow__li_done & {
      background-color: @brand;
    }
  }
  [class^='weui-wepay-flow__title-'],
  [class*=' weui-wepay-flow__title-'] {
    position: absolute;
    color: #999999;

    font-weight: normal;
    white-space: nowrap;
    text-align: center;
  }
  .weui-wepay-flow__title-top {
    bottom: 20*@rem;
    left: 50%;
    transform: translate(-50%, 0);
    .weui-wepay-flow__li_done & {
      color: #333;
    }
  }
  .weui-wepay-flow__title-bottom {
    top: 20*@rem;
    left: 50%;
    transform: translate(-50%, 0);
    .weui-wepay-flow__li_done & {
      color: #333;
    }
  }
  .weui-wepay-flow__title-left {
    right: 30*@rem;
    top: 50%;
    transform: translate(0, -50%);
    .weui-wepay-flow__li_done & {
      color: #333;
    }
    text-align: right;
  }
  .weui-wepay-flow__title-right {
    left: 30*@rem;
    top: 50%;
    transform: translate(0, -50%);
    text-align: left;
    .weui-wepay-flow__li_done & {
      color: #333;
    }
  }
  [class^='weui-wepay-flow__intro-'],
  [class*=' weui-wepay-flow__intro-'] {
    .setBubbleCommon(20px,@bubbleCorlor,10px,#FFF,4px);
  }
  .weui-wepay-flow__intro-top {
    bottom: 25*@rem;
    left: 50%;
    transform: translate(-50%, 0);
    .setBubblePrivate(top,@bubbleCorlor);
    position: absolute;
  }
  .weui-wepay-flow__intro-bottom {
    top: 25*@rem;
    left: 50%;
    transform: translate(-50%, 0);
    .setBubblePrivate(bottom,@bubbleCorlor);
    position: absolute;
  }
  .weui-wepay-flow__intro-right {
    left: 36*@rem;
    top: 50%;
    transform: translate(0, -50%);
    .setBubblePrivate(right,@bubbleCorlor);
    position: absolute;
  }
  .weui-wepay-flow__intro-left {
    right: 36*@rem;
    top: 50%;
    transform: translate(0, -50%);
    .setBubblePrivate(left,@bubbleCorlor);
    position: absolute;
  }

  [class^='weui-wepay-flow__info-'] {
    .setBubbleCommon(14px,@brand,10px,#FFF,2px);
    position: absolute;
    .weui-wepay-flow__line_ing & {
      display: block;
    }
  }
  .weui-wepay-flow__info-top {
    display: none;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 11*@rem;
    .weui-wepay-flow__line_ing & {
      display: block;
    }
    .setBubblePrivate(top,@brand);
  }
  .weui-wepay-flow__info-bottom {
    display: none;
    left: 50%;
    transform: translate(-50%, 0);
    top: 11*@rem;
    .weui-wepay-flow__line_ing & {
      display: block;
    }
    .setBubblePrivate(bottom,@brand);
  }
  .weui-wepay-flow__info-left {
    display: none;
    top: 50%;
    transform: translate(0, -50%);
    right: 12*@rem;
    .weui-wepay-flow__line_ing & {
      display: block;
    }
    .setBubblePrivate(left,@brand);
  }
  .weui-wepay-flow__info-right {
    display: none;
    top: 50%;
    transform: translate(0, -50%);
    left: 12*@rem;
    .weui-wepay-flow__line_ing & {
      display: block;
    }
    .setBubblePrivate(right,@brand);
  }
  .weui-wepay-flow__line {
    flex: 1;
    background-color: #e2e2e2;
    height: 3*@rem;
    position: relative;
  }
  .weui-wepay-flow__title {
    color: #999999;

    font-weight: normal;
  }
  .weui-wepay-flow__info {
    color: #999999;

  }
  .weui-wepay-flow__process {
    display: none;
    background-color: @brand;
    height: 3*@rem;
    position: relative;
    .weui-wepay-flow__line_ing & {
      display: block;
      width: 50%;
    }
    .weui-wepay-flow__line_done & {
      display: block;
    }
  }
  .weui-wepay-flow_custom {
    .weui-wepay-flow__bd {
      justify-content: flex-start;
    }
    .weui-wepay-flow__line {
      flex: none;
      width: 100*@rem;
    }
  }
  .weui-wepay-flow_vertical {
    .weui-wepay-flow__bd {
      flex-direction: column;
      height: 100%;
      box-sizing: border-box;
    }
    .weui-wepay-flow__line {
      height: auto;
      width: 3*@rem;
    }
    .weui-wepay-flow__line_ing {
      .weui-wepay-flow__process {
        height: 50%;
      }
    }
    .weui-wepay-flow__process {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 3*@rem;
    }
    .weui-wepay-flow__line_done {
      .weui-wepay-flow__process {
        height: 100%;
      }
    }
  }

  .weui-wepay-flow_vertical-custom {
    .weui-wepay-flow__bd {
      flex-direction: column;
      height: 100%;
      box-sizing: border-box;
    }
    .weui-wepay-flow__line {
      width: 3*@rem;
      flex: none;
    }
    .weui-wepay-flow__line_ing {
      .weui-wepay-flow__process {
        height: 50%;
      }
    }
    .weui-wepay-flow__process {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 3*@rem;
    }
    .weui-wepay-flow__line_done {
      .weui-wepay-flow__process {
        height: 100%;
      }
    }
  }
  .weui-wepay-flow-auto {
    position: relative;
  }
  .weui-wepay-flow-auto__bd {
    position: relative;
  }
  .weui-wepay-flow-auto__state {
    position: absolute;
    left: 0;
    top: 4*@rem;
    width: 14*@rem;
    height: 14*@rem;

    line-height: 14*@rem;
    text-align: center;
    color: #fff;
    border-radius: 7*@rem;
    background-color: #e2e2e2;
    z-index: 2;
  }
  .weui-wepay-flow-auto__state_on {
    background-color: @brand;
  }
  .weui-wepay-flow-auto__line {
    position: absolute;
    z-index: 1;
    width: 2*@rem;
    background-color: #dddddd;
    top: 10*@rem;
    bottom: -4*@rem;
    left: 6*@rem;
    z-index: 1;
  }
  .weui-wepay-flow-auto__line_on {
    background-color: @brand;
  }
  .weui-wepay-flow-auto__li {
    position: relative;
    padding-bottom: 20*@rem;
    padding-left: 30*@rem;
  }
  .weui-wepay-flow-auto__title {
    color: #999999;

    font-weight: normal;
  }
  .weui-wepay-flow-auto__info {
    color: #999999;

  }
</style>
