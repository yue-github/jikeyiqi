<template>
  <div class="Model2">
    	<div class="m-left" ref="mLeft">
		 	<div class="m-l-left">
				<img v-bind:src="imgSrc[0]" alt="" class="m-l-l-img">
		 	</div>
		 	<div class="m-l-right">
				<img v-bind:src="imgSrc[1]" class="m-l-r-top">
				
		 	</div>
		 	<div class="m-l-r-bottom" @click="inputShow()">
		 		<p class="p-one">{{childMsg.name}}</p>
		 		<p class="p-sec">{{childMsg.py}}</p>
		 		<p class="p-thir">&nbsp;</p>
		 		<p class="p-four">小名:{{childMsg.xm}}</p>
		 		<p class="">{{childMsg.life}}</p>
		 		<p class="">身高:{{childMsg.height}}cm</p>
		 		<p class="">体重:{{childMsg.weight}}kg</p>
		 		<p class="">鞋码:{{childMsg.xiema}}码</p>
			</div>
    	</div>

		

    	<div class="m-right" ref="mRight">
			<ul class="m-right-top">
				<li>
					<input type="file" class="inpFile" @change="loadImg()" ref="inpFileFir">
					<img v-bind:src="imgSrc[2]" alt="" class="imgSrc1 inSrcFir" ref="inSrcFir">
				</li>
				<li><img v-bind:src="imgSrc[3]" alt="" class="imgSrc1 inSrcSec"></li>
				<li><img v-bind:src="imgSrc[4]" alt="" class="imgSrc1 inSrcThir"></li>
			</ul> 
			<ul class="m-right-top m-right-bottom">
				<li><img v-bind:src="imgSrc[5]" alt="" class="imgSrc1 inSrcFour"></li>
				<li><img v-bind:src="imgSrc[6]" alt="" class="imgSrc1"></li>
				<li><img v-bind:src="imgSrc[7]" alt="" class="imgSrc1"></li>
			</ul> 
    	</div>
    	<div class="userInput" ref="userInput" v-show="input_boo">
    		<div class="u-bg"></div>
    		<div class="input-content">
    		 	<ul class="input-content-ul">
    		 		<li>
    		 			姓名:
    		 			<input type="text" class="input-text" maxlength="10" ref="inp_fir" v-model="childMsg.name">
    		 		</li>
    		 		<li>
    		 			姓名拼音:
    		 			<input type="text" class="input-text" maxlength="15" v-model="childMsg.py">
    		 		</li>
    		 		<li>
    		 			小名:
    		 			<input type="text" class="input-text" maxlength="10" v-model="childMsg.xm">
    		 		</li>
    		 		<li>
    		 			出生年月:
    		 			<input type="text" class="input-text" maxlength="20" v-model="childMsg.life">
    		 		</li>
    		 		<li>
    		 			身高:
    		 			<input type="text" class="input-text" maxlength="5" v-model="childMsg.height">
    		 		</li>
    		 		<li>
    		 			体重:
    		 			<input type="text" class="input-text" maxlength="5" v-model="childMsg.weight">
    		 		</li>
    		 		<li>
    		 			鞋码:
    		 			<input type="text" class="input-text" maxlength="3" v-model="childMsg.xiema">
    		 		</li>
    		 		 <li class="lastChild" @click="inputHidden()"><span class="li-span">确定</span></li>
    		 		 
    		 	</ul>
    		</div>
    	</div>

  </div>
</template>

