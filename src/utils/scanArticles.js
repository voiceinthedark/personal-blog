import fs from 'fs'

function scanArticles() {
    let articlesNames = []
    fs.readdirSync(path = './articles', { recursive: true }).forEach((file) => {
        articlesNames.push(file)
    })
    // console.log((articlesNames));
    return articlesNames
}

export default scanArticles