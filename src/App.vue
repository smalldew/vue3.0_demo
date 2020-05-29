<template lang="pug">
#app
  router-view
  bottom-nav 
</template>

<script>
import BottomNav from '@/components/nav/bottomNav'

export default {
  name: 'App',
  components: {
    BottomNav
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  body
    background #f6f6f6
  #box
    overflow-x hidden
</style>
