<template>
	<div>
		<swiper height="150px" dots-position="center">
      <swiper-item>
        <p style="text-align:center;">1</p>
        <m-group>
          <m-cell title="TEST" :value="docType" @click="showPopupPicker = true"></m-cell>
        </m-group>
      </swiper-item>
      <swiper-item>
        <p style="text-align:center;">2</p>
      </swiper-item>
      <swiper-item>
        <p style="text-align:center;">3</p>
      </swiper-item>
    </swiper>
    <m-group>
      <m-popup-picker :show.sync="showPopupPicker" :show-cell="false" title="TEST" :data="docTypeList" :value.sync="docType"></m-popup-picker>
    </m-group>
	</div>
</template>

<script>
import { MGroup, MCell, Swiper, SwiperItem, MPopuppicker } from 'src/widgets'

export default {
  components: {
    MGroup,
    MCell,
    Swiper,
    SwiperItem,
    MPopuppicker
  },
  data () {
    return {
      docTypeList: [['1', '2', '3', '4', '5']],
      docType: ['2'],
      showPopupPicker: false
    }
  }
}
</script>