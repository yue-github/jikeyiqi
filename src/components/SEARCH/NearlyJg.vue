<template>
  <div class="nearlyJg">

   		<header class="h-sm">
   	 		<img src="./../../assets/search/blue_left.jpg" alt="" class="h-sm-left" @click="goHome()">
   	 		<div class="h-content">小天鹅舞蹈培训机构</div>
   	 	</header>

		<div class="center">
			<ul class="c-ul" v-for="val in jg_msg">
					<li class="c-li-fir">
						<span>联系电话</span><span class="concatPhone">{{val.concat}}</span>
					</li>

					<li class="c-li-fir">
						<span>所属地区</span><span class="concatPhone">{{val.adress_city}}&nbsp;{{val.adress_area}}</span>
					</li>

					<li class="c-li-detail">
						<p>详细地址</p>

						<p class="concatPhone_de">
						{{val.adress_detail}}</p>
					</li>

					<li class="c-li-detail">
						<span>机构课程</span><p class="concatPhone_de">{{val.jgClass}}</p>
					</li>

					<li class="c-li-detail">
						<span>门店照片</span>
						<div class="photoShow">
							<ul class="photoShow-ul">
									<li><img v-bind:src="val.photo" alt=""></li>
									<li><img v-bind:src="val.photo" alt=""></li>
									<li><img v-bind:src="val.photo" alt=""></li>
									<li><img v-bind:src="val.photo" alt=""></li>
									<li><img v-bind:src="val.photo" alt=""></li>
							</ul>
						</div>
					</li>
					<li class="c-li-detail">
						<span>门店视频</span><p class="concatPhone_de vedio_img">
							<img v-bind:src="val.vedio" alt="">
						</p>
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
  name: 'nearlyJg',
  data(){
	  return {
	  	 jg_msg:[
	  	 		{
	  	 			concat:"0592-3366350",
	  	 			adress_city:"厦门市",
	  	 			adress_area:"思明区",
	  	 			adress_detail:"厦门市思明区软件园二期观日路48号",
	  	 			jgClass:`介绍了当代程序设计基本思想:面向对象,模块化,
					封装抽象化与测试。《编程方法》良好的编程思想。
	  	 			`,
	  	 			photo:require("./../../assets/search/coat.jpg"),
	  	 			vedio:require("./../../assets/search/vedio.jpg")
	  	 		}
	  	 ]
	  }
    
  },
  methods:{
	  goHome(){
	  	this.$router.push({
	  		path:"/"
	  	})
	  }
  }
  
}
</script>

 
<style scoped>
.h-sm{
 	width:100%;
 	height:50px;
 	background:#02b0b9;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	color:#fff;
 	font-size:19px;
 	box-shadow: 0px 1px 20px 1px #ccc;
 }

 .h-sm-left{
 	position:absolute;
 	left:15px;
 	height:35px;
 }
.center{
	width:100%;
	margin-top:20px;

}
.c-ul{
	width:100%;
}
.c-ul > .c-li-fir{
	width:100%;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	padding:10px 15px;
 	margin-bottom:10px;
}
.concatPhone{
	position:absolute;
	right:15px;
}
.c-ul > .c-li-detail{
	align-items:none; 
}
.c-ul > .c-li-detail{
	padding:10px 15px;
 	margin-bottom:10px;
}
.concatPhone_de{
	margin-top:18px;
}

.photoShow{
	width:100%;
	margin-top:18px;
	overflow:auto;
}
::-webkit-scrollbar {
            width: 0;
            height: 0;
            overflow: hidden;
 }
.photoShow-ul{
	width:100%;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
}
.photoShow-ul > li{
	display:block;
	margin-right:10px;
	background:red;
}
.photoShow-ul > li > img{
	display:block;
	width:107px;
	/*display:none;*/
}
.vedio_img > img{
	display:block;
	width:100%;
}
</style>