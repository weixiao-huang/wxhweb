<template lang="pug">
#container
  #arrow
    router-link(to="/", :class="{hidden: !arrow}") &#8249;
  .container(:style="{paddingLeft: gap + 'px', paddingRight: gap + 'px'}")
    slot
    #postArrow
      router-link(to="/", :class="{hidden: !arrow}") &#8249;
</template>

<script>
export default {
  name: 'container',
  props: ['arrow']
}
</script>

<style lang="stylus" scoped>
  #arrow, .container > #postArrow
    font-size 80px
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
      display flex
      justify-content center
      align-items center
  #arrow
    position absolute
    width 80px
    a
      height 100vh
  #postArrow
    display none
  .container
    padding 80px
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

@media only screen and (max-width 768px)
  .container
    padding 30px
    #postArrow
      text-align center
      display block
      margin-top -20px
  #arrow
    display none
</style>
