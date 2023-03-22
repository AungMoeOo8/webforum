/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdna.artstation.com",
        port: "",
        pathname: "/p/assets/images/images/008/900/210/large/**",
      },
    ],
  },
};

module.exports = nextConfig;
