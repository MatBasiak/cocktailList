const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options:{
                            modules:true,
                            localIdentName:"[local]_[hash]"
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test:/\.(jpg|png)$/,
                use:["file-loader"]
            }
        ]
    },
    resolve: {
        extensions: ["*",".js",".jsx"]
    },

    entry: "./src/index.js",
    output: {
        path: __dirname + "/docs",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "docs",
        watchOptions: {
            poll: true
          }
    },
    optimization: {
      minimizer: [new UglifyJsPlugin()]
    }
   
};