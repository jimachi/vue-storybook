<template>
  <div
    class="original-button"
    @click="onClick"
  >
    <button
      :class="type"
    >
      {{ emoji() }} <slot>Button</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'OriginalButton',
  props: {
    type: {
      type: String,
      default: 'info'
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
    emoji() {
      switch(this.type) {
        case 'warn':
          return '⚠️'
        case 'error':
          return '🔥'
        default:
          return 'ℹ️'
      }
    }
  }
}
</script>

<style scoped>
button {
  width: 100px;
  border: 3px solid;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: whitesmoke;
  outline: none;
}
.info {
  color: blue;
  border-color: blue;
}
.warn {
  color: orange;
  border-color: orange;
}
.error {
  color: red;
  border-color: red;
}
</style>
