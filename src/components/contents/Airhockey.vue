<template lang="pug">
  container#airhockey(arrow="true")
    .subTitle Air Hockey Game
    .content
      p In this project, I use OpenGL to develop an interesting game called Air Hockey Game. In this game, you need to controll the mallet to collide the puck, making the puck move into the goal of the other.
      p We use OpenGL to draw the scene and controll the movement of the mallets and puck.
</template>

<script>
import Container from '../Container'

export default {
  name: 'airhockey',
  components: {
    Container
  }
}
</script>

<style lang="stylus" scoped>
#airhockey
  .img
    display inline-block
    width 48%
    img
      width 100%
</style>
