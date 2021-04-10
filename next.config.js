//
// Redirect set up
// https://nextjs.org/docs/api-reference/next.config.js/redirects
//
module.exports = {

  // Force redirection to menudino

  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://menudino.com/meurancho',
        permanent: true,
      },
    ]
  },
}

// 
// Use webpack 5 on nextjs
//
module.exports = {
  future: {
    webpack5: true,
  },
}

// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     // Note: we provide webpack above so you should not `require` it
//     // Perform customizations to webpack config
//     config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
//     config.plugins.push(new webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
//       'process.env.BUILD_VERSION': JSON.stringify(pkg.version)
//     }))
//     // Important: return the modified config
//     return config
//   },
// }

// For more info, visit https://nextjs.org/docs/basic-features/image-optimization#device-sizes
// https://nextjs.org/docs/basic-features/image-optimization#image-sizes

module.exports = {
  images: {
    domains: ['pizzariameurancho.com.br', 'images.prismic.io', 'prismic-io.s3.amazonaws.com', 'res.cloudinary.com', 'maps.googleapis.com'],
    // next/image support `srcSet` using the below deviceSizes
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
