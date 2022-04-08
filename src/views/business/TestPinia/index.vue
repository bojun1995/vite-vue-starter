<template>
  <div>token: {{ indexStore.token }}</div>
  <br />
  <button>do chg token</button>
</template>

<script setup>
import { reactive } from 'vue'
import { useIndexStore } from '@/store/index'
const indexStore = userIndexStore()
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped></style>
