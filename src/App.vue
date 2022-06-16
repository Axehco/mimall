<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storege from './storage/index.js'
export default {
  name: 'App',
  components: {

  },
  data() {
    return {

    }
  },
  mounted() {
    // // 注意要先创建一个空模块，然后再往模块里面加东西
    // storege.setItem('userinfo', {})
    // storege.setItem('user', {})
    // storege.setItem('age', 1, 'user')
    // storege.setItem('name', 'zs', 'user')
    // storege.setItem('name', 'lisi', 'userinfo')

    // storege.setItem('hobby', 'basketball')
    // storege.setItem('age', 18)

    // storege.clear('age')
    // storege.clear('age', 'user')
    
    // console.log(storege.getItem('age'));
    // console.log(storege.getItem('age', 'user'));
  },
}
</script>

<style>

</style>
