<template>
  <div class="activityHome">
  		<div class="header-t">
  			<div class="back">
  				<img src="./../../assets/activity/tran_left.png" alt="" class="tran_left" @click="goWhere('home')">
  			</div>
  			<div class="search">
  				<img src="./../../assets/activity/search.png" alt="" class="searchImg">
  				<img src="./../../assets/activity/position.png" alt="" class="positionImg" @click="goWhere('position')">
  				<span class="positionF" @click="goWhere('position')">{{position}}</span>
  			</div>
  		</div>
   	 	<banner class="banner"></banner>
   	 	<!-- 轮播图像底下的导航栏 -->
		<nav class="activeNav">
			<ul class="active-ul">
				<li v-for="(val,index) in navArr" @click="gotoSpt(index)">
					<p><img v-bind:src="val.img" alt="" class="a-n-img"></p>
					<p class="a-n-font">{{val.name}}</p>
				</li>
			</ul>
		</nav>



		<div class="weekWhereToGo">
			<div class="togo-left">
				<img v-bind:src="whereTo" alt="" class="fir-img">
			</div>
			<div class="togo-right">
				<img v-bind:src="recommend" alt="" class="togoRec">
				<img v-bind:src="newB" alt="" class="togoNew">
			</div>
		</div>
		<div class="nearlyActivity">
			<div class="n-title" @click="gotoActivityList()">
				<span class="n-font">附近活动<p class="bg"></p></span>
				<img src="./../../assets/activity/white_right.jpg" alt="" class="white-right">
			</div>

			<ul class="na-ul">
				<li v-for="val in nearlyArr">
					<div class="n-ul-img">
						<img v-bind:src="val.img" alt="" class="twoBaby">
					</div>
					<div class="n-ul-content">
						{{val.content}}
					</div>
					<div class="n-ul-detail">
						<span class="detail-fir">{{val.adress}}</span>
						<span class="detail-sec">{{val.age}}&nbsp;岁</span>
						<span class="detail-thir">￥<span class="change-font">{{val.price}}</span>.00</span>
					</div>
				</li>
			</ul>	

		</div>



<br>
<br>
<br>
<br>
<br>
<br>
 
  </div>
</template>

