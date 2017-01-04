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
      gap: 80
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    padding 50px
    height calc(100vh - 100px)
    overflow scroll
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
  .subContent
    font-size 16px
    padding-bottom 10px
    color: #aaa
  .content
    font-size 18px
    p
      padding-bottom 20px
  .ssTitle
    // border-top 1px dashed #111
    font-size 20px
    font-weight bold
    padding 20px 0 10px 0
</style>
