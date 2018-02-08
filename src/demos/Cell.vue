<template>
  <div>
    <m-group>
      <m-cell :title="$t('My Account')" :value="$t('Protected')" @click.native="onClick"></m-cell>
      <m-cell :title="$t('Money')" @click.native="onClick" :is-loading="!money" :value="money"></m-cell>
      <m-cell :title="$t('Withdraw')" disabled is-link></m-cell>
    </m-group>

    <m-group :title="$t('Use is-link to show arrow')">
      <m-cell is-link>
        <span slot="title" style="color:green;"><span style="vertical-align:middle;">{{ $t('Messages') }}</span> <m-badge text="1"></m-badge></span>
      </m-cell>
      <m-cell :title="$t('Notifications')" is-link></m-cell>
      <m-cell :title="$t('Privacy')" is-link></m-cell>
      <m-cell :title="$t('General')" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </m-cell>
    </m-group>

    <m-group label-width="5em" title="Align-items">
      <m-cell primary="content" title="default" value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long"></m-cell>
      <m-cell title="flex-start" align-items="flex-start" value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long"></m-cell>
    </m-group>

    <m-group :title="$t('Collapse')">
      <m-cell
      :title="$t('Title 001')"
      is-link
      :border-intent="false"
      :arrow-direction="showContent001 ? 'up' : 'down'"
      @click.native="showContent001 = !showContent001"></m-cell>

      <template v-if="showContent001">
        <m-cell-box :border-intent="false" class="sub-item" is-link>content 001</m-cell-box>
        <m-cell-box class="sub-item" is-link>content 001</m-cell-box>
        <m-cell-box class="sub-item" is-link>content 001</m-cell-box>
      </template>

      <m-cell
      :title="$t('Title 002')"
      is-link
      :border-intent="false"
      :arrow-direction="showContent002 ? 'up' : 'down'"
      @click.native="showContent002 = !showContent002"></m-cell>

      <template v-if="showContent002">
        <m-cell-form-preview :border-intent="false" :list="list"></m-cell-form-preview>
      </template>

      <m-cell
      :title="$t('Title 003')"
      is-link
      :border-intent="false"
      :arrow-direction="showContent003 ? 'up' : 'down'"
      @click.native="showContent003 = !showContent003"></m-cell>

      <template v-if="showContent003">
        <m-cell-box :border-intent="false" class="sub-item">I'm content 003</m-cell-box>
      </template>

      <m-cell
      :title="$t('Animated')"
      is-link
      :border-intent="false"
      :arrow-direction="showContent004 ? 'up' : 'down'"
      @click.native="showContent004 = !showContent004"></m-cell>

      <p class="slide" :class="showContent004?'animate':''">blablabla...<br/>blablabla...<br/>blablabla...<br/>blablabla...</p>

    </m-group>

    <m-group>
      <m-cell :title="$t('Notifications')" :value="$t('Enabled')"></m-cell>
    </m-group>

    <m-group :title="$t('Use slot for complicated content')">
      <m-cell :title="$t('Slot content')">
        <div>
          <span style="color: green">{{$t('Hi, I\'m Vux.')}}</span>
        </div>
      </m-cell>
    </m-group>

    <m-group :title="$t('is-link is set to true automatically when link exists')">
      <m-cell :title="$t('Go to MRadio Demo')" link="/component/radio" inline-desc='link="/component/radio"'></m-cell>
      <m-cell :title="$t('Go to Demo')" :link="{path:'/demo'}" inline-desc=':link={path:"/demo"}'></m-cell>
      <m-cell :title="$t('Http link')" link="https://vux.li" inline-desc='link="https://vux.li"'></m-cell>
    </m-group>
  </div>
</template>

<i18n>
My Account:
  zh-CN: 我的账号
Protected:
  zh-CN: 保护中
Use is-link to show arrow:
  zh-CN: 使用 is-link 显示右边箭头
Notifications:
  zh-CN: 通知
Enabled:
  zh-CN: 已开启
Privacy:
  zh-CN: 隐私
General:
  zh-CN: 通用
Use slot for complicated content:
  zh-CN: 使用slot显示复杂内容
Slot content:
  zh-CN: slot 内容
Hi, I'm Vux.:
  zh-CN: 你好哇，感谢关注 Vux
is-link is set to true automatically when link exists:
  zh-CN: 当设有 link 属性时，会自动产生箭头效果，无需再设置 is-link
Go to MRadio Demo:
  zh-CN: 前往Radio页面
Go to Demo:
  zh-CN: 前往Demo页面
Http link:
  zh-CN: 站外链接
Money:
  zh-CN: 余额
Collapse:
  zh-CN: 折叠
Title 001:
  zh-CN: 标题一
Title 002:
  zh-CN: 标题二
Title 003:
  zh-CN: 标题三
Animated:
  zh-CN: 动画效果
Withdraw:
  zh-CN: 提现
Messages:
  zh-CN: 消息
</i18n>

<script>
import { MCell, MCellbox, MCellformpreview, MGroup, MBadge } from 'src/widgets'

export default {
  mounted () {
    setTimeout(() => {
      this.money = -1024
    }, 2000)
  },
  components: {
    MGroup,
    MCell,
    MCellformpreview,
    MCellbox,
    MBadge
  },
  methods: {
    onClick () {
      console.log('on click')
    }
  },
  data () {
    return {
      list: [{
        label: 'Apple',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }],
      money: null,
      showContent001: false,
      showContent002: false,
      showContent003: false,
      showContent004: false
    }
  }
}
</script>

<style scoped>
.sub-item {
  color: #888;
}
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>
