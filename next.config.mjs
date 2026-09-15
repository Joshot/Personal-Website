/** @type {import('next').NextConfig} */
const nextConfig = {
  // On Vercel, omit 'standalone' because Vercel uses its own deployment tracing and expects standard .next output.
  // In Docker / Cloud Run / self-hosted environments without VERCEL env, use 'standalone'.
  output: process.env.VERCEL ? undefined : "standalone",
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
