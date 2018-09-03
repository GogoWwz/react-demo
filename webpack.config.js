const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 创建插件示例对象
const htmlPlugin = new HtmlWebpackPlugin({
    // 模板文件
    template: path.join(__dirname, './src/index.html'),
    //目标文件
    filename: "index.html"
})

// 向外暴露一个一个webpack配置文件
// 用module.export 的原因是因为 webpack 是基于node构建的
// export 是es6 的关键字，并不是node的，所以用不了
module.exports = {
    // 设置mode：是生产环境还是开发环境
    mode: "development",
    // 在webpack4.x中新增特性： 约定大于配置；约定默认的打包路径是 src -> index.js
    plugins: [
        htmlPlugin
    ],
    // webpack默认只能打包 .js 后缀的文件，所以要配置第三方loader
    module: {
        // 第三方模块配置规则
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }, // 一定要添加exclude排除项
            { test: /\.css$/, use: ['style-loader', 'css-loader?modules&localIdentName=[local]-[hash:8]']} // css模块化（只针对类名或id，标签选择器不会模块化）
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