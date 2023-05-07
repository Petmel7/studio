const path = require('path');

module.export = {
    entry: {
        main: path.resolve(__dirname, "./src/index.js"),
    },

    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js"
    },
};