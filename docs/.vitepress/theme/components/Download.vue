<script setup>
const props = defineProps({
  href: String,
  name: String,
})

function download() {
  const el = document.createElement('a')
  el.setAttribute('href', props.href)
  el.setAttribute('download', props.name)
  el.addEventListener('click', function (e) {
    e.stopImmediatePropagation()
  })

  document.body.appendChild(el)
  el.click()
  document.body.removeChild(el)
}
</script>

<template>
  <span class="a" @click="download">
    {{ name }}
  </span>
</template>

<style scoped>
.a {
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.25s, opacity 0.25s;
  cursor: pointer;
}
</style>
