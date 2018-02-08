<template>
  <div>
    <textarea v-model="code" style="display:block;width:100%;height:80px;font-size:14px;padding:10px;">
    </textarea>
    <div v-transfer-dom="dom">
      <m-dialog v-model="show1" v-if="insert">
        <span @click="show1=false">Close me</span>
      </m-dialog>
    </div>
    <div style="padding:15px;">
      <m-button type="primary" @click.native="show1=true">show1 = true</m-button>
      <m-button type="primary" @click.native="dom=true">transfer dom</m-button>
      <m-button type="primary" @click.native="dom=false">transfer back</m-button>
      <m-button type="primary" @click.native="insert=false">v-if false</m-button>
      <m-button type="primary" @click.native="insert=true">v-if true</m-button>
    </div>
  </div>
</template>

<script>
import { TransferDomDirective as transferDom, MDialog, MButton } from 'src/widgets'

export default {
  components: {
    MDialog,
    MButton
  },
  directives: {
    transferDom
  },
  data () {
    return {
      show1: false,
      dom: true,
      insert: true,
      code: `<div v-transfer-dom="dom">
  <m-dialog v-model="show1" v-if="insert">
    <span @click="show1=false">Close me</span>
  </m-dialog>
</div>`
    }
  }
}
</script>