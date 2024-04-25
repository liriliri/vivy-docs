<script setup>
const props = defineProps({
  name: String,
})
</script>

<template>
  <span :class="'icon-' + name"></span>
</template>

<style>
@import './icon.css';
</style>
