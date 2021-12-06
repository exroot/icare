// Required for next/image component
const imagesConfig = {
  images: {
    domains: ['dojqnubhmjd3c.cloudfront.net'],
  },
}

// Fix needed for twin.macro on SSR
const twinMacro = {
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = { fs: 'empty', module: 'empty' }
    }

    return config
  },
}

const nextConfig = {
  ...imagesConfig,
  ...twinMacro,
}

module.exports = nextConfig
