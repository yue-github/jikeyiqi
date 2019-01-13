<template>
  <div class="person">
   		<header class="header">
			我的
   		</header>
		<div class="user">
			<div class="userImg">
				<img src="./../assets/mall/user_logo.jpg" alt="" class="user-img">
			</div>
			
			<div class="username">用户名</div>
			<div class="user-set">设置</div>
		</div>
		<div class="myChild">
			<div class="mychild-top">
				<span>我的萌娃</span>
				<div class="myChild-vip">
					<img src="./../assets/person/capVip.jpg" alt="" class="myChild-cap">
					<span>未开通会员</span>
					<img src="./../assets/home/backRight.jpg" alt="">
				</div>
			</div>	
			<div class="mychild-foot">
				萌娃添加后才可以报名通告参加活动
			</div>	
		</div>
		<!-- 添加萌娃模块 -->
		<div class="addDeleteChild">
			<ul class="addDeleteChild-ul" ref="addUlWidth">

				<li v-for="(val,index) in childMsg">
					<div class='child-name'>

						<img src="./../assets/person/gilr.jpg" alt="" class="childname-img">
						<div class="child-the-name">
							<p class="cuteName">{{val.name}}</p>
							<p class="dataComplete">资料完成度&nbsp;{{val.rate}}</p>
						</div>
						<p class="deleteChild" @click="deleteCar(index)">-</p>
					</div>
					<p class="child-msg">
						<ul class="child-msg-ul">
							<li class="child-msg-left">
								<p>{{val.images}}</p>
								<p class="child-msg-font">照片</p>
							</li>

							<li>
								<p>{{val.cardmodels}}</p>
								<p class="child-msg-font">模卡</p>
								
							</li>

							<li class="child-msg-right">
								<p>{{val.videos}}</p>
								<p class="child-msg-font">视频</p>
								
							</li>
						</ul>
					</p>
					<div class="addAndLook" @click="goEditChildHome(index)">
						<img src="./../assets/person/lookUp.jpg" alt="" class="child-img">
					</div>
					
				</li>
				


				<li class="addChild-li" @click="gotoAddCuteChild()">
					<div class="addChild-logo">
						<p class="addChild-logo-p">+</p>
						<p class="addCute">添加萌娃</p>
					</div>	
				</li>
			</ul>
		</div>
		<div class="user-nav">
			<ul class="user-nav-ul">
				<li @click="goMy(1)" class="redMsg-li">
					<div class="seeRed">
						<img src="./../assets/person/message.jpg" alt="" class="nav-img-fir">
						<div class="redMsg" ref="redMsg">{{msgCount}}</div>
					</div>
					
					<p>
						我的消息
					</p>
					
				</li>

				<li @click="goMy(2)">
					<img src="./../assets/person/noKnow.jpg" alt="">
					<p>我的余额</p>
				</li>

				<li @click="goMy(3)">
					<img src="./../assets/person/tell.jpg" alt="">
					<p>我的通告</p>
				</li>

				<li @click="goMy(4)">
					<img src="./../assets/person/active.jpg" alt="">
					<p>我的活动</p>
				</li>
			</ul>
		</div>
		<div class="otherDo">
			<ul class="otherDo-ul">
				<li>
					<div class="otherDo-left">
							<img src="./../assets/person/recommond.jpg" alt="" class=" right-now">
							<span class="otherDo-span">推荐给好友</span>
					</div>
					<div class="otherDo-right">
							<span class="otherDo-span">这么好用推荐给好友吧</span>
							<img src="./../assets/home/backRight.jpg" alt="" class="backRight">
					</div>
				</li>

				<li>
					<div class="otherDo-left">
							<img src="./../assets/person/star.jpg" alt="">
							<span class="otherDo-span">我的收藏</span>
					</div>
					<div class="otherDo-right">
							<span class="otherDo-span">收藏的活动/通告/童星</span>
							<img src="./../assets/home/backRight.jpg" alt="" class="backRight">
					</div>
				</li>

				<li @click="gotoAddress()">
					<div class="otherDo-left">
							<img src="./../assets/person/adress.jpg" alt="">
							<span class="otherDo-span addWidth">收获地址</span>
							<span class="adress-span">{{this.address}}</span>
					</div>
					<div class="otherDo-right">
							<span class="otherDo-span"></span>
							<img src="./../assets/home/backRight.jpg" alt="" class="backRight">
					</div>
				</li>

				<li class="otherDo-last-li" @click="gotoJoin()">
					<div class="otherDo-left">
							<img src="./../assets/person/join.jpg" alt="">
							<span class="otherDo-span">我要加盟</span>
					</div>
					<div class="otherDo-right">
							<span class="otherDo-span">合作申请点这里</span>
							<img src="./../assets/home/backRight.jpg" alt="" class="backRight">
					</div>
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
export default {
  name: 'person',
  data(){
	  return {
	  	 msgCount:0,
	  	 address:"广东省广州市天河区珠江新城",
	  	 childMsg:[
	  	 	{
	  	 		id:1,
	  	 		info_complete:"80%",
	  	 		images:2,
	  	 		src:require("./../assets/person/gilr.jpg"),
	  	 		name:"萌娃姓名",
	  	 		cardmodels:2,
	  	 		videos:3,
	  	 		rate:"20%",
	  	 	}
	  	  
	  	 ]
	  }
    
  },
  methods:{
  	gotoAddress(){
  		this.$router.push("/GetThingAddress");
  	},
  	goMy(where){
  		// switch(where){
  		// 	case 1:
  			
  		// }
  		this.$router.push({
  			path:"/MySelve",
  			query:{
  				index:where
  			}
  		})
  	},
  	gotoJoin(){
  		this.$router.push({
  			path:"/Join",
  			query:{
  				data:""
  			}
  		})
  	},
  	// 参数表示卡片的index
  	deleteCar(who){
  		this.$axios.post("http://123.206.202.40:82/index.php/api/baby/delbaby",{
  			token:this.$store.state.token,
  			babyid:this.childMsg[who].id
  		})
  		.then(res=>{
  			if(res.data.code==0){
  				alert("删除成功")
  				this.childMsg.splice(who,1);
  				this.$refs.addUlWidth.style.width=50*(this.childMsg.length+1)+"%"
  			}else{
  				alert("删除失败")
  			}
  			console.log(res)
  		 
  		})
  		
  	},
  	gotoAddCuteChild(){
  		this.$router.push("/AddChildCar")
  	},
  	goEditChildHome(childMsgArrIndex){
  		this.$router.push({
  			path:"GoEditChildHome",
  			query:{
  				babyid:this.childMsg[childMsgArrIndex].id
  			}
  		})
  	}
  },
  created(){
    this.$emit("changeChildColor","4")
  },
  mounted(){
  	this.$axios.post("http://123.206.202.40:82/index.php/api/user/getMessage",{
  			token:this.$store.state.token
  		})
  		.then(msg=>{
  			// 这边优化时可以有个回调函数进行数据交互与视图分离
  			let count=0;
  			for(let index in msg.data){
  				if(msg.data[index].isread==0){
  					count++
  				}
  			}
  			if(count==0){
  				this.$refs.redMsg.style.display="none";
  			}else{
  				this.$refs.redMsg.style.display="block";
  				this.msgCount=count;
  			}

  	})
  	this.$axios.post("http://123.206.202.40:82/index.php/api/user/getMyAddress",{
  		token:this.$store.state.token?this.$store.state.token:""

  	})
  	.then(data=>{
  		 console.log(data)
  		 let def=data.data.filter((val,index,items)=>{
  		 	return val.isdefault==1
  		 })
  		 this.address=def[0].province+def[0].city+def[0].area+def[0].address
  	})
   //萌娃数据请求
   this.$axios.post("http://123.206.202.40:82/index.php/api/baby/getBabyCard",{
   		token:this.$store.state.token
   })

   .then(data=>{
   	if(data.statusText=="OK"){
   		this.childMsg=data.data;
   		console.log("卡模数据",data.data)
   		this.$refs.addUlWidth.style.width=50*(this.childMsg.length+1)+"%"
   	}else{
   		this.$refs.addUlWidth.style.width=50*(this.childMsg.length+1)+"%"
   		alert("卡模请求失败")
   	}
   		
   	 
   })

   // this.$refs.addUlWidth.style.width=50*(this.childMsg.length+1)+"%"
   // 对放萌娃卡片的ul的宽度进行动态改变
  }
}
</script>

 
<style scoped>
 .header{
 	width:100%;
 	height:50px;
 	background:#00b0b8;
 	color:#fff;
 	display:flex;
 	display:-webkit-flex;
 	justify-content: center;
 	align-items: center;
 	font-size:19px;
 	font-family:arial;
 }
