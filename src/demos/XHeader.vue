<template>
  <div>
    <br>
    <m-header>This is the page title.</m-header>
    <br>
    <m-header title="use prop:title"></m-header>
    <br>
    <m-header :left-options="{showBack: false}">do not show Back</m-header>
    <br>
    <m-header :left-options="{backText: ''}">set empty back text</m-header>
    <br>
    <m-header :right-options="{showMore: true}" @on-click-more="showMenus = true">with more menu</m-header>
    <br>
    <m-header>with right link<a slot="right">Feedback</a></m-header>
    <br>
    <m-header>long long long long long long long text<a slot="right">Feedback</a></m-header>
    <br>
    <m-header>with left slot<a slot="left">Close</a></m-header>
    <br>
    <m-header>
      <span>overwrite-left</span>
      <m-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></m-icon>
    </m-header>
    <br>
    <m-header style="background-color:#000;">custom background color</m-header>
    <br>
    <m-header title="slot:overwrite-title">
      <div class="overwrite-title-demo" slot="overwrite-title">
        <button-tab>
          <button-tab-item selected>A</button-tab-item>
          <button-tab-item>B</button-tab-item>
        </button-tab>
      </div>
    </m-header>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </div>
</template>

<script>
import { MHeader, MActionsheet, TransferDom, MButtontab, ButtonTabItem } from 'src/widgets'

export default {
  directives: {
    TransferDom
  },
  components: {
    MHeader,
    MActionsheet,
    MButtontab,
    ButtonTabItem
  },
  data () {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false
    }
  }
}
</script>

<style>
.overwrite-title-demo {
  margin-top: 5px;
}
</style>
