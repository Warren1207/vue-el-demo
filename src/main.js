import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/** Element UI 引入 **/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/** 国际化文件引入 **/
import i18n from './lang'
/** 全局样式文件引入 **/
import '@/styles/index.scss'

Vue.use(ElementUI, { size: 'small', zIndex: 3000, i18n: (key, value) => i18n.t(key, value) })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
