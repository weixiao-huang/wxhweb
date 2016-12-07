<template lang="pug">
  #app
    navbar(:width="width")
    #wrap(:style="{ marginLeft: width + 'px' }")
      #about
        .title Weixiao HUANG (黄维啸)
        .subTitle.
          Tsinghua University <br/>
          University of California, Berkeley
        .content
          p.
            I have been an undergraduate student in Tsinghua University and graduated from July, 2016.
      #education
      #experiences
</template>

<script>
import Hello from './components/Hello'
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Hello,
    Navbar
  },
  data () {
    return {
      width: 250
    }
  }
}
</script>

<style lang="stylus">
$default-fonts = "华文细黑", "Microsoft YaHei", "微软雅黑", Helvetica, Tahoma, Arial, STXihei, sans-serif;
*, html, body
  margin 0
  padding 0
div
  font-family $default-fonts
a, a:hover, a:active, a:before, a:after, a:visited
  text-decoration none
li
  list-style-type none

</style>

<style lang="stylus" scoped>
#wrap
  padding 100px
  #about
    .title
      color #123
      font-size 35px
    .subTitle
      font-size 20px
    .content
      font-size 20px
      p
        padding 20px 0
</style>
