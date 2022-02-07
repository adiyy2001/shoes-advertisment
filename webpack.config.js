const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: ["./src/js/main.js", "./src/scss/styles.scss"],
    resolve: {
        extensions: ['.js']
     },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js" 
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: "./src/index.htm",
            inject : "body",
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/img", to: "./img"}
            ]
        })
    ]
};