<template>
  <div>
    <span class="vux-close" style="width:14*@rem;height:14px;"></span>
    <span class="vux-close"></span>
    <span class="vux-close" style="width:30*@rem;height:30*@rem;color:#ccc;"></span>
    <span class="vux-close vux-close-2px" style="width:40*@rem;height:40*@rem;color:#ccc;"></span>
  </div>
</template>

<style lang="less">
@import '~vux/src/styles/vux/close.less';

.vux-close-2px{
  &::before,
  &::after {
    height: 2*@rem;
    margin-top: -1*@rem;
    background-color: green;
  }
}
</style>
