module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        alias: {
          images: './src/images',
          components: './src/components',
          helpers: './src/helpers',
          hocs: './src/hocs',
          icons: './src/icons',
          hooks: './src/hooks',
          styles: './src/styles',
          store: './src/store'
        }
      }]
    ]
  };
};
