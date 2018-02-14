<template>
  <svg version="1.1" :class="clazz"
  :width="fontSize" :height="fontSize" :viewBox="box" @click="onClick">
    <path :d="path.d" :fill="path.fill" :stroke="path.stroke" v-for="path in icon.paths" :key="path.d" />
  </svg>
</template>
<script>
  import parse from './parse'
  import { go } from '../../libs/router'
  export default {
    name: "m-icon",
    props: {
      name: {
        type: String,
        required: true
      },
      link: [String, Object],
      spin: Boolean,
      size :{
        type: String,
        default:'2rem'
      }
    },
    data () {
      return {
        fontSize: this.size
      }
    },
    methods: {
    onClick () {
      /* istanbul ignore next */
      !this.disabled && go(this.link, this.$router)
    }
  },
    computed: {

      clazz () {
        return {
          'svg-icon': true,
           spin: this.spin
        }
      },
      icon () {
        let xml = require(`!xml-loader!src/assets/svg/${this.name}.svg`)
        const t = xml.svg.$.viewBox.split(' ')
        // console.info(`src/assets/svg/${this.name}.svg has been loaded`)
        return {
          width: t[2],
          height: t[3],
          paths: parse.SVGtoArray(xml.svg)
        }
      },
      box () {
        return `0 0 ${this.icon.width} ${this.icon.height}`
      }
    }
  }
</script>


<style>
  .svg-icon {
    display: inline-block;
    fill: currentColor;
  }

  .svg-icon.spin {
    animation: fa-spin 1s 0s infinite linear;
  }

  @keyframes fa-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
