<template>
  <div class="indexNav">
    <h1><img src="../assets/img/mylogo.png" class="mylogo"/></h1>
    <h3>欢迎来到我的个人网站</h3>
    <div id="highlights">
      <div class="inner">
        <div class="point" v-for="item in myProject">
          <h2>{{item.name}}</h2>
          <p>{{item.introduction}}</p>
        </div>
      </div>
    </div>
    <footer class="footer">
      <p>技术栈:Vue Node MangoDB Webpack Git</p>
      <p>遵循 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT 开源协议</a><br>
        Copyright © 2017-2020 Callmeye</p>
    </footer>
  </div>
</template>

<script>
  import canvasBg from 'static/js/canvas-nest.min' // eslint-disable-line no-unused-vars

  export default {
    data () {
      return {
        myProject: [
          {name: '个人记账系统(PC端)', introduction: '一个管理你的消费状况的后台系统'},
          {name: '个人记账系统(移动端)', introduction: '一个管理你的消费状况的后台系统'},
          {name: '个人记账系统(微信端)', introduction: '一个管理你的消费状况的后台系统'},
          {name: '聊天室', introduction: '一个用websorket搭建的聊天室应用'}
        ]
      }
    }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  .indexNav
    padding: 100px 0 102px;

  .mylogo
    margin 0 auto

  .indexNav
    h3
      text-align center
      font-weight 400
    font-size 16px
    color #7a7a7a

  #highlights
    background-color: #fff;
    padding-top: 70px;

  #highlights .inner
    margin: 0 auto;
    text-align: center;

  #highlights .point
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 2em;

  #highlights .point h2
    color: #58B7FF;
    font-size: 1.5em;
    font-weight: 400;
    margin: 0;
    padding: 0.5em 0;

  #highlights .point p
    color: #7f8c8d;

  .footer
    position absolute
    bottom 0
    width 100%
    height: 120px;
    text-align center
    line-height 30px
</style>
