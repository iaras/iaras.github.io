/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages uses the repository name as base path for project pages
  // For user pages (username.github.io), basePath should be empty
  basePath: '',
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
}

module.exports = nextConfig
