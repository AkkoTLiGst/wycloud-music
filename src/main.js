import Vue from 'vue'
import App from './App.vue'

// less
import less from 'less';
// element-ui
import ElementUI from 'element-ui'
// element-ui的css样式
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(less);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
