/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        cf: {
            token: 'your cf token',
            api: 'your api url'
        },
    }
}

module.exports = nextConfig
