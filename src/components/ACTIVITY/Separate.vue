<template>
  <div class="separate">
		<div class="header">
			<img src="./../../assets/activity/blue_left.jpg" alt="" class="blueLeft" @click="gotoActivityHome()">
			<div class="positiion">
				<img src="./../../assets/activity/position.jpg" alt="" class="pLogo" @click="gotoPositionS()">
				<span class="positiionFont" @click="gotoPositionS()">{{pos}}</span>
			</div>
		</div>

		<nav class="active">
			<ul class="a-ul" ref="a-ul">
				<li v-for="(value,index) in activeArr" v-bind:ref="index" @click="clickWho(index)">
					<p class="a-li-p-img">
						<img v-bind:src="value.img" alt="">
					</p>
					<p class="a-li-font">{{value.navMsg}}</p>
				</li>

				<!-- <li>
					<p class="a-li-p-img">
						<img src="./../../assets/activity/active.png" alt="">
					</p>
					<p class="a-li-font">周边户外</p>
				</li>
				<li>
					<p class="a-li-p-img">
						<img src="./../../assets/activity/active.png" alt="">
					</p>
					<p class="a-li-font">冬夏令营</p>
				</li>
				<li>
					<p class="a-li-p-img">
						<img src="./../../assets/activity/active.png" alt="">
					</p>
					<p class="a-li-font">演出票务</p>
				</li>
				<li>
					<p class="a-li-p-img">
						<img src="./../../assets/activity/active.png" alt="">
					</p>
					<p class="a-li-font">课程体验</p>
				</li>
				<li>
					<p class="a-li-p-img">
						<img src="./../../assets/activity/active.png" alt="">
					</p>
					<p class="a-li-font">沙龙讲座</p>
				</li>
				<li>
					<p class="a-li-p-img">
						<img src="./../../assets/activity/active.png" alt="">
					</p>
					<p class="a-li-font">春夏令营</p>
				</li>
				<li>
					<p class="a-li-p-img">
						<img src="./../../assets/activity/active.png" alt="">
					</p>
					<p class="a-li-font">秋夏令营</p>
				</li>
				  -->
			</ul>
		</nav>







  		<div class="addHeight">
   	 		<ul class="no-floatL">
				<li v-for="(val,index) in msgArr" @click="gotoActivityDetail(index)">
					<router-link to="" class="tellMsgShow-router">
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
  name: 'separate',
  data(){
	  return {
	  	from:"ActivityHome",
	  	pos:"全国",
	  	activeArr:[
	  		{
	  			img:require("./../../assets/activity/child.png"),
	  			navMsg:"亲子游"
	  		},

	  		{
	  			img:require("./../../assets/activity/active.png"),
	  			navMsg:"周边户外"
	  		},

	  		{
	  			img:require("./../../assets/activity/cold.png"),
	  			navMsg:"冬夏令营"
	  		},

	  		{
	  			img:require("./../../assets/activity/show.png"),
	  			navMsg:"演出票务"
	  		},

	  		{
	  			img:require("./../../assets/activity/book.png"),
	  			navMsg:"课程体验"
	  		},

	  		{
	  			img:require("./../../assets/activity/shalong.png"),
	  			navMsg:"沙龙讲座"
	  		},

	  		{
	  			img:require("./../../assets/activity/active.png"),
	  			navMsg:"慈善公益"
	  		},
	  		{
	  			img:require("./../../assets/activity/active.png"),
	  			navMsg:"其它"
	  		},
	  	],
	  	msgArr:[
	  		{
	  			  recruit:"香港拓展活动7天6夜正在火爆招募中...",
			  	  dataDown:"15天后截止",
			  	  price:6988,
			  	  img:require("./../../assets/home/twoBaby.jpg"),
			  	  
	  		},
	  		{
	  			  recruit:"香港拓展活动7天6夜正在火爆招募中...",
			  	  dataDown:"15天后截止",
			  	  price:6988,
			  	  img:require("./../../assets/home/twoBaby.jpg"),
			  	 
	  		},
	  		{
	  			  recruit:"香港拓展活动7天6夜正在火爆招募中...",
			  	  dataDown:"15天后截止",
			  	  price:6988,
			  	  img:require("./../../assets/home/twoBaby.jpg"),
			  	 
	  		},
	  		{
	  			  recruit:"香港拓展活动7天6夜正在火爆招募中...",
			  	  dataDown:"15天后截止",
			  	  price:6988,
			  	  img:require("./../../assets/home/twoBaby.jpg"),
			  	   
	  		},
	  	],
	  	type:"亲子游"
	  }
    
  },
  methods:{
  	// 请求活动类表封装函数
  	axiosToSpt:function(index){
  		if(index>2){
  			alert("建设中");
  			return false;
  		}
  		if(sessionStorage.getItem("id"+index)){
  				for(let arrI in this.msgArr){
	  					this.msgArr[arrI].recruit=`页面加载时请求的数据id${sessionStorage.getItem("id"+index)},用户进页面默认展示
	  						`
	  				}
  			}else{

  				this.$axios.get("http://123.206.202.40:82/index.php/api/Index/getSwriper")
	  			.then(reqData=>{
	  			let id=reqData.data[index].id;
	  			for(let arrI in this.msgArr){
	  					this.msgArr[arrI].recruit=`页面加载时请求的数据id${id},用户进页面默认展示
	  						`
	  				   }
	  				sessionStorage.setItem("id"+index,reqData.data[index].id)
	  				console.log(reqData)
	  			})

  			}
  	},
  	changeType(type){
  		for(let arrI in this.msgArr){
	  		  this.type=type;
	  						
	  	}
  	},
  	clickWho(index){
  		if(index>4){
  			this.$refs["a-ul"].style.left="-50%"
  		}
  		for(let val in this.$refs){
  			// Object.defineProperty(this.$refs,"a-ul",{
  			// 	enumerable:false
  			// })
  			 if(val!="a-ul"){
  			 	this.$refs[val][0].className=""
  			 }
  		}
  		if(index!="0"){
  			this.activeArr[0].img=require("./../../assets/activity/child_white.png")
  		}else{
  			this.activeArr[0].img=require("./../../assets/activity/child.png")
  		}
  		this.$refs[index][0].className="addColor";
  		// 对用户点击了哪个进行判断
  		switch(index){
  			case 0:
  			this.axiosToSpt(0);
  			this.changeType("亲子游");
  			break;
  			case 1:
  			this.axiosToSpt(1); 
  			this.changeType("周边户外");
  			break;
  			case 2:
  			this.axiosToSpt(2);
  			this.changeType("冬夏令营");
  			break;
  		}
  		// 这边还可以写其它的选项
  		this.$store.state.obj_spt.index=index;
  		 
  	},
  	gotoActivityHome(){
  		switch(this.from){
  			case "ActivityHome":
	  			this.$router.push({
	  			path:"/ActivityHome"
  		    });
	  		break;

	  		case "SearchMore":
	  			this.$router.push({
	  			path:"/SearchMore"
  		    });
	  		break;
	  		default:
	  		this.$router.push({
	  			path:"/ActivityHome"
  		    });
  		}
  		
  	},
  	gotoActivityDetail(index){
  		switch(index){
  			case 0:
  			this.$router.push({
  				path:"/ActivityDetail",
  				query:{
  					obj:{
  						type:this.type,
  						index:index,

  					},
  					from:"Separate"
  					
  				}
  			});
  			break;
  			case 1:
  			this.$router.push({
  				path:"/ActivityDetail",
  				query:{
  					obj:{
  						type:this.type,
  						index:index
  					},
  					from:"Separate"
  					
  				}
  			});
  			break;
  			case 2:
  			this.$router.push({
  				path:"/ActivityDetail",
  				query:{
  					obj:{
  						type:this.type,
  						index:index
  					},
  					from:"Separate"
  					
  				}
  			});
  			break;
  		}

  	},
  	gotoPositionS(){
  		this.$router.push({
  			path:"/PositionS",
  			query:{
  				page_msg:"Separate"
  			}
  			
  		})
  	}
  	 

  },
  mounted(){
  	// 将从哪里来的页面信息储存起来
  	this.from=this.$route.query.from;
  	this.pos=this.$store.state.position;
  	let down_index = this.$store.state.obj_spt.index;
  	switch(this.$route.query.is_page){
   		case "ActivityHome":
   		let up_index = this.$route.query.index;	
	  	this.axiosToSpt(up_index);
	  	this.clickWho(up_index);
   		break;

   		case "ActivityDetail":
	  	this.axiosToSpt(down_index);
	  	this.clickWho(down_index);
   		break;
   		default:
	  	this.axiosToSpt(down_index);
	  	this.clickWho(down_index);
   }
   //对ul进行绑定移动
 
   		const ulEle=this.$refs["a-ul"];
   		let startLeft=0,
   			dis_s=0,
   			dis_m=0,
   			dis=0;
   		function doc_move(e){
   			dis_m=e.changedTouches[0].pageX;
   			dis=dis_m-dis_s;
   			ulEle.style.left=startLeft+dis+"px";
   			let ulLeft=parseFloat(ulEle.style.left);
   			if(ulLeft>0){
   				ulEle.style.left=0;
   			}
   			if(ulLeft<=-50){
   				 
   				ulEle.style.left="-50px";
   			}
   			 
   			return false;
   		}


   		function doc_end(e){
   			document.body.removeEventListener("touchmove",doc_move,false);
   			document.body.removeEventListener("touchend",doc_end,false);
   			
   			return false;
   		}

  		 function ul_start(e){
  		 	startLeft=parseFloat(ulEle.style.left);
  		 	dis_s=e.changedTouches[0].pageX;
  		 	document.body.addEventListener("touchmove",doc_move,false)
  		 	document.body.addEventListener("touchend",doc_end,false);
  		 	return false;
   		}
  		ulEle.addEventListener("touchstart",ul_start,false)
 
   
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
	/*height:50px;*/
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
.active{
	width:100%;
	height:65px;
	/*background:coral;*/
	overflow:auto;
	position: relative;
}
.a-ul{
	width:150%;
	height:65px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	position:absolute;
}
::-webkit-scrollbar{
	width:0;
	height:0;
	overflow:hidden;
}
.a-ul > li{
	width:17%;
	height:65px;
	background:#000;
	text-align:center;
	overflow: hidden;
	color:#fff;
}

.a-li-p-img{
	height:35px;
	padding-top:15px;
	/*display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;*/
}
.a-li-p-img > img{
	height:30px;
}
.a-li-font{
	height:30px;
	
	font-size:12px;
	/*transform:scale(0.8);*/
	display:flex;
	align-items: center;
	display:-webkit-flex;
	justify-content: center;
}
.a-ul > .addColor{
	color:#000;
	background:#84dfe2;
}
</style>