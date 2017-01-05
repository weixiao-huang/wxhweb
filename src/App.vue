<template lang="pug">
  #app
    input#toggle(type="checkbox", name="toggle")
    label(for="toggle") ☰
    .name Weixiao Huang
    navbar
    wrap
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

<style lang="stylus">
$default-fonts = Georgia, Arial, Times New Roman, Verdana, sans-serif;
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

<style lang="stylus" scoped>
#app
  background-color #123
#nav
  width 300px
#wrap
  margin-left 300px
#nav, #wrap
  transition all 0.3s
input, label, .name
  display none
#nav, label
  background-color #23bbf3
#nav, .name
  font-family Arial, Times New Roman, Verdana, sans-serif;

@media only screen and (max-width 768px)
  #wrap
    margin-left 0
  #nav
    width 60vw
    margin-left -60vw
  label
    color #f3f3f3
    padding 10px 15px
    font-size 25px
    cursor pointer
  label, .name
    display inline-block
    line-height 40px
  .name
    color #f2f2f2
    float right
    padding 10px 20px
    font-size 20px
    height 100%
  input:checked ~ #nav
    margin-left 0
  input:checked ~ #wrap
    margin-left 60vw
    margin-right -60vw
</style>
