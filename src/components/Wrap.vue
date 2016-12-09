<template lang="pug">
#wrap(:style="{ marginLeft: width + 'px' }")

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
    .title Experiences
    .subTitle
</template>

<script>
export default {
  name: 'wrap',
  props: ['width'],
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
#wrap
  overflow scroll
  height calc(100vh - 200px)
  padding 100px
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
    p
      padding 20px 0
  #about .title
    color #123
</style>
