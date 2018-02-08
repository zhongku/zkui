<template>
  <div>
    <m-header :left-options="{showBack: false}" class="title">Demo list</m-header>
    <m-grid :cols="3" class="list">
      <m-grid-item v-for="(list,index) in lists" :key="index" :link="(list.href)">
        <m-icon name="zk-orderevaluation" class="brand svg-icon active"></m-icon>
        <span class="grid-center name">{{list.name}}</span>
      </m-grid-item>
    </m-grid>
  </div>
</template>
<script>
  import { MHeader, MGridItem, MGroupTitle,MIcon } from 'src/widgets'

  export default {
    components: { MHeader, MGridItem, MGroupTitle,MIcon },
    methods: {
      onItemClick () {
        console.log('on item click')
      }
    },
    data(){
      return{
        lists : [
          {name:'Actionsheet',href:'/demo/Actionsheet'},
          {name:'Agree',href:'/demo/Agree'},
          {name:'Alert',href:'/demo/Alert'},
          {name:'AppTest',href:'/demo/AppTest'},
          {name:'Badge',href:'/demo/Badge'},
          {name:'Blur',href:'/demo/Blur'},
          {name:'ButtonTab',href:'/demo/ButtonTab'},
          {name:'Calendar',href:'/demo/Calendar'},
          {name:'Card',href:'/demo/Card'},
          {name:'Cell',href:'/demo/Cell'},
          {name:'CellBox',href:'/demo/CellBox'},
          {name:'CellFormPreview',href:'/demo/CellFormPreview'},
          {name:'Center',href:'/demo/Center'},
          {name:'Checker',href:'/demo/Checker'},
          {name:'CheckIcon',href:'/demo/CheckIcon'},
          {name:'Checklist',href:'/demo/Checklist'},
          {name:'Clocker',href:'/demo/Clocker'},
          {name:'Close',href:'/demo/Close'},
          {name:'ColorPicker',href:'/demo/ColorPicker'},
          {name:'Comment',href:'/demo/Comment'},
          {name:'Confirm',href:'/demo/Confirm'},
          {name:'Countdown',href:'/demo/Countdown'},
          {name:'Countup',href:'/demo/Countup'},
          {name:'Datetime',href:'/demo/Datetime'},
          {name:'DatetimeRange',href:'/demo/DatetimeRange'},
          {name:'DatetimeView',href:'/demo/DatetimeView'},
          {name:'Demo',href:'/demo/Demo'},
          {name:'DemoList',href:'/demo/DemoList'},
          {name:'Device',href:'/demo/Device'},
          {name:'Divider',href:'/demo/Divider'},
          {name:'Donate',href:'/demo/Donate'},
          {name:'Drawer',href:'/demo/Drawer'},
          {name:'Flexbox',href:'/demo/Flexbox'},
          {name:'Flow',href:'/demo/Flow'},
          {name:'FormatTime',href:'/demo/FormatTime'},
          {name:'FormPreview',href:'/demo/FormPreview'},
          {name:'Grid',href:'/demo/Grid'},
          {name:'Group',href:'/demo/Group'},
          {name:'Home',href:'/demo/Home'},
          {name:'Icon',href:'/demo/Icon'},
          {name:'IconLoading',href:'/demo/IconLoading'},
          {name:'Inline-calendar-start-date',href:'/demo/Inline-calendar-start-date'},
          {name:'InlineCalendar',href:'/demo/InlineCalendar'},
          {name:'InlineCalendarEachDaySlot',href:'/demo/InlineCalendarEachDaySlot'},
          {name:'InlineCalendarMulti',href:'/demo/InlineCalendarMulti'},
          {name:'InlineLoading',href:'/demo/InlineLoading'},
          {name:'InlineXNumber',href:'/demo/InlineXNumber'},
          {name:'Issue189',href:'/demo/Issue189'},
          {name:'Issue461',href:'/demo/Issue461'},
          {name:'Issue471',href:'/demo/Issue471'},
          {name:'Issue598',href:'/demo/Issue598'},
          {name:'Issue624',href:'/demo/Issue624'},
          {name:'Issue649',href:'/demo/Issue649'},
          {name:'Issue702',href:'/demo/Issue702'},
          {name:'Issue833',href:'/demo/Issue833'},
          {name:'Issue865',href:'/demo/Issue865'},
          {name:'Issue1211',href:'/demo/Issue1211'},
          {name:'Issue2365',href:'/demo/Issue2365'},
          {name:'Loading',href:'/demo/Loading'},
          {name:'LoadMore',href:'/demo/LoadMore'},
          {name:'Marquee',href:'/demo/Marquee'},
          {name:'Masker',href:'/demo/Masker'},
          {name:'Msg',href:'/demo/Msg'},
          {name:'NotFoundComponent',href:'/demo/NotFoundComponent'},
          {name:'NumberRoller',href:'/demo/NumberRoller'},
          {name:'OnePx',href:'/demo/OnePx'},
          {name:'Panel',href:'/demo/Panel'},
          {name:'Picker',href:'/demo/Picker'},
          {name:'Popover',href:'/demo/Popover'},
          {name:'Popup',href:'/demo/Popup'},
          {name:'PopupHeader',href:'/demo/PopupHeader'},
          {name:'PopupPicker',href:'/demo/PopupPicker'},
          {name:'PopupRadio',href:'/demo/PopupRadio'},
          {name:'Previewer',href:'/demo/Previewer'},
          {name:'Pulldown',href:'/demo/Pulldown'},
          {name:'PulldownPullup',href:'/demo/PulldownPullup'},
          {name:'Pullup',href:'/demo/Pullup'},
          {name:'Qrcode',href:'/demo/Qrcode'},
          {name:'Querystring',href:'/demo/Querystring'},
          {name:'Radio',href:'/demo/Radio'},
          {name:'Range',href:'/demo/Range'},
          {name:'Rater',href:'/demo/Rater'},
          {name:'Reddot',href:'/demo/Reddot'},
          {name:'Scroller',href:'/demo/Scroller'},
          {name:'ScrollerFull',href:'/demo/ScrollerFull'},
          {name:'ScrollerHeader',href:'/demo/ScrollerHeader'},
          {name:'ScrollerSwiper',href:'/demo/ScrollerSwiper'},
          {name:'Search',href:'/demo/Search'},
          {name:'SearchStatic',href:'/demo/SearchStatic'},
          {name:'Selector',href:'/demo/Selector'},
          {name:'Shake',href:'/demo/Shake'},
          {name:'Spinner',href:'/demo/Spinner'},
          {name:'Step',href:'/demo/Step'},
          {name:'Sticky',href:'/demo/Sticky'},
          {name:'Swipeout',href:'/demo/Swipeout'},
          {name:'Swiper',href:'/demo/Swiper'},
          {name:'Tab',href:'/demo/Tab'},
          {name:'Tabbar',href:'/demo/Tabbar'},
          {name:'TabbarIcon',href:'/demo/TabbarIcon'},
          {name:'TabbarLink',href:'/demo/TabbarLink'},
          {name:'TabbarSimple',href:'/demo/TabbarSimple'},
          {name:'Test',href:'/demo/Test'},
          {name:'Thanks',href:'/demo/Thanks'},
          {name:'Timeline',href:'/demo/Timeline'},
          {name:'Toast',href:'/demo/Toast'},
          {name:'Uploader',href:'/demo/Uploader'},
          {name:'ViewBox',href:'/demo/ViewBox'},
          {name:'Wechat',href:'/demo/Wechat'},
          {name:'WechatEmotion',href:'/demo/WechatEmotion'},
          {name:'WeekCalendar',href:'/demo/WeekCalendar'},
          {name:'WepayInput',href:'/demo/WepayInput'},
          {name:'XAddress',href:'/demo/XAddress'},
          {name:'XButton',href:'/demo/XButton'},
          {name:'XCircle',href:'/demo/XCircle'},
          {name:'XDialog',href:'/demo/XDialog'},
          {name:'XHeader',href:'/demo/XHeader'},
          {name:'XHr',href:'/demo/XHr'},
          {name:'XIcon',href:'/demo/XIcon'},
          {name:'XImg',href:'/demo/XImg'},
          {name:'XImgPopup',href:'/demo/XImgPopup'},
          {name:'XImgScroller',href:'/demo/XImgScroller'},
          {name:'XInput',href:'/demo/XInput'},
          {name:'XNumber',href:'/demo/XNumber'},
          {name:'XProgress',href:'/demo/XProgress'},
          {name:'XSwitch',href:'/demo/XSwitch'},
          {name:'XTable',href:'/demo/XTable'},
          {name:'XTextarea',href:'/demo/XTextarea'},
          {name:'XInput',href:'/demo/XInput'}
        ]
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
  .title{
    width:100%;
    position: fixed;
    z-index: 100;
  }
  .list{
    position: absolute;
    top:2rem;
  }

  .icon{
    margin:.5rem 0 .5rem .1rem;
    padding-left: 1.5rem;
  }
  .name{
    height:2.5rem;
    font-size:16px;
    color:#000000;
    word-wrap:break-word;
  }
</style>