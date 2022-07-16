<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <!-- 我的购物车<span>温习提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span> -->
        <h2>{{title}}<slot name="tip"></slot></h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{username}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'order-header',
  props: {
    title: String
  },
  computed: {
    ...mapState(['username'])
  }
}
</script>

<style lang="scss">
.order-header {
  padding: 30px 0;
  border-bottom:2px solid #FF6600;
  .header-logo {
    float: left;
  }
  .title,
  .username {
    display: inline-block;
    height: 55px;
    line-height: 55px;
    margin-left: 54px;
  }
  .title {
    float: left;
    h2 {
      font-size: 28px;
      color: #333;
    }
    span {
      font-size: 14px;
      margin-left: 17px;
      color: #999;
      font-weight: 200;
    }
  }
  .username {
    float: right;
    a {
      color: #666;
      font-size: 16px;
    }
  }
}
</style>
