<template>
  <div class="toutiao">
	   <header class="h-sm">
	   	 		<img src="./../../assets/search/blue_left.jpg" alt="" class="h-sm-left" @click="goHome()">
	   	 		<div class="h-content">全部分类</div>
	   	 		<img src="./../../assets/toutiaoNew/blue_search.jpg" alt="" class="h-sm-right">
	   </header>


	   <nav class="bannerUp">
			<ul class="bannerUp-ul">
				<li>
					<router-link to="/" class="bu-router addBuColor">推荐</router-link>
				</li>

				<li>
					<router-link to="/" class="bu-router">新闻媒体</router-link>
				</li>

				<li>
					<router-link to="/" class="bu-router">视频类目</router-link>
				</li>

				<li>
					<router-link to="/" class="bu-router">企业文化</router-link>
				</li>
			</ul>
	   </nav>
		<banner></banner>

		<nav class="bannerUp bannerDown">
			<ul class="bannerUp-ul">
				<li>
					<router-link to="/" class="bu-router addBdColor">
						东方网
						<p class="bottomLine" style="visibility:visible"></p>
					</router-link>
				</li>

				<li>
					<router-link to="/" class="bu-router">
						腾讯
						<p class="bottomLine"></p>
					</router-link>


				</li>

				<li>
					<router-link to="/" class="bu-router">
						搜狐
						<p class="bottomLine"></p>
					</router-link>

				</li>

				<li>
					<router-link to="/" class="bu-router">
						今日头条
						<p class="bottomLine"></p>
					</router-link>

				</li>
			</ul>
	   </nav>
		<div class="newContent">
				<ul v-for="val in newArr" class="newContent-ul">
					<li @click="gotoWhere('fir',val.imgSing,val.fir)">
						<p class="new-font">{{val.fir}}</p>	
						<p class="new-img">
							<img v-bind:src="val.img_l" alt="" class="f-img-l f-img-one">
							<img v-bind:src="val.img_c" alt="" class="f-img-l f-img-two">
							<img v-bind:src="val.img_r" alt="" class="f-img-l f-img-three">
						</p>	
					</li>
					<li class="newContent_sec_li" @click="gotoWhere('sec',val.imgSec,val.fir)">
						<p class="new-font">{{val.fir}}</p>	
						<p class="new-img">
							<img v-bind:src="val.imgSec" alt="" class="sec_img">
						</p>	
					</li>

					<li>
						<p class="new-font">{{val.fir}}</p>	
					</li>

					<li class="new-thir-li" @click="gotoWhere('thir',val.imgGirl,val.fir)">
						<p class="new-font-left">{{val.fir}}</p>	
						<p class="new-img-right">
							<img v-bind:src="val.imgSing" alt="" class="n-r-img">
						</p>	
					</li>

					<li class="new-thir-li" @click="gotoWhere('four',val.imgGirl,val.fir)">
						<p class="new-font-left">{{val.fir}}</p>	
						<p class="new-img-right">
							<img v-bind:src="val.imgSing" alt="" class="n-r-img">
						</p>	
					</li>
				</ul>
		</div>
<br>
<br>
<br>
<br>
  </div>
</template>

<script>
import banner from "./../../views/HOME/BannerToutiao.vue"
export default {
  name: 'toutiao',
  data(){
	  return {
	  	newArr:[
	  		{
	  			fir:`位于青海沱沱河流域的班德湖,距离长江源头200公里
	  			,海拔在4700米，这里是很多野生动物的家
	  			`,
	  			img_l:require("./../../assets/toutiaoNew/vedioL.jpg"),
	  			img_c:require("./../../assets/toutiaoNew/vedioC.jpg"),
	  			img_r:require("./../../assets/toutiaoNew/vedioR.jpg"),
	  			imgSec:require("./../../assets/toutiaoNew/com.jpg"),
	  			imgSing:require("./../../assets/toutiaoNew/sing.jpg"),
	  			imgGirl:require("./../../assets/toutiaoNew/photoD_p.jpg"),

	  		}
	  	]
	  }
    
  },
  components:{
  	banner
  },
  methods:{
  	gotoWhere(where,img,content){
  		switch(where){
  			case "sec":
  			 this.$router.push({
  			 	path:"/VDetail",
	  			 	query:{
	  			 		vedioImg:img,
	  			 		vedioC:content
	  			 }
  			 });
  			break;
  			case "thir":
  			this.$router.push({
  			 	path:"/PhotoD",
	  			 	query:{
	  			 		vedioImg:img,
	  			 		vedioC:content
	  			 }
  			 });
  			break;
  			case "fir":
  			this.$router.push({
  			 	path:"/AudioD",
	  			 	query:{
	  			 		vedioImg:img,
	  			 		vedioC:content
	  			 }
  			 });
  			break;
  			case "four":
  			this.$router.push({
  			 	path:"/AudioD",
	  			 	query:{
	  			 		vedioImg:img,
	  			 		vedioC:content
	  			 }
  			 });
  			break;
  		}
  	},
  	goHome(){
  		this.$router.push("/")
  	}
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
 .h-sm-right{
 	position:absolute;
 	right:10px;
 	height:28px;
 }
 .bannerUp{
 	width:100%;
 	height:35px;
 }
 .bannerUp-ul{
 	width:100%;
 	height:35px;
 	overflow:auto;
 }
 .bannerUp-ul > li{
 	width:25%;
 	height:35px;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	float:left;
 	text-align: center;
 }
 .bu-router{
 	text-decoration: none;
 	color:#000;
 	padding-top: 4px;
 	/*background:red;*/

 }
 .addBuColor{
 	color:#02b0b9;
 }
 .addBdColor{
 	color:#02b0b9;
 }
 .bottomLine{
 	width:20px;
 	height:2px;
 	background:#02b0b9;
 	margin:0 auto;
 	margin-top:4px;
 	visibility:hidden;
 }
 .bannerDown > ul{
 	border-bottom:1px solid #ADADAD;
 	border-radius:1px;
 }
 .newContent{
 	width:100%;
 	/*position: relative;为什么？*/
 }
 .newContent-ul{
 	width:100%;
 	position: relative;
 }
 .newContent-ul > li{
 	box-sizing: content-box;
 	width:100%;
 	border-bottom:1px solid #CCC;
 	border-radius:1px;
 	padding-top: 15px;
 	padding-bottom: 15px;

 	/*position: relative;*/
}
.newContent-ul > li > p{
	padding:0 15px;
	/*position: relative;*/
}
.new-img{
	margin-top:8px;
	width:100%;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	position:relative;
}
.f-img-l{
	width:110px;
	margin-right:15px;
	margin-left:15px;

}
.f-img-one{
	position:absolute;
	left:0;
}
.f-img-two{
}
.f-img-three{
	position:absolute;
	right:0;
}
.newContent_sec_li > .new-img > .sec_img{
	width:100%;
}
.sec_img{
	width:100%;
}
.newContent-ul > .new-thir-li{
	width:100%;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
}
.newContent-ul > .new-thir-li > .new-font-left{
	width:70%;
}
.newContent-ul > .new-thir-li > .new-img-right{
	width:30%;
}
.new-thir-li > .new-img-right > .n-r-img{
	width:100%;
}
</style>