<template>
  <section class="ZKList-Items weui-panel weui-panel_access"   v-if="styleType == 1">
    <div class="weui-panel__bd" >
      <a :href="item.url" class="weui-media-box weui-media-box_appmsg" v-for="item in dataList" :key="item.id">
        <div class="weui-media-box__hd">
         <img v-lazy="item.image"  class="brand" :alt="item.title">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title zkui-user-account-finacebill-fontcolor">{{item.title}}
            <span class="weui-media-box__title__extra zkui-user-account-finacebill-fontcolor brand">{{item.extra}}</span>
          </h4>
          <p class="weui-media-box__desc">{{item.intro}}</p>
        </div>
      </a>
    </div>
  </section>
</template>
<script>
  import { baseUrl } from 'src/service/config/env'
  export default {
    data() {
    return {
      imageUrl:baseUrl
    }
  },
    props: ['dataList','styleType']
  }
</script>