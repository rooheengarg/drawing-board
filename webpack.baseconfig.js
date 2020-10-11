var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/app/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'main.js'
    },
    module : {
        rules : [
            {
                test : /\.(js)$/, 
                use:'babel-loader',
                exclude: /node_modules/ 
            },
            {
                test : /\.css$/, 
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'src/app/index.html'
        })
    ]

}