var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /.html$/,
            loader: 'html'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    }
};
