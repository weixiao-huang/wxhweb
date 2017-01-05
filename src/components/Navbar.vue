<template lang="pug">
nav#nav
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
        a(href="https://github.com/ztxcydzz")
          img(src="../assets/github.svg")
      .email
        a(href="mailto:hwx.simle@gmail.com")
          img(src="../assets/email.svg")
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
  font-size 16px
  text-align center
  .container
    margin-top 30px
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
      width 30px
      display inline-block
      padding 0 10px
      a
        transition opacity 0.3s
        opacity 0.5
        &:hover
          opacity 1
        img
          width 100%
a
  color white
  display block
  padding 15px 0

@media only screen and (max-width 768px)
  nav
    height calc(100vh - 60px)
</style>
