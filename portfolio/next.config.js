const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: '',
  reactStrictMode: true,
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  images: {
    loader: "akamai",
    path: '',
  },
};