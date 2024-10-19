/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
          },
        ],
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      // Ref: https://nextjs.org/docs/app/api-reference/next-config-js/eslint
      ignoreDuringBuilds: true,
    },
    typescript: {
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // Ref: https://nextjs.org/docs/app/api-reference/next-config-js/typescript
      ignoreBuildErrors: true,
    },
};

export default nextConfig;
