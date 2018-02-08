<template>
  <div>
    <m-divider> {{ $t('Horizontal') }} </m-divider>
    <m-flexbox>
      <m-flexbox-item><div class="flex-demo">1</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">2</div></m-flexbox-item>
    </m-flexbox>
    <br>
    <m-flexbox>
      <m-flexbox-item><div class="flex-demo">1</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">2</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">3</div></m-flexbox-item>
    </m-flexbox>
    <br>
    <m-flexbox>
      <m-flexbox-item><div class="flex-demo">1</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">2</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">3</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">4</div></m-flexbox-item>
    </m-flexbox>
    <br>
    <m-flexbox>
      <m-flexbox-item><div class="flex-demo">1</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">2</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">3</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">4</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">5</div></m-flexbox-item>
    </m-flexbox>
    <br>
    <m-flexbox>
      <m-flexbox-item><div class="flex-demo">1</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">2</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">3</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">4</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">5</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">6</div></m-flexbox-item>
    </m-flexbox>
    <br>
    <m-divider> {{ $t('Honrizontal with no gutter') }} </m-divider>
    <m-flexbox :gutter="0">
      <m-flexbox-item><div class="flex-demo">1</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">2</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">3</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">4</div></m-flexbox-item>
    </m-flexbox>
    <br>
    <m-divider> {{ $t('Vertical') }} </m-divider>
    <m-flexbox orient="vertical">
      <m-flexbox-item><div class="flex-demo">1</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">2</div></m-flexbox-item>
    </m-flexbox>
    <br>
    <m-divider> {{ $t('Vertical with no gutter') }} </m-divider>
    <m-flexbox orient="vertical" :gutter="0">
      <m-flexbox-item><div class="flex-demo">1</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">2</div></m-flexbox-item>
    </m-flexbox>
    <br>
    <m-divider> {{ $t('Grid support (12 columns)') }} </m-divider>
    <m-flexbox>
      <m-flexbox-item :span="4"><div class="flex-demo">1/3</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">2/3</div></m-flexbox-item>
    </m-flexbox>
    <br>
    <m-flexbox>
      <m-flexbox-item :span="6"><div class="flex-demo">6/12</div></m-flexbox-item>
      <m-flexbox-item :span="2"><div class="flex-demo">2/12</div></m-flexbox-item>
      <m-flexbox-item ><div class="flex-demo">rest</div></m-flexbox-item>
    </m-flexbox>
    <br>
    <m-divider> {{ $t('Flexible grid') }} </m-divider>
    <m-flexbox>
      <m-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></m-flexbox-item>
      <m-flexbox-item :span="1/6"><div class="flex-demo">1/6</div></m-flexbox-item>
      <m-flexbox-item :span="1/8"><div class="flex-demo">1/8</div></m-flexbox-item>
      <m-flexbox-item :span="1/8"><div class="flex-demo">1/8</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">rest</div></m-flexbox-item>
    </m-flexbox>
    <br>
    <m-flexbox :gutter="0">
      <m-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></m-flexbox-item>
      <m-flexbox-item :span="1/6"><div class="flex-demo">1/6</div></m-flexbox-item>
      <m-flexbox-item :span="1/8"><div class="flex-demo">1/8</div></m-flexbox-item>
      <m-flexbox-item :span="1/8"><div class="flex-demo">1/8</div></m-flexbox-item>
      <m-flexbox-item><div class="flex-demo">rest</div></m-flexbox-item>
    </m-flexbox>
    <br>
    <m-divider> {{ $t('Flexible grid') }} </m-divider>
    <m-flexbox :gutter="0">
      <m-flexbox-item :span="1/3" :order="4"><div class="flex-demo">1</div></m-flexbox-item>
      <m-flexbox-item :span="1/6" :order="3"><div class="flex-demo">2</div></m-flexbox-item>
      <m-flexbox-item :span="1/8" :order="2"><div class="flex-demo">3</div></m-flexbox-item>
      <m-flexbox-item :span="1/8" :order="1"><div class="flex-demo">4</div></m-flexbox-item>
      <m-flexbox-item :order="-99"><div class="flex-demo">5</div></m-flexbox-item>
    </m-flexbox>
    <br>
    <m-divider>flex-wrap</m-divider>
    <m-flexbox :gutter="0" wrap="wrap">
      <m-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></m-flexbox-item>
      <m-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></m-flexbox-item>
      <m-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></m-flexbox-item>
      <m-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></m-flexbox-item>
      <m-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></m-flexbox-item>
      <m-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></m-flexbox-item>
      <m-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></m-flexbox-item>
      <m-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></m-flexbox-item>
    </m-flexbox>

  </div>
</template>

<i18n>
Horizontal:
  zh-CN: 水平
Honrizontal with no gutter:
  zh-CN: 水平无间隙
Vertical:
  zh-CN: 垂直
Vertical with no gutter:
  zh-CN: 垂直无间隙
Grid support (12 columns):
  zh-CN: 网格（12列）
Flexible grid:
  zh-CN: 弹性网格
</i18n>

<script>
import { MFlexbox, FlexboxItem, MDivider } from 'src/widgets'

export default {
  components: {
    MFlexbox,
    FlexboxItem,
    MDivider
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';

.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
</style>
