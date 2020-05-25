<template>
  <div class="hello">
    <h1>count++: {{ count }}</h1>
    <h1>double count: {{ doubleCount }}</h1>
    <button @click="add">增加</button>
    <button @click="clear">清零</button>

    <div class="show">
      <button @click="show">{{ showText }}</button>
      <button @click="transfer">传送参数</button>
      <h3 v-if="data.isShow">这个模块展示隐藏，用按钮控制</h3>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed, getCurrentInstance } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    data: {
      isShow: false
    }
  },
  setup(props, { emit }) {
    const count = ref(0)
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
      emit('clickShow', !props.data.isShow)
    }
    const transfer = () => {
      emit('clickTransfer', count)
    }
    // 观察方法
    watch(
      () => props.data.isShow,
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
      count,
      doubleCount,
      showText,
      add,
      clear,
      transfer,
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
</style>
