<template>
  <div>
    <div class="menu border-right">
       <scroller lock-x>
          <div class="box1">
            <ul>
              <li class="border-bottom"><span>热搜推荐</span></li>
              <li class="border-bottom"><span>手机数码</span></li>
              <li class="border-bottom"><span>家用电器</span></li>
              <li class="border-bottom"><span>女装内衣</span></li>
              <li class="border-bottom"><span>男装内衣</span></li>
              <li class="border-bottom"><span>鞋靴箱包</span></li>
              <li class="border-bottom"><span>电脑办公</span></li>
              <li class="border-bottom"><span>运动户外</span></li>
              <li class="border-bottom"><span>个护化妆</span></li>
              <li class="border-bottom"><span>家具建材</span></li>
              <li class="border-bottom"><span>家居家纺</span></li>
              <li class="border-bottom"><span>母婴玩具</span></li>
              <li class="border-bottom"><span>食品生鲜</span></li>
              <li class="border-bottom"><span>酒水饮料</span></li>
              <li class="border-bottom"><span>钟表奢品</span></li>
              <li class="border-bottom"><span>汽车用品</span></li>
              <li class="border-bottom"><span>医药保健</span></li>
              <li class="border-bottom"><span>珠宝饰品</span></li>
              <li class="border-bottom"><span>图书音像</span></li>
              <li class="border-bottom"><span>全球购</span></li>
            </ul>
          </div>
        </scroller>
    </div>
    <div class="content">
      <scroller lock-x scrollbar-y>
        <div>
          <div style="margin: 10*@rem;overflow: hidden;" v-for="item in list">
            <masker style="border-radius: 2*@rem;">
              <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
              <div slot="content" class="m-title">
                {{item.title}}
                <br/>
                <span class="m-time">2016-03-18</span>
              </div>
            </masker>
          </div>
        </div>
      </scroller>
    </div>
  </div>
</template>

<script>
import { Scroller, Masker } from 'vux'

export default {
  components: {
    Scroller,
    Masker
  },
  data () {
    return {
      list: [{
        title: '洗颜新潮流！人气洁面皂排行榜',
        img: 'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'
      }, {
        title: '美容用品 & 日用品（上）',
        img: 'https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg'
      }, {
        title: '日本车载空气净化器精选',
        img: 'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'
      }, {
        title: '洗颜新潮流！人气洁面皂排行榜',
        img: 'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'
      }, {
        title: '美容用品 & 日用品（上）',
        img: 'https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg'
      }, {
        title: '日本车载空气净化器精选',
        img: 'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'
      }]
    }
  }
}
</script>

<style scoped lange="less">
.menu {
  width: 75*@rem;
  float: left;
  background-color: #fff;
}
.box1 {
}
.box1 ul {
  width: 74*@rem;
}
.box1 li{
  text-align: center;
  padding: 0 5*@rem;
  
  line-height: 40*@rem;
}
.content {
  padding-left: 20*@rem;
}
.box1-item {
  width: 200*@rem;
  height: 100*@rem;
  background-color: #ccc;
  text-align: center;
  line-height: 100*@rem;
}
.box1-item:first-child {
  margin-left: 0;
}
.shop-item {
  padding: 5*@rem;
}
</style>
