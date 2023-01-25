<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: false,
    default: "var(--color-heading)"
  },
  align: {
    type: String,
    required: false,
    default: "center"
  }
})
</script>

<template>
  <h2 :style="'color:' + color + '; text-align:' + align">{{ title }}</h2>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  font-weight: 700;
}
</style>