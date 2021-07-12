// const HtmlWebpackPlugin = require('html-webpack-plugin')
// module.exports = {
//     mode:'none',
//     starts:'none',
//     devtool:'source-map',
//     plugins:[
//         new HtmlWebpackPlugin()
//     ]
// }
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'none',
    stats: 'none',
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin()
    ]
}

