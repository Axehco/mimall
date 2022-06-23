# 【Vue】仿小米商城系统

[TOC]

### 项目介绍

本项目是基于Vue全家桶的仿小米商城系统，商城的流程如下：

登录 -> 产品首页 -> 产品站 -> 产品详情

购物车 -> 订单确认 -> 订单支付 -> 订单列表

 该项目是对小米商城系统的模仿，实现了从浏览商品到结算商品的整个过程。使用Scss、mixin来对公共样式抽离；对不同页面进行组件复用；商品展示图片使用vue-lazyload实现懒加载；通过vuex实现商品的状态管理，最终实现了登录、浏览商品并加入购物车、结算等功能。

### 商城页面与组件

#### 页面

- 商品首页
- 登录
- 商品产品站
- 商品详情
- 购物车
- 订单确认
- 订单支付（微信/支付宝）
- 订单列表

#### 组件

- NavHeader(导航组件)
- NavFooter(底部组件)
- ServiceBar(服务条组件)
- ProductParam(产品参数组件)
- OrderHeader(订单头部组件)
- Loading(加载组件)
- Modal(弹框组件)
- NodData(无数据组件)
- ScanPayCode(支付组件)

### 技术栈

#### 项目架构

- 跨域方案
- 目录结构规范
- 常用插件介绍
- Router封装
- Storage封装
- 接口错误拦截
- 接口环境设置
- Mock设置

#### 框架

- Vue2
- Vue Router
- Vuex
- axios
- ElementUI
- Scss/Mixin

#### 其他知识

- 生成支付二维码
- 图片懒加载
- 项目优化

#### 动画

- Vue-Transition


### 技术内容

- 对开发时请求后台数据设置跨域

- 对sessionStorage进行封装
- 对axios进行封装，设置拦截器，根据后端返回的不同状态码来进行不同响应设置
- 使用cookie管理
- 使用Vuex管理用户信息和购物车状态
- 封装Modal弹框组件
- 使用swiper轮播图组件
- 使用elementUI美化页面，如何按需引入
- 使用路由懒加载提高性能
- 使用Scss的mixin对公共样式抽离
- 使用图片懒加载
- 使用微信、支付宝支付

### 项目目录

```
mimall
├─ .gitignore
├─ babel.config.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ readmeImg
│  ├─ 产品站页.jpg
│  ├─ 产品详情页.jpg
│  ├─ 微信支付页.jpg
│  ├─ 技术栈.jpg
│  ├─ 支付宝页面.jpg
│  ├─ 支付页面.jpg
│  ├─ 登录页面.jpg
│  ├─ 目录结构.jpg
│  ├─ 订单列表页.jpg
│  ├─ 订单确认页.jpg
│  ├─ 购物车页.jpg
│  ├─ 页面与组件.jpg
│  └─ 首页.jpg
├─ src
│  ├─ api
│  │  └─ index.js
│  ├─ App.vue
│  ├─ assets
│  │  ├─ logo.png
│  │  └─ scss
│  │     ├─ base.scss
│  │     ├─ button.scss
│  │     ├─ config.scss
│  │     ├─ mixin.scss
│  │     ├─ modal.scss
│  │     └─ reset.scss
│  ├─ components
│  │  ├─ Loading.vue
│  │  ├─ Modal.vue
│  │  ├─ NavFooter.vue
│  │  ├─ NavHeader.vue
│  │  ├─ NoData.vue
│  │  ├─ OrderHeader.vue
│  │  ├─ ProductParam.vue
│  │  ├─ ScanPayCode.vue
│  │  └─ ServiceBar.vue
│  ├─ main.js
│  ├─ pages
│  │  ├─ alipay.vue
│  │  ├─ cart.vue
│  │  ├─ detail.vue
│  │  ├─ home.vue
│  │  ├─ index.vue
│  │  ├─ login.vue
│  │  ├─ order.vue
│  │  ├─ orderConfirm.vue
│  │  ├─ orderList.vue
│  │  ├─ orderPay.vue
│  │  └─ product.vue
│  ├─ router.js
│  ├─ storage
│  │  └─ index.js
│  ├─ store
│  │  ├─ action.js
│  │  ├─ index.js
│  │  └─ mutations.js
│  └─ util
│     └─ index.js
└─ vue.config.js
```

