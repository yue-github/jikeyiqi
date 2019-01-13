<template>
  <div class="MySelve">
   		<div class="ErollHead">
	         <img src="./../../assets/person/back_left.png" alt="" class="ErollImg" @click="goPerson()">
	         <span class="ErollFont">{{title}}</span>
	         <span class="moneyWhereGo" @click="gotoDetail()" v-show="money_boo">明细</span>
    	</div>

    	<!-- 钱那一块 -->
		<div class="moneyDetail" v-show="money_boo">
			<div class="moneyUser">余额账户(元)</div>
			<div class="theMoney">{{money}}</div>
		</div>

		<!-- 我的消息那一块 -->
		
		<div class="myMsg" v-show="msg_boo" ref="myMsg">
			<ul class="myMsg-ul">
				<li v-for="val in myMsg_arr">
					<div class="msg-content-main">
						<Icon type="ios-volume-up" class="system" v-if="val.isSystem"/>
						<Icon v-else="" type="logo-github" class="userImg"/>
						<div class="title">{{val.title}}:</div>
						<div class="msg-content">{{val.content}}</div>
					</div>
					

					<div class="msg-detail">
						详情<Icon type="ios-arrow-dropright" class="detailImg"
						/>
					</div>
				</li>
			</ul>
		</div>


		<!-- 我的通告 -->
		<div class="myNotice" v-show="notice_boo">
			<div class="noticeType">
				<div class="noticeHead">类型</div>
				<div class="typeChoose">
					<ul class="typeChoose-ul">
						<li class="notice-fir-li" @click="changeColor('notice-fir-li',1)" ref="notice-fir-li">面议</li>
						<li class="notice-sec-li" @click="changeColor('notice-sec-li',2)" ref="notice-sec-li">付费</li>
						<li class="cancelBorder notice-thir-li" @click="changeColor('notice-thir-li',3)" ref="notice-thir-li">片酬</li>
					</ul>
				</div>
				<div class="line"></div>
			</div>
			<!-- 组件可复用 -->
			<div class="noticeContent">
				 <div class="notice-detail">
					<ul v-for="(val,index) in myNotice_arr" class="detail-ul">
						<li>
							 <ul class="fiveLi-ul">
							 		<li class="topLi" @click="gotoAnDetail(val.id)">
							 			<p class="fiveLi-top" v-show="val.palceTop">置顶</p>
							 		</li>
							 		<li class="title-li" @click="gotoAnDetail(val.id)">
							 			<div class="secLi-left">{{val.title}}</div>
							 			<div class="secLi-right">{{val.talk_pay}}</div>
							 		</li>
							 		<li @click="gotoAnDetail(val.id)">
										<p class="type">{{val.film}}</p>
							 		</li>
							 		<li class="deadline-li" @click="gotoAnDetail(val.id)">
							 			<img src="./../../assets/announce/dingwei.jpg" alt="" class="pos">
							 			<span class="scope-span">{{val.place}}</span>
							 			<img src="./../../assets/announce/date.jpg" alt="" class="deadLine">
							 			<span>剩余&nbsp;{{val.endtime}}&nbsp;天截至报名</span>
							 		</li>

							 		<li class="eroll-li"> 
							 			<div class="alreadyEnroll">已报名&nbsp;<span class="changeColor">{{val.people}}</span>&nbsp;人</div>
							 			<div class="enroll" @click="gotoEnroll()">报名</div>
							 		</li>
							 </ul>
						</li>
					</ul>
	  			</div>
			</div>
		</div>
	<br>
	<br>
	<br>
	<br>
  </div>
</template>

