import Vue from 'vue'
import App from './App.vue'

// less
import less from 'less';
// element-ui
import ElementUI from 'element-ui'
// element-ui的css样式
import 'element-ui/lib/theme-chalk/index.css';
// vue-router
import VueRouter from "vue-router";
// 路由配置项
import router from "@/router";
// 懒加载lazyload
import VueLazyload from "vue-lazyload";
// vuex配置项
import store from "@/store";


Vue.use(less);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueLazyload, {
  loading: require('@/assets/img/loading.png'),
  error: require('@/assets/img/error.png'),
  attempt: 6,
  observer: true,
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
