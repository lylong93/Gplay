const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    player: path.resolve(__dirname, "src/js/index.js")
  },
  // devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js",
    library: "[name]",
    libraryTarget: "umd",
    libraryExport: "default",
    umdNamedDefine: true,
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        include: __dirname + 'src',
        use: [
          {
            loader: "babel-loader",
            options: {
              // compact: true,
              presets: ["env"]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
            // options: {
            //     importLoaders: 1,
            //     minimize: true,
            //     sourceMap: true
            // }
          },
          {
            loader: "postcss-loader",
            options: {
              //     config: {
              autoprefixer: {}
              //     }
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
};
