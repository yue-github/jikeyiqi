<template>
  <div class="Announce">
   		 <div class="ErollHead">
	  		 <img src="./../../assets/announce/blue_left.jpg" alt="" class="ErollImg" @click="gotoAnnounceList()">
	   	 	 <span class="ErollFont">通告详情</span>
 		 </div>
		 <div class="center">

				<ul class="ul-fir">
					<li v-html="msg[0].title" class="fir-title"></li>
					<li class="fir-tc">
						<span v-html="msg[0].type" class="fir-type"></span><span v-html="msg[0].condition" class="fir-condition"></span>
					</li>
					<li>
						发布时间: <span v-html="msg[0].data" class="fir-data"></span>
					</li>
					<li>
						报名截止: <span v-html="msg[0].endTime" class="fir-endTime"></span>
					</li>
					<li>
						招募地址: <span v-html="msg[0].adress" class="fir-adress"></span>
					</li>
					<li>
						联系方式: <span v-html="msg[0].concat" class="fir-concat"></span>
					</li>
				</ul>
				
				<ul class="ul-sec">
					<li class="sec-detail" v-html="msg[1].content"></li>
					<li>
							      <p v-html="msg[1].movy"></p>
					</li>
					<li>
						出品公司:{{msg[1].company}}
					</li>
					<li>
						制作团队:{{msg[1].made}}
					</li>
					<li>
						总制片人: <span v-html="msg[1].mainMade"></span>
					</li>
					<li>
						题材: <span v-html="msg[1].material"></span>
					</li>
					<li>
						开机时间: <span v-html="msg[1].openTime"></span>
					</li>
					<li>
						拍摄周期: <span v-html="msg[1].cycle"></span>
					</li>
					<li>
						拍摄地点: <span v-html="msg[1].adress"></span>
					</li>
					<li>
						选角导演: <span v-html="msg[1].director"></span>
					</li>
					<li>
						选角团队: <span v-html="msg[1].team"></span>
					</li>
				</ul>
				
				<ul class="ul-thir">
					<li>人物小传:</li>
					<li>角色:</li>
					<li>
						1.<span v-html="msg[2].role1.role"></span>
					</li>
					<li>
						要求:{{msg[2].role1.condition}}
					</li>
					<li>
						年龄:<span v-html="msg[2].role1.age"></span>
					</li>
					<li>
						身高:<span v-html="msg[2].role1.height"></span>
					</li>
					<li>
						体重:<span v-html="msg[2].role1.weight"></span>
					</li>
				</ul>

				<ul class="ul-four">
					<li>
						2.<span v-html="msg[2].role2.role"></span>
					</li>
					<li>
						要求:&nbsp;&nbsp;{{msg[2].role2.condition}}
					</li>
					<li>
						年龄:<span v-html="msg[2].role2.age"></span>
					</li>
					<li>
						身高:<span v-html="msg[2].role2.height"></span>
					</li>
					<li>
						体重:<span v-html="msg[2].role2.weight"></span>
					</li>
				</ul>
				<p class="marginLeft-p">招募角色</p>
				<ul class="ul-five" v-for="val in msg[3].emptyRole">

					<li>
						<span class="five-role">{{val.title}}</span>
						<img v-bind:src="imgVal" alt="" v-for="imgVal in val.img" class="forImg">
						<img src="./../../assets/announce/eroll.jpg" alt="" class="five-employImg">
					</li>
					<li>
						<span class="five-span-fir">
							性别:&nbsp;&nbsp;{{val.sex}}
						</span>
						<span class="five-span">
							年龄:&nbsp;&nbsp;{{val.age}}
						</span>
					</li>
					<li>
						<span class="five-span-fir">
							身高:&nbsp;&nbsp;{{val.height}}
						</span >
						<span class="five-span">
							片酬:&nbsp;&nbsp;{{val.price}}
						</span>
					</li>
					<li>
						<span class="five-span-fir">说明:&nbsp;&nbsp;形象清纯,纯天然的漂亮女孩</span>
					</li>
				</ul>
		 </div>
		 <div class="AlreadyEn">
				<div class="al-top">
					<span class="alErollFont">已经报名童星&nbsp;{{msg[4].count}}&nbsp;人</span>
					<span class="lookAll">
						查看全部<span class="gt">&gt;</span>
					</span>
				</div>
				<div class="al-bott">
					<ul class="al-b-ul">
						<li v-for="val in msg[4].alErollArr"><img v-bind:src="val" alt=""></li>
					</ul>
				</div>
		 </div>
		 <div class="finaly">
		 	<div class="f-left">
		 		<div class="tip" @click="gotoTip()">
		 			<img v-bind:src="msg[5].tipImg" class="tip-img"><span>举报</span>	
		 		</div>
		 		<div class="collect" @click="collect()">
		 			<img v-bind:src="msg[5].collectImg" class="col-img"><span>&nbsp;{{msg[5].collect}}</span>
		 		</div>
		 	</div>
		 	<div class="f-right" @click="gotoEroll(canEroll)">{{msg[5].eroll}}</div>
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
export default {
  name: 'Announce',
  data(){
	  return {
	  canEroll:true,
	  blue:require("./../../assets/announce/start.jpg"),
	  white:require("./../../assets/activity/white_star.jpg"),
	  msg:[
	  		{
	  			title:"40集大型电视连续剧招募小演员",
	  			type:"影视组讯",
	  			condition:"需要面试",
	  			data:"2018-03-27 16:06:05",
	  			endTime:"还剩30天",
	  			adress:"全国",
	  			concat:"VIP童星报名后可见"
	  		},
	  		{
	  			movy:"猪年贺岁片《八戒传说》",
	  			company:"星面孔影视传媒公司 耳东影业 爱奇艺影业",
	  			made:"由好莱坞,战狼2,美人鱼部分精英团队制作",
	  			mainMade:"美人鱼郑总",
	  			material:"神话 爱情 喜剧",
	  			openTime:"2018年6月",
	  			cycle:"4个月",
	  			adress:"江西黎川",
	  			director:"吴同岳",
	  			team:"深圳么么哒选角工作室",
	  			content:"通告详情"
	  		},
	  		{
	  			role1:{
	  				role:"嫦娥",
	  				condition:"女替身3名,形象清纯,纯天然的漂亮女孩",
	  				age:"18-20岁",
	  				height:"173-178cm",
	  				weight:'60公斤左右'
	  			},
	  			role2:{
	  				role:"七仙女",
	  				condition:"七个纯真善良的女孩，调皮可爱,有灵气。皮肤白白的漂亮小女孩",
	  				age:"14-17岁",
	  				height:"160-170cm",
	  				weight:'45公斤左右'
	  			},

	  		},
	  		{
	  			emptyRole:
	  			[
	  				{
		  				role:"角色1",
		  				employBlue:require("./../../assets/announce/eroll.jpg"),
		  				img:[
		  					require("./../../assets/announce/sex.jpg"),
		  				],
		  				sex:"女",
		  				age:"10-18岁",
		  				height:"173cm-178cm",
		  				reward:"面议",
		  				tell:"形象清纯,纯天然的漂亮女孩"

	  				},

	  				{
		  				role:"角色2",
		  				employBlue:require("./../../assets/announce/eroll.jpg"),
		  				img:[
		  					require("./../../assets/announce/sex.jpg"),
		  					require("./../../assets/announce/boy.jpg"),
		  				],
		  				sex:"女",
		  				age:"10-18岁",
		  				height:"173cm-178cm",
		  				reward:"面议",
		  				tell:"形象清纯,纯天然的漂亮女孩"

	  				}
	  			]
	  		},
	  		{
	  			count:"10",
	  			alErollArr:[
	  				 require("./../../assets/mall/user_logo.jpg"),
	  				 require("./../../assets/mall/user_logo.jpg"),
	  				 require("./../../assets/mall/user_logo.jpg"),
	  				 require("./../../assets/mall/user_logo.jpg"),
	  				 require("./../../assets/mall/user_logo.jpg"),
	  				 require("./../../assets/mall/user_logo.jpg"),
	  				 require("./../../assets/mall/user_logo.jpg"),
	  				 require("./../../assets/mall/user_logo.jpg"),
	  				 require("./../../assets/mall/user_logo.jpg"),
	  				 require("./../../assets/mall/user_logo.jpg"),
	  			]
	  		},
	  		{
	  			tipImg:require("./../../assets/announce/tip_img.jpg"),
	  			collectImg:require("./../../assets/activity/white_star.jpg"),
	  			 
	  			collect:"收藏",
	  			eroll:"立即报名"
	  		}

	  	],
	  	announceID:""

	  }
    
  },
  methods:{
  	gotoAnnounceList(){
  		this.$router.push({
  			path:"/AnnounceList"
  		})
  	},
  	gotoEroll(boo){
  		if(boo){
  			this.$router.push({
  				path:"/Enroll"
  			})
  		}
  	},
  	gotoTip(){
  		this.$router.push({
  			path:"/Tip"
  		})
  	},
  	collect(){
  		if(this.msg[5].collect=="收藏"){
  			this.msg[5].collect="已收藏";
  			// 可优化，请求资源储存起来。
  			this.msg[5].collectImg=this.blue;
  			 
  			// 优化时可以将这些收藏得函数提到状态管理，到时传参调用
  			this.$axios.post("http://123.206.202.40:82/index.php/api/user/addCollection",{
  				token:this.$store.state.token,
  				type:"notice",
  				contentid:this.announceID

  			})
  			.then(data=>{
  				// console.log(data)
  			})

  		}else{
  			this.msg[5].collect="收藏";
  			this.msg[5].collectImg=this.white;
  			this.$axios.post("http://123.206.202.40:82/index.php/api/user/delCollection",{
  				token:this.$store.state.token,
  				type:"notice",
  				contentid:this.announceID

  			})
  			.then(data=>{
  				// console.log(data)
  			})
  		}
  	}
  },
  mounted(){
  	document.documentElement.scrollTop=0;
  	 
  	// 对传，过来的数据进行处理
  	console.log(this.$route.query)
  	 this.announceID=this.$route.query.announceID+"";
  	 console.log(this.announceID)
  	 if(!this.announceID)return false;
  	 this.$axios.post("http://123.206.202.40:82/index.php/api/notice/getNoticeInfo",{
  	 	id:this.announceID
  	 }) 
  	  .then(msg=>{
  	  	console.log(msg)
  	  	 	this.msg[0].adress=msg.data.address;
  	  	 	this.msg[0].title=msg.data.title;
  	  	 	this.msg[0].type=msg.data.film;
  	  	 	this.msg[0].data=msg.data.createtime;
  	  	 	msg.data.isPart?this.msg[0].condition="需要面试":this.msg[0].condition="无需面试";
  	  	 	this.msg[1].openTime=msg.data.time;

  	  	 	this.msg[1].adress=msg.data.place;
  	  	 	
  	  	 	this.msg[1].content=msg.data.content;
  	  	 	this.msg[0].endtime=msg.data.endtime;
  	  	 	this.msg[3].emptyRole=msg.data.job;
  	  	 	 if(msg.data.isCollection){
  	  	  
  	  	 	 	this.msg[5].collect="已收藏";
  	  	 	 	this.msg[5].collectImg=this.blue;
  	  	 	 }else{
  	  	 	  
  	  	 	 	this.msg[5].collect="收藏";
  				this.msg[5].collectImg=this.white;
  	  	 	 }
  	  	  
  	  })
  	  console.log(typeof this.announceID)
  	 
  }



}
</script>

 
<style scoped>
.AlreadyEnroll{
	width:100%;
}
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
font-size:19px;
}
.center{
	width:100%;

}
.ul-fir,
.ul-sec,
.ul-thir,
.ul-four,
.ul-five{
	width:90%;
	padding: 4%;
	border-bottom:1px solid #ccc;
	border-radius:1px;
}
.ul-fir > li,
.ul-sec > li,
.ul-thir > li,
.ul-four > li,
.ul-five > li{
	display:flex;
	display:-webkit-flex;
	align-items: center;
	margin-bottom:20px;
	 flex-wrap: wrap;
 
}
.ul-sec,
.ul-thir,
.ul-four,
.ul-five{
	border:none;
}
.fir-title{
	font-size: 20px;
}
.fir-type,
.fir-condition{
	line-height:20px;
	padding:2px 3px;
	border:1px solid #ccc;
	font-size:13px;
	margin-right:10px;
	border-radius:3px;
	color:#969696;
}
.fir-tc{
	margin-bottom:10px;
}
.fir-data,
.fir-endTime,
.fir-adress{
	color:#969696;
	margin-left:18px;
}
.fir-concat{
	color:#fc8d72;
	margin-left:18px;
	/*font-size:15px;*/
}

