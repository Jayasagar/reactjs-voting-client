const webpack = require('webpack');
module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3335',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
        ],
    output: {
      path:__dirname + '/dist',
        publicPath:'/',
        filename:'bundle.js',
        devtool:'eval'
    },
    module:{
      loaders:[{
          test:/\.jsx?$/,
          exclude:/node_modules/,
          loader:'babel-loader',
          query: 
                {
                presets:['es2015', 'react']
                }
      }]  
    },
    resolve:{
      extensions:['','.js','.jsx']  
    },
    devServer: {
        port:3335,
        hot: true,
        contentBase: './dist'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
    
};