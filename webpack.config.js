const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        // 'bundle': './src/js/r-toggleTab.js'
        'bundle': './src/js/mypage_order_pc.js'
    },

    output: {
        path: __dirname,
        publicPath: __dirname,
        filename: './index.js'
    },

    resolve: {
        extensions: ['', '.js']
    },

    externals: {
        jquery: 'jQuery'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]
}

// http://qiita.com/yoppe/items/e8f2a63248e270d29095