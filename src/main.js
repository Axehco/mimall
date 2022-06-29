import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store/index'

import App from './App.vue'
// import env from './env'

// mock开关
const mock = false
if (mock) {
  require('./mock/api');
}

// 根据前端的跨域方式做调整
// 接口代理：接口域名和前端的域名是一样的，baseURL要写成 '/api/XX'
// jsonp或cors跨域：baseURL要写成 'https://XX'
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

// 这种方式是针对cors或jsonp的方式进行请求
// 也就是说这样才去建env.js，配置里面的变量，而接口代理的方式是不需要的
// axios.defaults.baseURL = env.baseURL  

// 接口错误拦截
// response是axios插件封装给我们的，并不是接口返回给我们的值
// response.data取到接口的值，也是axios封装的
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login';
    return Promise.reject(res);
  }else{
    // Message.warning(res.msg);
    return Promise.reject(res);
  }
},(error)=>{
  // let res = error.response;
  // Message.error(res.data.message);
  return Promise.reject(error);
});

Vue.use(VueAxios, axios);
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
});
Vue.use(VueCookie);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')
