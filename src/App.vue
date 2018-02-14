<template>
  <div style="height:100%;">
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenu" @on-click-menu="changeLocale"></actionsheet>
    </div>

    <drawer width="14.2857rem;" :show.sync="drawerVisibility" :show-mode="showModeValue" :placement="showPlacementValue" :drawer-style="{'background-color':'#e60044', width: '14.2857rem'}">

      <!-- drawer content -->
      <div slot="drawer">
        <group title="Drawer demo(beta)" style="margin-top:20px;">
          <cell title="Demo" link="/demo" value="演示" @click.native="drawerVisibility = false">
          </cell>
          <cell title="Buy me a coffee" link="project/donate" @click.native="drawerVisibility = false">
          </cell>

          <cell title="Github" link="http://github.com/airyland/vux" value="Star me" @click.native="drawerVisibility = false">
          </cell>
        </group>
        <group title="showMode">
          <radio v-model="showMode" :options="['push', 'overlay']" @on-change="onShowModeChange"></radio>
        </group>
        <group title="placement">
          <radio v-model="showPlacement" :options="['left', 'right']" @on-change="onPlacementChange"></radio>
        </group>
      </div>

      <!-- main content -->
      <view-box ref="viewBox" body-padding-top="3.2857rem" body-padding-bottom="3.9286rem">

        <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" :left-options="leftOptions" :right-options="rightOptions" :title="title" :transition="headerTransition" @on-click-more="onClickMore">
          <span v-if="route.path === '/' || route.path === '/component/drawer'" slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
            <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-0.5714rem;left:-0.2143rem;"></x-icon>
          </span>
        </x-header>

        <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->
        <transition @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')" :name="viewTransition" :css="!!direction">
          <router-view class="router-view"></router-view>
        </transition>

        <tabbar class="vux-demo-tabbar" icon-class="vux-center" v-show="!isTabbarDemo" slot="bottom">
          <tabbar-item :link="{path:'/'}" :selected="route.path === '/'">
            <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -0.1429rem;">&#xe637;</span>
            <span slot="label">Home</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/demo'}" :selected="isDemo" badge="9">
            <span class="demo-icon-22" slot="icon">&#xe633;</span>
            <span slot="label">
              <span v-if="componentName" class="vux-demo-tabbar-component">{{componentName}}</span>
              <span v-else>演示</span>
            </span>
          </tabbar-item>
        </tabbar>

      </view-box>
    </drawer>
  </div>
</template>

<script>
  import { Radio, Group, Cell, Badge, Drawer, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom } from 'vux'
  import { mapState, mapActions } from 'vuex'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Radio,
      Group,
      Cell,
      Badge,
      Drawer,
      ButtonTab,
      ButtonTabItem,
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem,
      Loading,
      Actionsheet
    },
    methods: {
      onShowModeChange (val) {
        /** hide drawer before changing showMode **/
        this.drawerVisibility = false
        setTimeout(one => {
          this.showModeValue = val
        }, 400)
      },
      onPlacementChange (val) {
        /** hide drawer before changing position **/
        this.drawerVisibility = false
        setTimeout(one => {
          this.showPlacementValue = val
        }, 400)
      },
      onClickMore () {
        this.showMenu = true
      },
      changeLocale (locale) {
        this.$i18n.set(locale)
        this.$locale.set(locale)
      },
      ...mapActions([
        'updateDemoPosition'
      ])
    },
    mounted () {
      this.handler = () => {
        if (this.path === '/demo') {
          this.box = document.querySelector('#demo_list_box')
          this.updateDemoPosition(this.box.scrollTop)
        }
      }
    },
    beforeDestroy () {
      this.box && this.box.removeEventListener('scroll', this.handler, false)
    },
    watch: {
      path (path) {
        if (path === '/component/demo') {
          this.$router.replace('/demo')
          return
        }
        if (path === '/demo') {
          setTimeout(() => {
            this.box = document.querySelector('#demo_list_box')
            if (this.box) {
              this.box.removeEventListener('scroll', this.handler, false)
              this.box.addEventListener('scroll', this.handler, false)
            }
          }, 1000)
        } else {
          this.box && this.box.removeEventListener('scroll', this.handler, false)
        }
      }
    },
    computed: {
      ...mapState({
        route: state => state.route,
        path: state => state.route.path,
        deviceready: state => state.app.deviceready,
        demoTop: state => state.vux.demoScrollTop,
        isLoading: state => state.vux.isLoading,
        direction: state => state.vux.direction
      }),
      isShowBar () {
        if (/component/.test(this.path)) {
          return true
        }
        return false
      },
      leftOptions () {
        return {
          showBack: this.route.path !== '/'
        }
      },
      rightOptions () {
        return {
          showMore: true
        }
      },
      headerTransition () {
        if (!this.direction) return ''
        return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
      },
      componentName () {
        if (this.route.path) {
          const parts = this.route.path.split('/')
          if (/component/.test(this.route.path) && parts[2]) return parts[2]
        }
      },
      isDemo () {
        return /component|demo/.test(this.route.path)
      },
      isTabbarDemo () {
        return /tabbar/.test(this.route.path)
      },
      title () {
        if (this.route.path === '/') return 'Home'
        if (this.route.path === '/project/donate') return 'Donate'
        if (this.route.path === '/demo') return 'Demo list'
        return this.componentName ? `Demo/${this.componentName}` : 'Demo/~~'
      },
      viewTransition () {
        if (!this.direction) return ''
        return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
      }
    },
    data () {
      return {
        showMenu: false,
        menus: {
          'language.noop': '<span class="menu-title">Language</span>',
          'zh-CN': '中文',
          'en': 'English'
        },
        drawerVisibility: false,
        showMode: 'push',
        showModeValue: 'push',
        showPlacement: 'left',
        showPlacementValue: 'left'
      }
    }
  }
</script>
<style lang="sass">
  @import "./styles/bootstrap/bootstrap";
</style>
<style lang="less">
  @import './styles/zkui';

  body {
    background-color: #fbf9fe;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  .demo-icon-22 {
    font-family: 'vux-demo';
    font-size: 22*@rem;
    color: #888;
  }

  .vux-demo-tabbar .weui-bar__item_on .demo-icon-22 {
    color: #f70968;
  }
  .vux-demo-tabbar
    .weui-tabbar_item.weui-bar__item_on
    .vux-demo-tabbar-icon-home {
    color: rgb(53, 73, 94);
  }
  .demo-icon-22:before {
    content: attr(icon);
  }
  .vux-demo-tabbar-component {
    background-color: #f70968;
    color: #fff;
    border-radius: 7*@rem;
    padding: 0 4*@rem;
    line-height: 14*@rem;
  }
  .weui-tabbar__icon + .weui-tabbar__label {
    margin-top: 0 !important;
  }
  .vux-demo-header-box {
    z-index: 100;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }

  @font-face {
    font-family: 'vux-demo'; /* project id 70323 */
    src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot');
    src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot?#iefix')
        format('embedded-opentype'),
      url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.woff') format('woff'),
      url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.ttf') format('truetype'),
      url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.svg#iconfont')
        format('svg');
  }

  .demo-icon {
    font-family: 'vux-demo';
    font-size: 20*@rem;
    color: #04be02;
  }

  .demo-icon-big {
    font-size: 28*@rem;
  }

  .demo-icon:before {
    content: attr(icon);
  }

  .router-view {
    width: 100%;
    top: 46*@rem;
  }
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%;
    top: 46*@rem;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }
  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .menu-title {
    color: #888;
  }
</style>
