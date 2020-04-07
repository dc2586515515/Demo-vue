/**
 * 打包命令：npx webpack --config webpack.config.js
 *  打包js
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.js',
    output: {
        // path: 输出的目录，__dirname是相对于webpack.config.js配置文件的绝对路径
        path: __dirname + '/dist',
        filename: 'build.js'	 //输出的js文件名
    },
    module: {
        rules: [
            {
                test: /\.css$/, // 通过正则表达式匹配所有以.css后缀的文件
                use: [ // 要使用的加载器，这两个顺序一定不要乱
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',  //生成的页面标题<head><title>首页</title></head>
            filename: 'index.html', // dist目录下生成的文件名
            template: './src/index.html' // 我们原来的index.html，作为模板
        })
    ]
}


/**
 * 打包 css
 * 1.webpack默认只支持js加载。要加载CSS文件，必须安装加载器
 *      npm install style-loader css-loader --save-dev
 *2. 在main.js引入css文件
 *      import './css/main.css'
 *
 * 3.在webpack.config.js添加加载器
 *
 * 4.重新打包
 *      npx webpack --config webpack.config.js
 */

/**
 * script脚本 编辑命令进package.json
 *
 * 我们可以把webpack的命令编入package.json,
 *以后，如果要打包，就可以直接输入：npm run build即可。
 *npm run ：执行npm脚本，后面跟的是脚本的名称build
 */

/**
 * 打包HTML
 *  1.安装插件：npm install --save-dev html-webpack-plugin
 *  2.在webpack.config.js中添加插件
 *  3.将原来HTML中的引入build.js代码删除
 *  4.再次打包：npm run build
 *  5.查看dist目录：多出来一个index.html文件，打开index.html，发现已经自动添加了当前目录下的build.js
 */


/**
 * 热更新的web服务
 * 1）安装插件：
 *      npm install webpack-dev-server --save-dev
 * 2）添加启动脚本
 *      在package.json中配置script
        "scripts": {
            "dev": "webpack-dev-server --inline --hot --open --port 8080 --host 127.0.0.1"
          },
 *
     --inline：自动刷新

     --hot：热加载

     --port：指定端口

     --open：自动在默认浏览器打开

     --host：可以指定服务器的 ip，不指定则为127.0.0.1
 */
