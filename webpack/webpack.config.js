/**
 * Created by asus1 on 2017/12/1.
 */
const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
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
        }),
        new ExtractTextPlugin("css/index.css"),
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                //use:['style-loader','css-loader']
                //use:[
                //    {
                //        loader: "style-loader"
                //    },{
                //        loader:"css-loader"
                //    }
                //]
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    }
};
