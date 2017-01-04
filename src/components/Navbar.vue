<template lang="pug">
nav(:style="{width: width + 'px'}")
  .container
    .img
      img(src="../images/me.jpg")
    .name
      p Weixiao Huang
      .sub <i>Innovation and Passion</i>
    .nav
      template(v-for="(item, index) in items")
        .navItem(:class="{borderBottom: item.borderBottom}")
          .title
            a(:href="item.src") {{ item.title }}
    footer
      .github
        a(href="https://github.com/ztxcydzz") &#xf09b;
      .email
        a(href="mailto:hwx.simle@gmail.com") send email
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
          src: '#about',
          borderBottom: true
        },
        {
          title: 'Education',
          src: '#education',
          borderBottom: true
        },
        {
          title: 'Experiences',
          src: '#experiences',
          borderBottom: true
        },
        {
          title: 'Projects',
          src: '#projects',
          borderBottom: true
        },
        {
          title: 'Honors',
          src: '#honors',
          borderBottom: false
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
div
  color #f3f3f3
  font-family Arial, Times New Roman, Verdana, sans-serif;
.name
  padding-top 40px
  p
    font-size 25px
    font-weight bold
  .sub
    font-size 16px
    padding 10px 0

nav
  height 100vh
  overflow scroll
  position absolute
  background-color #23bbf3
  font-size 16px
  text-align center
  .container
    margin-top 50px
    .img
      padding 0 20%
      img
        width 100%
        border-radius 100%
    .nav
      padding 20px 0
  .borderBottom
    border-bottom 1px dotted #eee
  footer
    text-align center
    div
      display inline-block
a
  color white
  display block
  padding 15px 0

</style>
