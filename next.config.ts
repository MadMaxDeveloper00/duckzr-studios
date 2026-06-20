const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "7071",
        pathname: "/avatars/**",
      },
      {
        protocol: "https",
        hostname: "localhost",
        port: "7071",
        pathname: "/banners/**",
      },
    ],
  },
};

export default nextConfig;