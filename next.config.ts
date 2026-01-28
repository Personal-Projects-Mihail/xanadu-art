import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async rewrites() {
    // Back-compat for project media stored at `public/<slug>/...`
    // while JSON points to `/projects/<slug>/...`.
    return [
      {
        source: '/projects/:slug/:path*',
        destination: '/:slug/:path*',
      },
    ]
  },
}

export default nextConfig
