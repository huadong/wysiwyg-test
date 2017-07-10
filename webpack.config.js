var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var APP_FILE = path.resolve(APP_PATH, 'index.tsx');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: APP_FILE,
        'react-draft-wysiwyg': 'react-draft-wysiwyg',
    },
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].[chunkhash:5].min.js',
    },
    module: {
        rules: [{
            test: /\.css$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'postcss-loader'] }),
            //include: [APP_PATH]
        }, {
            test: /\.less$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'postcss-loader', 'less-loader'] }),
            include: [APP_PATH]
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=[name].[ext]',
            include: [APP_PATH]
        }, {
            test: /\.(png|jpg)$/,
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
            include: [APP_PATH]
        }, {
            test: /\.tsx?$/,
            exclude: /^node_modules$/,
            loader: 'awesome-typescript-loader'
        }, {
            test: /\.jsx$/,
            exclude: /^node_modules$/,
            loader: 'babel-loader',
            include: [APP_PATH],
            query: {
                'presets': ['react', 'es2015', 'stage-0']
            }
        }, {
            test: /\.js$/,
            exclude: /^node_modules$/,
            loaders: 'babel-loader',
            include: [APP_PATH]
        }, {
            test: /\.js$/,
            enforce: 'pre',
            loader: 'source-map-loader'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new ExtractTextPlugin('css/[name].css'),
        new CommonsChunkPlugin({
            name: 'react-draft-wysiwyg',
            minChunks: Infinity,
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html 
            template: 'src/template/index.html',
            filename: 'index.html',
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.less', '.scss', '.css'],
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,
        inline: true,
        port: 9000
    },
    externals: {
        'jquery': 'jQuery',
        // 'react': 'React',
        // 'react-dom': 'ReactDOM',
        // 'redux': 'Redux',
        // 'lodash': '_',
        // 'moment': 'moment',
        // 'immutable': 'Immutable',
        // 'draft-js': 'Draft',
    },
};