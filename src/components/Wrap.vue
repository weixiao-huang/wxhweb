<template lang="pug">
#wrap(:style="{ width :'calc(100vw - ' + (width + 'px)') }")
  transition(namd="fade", mode="out-in")
    router-view.view
</template>

<script>
export default {
  name: 'wrap',
  props: ['width']
}
</script>

<style lang="stylus">
.bold
  font-weight bold
</style>
