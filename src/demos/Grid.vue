<template>
  <div>
    <m-group-title>2 columns</m-group-title>
    <m-grid>
      <m-grid-item :label="$t('Grid')" v-for="i in 2" :key="i">
         <m-icon name="zk-orderevaluation" class="brand svg-icon active"></m-icon>
      </m-grid-item>
    </m-grid>
    <m-group-title>3 columns</m-group-title>
    <m-grid>
      <m-grid-item link="/component/cell" :label="$t('Go to MCell')">
         <m-icon name="zk-orderevaluation" class="brand svg-icon active"></m-icon>
      </m-grid-item>
      <m-grid-item :link="{ path: '/component/cell'}" :label="$t('Go to MCell')">
         <m-icon name="zk-orderevaluation" class="brand svg-icon active"></m-icon>
      </m-grid-item>
      <m-grid-item link="/component/cell" @on-item-click="onItemClick">
         <m-icon name="zk-orderevaluation" class="brand svg-icon active"></m-icon>
        <span slot="label">{{ $t('Go to MCell') }}</span>
      </m-grid-item>
    </m-grid>
    <m-group-title>4 columns</m-group-title>
    <m-grid>
      <m-grid-item :label="$t('Grid')" v-for="i in 4" :key="i">
         <m-icon name="zk-orderevaluation" class="brand svg-icon active"></m-icon>
      </m-grid-item>
    </m-grid>
    <m-group-title> {{ $t('Custom content') }} </m-group-title>
    <m-grid>
      <m-grid-item v-for="i in 5" :key="i">
        <span class="grid-center">{{i}}</span>
      </m-grid-item>
    </m-grid>
    <m-group-title> {{ $t('Custom col') }} </m-group-title>
    <m-grid :cols="3">
      <m-grid-item v-for="i in 6" :key="i">
        <span class="grid-center">{{i}}</span>
      </m-grid-item>
    </m-grid>
  </div>
</template>

<i18n>
Grid:
  zh-CN: 九宫格
Go to MCell:
  zh-CN: 跳转到Cell
Custom content:
  zh-CN: 自定义内容
Custom col:
  zh-CN: 自定义列
</i18n>

<script>
import { MGrid, MGridItem, MGrouptitle } from 'src/widgets'

export default {
  components: {
    MGrid,
    MGridItem,
    MGrouptitle
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
