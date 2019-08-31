// Grab Dependencies
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        // server: './server.js', // Establish the name and location of the server file.
        main: "./src/main.js"
    },
    mode: "development",
    // Establish where the public directory will be placed.
    output: {
        filename: "[name]-bundle.js",
        path: path.join(__dirname, "../dist"),
        // publicPath: '/'
    },
    // target: 'node',
    // // For Express
    // node: {
    //     __dirname: false, 
    //     __filename: false, 
    // },
    // externals: [nodeExternals()], // Notes that the node modules are external to avoid errors.
    // module: {
    //     rules: [{
    //             // Transpiles ES6-8 into ES5
    //             test: /\.js$/,
    //             exclude: /node_modules/,
    //             use: {
    //                 loader: "babel-loader"
    //             }
    //         },
    //         {
    //             // Loads the javacript into html template provided.
    //             // Entry point is set below in HtmlWebPackPlugin in Plugins 
    //             test: /\.html$/,
    //             use: [{
    //                 loader: "html-loader"
    //             }]
    //         }
    //     ]
    // },
    // plugins: [
    //     new HtmlWebPackPlugin({
    //         template: "./index.html",
    //         filename: "./index.html",
    //         excludeChunks: ['server']
    //     })
    // ]
}