<template>
  <div>
   <group-title>使用图标,通过css来控制颜色，和间距</group-title>
  <grid class="icon-brand zkui-grid">
      <grid-item link="/component/cell" label="提现" svg="zk-grid">
      </grid-item>
      <grid-item link="/component/cell" label="充值" svg="zk-add">
      </grid-item>
      <grid-item :link="{ path: '/component/cell'}" label="会员中心" svg="zk-grid">
      </grid-item>
      <grid-item link="/component/cell" label="首页"  svg="zk-seek">
      </grid-item>
  </grid>

<group-title>会员中心首页示列</group-title>
  <grid class="icon-brand zkui-grid zkui-grid-border__none">
      <grid-item link="/user/qrcode" label="二维码" svg="zk-qrcode"></grid-item>
      <grid-item link="/user/account/index" label="我的钱包" svg="zk-finance"></grid-item>
      <grid-item link="/user/reward/list" label="我的分润" svg="zk-fenrun"></grid-item>
      <grid-item link="/user/product/footprint" label="我的足迹" svg="zk-finance"></grid-item>
  </grid>



     <group-title>使用.zkui-grid-border__none 平滑线条颜色</group-title>
      <grid class="icon-metal zkui-grid-border__none">
      <grid-item link="/component/cell" label="提现" svg="zk-grid">
      </grid-item>
      <grid-item link="/component/cell" label="充值" svg="zk-add">
      </grid-item>
      <grid-item :link="{ path: '/component/cell'}" label="会员中心" svg="zk-grid">
      </grid-item>
      <grid-item link="/component/cell" label="首页"  svg="zk-seek">
      </grid-item>
  </grid>


    <group-title>2 columns</group-title>
    <grid>
      <grid-item :label="$t('Grid')" v-for="i in 2" :key="i">
        <img slot="icon" src="../assets/grid_icon.png">
      </grid-item>
    </grid>
    <group-title>3 columns</group-title>
    <grid>
      <grid-item link="/component/cell" :label="$t('Go to Cell')">
        <img slot="icon" src="../assets/grid_icon.png">
      </grid-item>
      <grid-item :link="{ path: '/component/cell'}" :label="$t('Go to Cell')">
        <img slot="icon" src="../assets/grid_icon.png">
      </grid-item>
      <grid-item link="/component/cell" @on-item-click="onItemClick">
        <img slot="icon" src="../assets/grid_icon.png">
        <span slot="label">{{ $t('Go to Cell') }}</span>
      </grid-item>
    </grid>
    <group-title>4 columns</group-title>
    <grid>
      <grid-item :label="$t('Grid')" v-for="i in 4" :key="i">
        <img slot="icon" src="../assets/grid_icon.png">
      </grid-item>
    </grid>
    <group-title> {{ $t('Custom content') }} </group-title>
    <grid>
      <grid-item v-for="i in 5" :key="i">
        <span class="grid-center">{{i}}</span>
      </grid-item>
    </grid>
    <group-title> {{ $t('Custom col') }} </group-title>
    <grid :cols="3">
      <grid-item v-for="i in 6" :key="i">
        <span class="grid-center">{{i}}</span>
      </grid-item>
    </grid>
  </div>
</template>

<i18n>
Grid:
  zh-CN: 九宫格
Go to Cell:
  zh-CN: 跳转到Cell
Custom content:
  zh-CN: 自定义内容
Custom col:
  zh-CN: 自定义列
</i18n>

<script>
import { Grid, GridItem, GroupTitle, MIcon } from 'vux'

export default {
  components: {
    Grid,
    GridItem,
    GroupTitle,
    MIcon
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    }
  }
}
</script>

<style scoped>
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
</style>
