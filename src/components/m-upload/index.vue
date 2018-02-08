<template>
<div class="weui-cell zk-upload">
                <div class="weui-cell__bd">
                    <div class="weui-uploader">
                        <div class="weui-uploader__hd">
                            <p class="weui-uploader__title"><slot></slot></p>
                            <div class="weui-uploader__info">{{uploadCount}}/{{fileCount}}</div>
                        </div>
                        <div class="weui-uploader__bd">
                            <ul class="weui-uploader__files" id="uploaderFiles">
                                <li class="weui-uploader__file eui-uploader__file_statu zk-border" v-for="(file, index) in files" :key="index"
                                :style="'background-image:url('+file.thumb+')'">
                                </li>
                            </ul>
                            <div class="weui-uploader__input-box">
                            <uploadInput
                            class="btn btn-primary"
                            post-action="/upload/post"
                            :extensions="extensions"
                            :accept="accept"
                            :multiple="true"
                            :size="1024 * 1024 * 10"
                            :drop="true"
                            v-model="files"
                            @input-filter="inputFilter"
                            @input-file="inputFile"
                            ref="upload">

                            </uploadInput>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

</template>
<style>

.weui-uploader__input-box .file-uploads{
    display: block;
    width: 79px;
    height: 79px;
}

</style>

<script>
import uploadInput from  './FileUpload.vue'
// import { Toast  } from '../toast'
//import Cropper from 'cropperjs'  // 图片裁剪
import ImageCompressor from '@xkeshi/image-compressor' // 图片压缩
export default {
  name: 'm-upload',
  props: {
    title: String,
    fileCount: {
      type: Number,
      default: 1
    },
    isImage: true // 是否是图片
  },
  data() {
    return {
      files: [],
      extensions: '',
      accept: '',
      uploadCount: 0
    }
  },
  components: {
    uploadInput
   // Toast
  },
   mounted() {
      this.getData()
  },
  methods: {
     getData(){
          if(this.isImage){
            this.extensions = ".gif,.jpg,.jpeg,.png,.webp"
            this.accept = "image/png,image/gif,image/jpeg,image/webp"
          }
     },
     inputFilter(newFile, oldFile, prevent) {
     if (newFile && !oldFile) {
        // Before adding a file
        // 添加文件前
        // Filter system files or hide files
        // 过滤系统文件 和隐藏文件
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent()
        }
        // Filter php html js file
        // 过滤 php html js 文件
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent()
        }
        // Automatic compression
        // 自动压缩
        if (newFile.file && newFile.type.substr(0, 6) === 'image/' && this.autoCompress > 0 && this.autoCompress < newFile.size) {
          newFile.error = 'compressing'
          const imageCompressor = new ImageCompressor(null, {
            convertSize: Infinity,
            maxWidth: 512,
            maxHeight: 512
          })
          imageCompressor.compress(newFile.file)
            .then((file) => {
              this.$refs.upload.update(newFile, { error: '', file, size: file.size, type: file.type })
            })
            .catch((err) => {
              this.$refs.upload.update(newFile, { error: err.message || 'compress' })
            })
        }
      }
      if(newFile && (!oldFile || newFile.file !== oldFile.file)) {
        // Create a blob field
        // 创建 blob 字段
        newFile.blob = ''
        let URL = window.URL || window.webkitURL
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file)
        }
        // Thumbnails
        // 缩略图
        newFile.thumb = ''
        if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
          newFile.thumb = newFile.blob
        }
      }
      this.$refs.upload.active = true  // 设置文件自动上传
       this.uploadCount=this.files.length
    },
    // add, update, remove File Event
    inputFile(newFile, oldFile) {
      if (newFile && oldFile) {
        // update
        if (newFile.active && !oldFile.active) {
          // beforeSend
          // min size
          if (newFile.size >= 0 && this.minSize > 0 && newFile.size < this.minSize) {
            this.$refs.upload.update(newFile, { error: 'size' })
          }
        }
        if (newFile.progress !== oldFile.progress) {
          // progress
        }
        if (newFile.error && !oldFile.error) {
          // error
        }
        if (newFile.success && !oldFile.success) {
          // success
        }
      }
      if (!newFile && oldFile) {
        // remove
        if (oldFile.success && oldFile.response.id) {
          // $.ajax({
          //   type: 'DELETE',
          //   url: '/upload/delete?id=' + oldFile.response.id,
          // })
        }
      }
      // Automatically activate upload
      if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
        if (this.$refs.upload.active) {
          this.$refs.upload.active = true
        }
      }
    }
    }
}
</script>