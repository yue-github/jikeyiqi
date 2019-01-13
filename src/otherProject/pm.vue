<template>
  <div class="Model1">
    	<div class="m-left" ref="mLeft">
    	</div>
    	
    	<div class="m-right" ref="mRight">
    	</div>
  </div>
</template>

<script>
export default {
  name: 'Model1',
  data(){
	  return {
	  	 imgSrc:[
	  		require("./../assets/otherProject/mSec/1.jpg"),
	  		require("./../assets/otherProject/map.jpg"),
	  		require("./../assets/otherProject/mSec/2.jpg"),
	  		require("./../assets/otherProject/mSec/3.jpg"),
	  		require("./../assets/otherProject/mSec/4.jpg"),
	  		require("./../assets/otherProject/mSec/5.jpg"),
	  		require("./../assets/otherProject/mSec/6.jpg"),
	  		require("./../assets/otherProject/mSec/7.jpg"),
	  	],
	  	 childMsg:{
	  	 	name:"侯思琪",
	  	 	py1:"hou",
	  	 	py2:"si",
	  	 	py3:"qi",
	  	 	xm:"妞妞",
	  	 	life:"2014年2月12日(4周岁)",
	  	 	height:"108",
	  	 	weight:"17",
	  	 	xiema:"28"
	  	 }
	  }
    
  },
  mounted(){
  	// let mr=this.$refs["mRight"],
  	//     ml=this.$refs["mLeft"];
  	// window.addEventListener("orientationchange",function(){
  	// 	if(window.orientation==180||window.orientation==90){
  	// 		console.log("横屏")
  	// 		 mr.style["width"]="55%"
  	// 		 mr.style["float"]="right"
  	// 		 ml.style["width"]="45%"
  	// 		 ml.style["float"]="left"
  	// 	}else{
  	// 		console.log("竖屏")
  	// 		 mr.style["width"]="100%"
  	// 		 mr.style["float"]="none"
  	// 		 ml.style["width"]="100%"
  	// 		 ml.style["float"]="none"
  	// 	}

  	// });
  	 
  }
}
</script>

 
<style scoped>
 *{
	margin:0px;
	padding:0px;
}
input{
	outline:none;
 	border:none;
}
*,
::before,
::after{
	padding:0;
	margin:0;
	-webkit-tap-highlight-color:transparent;
	-webkit-box-sizing:border-box;
	box-sizing: border-box;
}
body{
	font-size:16px;
	font-family:"MicroSoft YaHei",sans-serif;
	color:#333;
}
a{
	text-decoration:none;
}
a:hover{
	text-decoration:none;
}
ul,ol{
	margin:0;
	padding:0;
	list-style: none;
}
input{
	border:none;
	outline:none;
	-webkit-appearance:none;

}
.clearfix::before,
.clearfix::after{
	content:"";
	clear:both;
	height:0;
	line-height:0;
	display:block;
	visibility:hidden;
}
.Model1{
	width:98%;
	margin:0 auto;
	overflow:auto;
}
.m-left{
	width:100%;
	/*width:55%;*/
	overflow:auto;
	/*float:left;*/
	 
}
.m-right{
	width:100%;
	/*width:45%;*/
	/*float:right;*/
	overflow:auto;
	padding-top:1.8%;
}

@media all and (orientation:portrait){
	.m-left{
	width:100%;
	/*width:55%;*/
	overflow:auto;
	/*float:left;*/
	 
	}
.m-right{
	width:100%;
	/*width:45%;*/
	/*float:right;*/
	overflow:auto;
	padding-top:1.8%;
	}
}
@media all and (orientation:landscape){
	.m-left{
	/*width:100%;*/
	width:55%;
	overflow:auto;
	float:left;
	background:blue;
	height:100vh;
	}
.m-right{
	/*width:100%;*/
	width:45%;
	float:right;
	overflow:auto;
	padding-top:1.8%;
	background:red;
	height:100vh;
	}
}

 
</style>