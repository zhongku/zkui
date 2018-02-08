// 演示例子
export default [
 {
    path: '/demo/index', // 
    component: r => require.ensure([], () => r(require('src/demos/_index')), 'demo_index')
 },
  {
   path: '/demo/Grid', // 
  component: r => require.ensure([], () => r(require('src/demos/Grid')), 'demo_Grid')
 }
// {
//    path: '/demo/Actionsheet', // 
//    component: r => require.ensure([], () => r(require('src/demos/Actionsheet')), 'demo_Actionsheet')
// }
// }
//  /*{
//  path: '/demo/Agree', // 
//    component: r => require.ensure([], () => r(require('src/demos/Agree')), 'demo_Agree')
//  },
//  {
//    path: '/demo/Alert', // 
//    component: r => require.ensure([], () => r(require('src/demos/Alert')), 'demo_Alert')
//  },
//  {
//    path: '/demo/AppTest', // 
//    component: r => require.ensure([], () => r(require('src/demos/AppTest')), 'demo_AppTest')
//  },
//  {
//    path: '/demo/Badge', // 
//    component: r => require.ensure([], () => r(require('src/demos/Badge')), 'demo_Badge')
//  },
//  {
//    path: '/demo/Blur', // 
//    component: r => require.ensure([], () => r(require('src/demos/Blur')), 'demo_Blur')
//  },
//  {
//    path: '/demo/ButtonTab', // 
//    component: r => require.ensure([], () => r(require('src/demos/ButtonTab')), 'demo_ButtonTab')
//  },
//  {
//    path: '/demo/Calendar', // 
//    component: r => require.ensure([], () => r(require('src/demos/Calendar')), 'demo_Calendar')
//  },
//  {
//    path: '/demo/Card', // 
//    component: r => require.ensure([], () => r(require('src/demos/Card')), 'demo_Card')
//  },
//  {
//    path: '/demo/Cell', // 
//    component: r => require.ensure([], () => r(require('src/demos/Cell')), 'demo_Cell')
//  },
//  {
//    path: '/demo/CellBox', // 
//    component: r => require.ensure([], () => r(require('src/demos/CellBox')), 'demo_CellBox')
//  },
//  {
//    path: '/demo/CellFormPreview', // 
//    component: r => require.ensure([], () => r(require('src/demos/CellFormPreview')), 'demo_CellFormPreview')
//  },
//  {
//    path: '/demo/Center', // 
//    component: r => require.ensure([], () => r(require('src/demos/Center')), 'demo_Center')
//  },
//  {
//    path: '/demo/Checker', // 
//    component: r => require.ensure([], () => r(require('src/demos/Checker')), 'demo_Checker')
//  },
//  {
//    path: '/demo/CheckIcon', // 
//    component: r => require.ensure([], () => r(require('src/demos/CheckIcon')), 'demo_CheckIcon')
//  },
//  {
//    path: '/demo/Checklist', // 
//    component: r => require.ensure([], () => r(require('src/demos/Checklist')), 'demo_Checklist')
//  },
//  {
//    path: '/demo/Clocker', // 
//    component: r => require.ensure([], () => r(require('src/demos/Clocker')), 'demo_Clocker')
//  },
//  {
//    path: '/demo/Close', // 
//    component: r => require.ensure([], () => r(require('src/demos/Close')), 'demo_Close')
//  },
//  {
//    path: '/demo/ColorPicker', // 
//    component: r => require.ensure([], () => r(require('src/demos/ColorPicker')), 'demo_ColorPicker')
//  },
//  {
//    path: '/demo/Comment', // 
//    component: r => require.ensure([], () => r(require('src/demos/Comment')), 'demo_Comment')
//  },{
//    path: '/demo/Confirm', // 
//    component: r => require.ensure([], () => r(require('src/demos/Confirm')), 'demo_Confirm')
//  },{
//    path: '/demo/Countdown', // 
//    component: r => require.ensure([], () => r(require('src/demos/Countdown')), 'demo_Countdown')
//  },
//  {
//    path: '/demo/Countup', // 
//    component: r => require.ensure([], () => r(require('src/demos/Countup')), 'demo_Countup')
//  },
//  {
//    path: '/demo/Datetime', // 
//    component: r => require.ensure([], () => r(require('src/demos/Datetime')), 'demo_Datetime')
//  },
//  {
//    path: '/demo/DatetimeRange', // 
//    component: r => require.ensure([], () => r(require('src/demos/DatetimeRange')), 'demo_DatetimeRange')
//  },
//  {
//    path: '/demo/DatetimeView', // 
//    component: r => require.ensure([], () => r(require('src/demos/DatetimeView')), 'demo_DatetimeView')
//  },
//  {
//    path: '/demo/Demo', // 
//    component: r => require.ensure([], () => r(require('src/demos/Demo')), 'demo_Demo')
//  },
//  {
//    path: '/demo/DemoList', // 
//    component: r => require.ensure([], () => r(require('src/demos/DemoList')), 'demo_DemoList')
//  },
//  {
//    path: '/demo/Device', // 
//    component: r => require.ensure([], () => r(require('src/demos/Device')), 'demo_Device')
//  },
//  {
//    path: '/demo/Divider', // 
//    component: r => require.ensure([], () => r(require('src/demos/Divider')), 'demo_Divider')
//  },
//  {
//    path: '/demo/Donate', // 
//    component: r => require.ensure([], () => r(require('src/demos/Donate')), 'demo_Donate')
//  },
//  {
//    path: '/demo/Drawer', // 
//    component: r => require.ensure([], () => r(require('src/demos/Drawer')), 'demo_Drawer')
//  },
//  {
//    path: '/demo/Flexbox', // 
//    component: r => require.ensure([], () => r(require('src/demos/Flexbox')), 'demo_Flexbox')
//  },
//  {
//    path: '/demo/Flow', // 
//    component: r => require.ensure([], () => r(require('src/demos/Flow')), 'demo_Flow')
//  },
//  {
//    path: '/demo/FormatTime', // 
//    component: r => require.ensure([], () => r(require('src/demos/FormatTime')), 'demo_FormatTime')
//  },
//  {
//    path: '/demo/FormPreview', // 
//    component: r => require.ensure([], () => r(require('src/demos/FormPreview')), 'demo_FormPreview')
//  },

//  {
//    path: '/demo/Group', // 
//    component: r => require.ensure([], () => r(require('src/demos/Group')), 'demo_Group')
//  },
//  {
//    path: '/demo/Home', // 
//    component: r => require.ensure([], () => r(require('src/demos/Home')), 'demo_Home')
//  },
//  {
//    path: '/demo/Icon', // 
//    component: r => require.ensure([], () => r(require('src/demos/Icon')), 'demo_Icon')
//  },
//  {
//    path: '/demo/IconLoading', // 
//    component: r => require.ensure([], () => r(require('src/demos/IconLoading')), 'demo_IconLoading')
//  },
//  {
//    path: '/demo/Inline-calendar-start-date', // 
//    component: r => require.ensure([], () => r(require('src/demos/Inline-calendar-start-date')), 'demo_Inline-calendar-start-date')
//  },
//  {
//    path: '/demo/InlineCalendar', // 
//    component: r => require.ensure([], () => r(require('src/demos/InlineCalendar')), 'demo_InlineCalendar')
//  },
//  {
//    path: '/demo/InlineCalendarEachDaySlot', // 
//    component: r => require.ensure([], () => r(require('src/demos/InlineCalendarEachDaySlot')), 'demo_InlineCalendarEachDaySlot')
//  },
//  {
//    path: '/demo/InlineCalendarMulti', // 
//    component: r => require.ensure([], () => r(require('src/demos/InlineCalendarMulti')), 'demo_InlineCalendarMulti')
//  },
//  {
//    path: '/demo/InlineLoading', // 
//    component: r => require.ensure([], () => r(require('src/demos/InlineLoading')), 'demo_InlineLoading')
//  },
//  {
//    path: '/demo/InlineXNumber', // 
//    component: r => require.ensure([], () => r(require('src/demos/InlineXNumber')), 'demo_InlineXNumber')
//  },
//  {
//    path: '/demo/Issue189', // 
//    component: r => require.ensure([], () => r(require('src/demos/Issue189')), 'demo_Issue189')
//  },
//  {
//    path: '/demo/Issue461', // 
//    component: r => require.ensure([], () => r(require('src/demos/Issue461')), 'demo_Issue461')
//  },
//  {
//    path: '/demo/Issue471', // 
//    component: r => require.ensure([], () => r(require('src/demos/Issue471')), 'demo_Issue471')
//  },
//  {
//    path: '/demo/Issue598', // 
//    component: r => require.ensure([], () => r(require('src/demos/Issue598')), 'demo_Issue598')
//  },
//  {
//    path: '/demo/Issue624', // 
//    component: r => require.ensure([], () => r(require('src/demos/Issue624')), 'demo_Issue624')
//  },
//  {
//    path: '/demo/Issue649', // 
//    component: r => require.ensure([], () => r(require('src/demos/Issue649')), 'demo_Issue649')
//  },{
//    path: '/demo/Issue702', // 
//    component: r => require.ensure([], () => r(require('src/demos/Issue702')), 'demo_Issue702')
//  },
//  {
//    path: '/demo/Issue833', // 
//    component: r => require.ensure([], () => r(require('src/demos/Issue833')), 'demo_Issue833')
//  },
//  {
//    path: '/demo/Issue865', // 
//    component: r => require.ensure([], () => r(require('src/demos/Issue865')), 'demo_Issue865')
//  },
//  {
//    path: '/demo/Issue1211', // 
//    component: r => require.ensure([], () => r(require('src/demos/Issue1211')), 'demo_Issue1211')
//  },
//  {
//    path: '/demo/Issue2365', // 
//    component: r => require.ensure([], () => r(require('src/demos/Issue2365')), 'demo_Issue2365')
//  },
//  {
//    path: '/demo/Loading', // 
//    component: r => require.ensure([], () => r(require('src/demos/Loading')), 'demo_Loading')
//  },
//  {
//    path: '/demo/LoadMore', // 
//    component: r => require.ensure([], () => r(require('src/demos/LoadMore')), 'demo_LoadMore')
//  },
//  {
//    path: '/demo/Marquee', // 
//    component: r => require.ensure([], () => r(require('src/demos/Marquee')), 'demo_Marquee')
//  },
//  {
//    path: '/demo/Masker', // 
//    component: r => require.ensure([], () => r(require('src/demos/Masker')), 'demo_Masker')
//  },
//  {
//    path: '/demo/Msg', // 
//    component: r => require.ensure([], () => r(require('src/demos/Msg')), 'demo_Msg')
//  },
//  {
//    path: '/demo/NotFoundComponent', // 
//    component: r => require.ensure([], () => r(require('src/demos/NotFoundComponent')), 'demo_NotFoundComponent')
//  },
//  {
//    path: '/demo/NumberRoller', // 
//    component: r => require.ensure([], () => r(require('src/demos/NumberRoller')), 'demo_NumberRoller')
//  },
//  {
//    path: '/demo/OnePx', // 
//    component: r => require.ensure([], () => r(require('src/demos/OnePx')), 'demo_OnePx')
//  },
//  {
//    path: '/demo/Panel', // 
//    component: r => require.ensure([], () => r(require('src/demos/Panel')), 'demo_Panel')
//  },
//  {
//    path: '/demo/Picker', // 
//    component: r => require.ensure([], () => r(require('src/demos/Picker')), 'demo_Picker')
//  },
//  {
//    path: '/demo/Popover', // 
//    component: r => require.ensure([], () => r(require('src/demos/Popover')), 'demo_Popover')
//  },
//  {
//    path: '/demo/Popup', // 
//    component: r => require.ensure([], () => r(require('src/demos/Popup')), 'demo_Popup')
//  },
//  {
//    path: '/demo/PopupHeader', // 
//    component: r => require.ensure([], () => r(require('src/demos/PopupHeader')), 'demo_PopupHeader')
//  },
//  {
//    path: '/demo/PopupPicker', // 
//    component: r => require.ensure([], () => r(require('src/demos/PopupPicker')), 'demo_PopupPicker')
//  },
//  {
//    path: '/demo/PopupRadio', // 
//    component: r => require.ensure([], () => r(require('src/demos/PopupRadio')), 'demo_PopupRadio')
//  },
//  {
//    path: '/demo/Previewer', // 
//    component: r => require.ensure([], () => r(require('src/demos/Previewer')), 'demo_Previewer')
//  },{
//    path: '/demo/Pulldown', // 
//    component: r => require.ensure([], () => r(require('src/demos/Pulldown')), 'demo_Pulldown')
//  },
//  {
//    path: '/demo/PulldownPullup', // 
//    component: r => require.ensure([], () => r(require('src/demos/PulldownPullup')), 'demo_PulldownPullup')
//  },
//  {
//    path: '/demo/Pullup', // 
//    component: r => require.ensure([], () => r(require('src/demos/Pullup')), 'demo_Pullup')
//  },
//  {
//    path: '/demo/Qrcode', // 
//    component: r => require.ensure([], () => r(require('src/demos/Qrcode')), 'demo_Qrcode')
//  },
//  {
//    path: '/demo/Querystring', // 
//    component: r => require.ensure([], () => r(require('src/demos/Querystring')), 'demo_Querystring')
//  },
//  {
//    path: '/demo/Radio', // 
//    component: r => require.ensure([], () => r(require('src/demos/Radio')), 'demo_Radio')
//  },
//  {
//    path: '/demo/Range', // 
//    component: r => require.ensure([], () => r(require('src/demos/Range')), 'demo_Range')
//  },{
//    path: '/demo/Rater', // 
//    component: r => require.ensure([], () => r(require('src/demos/Rater')), 'demo_Rater')
//  },
//  {
//    path: '/demo/Reddot', // 
//    component: r => require.ensure([], () => r(require('src/demos/Reddot')), 'demo_Reddot')
//  },
//  {
//    path: '/demo/Scroller', // 
//    component: r => require.ensure([], () => r(require('src/demos/Scroller')), 'demo_Scroller')
//  },
//  {
//    path: '/demo/ScrollerFull', // 
//    component: r => require.ensure([], () => r(require('src/demos/ScrollerFull')), 'demo_ScrollerFull')
//  },
//  {
//    path: '/demo/ScrollerHeader', // 
//    component: r => require.ensure([], () => r(require('src/demos/ScrollerHeader')), 'demo_ScrollerHeader')
//  },
//  {
//    path: '/demo/ScrollerSwiper', // 
//    component: r => require.ensure([], () => r(require('src/demos/ScrollerSwiper')), 'demo_ScrollerSwiper')
//  },
//  {
//    path: '/demo/Search', // 
//    component: r => require.ensure([], () => r(require('src/demos/Search')), 'demo_Search')
//  },
//  {
//    path: '/demo/SearchStatic', // 
//    component: r => require.ensure([], () => r(require('src/demos/SearchStatic')), 'demo_SearchStatic')
//  },
//  {
//    path: '/demo/Selector', // 
//    component: r => require.ensure([], () => r(require('src/demos/Selector')), 'demo_Selector')
//  },
//  {
//    path: '/demo/Shake', // 
//    component: r => require.ensure([], () => r(require('src/demos/Shake')), 'demo_Shake')
//  },
//  {
//    path: '/demo/Spinner', // 
//    component: r => require.ensure([], () => r(require('src/demos/Spinner')), 'demo_Spinner')
//  },
//  {
//    path: '/demo/Step', // 
//    component: r => require.ensure([], () => r(require('src/demos/Step')), 'demo_Step')
//  },
//  {
//    path: '/demo/Sticky', // 
//    component: r => require.ensure([], () => r(require('src/demos/Sticky')), 'demo_Sticky')
//  },
//  {
//    path: '/demo/Swipeout', // 
//    component: r => require.ensure([], () => r(require('src/demos/Swipeout')), 'demo_Swipeout')
//  },
//  {
//    path: '/demo/Swiper', // 
//    component: r => require.ensure([], () => r(require('src/demos/Swiper')), 'demo_Swiper')
//  },
//  {
//    path: '/demo/Tab', // 
//    component: r => require.ensure([], () => r(require('src/demos/Tab')), 'demo_Tab')
//  },
//  {
//    path: '/demo/Tabbar', // 
//    component: r => require.ensure([], () => r(require('src/demos/Tabbar')), 'demo_Tabbar')
//  },
//  {
//    path: '/demo/TabbarIcon', // 
//    component: r => require.ensure([], () => r(require('src/demos/TabbarIcon')), 'demo_TabbarIcon')
//  },
//  {
//    path: '/demo/TabbarLink', // 
//    component: r => require.ensure([], () => r(require('src/demos/TabbarLink')), 'demo_TabbarLink')
//  },
//  {
//    path: '/demo/TabbarSimple', // 
//    component: r => require.ensure([], () => r(require('src/demos/TabbarSimple')), 'demo_TabbarSimple')
//  },
//  {
//    path: '/demo/Test', // 
//    component: r => require.ensure([], () => r(require('src/demos/Test')), 'demo_Test')
//  },
//  {
//    path: '/demo/Thanks', // 
//    component: r => require.ensure([], () => r(require('src/demos/Thanks')), 'demo_Thanks')
//  },
//  {
//    path: '/demo/Timeline', // 
//    component: r => require.ensure([], () => r(require('src/demos/Timeline')), 'demo_Timeline')
//  },
//  {
//    path: '/demo/Toast', // 
//    component: r => require.ensure([], () => r(require('src/demos/Toast')), 'demo_Toast')
//  },
//  {
//    path: '/demo/Uploader', // 
//    component: r => require.ensure([], () => r(require('src/demos/Uploader')), 'demo_Uploader')
//  },
//  {
//    path: '/demo/ViewBox', // 
//    component: r => require.ensure([], () => r(require('src/demos/ViewBox')), 'demo_ViewBox')
//  },
//  {
//    path: '/demo/Wechat', // 
//    component: r => require.ensure([], () => r(require('src/demos/Wechat')), 'demo_Wechat')
//  },
//  {
//    path: '/demo/WechatEmotion', // 
//    component: r => require.ensure([], () => r(require('src/demos/WechatEmotion')), 'demo_WechatEmotion')
//  },
//  {
//    path: '/demo/WeekCalendar', // 
//    component: r => require.ensure([], () => r(require('src/demos/WeekCalendar')), 'demo_WeekCalendar')
//  },
//  {
//    path: '/demo/WepayInput', // 
//    component: r => require.ensure([], () => r(require('src/demos/WepayInput')), 'demo_WepayInput')
//  },
//  {
//    path: '/demo/XAddress', // 
//    component: r => require.ensure([], () => r(require('src/demos/XAddress')), 'demo_XAddress')
//  },
//  {
//    path: '/demo/XButton', // 
//    component: r => require.ensure([], () => r(require('src/demos/XButton')), 'demo_XButton')
//  },
//  {
//    path: '/demo/XCircle', // 
//    component: r => require.ensure([], () => r(require('src/demos/XCircle')), 'demo_XCircle')
//  },
//  {
//    path: '/demo/XDialog', // 
//    component: r => require.ensure([], () => r(require('src/demos/XDialog')), 'demo_XDialog')
//  },
//  {
//    path: '/demo/XHeader', // 
//    component: r => require.ensure([], () => r(require('src/demos/XHeader')), 'demo_XHeader')
//  },
//  {
//    path: '/demo/XHr', // 
//    component: r => require.ensure([], () => r(require('src/demos/XHr')), 'demo_XHr')
//  },
//  {
//    path: '/demo/XIcon', // 
//    component: r => require.ensure([], () => r(require('src/demos/XIcon')), 'demo_XIcon')
//  },
//  {
//    path: '/demo/XImg', // 
//    component: r => require.ensure([], () => r(require('src/demos/XImg')), 'demo_XImg')
//  },
//  {
//    path: '/demo/XImgPopup', // 
//    component: r => require.ensure([], () => r(require('src/demos/XImgPopup')), 'demo_XImgPopup')
//  },
//  {
//    path: '/demo/XImgScroller', // 
//    component: r => require.ensure([], () => r(require('src/demos/XImgScroller')), 'demo_XImgScroller')
//  },
//  {
//    path: '/demo/XInput', // 
//    component: r => require.ensure([], () => r(require('src/demos/XInput')), 'demo_XInput')
//  },
//  {
//    path: '/demo/XNumber', // 
//    component: r => require.ensure([], () => r(require('src/demos/XNumber')), 'demo_XNumber')
//  },{
//    path: '/demo/XProgress', // 
//    component: r => require.ensure([], () => r(require('src/demos/XProgress')), 'demo_XProgress')
//  },
//  {
//    path: '/demo/XSwitch', // 
//    component: r => require.ensure([], () => r(require('src/demos/XSwitch')), 'demo_XSwitch')
//  },
//  {
//    path: '/demo/XTable', // 
//    component: r => require.ensure([], () => r(require('src/demos/XTable')), 'demo_XTable')
//  },
//  {
//    path: '/demo/XTextarea', // 
//    component: r => require.ensure([], () => r(require('src/demos/XTextarea')), 'demo_XTextarea')
//  }*/
//   },
//  {
//     path: '/demo/Actionsheet', // 
//     component: r => require.ensure([], () => r(require('src/demos/Actionsheet')), 'demo_Actionsheet')
//   },

//   {
//     path: '/demo/Agree', // 
//     component: r => require.ensure([], () => r(require('src/demos/Agree')), 'demo_Agree')
//   }    ,
//   {
//     path: '/demo/Alert', // 
//     component: r => require.ensure([], () => r(require('src/demos/Alert')), 'demo_Alert')
//   },
//   {
//     path: '/demo/AppTest', // 
//     component: r => require.ensure([], () => r(require('src/demos/AppTest')), 'demo_AppTest')
//   } ,
//   {
//     path: '/demo/Badge', // 
//     component: r => require.ensure([], () => r(require('src/demos/Badge')), 'demo_Badge')
//   },
//   {
//     path: '/demo/Blur', // 
//     component: r => require.ensure([], () => r(require('src/demos/Blur')), 'demo_Blur')
//   },
//   {
//     path: '/demo/ButtonTab', // 
//     component: r => require.ensure([], () => r(require('src/demos/ButtonTab')), 'demo_ButtonTab')
//   },
//   {
//     path: '/demo/Calendar', // 
//     component: r => require.ensure([], () => r(require('src/demos/Calendar')), 'demo_Calendar')
//   },
//   {
//     path: '/demo/Card', // 
//     component: r => require.ensure([], () => r(require('src/demos/Card')), 'demo_Card')
//   },
//   {
//     path: '/demo/Cell', // 
//     component: r => require.ensure([], () => r(require('src/demos/Cell')), 'demo_Cell')
//   },
//   {
//     path: '/demo/CellBox', // 
//     component: r => require.ensure([], () => r(require('src/demos/CellBox')), 'demo_CellBox')
//   }/*,
//   {
//     path: '/demo/CellFormPreview', // 
//     component: r => require.ensure([], () => r(require('src/demos/CellFormPreview')), 'demo_CellFormPreview')
//   },
//   {
//     path: '/demo/Center', // 
//     component: r => require.ensure([], () => r(require('src/demos/Center')), 'demo_Center')
//   },
//   {
//     path: '/demo/Checker', // 
//     component: r => require.ensure([], () => r(require('src/demos/Checker')), 'demo_Checker')
//   },
//   {
//     path: '/demo/CheckIcon', // 
//     component: r => require.ensure([], () => r(require('src/demos/CheckIcon')), 'demo_CheckIcon')
//   },
//   {
//     path: '/demo/Checklist', // 
//     component: r => require.ensure([], () => r(require('src/demos/Checklist')), 'demo_Checklist')
//   },
//   {
//     path: '/demo/Clocker', // 
//     component: r => require.ensure([], () => r(require('src/demos/Clocker')), 'demo_Clocker')
//   },
//   {
//     path: '/demo/Close', // 
//     component: r => require.ensure([], () => r(require('src/demos/Close')), 'demo_Close')
//   },
//   {
//     path: '/demo/ColorPicker', // 
//     component: r => require.ensure([], () => r(require('src/demos/ColorPicker')), 'demo_ColorPicker')
//   },
//   {
//     path: '/demo/Comment', // 
//     component: r => require.ensure([], () => r(require('src/demos/Comment')), 'demo_Comment')
//   },{
//     path: '/demo/Confirm', // 
//     component: r => require.ensure([], () => r(require('src/demos/Confirm')), 'demo_Confirm')
//   },{
//     path: '/demo/Countdown', // 
//     component: r => require.ensure([], () => r(require('src/demos/Countdown')), 'demo_Countdown')
//   },
//   {
//     path: '/demo/Countup', // 
//     component: r => require.ensure([], () => r(require('src/demos/Countup')), 'demo_Countup')
//   },
//   {
//     path: '/demo/Datetime', // 
//     component: r => require.ensure([], () => r(require('src/demos/Datetime')), 'demo_Datetime')
//   },
//   {
//     path: '/demo/DatetimeRange', // 
//     component: r => require.ensure([], () => r(require('src/demos/DatetimeRange')), 'demo_DatetimeRange')
//   },
//   {
//     path: '/demo/DatetimeView', // 
//     component: r => require.ensure([], () => r(require('src/demos/DatetimeView')), 'demo_DatetimeView')
//   },
//   {
//     path: '/demo/Demo', // 
//     component: r => require.ensure([], () => r(require('src/demos/Demo')), 'demo_Demo')
//   },
//   {
//     path: '/demo/DemoList', // 
//     component: r => require.ensure([], () => r(require('src/demos/DemoList')), 'demo_DemoList')
//   },
//   {
//     path: '/demo/Device', // 
//     component: r => require.ensure([], () => r(require('src/demos/Device')), 'demo_Device')
//   },
//   {
//     path: '/demo/Divider', // 
//     component: r => require.ensure([], () => r(require('src/demos/Divider')), 'demo_Divider')
//   },
//   {
//     path: '/demo/Donate', // 
//     component: r => require.ensure([], () => r(require('src/demos/Donate')), 'demo_Donate')
//   },
//   {
//     path: '/demo/Drawer', // 
//     component: r => require.ensure([], () => r(require('src/demos/Drawer')), 'demo_Drawer')
//   },
//   {
//     path: '/demo/Flexbox', // 
//     component: r => require.ensure([], () => r(require('src/demos/Flexbox')), 'demo_Flexbox')
//   },
//   {
//     path: '/demo/Flow', // 
//     component: r => require.ensure([], () => r(require('src/demos/Flow')), 'demo_Flow')
//   },
//   {
//     path: '/demo/FormatTime', // 
//     component: r => require.ensure([], () => r(require('src/demos/FormatTime')), 'demo_FormatTime')
//   },
//   {
//     path: '/demo/FormPreview', // 
//     component: r => require.ensure([], () => r(require('src/demos/FormPreview')), 'demo_FormPreview')
//   },
//   {
//     path: '/demo/Grid', // 
//     component: r => require.ensure([], () => r(require('src/demos/Grid')), 'demo_Grid')
//   },
//   {
//     path: '/demo/Group', // 
//     component: r => require.ensure([], () => r(require('src/demos/Group')), 'demo_Group')
//   },
//   {
//     path: '/demo/Home', // 
//     component: r => require.ensure([], () => r(require('src/demos/Home')), 'demo_Home')
//   },
//   {
//     path: '/demo/Icon', // 
//     component: r => require.ensure([], () => r(require('src/demos/Icon')), 'demo_Icon')
//   },
//   {
//     path: '/demo/IconLoading', // 
//     component: r => require.ensure([], () => r(require('src/demos/IconLoading')), 'demo_IconLoading')
//   },
//   {
//     path: '/demo/Inline-calendar-start-date', // 
//     component: r => require.ensure([], () => r(require('src/demos/Inline-calendar-start-date')), 'demo_Inline-calendar-start-date')
//   },
//   {
//     path: '/demo/InlineCalendar', // 
//     component: r => require.ensure([], () => r(require('src/demos/InlineCalendar')), 'demo_InlineCalendar')
//   },
//   {
//     path: '/demo/InlineCalendarEachDaySlot', // 
//     component: r => require.ensure([], () => r(require('src/demos/InlineCalendarEachDaySlot')), 'demo_InlineCalendarEachDaySlot')
//   },
//   {
//     path: '/demo/InlineCalendarMulti', // 
//     component: r => require.ensure([], () => r(require('src/demos/InlineCalendarMulti')), 'demo_InlineCalendarMulti')
//   },
//   {
//     path: '/demo/InlineLoading', // 
//     component: r => require.ensure([], () => r(require('src/demos/InlineLoading')), 'demo_InlineLoading')
//   },
//   {
//     path: '/demo/InlineXNumber', // 
//     component: r => require.ensure([], () => r(require('src/demos/InlineXNumber')), 'demo_InlineXNumber')
//   },
//   {
//     path: '/demo/Issue189', // 
//     component: r => require.ensure([], () => r(require('src/demos/Issue189')), 'demo_Issue189')
//   },
//   {
//     path: '/demo/Issue461', // 
//     component: r => require.ensure([], () => r(require('src/demos/Issue461')), 'demo_Issue461')
//   },
//   {
//     path: '/demo/Issue471', // 
//     component: r => require.ensure([], () => r(require('src/demos/Issue471')), 'demo_Issue471')
//   },
//   {
//     path: '/demo/Issue598', // 
//     component: r => require.ensure([], () => r(require('src/demos/Issue598')), 'demo_Issue598')
//   },
//   {
//     path: '/demo/Issue624', // 
//     component: r => require.ensure([], () => r(require('src/demos/Issue624')), 'demo_Issue624')
//   },
//   {
//     path: '/demo/Issue649', // 
//     component: r => require.ensure([], () => r(require('src/demos/Issue649')), 'demo_Issue649')
//   },{
//     path: '/demo/Issue702', // 
//     component: r => require.ensure([], () => r(require('src/demos/Issue702')), 'demo_Issue702')
//   },
//   {
//     path: '/demo/Issue833', // 
//     component: r => require.ensure([], () => r(require('src/demos/Issue833')), 'demo_Issue833')
//   },
//   {
//     path: '/demo/Issue865', // 
//     component: r => require.ensure([], () => r(require('src/demos/Issue865')), 'demo_Issue865')
//   },
//   {
//     path: '/demo/Issue1211', // 
//     component: r => require.ensure([], () => r(require('src/demos/Issue1211')), 'demo_Issue1211')
//   },
//   {
//     path: '/demo/Issue2365', // 
//     component: r => require.ensure([], () => r(require('src/demos/Issue2365')), 'demo_Issue2365')
//   },
//   {
//     path: '/demo/Loading', // 
//     component: r => require.ensure([], () => r(require('src/demos/Loading')), 'demo_Loading')
//   },
//   {
//     path: '/demo/LoadMore', // 
//     component: r => require.ensure([], () => r(require('src/demos/LoadMore')), 'demo_LoadMore')
//   },
//   {
//     path: '/demo/MMarquee', // 
//     component: r => require.ensure([], () => r(require('src/demos/MMarquee')), 'demo_Marquee')
//   }
//   {
//     path: '/demo/Masker', // 
//     component: r => require.ensure([], () => r(require('src/demos/Masker')), 'demo_Masker')
//   },
//   {
//     path: '/demo/Msg', // 
//     component: r => require.ensure([], () => r(require('src/demos/Msg')), 'demo_Msg')
//   },
//   {
//     path: '/demo/NotFoundComponent', // 
//     component: r => require.ensure([], () => r(require('src/demos/NotFoundComponent')), 'demo_NotFoundComponent')
//   },
//   {
//     path: '/demo/NumberRoller', // 
//     component: r => require.ensure([], () => r(require('src/demos/NumberRoller')), 'demo_NumberRoller')
//   },
//   {
//     path: '/demo/OnePx', // 
//     component: r => require.ensure([], () => r(require('src/demos/OnePx')), 'demo_OnePx')
//   },
//   {
//     path: '/demo/Panel', // 
//     component: r => require.ensure([], () => r(require('src/demos/Panel')), 'demo_Panel')
//   },
//   {
//     path: '/demo/Picker', // 
//     component: r => require.ensure([], () => r(require('src/demos/Picker')), 'demo_Picker')
//   },
//   {
//     path: '/demo/Popover', // 
//     component: r => require.ensure([], () => r(require('src/demos/Popover')), 'demo_Popover')
//   },
//   {
//     path: '/demo/Popup', // 
//     component: r => require.ensure([], () => r(require('src/demos/Popup')), 'demo_Popup')
//   },
//   {
//     path: '/demo/PopupHeader', // 
//     component: r => require.ensure([], () => r(require('src/demos/PopupHeader')), 'demo_PopupHeader')
//   },
//   {
//     path: '/demo/PopupPicker', // 
//     component: r => require.ensure([], () => r(require('src/demos/PopupPicker')), 'demo_PopupPicker')
//   },
//   {
//     path: '/demo/PopupRadio', // 
//     component: r => require.ensure([], () => r(require('src/demos/PopupRadio')), 'demo_PopupRadio')
//   },
//   {
//     path: '/demo/Previewer', // 
//     component: r => require.ensure([], () => r(require('src/demos/Previewer')), 'demo_Previewer')
//   },{
//     path: '/demo/Pulldown', // 
//     component: r => require.ensure([], () => r(require('src/demos/Pulldown')), 'demo_Pulldown')
//   },
//   {
//     path: '/demo/PulldownPullup', // 
//     component: r => require.ensure([], () => r(require('src/demos/PulldownPullup')), 'demo_PulldownPullup')
//   },
//   {
//     path: '/demo/Pullup', // 
//     component: r => require.ensure([], () => r(require('src/demos/Pullup')), 'demo_Pullup')
//   },
//   {
//     path: '/demo/Qrcode', // 
//     component: r => require.ensure([], () => r(require('src/demos/Qrcode')), 'demo_Qrcode')
//   },
//   {
//     path: '/demo/Querystring', // 
//     component: r => require.ensure([], () => r(require('src/demos/Querystring')), 'demo_Querystring')
//   },
//   {
//     path: '/demo/Radio', // 
//     component: r => require.ensure([], () => r(require('src/demos/Radio')), 'demo_Radio')
//   },
//   {
//     path: '/demo/Range', // 
//     component: r => require.ensure([], () => r(require('src/demos/Range')), 'demo_Range')
//   },{
//     path: '/demo/Rater', // 
//     component: r => require.ensure([], () => r(require('src/demos/Rater')), 'demo_Rater')
//   },
//   {
//     path: '/demo/Reddot', // 
//     component: r => require.ensure([], () => r(require('src/demos/Reddot')), 'demo_Reddot')
//   },
//   {
//     path: '/demo/Scroller', // 
//     component: r => require.ensure([], () => r(require('src/demos/Scroller')), 'demo_Scroller')
//   },
//   {
//     path: '/demo/ScrollerFull', // 
//     component: r => require.ensure([], () => r(require('src/demos/ScrollerFull')), 'demo_ScrollerFull')
//   },
//   {
//     path: '/demo/ScrollerHeader', // 
//     component: r => require.ensure([], () => r(require('src/demos/ScrollerHeader')), 'demo_ScrollerHeader')
//   },
//   {
//     path: '/demo/ScrollerSwiper', // 
//     component: r => require.ensure([], () => r(require('src/demos/ScrollerSwiper')), 'demo_ScrollerSwiper')
//   },
//   {
//     path: '/demo/Search', // 
//     component: r => require.ensure([], () => r(require('src/demos/Search')), 'demo_Search')
//   },
//   {
//     path: '/demo/SearchStatic', // 
//     component: r => require.ensure([], () => r(require('src/demos/SearchStatic')), 'demo_SearchStatic')
//   },
//   {
//     path: '/demo/Selector', // 
//     component: r => require.ensure([], () => r(require('src/demos/Selector')), 'demo_Selector')
//   },
//   {
//     path: '/demo/Shake', // 
//     component: r => require.ensure([], () => r(require('src/demos/Shake')), 'demo_Shake')
//   },
//   {
//     path: '/demo/Spinner', // 
//     component: r => require.ensure([], () => r(require('src/demos/Spinner')), 'demo_Spinner')
//   },
//   {
//     path: '/demo/Step', // 
//     component: r => require.ensure([], () => r(require('src/demos/Step')), 'demo_Step')
//   },
//   {
//     path: '/demo/Sticky', // 
//     component: r => require.ensure([], () => r(require('src/demos/Sticky')), 'demo_Sticky')
//   },
//   {
//     path: '/demo/Swipeout', // 
//     component: r => require.ensure([], () => r(require('src/demos/Swipeout')), 'demo_Swipeout')
//   },
//   {
//     path: '/demo/Swiper', // 
//     component: r => require.ensure([], () => r(require('src/demos/Swiper')), 'demo_Swiper')
//   },
//   {
//     path: '/demo/Tab', // 
//     component: r => require.ensure([], () => r(require('src/demos/Tab')), 'demo_Tab')
//   },
//   {
//     path: '/demo/Tabbar', // 
//     component: r => require.ensure([], () => r(require('src/demos/Tabbar')), 'demo_Tabbar')
//   },
//   {
//     path: '/demo/TabbarIcon', // 
//     component: r => require.ensure([], () => r(require('src/demos/TabbarIcon')), 'demo_TabbarIcon')
//   },
//   {
//     path: '/demo/TabbarLink', // 
//     component: r => require.ensure([], () => r(require('src/demos/TabbarLink')), 'demo_TabbarLink')
//   },
//   {
//     path: '/demo/TabbarSimple', // 
//     component: r => require.ensure([], () => r(require('src/demos/TabbarSimple')), 'demo_TabbarSimple')
//   },
//   {
//     path: '/demo/Test', // 
//     component: r => require.ensure([], () => r(require('src/demos/Test')), 'demo_Test')
//   },
//   {
//     path: '/demo/Thanks', // 
//     component: r => require.ensure([], () => r(require('src/demos/Thanks')), 'demo_Thanks')
//   },
//   {
//     path: '/demo/Timeline', // 
//     component: r => require.ensure([], () => r(require('src/demos/Timeline')), 'demo_Timeline')
//   },
//   {
//     path: '/demo/Toast', // 
//     component: r => require.ensure([], () => r(require('src/demos/Toast')), 'demo_Toast')
//   },
//   {
//     path: '/demo/Uploader', // 
//     component: r => require.ensure([], () => r(require('src/demos/Uploader')), 'demo_Uploader')
//   },
//   {
//     path: '/demo/ViewBox', // 
//     component: r => require.ensure([], () => r(require('src/demos/ViewBox')), 'demo_ViewBox')
//   },
//   {
//     path: '/demo/Wechat', // 
//     component: r => require.ensure([], () => r(require('src/demos/Wechat')), 'demo_Wechat')
//   },
//   {
//     path: '/demo/WechatEmotion', // 
//     component: r => require.ensure([], () => r(require('src/demos/WechatEmotion')), 'demo_WechatEmotion')
//   },
//   {
//     path: '/demo/WeekCalendar', // 
//     component: r => require.ensure([], () => r(require('src/demos/WeekCalendar')), 'demo_WeekCalendar')
//   },
//   {
//     path: '/demo/WepayInput', // 
//     component: r => require.ensure([], () => r(require('src/demos/WepayInput')), 'demo_WepayInput')
//   },
//   {
//     path: '/demo/XAddress', // 
//     component: r => require.ensure([], () => r(require('src/demos/XAddress')), 'demo_XAddress')
//   },
//   {
//     path: '/demo/XButton', // 
//     component: r => require.ensure([], () => r(require('src/demos/XButton')), 'demo_XButton')
//   },
//   {
//     path: '/demo/XCircle', // 
//     component: r => require.ensure([], () => r(require('src/demos/XCircle')), 'demo_XCircle')
//   },
//   {
//     path: '/demo/XDialog', // 
//     component: r => require.ensure([], () => r(require('src/demos/XDialog')), 'demo_XDialog')
//   },
//   {
//     path: '/demo/XHeader', // 
//     component: r => require.ensure([], () => r(require('src/demos/XHeader')), 'demo_XHeader')
//   },
//   {
//     path: '/demo/XHr', // 
//     component: r => require.ensure([], () => r(require('src/demos/XHr')), 'demo_XHr')
//   },
//   {
//     path: '/demo/XIcon', // 
//     component: r => require.ensure([], () => r(require('src/demos/XIcon')), 'demo_XIcon')
//   },
//   {
//     path: '/demo/XImg', // 
//     component: r => require.ensure([], () => r(require('src/demos/XImg')), 'demo_XImg')
//   },
//   {
//     path: '/demo/XImgPopup', // 
//     component: r => require.ensure([], () => r(require('src/demos/XImgPopup')), 'demo_XImgPopup')
//   },
//   {
//     path: '/demo/XImgScroller', // 
//     component: r => require.ensure([], () => r(require('src/demos/XImgScroller')), 'demo_XImgScroller')
//   },
//   {
//     path: '/demo/XInput', // 
//     component: r => require.ensure([], () => r(require('src/demos/XInput')), 'demo_XInput')
//   },
//   {
//     path: '/demo/XNumber', // 
//     component: r => require.ensure([], () => r(require('src/demos/XNumber')), 'demo_XNumber')
//   },{
//     path: '/demo/XProgress', // 
//     component: r => require.ensure([], () => r(require('src/demos/XProgress')), 'demo_XProgress')
//   },
//   {
//     path: '/demo/XSwitch', // 
//     component: r => require.ensure([], () => r(require('src/demos/XSwitch')), 'demo_XSwitch')
//   },
//   {
//     path: '/demo/XTable', // 
//     component: r => require.ensure([], () => r(require('src/demos/XTable')), 'demo_XTable')
//   },
//   {
//     path: '/demo/XTextarea', // 
//     component: r => require.ensure([], () => r(require('src/demos/XTextarea')), 'demo_XTextarea')
//   }*/
]