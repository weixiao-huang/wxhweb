<template lang="pug">
  #app
    navbar(:width="width")
    wrap(:width="width")
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
