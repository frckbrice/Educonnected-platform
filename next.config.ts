import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', 'http://192.168.8.107:3000', 'http://172.20.10.6:3000'],

};

export default nextConfig;
