<script setup>
    import {data as notes} from '../../notes.data.js'
</script>

# Notes

<ul v-for="note in notes.filter(note => note.frontmatter.type === 'note')">    
    <li><a :href="note.url">{{note.frontmatter.title}}</a></li>
</ul>