<template>
    <div class="login-container">
        <div class="from-wrapper-outside"></div>
        <div class="login-from-wrapper">
            <div class="login-from-inner">
                <div class="login-from-icon"></div>
                <el-form ref="loginFrom" :model="loginFromData" :rules="rules" class="login-from" @submit.native.prevent="loginFn">
                    <el-form-item prop="name">
                      <el-input v-model="loginFromData.name" placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                      <el-input v-model="loginFromData.password" placeholder="密码" type="password" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-row>
                          <el-col :span="8" :offset="8">
                            <el-button type="primary" @click="loginFn" :style="{width: '100%'}">登录</el-button>
                          </el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      loginFromData: {},
      rules: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    loginFn () {
      this.$refs['loginFrom'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('LoginFun', this.loginFromData).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          this.$message({
            message: '请输入用户名及密码',
            type: 'warning'
          })
          return false
        }
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .login-container{
     width: 100%;
     height: 100%;
     background: url('../../assets/bg.jpg');
     background-repeat:no-repeat;
     background-size:100% 100%;
     -moz-background-size:100% 100%;
     .from-wrapper-outside{
        width: 420px;
        height: 470px;
        background-color: #000000;
        opacity: 0.15;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
     }
     .login-from-wrapper{
        width: 400px;
        height: 450px;
        background-color: #FFFFFF;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-flow: column;
        .login-from-inner{
           width: 100%;
           height: 100%;
           .login-from-icon{
              background-color: #000000;
              background-repeat:no-repeat;
              width: 171px;
              height: 103px;
              margin: auto;
              margin-top: 30px;
          }
          .login-from{
              margin-top: 25px;
              padding: 30px;
          }
        }
      }
  }
</style>
