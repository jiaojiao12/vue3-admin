const path = require("path");
module.exports = {
  // 部署应用时的基本 URL
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  // 输出文件目录
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
  lintOnSave: true,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
  // 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
  configureWebpack: config => {},
  // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
  chainWebpack: config => {},
  // css的相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 是否为 CSS 开启 source map。设置为 true之后可能会影响构建的性能
    sourceMap: false,
    //CSS预设器配置项 向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
    loaderOptions: {
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/styles/main.scss` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData" sass和scss都有效，但是scss后要加分号;
        prependData: `@import "~@/styles/main.scss";`
      }
    },
    // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块
    requireModuleExtension: false
  },
  // 所有 webpack-dev-server 的选项都支持
  devServer: {
    open: false, //编译完是否打开网页
    host: "0.0.0.0", //指定使用地址，默认localhost,0.0.0.代表可以被外界访问
    port: 8080, //访问端口
    https: false, //编译失败时刷新页面
    hot: true, //开启热加载
    hotOnly: false,
    proxy: null, // 设置代理
    overlay: {
      //全屏模式下是否显示脚本错误
      warnings: true,
      errors: true
    },
    before: app => {}
  },
  // 是否为 Babel 或 TypeScript 使用 thread-loader
  parallel: require("os").cpus().length > 1,
  // 向 PWA 插件传递选项
  pwa: {},
  // 第三方插件配置
  pluginOptions: {}
};
