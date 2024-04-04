/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/cac',
    images: {
      unoptimized: true,
    },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  };

export default nextConfig;
