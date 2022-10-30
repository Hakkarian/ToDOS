const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const htmlWebp = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [miniCss.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [new miniCss({ filename: './style.css' }),
            new htmlWebp({ template: './dist/index.html' })],
    devServer: {
        port: 4420,
        open: true
    }
}