<template lang="pug">
.app
  .avatar(@click="clickMy") {{name}}
  h1 count++: {{ count }}
  h1 double count: {{ doubleCount }}
  button(@click="add") 增加
  button(@click="transfer") 传送参数
  button(@click="clear") 清零  
  
  .show
    button(@click="show") {{ showText }}
    h3(v-if="isShow") 这个模块展示隐藏，用按钮控制
</template>

<script>
import { ref, watch, computed, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

export default {
  setup(props, { emit }) {
    const store = useStore()
    const router = useRouter()

    const name = store.getters.getUserInfo
    const count = ref(0)
    let isShow = ref(false)
    let showText = ref('展示')
    
    // 函数方法
    const add = () => {
      count.value++
    }
    const clear = () => {
      count.value = 0;
      transfer()
    }
    const show = () => {
      isShow.value = !isShow.value
    }
    const transfer = () => {
      emit('clickTransfer', count)
      // 子组件像父组件增加参数
    }

    const clickMy = () => {
      router.push({
        path: '/my',
        query: {id: 4}
      })
    }
    // 观察方法
    watch(
      () => isShow,
      val => {
        if (val) {
          showText.value = '隐藏'
        } else {
          showText.value = '展示'
        }
      }
    )
    // 计算方法
    let doubleCount = computed(() => count.value * 2)

    return {
      name,
      count,
      doubleCount,
      showText,
      isShow,
      add,
      clear,
      transfer,
      clickMy,
      show
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
button
  margin-left 10px
  width 100px
  border-radius 6px
  padding 10px
  font-size 14px
  border-style none
  color white
  background rgba(45, 169, 238, 1)
  outline none
  cursor pointer
button:active
  background rgba(96, 189, 241, 1);
button::after
  border none
.show
  margin-top 10px
.avatar
  width 100px
  height 50px
  position absolute
  top 0
  right 0
  background #F3F3F3
  display flex
  align-items center
  justify-content center
</style>