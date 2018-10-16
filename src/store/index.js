import Vue from 'vue'
import Vuex from 'vuex'
import tagsView from './module/tagsView'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tagsView
  },
  getters: {
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews
  }
})
