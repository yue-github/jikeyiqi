<template>
  <div class="Model5">
   	 
   	  <div class="m-right">
			<div class="bigImg">
				<img v-bind:src="msg[1].img4" alt="" class="img-big">
				
			</div>
			<div class="user-name">
				<img v-bind:src="msg[1].img5" alt="" class="map">
				<div class="name">
					<div class="nameTop">
						 {{msg[0].name}}
					</div>
					<div class="namePY">
						<p>{{msg[0].nameONE}}</p>
						<p>{{msg[0].nameTWO}}</p>
						<p>{{msg[0].nameTHREE}}</p>
						<p></p>
					</div>
				</div>
				<img v-bind:src="msg[1].img8" alt="" class="erweima">
			</div>
   	  </div>


   	   <div class="m-left">
			<div class="ThreeImg">
				<p><img v-bind:src="msg[1].img1" alt="" class="three-img"></p>
				<p><img v-bind:src="msg[1].img2" alt="" class="three-img"></p>
				<p><img v-bind:src="msg[1].img3" alt="" class="three-img"></p>
			</div>
			<div class="userMsg">
				年龄:{{msg[0].age}}岁&nbsp;|&nbsp;身高:{{msg[0].height}}cm&nbsp;|&nbsp;体重:{{msg[0].weight}}kg&nbsp;|&nbsp;鞋码:{{msg[0].xiema}}码
			</div>
   	  </div>
  </div>
</template>

<script>
export default {
  name: 'Model5',
  data(){
	  return {
	  	 msg:[
	  	 	{
	  	 		name:"苏振坤",
	  	 		nameONE:"su ",
	  	 		nameTWO:"zhen ",
	  	 		nameTHREE:"kun ",
	  	 		age:11,
	  	 		height:144,
	  	 		weight:29,
	  	 		xiema:35
	  	 	},
	  	 	{
	  	 		img1:require("./../assets/otherProject/mFiv/1.jpg"),
	  	 		img2:require("./../assets/otherProject/mFiv/2.jpg"),
	  	 		img3:require("./../assets/otherProject/mFiv/3.jpg"),
	  	 		img4:require("./../assets/otherProject/mFiv/4.jpg"),
	  	 		img5:require("./../assets/otherProject/mFiv/5.jpg"),
	  	 		img8:require("./../assets/otherProject/mFiv/8.jpg"),
	  	 	}
	  	 ]
	  }
    
  }
}
</script>

 
<style scoped>
 .Model5{
 	width:100%;
 	position:relative;
 }
 .m-left{
 	width:50%;
 	height:100vh;
  
 	display:flex;
 	display:-webkit-flex;
 	justify-content: center;
 	align-items: center;
 	flex-direction: column;
 	position: absolute;
	left:0;
 }
 .m-right{
 	width:50%;
 	height:100vh;
  	
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
  	position: absolute;
	right:0;
 }

 .userMsg{
 	width:100%;
 	font-family: "华文行楷";
 	font-size: 12px;
 	margin-top: 6px;
 }
 .ThreeImg{
 	width:100%;
 	display:flex;
 	display:-webkit-flex;
 	justify-content: center;

 }
 .ThreeImg > p{
 	width:32%;
 	margin-right:1%;
 }
 .name{
 	width:100%;
 	display:flex;
 	display:flex;
 	display:-webkit-flex;
 	justify-content: center;
 	align-items: center;
 	font-size:25px;
  	margin-top:20px;
  	margin-bottom:20px;
  
 	font-family: "华文行楷";
 }
 .three-img{
 	display:block;
 	width:100%;
 	margin-right:1%;
 }
 .nameTop{
 	width:20px;
 	display:flex;
 	display:-webkit-flex;
 	flex-direction: column;
 }
 .user-name{
 	width:24%;
 	display:flex;
 	display:-webkit-flex;
 	justify-content: center;
 	align-items: center;
 	flex-direction: column;

 }
 .map,
 .erweima{
	width:50px;
 }
 .bigImg{
 	width:74%;
 }
 .img-big{
 	width:100%;
 }
 .namePY{
 	 
 	margin-top:80px;
 	margin-left:15%;
 }
 @media all and (orientation:portrait){
 	.m-left,
 	.m-right{
		width:100%;
		height:auto;
		position:relative;
		 
 	}
 	 
 	.m-right{
 		margin-top:10px;
 	}
 }
</style>