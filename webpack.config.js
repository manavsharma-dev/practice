const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    mode:'development',
    plugins:[
        new HtmlWebpackPlugin ({
            template: './dist/index.html'
        })
    ]
};
module.exports = config;