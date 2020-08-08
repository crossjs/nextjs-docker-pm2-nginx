module.exports = process.env.NODE_ENV === 'production' ? {}: {
  async rewrites() {
    return [
      {
        source: '/blog/:slug*',
        destination: `http://localhost:3001/blog/:slug*`,
      },
    ]
  },
};
