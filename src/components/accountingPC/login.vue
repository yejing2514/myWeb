<template>
  <div>
    <div class="login">
      <div class="login-con">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <p><i class="el-icon-date" style="padding-right: 6px"></i>后台记账系统</p>
          </div>
          <div class="text item">
            <el-form :model="loginForm" :rules="rules" ref="loginForm">
              <el-form-item prop="user">
                <el-input placeholder="请输入账号" size="small" v-model="loginForm.user">
                  <template slot="prepend"><i class="icon iconfont icon-account"></i></template>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input placeholder="请输入密码" type="password" size="small" v-model="loginForm.password">
                  <template slot="prepend"><i class="icon iconfont icon-password"></i></template>
                </el-input>
              </el-form-item>
              <el-button type="primary" style="width: 100%" @click="login('loginForm')">登陆</el-button>
            </el-form>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loginForm: {
          user: '',
          password: ''
        },
        rules: {
          user: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      login (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message.success('登陆成功！')
          } else {
            this.$message.error('请检查必填项的输入！')
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../../assets/img/pc/logo_bg.jpg") no-repeat;
    background-size: 100% 100%;
    z-index: 1;
  }

  .login-con {
    position: absolute;
    right: 160px;
    top: 50%;
    -webkit-transform: translateY(-60%);
    transform: translateY(-60%);
    width: 300px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card p {
    text-align: center;
    font-size: 16px;
  }
</style>
