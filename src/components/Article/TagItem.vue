<template>
    <li>{{ tag }}</li>
</template>

<script setup>
defineProps({
    tag: Array
})
</script>
<style lang="sass" scoped>
li
    font-size: 0.9rem
    border: 1px dashed #3c8a0f
    padding: 0 0.5rem
    background: #348f47
    color: #fff
    border-radius: 7px
</style>