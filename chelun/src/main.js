import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from './router/index'
// store
import store from './store/index'
// 引入vant
import { Popup, Picker } from 'vant'

Vue.use(Popup)
Vue.use(Picker)


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})