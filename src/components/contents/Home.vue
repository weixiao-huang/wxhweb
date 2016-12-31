<template lang="pug">
#home
  .section#about
    .title Weixiao HUANG (黄维啸)
    .subTitle Tsinghua University
    .subContent Bachelor | August, 2012 - July, 2016
    .subTitle University of California, Berkeley
    .subContent Visiting student researcher | October, 2015 - February, 2016
    .content
      p.
        I received my Bachelor degree majoring Engineering Mechanics from School of Aerospace,
        Tsinghua University in July, 2016. I had been to University of California, Berkeley as
        a visiting scholar under the supervisor of
        <a href="http://www.me.berkeley.edu/people/faculty/david-steigmann" target="_blank">Prof. David
        Steigmann</a> of Mechanical Engineering.
      p.
        I'm experienced at software developing, and led <a href="https://lab.mu/" target="_blank">Lab μ
        Student Geek Association</a> which create daily software products for convenient campus life for
        Tsinghua students.
      p.
        I show a great interest and passion in computer graphics and have oriented my research focus on it,
        especially in real-time rendering. I've selected several related courses about it, such as
        Computer Graphics, Computer Graphics Real Time and Animation. I has profound mathematical foundation,
        nearly all grades of my mathematic course is over 90.

  .section#education
    .title Education
    .subTitle Tsinghua University
    .subContent
      p Aug. 2012 - Jul. 2016
      p Engineering Mechanics, School of Aerospace
      p Undergraduate Student
    .content
      p.
        I have studied in Tsinghua University since August, 2012, majoring in Engineering Mechanics in Tsien's
        Excellence in Education Program (TEEP), which is one of the six<a href="http://www.tsinghua.edu.cn/publish/newthuen/newthuen_cnt/admissions/admissions-1-4.html" target="_blank">
        Tsinghua Xuetang Talents Programs</a>. During my study in TEEP, I got a profound knowledge in
        mathematic and physics, which makes me much easier than others to learn new things and do difficult
        research.
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
        From October, 2015 - February, 2016, I worked at <a href="http://www.me.berkeley.edu/people/faculty/david-steigmann" target="_blank">
        Prof. David Steigmann</a>'s Lab in Mechanical Engineering of <a href="http://www.berkeley.edu/" target="_blank">
        UC Berkeley.</a>

  .section#experiences
    .title Research Experiences
    .subTitle The numerical analysis of problems in the mechanics of fiber-reinforced shells

    .subTitle Music Workshop
    .subContent Design Future Music
    .content
      p Music Workshop is a fantastic project put forward by Prof. Gangtie Zheng in 2013 and started in the summer of 2013. It was first developed by several 3-year undergraduate students majoring in Engineering Machanics in TEEP (Tsien’s Excellence in Education Program) at Tsinghua University.
      p This program aimed to use “the magic of Mechanical Engineering” to make the instruments play music automatically, so as to explore and define “the next generation of orchestra”. Maybe you haven’t thought that thing before, but now we want to create a new band just played by machine automatically. Because of these machines, the system can play lots of difficult music which cannot be played by human beings. We believe it must be the new future of music we are imagining.
      p From 2013 to 2015, we have got 3 creative instruments for our band: xylophone, saxophone and harp. And we have already tried a concert consisting of saxophone, harp played by the machines and piano, violin played by humans. Also, in our web, you can also get many surprises about other interesting recitals. So if you want to know what future music will be, come to see our project.
      p Music Workshop, imagine a creative future.
    .ssTitle#saxo Automatically Playing Saxophone
    .subContent Weixiao Huang, Wanyu Zhang, Xin Bao, Xiaoqiang Wang
    .content
      p Automatically playing saxophone is a subproject of the Music Workshop project. We try to use a pneumatic and mechanical control system to let the saxophone play music automatically by itself.
      p This project started in 2014 studied by 3 students, Xin bao, Ze Zhang, and Xiaoqiang Wang. They tried to use some methods to control the mouthpiece and keys of saxophone. However, because of the difficulty in controlling the reed and keys of the saxophone, they did not finish the work by the time they graduated. In the summer of 2014, I took over this project and did some research in controlling the reed of saxophone. And in the beginning of 2015, Wanyu Zhang participated in the program. We try to use PDMS to create a equipment covering the saxophone's mouthpiece, which makes it easier for us to control the displacement of its reed. Also we develop a system by using single chip, stepper motors and electromagnets. By now, we have managed to let it work, which can play several simple music, such as Happy Birthday, Two Tigers, Little Star as you can see below. It must be noted that, this system is developed not only for this special saxophone, but also can be equipped in nearly any alto saxophone to make it vocalize and play music automatically. Moreover, we have an interesting concert by using both saxophone and harp developed by our lab, you can see this awesome video in the <a href="#harp">harp page</a>
    .ssTitle#harp Automatically Playing Harp
    .subContent Shijie Zhu, Fan Sun, Lingxiao Zhu
    .content
      p Automatically playing harp is another subproject of the Music Workshop project. It was firstly started at 2014 as a project of Open Research for Innovation Challenges (ORIC) set up by Tsien's Excellence in Education Program (TEEP). To achieve the dream of defining future music, our Music Workshop group want to create a interesting band. So we need to develop several different instruments. So we choose harp as one of the instruments to study. This project was mainly developed by Shijie Zhu, Lingxiao Zhu and Fan Sun. They try to use the singlechip and stepper motors to create such complex system. After 1 year's work, they manage to build such exciting system, which can play many compositions by just input the MIDI files. Compared with the saxophone, the main advantage of the harp system is its broad range of music. It has more than 40 chords so that it can play many various musical notes. When finishing this project, the saxophone was also finished simultaneously. So we held a concert with the harp and saxophone played automatically by machines, as well as the piano and violin played by me and another people in the lab. The fantastic video can be seen below.
    .ssTitle#xylo Automatically Playing Xylophone
    .subContent Zining Wang, Jiongming Shi, Qiang Yu, Tianqi Li, Jiaming Cao
    .content
      p Automatically playing Xylophone is the ealiest subproject of the Music Workshop project. It started at the summer of 2013, creating the first successful project of Music Worshop in the summer of 2014. the success of this system encouraged us to explore more instruments' automatically playing. The xylophone also has a broad music range as well as the harp. So nearly it can play any music by input a music MIDI file in the computer. And the music played by it can be shown below.
    .subTitle TUNet-pc: a desktop client to automatically log in and connect the university network


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
      In computatinal biology,
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
export default {
  name: 'home',
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
.bold
  font-weight bold
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
  overflow scroll
  height calc(100vh - 200px)
  padding 100px
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
