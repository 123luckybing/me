/**
 * Created by asus1 on 2017/12/1.
 */
const path =require('path');
module.exports={
    entry:{
        entry:"./dist/index.js"
    },
    output:{
        path:path.resolve(__dirname,'src'),
        filename:'[entry].js'
    }
}