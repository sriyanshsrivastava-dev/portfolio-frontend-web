import type { NextConfig } from "next";

const allowedDevOrigins = process.env.ALLOWED_DEV_ORIGINS
    ? process.env.ALLOWED_DEV_ORIGINS.split(",")
    : [];

const nextConfig: NextConfig = {

  /* config options here */
  reactCompiler: true,
  allowedDevOrigins
};

export default nextConfig;
