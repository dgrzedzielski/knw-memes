const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = async ({ config }) => {
  const tsPaths = new TsconfigPathsPlugin({
    configFile: './tsconfig.json',
  });

  config.resolve.plugins
    ? config.resolve.plugins.push(tsPaths)
    : (config.resolve.plugins = [tsPaths]);


  config.resolve.modules = [
    path.resolve(__dirname, ".."),
    "node_modules",
  ]

  // This is needed to use Storybook with @emotion
  // because Storybook is referencing old emotion package names
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    '@emotion/core': toPath('node_modules/@emotion/react'),
    'emotion-theming': toPath('node_modules/@emotion/react'),
    '@emotion/styled': toPath('node_modules/@emotion/styled'),
  };

  // Return the altered config
  return config;
};
