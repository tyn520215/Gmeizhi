
var path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'main/main.js'),
    output: {
        path:path.resolve(__dirname, "build"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192' // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
            }
        ]
    }
}