import fs from 'fs'

function scanArticles(dir, articlesNames) {    
    const files = fs.readdirSync(dir)
    articlesNames = articlesNames || []
    files.forEach(file => {
        // if file is directory scan it
        if (fs.statSync(`${dir}/${file}`).isDirectory()) {
            articlesNames = scanArticles(dir+"/"+file, articlesNames)
        } else {
            articlesNames.push(file)
        }
    })
    return articlesNames
}

export default scanArticles