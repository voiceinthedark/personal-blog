<template>
    <ul>
        <TagItem v-for="tag in tags" :key="tag" :tag="tag" />
    </ul>
</template>
<script setup>
import TagItem from './TagItem.vue';
defineProps({
    tags: Array
})
</script>

<style lang="sass" scoped>
ul
    list-style: none
    display: flex
    flex-wrap: wrap    
    align-items: center
    justify-content: center
    width: 100%
    gap: 0.5rem
.vp-doc
    li + li
        margin-top: 0
</style>