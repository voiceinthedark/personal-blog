<script setup>
    import {data as articles} from '../../articles.data.js';
</script>

# Recent Articles

<ul>
    <template v-for="article in articles">
      <li><a :href="'/personal-blog' + article.url">{{ article.frontmatter.title }}</a></li>
    </template>
</ul>

