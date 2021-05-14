/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const withCSS = require('@zeit/next-css');

const nextConfig = {
  target: 'serverless',
  env: {
    SERVER_URI: process.env.SERVER_URI,
    FAUNA_SECRET_KEY: process.env.FAUNA_SECRET_KEY,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  webpack: config => {
    config.module.rules.push({
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        {
          loader: 'url-loader',
        },
      ],
    });
    return config;
  },
};

module.exports = withCSS(nextConfig);