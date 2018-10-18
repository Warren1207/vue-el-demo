<template>
    <div class="layout-wrapper">
        <el-container>
          <el-header class="padder-no">
            <navbar/>
          </el-header>
          <el-container>
            <el-aside :width="asideWidth">
              <sidebar/>
            </el-aside>
            <el-container style="border-top: 1px solid #d8dce5;">
              <el-main class="padder-no flex-main-wrapper">
                <tagbar/>
                <app-container/>
              </el-main>
              <el-footer class="padder-no" style="height:50px;">
                <footerbar/>
              </el-footer>
            </el-container>
          </el-container>
        </el-container>
    </div>
</template>
<script>
import { Navbar, Sidebar, Tagbar, AppContainer, Footerbar } from './components'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    Tagbar,
    AppContainer,
    Footerbar
  },
  computed: {
    asideWidth () {
      return this.$store.state.sideBarOpen ? '200px' : '70px'
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .layout-wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      background: #f5f7f9;
  }
  .padder-no{
    padding: 0;
  }
  .flex-main-wrapper{
    display: flex;
    flex-direction: column;
  }
</style>
