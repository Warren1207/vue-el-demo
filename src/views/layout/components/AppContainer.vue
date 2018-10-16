<template>
    <div style="flex:1;">
      <keep-alive :include="cachedViews">
        <router-view :key="key"/>
      </keep-alive>
    </div>
</template>
<script>
export default {
  name: 'AppContainer',
  computed: {
    cachedViews () {
      return this.$store.state.tagsView.cachedViews
    },
    key () {
      return this.$route.fullPath
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
