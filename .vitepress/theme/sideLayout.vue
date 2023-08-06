<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      <span id="aside-title">A <span class="left-bracket">{</span>Coding<span class="right-bracket">}</span> Journey</span>
    </template>
  </Layout>
</template>

<style lang="sass" scoped>
#aside-title
  font-size: 1.5rem
  font-weight: bold
  margin-bottom: 1.5rem
.left-bracket
  color: var(--vp-c-red-dark)
.right-bracket
  color: var(--vp-c-green-dark)
</style>