<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {}
  },
  methods: {
    getUser() {
      this.axios.get('/user').then((res = {}) => {
        this.$store.dispatch('saveUserName', res.username)
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res)
      })
    }
  },
  mounted() {
    if (this.$cookie.get('userId')) {
      this.getUser()
      // 这里只是程序启动第一次进入的时候会调用，总的就调用一次
      // 之后都不会再调用了，因此如果页面用户退出后，又得重新再调用一次
      // 重新调用一下此方法，获取购物车里面的东西
      this.getCartCount()
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
