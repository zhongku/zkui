<template>
  <div style="width: 95%;margin: 0 auto;">
    <br>
    <div>
      <m-step v-model="step1" background-color='#fbf9fe'>
        <m-step-item :title="$t('step 1')" description="step 1"></m-step-item>
        <m-step-item :title="$t('step 2')" description="step 2"></m-step-item>
        <m-step-item :title="$t('step 3')" description="step 3"></m-step-item>
      </m-step>
    </div>
    <m-hr></m-hr>
    <div>
      <m-step v-model="step2" background-color='#fbf9fe' gutter="20px">
        <m-step-item :title="$t('done')"></m-step-item>
        <m-step-item :title="$t('processing')"></m-step-item>
        <m-step-item :title="$t('end')"></m-step-item>
      </m-step>
      <div class="btn_wrap">
        <m-button type="primary" @click.native="nextStep">{{ $t('next step') }}</m-button>
      </div>
    </div>
  </div>
</template>

<i18n>
next step:
  zh-CN: 下一步
done:
  zh-CN: 已完成
processing:
  zh-CN: 进行中
end:
  zh-CN: 结束
step 1:
  zh-CN: 步骤1
step 2:
  zh-CN: 步骤2
step 3:
  zh-CN: 步骤3
</i18n>

<script>
import { MStep, MStepitem, MButton, MHr } from 'src/widgets'

export default {
  components: {
    MStep,
    MStepitem,
    MButton,
    MHr
  },
  data () {
    return {
      step1: 1,
      step2: 0
    }
  },
  methods: {
    nextStep () {
      this.step2 ++
    }
  }
}
</script>

<style lang="less">
.btn_wrap {
  padding: 0 1rem;
  margin-top: 2rem;
}
</style>
