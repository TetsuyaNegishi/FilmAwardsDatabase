var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: path.join(__dirname, 'doc'),
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
        }, {
            test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
            loader: 'file?name=font/[name].[ext]'
        }]
    },
    devtool: '#source-map',

    plugins: [
        function() {
            this.plugin('watch-run', (watching, callback) => {
                console.log('\033[36m' + 'Begin compile at ' + new Date() + '\033[39m');
                callback();
            });
        }
    ]
};
