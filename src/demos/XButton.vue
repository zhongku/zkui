<template>
  <div>
    <m-divider>iOS Gradients(v2.7.4)</m-divider>
    <box gap="10px 10px">
      <m-button :gradients="['#1D62F0', '#19D5FD']">iOS Gradients</m-button>
      <m-button :gradients="['#A644FF', '#FC5BC4']">iOS Gradients</m-button>
      <m-button :gradients="['#FF2719', '#FF61AD']">iOS Gradients</m-button>
      <m-button :gradients="['#6F1BFE', '#9479DF']">iOS Gradients</m-button>
      <m-button :gradients="['#FF5E3A', '#FF9500']">iOS Gradients</m-button>
    </box>
    <m-divider>default</m-divider>
    <box gap="10px 10px">
      <m-button>submit</m-button>
      <m-button type="primary">primary</m-button>
      <m-button type="warn">Delete</m-button>

      <m-divider>link</m-divider>
      <m-button type="primary" link="/demo">Go to demo list</m-button>
      <m-button type="default" link="BACK">Back</m-button>

      <m-divider>action type</m-divider>
      <m-button type="primary" action-type="button">submit</m-button>
      <m-button type="warn" action-type="reset">reset</m-button>

      <m-divider>loading</m-divider>
      <m-button type="default" show-loading>submit</m-button>
      <m-button type="primary" show-loading>submit</m-button>
      <m-button type="warn" show-loading>submit</m-button>

      <m-divider>mini</m-divider>
      <m-button mini>submit</m-button>
      <m-button mini type="primary">primary</m-button>
      <m-button mini type="warn">Delete</m-button>
      <br>
      <m-button mini plain>submit</m-button>
      <m-button mini plain type="primary">primary</m-button>

      <m-divider>plain</m-divider>
      <m-button plain>submit</m-button>
      <m-button plain type="primary">primary</m-button>

      <m-divider>you can custom styles</m-divider>
      <m-button plain type="primary" style="border-radius:99px;">primary</m-button>
      <m-button plain type="primary" class="custom-primary-red">primary</m-button>

      <m-divider>disabled</m-divider>
      <m-button disabled>disable submit</m-button>
      <m-button type="primary" disabled>disable primary</m-button>
      <m-button type="warn" disabled>disable Delete</m-button>

      <m-button mini disabled>disable mini submit</m-button>
      <m-button mini type="primary" disabled>disable mini primary</m-button>
      <m-button mini type="warn" disabled>disable mini Delete</m-button>

      <m-button plain disabled>disable plain</m-button>
      <m-button plain type="primary" disabled>disable plain primary</m-button>

      <m-divider>use :text and :disabled</m-divider>
      <m-button :text="submit001" :disabled="disable001" @click.native="processButton001" type="primary"></m-button>

      <m-divider>combined with flexbox</m-divider>
      <m-flexbox>
        <m-flexbox-item>
          <m-button type="primary">primary</m-button>
        </m-flexbox-item>
        <m-flexbox-item>
          <m-button type="warn">Delete</m-button>
        </m-flexbox-item>
      </m-flexbox>
      <m-divider>combined with flexbox</m-divider>
      <m-flexbox>
        <m-flexbox-item>
          <m-button type="default">default</m-button>
        </m-flexbox-item>
        <m-flexbox-item>
          <m-button type="primary">primary</m-button>
        </m-flexbox-item>
        <m-flexbox-item>
          <m-button type="warn">Delete</m-button>
        </m-flexbox-item>
      </m-flexbox>

    </box>

  </div>
</template>

<script>
import { MButton, MBox, MGrouptitle, MGroup, MFlexbox, FlexboxItem, MDivider } from 'src/widgets'

export default {
  components: {
    MButton,
    MBox,
    MGrouptitle,
    MGroup,
    MFlexbox,
    FlexboxItem,
    MDivider
  },
  methods: {
    change (value) {
      console.log('change:', value)
    },
    processButton001 () {
      this.submit001 = 'processing'
      this.disable001 = true
    }
  },
  data () {
    return {
      submit001: 'click me',
      disable001: false
    }
  }
}
</script>

<style lang="less">
.custom-primary-red {
  border-radius: 99px!important;
  border-color: #CE3C39!important;
  color: #CE3C39!important;
  &:active {
    border-color: rgba(206, 60, 57, 0.6)!important;
    color: rgba(206, 60, 57, 0.6)!important;
    background-color: transparent;
  }
}
</style>
