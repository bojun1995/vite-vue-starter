<template>
	<div class="the-layout">the layout layoutlayoutlayout</div>
	<div>the layout layoutlayoutlayout</div>
</template>

<script setup>
import { reactive } from 'vue'
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.the-layout {
  font-family: $globalFontFamily;
  @include textOverflow(100px);
}
</style>
