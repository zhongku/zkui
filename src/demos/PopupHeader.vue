<template>
  <div>
    <m-popup-header :left-text="$t('cancel')" :right-text="$t('done')" :title="$t('Please select your card')"></m-popup-header>
    <m-group>
      <m-switch v-model="show1" :title="$t('used with MPopup')"></m-switch>
    </m-group>
    <div v-transfer-dom>
      <m-popup v-model="show1">
        <!-- group already has a top border, so we need to hide header's bottom border-->
        <m-popup-header
        :left-text="$t('cancel')"
        :right-text="$t('done')"
        :title="$t('Please select your card')"
        :show-bottom-border="false"
        @on-click-left="show1 = false"
        @on-click-right="show1 = false"></m-popup-header>
        <m-group gutter="0">
          <radio :options="[$t('MCard 1'), $t('MCard 2'), $t('MCard 3'), $t('MCard 4')]"></radio>
        </m-group>
      </m-popup>
    </div>
  </div>
</template>

<i18n>
cancel:
  zh-CN: 取消
done:
  zh-CN: 确定
Please select your card:
  zh-CN: 请选择银行卡
used with MPopup:
  zh-CN: MPopup 中使用
MCard 1:
  zh-CN: 招商银行
MCard 2:
  zh-CN: 工商银行
MCard 3:
  zh-CN: 农业银行
MCard 4:
  zh-CN: 增加银行卡
</i18n>

<script>
import { MPopupheader, MPopup, TransferDom, MGroup, MSwitch, MRadio } from 'src/widgets'

export default {
  directives: {
    TransferDom
  },
  components: {
    MPopupheader,
    MPopup,
    MGroup,
    MSwitch,
    MRadio
  },
  data () {
    return {
      show1: false
    }
  }
}
</script>
