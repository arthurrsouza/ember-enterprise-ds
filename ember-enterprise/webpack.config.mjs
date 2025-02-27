import path from 'path';
import webpack from 'webpack';

export default {
  entry: './dist/index.js',
  mode:'development',
  resolve: {
    modules: [path.resolve('./'), 'node_modules'],
    alias: {
      '@ember': path.resolve('./node_modules/ember-source/dist/packages/@ember')
    }
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'EnterpriseDS',
      filename: "mfe/remoteEntry.js",
      exposes: {
        './EntButtonComponent': './dist/components/ent-button.js',
      }
    }),
  ],
  output: {
    filename: 'mfe/[name].js', // Isso garante que os arquivos tenham nomes previsíveis
    path: path.resolve('dist'),
    publicPath: "https://arthurrsouza.github.io/",
    crossOriginLoading: "anonymous"
  }
};