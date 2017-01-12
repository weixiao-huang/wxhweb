<template lang="pug">
#home
  .section#about
    .bigTitle Weixiao HUANG (黄维啸)
    .subTitle Tsinghua University
    .subContent Bachelor | August, 2012 - July, 2016
    .subTitle University of California, Berkeley
    .subContent Visiting student researcher | October, 2015 - February, 2016
    .content
      p I received my Bachelor degree majoring Engineering Mechanics from School of Aerospace, Tsinghua University in July, 2016. I had been to University of California, Berkeley as a visiting scholar under the supervisor of <a href="http://www.me.berkeley.edu/people/faculty/david-steigmann" target="_blank">Prof. David Steigmann</a> of Mechanical Engineering.
      p I'm experienced at software developing, and led <a href="https://lab.mu/" target="_blank">Lab μ Student Geek Association</a> which create daily software products for convenient campus life for Tsinghua students.
      p I show a great interest and passion in computer graphics and have oriented my research focus on it, especially in real-time rendering, physically based rendering and image processing. I've selected several related courses about it, such as Computer Graphics, Computer Graphics Real Time and Animation. During the recent months, I was doing some projects about Media Calculation, such as Image Filling, 3D Reconstructions from images etc. I have profound mathematical foundation, nearly all grades of my mathematics courses is over 90. And because my mechanics background, I believe I'm more professional in physics application than others. Currently I'm applying for graduate program in 2017 fall. Please fell free to <a href="mailto:hwx.simle@gmail.com">contact me</a> and <a href="https://drive.google.com/file/d/0B9mADRFvGc-qX0FHb3RJSXQyVk0/view" target="_blank">download my CV</a>.

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
    .subContent.bold(style="color: #666;") Selected course work
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
        From October, 2015 - February, 2016, I worked at <a href="http://www.me.berkeley.edu/people/faculty/david-steigmann" target="_blank"> Prof. David Steigmann</a>'s Lab in Mechanical Engineering of <a href="http://www.berkeley.edu/" target="_blank">UC Berkeley.</a> My research topic was the numerical and theoretical analysis of problems in the mechanics of fiber-reinforced shells.

  .section#experiences
    .title.before Research Experiences
    //- .card
    //-   .subTitle The numerical analysis of problems in the mechanics of fiber-reinforced shells

    .card
      .subTitle Music Workshop
      .subContent Design Future Music
      .content
        p Music Workshop aimed to make the instruments play music automatically, so as to explore and define “the next generation of orchestra”.
        p Now we have got 3 creative instruments for our band: xylophone, saxophone and harp. And we have already tried a concert consisting of saxophone, harp played by the machines and piano, violin played by humans.
      .videos
        .box(style="paddingRight: 10px")
          iframe(src="https://www.youtube.com/embed/fBsYP7cxx_o", frameborder="0", allowfullscreen)
        .box
          iframe(src="https://www.youtube.com/embed/AiGWyiMEfgE", frameborder="0", allowfullscreen)
      .vm
        router-link.view-more(to="/mw") View More >>

    .card
      .subTitle TUNet-pc
      .subContent A desktop client to automatically connect the campus network
      .content
        p TUNet is a great app for students in Tsinghua University to automatically connect the campus internet conveniently as well as search useful messages of course and study by adding various package developed by Lab μ, which is a science and technology club in Tsinghua University, aiming to develop effective App to improve the convenience of students' life in Tsinghua University.
        p This project has winned the 1st Price & Best Choice Award in Tsinghua 4th Innovation Contest, Apr. 2015
      .imgBox
        .img.img-gap
          img(src="../../images/labmu/TUNet-pc.jpg")
        .img
          img(src="../../images/labmu/About.jpg")
      .vm
        router-link.view-more(to="/tunet") View More >>

    //- .card
    //-   .subTitle Extremely Learning Program (XLP), wind-hydro-combine power generation system



  .section#projects
    .title Projects
    .card
      .subTitle Ray Tracing - Progressive Photon Mapping (PPM)
      .content.
        p Ray Tracing is a classical method for generating a physical based rendering scene. I write a physically based renderer by using ray tracing and Progressive Photon Mapping(PPM) to render a complicated scene.
      .code-link
        a(href="https://github.com/ztxcydzz/RayTracer", target="_blank") [code]
      .imgBox
        .img.img-gap
          img(src="../../images/projects/raytracer/index2.png")
        .img
          img(src="../../images/projects/raytracer/index.png")
      //- .vm
      //-   router-link.view-more(to="/raytracer") View More >>
    .card
      .subTitle OpenGL Air Hockey Game
      .content.
        I developed an interesting game called <i>Air Hockey Game</i> by using OpenGL, in which you can control you own mallet to collide the puck for strike it into opposite's goal to win the game.
      .code-link
        a(href="https://github.com/ztxcydzz/Air-Hockey-Game", target="_blank") [code]
      .imgBox
        .img.img-gap
          img(src="../../images/projects/airhockey/index1.png")
        .img
          img(src="../../images/projects/airhockey/index2.png")
      //- .vm
      //-   router-link.view-more(to="/airhockey") View More >>
    //- .card
    //-   .subTitle Mesh Simplification
    //-   .content.
    //-     This project aimed to develop a algorithm to simplify a mesh object in obj files.
    .card
      .subTitle Automatically Particle Picking
      .subContent Zhipeng Jia, Yuping Luo, Weixiao Huang
      .content.
        We developed a deep learning algorithm to Automatically pick the particles in the Cryo-EM by using a lot of reference datasets.
      .code-link
      .imgBox
        .img.img-gap
          img(src="../../images/projects/particles/cal.png")
        .img.img-gap
          img(src="../../images/projects/particles/cube.png")
        .img
          img(src="../../images/projects/particles/cube1.png")
      .vm
        a.view-more(href="https://drive.google.com/file/d/0B9mADRFvGc-qMDg0ZVZJa0p3Rnc/view", target="_blank") View More >>
    //- .card
    //-   .subTitle Spherical Gaussian Basic Function for PRT
    //- .card
    //-   .subTitle C++ Finite Element Framework
    .card
      .subTitle 8-Puzzle and (n^2-1)-Puzzle
      .content
        p I developed a mathematical method for solving the 8-Puzzle, which is a smaller case of the <a href="https://en.wikipedia.org/wiki/15_puzzle">15-puzzle</a>. Instead of using a search strategy, my methods is just origined from a mathematical case, which can be generalized into a global form for solving the (n^2-1)-Puzzle. And I write an interface in Fortran to solve the global case.
        p Also I write a UI using Java. In this small game, you can play it as well as let the program help you automatically solve it.
      .code-link
        a(href="https://github.com/ztxcydzz/n_orders", target="_blank") [code (Fortran Solver)]
      .code-link
        a(href="https://github.com/ztxcydzz/Recover", target="_blank") [code (Java Game)]
      img(width="100%", src="../../images/projects/8-puzzle/index.png")
      //- .vm
      //-   router-link.view-more(to="/eightpuzzle") View More >>


  .section#honors
    .title.before Honors
    .content(style="padding-top: 40px") American Mathematics Competition Honorable Mentions, 2016
    .content(style="padding-top: 20px") 1st Price & Best Choice Award in Tsinghua 4th Innovation Contest with TUNet, Apr. 2015
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
.img-gap
  padding-right 20px
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
  height 100vh
  overflow scroll
  padding 0 50px
  .section
    background-color white
    margin 30px 0
    padding 50px
    box-shadow 2px 2px 10px #888

  .card
    border-top 1px dashed #999
    margin-top 20px

  .imgBox
    display flex
    justify-content space-around
    .img
      img
        width 100%
  a
    transition all 0.2s
    color #177
    border-bottom 1px dotted #bbb
    &:hover
      color #498
      border-bottom 1px dotted #fff
  .view-more
    color #2e9295
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
    &::before
      // content " ¶ "
      color #62775
    font-weight bold
    font-size 22px
    padding-top 10px
  .subContent
    font-size 16px
    padding-bottom 10px
    color: #aaa
  .content
    p
      padding-bottom 20px
    padding 10px 0
    font-size 18px
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
    padding-top 10px
    text-align: center
    font-size 20px
  .code-link
    display inline-block
    font-size 22px
    padding-bottom 15px
    padding-right 10px
    a
      color #189
      &:hover
        color #1aa

@media only screen and (max-width 768px)
  #home
    padding 0 15px
    height calc(100vh - 60px)
    .section
      padding 20px
      margin 15px 0
    .box
      iframe
        width calc(100vw - 100px)
        height calc(9/16 * (100vw - 100px))
</style>
