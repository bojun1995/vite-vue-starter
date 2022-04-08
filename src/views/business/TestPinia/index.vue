<template>
  <div>token: {{ indexStore.getToken }}</div>
  <br />
  <button @click="chgToken('456456')">do chg token</button>
</template>

<script setup>
import { reactive } from 'vue'
import { useIndexStore } from '@/store/index'
const indexStore = useIndexStore()

const chgToken = newToken => {
  indexStore.chgToken(newToken)
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped></style>
