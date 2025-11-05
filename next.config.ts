/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com", // para imagens hospedadas no Firebase Storage
    ],
  },
  compiler: {
    styledComponents: false, // manter compatibilidade com CSS Modules
  },
};

module.exports = nextConfig;
