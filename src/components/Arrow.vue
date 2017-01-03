<template lang="pug">
  #arrow(:style="{width: width + 'px'}")
    router-link(:to="to") &#8249;
</template>

<script>
export default {
  name: 'arrow',
  props: ['to', 'width'],
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
#arrow
  font-size 80px
  position absolute
  a
    opacity 0.5
    -webkit-transition: all 0.5s
    -moz-transition: all 0.5s
    -ms-transition: all 0.5s
    -o-transition: all 0.5s
    transition: all 0.5s

    color #172
    &:hover
      color #8a8

    height 100vh
    display flex
    justify-content center
    align-items center

.navRight
  right 0

</style>
