<template>
  <div style="">
    <m-blur :m-blur-amount=40 :url="url">
      <p class="center"><img :src="url"></p>
    </m-blur>
    <m-flexbox :gutter="0">
      <m-flexbox-item v-for="(img, index) in images" :key="index"><img :src="img" style="width:100%" @click="url = img"/></m-flexbox-item>
    </m-flexbox>
  </div>
</template>

<script>
import { MFlexbox, FlexboxItem, MBlur } from 'src/widgets'

export default {
  components: {
    MBlur,
    MFlexbox,
    FlexboxItem
  },
  data () {
    return {
      images: [
        'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
        'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
        'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
      ],
      url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
    }
  }
}
</script>

<style scoped>
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
</style>
