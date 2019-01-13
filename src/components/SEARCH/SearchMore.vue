<template>
  <div class="searchMore">
   	 	<header class="h-sm">
   	 		<img src="./../../assets/search/blue_left.jpg" alt="" class="h-sm-left" @click="gotoHome()">
   	 		<div class="h-content">全部分类</div>
   	 	</header>
      <div class="tell">
          <ul class="t-main-ul">
              <li class="t-li-one">
                  <div class="t-left">
                        <div class="t-left-main" @click="gotoAnnounceList(0)">
                            <img src="./../../assets/search/tell.jpg" alt="" class="t-l-perform" ref="eImage">
                            <p class="dowmSoon">{{eTitle}}</p>
                        </div>
                        
                  </div>

                  <div class="t-right">
                      <ul class="t-right-ul"><!-- 以后开发得注意,可以用v-for循环要做好，到时只需更改下数据就行这边就先这样了 -->
                            <li @click="gotoAnnounceList(0)">{{msgE[0].data_name}}</li>
                            <li>{{msgE[1].data_name}}</li>
                            <li class="clearRight">{{msgE[2].data_name}}</li>
                            <li>{{msgE[3].data_name}}</li>
                            <li>{{msgE[4].data_name}}</li>
                            <li class="clearRight">{{msgE[5].data_name}}</li>
                            <li>{{msgE[6].data_name}}</li>
                            <li class="clearRight"></li>
                            <li class="clearRight"></li>
                      </ul>
                  </div>
              </li>

              <li class="t-li-sec">
                  <div class="t-left">
                        <div class="t-left-main" @click="gotoSpt(0)">
                            <img v-bind:src="actImg" alt="" class="t-l-perform">
                            <p class="dowmSoon">{{aTitle}}</p>
                        </div>
                        
                  </div>

                  <div class="t-right">
                      <ul class="t-right-ul">
                            <li @click="gotoSpt(0)">{{msgA[0].data_name}}</li>
                            <li @click="gotoSpt(0)">{{msgA[1].data_name}}</li>
                            <li class="clearRight" @click="gotoSpt(1)">{{msgA[2].data_name}}</li>
                            <li @click="gotoSpt(2)">{{msgA[3].data_name}}</li>
                            <li @click="gotoSpt(3)">{{msgA[4].data_name}}</li>
                            <li class="clearRight" @click="gotoSpt(4)">{{msgA[5].data_name}}</li>
                            <li @click="gotoSpt(5)">{{msgA[6].data_name}}</li>
                            <li class="clearRight" @click="gotoSpt(6)">{{msgA[7].data_name}}</li>
                            <li class="clearRight" @click="gotoSpt(7)">其它</li>
                      </ul>
                  </div>
              </li>
          </ul>
      </div>





  </div>
</template>

<script type="module">
export default {
  name: 'searchMore',

  data(){
	  return {
        actImg: require("./../../assets/search/lan.jpg"),
        eImg: require("./../../assets/search/tell.jpg"),
        aTitle:"活动",
        eTitle:"演绎通告",
    	  msgE:[
            {data_name: "全部"},
            {id: 2, data_name: "急单快讯"},
            {id: 3, data_name: "平面广告"},
            {id: 4, data_name: "影视组讯"},
            {id: 5, data_name: "综艺栏目"},
            {id: 6, data_name: "走秀/演出"},
            {id: 9, data_name: "付费演"},
           

        ],
        msgA:[
            {data_name: "全部"},
            {id: 11, data_name: "亲子游"},
            {id: 12, data_name: "周边户外"},
            {id: 13, data_name: "冬夏令营"},
            {id: 14, data_name: "演出票务"},
            {id: 15, data_name: "课程体验"},
            {id: 16, data_name: "沙龙讲座"},
            {id: 17, data_name: "公益慈善"},
        ]
	  }
    
  },
  methods:{
    gotoHome(){
      this.$router.push({
        path:"/"
      })
    },
    gotoSpt(index){
       this.$router.push({
        path:"/Separate",
        query:{
          index:index,
          is_page:"ActivityHome",
          from:"SearchMore"
        }
       })
    },
     gotoAnnounceList(){
        this.$router.push({
          path:"AnnounceList"
        })
    }
  },
  mounted(){
    this.$axios.get("http://123.206.202.40:82/index.php/api/nav/getNavCate")
    .then((response)=>{
      console.log(response)
       return response.data
    })
    .then(data=>{
      console.log(data[1])
      // console.log(data[0])
       this.msgA=data[0].data;
       this.aTitle=data[0].name;
       this.msgE=data[1].data;
       this.eTitle=data[1].name;
       // this.$refs.eImage.src="http://123.206.202.40:82"+data[1].url;
       
        // new Promise((resolve)=>{
        //     let eUrl="http://123.206.202.40:82/index.php/api/nav/getNavCate"+data[1].url;
        //     resolve(eUrl)
        // }).then(data=>{
        //     this.eImg=data
        // })
         
    })
       
  }


}
</script>

 
<style scoped>
 .h-sm{
 	width:100%;
 	height:50px;
 	background:#02b0b9;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	color:#fff;
 	font-size:19px;
 	box-shadow: 0px 1px 20px 1px #ccc;
 }
 .h-sm-left{
 	position:absolute;
 	left:15px;
 	height:35px;
 }
 .tell{
  margin-top:10px;
  width: 100%;
  background:#F0F0F0;
 }

.t-main-ul{
  width:100%;
 }

.t-main-ul > li{
  width:100%;
  height:210px;
  background:#fff;
 }

 .t-left{
  width:25%;
  height:210px;
  float: left;
  border-right:;
  display:flex;
  display:-webkit-flex;
  align-items: center;
  justify-content: center;
  border-right:1px solid #F0F0F0;
  border-bottom:1px solid #F0F0F0;
 }
 .t-left-main{
  text-align:center;
 }
 .right{
  width:75%;
  height:210px;
  background:blue;
  float:right;
 }
.t-right-ul{
  width:100%;
  height:210px;
}
.t-right-ul > li{
  height:70px;
  width:25%;
  border-bottom:1px solid #F0F0F0;
  border-right:1px solid #F0F0F0;
  float:left;
  display:flex;
  display:-webkit-flex;
  align-items: center;
  justify-content: center;
}
.t-right-ul > .clearRight{
  border-right:none;
}
.t-li-sec{
  margin-top:10px;
} 
.dowmSoon{
  margin-top:5px;
}
.t-li-sec{
  border-bottom:#F0F0F0;
}
.t-l-perform{
  width:35px;
}
</style>