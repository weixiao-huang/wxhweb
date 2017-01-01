<template lang="pug">
#container
  arrow.arrow(:width="gap", to="/", :class="{hidden: !arrow}")
  .container(:style="{paddingLeft: gap + 'px', paddingRight: gap + 'px'}")
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
  .container
    height calc(100vh - 200px)
    overflow scroll
    padding 100px 0
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
