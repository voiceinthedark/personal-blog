import scanArticles from './src/utils/scanArticles.js'

export default {
    load(){
        let articles = [];
        return{
            data: scanArticles('./src/articles', articles)
        }
    }
}