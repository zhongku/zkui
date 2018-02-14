<template>
  <div>
    <popover placement="top" style="margin: 20*@rem;" @on-show="onShow" @on-hide="onHide">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <button class="btn btn-default">Popover on top</button>
    </popover>

    <popover placement="bottom" style="margin: 20*@rem;">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <button class="btn btn-default">Popover on bottom</button>
    </popover>

    <popover placement="left" style="margin: 20*@rem;">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <button class="btn btn-default">Popover on left</button>
    </popover>

    <popover placement="right" style="margin: 20*@rem;">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <button class="btn btn-default">Popover on right</button>
    </popover>
  </div>
</template>

<script>
import Popover from './'

export default {
  components: {
    Popover
  },
  methods: {
    onShow () {
      console.log('on show')
    },
    onHide () {
      console.log('on hide')
    }
  }
}
</script>

<style scoped>
.popover-demo-content {
  padding: 5px 10*@rem;
}
</style>
