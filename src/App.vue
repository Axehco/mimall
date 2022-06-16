<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      res: {}
    }
  },
  mounted() {
    // 1、本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res;
    // })

    // // 2、通过easymook平台
    // // 在main.js中要将axios.defaults.baseURL = X  换成easy-mock的地址
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res;
    // })

    // 3、本地集成mockjs实现数据mock
    this.axios.get('user/login.json').then((res)=>{
      this.res = res;
      console.log(res);
    })
  },
}
</script>

<style>

</style>
