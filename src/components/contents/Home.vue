<template lang="pug">
container#home
  .section#about
    .title Weixiao HUANG (黄维啸)
    .subTitle Tsinghua University
    .subContent Bachelor | August, 2012 - July, 2016
    .subTitle University of California, Berkeley
    .subContent Visiting student researcher | October, 2015 - February, 2016
    .content
      p I received my Bachelor degree majoring Engineering Mechanics from School of Aerospace, Tsinghua University in July, 2016. I had been to University of California, Berkeley as a visiting scholar under the supervisor of <a href="http://www.me.berkeley.edu/people/faculty/david-steigmann" target="_blank">Prof. David Steigmann</a> of Mechanical Engineering.
      p I'm experienced at software developing, and led <a href="https://lab.mu/" target="_blank">Lab μ Student Geek Association</a> which create daily software products for convenient campus life for Tsinghua students.
      p I show a great interest and passion in computer graphics and have oriented my research focus on it, especially in real-time rendering. I've selected several related courses about it, such as Computer Graphics, Computer Graphics Real Time and Animation. I has profound mathematical foundation, nearly all grades of my mathematic course is over 90.

  .section#education
    .title Education
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
    .title Research Experiences
    .subTitle The numerical analysis of problems in the mechanics of fiber-reinforced shells

    .subTitle
      router-link(to="/mw") Music Workshop
    .subContent Design Future Music
    .content
      p Music Workshop is a fantastic project put forward by Prof. Gangtie Zheng in 2013 and started in the summer of 2013. It was first developed by several 3-year undergraduate students majoring in Engineering Machanics in TEEP (Tsien’s Excellence in Education Program) at Tsinghua University.
      p This program aimed to use “the magic of Mechanical Engineering” to make the instruments play music automatically, so as to explore and define “the next generation of orchestra”. Maybe you haven’t thought that thing before, but now we want to create a new band just played by machine automatically. Because of these machines, the system can play lots of difficult music which cannot be played by human beings. We believe it must be the new future of music we are imagining.
      p From 2013 to 2015, we have got 3 creative instruments for our band: xylophone, saxophone and harp. And we have already tried a concert consisting of saxophone, harp played by the machines and piano, violin played by humans. Also, in our web, you can also get many surprises about other interesting recitals. So if you want to know what future music will be, come to see our project.
      p Music Workshop, imagine a creative future.

    .subTitle
      router-link(to="/tunet") TUNet-pc
    .subContent A desktop client to automatically log in and connect the university network

    .subTitle Extremely Learning Program (XLP), wind-hydro-combine power generation system

  .section#projects
    .title Projects
    .subTitle Ray Tracing - Photon Mapping
    .content.
      Ray Tracing is a classical method for generating a physical based rendering scene.
    .subTitle Mesh Simplification
    .content.
      This project aimed to develop a algorithm to simplify a mesh object in obj files.
    .subTitle Automatically Particle Picking
    .content.
      In computational biology,
    .subTitle Spherical Gaussian Basic Function for PRT
    .subTitle C++ Finite Element Framework
    .subTitle OpenGL Air Hockey Game
    .subTitle TUNet Desktop
    .subTitle 8-Puzzle and (n^2-1)-Puzzle

  .section#honors
    .title Honors
    .subContent American Mathematics Competition Honorable Mentions, 2016
    .subContent 1st Price & Best Choice Award in Tsinghua 4th Innovation Contest with TUNet, Apr. 2015
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
