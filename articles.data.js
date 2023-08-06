import scanArticles from './src/utils/scanArticles.js'
import { createContentLoader } from 'vitepress'

// export default {
//     load(){
//         let articles = [];
//         return{
//             data: scanArticles('./src/articles', articles).map((article) => {
//                 return `- [${article.split('/').pop().split('.md')[0]}](${article})\n`
                
//             })
//         }
//     }
// }

export default createContentLoader('./src/articles/2023/*.md')