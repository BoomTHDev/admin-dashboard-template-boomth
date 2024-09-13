/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pixels.com'
            },
            {
                protocol: 'https',
                hostname: 'render.fineartamerica.com'
            }
        ]
    }
};

export default nextConfig;
