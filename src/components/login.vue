<template>
  <div id="login">
    <div id="loginbox">
      <div class="loginboxinner">
        <div class="login-header">
          <div class="login-line"></div>
          <h1>后台系统</h1>
          <div class="login-line"></div>
        </div>
        <div class="login-content">
          <el-input v-model.trim="userName" placeholder="请输入账号" size="small"></el-input>
          <div class="br"></div>
          <el-input v-model.trim="passWord" placeholder="请输入密码" size="small" type="password"></el-input>

          <el-button type="primary" id="loginBtn" @click="login" :loading="loginstate">登录</el-button>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import * as api from '../api/login.js'
  import * as workerApi from '../api/worker.js'
  import * as commonApi from '../api/common.js'
  import * as names from '../router/names'
  import storage from '../module/storage'
  //  import * as types from '../vuex/mutation-types'

  export default {
    data() {
      return {
        userName: '',
        passWord: '',
        loginstate: false
      }
    },
    mounted() {
      let component = this
      document.onkeydown = function (ev) {
        if (ev.keyCode === 13) {
          component.login()
        }
      }
    },
    methods: {
      login() {
        if (this.userName === '') {
          this.$message.error('账号不能为空')
        } else if (this.passWord === '') {
          this.$message.error('密码不能为空')
        }
        if (this.userName !== '' && this.passWord !== '') {
          this.loginstate = true
          var data = {
            'username': this.userName,
            'password': this.passWord
          }
          api.normalLogin(JSON.stringify(data), true).then(res => {
            this.loginstate = false
            if (res.data.status === 'success') {
              this.$message.success('登陆成功！')
              storage.setUser(this.userName)
              storage.setToken(res.data.token)
              storage.setWorkerId(res.data.workerid)
              workerApi.userMainNav().then(res => {
                if (res.data.status === 'success') {
                  storage.setUserNavPromission(res.data.data)
                  commonApi.getoptions().then(res => {
                    if (res.data.status === 'success') {
                      storage.setGetOptions(res.data.data)
                      this.$router.push({
                        name: names.INDEX
                      })
                    } else {
                      this.$message.error(res.message)
                    }
                  })
                } else {
                  this.$message.error(res.message)
                }
              })
            } else {
              this.$message.error(res.data.message)
            }
          }).catch(error => {
            if (error.response) {
              this.$message.error(error.response.data.message)
            } else {
              this.$message.error('请求失败,请重试!')
            }
            this.loginstate = false
          })
        }
      }

    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/variable"
  .br
    margin-top: 20px;

  #loginBtn
    width: 100%;
    background: $color-theme;
    border: none;
    margin-top: 30px;

  #login
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background url("../assets/img/loginbg.png")
    background-size: 100%;

  .login-header
    padding: 18px;
    overflow: hidden;

  #loginbox
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 320px;
    height: 250px;
    padding: 5px;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 10px #3B4D6A

  .login-line
    background: url(../assets/img/loginLine.png) no-repeat;
    width: 32px;
    height: 8px;
    float: left;
    margin: 8px 10px 0 10px;

  .login-header h1
    float: left;
    color: #655F65;
    font-size: 18px;

  .login-content
    width: 80%;
    height: 160px;
    margin: 14px auto;
</style>
