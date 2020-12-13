const path = require('path')

const currentWebsite = 'site-id-1'
const WEBSITES_PATH = path.join(process.cwd(), 'websites', currentWebsite)
const ARTICLES_PATH = path.join(WEBSITES_PATH, 'articles')

module.exports = { currentWebsite, WEBSITES_PATH, ARTICLES_PATH }
