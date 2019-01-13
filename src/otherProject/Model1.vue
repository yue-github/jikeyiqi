<template>
  <div class="Model1">
    	<div class="m-left" ref="mLeft">
			<div class="m-cap-top">
				<img class="cap-top-left" src="./../assets/otherProject/mFir/1.jpg">
					
				</img>

				<div class="cap-top-right">
					<div class="cap-gotoC">
						<img src="./../assets/otherProject/mFir/2.jpg" alt="" class="l-right-fir">
						<img src="./../assets/otherProject/mFir/6.jpg" alt="" class="l-right-sec">
						<img src="./../assets/otherProject/mFir/5.jpg" alt="" class="l-right-thir">
					</div>
					
				</div>
			</div>
			<div class="cap-bottom">
				<ul class="cap-bottom-ul">
					<li>
						年龄:{{childMsg.age}}岁
					</li>
						
					<li>
						身高:{{childMsg.height}}cm
					</li>

					<li>
						体重:{{childMsg.weight}}kg
					</li>
						
					<li>
						鞋码:{{childMsg.xiema}}码
					</li>
				</ul>
			</div>
    	</div>
    	<div class="m-right" ref="mRight">
			<div class="m-r-top">
				<img src="./../assets/otherProject/mFir/3.jpg" alt="" class="m-r-top-fir">
				<img src="./../assets/otherProject/mFir/4.jpg" alt="" class="m-r-top-sec">
			</div>
			<div class="m-r-bottom">
				<img src="./../assets/otherProject/mFir/7.jpg" alt="" class="m-r-top-thir">
				<img src="./../assets/otherProject/mFir/8.jpg" alt="" class="m-r-top">
			</div>
    	</div>
  </div>
</template>

<script>
export default {
  name: 'Model1',
  data(){
	  return {
	  	 childMsg:{
	  	 	age:"10",
	  	 	height:"148",
	  	 	weight:"34",
	  	 	xiema:"35"
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
	 
	}
.m-right{
	/*width:100%;*/
	width:43.5%;
	/*float:right;*/
	overflow:auto;
	padding-top:1.8%;
	}
}

.m-cap-top{
	width:100%;
	/*height:90vh;*/
	overflow:auto;
	display:flex;
	display:-webkit-flex;
	justify-content: center;
}
.cap-top-left{
	display:block;
	width:65%;
	float:left;
	margin-top:3%;
}
.cap-top-right{
	width:28%;
	float:right;
	display:flex;
	display:-webkit-flex;
	/*align-items: center;*/
	/*justify-content: center;*/

}
.cap-gotoC{
	width:60%;
	display:inline-block;
 
}
.l-right-fir{
	margin-top:30%;
}
.l-right-sec{
	margin-top:80%;
	margin-bottom:40%;
}
.cap-bottom{
	width:100%;
	overflow:hidden;
}
.l-right-thir{
	margin-left:20%;

}
.cap-bottom-ul{
	width:100%;
	overflow: auto;
	display:flex;
	display:-webkit-flex;
	align-items: center;
}
.cap-bottom-ul li{
	width:19%;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	font-size:12px;
	font-family:"华文行楷";
}
.m-r-top{
	width:100%;
	overflow:auto;
}
.m-r-top > img{
	display:block;
	float:left;
}
.m-r-bottom{
	width:100%;
	overflow:auto;
	display:flex;
	display:-webkit-flex;
	margin-top:2%;
}
.m-r-bottom > img{
	float:left;
	display:block;

}
.m-r-top-fir{
	width:44%;
	margin-right:2%;
}
.m-r-top-sec{
	width:54%;
} 
.m-r-top-thir{
	width:44%;
	margin-right:2%;
}
.m-r-top-four{
	width:54%;
} 
</style>