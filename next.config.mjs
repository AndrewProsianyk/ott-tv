/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
      {
        protocol: "https",
        hostname: "api.themoviedb.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

export default nextConfig;