.user{
	width:100%;
	height:80px;
	background:#fff;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	padding:18px;
}
.user-img{
	display:block;
	border-radius:100%;
	height:60px;
}
.user-set{
	position:absolute;
	right:18px;
	font-size:14px;
}
.username{
	margin-left:3px;
}
.myChild{
	width:100%;
	position:relative;
}
.mychild-top{
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	padding-left:20px;
}
.myChild-vip{
	position:absolute;
	right:15px;
	display:flex;
 	display:-webkit-flex;
 	justify-content: center;
 	align-items: center;
}
.myChild-cap{
	margin-right:5px;
	height:100%;
}
.mychild-foot{
	padding-left:20px;
	font-size:13px;
	margin-top:5px;
	color:#ccc;
}
.addDeleteChild{
	overflow:auto;
	margin-top:6px;

	 
}
.addDeleteChild-ul{
	width:150%;
	height:180px;
	background:;
	overflow:auto;
	display:flex;
 	display:-webkit-flex;
 	justify-content: center;
 	align-items: center;
 	padding-bottom:10px;
 	 
}
::-webkit-scrollbar {
            width: 0;
            height: 0;
            overflow: hidden;
 }

.addDeleteChild-ul > li{
	width:50%;
	height:100%;
	/*margin:5px 0px 5px 3px;*/
	box-sizing: content-box;
	padding-left:10px;
	box-shadow:2px 2px 10px -1px #ccc;
	overflow:hidden;
	display:flex;
	display:-webkit-flex;
	/*align-items: center;*/
	justify-content: center;
	flex-direction: column;
	/*float:left;*/
}
.addDeleteChild-ul > .addChild-li{
	width:50%;
	height:100%;
	display:flex;
	display: -webkit-flex;
	justify-content:center;
	align-items:center;
	box-shadow: none;
	 
}
.child-name{
	width:100%;
	height:50px;
	overflow:auto;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	position:relative;
 	/*justify-content: center;*/
}
.child-the-name{
	font-size:14px;
	margin-left:5px;
 
	transform: scale(0.7);
}
.childname-img{
	display:block;
	height:60%;
	border-radius:100%;
	margin-left:10px;

}
.child-the-name > .dataComplete{
	width:100%;
	 
	/*-webkit-column-rule: #ccc;
	-moz-column-rule: #ccc;
	-o-column-rule: #ccc;
	column-rule: #ccc;	*/
	color:#ccc;	
	font-size:13px;
	word-wrap: nowrap;
	white-space: nowrap;
}
.deleteChild{
	color:#fff;
	width:15px;
	height:15px;
	background:#f40;
	border-radius:100%;
	 
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content:center;
 	font-size:15px;
 	position:absolute;
 	top:10px;
 	right:10px;
}
.child-msg-ul{
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content:center;
 	overflow: hidden;
}
.child-msg-ul > li{
	width:33%;
	padding:5px;
	display: flex;
	display: -webkit-flex;
	align-items: center;
	justify-content: center;
	flex-direction:column;
	text-align:center;

}
.child-msg-font{
	font-size:12px;
	width:42px;
 
	transform:scale(0.9);
	color:#ccc;
}
.child-msg-ul > .child-msg-left{
	padding-right:20px;
}
.child-msg-ul > .child-msg-right{
	padding-left:20px;
}
.addChild-li{
	width:30%;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content:center;
}
.addChild-logo{
	 
	text-align:center;
}
.addChild-logo-p{
	width:50px;
	height:50px;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content:center;
	background:#F0F0F0;
	border-radius:100%;
	font-size:50px;
	color:#9D9D9D;
	margin-bottom:10px;
}
.addCute{
	transform: scale(0.8);
}
.child-img{
	width:100%;
	margin:0 auto;
}

