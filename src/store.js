import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
console.log("流经过这边了")
export default new Vuex.Store({
  state: {
  	name:"MysStore",
    position:"全国",
    login_boo:false,
    enterHome_boo:true,
    token:sessionStorage.getItem("token")?sessionStorage.getItem("token"):"",
    obj_spt:{
      index:""

    }
  },
  mutations: {
  		doM(){
  			  
  		},
      DO(){
        console.log("hello unoverse-store-20")
      }
  },
  actions: {

  }
})
