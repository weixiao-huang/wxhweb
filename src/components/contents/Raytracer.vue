<template lang="pug">
  container#raytracer(arrow="true")
    .subTitle A Small Ray Tracer
    .content
      p This is a project for the course <i>The Fundamental of Computer Graphics</i>. In this project, I use the ray tracing algorithm to render the all scene.
</template>

<script>
import Container from '../Container'

export default {
  name: 'raytracer',
  components: {
    Container
  }
}
</script>

<style lang="stylus" scoped>
#raytracer
  .img
    display inline-block
    width 48%
    img
      width 100%
</style>
