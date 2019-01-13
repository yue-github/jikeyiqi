<template>
  <div class="BusyCenter">
   	<div class="b-header">
   		<img src="./../../assets/person/blueBack.jpg" alt="" class="header-img">
   		<span>商家中心</span>
   	</div>
	<div class="user">
		<div class="user-h">
			<img class="user-h-img" v-bind:src="userImg"></img>
			<span class="user-name">{{username}}</span>
		</div>
		<div class="user-right">
			<img src="./../../assets/person/erweima.jpg" alt="" class="erweima">
			<span class="u-edit">编辑资料</span>
			<span class="u-gt">&gt;</span>
		</div>
	</div>
	<div class="employ">
		<div class="e-top">
			<span>佣金金额&nbsp;(元)</span>
		</div>

		<div class="e-center">
			<span class="detailEM">{{employMoney}}</span>
			<img src="./../../assets/person/eye.jpg" alt="" class="e-c-img">
		</div>

		<div class="e-foot">
			<div class="e-f-left">
				<p class="myMoney">我的佣金&nbsp;(元)</p>
				<p class="myDetailEM">{{myEmployMoney}}</p>
			</div>

			<div class="e-f-right">
				<p class="mainMoney">总销售&nbsp;(元)</p>
				<p class="DetailSM">{{mainSaleMoney}}</p>
			</div>
		</div>

	</div>
	<div class="myMssage">
		<ul class="myMssage-ul">
			<li>
				<div class="mm-left">
					<img src="./../../assets/person/msg_center.jpg" alt="" class="mm-l-img">
					<span class="mm-l-msg">我的消息</span>
				</div>

				<div class="mm-right">
					<span class="msgRed">{{msgCount}}</span>
					<img src="./../../assets/person/white_right.jpg" alt="" class="mm-r-img-r">
				</div>
			</li>

			<li>
				<div class="mm-left">
					<img src="./../../assets/person/che_center.jpg" alt="" class="mm-l-img">
					<span class="mm-l-msg">我的消息</span>
				</div>

				<div class="mm-right">
					<span class="msgRed">{{msgCount1}}</span>
					<img src="./../../assets/person/white_right.jpg" alt="" class="mm-r-img-r">
				</div>
			</li>

			<li>
				<div class="mm-left">
					<img src="./../../assets/person/lan_center.jpg" alt="" class="mm-l-img">
					<span class="mm-l-msg">我的消息</span>
				</div>

				<div class="mm-right">
					<span class="msgRed">{{msgCount2}}</span>
					<img src="./../../assets/person/white_right.jpg" alt="" class="mm-r-img-r">
				</div>
			</li>

			<li>
				<div class="mm-left">
					<img src="./../../assets/person/money_center.jpg" alt="" class="mm-l-img">
					<span class="mm-l-msg">我的消息</span>
				</div>

				<div class="mm-right">
					<span class="msgRed">{{msgCount3}}</span>
					<img src="./../../assets/person/white_right.jpg" alt="" class="mm-r-img-r">
				</div>
			</li>
			
		</ul>
	</div>




  </div>
</template>

<script>
export default {
  name: 'BusyCenter',
  data(){
	  return {
	  	username:"用户名",
	  	userImg:require("./../../assets/mall/user_logo.jpg"),
	  	employMoney:"0.00",
	  	myEmployMoney:"0.00",
	  	mainSaleMoney:"0.00",
	  	msgCount:"1",
	  	msgCount1:"2",
	  	msgCount2:"5",
	  	msgCount3:"10"

	  }
    
  }
}
</script>

 
<style scoped>
.BusyCenter{
	width:100%;
	position:relative;
}
 .b-header{
 	width:100%;
 	height:50px;
 	background:#00b0b8;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	color:#fff;
 	position:relative;
	font-size:19px;
 }
 .header-img{
 	position:absolute;
 	left:10px;
 }
 .user{
 	width:100%;
 	margin-top:10px;
 	position:relative;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	overflow:auto;
 }
 .user-h{
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	 
 }
 .user-right{
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	position:absolute;
 	right:10px;
 }
 .user-h-img{
 	border-radius:100%;
 	height:45px;
 	margin:0 0 10px 6px;
 }
 .erweima{
 	margin-right:10px;
 	height:22px;
 }
 .u-edit{
 	color:#ccc;
 	font-size:13px;
 	margin-right:10px;
 }
 .user-name{
 	padding-bottom: 5px;
 	margin-left:5px;
 }
.employ{
	width:100%;
}
.e-top{
	font-size:13px;
	padding:15px;
	color:#ADADAD;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
}
.e-center{
	width:100%;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	padding:0 15px;
}
.e-foot{
	width:100%;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	padding:15px;
}
.myMoney,
.mainMoney{
	color:#ADADAD;
}
.detailEM{
	font-size:39px;
}
.myDetailEM,
.DetailSM{
	color:#f40;
	font-size:18px;
	margin-top:6px;
}
.e-c-img{
	position:absolute;
	right:10px;
}
.e-foot > div{
	width:50%;
}
.e-f-right{
	padding-left:8%;
}
.myMoney,
.mainMoney{
	font-size:13px;
}
.myMssage{
	width:100%;
	margin-top:40px;
}
.myMssage-ul{
	width:100%;
	overflow:hidden;
}
.myMssage-ul > li{
	margin-left:15px;
	border-bottom:1px solid #E0E0E0;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	padding-bottom: 21px;
 	margin-bottom: 16px;
}
.mm-right{
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
	position:absolute;
	right:10px;
}
.mm-left{
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
}
.mm-l-msg{
	padding-left: 5px;
	font-size:15px;
}
.msgRed{
	background:#f40;
	height:20px;
	width:20px;
	border-radius:100%;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	margin-right:8px;
 	color:#fff;
 	font-size:13px;

} 
</style>