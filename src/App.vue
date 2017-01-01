<template lang="pug">
  #app
    navbar.scroll(:width="width")
    wrap.scroll(:width="width")
</template>

<script>
import Hello from './components/Hello'
import Navbar from './components/Navbar'
import Wrap from './components/Wrap'

export default {
  name: 'app',
  components: {
    Hello,
    Navbar,
    Wrap
  },
  data () {
    return {
      width: 300
    }
  }
}
</script>

<style lang="stylus" scoped>
  .scroll
    height 100vh
    display inline-block
    overflow scroll
</style>


<style lang="stylus">
$default-fonts = "华文细黑", "Microsoft YaHei", "微软雅黑", Helvetica, Tahoma, Arial, STXihei, sans-serif;
$default-font-color = #666;
*, html, body
  margin 0
  padding 0
  overflow hidden

div
  font-family $default-fonts
  color $default-font-color
a, a:hover, a:active, a:before, a:after, a:visited
  text-decoration none
li
  list-style-type none
</style>

