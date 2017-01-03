<template lang="pug">
  container#autopick(arrow="true")
    .subTitle Automatically Particle Picking
    .content
      p Cryo-electron microscopy (Cryo-EM) of single-particle specimens is used to determine the structure of proteins and macromolecular complexes without the need for crystals. It is an increasingly popular tool for studying the structure and dynamics of biological macromolecules at high resolution. Currently, in most structural biology studies employing the single particle approach, the projections are manually identified by the scientist. The goal of automatic particle picking (APP) is to reduce the particle picking time with the aim of being able to select a large number of particles from a set of micrographs. At the same time, using APP algorithms improves the objectivity of the picking process so that it is more reproducible.
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
