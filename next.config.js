const path = require('path')
const { WEBSITES_PATH } = require('./constant')
const withPlugins = require('next-compose-plugins')
const { generateImages } = require('./scripts/generate-images')
const site = require(path.join(WEBSITES_PATH, 'site.json'))

const nextConfig = {
  trailingSlash: false,
  env: {
    ...site,
  },
}

module.exports = withPlugins([generateImages], nextConfig)
