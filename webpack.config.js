const path = require('path');

module.exports = {
  entry: './app/Resume.jsx',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    filename: 'resume.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
  plugins: []
}
