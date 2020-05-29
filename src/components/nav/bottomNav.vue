<template lang="pug">
.bottom-nav
  .nav(v-for="(item, index) in navList" :key="index" @click="handleClickNav(item, index)" class="bottom-nav-item" :class="{ active: navActive === index}")
    .text(v-if="item.name") {{item.name}}
</template>

<script>
import { ref, reactive, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'


export default {
  name: 'bottomNav',
  components: {},
  setup() {
    const ctx = getCurrentInstance()
    const router = useRouter()
    
    const navActive = ref(0)
    const navList = reactive([
      {
        id: 1,
        name: '首页',
        path: '/'
      },
      {
        id: 2,
        name: '发现',
        path: '/find'
      },
      {
        id: 3,
        name: '会员',
        path: '/vip'
      },
      {
        id: 4,
        name: '广场',
        path: '/square'
      },
      {
        id: 5,
        name: '我的',
        path: '/my'
      }
    ])

    const handleClickNav = (item, index) => {
      if (item.path) {
        navActive.value = index
        router.push({
          path: item.path
        })
      }
    }

    // 监听路由
    router.beforeEach((to, from, next) => {
      if(to.query.id) {
        navActive.value = Number(to.query.id)
      }
      next()
    })
    console.log('process.env.NODE_ENV', process.env.NODE_ENV)
    return {
      navList,
      navActive,
      handleClickNav
    }
  }
}
</script>

<style scoped lang="stylus">
.bottom-nav
  position fixed
  bottom 0
  left 0
  width 100%
  height 50px
  display grid
  grid-template-columns repeat(5,1fr)
  align-items center
  text-align center
  background #F3F3F3
  .bottom-nav-item
    font-size 14px
    color #1a1a1a
  .active
    color #0084ff
</style>
