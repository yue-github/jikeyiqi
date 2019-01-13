<template>
  <div class="activityDetail">
   		<div class="ErollHead">
	  		 <img src="./../../assets/announce/blue_left.jpg" alt="" class="ErollImg" @click="gotoWhere()">
	   	 	 <span class="ErollFont">活动详情</span>
 		</div>

 		 <div class="titleImg">
 		 	<img v-bind:src="msgArr[0].titleImg" alt="">
 		 </div>

 		 <div class="content">
 				<p class="c-title">{{msgArr[0].title}}</p>
				<ul class="con-ul">
					<li>
						<p>
							<img src="./../../assets/activity/time.jpg" alt="" class="c-img">
						</p>
						<span v-html="msgArr[0].time" class="activeTime"></span>
					</li>
					<li>
						<p>
							<img src="./../../assets/activity/timeDown.jpg" alt="" class="c-img">
						</p>
						<span>还剩&nbsp;{{msgArr[0].timeDown}}&nbsp;天</span>
					</li>
					<li>
						<p>
							<img src="./../../assets/activity/adress.jpg" alt="" class="c-img">
						</p>
						<span>{{msgArr[0].adress}}</span>
					</li>
					<li>
						<p>
							<img src="./../../assets/activity/age.jpg" alt="" class="c-img">
						</p>
						<span>{{msgArr[0].age}}&nbsp;岁</span>
						
					</li>
					<li>
						<p>
							<img src="./../../assets/activity/phone.jpg" alt="" class="c-img">
						</p>
						<span>{{msgArr[0].phone}}</span>
					</li>
				</ul>
 		 </div>
 		 <p class="separate"></p>
		 <div class="summerA">
		 	<span>{{msgArr[0].type}}</span>
		 	<span class="summer-price"><span class="changeF">{{msgArr[0].price}}</span>.00</span>
		 	<span class="summer-person">(剩余{{msgArr[0].personDown}}个名额)</span>
		 	<span class="eroll" @click="eroll()">报名</span>
		 </div>
		 <p class="separate"></p>
		 <!-- 活动详情 -->
		<div class="a-detail">
			<div class="ac-title">活动详情<p class="bg"></p></div>	

			 <div class="a-fir"><span class="a-fir-span">带你了解陶粒砂</span></div>

			 <div class="a-sec">
			 	<ul class="a-sec-ul">
			 		<li>如果你是一个怕麻烦的水族爱好者</li>
			 		<li>陶粒砂便是优先选择</li>
			 	</ul>
			 	
			 </div>
			 
			<div class="a-thir">

				<ul class="a-thir-ul">
					<li>这是一种水草类专用的底砂却不碱化水质</li>
			    	<li>适合饲养活体鱼虾螺蟹,不会粉化可以</li>
			    	<li>一直使用,保证鱼缸的水质清澈,</li>
				</ul>
		    	
			</div>
			
			<div class="a-four">
				<p>简单造景、美观、寿命永久不浑水</p>
				<p>足以让你选择它。</p>
				<div class="bg-shadow"></div>
			</div>
		</div>
		<div class="rect">
			<div class="rect-inline">
				<div class="rect-font">
					<span>陶粒砂子</span><span class="useTell">使用指南</span>
				</div>
			</div>
			<p class="rect-logo">&or;</p>
		</div>
		<div class="bigImg">
			<img src="./../../assets/activity/bigImg.jpg" alt="" class="big-detail">
		</div>
		<div class="noNuty">
			
			<p class="duty-fir">免责声明</p>
			<p>{{msgArr[0].var1}}</p>
			<p>{{msgArr[0].var2}}</p>

		</div>
	<!-- 评论区 -->
		<div class="comment">
			<div class="comm-title">
				<span class="c-t-left">评论</span>
				<span class="c-t-right" @click="gotoComment()">查看全部<span class="gt">&gt;</span></span>
			</div>
			<div class="comm-user">
				<div class="img-user"><img v-bind:src="msgArr[0].user_img" alt=""></div>
				<div class="user-font">
					<div class="user-top">
						<div class="username">{{msgArr[0].username}}</div>
						<div class="user-date">{{msgArr[0].commentTime}}</div>
					</div>
					<div class="user-foot">{{msgArr[0].commentC}}</div>
				</div>
			</div>
		</div>
		

		<div class="footer">
			<div class="footer-left" @click="changeC(alC)">
				<img v-bind:src="msgArr[0].star_white" alt="" class="star" ref="star">
				<span class="alCollect">{{alC}}</span>
			</div>
			<div class="footer-right" @click="eroll()">立即报名</div>
		</div>
		<br>
		<br>
		<br>
		<br>
  </div>
