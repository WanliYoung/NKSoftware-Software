import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router/index.js'

import ElementUI from 'element-ui'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
import VueAmap from 'vue-amap'
Vue.use(VueAmap)
VueAmap.initAMapApiLoader({
  key: 'b0eacec27b1bb1682baf2d6b1ef7874d\t',// 高德的key
  // 插件集合
  plugin: [
    'AMap.CircleEditor',// 圆形编辑器插件
    "AMap.Geolocation", // 定位控件，用来获取和展示用户主机所在的经纬度位置
    "AMap.Geocoder", // 地理编码与逆地理编码服务，用于地址描述与坐标间的相互转换
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.CitySearch",
  ],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});
//高德的安全密钥
window._AMapSecurityConfig = {
  securityJsCode:'b43568fad2c97e8316aa57df44279c6e',
}
import cloudbase from '@cloudbase/js-sdk'
const app =cloudbase.init({
  env:"project-6g3zt5t9ff1310b4"
})
let db = app.database();
Vue.prototype.$app= app
Vue.prototype.$db = db
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