<script>
import banner from "./../../views/HOME/ActiveBanner"
export default {
 
  name: 'activityHome',
  data(){
	  return {
	  	nearlyArr:[
	  		{
	  			img:require("./../../assets/home/twoBaby.jpg"),
	  			content:`香港拓展活动7天6夜正在火爆招募中...`,
	  			adress:"全国",
	  			age:"4-17",
	  			price:"6988"
	  		},
	  		{
	  			img:require("./../../assets/home/twoBaby.jpg"),
	  			content:`香港拓展活动7天6夜正在火爆招募中...`,
	  			adress:"全国",
	  			age:"4-17",
	  			price:"6988"
	  		},
	  		{
	  			img:require("./../../assets/home/twoBaby.jpg"),
	  			content:`香港拓展活动7天6夜正在火爆招募中...`,
	  			adress:"全国",
	  			age:"4-17",
	  			price:"6988"
	  		},
	  		{
	  			img:require("./../../assets/home/twoBaby.jpg"),
	  			content:`香港拓展活动7天6夜正在火爆招募中...`,
	  			adress:"全国",
	  			age:"4-17",
	  			price:"6988"
	  		},
	  		{
	  			img:require("./../../assets/home/twoBaby.jpg"),
	  			content:`香港拓展活动7天6夜正在火爆招募中...`,
	  			adress:"全国",
	  			age:"4-17",
	  			price:"6988"
	  		},
	  		{
	  			img:require("./../../assets/home/twoBaby.jpg"),
	  			content:`香港拓展活动7天6夜正在火爆招募中...`,
	  			adress:"全国",
	  			age:"4-17",
	  			price:"6988"
	  		},
	  	],
	  	whereTo:require("./../../assets/activity/week.jpg"),
	  	recommend:require("./../../assets/activity/recommend.jpg"),
	  	newB:require("./../../assets/activity/new.jpg"),
	  	navArr:[
	  		{
	  			img:require("./../../assets/activity/parent.jpg"),
	  			name:"亲子游"
	  		},
	  		{
	  			img:require("./../../assets/activity/surround.jpg"),
	  			name:"周边户外"
	  		},
	  		{
	  			img:require("./../../assets/activity/cold.jpg"),
	  			name:"冬夏令营"
	  		},
	  		{
	  			img:require("./../../assets/activity/book.jpg"),
	  			name:"演出票务"
	  		},
	  		{
	  			img:require("./../../assets/activity/book1.jpg"),
	  			name:"课程体验"
	  		},
	  		{
	  			img:require("./../../assets/activity/ta.jpg"),
	  			name:"沙龙讲座"
	  		},
	  		{
	  			img:require("./../../assets/activity/public.jpg"),
	  			name:"慈善公益"
	  		},
	  		{
	  			img:require("./../../assets/activity/other.jpg"),
	  			name:"其它"
	  		},
	  	],
	  	position:"全国",
	  	msgArr:[
	  		{

	  		}
	  	]
	  }
    
  },
  components:{
  	banner
  },
  methods:{
  	goWhere(where){
  		switch(where){
  			case 'home':
  			this.$router.push({
  				path:"/home"
  			});
  			break;

  			case 'position':
  			this.$router.push({
  				path:"/PositionS",
  				query:{
  					page_msg:"activityHome"
  				}
  			});
  			break;

  		}
  	},
  	gotoSpt(index){
  		 this.$router.push({
  		 	path:"/Separate",
  		 	query:{
  		 		index:index,
  		 		is_page:"ActivityHome",
  		 		from:"ActivityHome"

  		 	}
  		 })
  	},
  	gotoActivityList(){
  		this.$router.push({
  			path:"/AcyivityList"
  		})
  	}
  },
   mounted(){
  	this.position=this.$store.state.position;
  }
}
</script>

 
<style scoped>
.activityHome{
	position: relative;
}
 .header-t{
 	width:100%;
 	height:55px;
 	padding:0 15px;
 	position: absolute;
 	top:0;
 	left:0;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	z-index: 10;
 }
 .tran_left,
 .searchImg,
 .positionImg{
	height:35px;
 }
 .search{
 	height: 55px;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	position:absolute;
 	right:15px;
 }
 .positionF{
 	color:#fff;
 	font-size:19px;
 }
 .searchImg{
 	margin-right:20px;
 }
 .positionImg{
	margin-right:15px;
 }
 .activeNav{
 	width:100%;
	overflow:auto;
 }
 .active-ul{
 	width:100%;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	flex-wrap:wrap;
 }
 .active-ul > li{
 	width:25%;
 	text-align: center;
 	margin-top:20px;
 }
 .a-n-img{
 	height:40px;
 }
 .a-n-font{
 	margin-top:5px;
 }
 .weekWhereToGo{
 	width:100%;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	margin-top:18px;

 }
 .togo-left,
 .togo-right{
 	width:45%;
 }
 .togo-right{
	margin-left: 3%;
	text-align:right;
 }
 .togo-left > img,
 .togo-right > img{
 	width:100%;
 }
.nearlyActivity{
	width:100%;
}
.n-title{
	width:100%;
	padding:15px;
	position:relative;
	border-bottom:1px solid #ccc;
	border-radius:1px;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
}
.n-font{
	font-size:20px;
	display:flex;
	display:-webkit-flex;
	align-items:center;
}
.white-right{
	position:absolute;
	right:15px;
	height:30px;
}
.bg{
	width:50px;
	height:0px;
	box-shadow:0px 0px 10px 3px yellow;
	margin-left:-65px;
	opacity:0.8;
}
.na-ul{
	width:100%;
	margin-top:15px;
	display:flex;
	display:-webkit-flex;
	align-items:center;
	flex-wrap:wrap;
	justify-content: center;
}
.na-ul > li{
	width:47%;
	margin-left:2%;
	margin-bottom:10px;
}
.twoBaby{
	width:100%;
}
.n-ul-detail{
	width:100%;
	margin-top:6px;
	display:flex;
	display:-webkit-flex;
	align-items:center;
	word-break: break-all;
	word-wrap: wrap;
	color:#ccc;
	font-size: 13px;
	position:relative;
}
.detail-fir{
	 margin-right:10px;
	 
}
.detail-sec{
 margin-right:10px;
}
.detail-thir{
	 color:#f40;
	 
}
.change-font{
	font-size:17px;
}
</style>