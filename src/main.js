import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from "axios"
import store from './store'
import $ from "./../public/jquery-3.2.1.min.js"
import iView from 'iview'
import 'iview/dist/styles/iview.css'

 
// $ npm install iview --save
// 配置axios
// Axios.defaults.headers.common["token"]="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3QiLCJpYXQiOjE1NDI2MjM1NDgsIm5iZiI6MTU0MjYyMzU0OCwiZXhwIjoxNTQyNjMwNzQ4LCJkYXRhIjp7InVzZXJpZCI6MX19.vz4M26FXRwEVrOhz5b_4NUYAQD-FE8ryJdOcu5pWjb4"
Axios.defaults.headers.post["Content-type"]="application/json"

Vue.prototype.$axios=Axios
Vue.prototype.$=$
Vue.use(iView)
 
const url='http://localhost/jikeyiqi/public/api/'/*设置全局请求地址*/
// 设置axios拦截器
Axios.interceptors.request.use(
      config => {
        if (store.state.tok) {
        // 判断是否存在token，如果存在的话，则每个http header都加上token
          config.headers.Authorization = 'Bearer '+store.state.tok;
        }
        // if (config.url.indexOf(url) === -1) {
        //   config.url = url + config.url;/*拼接完整请求路径*/
        // }
        return config;
      },
      err => {
        return Promise.reject(err);
      });
 
 
 
Vue.config.productionTip = false;









router.beforeEach((to,from,next)=>{
	if(to.path=="/Person"){

      // 用来本地缓存，免登陆
     if(sessionStorage.getItem("token")){
       store.state.login_boo=true;
       
       
    }



		if(store.state.login_boo==true){
          next();
        }else{
          
          next("/login");
        }
	}else{
	        next()
	}

  // 对进入主页的脚部进行展示display="block",间接改变，通过enterHome_boo
  if(to.path=="/"||to.path=="/Person"||to.path=="/Mall"||to.path=="/Child"){
    
    store.state.enterHome_boo=true;
  }
   


})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
