const path = require("path");
const Webpack = require("webpack");
const {VueLoaderPlugin} = require("vue-loader");

// noinspection JSUnresolvedFunction
module.exports = [
    {
        entry: [
            "./src/js/theme.js",
            "./src/scss/theme.scss"
        ],
        output: {
            path: path.resolve(__dirname, "assets"),
            filename: "js/theme.js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.vue$/,
                    exclude: /node_modules/,
                    loader: "vue-loader"
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].css",
                                outputPath: "css/"
                            }
                        },
                        "postcss-loader",
                        "sass-loader"
                    ]
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new Webpack.DefinePlugin({
                __VUE_OPTIONS_API__: true,
                __VUE_PROD_DEVTOOLS__: true
            })
        ]
    }
]