<script>
import myNotice from './MyNotice'
export default {
  name: 'MySelve',
  data(){
	  return {
	  	msg:"MySelve",
	  	title:"我的消息",
	  	money:"0.00",
	  	moneyWhere:"",
  		money_boo:false,
  		active_boo:false,
  		msg_boo:false,
  		notice_boo:false,
  		myMsg_arr:[
			  	{
			  		content:"喜欢你喜欢你喜欢你喜欢 你喜欢你喜",
			  		createtime:16511,
			  		id:1,
			  		isSystem:true,
			  		isread:0,
			  		send:0,
			  		target:1,
			  		title:"平台推送"
			  	}
		  ],
		myNotice_arr:[
			{
				cycle:0,
				film:"影视组讯",
				id:1,
				palceTop:1,
				pepole:28,
				place:"北京市",
				price:"0.00",
				status:0,
				talk_pay:"面议",
				time:29239,
				title:"小演员招募"
			}
		]
	  }

    
  },
  components:{
  	myNotice
  },
  methods:{
  	goPerson(){
  		this.$router.push("/Person")
  	},
  	gotoDetail(){
  		this.$router.push("/MoneyWhereGo")
  	},
  	changeColor(clickWho,isWho){
 		 this.$refs["notice-fir-li"].style.color="#000";
  		 this.$refs["notice-sec-li"].style.color="#000";
  		 this.$refs["notice-thir-li"].style.color="#000";
  		 this.$refs[clickWho].style.color="#f40";
  		 let type=this.$refs[clickWho].innerHTML;
  		
  		 this.$axios.post("http://123.206.202.40:82/index.php/api/notice/getpartnotice",{
  			type:type,
  			token:this.$store.state.token
  		 })
  		 .then(notice=>{
  		 	 
  			 this.myNotice_arr=notice.data;
  			 console.log(notice.data)
  			 // this.$router.push({
  			 // 	path:"/MyNotice",
  			 // 	query:{
  			 // 		data:notice.data
  			 // 	}
  			 // })
  		 })

  	},
  	gotoEnroll(){
  			this.$router.push({
  				path:"/Enroll"
  			})
  	},
  	gotoAnDetail(index){
  		console.log(index)
  		const vue=this;
  			this.$router.push({
  				path:"/AnDetail",
  				query:{
  					announceID:index
  				}
  			})
  			 
  		 
  		
  	}
  },
  mounted(){
	this.money_boo=false;
	this.active_boo=false;
	this.msg_boo=false;
	this.notice_boo=false;
  	switch(this.$route.query.index){
  		case 1:
  		this.msg_boo=true;
  		this.title="我的消息";
  		this.$axios.post("http://123.206.202.40:82/index.php/api/user/getMessage",{
  			token:this.$store.state.token
  		})
  		.then(msg=>{

  			this.myMsg_arr=msg.data
  			console.log(this.myMsg_arr)
  		})
  		break;
  		case 2:
  		this.money_boo=true;
  		this.title="我的余额";
  		this.$axios.post("http://123.206.202.40:82/index.php/api/user/getMyBalance",{
  			token:this.$store.state.token
  		})
  		.then(money=>{

  			 this.money=money.data.balance;
  			 this.$store.state.moneyWhere=money.data;

  		})
  		break;
  		case 3:
   		this.notice_boo=true;
  		this.title="我的通告";
  		this.$axios.post("http://123.206.202.40:82/index.php/api/notice/getpartnotice",{
  			type:"面议",
  			token:this.$store.state.token
  		})
  		.then(notice=>{

  			this.myNotice_arr=notice.data;
  			console.log(notice.data)

  		})
  		break;
  		case 4:
  		this.active_boo=true;
  		this.title="我的活动";
  		break;

  	}



  }
}
</script>

 
<style scoped>
 .ErollHead{
  width:100%;
  height:55px;
  /*background:#025285;*/
  /*渐变效果*/
  background: -webkit-linear-gradient(left, #025285 , #49c7de); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #025285, #49c7de); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #025285, #49c7de); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #025285 , #49c7de); /* 标准的语法 */
  display:flex;
  display:-webkit-flex;
  align-items: center;
  justify-content:center;
  position:fixed;
  top:0;
  box-shadow:-1px 0px 20px 1px #ccc;
  z-index: 50;
}
.ErollImg{
  position:absolute;
  left:15px;
  height:30px;
}
.ErollFont{
color:#fff;
font-size:19px;
}
.moneyWhereGo{
	color:#fff;
	position:absolute;
	right:10px;
	font-size:14px;
}
.moneyDetail{
	width:100%;
	height:300px;
	  /*渐变效果*/
	margin-top:55px;
    background: -webkit-linear-gradient(left, #49c7de , #025285); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #49c7de, #025285); /* Opera 11.1 -  12.0 */
    background: -moz-linear-gradient(right, #49c7de, #025285); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #49c7de , #025285); /* 标准的语法 */
}
.moneyDetail{
	padding-top:30px;
	padding-left:15px;
}
.moneyUser{
	color:#000;
	opacity: 0.8;
}
.theMoney{
	color:#fff;
	font-size:50px;

}

/*我的消息*/
.myMsg{
	width:100%;
	margin-top:60px;
	/*color:#ADADAD;*/
}
.myMsg-ul{
	width:100%;
}
.myMsg-ul > li{
	width: 100%;
	display: flex;
	display: -webkit-flex;
	align-items: center;
	border-bottom:1px solid #F0F0F0;
	padding:10px;
	position: relative;

}
.system{
	color:#f40;
	font-size:25px;
}
.msg-detail{
	width:20%;
	position: absolute;
	right:10px;
	text-align:right;
	opacity:0.8;
}
.detailImg{
	font-size: 16px;
}
.userImg{
	color:#025285;
	font-size:22px;
}
.title{
	/*width:auto;*/
	margin-right:10px;
	font-weight:700;
}
.msg-content-main{
	width: 80%;
	display: flex;
	display: -webkit-flex;
	align-items: center;
	flex-wrap: wrap;
	/*word-break: break-all;*/
	/*word-spacing: wrap;*/
}

.typeChoose-ul{
	width:100%;
	height:50px;
	display: flex;
	display: -webkit-flex;
	align-items: center;
}
.noticeHead{
	width:100%;
	height:30px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	border-bottom:1px solid #F0F0F0;
	color:#025285;
	font-size:15px;
}
.myNotice{
	width:100%;
	margin-top:55px;
	position:relative;

}
.noticeType{
	width:100%;
	position: fixed;
	background:#fff;
	z-index:5;
	padding-top:10px;

}
.typeChoose-ul{
	width:100%;
	height:50px;
}
.typeChoose-ul > li{
	width:33.3333%;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	border-right:1px solid #F0F0F0;
	font-size:14px;
}
.typeChoose-ul > .cancelBorder{
	border-right:none;
}
.notice-fir-li{
	color:#f40;
}
.line{
	width:80%;
	border-bottom: 1px solid #ccc;
	/*box-shadow: 0px 0px 2px 1px #49c7de;*/
	margin:0 auto;
}
.noticeContent{
	width:100%;
	padding:10px;
}
.notice-detail{
	width:100%;
	padding:15px;
	margin-top:90px;
}
.etail-ul{
	width:100%;
}
.etail-ul > li{
	width:100%;

}
.fiveLi-ul{
	width:100%;
	border:1px solid #ccc;
	border-radius:8px;
	padding:10px;
	position:relative;
	overflow: hidden;
}
.fiveLi-ul > li{
	width:100%;
	display:flex;
	display:-webkit-flex;
	align-items: center;

}
.fiveLi-ul > .topLi{
	 
}
.fiveLi-top{
	padding:2px 10px;
	background:#01afb6;
	margin-top:-10px;
	margin-left:-10px;
	font-size:13px;
}
.secLi-left{
	font-size:18px;
}
.secLi-right{
	font-size:20px;
	color:#f40;
	position:absolute;
	right:10px;

}
.type{
	border:1px solid #ccc;
	padding:3px;
	font-size: 13px;
	border-radius: 3px;
	margin-top:5px;
}
.deadline-li{
	margin-top:10px;
	border-bottom:1px solid #ccc;
	border-radius:1px;
	box-sizing:content-box;
	padding-bottom:10px;
}
.scope-span{
	margin-right:20px;
}
.deadline-li > img{
	margin-right:10px;
	height:23px;
}
.title-li{
	margin-top:5px;
}
.eroll-li{
	padding:15px 0px;
	position:relative;
}
.enroll{
	right:0;
	position:absolute;
	padding:5px 30px;
	background:#0161b8; 
	/*渐变效果*/
 	background: -webkit-linear-gradient(left, #0161b8 , #01adb9); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(right, #0161b8, #01adb9); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(right, #0161b8, #01adb9); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #0161b8 , #01adb9); /* 标准的语法 */
    color:#fff;
    font-size:19px;
    border-radius:100px;
}
.changeColor{
	color:#f40;
	font-size:25px;
}
.detail-ul{
	width:100%;
}
.detail-ul > li{
	margin-bottom:15px;
} 
</style>