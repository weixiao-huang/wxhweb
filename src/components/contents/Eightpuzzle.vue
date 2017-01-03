<template lang="pug">
  container#ep(arrow="true")
    .subTitle 8-Puzzle and (n^2-1)-Puzzle
    .content
      p 8-Puzzle
</template>

<script>
import Container from '../Container'

export default {
  name: 'ep',
  components: {
    Container
  }
}
</script>

<style lang="stylus" scoped>
#ep
  .img
    display inline-block
    width 48%
    img
      width 100%
</style>
