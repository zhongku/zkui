<template>
    <div class="wy-iconlist-box clear">
      <div class="item" v-for="str in imgUrl.employees" :key="str.firstName">
        <router-link :to="str.url" class="wy-links-iconlist">
          <div class="img">
            <img :src="str.imgurl">
          </div>
          <p>{{str.test}}</p>
        </router-link>
      </div>
    </div>

</template>

<script>
  export default{
    props: ['imgUrl']
  }
</script>
<style>
  .wy-iconlist-box{background: #fff; padding: 0 10px;  }
  .wy-links-iconlist {display: block; text-align: center;margin: 10px 0; }
  .wy-links-iconlist .img {margin: 0 23px;}
  .wy-links-iconlist p {font-size: 11px; color: #454545; margin-top: 5px;  }
  .wy-links-iconlist img {width: 100%;}
  .wy-iconlist-box>div.item{ float: left; width:25%}
</style>