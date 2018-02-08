<template>
  <section class="ZKCell">
    <div  v-for="(list,index) in links" :key="index" class="list">
      <div class="weui-cells" >
        <router-link :to="item.url"  class="weui-cell weui-cell_access" v-for="(item,index) in list.link" :key="index">
          <div class="weui-cell__hd">
            <m-icon :name="item.icon" :class="list.color"></m-icon>
          </div>
          <div class="weui-cell__bd">
          {{item.name}}
          </div>
          <div class="weui-cell__ft "></div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ["links"]
  }
</script>

