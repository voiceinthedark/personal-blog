import fs from 'fs'

function scanArticles(dir, articlesNames) {    
    const files = fs.readdirSync(dir)
    articlesNames = articlesNames || []
    files.forEach(file => {
        // if file is directory scan it
        if (fs.statSync(`${dir}/${file}`).isDirectory()) {
            articlesNames = scanArticles(dir+"/"+file, articlesNames)
        } else {
            // if file is a markdown file add it to the array with its parent directory
            if (file.endsWith('.md')){
                articlesNames.push(`${dir}/${file}`)
            }
        }
    })
    return articlesNames
}

export default scanArticles