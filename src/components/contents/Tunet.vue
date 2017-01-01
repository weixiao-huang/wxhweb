<template lang="pug">
  container#tunet(arrow="true")
    .subTitle TUNet
    .content
      p TUNet is a great app for students in Tsinghua University to automatically connect the campus internet convenietly as well as search useful messages of course and study by adding various package developed by us.
      p The university has already had an App to automatically connect the campus internet. However, the UI of it is not beautiful and the function is limited. In view of this problem, we want to develop a different and more efficient App to make students more convenient to connect the campus internet and search course messages in our App.
    .ssTitle#tunetpc TUNet-pc
    .content
      p In January, 2015, we TUNet-pc group began to develop TUNet in desktop. We mainly used Qt as the development tool and MVC design pattern to set up the framework. We were so motivated to develop it that we even worked together online during the New Year's Eve. Finally, after 2 months' work, we successfully finished a basic App which could be used to automatically connect the university network with a beautiful UI, an app that can be supported in both Windows and Max OS. Now after many improvement, we can get a better version as you can see the demo below.
      p In the future, we will add more useful functions in this App and release our product to the students in Tsinghua University, making their life more convenient by using such great App.

    .ssTitle#creativeComp Creative Competition
    .content
      p In April 4, 2015, we have took part in the Tsinghua University Creative Competetion by using our TUNet learn helper package. Our lab added the learn helper plugin embedded in the TUNet Android, an App developed by another group in Lab μ, making it convenient for students to see information of their selected course and homework. For preparing the competetion, I design a fantastic video for the competetion presentation. Finally, we won the <span class="bold">Best Popular Award</span> and the <span class="bold">1st Prize of the Creative Competetion of Tsinghua University</span>

</template>

<script>
import Container from '../Container'

export default {
  name: 'tunet',
  components: {
    Container
  }
}
</script>

<style lang="stylus" scoped>
#mw
  a
    color #172
  .title
    font-size 35px
    font-weight bold
  .subTitle
    font-size 25px
    padding-top 10px
  .content
    font-size 20px
  #about .title
    color #123
  .ssTitle
    font-size 20px
    font-weight bold
    padding 10px 0 5px 0
</style>
