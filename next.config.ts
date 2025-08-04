import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
        formats: ['image/webp', 'image/avif'],
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    output: 'export',
    trailingSlash: true,
    distDir: 'dist',
};

export default nextConfig;
