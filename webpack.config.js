const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')

// 创建插件示例对象
const htmlPlugin = new HtmlWebpackPlugin({
    // 模板文件
    template: path.join(__dirname, './src/index.html'),
    //目标文件
    filename: "index.html"
})

// 创建stylelint插件示例对象
const stylelintPlugin = new StylelintWebpackPlugin({
    files: ['src/**/*.s?(a|c)ss']
})

// 向外暴露一个一个webpack配置文件
// 用module.export 的原因是因为 webpack 是基于node构建的
// export 是es6 的关键字，并不是node的，所以用不了
module.exports = {
    // 设置mode：是生产环境还是开发环境
    mode: "development",
    // 在webpack4.x中新增特性： 约定大于配置；约定默认的打包路径是 src -> index.js
    plugins: [
        htmlPlugin,
        stylelintPlugin
    ],
    // webpack默认只能打包 .js 后缀的文件，所以要配置第三方loader
    module: {
        // 第三方模块配置规则
        rules: [
            // 配置babel
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            // 配置eslint
            { enforce: 'pre', test: /\.js|jsx$/, use: 'eslint-loader', exclude: /node_modules/ },
            // 配置css-loader
            { test: /\.css$/, use: ['style-loader', 'css-loader']}, 
            // 配置字体文件打包处理
            { test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader'},
            // 打包处理scss并模块化（只针对类名或id，标签选择器不会模块化)
            { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[local]-[hash:8]', 'sass-loader']}
        ]
    },
    // 配置省略格式的后缀名
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.join(__dirname, '/src')
        }
    }
}