.user-nav{
	width:100%;
	height:60px;
	margin-top:10px;
}
.user-nav-ul{
	width:100%;
	height:60px;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content:center;
}
.user-nav-ul > li{
	width:25%;
	text-align: center;
}
.user-nav-ul > li > p{
	margin-top:10px;
}
.otherDo{
	width:100%;
	margin-top:10px;
}
.otherDo-ul{
	width:100%;

}
.otherDo-ul > li{
	width:100%;
	height:60px;
	border-bottom:1px solid #F0F0F0;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
	padding-left:15px;
}
.otherDo-left{
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
}
.otherDo-right{
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	position:absolute;
 	right:10px;
 	color:#9D9D9D;
}
.otherDo-ul > .otherDo-last-li{
	border-bottom:none;
	overflow:hidden;
}
.otherDo-span{
	margin-left:8px;
}
.backRight{
	margin-left:6px;
}
.otherDo-left > .right-now{
	margin-left:5px;
}
.redMsg{
	width:17px;
	height:17px;
	 
	position: absolute;
	right: -3px;
	top:-3px;
	border-radius:100%;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	color:#fff;

}
.redMsg-li{
	 
	position:relative;
}
.nav-img-fir{
	position: relative;
}
.seeRed{
	position:relative;
 
	display:inline-block;
}
.addWidth{
	/*background:red;*/
	width:60px;
}
.cuteName{
	font-size: 16px;
}
</style>