<template>
  <div>
    <m-flow>
      <m-flow-state state="1" :title="$t('Paid')" is-done></m-flow-state>
      <m-flow-line is-done></m-flow-line>

      <m-flow-state state="2" is-done>
        <span slot="title">{{ $t('Shipped') }}</span>
      </m-flow-state>
      <m-flow-line :tip="$t('In progress')"></m-flow-line>

      <m-flow-state state="3" :title="$t('Delivered')"></m-flow-state>
      <m-flow-line></m-flow-line>

      <m-flow-state state="4" :title="$t('Done')"></m-flow-state>
    </m-flow>


    <m-flow>
      <m-flow-state :title="$t('Paid')" is-done></m-flow-state>
      <m-flow-line is-done :line-span="15"></m-flow-line>

      <m-flow-state :title="$t('Shipped')" is-done></m-flow-state>
      <m-flow-line is-done :line-span="30"></m-flow-line>

      <m-flow-state :title="$t('Delivered')" is-done></m-flow-state>
      <m-flow-line :tip="$t('In progress')" tip-direction="bottom" :line-span="45" :process-span="60"></m-flow-line>

      <m-flow-state :title="$t('Done')"></m-flow-state>
    </m-flow>

    <m-flow orientation="vertical" style="height:250px;">
      <m-flow-state state="1" :title="$t('Paid')" is-done></m-flow-state>
      <m-flow-line is-done></m-flow-line>

      <m-flow-state state="2" :title="$t('Shipped')" is-done></m-flow-state>
      <m-flow-line :tip="$t('In progress')"></m-flow-line>

      <m-flow-state state="3" :title="$t('Delivered')"></m-flow-state>
      <m-flow-line></m-flow-line>

      <m-flow-state state="4" :title="$t('Done')"></m-flow-state>
    </m-flow>

    <m-flow orientation="vertical" style="height:200px;">
      <m-flow-state state="1" :title="$t('Paid')" is-done></m-flow-state>
      <m-flow-line is-done :line-span="15"></m-flow-line>

      <m-flow-state state="2" :title="$t('Shipped')" is-done></m-flow-state>
      <m-flow-line :line-span="30"></m-flow-line>

      <m-flow-state state="3" :title="$t('Delivered')"></m-flow-state>
      <m-flow-line :line-span="45"></m-flow-line>

      <m-flow-state state="4" :title="$t('Done')"></m-flow-state>
    </m-flow>

  </div>
</template>

<i18n>
In progress:
  zh-CN: 进行中
Paid:
  zh-CN: 已付款
Shipped:
  zh-CN: 已发货
Delivered:
  zh-CN: 待收货
Done:
  zh-CN: 完成
</i18n>

<script>
import { MFlow, FlowState, FlowLine } from 'src/widgets'

export default {
  components: {
    MFlow,
    FlowState,
    FlowLine
  }
}
</script>
