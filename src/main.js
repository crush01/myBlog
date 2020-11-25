import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import './assets/css/utils.scss'
import 'lib-flexible'
import { Carousel, CarouselItem } from 'element-ui'
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.config.productionTip = false
Vue.use(VueLazyLoad)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
