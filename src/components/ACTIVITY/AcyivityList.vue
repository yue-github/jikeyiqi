<template>
  <div class="comment">
		<div class="header">
			<img src="./../../assets/activity/blue_left.jpg" alt="" class="blueLeft" @click="gotoActivityHome()">
			<div class="positiion">
				<img src="./../../assets/activity/position.jpg" alt="" class="pLogo">
				<span class="positiionFont">{{pos}}</span>
			</div>
		</div>








  		<div class="addHeight" keep-alive>
   	 		<ul class="no-floatL">
				<li v-for="(val,index) in msgArr" @click="gotoActivityDetail(index)">
					<router-link to="/" class="tellMsgShow-router">
						<div class="left">
							<img v-bind:src="val.img" alt="">
						</div>
	<!-- 测试 -->
						 <div class="right">
						 	<div class="top changeBlack">{{val.recruit}}</div>

						 	<div class="footer">
						 		<div class="top">
						 			<div class="left">
						 				￥
							 			<span>
							 				{{val.price}}
							 			</span>
							 			.00
						 			</div>
						 			<div class="right">全国</div>
						 		</div>
						 		<p class="foot">{{val.dataDown}}</p>
						 	</div>

						 </div>
					</router-link>
				</li>
			</ul>
		</div>




		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
  </div>
</template>

<script>
export default {
  name: 'comment',
  data(){
	  return {
	  	pos:"全国",
	  	msgArr:[
	  		{
	  			  recruit:"香港拓展活动7天6夜正在火爆招募中...",
			  	  dataDown:"15天后截止",
			  	  price:6988,
			  	  img:require("./../../assets/home/twoBaby.jpg")
	  		},
	  		{
	  			  recruit:"香港拓展活动7天6夜正在火爆招募中...",
			  	  dataDown:"15天后截止",
			  	  price:6988,
			  	  img:require("./../../assets/home/twoBaby.jpg")
	  		},
	  		{
	  			  recruit:"香港拓展活动7天6夜正在火爆招募中...",
			  	  dataDown:"15天后截止",
			  	  price:6988,
			  	  img:require("./../../assets/home/twoBaby.jpg")
	  		},
	  		{
	  			  recruit:"香港拓展活动7天6夜正在火爆招募中...",
			  	  dataDown:"15天后截止",
			  	  price:6988,
			  	  img:require("./../../assets/home/twoBaby.jpg")
	  		},
	  	],
	  	type:"附近活动"
	  }
    
  },
  methods:{
  	gotoActivityHome(){
  		this.$router.push({
  			path:"/ActivityHome"
  		})
  	},
  	gotoActivityDetail(index){
  		this.$router.push({
  			path:"/ActivityDetail",
  			query:{
  				obj:{
  						type:this.type,
  						index:index
  				},
  				from:"AcyivityList"
  			}
  		})
  		// console.log(index)
  	}
  },
  mounted(){
  	document.documentElement.scrollTop=0;
  	this.pos=this.$store.state.position;
  }
}
</script>

 
<style scoped>
.header{
	width:100%;
	height:50px;
	background:#02b0b9;
	display:flex;
	display:-webkit-flex;
	align-items:center;
	position:relative;
}
.positiion{
	position:absolute;
	right:15px;
	display:flex;
	display:-webkit-flex;
	align-items:center;
}
.positiionFont{
	color:#fff;
	font-size:18px;
	margin-left:10px;
}
.blueLeft{
	margin-left:15px;
	height:30px;
}
.pLogo{
	height:25px;
}
 .addHeight{
 	padding:15px 0px 0px 15px;
	overflow:auto;
}
 .addHeight > .no-floatL{
	width:100%;
}
.footer > .no-floatL > li{
	width:100%;
	/*height:100px;*/
	display:flex;
	display:-webkit-flex;
	align-items: center;
	margin-bottom:20px;
}
 .addHeight > .no-floatL li > .tellMsgShow-router{
	display:block;
	display:flex;
	display:-webkit-flex;
	align-items:center;
	overflow:auto;
}
 .addHeight > .no-floatL > li > .tellMsgShow-router > .left{
	width:30%;
	/*height:100px;*/
	float:left;
}
 .addHeight > .no-floatL > li > .tellMsgShow-router > .left > img{
	width:100%;
}
 .addHeight > .no-floatL > li > .tellMsgShow-router > .right{
	float:right;
	width:68%;
	padding:0 10px;
	/*height:100px;*/
}
 .addHeight > .no-floatL > li > .tellMsgShow-router > .right > .top{
	width:100%;
	white-space: wrap;
	font-size:17px;
	height:50px;
}
 .addHeight > .no-floatL > li > .tellMsgShow-router > .right > .footer{
	width:100%;
	height:50px;
}
 .addHeight > .no-floatL > li > .tellMsgShow-router > .right > .footer > .top{
	width:100%;
	height:22.5px;
	overflow:hidden;
	position:relative;
}
 .addHeight > .no-floatL > li > .tellMsgShow-router > .right > .footer > .top > .left{
	position:absolute;
	color:#f40;
	left:0;
}
 .addHeight > .no-floatL > li > .tellMsgShow-router > .right > .footer > .top > .left > span{
	font-size:18px;
}
 .addHeight > .no-floatL > li > .tellMsgShow-router > .right > .footer > .top > .right{
	position:absolute;
	color:#CCC;
	font-size:14px;
	right:0;
}
 .addHeight > .no-floatL > li > .tellMsgShow-router > .right > .footer > .foot{
	display:inline-block;
	color:yellow;
	background:url("./../../assets/home/dataDown.jpg");
}
.changeBlack{
	color:#000;
}
</style>