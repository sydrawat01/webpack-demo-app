const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new DashboardPlugin()]
};
