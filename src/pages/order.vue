<template>
  <div>
    <!-- 在父页面中去统一处理title和提示信息。
    也可以在每个子页面动态引入一次，这样就不用单独去改变变量了。 -->
    <order-header v-bind:title="title">
      <template v-slot:tip>
          <span>{{tip}}</span>
      </template>
    </order-header>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import ServiceBar from './../components/ServiceBar'
import NavFooter from './../components/NavFooter'
import orderHeader from './../components/OrderHeader.vue'
export default {
  name: 'order',
  data() {
    return {
      title: '',
      tip: ''
    }
  },
  components: {
    ServiceBar,
    NavFooter,
    orderHeader
  },
  mounted() {
    let path = this.$route.path;
    if (path === '/order/confirm') {
      this.title = '订单确认';
      this.tip = '请认真填写收货地址';
    } else if (path === '/order/list') {
      this.title = '订单列表';
      this.tip = '请谨防钓鱼链接或诈骗电话，了解更多';
    } else if (path === '/order/pay') {
      this.title = '订单支付';
      this.tip = '请谨防钓鱼链接或诈骗电话，了解更多';
    }
  }
}
</script>

<style></style>
