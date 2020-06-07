const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src',
    devServer: {
        contentBase: './',
        hot: true,
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: [/node_modules/],
            query: {
                presets: ['@babel/preset-env'],
            },
        }],
    },
    stats: {
        colors: true,
    },
    devtool: 'source-map',
};
