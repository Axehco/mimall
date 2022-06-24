// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false,  // 关闭eslint校验
//   devServer: {
//     host: 'localhost',
//     port: 8080,
//     proxy: {
//       // '/activity': {
//       //   target: 'https://www.imooc.com',
//       //   // 是否要将主机头的源点更改为目标源的URL地址 
//       //   // 默认是false：请求头中host仍然是浏览器发送过来的host
//       //   changeOrigin: true,  
//       //   pathRewrite: {
//       //     '/activity': '/activity'
//       //   }
//       // }
//       '/api': {
//         target: 'https://www.imooc.com',
//         // 是否要将主机头的源点更改为目标源的URL地址 
//         // 默认是false：请求头中host仍然是浏览器发送过来的host
//         changeOrigin: true,  
//         pathRewrite: {
//           '/api': ''
//         }
//       }
//     }
//   }
// })


module.exports = {
  lintOnSave: false,  // 关闭eslint校验
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      // '/activity': {
      //   target: 'https://www.imooc.com',
      //   // 是否要将主机头的源点更改为目标源的URL地址 
      //   // 默认是false：请求头中host仍然是浏览器发送过来的host
      //   changeOrigin: true,  
      //   pathRewrite: {
      //     '/activity': '/activity'
      //   }
      // }
      '/api': {
        // target: 'https://www.imooc.com',  // https://mall-pre.springboot.cn
        target: 'http://mall-pre.springboot.cn',
        // 是否要将主机头的源点更改为目标源的URL地址 
        // 默认是false：请求头中host仍然是浏览器发送过来的host
        changeOrigin: true,  
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}