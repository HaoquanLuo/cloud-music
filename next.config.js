/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/home/recommend",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/home/recommend",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.music.126.net",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
