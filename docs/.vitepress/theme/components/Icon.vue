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
[class^='icon-'],
[class*=' icon-'] {
  position: relative;
  top: 2px;
}
</style>
