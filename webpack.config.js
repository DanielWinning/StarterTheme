const path = require("path");

module.exports = {
    entry: "./src/js/theme.js",
    output: {
        filename: "theme.js",
        path: path.resolve(__dirname, "assets/js")
    }
}