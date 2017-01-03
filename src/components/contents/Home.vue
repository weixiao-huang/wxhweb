<template lang="pug">
container#home
  .section#about
    .bigTitle Weixiao HUANG (黄维啸)
    .subTitle Tsinghua University
    .subContent Bachelor | August, 2012 - July, 2016
    .subTitle University of California, Berkeley
    .subContent Visiting student researcher | October, 2015 - February, 2016
    .content
      p I received my Bachelor degree majoring Engineering Mechanics from School of Aerospace, Tsinghua University in July, 2016. I had been to University of California, Berkeley as a visiting scholar under the supervisor of <a href="http://www.me.berkeley.edu/people/faculty/david-steigmann" target="_blank">Prof. David Steigmann</a> of Mechanical Engineering.
      p I'm experienced at software developing, and led <a href="https://lab.mu/" target="_blank">Lab μ Student Geek Association</a> which create daily software products for convenient campus life for Tsinghua students.
      p I show a great interest and passion in computer graphics and have oriented my research focus on it, especially in real-time rendering. I've selected several related courses about it, such as Computer Graphics, Computer Graphics Real Time and Animation. I has profound mathematical foundation, nearly all grades of my mathematic course is over 90.

  .section#education
    .title.before Education
    .subTitle Tsinghua University
    .subContent
      p Aug. 2012 - Jul. 2016
      p Engineering Mechanics, School of Aerospace
      p Undergraduate Student
    .content
      p.
        I have studied in Tsinghua University since August, 2012, majoring in Engineering Mechanics in Tsien's Excellence in Education Program (TEEP), which is one of the six<a href="http://www.tsinghua.edu.cn/publish/newthuen/newthuen_cnt/admissions/admissions-1-4.html" target="_blank"> Tsinghua Xuetang Talents Programs</a>. During my study in TEEP, I got a profound knowledge in mathematics and physics, which makes me much easier than others to learn new things and do difficult research.
    .subContent.bold Selected course work
    #course
      table(border='0', cellspacing="0", cellpadding="0")
        thead
          tr
            th(v-for="title in tbTitle") {{ title }}
        tbody
          tr(v-for="(course, index) in courses", :class="{'backGray': index % 2 === 0}")
            td(v-for="item in course") {{ item }}

    .subTitle University of California, Berkeley
    .subContent
      p Oct. 2015 - Feb. 2016
      p Mechanical Engineering
      p Visiting Student Researcher
    .content
      p.
        From October, 2015 - February, 2016, I worked at <a href="http://www.me.berkeley.edu/people/faculty/david-steigmann" target="_blank"> Prof. David Steigmann</a>'s Lab in Mechanical Engineering of <a href="http://www.berkeley.edu/" target="_blank">UC Berkeley.</a>


  .section#experiences
    .title.before Research Experiences
    //- .card
    //-   .subTitle The numerical analysis of problems in the mechanics of fiber-reinforced shells

    .card
      .subTitle Music Workshop
      .subContent Design Future Music
      .content
        Music Workshop aimed to make the instruments play music automatically, so as to explore and define “the next generation of orchestra”. Now we have got 3 creative instruments for our band: xylophone, saxophone and harp. And we have already tried a concert consisting of saxophone, harp played by the machines and piano, violin played by humans.
      .videos
        .box(style="paddingRight: 10px")
          iframe(src="https://www.youtube.com/embed/fBsYP7cxx_o", frameborder="0", allowfullscreen)
        .box
          iframe(src="https://www.youtube.com/embed/AiGWyiMEfgE", frameborder="0", allowfullscreen)
      .vm
        router-link(to="/mw") View More >>

    .card
      .subTitle TUNet-pc
      .subContent A desktop client to automatically log in and connect the university network
      .content
        p TUNet is a great app for students in Tsinghua University to automatically connect the campus internet conveniently as well as search useful messages of course and study by adding various package developed by Lab μ, which is a science and technology club in Tsinghua University, aiming to develop effective App to improve the convenience of students' life in Tsinghua University.
        p This project has gained the 1st Price & Best Choice Award in Tsinghua 4th Innovation Contest, Apr. 2015
        .imgBox
          .img(style="paddingRight: 10px")
            img(src="../../images/labmu/TUNet-pc.jpg")
          .img
            img(src="../../images/labmu/About.jpg")
        .vm
          router-link(to="/tunet") View More >>

    //- .card
    //-   .subTitle Extremely Learning Program (XLP), wind-hydro-combine power generation system



  .section#projects
    .title Projects
    .card
      .subTitle Ray Tracing - Photon Mapping
      .content.
        Ray Tracing is a classical method for generating a physical based rendering scene.
    .card
      .subTitle OpenGL Air Hockey Game
    .card
      .subTitle Mesh Simplification
      .content.
        This project aimed to develop a algorithm to simplify a mesh object in obj files.
    .card
      .subTitle Automatically Particle Picking
      .content.
        In computational biology,
    .card
      .subTitle Spherical Gaussian Basic Function for PRT
    .card
      .subTitle C++ Finite Element Framework
    .card
      .subTitle 8-Puzzle and (n^2-1)-Puzzle

  .section#honors
    .title.before Honors
    .content American Mathematics Competition Honorable Mentions, 2016
    .content 1st Price & Best Choice Award in Tsinghua 4th Innovation Contest with TUNet, Apr. 2015
</template>

<script>
import Container from '../Container'

export default {
  name: 'home',
  components: {
    Container
  },
  data () {
    return {
      tbTitle: ['Course name', 'Score'],
      courses: [
        ['Advanced Calculus(1)', '92'],
        ['Advanced Algebra and Geometry (2)', '91'],
        ['Physics for Scientists and Engineers B(2)', '95'],
        ['Advanced Calculus(2)', '98'],
        ['Ordinary Differential Equations', '94'],
        ['Methods of Mathematical physics', '94'],
        ['Probability and Statistics', '95'],
        ['Elementary Scientific and Engineering Computing', '95'],
        ['Computer Graphics Real Time and Animation', '95']
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.backGray
  background-color rgba(244, 244, 244, 0.8)
table
  padding 10px 0 20px 0
  width 100%
  text-align left
  thead
    color #888
  tbody
    font-size 16px
    margin-top 10px
  td, th
    padding 18px 10px
  th
    border-bottom 5px #ddd solid
#home
  .section
    padding 10px 0

  .card
    border-top 1px dashed #999
    margin-top 10px

  .img
    display inline-block
    width 45%
    img
      width 100%
  a
    color #172
  .title
    border-left 20px solid #7559aa
    padding-left 20px
    font-size 35px
    font-weight bold
  .bigTitle
    font-size 35px
    font-weight bold
    color #123
  .subTitle
    font-size 25px
    padding-top 10px
  .content
    font-size 20px
  .ssTitle
    font-size 20px
    font-weight bold
    padding 10px 0 5px 0
  .box
    display inline-block
    iframe
      width calc(50vw - 260px)
      height calc(9/16 * (50vw - 260px))
  .vm
    text-align: center
    font-size 20px
</style>
