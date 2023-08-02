const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
  }

module.exports = {
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname);
        return config;
    },

    nextConfig
};
