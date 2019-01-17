const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const webpack = require('webpack');

process.traceDeprecation = true;

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        init: [
            './client/normalize.css',
            'axios',
            'core-js/fn/array/from',
            'core-js/fn/array/find',
            'core-js/fn/array/find-index',
            'core-js/fn/array/includes',
            'core-js/fn/map',
            'core-js/fn/object/assign',
            'core-js/fn/object/values',
            'core-js/fn/promise',
            'core-js/fn/set',
            'core-js/fn/string/ends-with',
            'core-js/fn/string/includes',
            'core-js/fn/string/starts-with',
            'core-js/fn/string/trim'
        ],
        app: [
            './client/app'
        ]
    },
    output: {
        path: path.join(__dirname, 'build', 'public'),
        filename: '[name].bundle.js?h=[chunkhash]',
        publicPath: '/public/'
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        modules: [
            'node_modules'
        ],
        alias: {
            components: path.resolve(__dirname, 'client', 'components'),
            containers: path.resolve(__dirname, 'client', 'containers'),
            utils: path.resolve(__dirname, 'client', 'utils')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(svg|png|jpg|woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]?h=[hash:6]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new AssetsPlugin({
            path: path.resolve(__dirname, 'build', 'server'),
            filename: 'assets.json'
        }),
        new MiniCssExtractPlugin ({ filename: '[name].css?h=[chunkhash]' })
    ],
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                'vendor': {
                    name: 'vendor',
                    chunks: 'all',
                    minChunks: 1
                },
                'init': {
                    name: 'init',
                    chunks: 'all',
                    minChunks: Infinity
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
    },
    devtool: 'eval-source-map',
    watchOptions: {
        aggregateTimeout: 1000,
        ignored: /node_modules/
    }
};