.ul-sec > li > span,
.ul-thir > li > span,
.ul-four > li > span{
	margin-left:10px;
	 
}
.sec-detail{
	font-size:22px;
}
.ul-five{
	width:92%;
	background:#f1f1f1;
	margin:0 auto;
	margin-top:15px;
	position:relative;
	padding-bottom:1px;
	/*margin:15px 15px 0 15px;*/
}
.marginLeft-p{
	margin-left:15px;
	font-size:20px;
}
.five-employImg{
	position:absolute;
	right:0;
	height:45px;
}
.five-role{
	font-weight:bold;
	font-size:18px;
	margin-right:10px;
}
.forImg{
	margin-right:5px;
}
.five-span{
	position:absolute;
	left:60%;
}
.AlreadyEn{
	 
	margin-top:20px;
}
.alErollFont{
	font-size:19px;
}
.al-top{
	width:100%;
	padding:0 15px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	position: relative;
}
.lookAll{
	position:absolute;
	right:15px;
	font-size:14px;
}
.al-b-ul{
	width:100%;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	flex-wrap:wrap;
}
.al-b-ul > li{
	width:20%;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	margin-top:10px;
}
.al-b-ul > li > img{
	width:88%;
	border-radius:100%;

}
.al-bott{
	padding:10px;
}
.gt{
	margin-left:5px;
	font-size:20px;
}
.finaly{
	width:100%;
	height:55px;
	max-width:640px;
	min-width:300px;
	display:flex;
	display:-webkit-flex;
	position: fixed;
	background:#fff;
	bottom:0px;
	z-index:101;
}
.f-left,
.f-right{
	width:50%;
	height:55px;
	display:flex;
	display:-webkit-flex;
}
.f-right{
	align-items: center;
	position: relative;
	background:#02b0b9;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	font-size:18px;
}
.tip,
.collect{
	width:50%;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
}
.f-left{
	border-top:1px solid #ccc;
	border-radius: 1px;
}
.tip{
	border-right:1px solid #ccc;
}
.tip > img,
.collect > img{
	height:25px;
}
</style>
