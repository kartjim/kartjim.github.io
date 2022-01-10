const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        about: './src/about.js',
        public: ['./src/comment.js','./src/footer.js'],
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].js'
    },
    mode: 'development', // production
    module: {
        rules: [
            {test: /\.css$/,use: [miniCssExtractPlugin.loader,'css-loader','postcss-loader']},
            {test: /\.less$/,use: [miniCssExtractPlugin.loader,'css-loader','less-loader','postcss-loader']} // 从右到左
        ],
    },
    plugins:[
        new htmlWebpackPlugin({
            template: "./src/index.html",
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            },
            chunks: ['index','public'] // 最终引入的js文件顺序不是按照这里顺序，而是按照上面entry里的顺序！
        }),
        new htmlWebpackPlugin({
            template: "./src/about.html",
            filename: 'about.html',
            chunks: ['about','public']
        }),
        new miniCssExtractPlugin({
            filename: 'index.css',
        }),
        // new optimizeCssAssetsWebpackPlugin()
    ]
}

