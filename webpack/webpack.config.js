/**
 * Created by asus1 on 2017/12/1.
 */
const path =require('path');
const webpack=require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const entry = require('./webpack.config/entry_config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports={
    entry:entry,
    output:{
        path:path.resolve(__dirname,'src'),
        filename:'[entry].js',
        publicPath:"http://127.0.0.1:8081/"
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
         //new UglifyJSPlugin()
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'dist/*.html'))
        }),
        new webpack.BannerPlugin('�ɸ����У�����ؾ�!'),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:[ 'jquery',"vue"],
            filename: 'assets/js/[name].js',
            minChunks: 2
        }),
        new CopyWebpackPlugin([{
            from : __dirname + '/dist/pulic',
            to : './pulic'
        }])
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
                    use: [{loader:"css-loader",
                        options:{
                            importLoader:1
                        }
                    },"postcss-loader"]
                })},
            {
                    test:/\.(jpg|png|gif)/,
                    use:[{
                        loader:"url-loader",
                        options:{
                            limit:500,
                            outputPath:'img/'
                        }
                    }]
                },{
                    test:/\.(htm|html)$/i,
                    loader:"html-withimg-loader"
                },{
                    test:/\.scss/,
                //use:[
                //    "style-loader","css-loader","sass-loader"
                //]
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader"]
                })
            }
        ]
    }
};
