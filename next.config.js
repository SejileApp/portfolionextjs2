// /** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // experimental: {
    // serverActions: true,
  //   appDir: true,
  //   serverComponentsExternalPackages:["mongoose"],
  // },
    images: {
      domains: ["placehold.co","pixabay.com"],
      // unoptimized:true,
      },
      


    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    // output:'export',
    distDir: 'build',
}

module.exports = nextConfig
