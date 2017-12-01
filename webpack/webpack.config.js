/**
 * Created by asus1 on 2017/12/1.
 */
const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:{
        entry:"./dist/index.js"
    },
    output:{
        path:path.resolve(__dirname,'src'),
        filename:'[entry].js'
    },
    devServer:{
        contentBase:path.resolve(__dirname,'src'),
        host:'127.0.0.1',
        compress:true,
        port:8081
    },
    plugins:[
        new HtmlWebpackPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './dist/index.html'
        })
    ]
};
