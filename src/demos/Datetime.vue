<template>
  <div>

    <div style="padding:15px;">
      <m-button type="primary" plain @click.native="showPlugin">{{ $t('Used as a plugin') }}</m-button>
    </div>

    <m-group :title="$t('Default format: YYYY-MM-DD')">
      <m-datetime
        v-model="value1"
        @on-change="change"
        :title="$t('Birthday')"
        @on-cancel="log('cancel')"
        @on-confirm="log('confirm')"
        @on-hide="log('hide', $event)"></m-datetime>
    </m-group>

    <m-group :title="$t('Custom minute list: every 15 minutes')">
      <m-datetime v-model="minuteListValue" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" @on-change="change" :title="$t('Birthday')"></m-datetime>
    </m-group>

    <m-group :title="$t('Custom hour list')">
      <m-datetime v-model="hourListValue" format="YYYY-MM-DD HH:mm" :hour-list="['09', '10', '11', '12', '13', '14', '15', '16']" :minute-list="['00', '15', '30', '45']" @on-change="change" :title="$t('Birthday')"></m-datetime>
    </m-group>

    <m-group title="Readonly">
      <m-datetime v-model="valueReadonly" :readonly="readonly" @on-change="change" :title="$t('Birthday')"></m-datetime>
    </m-group>
    <div style="padding:15px">
      <m-button type="primary" plain @click.native="readonly = !readonly"> {{ $t('Toggle readonly') }} </m-button>
    </div>

     <m-group :title="$t('Format display value')">
      <m-datetime v-model="formatValue" :display-format="formatValueFunction" @on-change="change" :title="$t('Birthday')"></m-datetime>
    </m-group>

    <div style="padding:15px;">
      <m-button type="primary" @click.native="formatValue = '2017-11-11'">{{ $t('Set value: 2017-11-11') }}</m-button>
    </div>

    <m-group :title="$t('Define m-range of hours')">
      <m-datetime v-model="limitHourValue" format="YYYY-MM-DD HH:mm" :min-hour=9 :max-hour=18 @on-change="change" :title="$t('Define m-range of hours')" :inline-desc="$t('Working hours: 09-18')"></m-datetime>
    </m-group>

    <m-group :title="$t('Set start-date and end-date') + ' 2015-11-11 ~ 2017-10-11'">
      <m-datetime v-model="limitHourValue" :start-date="startDate" :end-date="endDate" format="YYYY-MM-DD HH:mm" @on-change="change" :title="$t('Start time')"></m-datetime>
    </m-group>

     <m-group :title="$t('Set end-date only') + ' 2017-10-11'">
      <m-datetime v-model="onlySetEndDateValue" :end-date="onlySetEndDate" format="YYYY-MM-DD HH:mm" @on-change="change" :title="$t('Start time')"></m-datetime>
    </m-group>

    <m-group :title="$t('Format') + ': ' + format">
      <m-datetime v-model="value2" :format="format" @on-change="change" :title="$t('Start time')"></m-datetime>
    </m-group>

    <div style="padding:15px;">
      <m-button type="primary" @click.native="toggleFormat">{{ $t('Toggle format') }}</m-button>
    </div>

    <m-group :title="$t('Placeholder')">
      <m-datetime v-model="value3" default-selected-value="2017-06-18 13" format="YYYY-MM-DD HH" :placeholder="$t('Please select')" @on-change="change" :title="$t('Start time')"></m-datetime>
    </m-group>

    <m-group :title="$t('Set default-selected-value to 2017-11-11')">
      <m-datetime v-model="value3_1" default-selected-value="2017-11-11" format="YYYY-MM-DD" :placeholder="$t('Please select')" @on-change="change" :title="$t('Start time')" :inline-desc=" $t('Current value') + `: ${value3_1}`"></m-datetime>
    </m-group>

    <m-group :title="$t('Set min-year and max-year')">
      <m-datetime v-model="value4" :placeholder="$t('Please select')" :min-year=2000 :max-year=2016 format="YYYY-MM-DD HH:mm" @on-change="change" :title="$t('Years after 2000')"></m-datetime>
    </m-group>

    <m-group :title="$t('Prop: compute-hours-function')">
      <m-datetime format="YYYY-MM-DD HH" v-model="computeHoursValue" :compute-hours-function="computeHoursFunction" :title="$t('Birthday')" @on-change="change"></m-datetime>
    </m-group>

    <m-group :title="$t('Prop: compute-days-function')">
      <m-datetime format="YYYY-MM-DD HH" v-model="computeDaysValue" :compute-days-function="computeDaysFunction" :title="$t('Birthday')" @on-change="change"></m-datetime>
    </m-group>

    <m-group :title="$t('Specified template text in Chinese')">
      <m-datetime v-model="value5" :placeholder="$t('Please select')" :min-year=2000 :max-year=2016 format="YYYY-MM-DD HH:mm" @on-change="change" :title="$t('Chinese')" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></m-datetime>
    </m-group>

    <m-group :title="$t('Show center button and clear the value')">
      <m-datetime v-model="value6" @on-change="change" :title="$t('Birthday')" clear-text="clear" @on-clear="clearValue"></m-datetime>
    </m-group>

    <m-group :title="$t('Show center button to set date to today')">
      <m-datetime v-model="value7" @on-change="change" :title="$t('Birthday')" clear-text="today" @on-clear="setToday"></m-datetime>
    </m-group>

     <m-group :title="$t('Custom trigger slot')">
      <m-datetime v-model="value7" @on-change="change" :title="$t('Birthday')" clear-text="today" @on-clear="setToday">
        <m-button>{{$t('Click me')}}</m-button>
      </m-datetime>
    </m-group>

    <m-group :title="$t('Required')">
      <m-datetime v-model="value8" :title="$t('Required')" clear-text="clear" @on-clear="clearValue8" :required="true"></m-datetime>
    </m-group>

    <m-group :title="$t('Use prop: show.sync (vue^2.3) to control visibility')">
      <m-datetime v-model="value9" @on-change="change" :title="$t('Birthday')" :show.sync="visibility"></m-datetime>
    </m-group>

    <div style="padding:15px;">
      <m-button type="primary" plain @click.native="visibility = true">显示</m-button>
    </div>

  </div>
