<template lang="pug">
#container
  arrow(:width="gap", to="/", :class="{hidden: !arrow}")
  .container.scroll(:style="{margin: '0 ' + (gap + 'px')}")
    slot

</template>

<script>
import Arrow from './Arrow'

export default {
  name: 'container',
  props: ['arrow'],
  components: {
    Arrow
  },
  data () {
    return {
      gap: 100
    }
  }
}
</script>

<style lang="stylus" scoped>
  .hidden
    visibility: hidden
  a
    color #172
  .title
    font-size 35px
    font-weight bold
  .subTitle
    font-size 25px
    padding-top 10px
  .content
    font-size 20px
  #about .title
    color #123
  .ssTitle
    font-size 20px
    font-weight bold
    padding 10px 0 5px 0
</style>
