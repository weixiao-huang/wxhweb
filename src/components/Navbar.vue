<template lang="pug">
nav(:style="{width: width + 'px'}")
  .container
    .img
      img(src="../images/me.jpg")
    .nav
      template(v-for="(item, index) in items")
        .navItem
          .title
            a(:href="item.src") {{ item.title }}
</template>

<script>
export default {
  props: ['width'],
  name: 'hello',
  data () {
    return {
      items: [
        {
          title: 'About',
          src: '#about'
        },
        {
          title: 'Education',
          src: '#education'
        },
        {
          title: 'Experiences',
          src: '#experiences'
        },
        {
          title: 'Projects',
          src: '#projects'
        },
        {
          title: 'Honors',
          src: '#honors'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
nav
  height 100vh
  overflow scroll
  position absolute
  background-color #23bbf3
  font-size 20px
  text-align center
  .container
    margin-top 100px
    .img
      padding 0 20%
      img
        width 100%
        border-radius 100%
    .nav
      padding 20% 0
a
  color white
  display block
  padding 5px 0

</style>
