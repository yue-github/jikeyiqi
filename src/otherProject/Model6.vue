<template>
  <div class="Model6">
	
	<div class="m-right">
		<div class="fourImg">
			<ul class="fourImg-ul">
				<li><img v-bind:src="msg[1].img2" alt=""></li>
				<li><img v-bind:src="msg[1].img3" alt=""></li>
				<li><img v-bind:src="msg[1].img4" alt=""></li>
				<li><img v-bind:src="msg[1].img5" alt=""></li>
			</ul>
		</div>

		<div class="userMsg">
			<span class="girlName">{{msg[0].name}}</span>
			<div class="girlMsg">
				年龄:{{msg[0].age}}岁&nbsp;|&nbsp;身高:{{msg[0].height}}cm&nbsp;|&nbsp;体重:{{msg[0].weight}}kg&nbsp;|&nbsp;鞋码:{{msg[0].xiema}}码
			</div>
		</div>
   	</div>

   	<div class="m-left">
		<img v-bind:src="msg[1].img1" alt="" class="big-img">
   	</div>

   	 
  </div>
</template>

<script>
export default {
  name: 'Model6',
  data(){
	  return {
	  	msg:[
		  	 	{
		  	 		name:"琚芙雅",
		  	 		nameONE:"su ",
		  	 		nameTWO:"zhen ",
		  	 		nameTHREE:"kun ",
		  	 		age:11,
		  	 		height:144,
		  	 		weight:29,
		  	 		xiema:35
		  	 	},
		  	 	{
		  	 		img1:require("./../assets/otherProject/mSix/1.jpg"),
		  	 		img2:require("./../assets/otherProject/mSix/2.jpg"),
		  	 		img3:require("./../assets/otherProject/mSix/3.jpg"),
		  	 		img4:require("./../assets/otherProject/mSix/4.jpg"),
		  	 		img5:require("./../assets/otherProject/mSix/8.jpg"),
		  	 	 
		  	 	}
	  		]
	  }
    
  }
}
</script>

 
<style scoped>
 .Model6{
 	width:100%;
 	position:relative;

 }
 .m-left{
 	width:50%;
 	height:100vh;
 
 	position:absolute;
 	left:0;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 }
  .m-right{
 	width:50%;
 	height:100vh;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	flex-direction: column;
  
 	position:absolute;

 	right:0;
 }
 .big-img{
 	width:96%;
 }
 .userMsg,
 .fourImg{
 	width:100%;
 	display:flex;
 	display:-webkit-flex;
 }
 .fourImg{
 	
 	justify-content: center;
 }
 .userMsg{
 	justify-content: center;
	font-size:12px;
	transform:scale(0.9);
	font-family:"华文行楷";
 }
 .fourImg-ul{
 	width:90%;
 	display:flex;
 	display:-webkit-flex;
 	justify-content: center;
 	flex-wrap:wrap;
 	 
 }
  .fourImg-ul > li{
	width:46%;
	margin-right:1%;

  }
  .fourImg-ul > li > img{
  	width:100%;
  }
  .girlName{
  	font-size:20px;
  }
  .girlMsg{
  	 margin-top:8px;
  	 transform:scale(0.93);
  }
   @media all and (orientation:portrait){
 	.m-left,
 	.m-right{
		width:100%;
		height:auto;
		position:relative;
		 
 	}
 	 
 	.m-left{
 		margin-top:6px;
 	}
 }
</style>