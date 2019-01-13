<template>
  <div class="mall">
   		<header class="header">
   				<img class="header-img" src="./../assets/mall/user_logo.jpg" alt="">
   				<div class="header-user">
   						<div class="userName">用户名</div>
   						<div class="datail">兑换明细</div>
   				</div>
   				<div class="integration">
   					<p class="yibai">100</p>
   					<p class="myInt">我的积分</p>
   				</div>
   		</header>
   		<nav class="center">
   			<ul class="center-ul">

   				<li>
   					<p>分类</p>
   					<ul class="tri-ul">
   						<li class="tri-li-fir"></li>
   						<li></li>
   					</ul>
   				</li>

   				<li>
   					<p>销量</p>
   					<ul class="tri-ul">
   						<li class="tri-li-fir"></li>
   						<li></li>
   					</ul>
   				</li>

   				<li>
   					<p>价格</p>
   					<ul class="tri-ul">
   						<li class="tri-li-fir"></li>
   						<li></li>
   					</ul>
   				</li>
   			</ul>
   		</nav>
   		<footer class="footer">
   			<div class="footer-ul-fir">
   				<div class="change">
   					<h3 class="footer-h3">我可兑换</h3>
					<p class="bg-change"></p>
   				</div>
					<div class="center-mall">
						<ul class="user-ul">
							<li v-for="(val,index) in camara">
								<img class="footer-camara" v-bind:src="val.src" alt="">
								<p class="footer-thing">{{val["mall"]}}</p>
								<p class="footer-integ-p">{{val["inte"]}}&nbsp;积分</p>
							</li>
						</ul>
					</div>
   			</div>
   			<div class="footer-ul-fir">
   				<div class="change">
   					<h3 class="footer-h3">全部商品</h3>
					<p class="bg-change"></p>
   				</div>
					<div class="center-mall">
						<ul class="user-ul">
							<li v-for="(val,index) in phone" @click="cli(index)">
								<img class="footer-camara" v-bind:src="val.src" alt="">
								<p class="footer-thing">{{val["mall"]}}</p>
								<p class="footer-integ-p">{{val["inte"]}}&nbsp;积分</p>
							</li>
						</ul>
						 
				</div>

					<div class="center-mall">
						<ul class="user-ul">
							<li v-for="(val,index) in camara">
								<img class="footer-camara" v-bind:src="val.src" alt="">
								<p class="footer-thing">{{val["mall"]}}</p>
								<p class="footer-integ-p">{{val["inte"]}}&nbsp;积分</p>
							</li>
						</ul>
						 
				</div>

   			</div>

   		</footer>
   		<br>
   		<br>
   		<br>
   		<br>
   		<br>
  </div>
</template>

<script>
export default {
  name: 'mall',
  data(){
	  return {
	  	 camara:[
	  	 	{src: require( "./../assets/mall/camara.jpg"),mall:"商品名称",inte:"1000"},
	  	 	{src: require( "./../assets/mall/camara.jpg"),mall:"商品名称",inte:"1000"},
	  	 	{src: require( "./../assets/mall/camara.jpg"),mall:"商品名称",inte:"1000"},
	  	 	{src: require( "./../assets/mall/camara.jpg"),mall:"商品名称",inte:"1000"},
	  	 	{src: require( "./../assets/mall/camara.jpg"),mall:"商品名称",inte:"1000"},
	  	 ],
	  	 phone:[
	  	 	{src: require( "./../assets/mall/phone.jpg"),mall:"商品名称",inte:"2000"},
	  	 	{src: require( "./../assets/mall/phone.jpg"),mall:"商品名称",inte:"2000"},
	  	 	{src: require( "./../assets/mall/phone.jpg"),mall:"商品名称",inte:"2000"},
	  	 	{src: require( "./../assets/mall/phone.jpg"),mall:"商品名称",inte:"2000"},
	  	 	{src: require( "./../assets/mall/phone.jpg"),mall:"商品名称",inte:"2000"},
	  	 ]
	  }
    
  },
  methods:{
  	cli(data){
  		// 路由设置
  		// console.log(data)
  	}
  },
  created(){
    this.$emit("changeChildColor","3")
  }
}
</script>

 
<style scoped>
 .header{
 	width:100%;
 	padding: 18px;
 	background:#13b4bc;
 	overflow:auto;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	color:#fff;
 }
.header-img{
	display:block;
	width:80px;
	border-radius:100%;
}
.header-user{
	margin-left:18px;
}
.userName{
	font-size:17px;
}
.datail{
	background:#2567ef;
	border-radius:15px;
	font-size:13px;
	margin-top:8px;
	padding:5px;
}
.integration{
	position:absolute;
	right:18px;
}
.yibai{
	font-size:28px;
}
.myInt{
	font-size:14px;
}
.center{
	width:100%;
	height:40px;

}
.center-ul{
	width:100%;
	height:40px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
}
.center-ul > li{
	width:30%;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	text-align:center;
	
}
.tri-ul{
	margin-left:6px;
}
.tri-ul > li{
	width:0;
	height:0;
	border:4px solid transparent;
	border-top-color: #000;
}
.tri-li-fir{
	visibility:hidden;
}
.change{
	width:100%;
	height:60px;
	margin-top:10px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	border-bottom:1px solid #F0F0F0;
}
.bg-change{
	height:0px;
	width:40px;
	box-shadow:-10px 0 10px 3px yellow;
	opacity:0.8;
}
.footer-h3{
	margin-right:-50px;
	
}
.center-mall{
	overflow:auto;
}
::-webkit-scrollbar {
            width: 0;
            height: 0;
            overflow: hidden;
 }
.user-ul{
	width: 180%;
	overflow:auto;
}
.user-ul >li{
	width: 14%;
	margin-left:1px;
	float:left;
	text-align:center;
	margin-left:5%;
}
.footer-camara{
	display:block;
	width:100%;
	margin-bottom:6px;
}

.footer-integ-p{
	color:#f40;
}
</style>