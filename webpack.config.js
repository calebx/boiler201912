const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const nodeEnv = process.env.NODE_ENV;
const isProd = nodeEnv === "production";

const config = {
    mode: nodeEnv || "development",
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    devtool: isProd ? "none" : "inline-source-map",
    devServer: {
        contentBase: "./dist",
        hot: true,
        port: 9000
    },
    module: {
        rules: [
            // https://stackoverflow.com/questions/54156617/why-would-we-exclude-node-modules-when-using-babel-loader
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: !isProd
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: !isProd
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: "head",
            template: "src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
