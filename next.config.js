/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: false,
      },
      {
        source: '/home/recommend',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
