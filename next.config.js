/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
    experimental: {
        swcPlugins: [["next-superjson-plugin", {}]],
    },
}

module.exports = nextConfig
