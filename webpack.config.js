const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const ugly = new UglifyJsPlugin({
    uglifyOptions: {
        mangle: true,
        compress: {
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true,
            drop_console: true,
            drop_debugger: true,
            evaluate: true
        },
        output: {
            comments: false
        }
    },
    extractComments: true
});

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
    // plugins: [ugly],
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
        minimize: true,
        minimizer: [ugly]
      }
   
};