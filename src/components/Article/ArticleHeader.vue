<template>
    <div class="article-header">
        <h1>{{ frontmatter.title }}</h1>
        <p>{{ frontmatter.description }}</p>
        <div>
            <span>{{ published_at }}</span>
            <div>
                <TagsList :tags="frontmatter.tags" />
            </div>

        </div>
    </div>
    <div id="updated-at" v-if="dateDelta < 0">
        <span> Article last updated on {{ updated_at }}</span>
    </div>
    
</template>
<script setup>
import {computed} from 'vue';
import TagsList from './TagsList.vue';

const fm = defineProps({
    frontmatter: Object
})

let published_at = computed(() => {
    return new Date(fm.frontmatter.published_at).toLocaleDateString()
})
let updated_at = computed(() => {
    return new Date(fm.frontmatter.updated_at).toLocaleDateString()
})
let dateDelta = computed(() => {
    return new Date(fm.frontmatter.published_at).getTime() - new Date(fm.frontmatter.updated_at).getTime()
})

</script>
<style lang="sass" scoped>
.article-header    
    display: flex
    flex-direction: column
    h1 
        font-size: 2rem
    p
        font-size: 1.2rem
        color: #736f6a
        font-style: italic
    div
        display: flex
        flex-wrap: wrap
        flex-direction: row
        justify-content: space-between
        align-items: center
        span
            font-size: 1rem
            color: #686f6a
            margin-bottom: 0.5rem     
                      
#updated-at
    font-size: 0.9rem
    font-weight: bold
    width: 100%
    background: var(--vp-c-red-dark)
    padding-left: 0.5rem

</style>