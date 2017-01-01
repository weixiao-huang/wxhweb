<template lang="pug">
  container#tunet(arrow="true")
    .subTitle TUNet
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
