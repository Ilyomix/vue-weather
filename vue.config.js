const path = require('path');

module.exports = {
  lintOnSave: true,
  pages: {
    index: {
      entry: 'src/main.ts',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        styles: path.resolve(__dirname, 'src/styles'),
        utils: path.resolve(__dirname, 'src/utils'),
        assets: path.resolve(__dirname, 'src/assets'),
        src: path.resolve(__dirname, 'src'),
      },
    },
  },
  devServer: {
    port: 8080,
    disableHostCheck: true,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
};
