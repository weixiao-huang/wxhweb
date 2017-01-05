<template lang="pug">
#wrap
  transition(name="fade" mode="out-in")
    router-view.view
</template>

<script>
export default {
  name: 'wrap',
  props: ['width']
}
</script>

<style lang="stylus">
.view
  background-color #f3f3f3

.bold
  font-weight bold

.fade-enter-active, .fade-leave-active
  transition all 0.2s ease

.fade-enter, .fade-leave-active
  opacity 0
  transform translate(-30px, 0)
</style>
