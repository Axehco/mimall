<template>
  <div class="order-header">
    下面是order-header的内容：
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>
          <!-- 我的购物车<span>温习提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span> -->
          {{title}}<slot name="tip"></slot>
        </h2>
      </div>
      <div class="username">
        <a href="javascript:;">jack</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-header',
  props: {
    title: String
  }
}
</script>

<style lang="scss">
  .order-header{
    padding:30px 0;
    .header-logo{
      float:left;
    }
    .title, .username{
      display: inline-block;
      height: 55px;
      line-height: 55px;
      margin-left: 54px;
    }
    .title{
      font-size: 28px;
      float: left;
      color: #333;
      span{
        font-size: 14px;
        margin-left: 17px;
        color: #999;
        font-weight: bold;
      }
    }
    .username{
      float: right;
      a{
        color: #666;
        font-size: 16px;
      }
    }
  }
</style>
