<template lang="pug">
nav(:style="{width: width + 'px'}")
  .container
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
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
nav
  position absolute
  height 100vh
  background-color #123
  font-size 20px
  text-align center
  overflow-y hidden
  .container
    margin-top 100px

a
  color white
  display block
  padding 5px 0

</style>
