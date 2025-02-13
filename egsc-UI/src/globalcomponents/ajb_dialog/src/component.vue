<template>
  <transition name="dialog-fade">
    <div class="el-dialog__wrapper ajb-dialog" v-show="visible" @click.self="handleWrapperClick">
      <div class="el-dialog" :class="[{ 'is-fullscreen': fullscreen, 'el-dialog--center': center }, customClass]" ref="dialog" :style="style">
        <iframe v-if="showIframe" frameborder="0" border="0" allowtransparency="false"></iframe>
        <div class="el-dialog__header">
          <slot name="title">
            <span class="el-dialog__title">{{ title }}</span>
          </slot>
          <button type="button" class="el-dialog__headerbtn" aria-label="Close" v-if="showClose" @click="handleClose">
            <i class="el-dialog__close el-icon el-icon-close"></i>
          </button>
        </div>
        <div class="el-dialog__body" v-if="rendered">
          <slot></slot>
        </div>
        <div class="el-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Popup from 'element-ui/src/utils/popup'
import Migrating from 'element-ui/src/mixins/migrating'
import emitter from 'element-ui/src/mixins/emitter' // eslint-disable-line

export default {
  name: 'AjbDialog',

  mixins: [Popup, emitter, Migrating],

  props: {
    title: {
      type: String,
      default: ''
    },

    modal: {
      type: Boolean,
      default: true
    },

    modalAppendToBody: {
      type: Boolean,
      default: false
    },

    appendToBody: {
      type: Boolean,
      default: false
    },

    lockScroll: {
      type: Boolean,
      default: true
    },

    closeOnClickModal: {
      type: Boolean,
      default: true
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true
    },

    showClose: {
      type: Boolean,
      default: true
    },

    width: String,

    fullscreen: Boolean,

    customClass: {
      type: String,
      default: ''
    },

    top: {
      type: String,
      default: '15vh'
    },
    beforeClose: Function,
    center: {
      type: Boolean,
      default: false
    },
    showIframe: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      closed: false
    }
  },

  watch: {
    visible (val) {
      if (val) {
        this.closed = false
        this.$emit('open')
        this.$el.addEventListener('scroll', this.updatePopper)
        this.$nextTick(() => {
          this.$refs.dialog.scrollTop = 0
        })
        if (this.appendToBody) {
          document.body.appendChild(this.$el)
        }
      } else {
        this.$el.removeEventListener('scroll', this.updatePopper)
        if (!this.closed) this.$emit('close')
      }
    }
  },

  computed: {
    style () {
      let style = {}
      if (this.width) {
        style.width = this.width
      }
      if (!this.fullscreen) {
        style.marginTop = this.top
      }
      return style
    }
  },

  methods: {
    getMigratingConfig () {
      return {
        props: {
          'size': 'size is removed.'
        }
      }
    },
    handleWrapperClick () {
      if (!this.closeOnClickModal) return
      this.handleClose()
    },
    handleClose () {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide)
      } else {
        this.hide()
      }
    },
    hide (cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false)
        this.$emit('close')
        this.closed = true
      }
    },
    updatePopper () {
      this.broadcast('ElSelectDropdown', 'updatePopper')
      this.broadcast('ElDropdownMenu', 'updatePopper')
    }
  },

  mounted () {
    if (this.visible) {
      this.rendered = true
      this.open()
      if (this.appendToBody) {
        document.body.appendChild(this.$el)
      }
    }
  }
}
</script>
<style lang="less">
@import url('./assets/css/style.less');
</style>

