const path = require('path');

module.exports = {
    entry: './src/app.js',
    output:{
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test: /\.js$/, //archivos que terminan en .js
            exclude:/node_modules/
        }]
    }
};