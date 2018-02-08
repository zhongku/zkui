<template>
  <div>
    <m-group>
      <m-switch title="Default popup" v-model="show" ></m-switch>
      <m-switch title="Full popup" v-model="show1"></m-switch>
      <m-switch title="Multi popup (first)" v-model="show3"></m-switch>
      <m-switch title="Mask disable" v-model="show5"></m-switch>
      <m-switch title="MPopup address" v-model="show6"></m-switch>
      <m-switch title="default max-height=100%" v-model="show12"></m-switch>
      <m-switch title="set max-height=50%" v-model="show13"></m-switch>
    </m-group>

    <div v-transfer-dom>
      <m-popup v-model="show" @on-hide="log('hide')" @on-show="log('show')">
        <div class="popup0">
          <m-group>
            <m-switch title="Another XSwitcher" v-model="show"></m-switch>
            <m-switch title="Show MToast" v-model="showToast"></m-switch>
          </m-group>
        </div>
      </m-popup>
    </div>

    <m-toast v-model="showToast">You did it!</m-toast>

    <div v-transfer-dom>
      <m-popup v-model="show1" height="100%">
        <div class="popup1">
          <m-group>
            <m-switch title="Another XSwitcher" v-model="show1"></m-switch>
          </m-group>
        </div>
      </m-popup>
    </div>

    <div v-transfer-dom>
      <m-popup v-model="show3">
        <div class="popup2">
          <m-group>
            <m-switch title="Multi MPopup (first)" v-model="show3"></m-switch>
            <m-switch title="Multi MPopup (second)" v-model="show4"></m-switch>
          </m-group>
          this is the first popup
        </div>
      </m-popup>
    </div>

    <div v-transfer-dom>
      <m-popup v-model="show4">
        <div class="popup2">
          <m-group>
            <m-switch title="Multi MPopup (second)" v-model="show4"></m-switch>
          </m-group>
          this is the second popup
        </div>
      </m-popup>
    </div>

    <div v-transfer-dom>
      <m-popup v-model="show5" :hide-on-blur=false>
        <div class="popup2">
          <m-group>
            <m-switch title="Mask disable" v-model="show5"></m-switch>
          </m-group>
          The mask cannot be clicked!
        </div>
      </m-popup>
    </div>

    <div v-transfer-dom>
      <m-popup v-model="show6">
        <div class="popup1">
          <m-group>
            <m-switch title="MPopup address" v-model="show6"></m-switch>
          </m-group>
          <m-group>
            <m-address :title="title6" v-model="value6" :list="addressData" placeholder="请选择地址" inline-desc="可以设置placeholder" :popup-style="{zIndex: 502}"></m-address>
          </m-group>
        </div>
      </m-popup>
    </div>

    <m-group>
      <m-switch title="transparent background" v-model="show7"></m-switch>
    </m-group>

    <div v-transfer-dom>
      <m-popup v-model="show7" height="270px" is-transparent>
        <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
         <m-group>
          <m-cell title="Product" value="Donate"></m-cell>
          <m-cell title="Total" value="$10.24"></m-cell>
         </m-group>
         <div style="padding:20px 15px;">
          <m-button type="primary">Pay</m-button>
          <m-button @click.native="show7 = false">Cancel</m-button>
         </div>
        </div>
      </m-popup>
    </div>

    <m-group title="set position">
      <m-switch title="left(100% width)" v-model="show8"></m-switch>
      <m-switch title="right" v-model="show9"></m-switch>
      <m-switch title="top(no mask)" v-model="show10"></m-switch>
      <m-switch title="bottom" v-model="show11"></m-switch>
    </m-group>

    <div v-transfer-dom>
      <m-popup v-model="show8" position="left" width="100%">
        <div class="position-horizontal-demo">
          <span class="vux-close" @click="show8 = false"></span>
        </div>
      </m-popup>
    </div>

    <div v-transfer-dom>
      <m-popup v-model="show9" position="right">
        <div style="width:200px;">
        </div>
      </m-popup>
    </div>

    <div v-transfer-dom>
      <m-popup v-model="show10" position="top" :show-mask="false">
        <div class="position-vertical-demo">
        I'm on top. Hide in 1s.
        </div>
      </m-popup>
    </div>

    <div v-transfer-dom>
      <m-popup v-model="show11" position="bottom">
        <div class="position-vertical-demo">
        I'm on bottom.
        </div>
      </m-popup>
    </div>

    <div v-transfer-dom>
      <m-popup v-model="show12" position="bottom">
        <m-group>
          <m-cell v-for="i in 20" :key="i" :title="i"></m-cell>
        </m-group>
        <div style="padding: 15px;">
          <m-button @click.native="show12 = false" plain type="primary"> Close Me </m-button>
        </div>
      </m-popup>
    </div>

    <div v-transfer-dom>
      <m-popup v-model="show13" position="bottom" max-height="50%">
        <m-group>
          <m-cell v-for="i in 20" :key="i" :title="i"></m-cell>
        </m-group>
        <div style="padding: 15px;">
          <m-button @click.native="show13 = false" plain type="primary"> Close Me </m-button>
        </div>
      </m-popup>
    </div>

  </div>
</template>

<script>
import { TransferDom, MPopup, MGroup, MCell, MButton, MSwitch, MToast, MAddress, ChinaAddressData } from 'src/widgets'

export default {
  directives: {
    TransferDom
  },
  components: {
    MPopup,
    MGroup,
    MCell,
    MSwitch,
    MToast,
    MAddress,
    MButton
  },
  data () {
    return {
      addressData: ChinaAddressData,
      show: false,
      show1: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      title6: '默认空的',
      value6: [],
      show7: false,
      showToast: false,
      show8: false,
      show9: false,
      show10: false,
      show11: false,
      show12: false,
      show13: false
    }
  },
  methods: {
    log (str) {
      console.log(str)
    }
  },
  watch: {
    show10 (val) {
      if (val) {
        setTimeout(() => {
          this.show10 = false
        }, 1000)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/close.less';

.popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}
.popup2 {
  padding-bottom:15px;
  height:400px;
}
.position-vertical-demo {
  background-color: #ffe26d;
  color: #000;
  text-align: center;
  padding: 15px;
}
.position-horizontal-demo {
  position: relative;
  height: 100%;
  .vux-close {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(4);
    color: #000;
  }
}
</style>
