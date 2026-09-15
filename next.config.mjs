/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  allowedDevOrigins: [
    "**.run.app",
    "*.run.app",
    "ais-dev-mxnirol6heojjyfyysnkj3-550587934996.asia-southeast1.run.app",
    "ais-pre-mxnirol6heojjyfyysnkj3-550587934996.asia-southeast1.run.app",
    "**.google.com",
    "*.google.com",
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
