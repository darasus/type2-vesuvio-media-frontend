const path = require('path')
const { WEBSITES_PATH } = require('./constant')
const withPlugins = require('next-compose-plugins')
const { generateImages } = require('./scripts/generate-images')
const site = require(path.join(WEBSITES_PATH, 'site.json'))

console.log(site)

const nextConfig = {
  trailingSlash: false,
  env: {
    ID: site.id,
    TITLE: site.title,
    PRIMARY_COLOR: site.primary_color,
    IS_PUBLISHED: site.is_published,
    DOMAIN: site.domain,
    GA: site.ga,
  },
}

module.exports = withPlugins([generateImages], nextConfig)
