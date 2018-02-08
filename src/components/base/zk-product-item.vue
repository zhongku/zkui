<template>
  <section class="ZKProductItem" v-if="styleType == 1">
    <div class="zkui-default-product-items ">
      <ul class="clear" >
        <li class="left" v-for="(item,index) in dataList" :key="index">
          <div class="zkui-product-item">
            <dl>
              <dt >
                <router-link :to="'/product/show/'+item.id" >
                  <m-img :src="item.thumbnailUrl"  :alt="item.thumbnailUrl"></m-img>
                </router-link>
              </dt>
              <dd class="itemTitle">
                <a >
                  {{item.name}}
                </a>
              </dd>
              <dd class="itemPrice">
                <em>{{item.priceStyle}}</em> <span>￥{{item.marketPrice}}</span>
              </dd>
            </dl>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: "zk-product-item",
    props: ['dataList','styleType']
  }
</script>