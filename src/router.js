import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ChildAll from './views/CHILD/ChildAll'
import SmallRec from './views/CHILD/SmallRec'
import FamousChild from './views/CHILD/FamousChild'
import ChildRec from './views/CHILD/ChildRec'
import Filter from './views/CHILD/Filter'
// import $store from './store.js'
// import Axios from "axios"
Vue.use(Router)
// Vue.use(Axios)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')//主页路径引入
    },
    {
      path: '/Child',
      name: 'Child',
      redirect:"/ChildAll",
      children:[
        {path:"/ChildAll",component:ChildAll},
        {path:"/SmallRec",component:SmallRec},
        {path:"/FamousChild",component:FamousChild},
        {path:"/ChildRec",component:ChildRec} 
      ],
      // es6动态引入import
      component: () => import('./views/Child.vue')
    },
    {
      path: '/Mall',
      name: 'Mall',
      // es6动态引入import
      component: () => import('./views/Mall.vue')
    },
    {
      path: '/Person',
      name: 'Person',
      // es6动态引入import
      component: () => import('./views/Person.vue')
      
    },
    // 收获地址
    {
      path: '/GetThingAddress',
      name: 'GetThingAddress',
      // es6动态引入import
      component: () => import('./views/PERSON/GetThingAddress.vue')
      
    },

    // 编辑收货地址

    {
      path: '/AddressEdit',
      name: 'AddressEdit',
      // es6动态引入import
      component: () => import('./views/PERSON/AddressEdit.vue')
      
    },

    // 新增收货地址


    {
      path: '/CreateAddress',
      name: 'CreateAddress',
      // es6动态引入import
      component: () => import('./views/PERSON/CreateAddress.vue')
      
    },

    // 获取我的通告
    // MyNotice
     {
      path: '/MyNotice',
      name: 'MyNotice',
      // es6动态引入import
      component: () => import('./views/PERSON/MyNotice.vue')
      
    },

    // 我要加盟
    {
      path: '/Join',
      name: 'Join',
      // es6动态引入import
      component: () => import('./views/PERSON/Join.vue')
      
    },

    //可选择性删除此路由，属于城市选择可复用组件
    
    {
      path: '/cityChooseM',
      name: 'cityChooseM',
      // es6动态引入import
      component: () => import('./views/PERSON/cityChooseM.vue')
      
    },
    // ImgChooseM
     //可选择性删除此路由，属于图片选择可复用组件
    
    {
      path: '/ImgChooseM',
      name: 'ImgChooseM',
      // es6动态引入import
      component: () => import('./views/PERSON/ImgChooseM.vue')
      
    },
    // 新增卡莫
   
    {
      path: '/AddChildCar',
      name: 'AddChildCar',
      // es6动态引入import
      component: () => import('./views/PERSON/AddChildCar.vue')
      
    },
    // 上传用户头像
    
    {
      path: '/UpHeadImg',
      name: 'UpHeadImg',
      // es6动态引入import
      component: () => import('./views/PERSON/UpHeadImg.vue')
      
    },

    // 查看/编辑萌娃主页
    
    {
      path: '/GoEditChildHome',
      name: 'GoEditChildHome',
      // es6动态引入import
      component: () => import('./views/PERSON/GoEditChildHome.vue')
      
    },

    // login
    {
      path: '/login',
      name: 'login',
      // es6动态引入import
      component: () => import('./views/PERSON/login.vue')
    },

    // 个人页面的我的金额，我的活动等
    
    {
      path: '/MySelve',
      name: 'MySelve',
      // es6动态引入import
      component: () => import('./views/PERSON/MySelve.vue')
    },
    // MoneyWhereGo
    // 钱去向明细
     {
      path: '/MoneyWhereGo',
      name: 'MoneyWhereGo',
      // es6动态引入import
      component: () => import('./views/PERSON/MoneyWhereGo.vue')
    },

    {
      path: '/Search',
      name: 'Search',
      // es6动态引入import
      component: () => import('./components/Search.vue')
    },



      {
      path: '/NearlyJg',
      name: 'NearlyJg',
      // es6动态引入import
      component: () => import('./components/SEARCH/NearlyJg.vue')
    },
     {
      path: '/SearchMore',
      name: 'SearchMore',
      // es6动态引入import
      component: () => import('./components/SEARCH/SearchMore.vue')
    },

    {
      path: '/PosTest',
      name: 'Pos',
      // es6动态引入import
      component: () => import('./components/PosTest.vue')
    },

    {
      path: '/PositionS',
      name: 'Position',
      // es6动态引入import
      component: () => import('./components/PositionS.vue')
    },
    
    {
      path: '/BannerM',
      name: "BannerM",
      // es6动态引入import
      component: () => import('./views/HOME/Banner.vue')
    },
    {
      path: '/toutiao',
      name: "toutiao",
      // es6动态引入import
      component: () => import('./views/HOME/Toutiao.vue')
    },
    // {
    //   path: '/Filter',
    //   name: "Filter",
    //   component:Filter,
      
      
    // },
     {
      path: '/BindPhone',
      name: "BindPhone",
      // es6动态引入import
      component: () => import('./views/PERSON/BindPhone.vue')
    },
    {
      path: '/BusyCenter',
      name: "BusyCenter",
      // es6动态引入import
      component: () => import('./views/PERSON/BusyCenter.vue')
    },
    {path:"*",redirect:"/"},

    // 头条新闻四大路由
    {
      path: '/AudioD',
      name: 'AudioD',
      // es6动态引入import
      component: () => import('./components/TOUTIAO/AudioD.vue')
    },
    {
      path: '/PhotoD',
      name: "PhotoD",
      // es6动态引入import
      component: () => import('./components/TOUTIAO/PhotoD.vue')
    },
    {
      path: '/ToutiaoNew',
      name: "ToutiaoNew",
      // es6动态引入import
      component: () => import('./components/TOUTIAO/ToutiaoNew.vue')
    },
    {
      path: '/VDetail',
      name: "VDetail",
      // es6动态引入import
      component: () => import('./components/TOUTIAO/VDetail.vue')
    },

    // other
    {
      path: '/DoMCar',
      name: "DoMCar",
      // es6动态引入import
      component: () => import('./otherProject/DoMCar.vue')
    },








    // mmodel1到model7
    {
      path: '/Model1',
      name: "Model1",
      // es6动态引入import
      component: () => import('./otherProject/Model1.vue')
    },
    {
      path: '/Model2',
      name: "Model2",
      // es6动态引入import
      component: () => import('./otherProject/Model2.vue')
    },
    {
      path: '/Model3',
      name: "Model3",
      // es6动态引入import
      component: () => import('./otherProject/Model3.vue')
    },
    {
      path: '/Model4',
      name: "Model4",
      // es6动态引入import
      component: () => import('./otherProject/Model4.vue')
    },
    {
      path: '/Model5',
      name: "Model5",
      // es6动态引入import
      component: () => import('./otherProject/Model5.vue')
    },
    {
      path: '/Model6',
      name: "Model6",
      // es6动态引入import
      component: () => import('./otherProject/Model6.vue')
    },
    {
      path: '/Model7',
      name: "Model7",
      // es6动态引入import
      component: () => import('./otherProject/Model7.vue')
    },









    // 通告路由配置
    {
      path: '/AnnounceList',
      name: "AnnounceList",
      // es6动态引入import
      component: () => import('./components/ANNOUNCE/AnnounceList.vue')//通告列表
    },
    {
      path: '/AnDetail',
      name: "AnDetail",
      // es6动态引入import
      component: () => import('./components/ANNOUNCE/AnDetail.vue')//通告详情
    },
    {
      path: '/Enroll',
      name: "Enroll",
      // es6动态引入import
      component: () => import('./components/ANNOUNCE/Enroll.vue')//报名
    },

  {
      path: '/AnReward',
      name: "AnReward",
      // es6动态引入import
      component: () => import('./components/ANNOUNCE/AnReward.vue')//积分奖励
    },

  {
      path: '/Tip',
      name: "Tip",
      // es6动态引入import
      component: () => import('./components/ANNOUNCE/Tip.vue')//举报
    },

  {
      path: '/EnrollEnd',
      name: "EnrollEnd",
      // es6动态引入import
      component: () => import('./components/ANNOUNCE/EnrollEnd.vue')//报名结束
    },

  {
      path: '/AlreadyEnroll',
      name: "AlreadyEnroll",
      // es6动态引入import
      component: () => import('./components/ANNOUNCE/AlreadyEnroll.vue')//已经报名列表
    },
    //临时副本可删除
     {
      path: '/AlreadyEnroll1',
      name: "AlreadyEnroll1",
      // es6动态引入import
      component: () => import('./components/ANNOUNCE/AlreadyEnroll1.vue')//已经报名列表
    },




    // 活动路由
     {
      path: '/ActivityDetail',
      name: "ActivityDetail",
      // es6动态引入import
      component: () => import('./components/ACTIVITY/ActivityDetail.vue')//已经报名列表
    },
     {
      path: '/ActivityHome',
      name: "ActivityHome",
      // es6动态引入import
      component: () => import('./components/ACTIVITY/ActivityHome.vue')//已经报名列表
    },
     {
      path: '/AcyivityList',
      name: "AcyivityList",
      // es6动态引入import
      component: () => import('./components/ACTIVITY/AcyivityList.vue')//已经报名列表
    },
     {
      path: '/Comment',
      name: "Comment",
      // es6动态引入import
      component: () => import('./components/ACTIVITY/Comment.vue')//已经报名列表
    },
     {
      path: '/OKOrder',
      name: "OKOrder",
      // es6动态引入import
      component: () => import('./components/ACTIVITY/OKOrder.vue')//已经报名列表
    },
     {
      path: '/Separate',
      name: "Separate",
      // es6动态引入import
      component: () => import('./components/ACTIVITY/Separate.vue')//已经报名列表
    },
    {
      path: '/BannerModule',
      name: "BannerModule",
      // es6动态引入import
      component: () => import('./views/BannerModule.vue')//已经报名列表
    },





  ],
  mode:"history",

})
