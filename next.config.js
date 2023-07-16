/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/work",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
