<template>
  <div class="DoMCar">
   	  <header class="h-sm">
	   	 		<img src="./../assets/otherProject/blue_left.png" alt="" class="h-sm-left">
	   	 		<div class="h-content">制作模卡</div>
	   </header>
		<div class="center">
			<div class="c-left">
				<ul class="c-left-ul">
					<li><img src="./../assets/otherProject/inc.png" alt=""></li>
					<li><img src="./../assets/otherProject/inc.png" alt=""></li>
					<li class="m-r-no"><img src="./../assets/otherProject/inc.png" alt=""></li>
					<li>
						<span class="childName">		{{cuteChild.name}}
						</span>

						<span>
							生日&nbsp;{{cuteChild.life}}&nbsp;居住地&nbsp;{{cuteChild.adress}}&nbsp;身高{{cuteChild.height}}&nbsp;体重&nbsp;
						{{cuteChild.weight}}&nbsp;鞋码&nbsp;{{cuteChild.xiema}}
						</span>
					</li>
					<li><img src="./../assets/otherProject/inc.png" alt=""></li>
					<li class="m-r-no"><img src="./../assets/otherProject/inc.png" alt=""></li>
				</ul>
			</div>
			<div class="c-right">
				<img src="./../assets/otherProject/inc.png" alt="">
			</div>
		</div>
		<div class="footer">
			<div class="f-top">选择模板</div>
			<div class="f-center">
				<div class="c-model">
					<ul class="c-model-ul">
						<li>
							<div class="f-gotoCenter">
								<img src="./../assets/otherProject/m1.png" alt="">
								 <span class="f-font" v-bind:class="{addColor:firBoo}" @click="changeColor('firBt','firBoo','firBoo1','firBoo2','firBoo3','firBoo4')">1</span>
							</div>
							
						</li>

						<li>
							<div class="f-gotoCenter">
								<img src="./../assets/otherProject/m2.png" alt="">
								<span class="f-font" v-bind:class="{addColor:firBoo1}" @click="changeColor('secBt','firBoo1','firBoo','firBoo2','firBoo3','firBoo4')">2</span>
							</div>
							
						</li>

						<li>
							<div class="f-gotoCenter">
								<img src="./../assets/otherProject/m1.png" alt="">
								<span class="f-font" v-bind:class="{addColor:firBoo2}" @click="changeColor('thirBt','firBoo2','firBoo1','firBoo','firBoo3','firBoo4')">3</span>
							</div>
							
						</li>

						<li>
							<div class="f-gotoCenter">
								<img src="./../assets/otherProject/m1.png" alt="">
								<span class="f-font" v-bind:class="{addColor:firBoo3}" @click="changeColor('fourBt','firBoo3','firBoo1','firBoo2','firBoo','firBoo4')">4</span>
							</div>
							
						</li>

						<li>
							<div class="f-gotoCenter">
								<img src="./../assets/otherProject/m1.png" alt="">
								<span class="f-font" v-bind:class="{addColor:firBoo4}" @click="changeColor('fivBt','firBoo4','firBoo1','firBoo2','firBoo3','firBoo')">5</span>
							</div>
							
						</li>

					</ul>
				</div>
			</div>
			<div class="f-complete">完成</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'DoMCar',
  data(){
	  return {
	  	 cuteChild:{
	  	 	name:"萌娃姓名",
	  	 	life:"2015-09-04",
	  	 	adress:'厦门',
	  	 	height:"140cm",
	  	 	weight:"32kg",
	  	 	xiema:"32号",
	  	},
	  	firBoo:true,
	  	firBoo1:false,
	  	firBoo2:false,
	  	firBoo3:false,
	  	firBoo4:false

	  }
    
  },

  methods:{
  	changeColor(who,...which){
  		switch(who){
  			case 'firBt':
  			 for(let val in which){
  			 	this['val']=false;
  			 }
  			 this['who']=true;
  			break;
  			case 'secBt':
  			 for(let val in which){
  			 	this['val']=false;
  			 }
  			 this['who']=true;
  			break;
  			case 'thirBt':
  			 for(let val in which){
  			 	this['val']=false;
  			 }
  			 this['who']=true;
  			break;
  			case 'fourBt':
  			 for(let val in which){
  			 	this['val']=false;
  			 }
  			 this['who']=true;
  			break;
  		}
  	}
  }
}
</script>

 
<style scoped>
/*初始化*/
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
 .h-sm-right{
 	position:absolute;
 	right:10px;
 	height:28px;
 }
 .center{
 	margin-top:20px;
 	width:100%;
 	overflow:auto;
 }
 .c-left{
 	width:74.5%;
	float:left;
 }
 .c-left-ul{
 	width:100%;
 	overflow:auto;
 }
 .c-left-ul > li{
 	width:32.001%;
 	height:150px;
 	float:left;
 	margin-right:2%;
 	margin-bottom:2%;
 	border:1px solid #ccc;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	font-size:13px;
 	padding:5px;
 	flex-wrap:wrap;
 }
 .c-right{
 	width:23.5%;
	float:right;
	height:300px;
	box-sizing: content-box;
	padding-bottom: 1%;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	border:1px solid #ccc;
 }
 .c-left-ul > .m-r-no{
 	margin-right:0;
 }
 .c-left-ul > li > .childName{
	font-weight:bold;
	font-size:15px;
 }
 .footer{
 	width:100%;
 	margin-top:18px;
 }
 .f-top{
	font-weight:bold;
	padding-left:10px;
 }
 .f-center{
	width:100%;
 }
 .c-model{
 	width:100%;
 	padding:40px 0px;
 	overflow:auto;
 }
::-webkit-scrollbar {
            width: 0;
            height: 0;
            overflow: hidden;
 }
 .c-model-ul{
 	height:100px;
 	width:250%;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	overflow: auto;
  }
 .c-model-ul > li{
 	width:20%;
 	height:100px;
 	text-align:center;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	text-align: center;
 }
 .f-gotoCenter > img{
 	display:block;
 	width:60px;
 	margin-bottom:10px;
 }
 .f-gotoCenter > .f-font{
 	padding:0 6px;
 	border-radius:100%;
 	background:#F0F0F0;
 	color: #ADADAD;

 }
  .f-gotoCenter > .addColor{
  	background:#ADADAD;
 	color:#000;
  }
  .f-complete{
  	background: #009688;
  	width:100%;
  	height:45px;
  	color:#fff;
  	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	text-align: center;
 	font-size: 17px;
  }
</style>