<script>
export default {
  name: 'Model2',
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
	  	 	py:"housiqi",
	  	 	py2:"si",
	  	 	py3:"qi",
	  	 	xm:"妞妞",
	  	 	life:"2014年2月12日(4周岁)",
	  	 	height:"108",
	  	 	weight:"17",
	  	 	xiema:"28"
	  	 },
	  	 input_boo:false
	  }

    
  },
  methods:{
  	inputShow(){
  		this.input_boo=!this.input_boo;
  	},
  	inputHidden(){
  		this.input_boo=!this.input_boo;
  		// this. childMsg.name=this. childMsg.name;
  		// this. childMsg.py=this.$refs.inp_sec.value;
  		// this. childMsg.xm=this.$refs.inp_.value;
  		// this. childMsg.life=this.$refs.inp_fir.value;
  		// this. childMsg.weight=this.$refs.inp_fir.value;
  		// this. childMsg.height=this.$refs.inp_fir.value;
  		// this. childMsg.xiema=this.$refs.inp_fir.value;
  	},
  	loadImg(){
  		let  input=this.$refs.inpFileFir;
  		// console.log(input)
  		this.changepic(input); 
  	},
  	//obj是指input对象
	changepic(obj) {
        //这里可以获取上传文件的name
          var newsrc=this.getObjectURL(obj.files[0]);
          document.getElementsByClassName("inSrcFir")[0].setAttribute("src",newsrc);
    },
 
    //建立一個可存取到該file的url
   getObjectURL(file) {
      if(!file){
        return false;
      }

        var url = null ;
        // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
        if (window.createObjectURL!=undefined) { // basic
            url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
    }
  },
  mounted(){

  // 	let mr=this.$refs["userInput"];
  // 	window.addEventListener("orientationchange",function(){
  // 		if(window.orientation==180||window.orientation==90){
  // 		 mr.style.height=document.body.scrollHeight+"px";
  // 		 mr.style.width=document.body.scrollHeight+"px";
  // 		 console.log()
  // 		}else{
  // 			console.log("竖屏")
  // 		mr.style.height=document.body.scrollHeight+"px";
  // 		mr.style.width=document.body.scrollWidth+"px";
  // 		}

  // 	});
  	 
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
.Model2{
	width:98%;
	min-width:300px;
	max-width: 640px;
	margin:0 auto;
	overflow:auto;
	position:relative;
}
.m-left{
	width:100%;
	/*width:55%;*/
	overflow:auto;
	/*float:left;*/
	 position:relative;

}
.m-right{
	width:100%;
	/*width:45%;*/
	/*float:right;*/
	overflow:auto;
	padding-top:1.8%;
	position:relative;

}
/*竖屏*/
@media all and (orientation:portrait){
	.m-left{
	width:100%;
	/*width:55%;*/
	overflow:auto;
	/*float:left;*/

	}
.m-left > .m-l-r-bottom{
	top:36%;
}
.m-right{
	width:100%;
	/*width:45%;*/
	/*float:right;*/
	overflow:auto;
	padding-top:1.8%;
	}
.m-right > .m-right-top{
	margin-top:3vh;

	}
	
}
@media all and (orientation:landscape){
	.m-left{
	/*width:100%;*/
	width:48%;
	overflow:auto;
	float:left;
	 
	}
.m-right{
	/*width:100%;*/
	width:52%;
	float:right;
	overflow:auto;
	padding-top:1.8%;
	}
}
.m-l-l-img{
	width:70%;
	float:left;
}
.m-l-right{
	width:30%;
	float:right;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;

}
.m-l-r-top{
	margin-top:10vh;
	width:80%;
}
.m-l-r-bottom{
	position:absolute;
	right:0;
	top:33%;
	width:65%;
	height:56%;
	background:#d1bfb3;
	text-align: center;
}
.m-l-r-bottom > p{
	margin-bottom:1vh;
	color:#fff;
	font-family:"华文行楷";
}
.p-thir{
	width:30px;
	height:5px;
	background:#fff;
	margin:0 auto;
}
.m-l-r-bottom > .p-four{
	margin-top:3px;
}
.m-l-r-bottom > .p-thir{
	margin-top:-1.5vh;
}
.p-one{
	margin-top:5vh;
	font-size:1.8rem;
}
.m-right-top{
	width:100%;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	margin-top:20vh;
}
.m-right-top > li{
	width:32%;
	position:relative;
}
.imgSrc1{
	width:100%;
}
.m-right-bottom{
	margin-top:1vh;
}
.userInput{
	width:100%;
	height:100%;
	position:absolute;
	z-index:1000;
	top:0;
	left:0;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
}
.u-bg{
	width:100%;
	height:100%;
	position:absolute;
	top:0;
	left:0;
	opacity:0.8;
	background:#000;
}
.input-content{
	position:relative;
	width:280px;
	height:280px;
	/*background:pink;*/
	z-index:2;
	border:1px solid pink;
	box-shadow: 0px 0px 20px 1px pink;
	opacity:0.9;
	padding:10px;
}
 
.input-content-ul{
	width:100%;
}
.input-content-ul > li{
	color:#fff;
	margin-bottom:10px;
	position:relative;
}
.input-text{
	caret-color:#fff;
	background:none;
	border-bottom:1px solid #fff;
	padding-left:5px;
	color:#fff;
}
.input-content-ul > .lastChild{
	color:red;
	text-align:center;
	padding:5px;
}
.li-span{
	background:pink;
	padding:3px;
	border-radius:5px;
}
.inpFile{
	width:100%;
	height:100%;
	display:block;
	width:100%;
	height:100%;
	position:absolute;
	opacity:0;
	top:0;
	left:0;
	 
	z-index:2;
}
</style>