</template>

<i18n>
'Default format: YYYY-MM-DD':
  zh-CN: 默认格式：YYYY-MM-DD
Format:
  zh-CN: 格式
Start time:
  zh-CN: 开始时间
Placeholder:
  zh-CN: 提示文字
Please select:
  zh-CN: 请选择
Set min-year and max-year:
  zh-CN: 设置开始和结束年份
Years after 2000:
  zh-CN: 2000年以后的时间
Specified template text in Chinese:
  zh-CN: 自定义中文显示模板
Show center button and clear the value:
  zh-CN: 显示中间的清除按钮
Show center button to set date to today:
  zh-CN: 显示中间的设置日期为今天的按钮
Birthday:
  zh-CN: 生日
Chinese:
  zh-CN: 中文
Click me:
  zh-CN: 点我
Custom trigger slot:
  zh-CN: 自定义触发内容
Define m-range of hours:
  zh-CN: 限定小时范围
'Working hours: 09-18':
  zh-CN: 工作时间为 09-18
Set start-date and end-date:
  zh-CN: 设置开始时间和结束日期
'Click to change value to: 2017-11-11':
  zh-CN: 设置时间为 2017-11-11
Format display value:
  zh-CN: 格式化显示
Toggle format:
  zh-CN: 改变格式
'Custom minute list: every 15 minutes':
  zh-CN: 自定义分钟列表（每15分钟）
Custom hour list:
  zh-CN: 定义小时列表
'Use prop: show.sync (vue^2.3) to control visibility':
  zh-CN: '使用 prop: show.sync 控制显示(vue^2.3)'
Used as a plugin:
  zh-CN: 插件形式调用
Set default-selected-value to 2017-11-11:
  zh-CN: 设置默认选中值为 2017-11-11
'Prop: compute-hours-function':
  zh-CN: 自定义小时列表生成逻辑
'Prop: compute-days-function':
  zh-CN: 自定义日期列表生成逻辑
Toggle readonly:
  zh-CN: 切换 readonly 属性
'Set value: 2017-11-11':
  zh-CN: 设置时间为2017-11-11
Set end-date only:
  zh-CN: 只设置结束时间
</i18n>

<script>
import { MDatetime, MGroup, MButton } from 'src/widgets'

export default {
  components: {
    MDatetime,
    MGroup,
    MButton
  },
  data () {
    return {
      readonly: true,
      minuteListValue: '2017-06-12 09:00',
      hourListValue: '2017-06-12 09:00',
      format: 'YYYY-MM-DD HH:mm',
      value1: '2015-11-12',
      valueReadonly: '2015-11-12',
      value2: '',
      value3: '',
      value3_1: '',
      value4: '',
      value5: '',
      value6: '2016-08-18',
      value7: '',
      value8: '',
      limitHourValue: '',
      startDate: '2015-11-11',
      endDate: '2017-10-11',
      formatValue: '2017-10-11',
      formatValueFunction (val) {
        return val.replace(/-/g, '$')
      },
      value9: '',
      visibility: false,
      computeHoursValue: '',
      computeDaysValue: '',
      computeHoursFunction (date, isToday, generateRange) {
        if (isToday) {
          return generateRange(new Date().getHours(), 23)
        } else {
          return generateRange(0, 23)
        }
      },
      computeDaysFunction (options, generateRange) {
        return [options.month] // if current month is n, days are [n]
      },
      onlySetEndDate: '2017-10-11',
      onlySetEndDateValue: ''
    }
  },
  methods: {
    log (str1, str2 = '') {
      console.log(str1, str2)
    },
    showPlugin () {
      this.$zk.datetime.show({
        cancelText: '取消',
        confirmText: '确定',
        format: 'YYYY-MM-DD HH',
        value: '2017-05-20 18',
        onConfirm (val) {
          console.log('plugin confirm', val)
        },
        onShow () {
          console.log('plugin show')
        },
        onHide () {
          console.log('plugin hide')
        }
      })
    },
    toggleFormat () {
      this.format = this.format === 'YYYY-MM-DD HH:mm' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm'
    },
    change (value) {
      console.log('change', value)
    },
    clearValue (value) {
      this.value6 = ''
    },
    clearValue8 (value) {
      this.value8 = ''
    },
    setToday (value) {
      let now = new Date()
      let cmonth = now.getMonth() + 1
      let day = now.getDate()
      if (cmonth < 10) cmonth = '0' + cmonth
      if (day < 10) day = '0' + day
      this.value7 = now.getFullYear() + '-' + cmonth + '-' + day
      console.log('set today ok')
    }
  }
}
</script>

<style scoped lang="less">
.center {
  padding-top: 10px;
  padding-left: 15px;
  color: green;
}
</style>
