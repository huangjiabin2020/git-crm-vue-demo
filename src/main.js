import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//重置CSS样式
import 'normalize.css/normalize.css'
//导入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import axios from './http/myaxios';

Vue.use(ElementUI);


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
