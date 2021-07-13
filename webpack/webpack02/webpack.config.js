const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

module.exports ={
    target: ['web', 'es5'],
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname, 'dist')
    },
    module:{
        rules: [
           
           {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
           },{
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        },{
            test:/\.less$/,
            use:[
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        },{
            test:/\.(jpg|png|gif)$/,
            use:[
                {
                    loader:'url-loader',
                    options:{
                        limit:8 * 1024,
                        name:'img/name.[hash:8].[ext]'
                    }
                }
            ]

        } ,{
            test: /\.vue$/,
            loader: 'vue-loader'
        } ]
    },
    plugins:[
        new webpack.BannerPlugin('最终版权归AAAA'),
        new VueLoaderPlugin()
       
    ],
    mode:'development',
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    }

}