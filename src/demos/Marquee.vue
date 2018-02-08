<template>
  <div>
    <m-divider>{{ $t('Default usage') }}</m-divider>
    <marquee>
      <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)" class="align-middle">hello world {{i}}</marquee-item>
    </marquee>
    <br>
    <m-divider>{{ $t('Used in a cell')}}</m-divider>
    <m-group>
      <m-cell :title="$t('News')">
        <marquee>
          <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">{{ $t('JavaScript is the best language')}} {{i}}</marquee-item>
        </marquee>
      </m-cell>
    </m-group>
    <br>
    <m-divider>{{ $t('Async data')}}</m-divider>
    <marquee>
      <marquee-item v-for="i in asyncCount" :key="i" @click.native="onClick(i)" class="align-middle">hello world {{i}}</marquee-item>
    </marquee>
  </div>
</template>

<i18n>
Default usage:
  zh-CN: 默认
Used in a cell:
  zh-CN: 在 cell 中使用
News:
  zh-CN: 公告
Async data:
  zh-CN: 异步数据
</i18n>

<script>
import { MGroup, MCell, MMarquee, MarqueeItem, MDivider } from 'src/widgets'

export default {
  components: {
    MMarquee,
    MarqueeItem,
    MGroup,
    MCell,
    MDivider
  },
  mounted () {
    setTimeout(() => {
      this.asyncCount = 5
    }, 1000)
  },
  methods: {
    onClick (i) {
      console.log(i)
    }
  },
  data () {
    return {
      asyncCount: 0
    }
  }
}
</script>

<style scoped>
.align-middle {
  text-align: center;
}
</style>