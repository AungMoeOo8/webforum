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
  async redirects() {
    return [
      {
        source: "/",
        missing: [
          {
            type: "cookie",
            key: "session",
          },
        ],
        permanent: false,
        destination: "/sign-in",
      },
      {
        source: "/sign-in",
        has: [{ type: "cookie", key: "session" }],
        permanent: false,
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