</template>

<script>
export default {
  name: 'activityDetail',
  data(){
	  return {
	  	from:"Separate",
	  	alC:"收藏",
	  	 
	  	msgArr:[
	  		{
	  			titleImg:require("./../../assets/activity/detailImg.jpg"),
	  			title:"厦门首届《环保小天使》少儿电视车模大赛区域赛区海选",
	  			time:`2018-06-24&nbsp;00:00:00&nbsp;至&nbsp;2018-08-31&nbsp;00:00:00`,
	  			timeDown:"144",
	  			adress:"全国",
	  			age:"7-18",
	  			phone:"18814137320",
	  			type:"夏令营",
	  			price:"￥7800",
	  			personDown:"99",
	  			activityImg:require("./../../assets/activity/bigImg.jpg"),
	  			var1:`1.如果你无法简洁的表达的你的想法，我们不管你的我们不管你的我们不管你的我们不管你的`,
	  			var2:`2.如果你无法简洁的表达的你的想法，我们不管你的我`,
	  			user_img:require("./../../assets/mall/user_logo.jpg"),
	  			username:"用户名",
	  			commentTime:"2018/11/30",
	  			commentC:`
	  				如果你无法简洁的表达的你的想法，我们不管你的我们不管你的我们不管你的我们不管你的
	  			`,
	  			star_white:require("./../../assets/activity/white_star.jpg"),
	  			star:require("./../../assets/activity/start.jpg"),

	  		}
	  	]
   	 }
  },
  methods:{
  	 changeC(content){
  	 	if(content=="收藏"){
  	 		alert("数据流流入后台添加收藏");
  	 		this.alC="已收藏";
  	 		this.$refs.star.setAttribute("src",this.msgArr[0].star);
  	 	}else{
  	 		alert("数据流流入后台取消收藏");
  	 		this.alC="收藏";
  	 		this.$refs.star.setAttribute("src",this.msgArr[0].star_white)
  	 	}
  	 },

  	 gotoWhere(){

  	 	this.$router.push({
  	 		path:`/${this.from}`,
  	 		query:{
  	 			is_page:"ActivityDetail",
  	 		}
  	 	})
  	 },
  	 eroll(){
  	 	this.$router.push({
  	 		path:"/OKOrder"
  	 	})
  	 },
  	 gotoComment(){
  	 	this.$router.push({
  	 		path:"/Comment"
  	 	})
  	 }
  },
  mounted(){
  	document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop=0;
  	if(this.$route.query.order)return false;
  	this.from=this.$route.query.from;
  	let spt_obj=this.$route.query.obj;
  	this.msgArr[0].type=spt_obj.type;
  	console.log(`你点击了${spt_obj.type}中的索引为${spt_obj.index}的谁`)
  	 
  }
  
}
</script>

 
<style scoped>
 .ErollHead{
 	width:100%;
 	height:55px;
 	background:#02b0b9;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content:center;
 	position:relative;
  box-shadow:-1px 0px 20px 1px #ccc;
 }
 .ErollImg{
 	position:absolute;
 	left:15px;
 	height:35px;
 }
 .ErollFont{
	color:#fff;
	font-size:20px;
 }
 .titleImg{
 	width:100%;
 }
 .titleImg > img{
 	width:100%;
 }
 .content{
 	width:100%;
 	padding:15px;
 }
 .con-ul{
 	width:100%;

 }
  .con-ul > li{
  	width:100%;
  	display:flex;
  	display:-webkit-flex;
  	align-items: center;
  	margin-top:15px;
  }
  .con-ul > li > p{
  	width:6%;
  	margin-right:10px;
  	height:18px;
  	display:flex;
  	display:-webkit-flex;
  	align-items: center;
  	justify-content: center;
  }
  .separate{
  	width:100%;
  	height:12px;
  	background:#F0F0F0;
  }
  .activeTime{
  	font-size:13px;
  }
  .c-title{
  	margin-bottom:20px;
  }
  .c-img{
  	height:18px;
  }
 .summerA{
 	width:100%;
	padding:15px;
 	font-size:14px;
 	position:relative;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 }
 .summer-price{
 	 margin-left: 2%;
 	 margin-right:1%;
 	 color:#f40;
 	 
 }
 .changeF{
 	font-size:18px;
 }
 .eroll{
 	padding:2px 20px;
 	/*渐变效果*/
 	background: -webkit-linear-gradient(left, #005eb8 , #01adb7); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(right, #005eb8, #01adb7); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(right, #005eb8, #01adb7); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #005eb8 , #01adb7); /* 标准的语法 */
    color:#fff;
    font-size:17px;
    border-radius:100px;
    position:absolute;
    right:15px;
 }
 @media screen and (max-width: 330px){
 	.eroll{
 		 padding:2px 10px;
 	}
 }
 @media screen and (min-width: 360px){
 	.summer-price{
 		margin-right:2%;
 		margin-left:4%;
 	}
 }
 .a-detail{
 	padding:15px;
 }
 .ac-title{
 	font-size:18px;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 }
 .bg{
 	width:45px;
 	height:0;
 	box-shadow:0px 0px 10px 1px coral;
 	margin-left:-55px;
 }
 .a-fir{
 	width:100%;
 	margin-top:35px;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content:center;
 	
 	color:#fff;
 }
 .a-fir-span{
 	padding:0px 8px;
	background:#000;
	font-size:18px;
	font-weight:bold;
 }
 .a-sec,
 .a-thir{
 	width:100%;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content:center;
 	margin-top:25px;
 }
 .a-sec{
 	margin-top:20px;
 }
 .a-sec-ul > li,
 .a-thir-ul > li{
 	width:100%;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content:center;
 }
 .a-four > p{
 	width:100%;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content:center;
 }
 .a-sec,
 .a-thir,
 .a-four{
 	font-size:13px;
 	line-height:20px;
 }
 .a-four{
 	margin-top:25px;
 	color:#62ad36;
 }
 .bg-shadow{
 	width:100%;
 	height:0px;
 	background:red;
 	margin-top:-40px;
 	box-shadow:0px 0px 100px 25px #beea9e;
 }
 .rect{
 	width:165px;
 	height:65px;
 	background:#326a0f; 
 	margin:0 auto;
 	margin-top:80px;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content:center;
 	position:relative;
	
 }
 .rect-inline{
 	width:153px;
 	height:53px;
 	background:#6eba34;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content:center;
 	color:#fff;
 	
 }
 .rect-logo{
 	position:absolute;
 	background:#fff;
 	border-radius:100%;
 	padding:0 5px;
 	bottom:3px;
 	transform:scale(0.5);
 }
.bigImg{
	width:100%;
	margin-top:40px;
}
.bigImg > img{
	width:100%;
}
.noNuty{
	padding:15px 15px 10px 15px;
	line-height:30px;
	font-size: 14px;
	border-bottom:1px solid #ccc;
	border-radius:1px;
}
.duty-fir{
	font-size:17px;
	margin-bottom:6px;
	font-weight:bold;
}
.comment{
	width:100%;
	margin-top:15px;
}
.comm-title{
	width:100%;
	padding-left:15px;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	position: relative;
}
.c-t-right{
	position:absolute;
	right:15px;
}
.c-t-right{
	font-size: 13px;
	color:#ADADAD;
}
.gt{
	margin-left:10px;
	font-size:18px;
}
.c-t-left{
	font-size: 18px;
	font-weight:bold;
}
.comm-user{
	/*width:96%;*/
	margin-top:10px;
	margin-left:15px;
	padding:5px 15px 15px 0;
	border-bottom:1px solid #ccc;
	border-radius:1px;
	display:flex;
 	display:-webkit-flex;
}
.img-user{
	width:15%;
	position:relative;
}
.user-font{
	width:85%;
	line-height:25px;
	font-size:13px;
}
.img-user > img{
	width:80%;
	border-radius: 100%;
}
.user-top{
	margin-top:3px;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
	position:relative;

}
.user-date{
	position: absolute;
	right:0;
	font-size:12px;
	color:#ccc;
}
.footer{
	width:100%;
	height:55px;
	background:red;
	position:fixed;
	bottom:0;
	z-index:102;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
}
.footer-left{
	width:28%;
	height:55px;
	background:#fff;
	border-top:1px solid #ccc;
	border-radius:1px;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
}
.footer-right{
	width:72%;
	height:55px;
	background:#02b0b9;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	color:#fff;
 	font-size:18px;
}
.star{
	margin-right:5px;
}
</style>