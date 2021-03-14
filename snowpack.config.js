module.exports = {
  mount: {
    public: {
      url: '/',
      static: true,
    },
    src: {
      url: '/dist',
    },
  },
  alias: {
    '@': './src',
  },
  devOptions: {
    open: 'none',
  },
  plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-sass'],
};
