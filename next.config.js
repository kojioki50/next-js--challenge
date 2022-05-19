const { redirect } = require('next/dist/server/api-utils')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// module.exports = {

//    assetPrefix: '/top'
// }

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/top',
        permanent: false
      }
    ]
  }
}
