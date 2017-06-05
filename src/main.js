// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$http = axios;

Vue.config.productionTip = false

Vue.use(ElementUI)

//d导入全局less文件
require('!style-loader!css-loader!less-loader!./css/common.less');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
