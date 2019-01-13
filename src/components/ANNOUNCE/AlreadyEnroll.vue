<template>
  <div class="AlreadyEnroll">
   		<div class="ErollHead">
	  		 <img src="./../../assets/announce/blue_left.jpg" alt="" class="ErollImg">
	   	 	 <span class="ErollFont">已报名童星</span>
 		 </div> 
 		 <!-- 中部 -->
 		 <div class="center">
   	 	 		<div class="c-head">
   	 	 			<ul class="c-head-ul">
   	 	 				<li v-for="(val,index) in roleArr" ref="role">{{val.role}}</li>
   	 	 			</ul>
   	 	 		</div>
   	 	 </div>
   	 	 <!-- 底部 -->
   	 	 <div class="c-content">
   	 	 			<ul class="c-content-ul">
   	 	 				<li v-for="value in contentArr">
   	 	 					<img v-bind:src="value.userImg" alt="" class="userImg">
   	 	 					<div class="content-right">

   	 	 						<div class="userName">
   	 	 							<span class="name">{{value.name}}</span>
   	 	 							<img v-bind:src="value.sexImg" alt="" class="sex">
   	 	 							<img v-bind:src="value.mapImg" alt="" class="map">
   	 	 						</div>

   	 	 						<div class="age">

	   	 	 						<span class="age-fir">
	   	 	 							{{value.age}}岁
	   	 	 						</span>

	   	 	 						<span class="age-span">	
	   	 	 							{{value.height}}cm
	   	 	 						</span>

	   	 	 						<span class="age-thir">
										{{value.adress}}
	   	 	 						</span>
   	 	 						</div>
   	 	 					</div>
   	 	 				</li>
   	 	 			</ul>
   	 	 	</div>
  </div>
</template>

<script>

export default {
  name: 'AlreadyEnroll',
  data(){
	  return {
	  	 roleArr:[
	  		{role:"角色1",roleRef:"role1"},
	  		{role:"角色2",roleRef:"role2"},
	  		{role:"角色3",roleRef:"role3"},
	  		{role:"角色4",roleRef:"role4"},
	  		{role:"角色5",roleRef:"role5"},
	  		{role:"角色6",roleRef:"role6"},
	  		{role:"角色7",roleRef:"role7"},
	  	],
	  	contentArr:[
	  		{
	  			userImg:require("./../../assets/mall/user_logo.jpg"),
	  			name:"小演员姓名",
	  			sexImg:require("./../../assets/announce/sex.jpg"),
	  			mapImg:require("./../../assets/announce/map.jpg"),
	  			age:"8",
	  			height:"136",
	  			adress:"三明",
	  			role:"角色1"
	  		},
	  		{
	  			userImg:require("./../../assets/mall/user_logo.jpg"),
	  			name:"小演员姓名",
	  			sexImg:require("./../../assets/announce/sex.jpg"),
	  			mapImg:require("./../../assets/announce/map.jpg"),
	  			age:"8",
	  			height:"136",
	  			adress:"三明",
	  			role:"角色1"
	  		},
	  		{
	  			userImg:require("./../../assets/mall/user_logo.jpg"),
	  			name:"小演员姓名",
	  			sexImg:require("./../../assets/announce/sex.jpg"),
	  			mapImg:require("./../../assets/announce/map.jpg"),
	  			age:"8",
	  			height:"136",
	  			adress:"三明",
	  			role:"角色1"
	  		},
	  		{
	  			userImg:require("./../../assets/mall/user_logo.jpg"),
	  			name:"小演员姓名",
	  			sexImg:require("./../../assets/announce/sex.jpg"),
	  			mapImg:require("./../../assets/announce/map.jpg"),
	  			age:"8",
	  			height:"136",
	  			adress:"三明",
	  			role:"角色1"
	  		},
	  		{
	  			userImg:require("./../../assets/mall/user_logo.jpg"),
	  			name:"小演员姓名",
	  			sexImg:require("./../../assets/announce/sex.jpg"),
	  			mapImg:require("./../../assets/announce/map.jpg"),
	  			age:"8",
	  			height:"136",
	  			adress:"三明",
	  			role:"角色5"
	  		},
	  	]
	  }
    
  },
  methods:{
  	changeColor(index){
  		 
  	}
  },
  mounted(){
  	let role=this.$refs.role;
  	let c_head_ul=document.getElementsByClassName("c-head-ul")[0];
  	c_head_ul.addEventListener("click",changeColor);
  	function changeColor(e){
  		for(let val in role){
  			 role[val].style.color="#000"
  		}
  		 e.target.style.color="#02b0b9";
  		 console.log(e.target.innerHTML.match(/\d+/g)[0])
  	}
  	
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
	position:relative;
	width:100%;
	height:40px;
	overflow:auto;
	border-bottom:1px solid #ccc;
}
.c-head-ul{
	width:140%;
	overflow:auto;
	display:flex;
	display:-webkit-flex;
}
::-webkit-scrollbar {
            width: 0;
            height: 0;
            overflow: hidden;
 }
.c-head-ul > li{
	width:20%;
	height:40px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	color:#000;
}
.c-head-ul > :nth-child(1){
	color:#02b0b9;
}
.c-content{
	width: 100%;
	 
}
.c-content-ul{
	width:100%;
}
.c-content-ul > li{
	padding:15px;
	padding-left:0;
	margin-left:15px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	border-bottom:1px solid #ccc;
	border-radius:1px;
}
.userImg{
	height:45px;
	border-radius:100%;
	margin-right:15px;
}
.userName,
.age{
	width:100%;
	display:flex;
	display:-webkit-flex;
	align-items: center;
}
.name{
	margin-right:15px;
}
.map,
.sex{
	height:21px;
}
.sex{
	margin-right:10px;
}
.age{
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	position:relative;
	color:#ccc;
	font-size:13px;
	margin-top:5px;
}
.age-fir{
	position:absolute;
	left:0;
}
.age-thir{
	position:absolute;
	right:0;
}
</style>