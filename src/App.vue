<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{ desc }}</h1>
    <h2>子组件传过来的参数：{{ childText }}</h2>
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      :data="parentData"
      @clickShow="clickShow"
      @clickTransfer="clickTransfer"
    />
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, onMounted } from 'vue'

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(props) {
    let childText = ref('0')
    // ref 更适用于简单参数。加了ref后，set跟get都需要加.value
    let desc = ref('这是Vue3.0.0-beta.1')
    // reactive 适用于对象参数
    const parentData = reactive({
      isShow: false
    })

    const clickShow = val => {
      parentData.isShow = val
    }
    const clickTransfer = val => {
      childText.value = val.value
    }
    
    return {
      desc,
      childText,
      parentData,
      clickShow,
      clickTransfer
    }
  },
  mounted() {
    console.log('mounted-mounted')
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
</style>
