<template>
  <div :class="name" class="modal">
    <div class="modal-content">
      <slot name="content"></slot>
    </div>

    <div class="modal-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { Modal } from 'materialize-css/dist/js/materialize'

export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },

  mounted () {
    this.initializeModal()
  },

  methods: {
    initializeModal () {
      const element = document.querySelector(`.${this.name}`)

      Modal.init(element)
      this.modal = Modal.getInstance(element)
    },

    open () {
      this.modal.open()
    }
  }
}
</script>
