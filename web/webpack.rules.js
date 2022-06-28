module.exports = [
  {
    test: /\.(tsx|ts|jsx|js|mjs)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['solid'],
        },
      },
      {
        loader: 'ts-loader',
      },
      {
        loader: 'file-loader',
        options: {
          context: 'project',
        },
      },
    ],
  },
  // {
  //   enforce: 'pre',
  //   test: /\.js$/,
  //   loader: 'source-map-loader',
  // },
];
