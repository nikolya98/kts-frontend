const path = require("path");

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const TsCheckerPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const SOURCE = path.resolve(__dirname, "src");
const BUILD = path.resolve(__dirname, "build");
const PUBLIC = path.resolve(__dirname, "public");
const isProduction = process.env.NODE_ENV === "production";

const plugins = [
  new HtmlWebpackPlugin({ template: path.join(SOURCE, "index.html") }),
  !isProduction && new ReactRefreshWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: "[name]-[hash].css",
  }),
  new TsCheckerPlugin(),
].filter(Boolean);

const getSettingsForStyles = (withModules = false) => {
  return [
    MiniCssExtractPlugin.loader,
    !withModules
      ? "css-loader"
      : {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: !isProduction
                ? "[path][name]__[local]"
                : "[hash:base64]",
            },
          },
        },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: ["autoprefixer"],
        },
      },
    },
    "sass-loader",
  ];
};

module.exports = {
  target: isProduction ? "browserslist" : "web",
  entry: path.join(SOURCE, "index.tsx"),
  output: {
    publicPath: "/",
    path: BUILD,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.module\.s?css$/,
        use: getSettingsForStyles(true),
      },
      {
        test: /\.s?css$/,
        exclude: /\.module\.s?.css$/,
        use: getSettingsForStyles(),
      },
      {
        test: /\.([tj])sx?$/,
        use: "babel-loader",
      },
      {
        test: /\.(png|svg|jpg)$/,
        type: "asset/resource",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
    ],
  },
  plugins,

  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts", ".css", ".scss"],
    alias: {
      "@components": path.resolve(SOURCE, "components"),
      "@config": path.resolve(SOURCE, "config"),
      "@styles": path.resolve(SOURCE, "styles"),
      "@assets": path.resolve(SOURCE, "assets"),
      "@utils": path.resolve(SOURCE, "utils"),
      "@store": path.resolve(SOURCE, "store"),
      "@shared": path.resolve(SOURCE, "shared"),
      "@pages": path.resolve(SOURCE, "App/pages"),
      "@models": path.resolve(SOURCE, "models"),
    },
  },

  devServer: {
    host: "127.0.0.1",
    port: "5000",
    static: PUBLIC,
    hot: true,
    historyApiFallback: true,
  },
};
