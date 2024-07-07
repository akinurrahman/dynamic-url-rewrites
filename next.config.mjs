/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: '/user/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
  