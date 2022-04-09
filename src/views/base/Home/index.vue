<template>
  <div>HomePage</div>
  <router-link to="/DynamicRoute01">DynamicRoute01</router-link>
  <br />
  <router-link to="/TestPinia">TestPinia</router-link>
  <br />
  <van-button type="primary">主要按钮</van-button>
</template>

<script setup>
import { reactive } from 'vue'
import router from '@/router/index.js'
import dynamicRoute from '@/router/dynamicRoute'

for (let [key, component] of Object.entries(dynamicRoute)) {
  router.addRoute({
    name: key,
    path: '/' + key,
    component: component,
  })
}
// router.addRoute()
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped></style>
