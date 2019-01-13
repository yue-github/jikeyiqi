<template>
  	<div class="banner clearfix">
		<ul class="clearfix" style="transform:translateX(-16.66%);">

			<li>
				<a href="#" @click="gotoWhere(4)">
					<img src="./../../img/b4.jpg" alt="" ref="img_four">
				</a>
			</li>

			<li>
				<a href="#" @click="gotoWhere(1)">
					<img src="./../../img/b1.jpg" alt="" ref="img_fir">
				</a>
			</li>

			<li>
				<a href="#" @click="gotoWhere(2)">
					<img src="./../../img/b2.jpg" alt="" ref="img_sec">
				</a>
			</li>

			<li>
				<a href="#" @click="gotoWhere(3)">
					<img src="./../../img/b3.jpg" alt="" ref="img_thir">
				</a>
			</li>

			<li>
				<a href="#" @click="gotoWhere(4)">
					<img src="./../../img/b4.jpg" alt="" ref="img_four">
				</a>
			</li>

			<li>
				<a href="#" @click="gotoWhere(1)">
					<img src="./../../img/b1.jpg" alt="" ref="img_fir">
				</a>
			</li>

		</ul>

		<ul>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		 
		</ul>
	</div>
</template>

<script>
export default {
  name: 'banner',
  data(){
	  return {
	  	 firUrl:"http://www.baidu.com",
	  	 secUrl:"",
	  	 thirUrl:"",
	  	 fourUrl:"",
	  }
    
  },
  methods:{
  	gotoWhere(index){
  		 switch(index){
  		 	case 1:
  		 	window.location=this.firUrl; 
  		 	break;

  		 	case 2:
  		 	window.location=this.secUrl; 
  		 	break;

  		 	case 3:
  		 	window.location=this.thirUrl; 
  		 	break;

  		 	default:
  		 	 window.location="http://find333.com"
  		 }
  	    	
  	}
  },
  mounted(){
  	 // 获取轮播数据
  	this.$axios.get("http://123.206.202.40:82/index.php/api/Index/getSwriper")
  	.then(data=>{

  		return data.data;
  	})
  	.then(swriper=>{
  		 console.log(swriper)
  		 if(this.$refs.img_thir){
  		 	this.$refs.img_thir.src= "http://123.206.202.40:82"+swriper[0].pic;
  		 }
  		
  		this.firUrl=swriper[0].url;
  		this.secUrl=swriper[1].url;
  		this.thirUrl=swriper[2].url;
  		 
  		 
  		// this.$refs.img_sec.src= "http://123.206.202.40:82"+swriper[1].pic;
  	})
   //获取头条
   		this.$axios.get("http://123.206.202.40:82/index.php/api/Index/getTops")
   		.then(data=>{
   			console.log(data)
   		})






		var banner=document.getElementsByClassName("banner")[0],
					timer=null,
					count=0,
					es=0,
					countes1=0,
					ulstarx,ulstarx1,
					touchS,touchM=false,touchE,countes,mhua;
			    var ban_ch_f=banner.children[0],
			    	ban_ch_s=banner.children[1],
				 	qw=false,pagestarx,
				    phonepagex=document.body.clientWidth;
				interval();
				ban_ch_f.addEventListener("touchstart",touchstarfn);
				function touchstarfn(e){
					// e.preventDefault();
					clearInterval(timer);
					if(qw==true){
						ban_ch_f.style.transform="translateX(-16.66%)";
						qw=false;
					}
					// 获取触摸那一刻的时间
					touchS=new Date();
				        pagestarx=e.changedTouches[0].pageX;
				    // 获取对象位移百分比中去掉“%”的数
				    	ulstarx=parseFloat(ban_ch_f.style.transform.split("(")[1])||-16.66;
				     	// 百分比与尺寸之间的换算
				     	ulstarx1=ulstarx*0.01*phonepagex/16.66*100;
				}
				ban_ch_f.addEventListener("touchmove",function(e){
						clearInterval(timer);
				    	// e.preventDefault();
				    	//求证是否移动的标识
				    	touchM=true;
				    	//求得移动与初始时间点差值；
				        var pagemovex=e.changedTouches[0].pageX,tmes;
				    	tmes=pagemovex-pagestarx;
				    	// 求得触摸移动的距离与元素对象初始位置x的加和
				    	var pagemovex=e.changedTouches[0].pageX;
				    	var	x=((pagemovex-pagestarx+ulstarx1)/phonepagex)*16.66+"%";
				    		// 正常transform赋值
				    	ban_ch_f.style.transform="translateX("+x+")";
				    	// 手指移动的距离
				    	countes=pagemovex-pagestarx;
				    })

				ban_ch_f.addEventListener("touchend",touchendfn);

				function touchendfn(e){
					clearInterval(timer);
					// e.preventDefault();
					// 获取触摸结束的时间点
				    	touchE=new Date();
					es=touchE-touchS;
					
					if(es<300&&touchM==true&&countes>0){
						if(count==0&&countes>0){
				    		count=4;
				    	}
						moveRight(ban_ch_f,count);
					}else if(es<300&&touchM==true&&countes<0){
						moveLeft(ban_ch_f,count);
					}else if(es>=300&&touchM==true){
						countes1=countes/phonepagex;
						if(countes1>0.5){
							if(count==0&&countes>0){
				    			count=4;
				    		}
							addsizeRight(ban_ch_f,count);
							
						}else if(countes1<0.5&&countes1>0){
							addsizeLeft(ban_ch_f,count);
							if(count==4){
									setTimeout(function(){
										ban_ch_f.style.transform="translateX(-16.66%)";
										count=0;
								},210)
							}
							
							
						}else{
							// 向右补充
							if(countes1>-0.5){
								addsizeLeftTwo(ban_ch_f,count);
								
							}else{
								addsizeRightTwo(ban_ch_f,count);
								
									setTimeout(function(){
										if(count==4){
											ban_ch_f.style.transform="translateX(-16.66%)";
										}
									count=count%4;
									ban_ch_s.children[count].style.background="#fff";
								},210);
								
								
							}
						}
					}
					
					interval();
					touchM=false;
				}
				// 定时器封装函数
				function interval(){
					timer=setInterval(function(){
						count++;
						if(count==4){
							setTimeout(function(){
								ban_ch_f.style.transform="translateX(-16.66%)";
							},310)
						}
						count=count%4;
					sport(ban_ch_f,count);
					for (var i = 0; i <4; i++) {
						ban_ch_s.children[i].style.background="#ccc";
					}
					try{
						ban_ch_s.children[count].style.background="#fff";
					}catch(error){

					}
					
				},2000);
				}
				// 运动函数封装	
				function sport(qElement,n){
					var nowtime=new Date(),i=0;
					var sportT=setInterval(function(){
					 i=-(new Date()-nowtime)/300;
						if(i<=-1){
							i=-1;
							clearInterval(sportT);
						}
						i=(i-n)*16.66+"%";
						qElement.style.transform="translateX"+"("+i+")";
					},1000/60);
				}
				// 时间小于300毫秒向右运动封装函数
				
				function moveRight(qElement,n){
					var nowtime=new Date(),i=0,mr;
					var sportT1=setInterval(function(){
					 i=(new Date()-nowtime)/200;
						if(i>=1){
							i=1;
							clearInterval(sportT1);
							count--;
							for (var j = 0; j <4; j++) {
								ban_ch_s.children[j].style.background="#ccc";
							}
							try{
								ban_ch_s.children[count].style.background="#fff";
							}catch(error){
								
							}
							

						}
						mr=(-(n+1)+countes/phonepagex+i*(1-(countes/phonepagex)))*16.66+"%";
						qElement.style.transform="translateX"+"("+mr+")";
					},1000/60);
				}
		// 时间小于300毫秒向左运动封装函数
				function moveLeft(qElement,n){
					n++;
					if(count==3){
						qw=true;
					}
					var nowtime=new Date(),i=0,ml;
					var sportT2=setInterval(function(){
					 i=-(new Date()-nowtime)/200;
						if(i<=-1){
							i=-1;
							clearInterval(sportT2);
							count++;
							count=count%4;
							for (var j = 0; j <4; j++) {
								ban_ch_s.children[j].style.background="#ccc";
							}
							ban_ch_s.children[count].style.background="#fff";
					
						}
						    ml=(-n+countes/phonepagex+i*(1+(countes/phonepagex)))*16.66+"%";

						qElement.style.transform="translateX"+"("+ml+")";
					},1000/60);
				}
			// addsizeLeft向右慢划向左补充的封装函数
			function addsizeLeft(bElement,c){
				var nowtime=new Date(),n;
				var sportT3=setInterval(function(){
					n=(new Date()-nowtime)/200;
					if(n>=1){
						n=1;
						clearInterval(sportT3);
					}
					n=(-(c+1)+countes1-n*countes1)*16.66+"%";
					bElement.style.transform="translateX("+n+")";
				},1000/60)
			}
			// addsizeRight向右慢划向右补充的封装函数
			function addsizeRight(bElement,c){
				// if(count==4){
				// 	bElement.style.transform="translateX("+n+")";
				// }
				var nowtime=new Date(),n;
				var sportT4=setInterval(function(){
					n=(new Date()-nowtime)/200;
					if(n>=1){
						n=1;
						clearInterval(sportT4);
						count--;
						 
						for (var j = 0; j <4; j++) {
						ban_ch_s.children[j].style.background="#ccc";
					}
					ban_ch_s.children[count].style.background="#fff";
					}
					n=(-(c+1)+countes1+n*(1-countes1))*16.66+"%";
					bElement.style.transform="translateX("+n+")";
				},1000/60)
			}

			//addsizeLeftTwo向左慢划向右补充的封装函数;
			function addsizeLeftTwo(bElement,c){
				var nowtime=new Date(),n;
				var sportT5=setInterval(function(){
					n=(new Date()-nowtime)/200;
					if(n>=1){
						n=1;
						clearInterval(sportT5);
						//count--;
						for (var j = 0; j <4; j++) {
						ban_ch_s.children[j].style.background="#ccc";
					}
					ban_ch_s.children[c].style.background="#fff";
					}
					n=(-(c+1)+countes1-n*countes1)*16.66+"%";
					bElement.style.transform="translateX("+n+")";
				},1000/60)
			}
			//addsizeRightTwo向左慢划向左补充的封装函数;
			function addsizeRightTwo(bElement,c){
				var nowtime=new Date(),n;
				var sportT6=setInterval(function(){
					n=(new Date()-nowtime)/200;
					if(n>=1){
						n=1;
						clearInterval(sportT6);
						count++;
						
						for (var j = 0; j <4; j++) {
						ban_ch_s.children[j].style.background="#ccc";
						}
					
					}
					n=(-(c+1)+countes1-n*(1+countes1))*16.66+"%";
					bElement.style.transform="translateX("+n+")";
				},1000/60)
			}
 
 
  	}
}
</script>

 
<style scoped>
.banner{
	width:100%;
	max-width:640px;
	min-width:300px;
	margin:0 auto;
	position:relative;
	overflow:hidden;
}
.banner > ul:first-child{
	width:600%;

}

.banner > ul:first-child > li{
	width:16.66%;
	float:left;
	 
}
.banner > ul:first-child > li > a{
	display:block;
	width:100%;
	 
}
.banner > ul:first-child > li > a > img{
	display:block;
	width:100%;
}

.banner > ul:last-child{
	width:100px;
	height:6px;
	position:absolute;
	bottom:10px;
	right:0;
	
}
.banner > ul:last-child > li{
	width:6px;
	height:6px;
	float:left;
	border-radius: 20px;
	background:#ccc;
	z-index: 100;
	margin-right:6px;
}
.banner > ul:last-child > li:first-child{
	background:#fff;
}


</style>