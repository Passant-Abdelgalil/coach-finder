const path = require('path');

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: { additionalData: `@import '@/assets/styles/main.scss'; @import 
      '${nodeModulesPath}/normalize.css/normalize.css';` },
    },
  },
});
