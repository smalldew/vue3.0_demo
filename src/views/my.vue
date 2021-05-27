<template lang="pug">
.app 这是我的页面
  .desc 我的名字是：{{name}}
  input.name(placeholder='请输入你的名字' v-model="nameText")
  button(@click="changeName") 更新
</template>

<script setup>
import { ref, reactive } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"

const store = useStore()
const route = useRoute()

let name = ref(store.getters.getUserInfo)
let nameText = ref("")

const changeName = () => {
  store.commit("updateUserInfo", nameText.value)
  name.value = store.getters.getUserInfo
}
</script>

<style lang="stylus" scoped>
.name
  width 150px
  height 30px
  border 1px solid grey
  border-radius 4px
  outline none
  color black
button
  margin-left 10px
  border-radius 6px
  padding 8px
  font-size 14px
  border-style none
  color white
  background rgba(45, 169, 238, 1)
  outline none
  cursor pointer
button:active
  background rgba(96, 189, 241, 1)
button::after
  border none
</style>
