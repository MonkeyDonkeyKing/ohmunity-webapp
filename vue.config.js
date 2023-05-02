const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  configureWebpack: {
    resolve: {
      fallback: {
        http: require.resolve('stream-http'),
        timers: require.resolve('timers-browserify'),
        https: require.resolve('https-browserify'),
        stream: require.resolve('stream-browserify'),
        url: require.resolve('url/'),
      },
    },
  },
};
