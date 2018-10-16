<template>
    <div class="nav-wrapper">
        <div class="app-logo"></div>
        <hamburger :toggle-click="toggleSideBar" :is-active="true" class="hamburger-container"/>
        <el-breadcrumb separator="/" class="app-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">导航一</a></el-breadcrumb-item>
            <el-breadcrumb-item>分组一</el-breadcrumb-item>
            <el-breadcrumb-item>选项一</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="right-menu">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <img src="@/assets/logo.png" class="user-avatar">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <router-link to="/">
                <el-dropdown-item>
                  首页
                </el-dropdown-item>
              </router-link>
              <el-dropdown-item>重置密码</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
    </div>
</template>
<script>
import Hamburger from './Hamburger'
export default {
  name: 'Navbar',
  components: {
    Hamburger
  },
  methods: {
    toggleSideBar () {

    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .nav-wrapper{
        height: 100%;
        background: #FFF;
        .app-logo{
           width: 200px;
           background-color: #545c64;
           height: 100%;
           float: left;
        }
        .hamburger-container {
          line-height: 58px;
          height: 50px;
          float: left;
          padding: 0 10px;
        }
        .app-breadcrumb{
          display: inline-block;
          font-size: 14px;
          line-height: 50px;
          margin-left: 10px;
        }
        .right-menu{
           float: right;
           padding: 0 20px;
           line-height: 60px;
           height: 60px;
           .user-avatar {
              width: 40px;
              height: 40px;
              border-radius: 10px;
              vertical-align: middle;
           }
        }
    }
</style>
