<script setup>
    import {data as articles} from '../../articles.data.js';
</script>

# Recent Articles

- [How to send data from page to a persistent layout](./2023/2023-07-30-how-to-send-data-from-page-to-layout.md)

<ul>
    <template v-for="article in articles.data">
      <li>[{{ article.split('/').pop().split('.md')[0] }}]({{ article }})</li>
    </template>
</ul>


<pre>{{ articles }}</pre>