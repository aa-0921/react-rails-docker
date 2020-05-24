const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',

    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
    },

    devServer: {
        port:"3030",
        hot:true,
        open:true
    },

    module: {
    rules:[
        {
            test: /\.js(x?)$/,
            loader:'babel-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.ts(x?)$/,
            loader:'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    resolve: {
        extensions: ['.js','.ts','.tsx']
    }
}
