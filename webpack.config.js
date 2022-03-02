const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
    entry: [
        "./src/js/theme.js",
        "./src/scss/theme.scss"
    ],
    output: {
        filename: "theme.js",
        path: path.resolve(__dirname, "assets")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
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
        new VueLoaderPlugin()
    ]
}