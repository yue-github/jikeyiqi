<template>
  	<div id="app">
  		<router-view v-on:changeColor="changeColor($event)" v-on:changeChildColor="changeChildColor($event)" v-bind:position="position" v-on:hiddenFooter="hiddenFooter($event)"/>
  		<!--主页面脚部导航部分-->
		    <div class="footer" ref="footer">
		    	<ul>
		    		<li @click="footerNavFun(1)" ref="router1">
		    			<router-link to="/" class="footer-r">
		    				<p><img src="./assets/home/footerNav11.jpg" alt=""></p>
		    				<p>首页</p>
		    			</router-link>
		    		</li>

		    		<li @click="footerNavFun(2)" ref="router2">
		    			<router-link to="/Child" class="footer-r">
		    				<p><img src="./assets/home/footerNav22.jpg" alt=""></p>
		    				<p>童星</p>
		    			</router-link>
		    		</li>

		    		<li @click="footerNavFun(3)" ref="router3">
		    			<router-link to="/Mall" class="footer-r">
		    				<p><img src="./assets/home/footerNav33.jpg" alt=""></p>
		    				<p>商城</p>
		    			</router-link>
		    		</li>

		    		<li @click="footerNavFun(4)" ref="router4">
			    		<router-link to="/Person" class="footer-r">
			    			<p><img src="./assets/home/footerNav44.jpg" alt=""></p>
		    				<p>个人</p>
			    		</router-link>
		    		</li>
		    	</ul>
		    </div>
		    <div class="appendBaidu"></div>
  	</div>
</template>
<script>
	export default {
	  name: 'module',
	  data(){
		  return {
		  	position:"全国",
		  	msg:"module",
		  }
	    
	  },
	  methods:{
	  	// 底部导航栏切换变色
	  	footerNavFun(mark){
	  		// this.$store.data
	  		for(let ele in this.$refs){
	  			this.$refs[ele].firstChild.style["color"]="#000";
	  		}
	  			  
	  	 	 this.$refs["router"+mark].firstChild.style["color"]="#00b1bb";
	  	 	 // if(mark==2){
	  	 	 	

	  	 	 // }
	  	  
	  	},
	  	changeColor(data){
	  		 this.footerNavFun(1)
	  	},
	   
		changeChildColor(data){
			// console.log(data)
			 this.footerNavFun(data);
		},
		hiddenFooter(){
			if(!this.$store.state.enterHome_boo){
				this.$refs.footer.style.display="none"
			}
			
		}
			 
	  },
	  updated(){
	  	// 对脚部进行一个展示
	  	// console.log(this.$store.state.enterHome_boo)
	  	if(this.$store.state.enterHome_boo){
	  		// 模卡
	  		this.$refs.footer.style.display="block"
	  	}
	  },
	  mounted(){
	  	// 获取位置
	  	let store=this.$store,
	  		vue=this;

	  	const promise=new Promise(function(resolve,reject){
	  		doLBS(resolve);
	  		 
	  	});
	  	promise.then(city=>{
	  		//对主页面的位置进行更改
	  		console.log(city)
	  		this.position=city;
	  	})
	  	function doLBS(resolve){
		  	navigator.geolocation.getCurrentPosition(success,error,obj);
		  	function success(data){
	  		// require("http://api.map.baidu.com/api?v=2.0&ak=0HQ3EvdX6kIr5CHEZTl01ko7fRfIxUK5").then(obj=>{
					let address=data.address,
					    coord=data.coords;
					let lon=coord.longitude,
					    lat=coord.latitude;
					if(address){
						if(address.city){
							store.state.position=address.city;
							 
						}else{
							alert("您所在位置不存在城市");
						}
					}else{
						// var script=document.createElement("script");
						// script["src"]="http://api.map.baidu.com/api?v=2.0&ak=HBMD66QZdnW6qRcIkuWXpGtRXGsCnxDP";
						// document.getElementsByClassName("appendBaidu")[0].appendChild(script);
						let B_i=0;
						let timer=setInterval(function(){
							try{
								if(BMap){
									clearInterval(timer);
									var baidu_m=new BMap.Geocoder(),
										add_data=new BMap.Point(lon,lat);
									baidu_m.getLocation(add_data,function(b_d){
									 	var b_city=b_d.addressComponents.city;
									 	if(b_city){
									 		resolve(b_city)
									 		store.state.position=b_city;
									 	}else{
									 		alert("您所在位置不存在城市");
									 	}
									 	// console.log(b_d);
									 	// console.log(b_d.address);
									 	// console.log(b_d.addressComponents.streetNumber)
									 	return false;
									});
								}
							}catch(error){}
							B_i++;
							if(B_i>=600){
								// alert("定位失败");
								clearInterval(timer);
							}
						},1000/60);
					}
			 
			}
			function error(error){
				// alert("位置获取失败");
			}
			let obj={
				enableHighAccuracy:true,
				timeout:5000,
			};
			 
		}


	  }//mounted



}//最外面
</script>
<style>
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
.licla{
	/*background:blue;*/
}

#app {
	position:relative;
	width:100%;
	max-width:640px;
	min-width:300px;
 	margin:0 auto;
}
#app > .footer{
	width:100%;
	height:55px;
	position:fixed;
	max-width:640px;
	min-width:300px;
	background:#fff;
	bottom:0;
	z-index:100;
	display:none;
}
#app > .footer > ul{
	position:absolute;
	box-sizing:content-box;
	display:flex;
	width:100%;
	height:55px;
	z-index:2;
	/*border-top:1px solid #F0F0F0;*/
	box-shadow:0px 0px 10px 1px #ccc;
}
#app > .footer > ul > li{
	width:25%;
	height:50px;
	float:left;
}
#app > .footer > ul > li > .footer-r{
	text-decoration:none;
	height:50px;
	color:#000;
}
#app > .footer > ul >:first-child > .footer-r{
	color:#00b1bb;
}
#app > .footer > ul > li > .footer-r > p{
	width:100%;
	height:25px;
	display:flex;
	align-items: center;
	justify-content: center;
	box-sizing: content-box;
	overflow:hidden;
}
#app > .footer > ul > li > .footer-r >:nth-child(odd){
	padding-top:5px;
	z-index:3;
}

</style>
