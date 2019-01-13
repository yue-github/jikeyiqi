<template>
  <div class="position">
    	<!-- 城市选择 -->
	<div class="P_cityChoose">
	<!-- 头部 -->
		<div class="headFixed"><!-- 去除pc端的疑难杂症 -->
			<div class="head">
				<input type="search" class="search" maxlength="20" placeholder="城市名">
				<span class="delete glyphicon glyphicon-remove-circle"></span>
				<span class="pass">取消</span>
			</div>
		</div>
		<!-- 中部 -->
		<div class="centerFixed"><!-- 解决pc端访问时的尺寸问题 -->
		<!-- 悬浮头部用于显示当前城市 -->
			<div class="top">
				所选城市:<span>广州市</span>
			</div>
			<!-- 悬浮底部用于显示局部块分类名称例如A分类 -->
			<div class="foot">
				<span class="P_fire glyphicon glyphicon-fire"></span><span class="sec">热点城市</span>
			</div>
			<!-- 筛选结果 -->
			<div class="footS">
				<span class="P_fire_s">筛选结果:</span>
			</div>
			<!-- 字母导航 -->
			<div class="rightFixed">
				<ul>
					<li>A</li>
					<li>B</li>
					<li>C</li>
					<li>D</li>
					<li>E</li>
					<li>F</li>
					<li>G</li>
					<li>H</li>
					<li>I</li>
					<li>J</li>
					<li>K</li>
					<li>L</li>
					<li>M</li>
					<li>N</li>
					<li>O</li>
					<li>P</li>
					<li>Q</li>
					<li>R</li>
					<li>S</li>
					<li>T</li>
					<li>U</li>
					<li>V</li>
					<li>W</li>
					<li>X</li>
					<li>Y</li>
					<li>Z</li>
				</ul>
			</div>
			<!-- 点击字母中间出现提示小方块  -->
			<div class="city_warn">
				<div class="bg"></div>
				<span>W</span>
			</div>
		</div>
		<!-- 脚部 -->
		<div class="foot">
				 <div class="main">
				 	<ul class="ulF">
				 		  

				 		 <!-- 渲染 -->
				 	</ul>
				 	<ul class="ulS">
				 	<!-- 渲染匹配项 -->
				 	</ul>
				 </div>
		</div>
	
	</div>
  </div>
</template>

<script>
import city from './../../public/jsonp_city.js'
export default {
  	name: 'position',
  	data(){
  		return {
  			cityData:city,
  			fromWhere:"home"
  		}
  	},
  	methods:{
	  		// goHome(){
	  		// 	console.log(this.fromWhere)
	  		// 	switch(this.fromWhere){
	  		// 		case 'an':
	  		// 		this.$router.push("/AnnounceList");
	  		// 		break;

	  		// 		case 'activityHome':
	  		// 		this.$router.push("/ActivityHome");
	  		// 		break;

	  		// 		case 'home':
	  		// 		this.$router.push("/home");
	  		// 		break;

	  		// 		case 'Separate':
	  		// 		this.$router.push("/Separate");
	  		// 		break;
	  		// 	}
	  			 
	  			
	  		// }
  	},
  	mounted(){
  		  // 城市选择页面对象
  		  // let city=JSON.stringify(city);
  		  let city_string=JSON.stringify(city)
  		 
				let yue_findPosition_cityChoose={
					// 对象全局执行
					do:function(){
						this.reset();
						this.startDoing();
						this.bind();
					},
					startDoing:function(){
						this.city_callBack_fun();
						this.$city_f_fire_s.css("display","none")
					},
					// 初始化数据变量
					reset:function(){
						 
						// 主页面与城市选择界面切换页面滚动的对应效果判断
						this.$P_cityChoose=$(".P_cityChoose");
						this.index_city_boo=false;
						this.city_value_start="";
						this.$city_the_city=$(".P_cityChoose > .centerFixed > .top > span");
						// 获取城市选择模块中总滑块
						this.$P_cityCho_foot=$(".P_cityChoose > .foot");
						// console.log(this.$P_cityCho_foot)
						this.$city_search=$(".P_cityChoose > .headFixed > .head > .search");
						this.$city_pass=$(".P_cityChoose > .headFixed > .head > .pass");
						this.$city_delete=$(".P_cityChoose > .headFixed > .head > .delete");
						this.$city_slide_ul=$(".P_cityChoose > .foot > .main > .ulF");
						// 滑块匹配放入的ul
						this.$city_slide_ulS=$(".P_cityChoose > .foot > .main > .ulS");
						
						this.$city_letter_r=$(".P_cityChoose > .centerFixed > .rightFixed > ul");
						this.$city_letter_warn=$(".P_cityChoose > .centerFixed > .city_warn");
						this.$city_f_fire=$(".P_cityChoose > .centerFixed > .foot");
						this.fire_redian=this.$city_f_fire.html();
						// 筛选结果模块
						this.$city_f_fire_s=$(".P_cityChoose > .centerFixed > .footS");
						// 改变指针，构造函数继承
						
						
					},
					// 为各种元素添加绑事件
					bind:function(){
						// this.$FP_position.on("click",$.proxy(this.$FP_position_fun,this));
						this.$city_pass.on("click",$.proxy(this.$city_pass_fun,this));
						this.$city_search[0].oninput=$.proxy(this.match_city_fun,this);
						this.$city_delete.on("click",$.proxy(this.$city_delete_fun,this))
						this.$city_slide_ul.on("touchstart",$.proxy(this.$city_slide_ul_startFun,this));
						this.$city_slide_ul.on("touchend",$.proxy(this.$city_slide_ul_endFun,this));
						// 筛选结果模块绑定切换选中城市
						this.$city_slide_ulS.on("touchstart",$.proxy(this.$city_slide_ul_startFun,this));
						this.$city_slide_ulS.on("touchend",$.proxy(this.$city_slide_ul_endFun,this));
						// 字母导航
						this.$city_letter_r.on("touchstart",$.proxy(this.$city_letter_r_startFun,this));
						this.$city_letter_r.on("touchend",$.proxy(this.$city_letter_r_endFun,this));
						$(window).on("scroll",$.proxy(this.w_scroll_fun,this));
						this.$city_the_city.parent().on("click",$.proxy(this.$city_pass_fun,this));
						
					},
					// 主页中上方位置信息点击时添加事件切换到城市选择
					$FP_position_fun:function(){
						// $("#search_position").data("boo","");
						this.index_city_boo=true;
						var FPP=this;
						FPP.$findPosition.animate({"opacity":"0"},500,function(){
							FPP.$findPosition.css({"display":"none"});
						});
						FPP.$P_cityChoose.css({"opacity":"0","display":"block"});
						FPP.$P_cityChoose.animate({"opacity":"1"},500);
						FPP.$city_search[0].focus();
					},
					// 城市选择界面点击取消执行的函数
					$city_pass_fun:function(){
						this.index_city_boo=false;
						this.$P_cityChoose.css("display","none");
						// if($("#search_position").data("boo")=="true"){
						// 	$("#search_position").css("display","block");
						// }else{
						// 	this.$findPosition.css({"display":"block"});
						// 	this.$findPosition.animate({"opacity":"1"},500);
						// }
						
					},
					// 城市选择界面中的搜索框中的X号绑定事件
					$city_delete_fun:function(e){
						this.$city_search.val("");
						this.city_value_start="";
						$(e.target).css("display","none");
						this.$city_search[0].focus();
						this.$city_slide_ul.css("display","block");
						this.$city_slide_ulS.css("display","none");
						this.$city_f_fire.css("display","");
						this.$city_f_fire_s.css("display","none");
						this.$city_letter_r.parent().css("display","block");
						this.$city_f_fire.html(this.fire_redian);
						$(document).scrollTop(0);
						this.bool_fire=true;
					},
					// 城市选择中底下滑动块获取li中城市名称及赋值(底下两个函数)
					$city_slide_ul_startFun:function(e){
						this.CS_startTouchTop=e.changedTouches[0].clientY;
						if(e.target.nodeName!=="UL"){
							$(e.target).children("span").removeClass("addColorSpan");
							$(e.target).css("background","#F0FFF0");
						}
					},
					$city_slide_ul_endFun:function(e){
						$(e.target).css("background","");
						if((e.changedTouches[0].clientY-this.CS_startTouchTop)==0){
							if(e.target.nodeName==="LI"){
								var c_val=$(e.target).html();
								this.$city_the_city.html(c_val);
								// this.$FP_position.html(c_val);
								// this.$search_position_city_left.children("span").eq(0).html(c_val);
								this.$city_pass_fun();
								return false;
							};
						};
					},
					 // 导入数据
					city_callBack_fun:function(){
						let data_city=city_string;
						sessionStorage.setItem("city_data",data_city);
						data_city=JSON.parse(data_city);
						let li,
							frag=document.createDocumentFragment(),
							data_cityL=data_city.length,
							city_main_ul=document.getElementsByClassName("P_cityChoose")[0].children[2].children[0].children[0];
							 
						for(var j in data_city[0]){
	 
 
							li=document.createElement("li");
							li.style.paddingLeft="5%";
							li.style.width="100%";
							li.style.height="33.5px";
							li.style.display="flex";
							li.style.alignItems="center";
							li.style.borderBottom="1px solid #F0F0F0";
							li.style.paddingLeft="5%";
							li.innerHTML=data_city[0][j];

							frag.appendChild(li);
							 
						};
						for(var i=1;i<data_cityL;i++){
							li=document.createElement("p");
							li.className="ulFP";
							li.style.paddingLeft="5%";
							li.style.width="100%";
							li.style.height="26.68px";
							li.style.display="flex";
							li.style.alignItems="center";
							li.style.background="#F0FFF0";
							li.style.borderBottom="1px solid #F0F0F0";
							li.style.paddingLeft="5%";
							li.innerHTML=data_city[i]["letter"];
							frag.appendChild(li);

							 
							for(var z=0;z<data_city[i].length;z++){
								li=document.createElement("li");
								li.className="ulFLi";
								li.style.paddingLeft="5%";
								li.style.width="100%";
								li.style.height="33.5px";
								li.style.display="flex";
								li.style.alignItems="center";
								li.style.borderBottom="1px solid #F0F0F0";
								li.style.paddingLeft="5%";
								li.innerHTML=data_city[0][j];
								li.innerHTML=data_city[i][z];
								frag.appendChild(li);
							};
						} ;
						city_main_ul.appendChild(frag);


					},
					// 城市选择模块中点击右边的字母导航时执行触摸开始函数
					$city_letter_r_startFun:function(e){
						this.$city_search[0].blur();
						this.$P_cityCho_fo_p=$(".P_cityChoose > .foot > .main > ul > p");
						if(e.target.nodeName==="LI"){
							var letterI=$(e.target).html();
							this.$city_letter_warn.children("span").html(letterI);
							this.$city_letter_warn.css({"display":"block"});
							// 遍历城市选择模块中带字母的小滑块p元素对象，以便总滑块运动
							this.$P_cityCho_fo_p.each($.proxy(function(i,ele){
								if($(ele).html()===letterI){
									var L_T_val=$(ele).offset().top-(this.$city_f_fire.offset().top-$(document).scrollTop());
										$(document).scrollTop(L_T_val);
										// 创建span节点存放字母跳到中栏
										this.change_fire_val(letterI,"#28FF28");
										return false;
								};
							},this));
						};
						return false;
					},
					// 城市选择模块中点击右边的字母导航时执行触摸end函数
					$city_letter_r_endFun:function(e){
						this.$city_letter_warn.css({"display":"none"});
						e.stopPropagation?e.stopPropagation():cancelBubble=true;
					},
					w_scroll_fun:function(){
						if(this.bool_fire==false||this.index_city_boo==false){
							return false;
						}
						if(!this.$P_cityCho_fo_p){
							this.$P_cityCho_fo_p=$(".P_cityChoose > .foot > .main > ul > p");
							this.$P_p_top=this.$P_cityCho_fo_p.eq(0).position().top;
							this.slide_ul_t=this.$city_slide_ul.offset().top;
						};
						this.$P_cityCho_fo_p.each($.proxy(function(i,ele){
									//字母距离浏览器窗口顶部的距离
									let lt_value=$(ele).offset().top-$(document).scrollTop();
									//参照物距离浏览器窗口顶部的距离
									let ft_value=this.$city_f_fire.offset().top-$(document).scrollTop();
									// console.log(&&(lt-ft)<-this.$city_f_fire.height())
									if((lt_value-ft_value)<=0.00001){
										console.log(11)
										this.change_fire_val($(ele).html(),"#28FF28");
									};
									// 滑块顶部热点城市值改变,判断总滑块ul距离浏览器窗口顶部的距离
									var $c_$d=this.$city_slide_ul.offset().top-$(document).scrollTop();
									if($c_$d>(this.slide_ul_t-this.$P_p_top)&&$c_$d<this.slide_ul_t){
										this.$city_f_fire.html(this.fire_redian);
									 };
							},this));
					},
					// 改变滑块中部的热点城市里的值,参数为要改变为的值
					change_fire_val:function(val,color){
						var $span=$("<span>");
						$span.addClass("P_fire");
						$span.html(val);
						$span.css({"color":color});
						this.$city_f_fire.html($span);
						this.$city_f_fire.parent
					},
					//搜索框匹配城市名
					match_city_fun:function(){
						var matchData=JSON.parse(sessionStorage.getItem("city_data"));
						var city_str=this.$city_search[0].value.replace(/[\s\d\-_]*/g,"");
						if(city_str==""){
							this.bool_fire=true;
							this.city_value_start="";
							$(document).scrollTop(0);
							this.$city_f_fire.html(this.fire_redian);
							this.$city_f_fire_s.css("display","none");
							this.$city_f_fire.css("display","");
							this.$city_delete.css({"display":"none"});
							this.$city_slide_ul.css("display","block");
							this.$city_slide_ulS.css("display","none");
							this.$city_letter_r.parent().css("display","block");
						}
						if(this.$city_search[0].value.replace(/\s+/g,"")!=""){
							this.$city_delete.css({"display":"block"});
						}
						if(city_str!=this.city_value_start){
							$(document).scrollTop(0);
							this.city_value_start=city_str;
							//循环遍历，字母模块匹配
							if(city_str.match(/^[a-zA-Z]/)){
								var str_lett=city_str.charAt(0).toUpperCase();
								for(var i=1,DLength=matchData.length;i<DLength;i++){
									if(str_lett==matchData[i]["letter"]){
										var city_m_str="";
										for(var j=0,lengthJ=matchData[i].length;j<lengthJ;j++){
											city_m_str+="<li>"+matchData[i][j]+"</li>"
										};
										// 开始网滑块ul添加匹配结果
										this.$city_slide_ulS.html(city_m_str);
										this.$city_slide_ul.css("display","none");
										this.$city_slide_ulS.css("display","block");
										this.$city_f_fire_s.css("display","");
										this.$city_f_fire.css("display","none");
										this.$city_letter_r.parent().css("display","none");
										this.bool_fire=false;
										$(document).scrollTop(0);
										return false;
									};
								};
								// 除字母外其它匹配
							}else{
								// 提升用户体验带符号也能匹配到
								var newStr=city_str.replace(/[\%\d\.·、\\a-zA-Z$&*=.。，,/《？?》<>!]+/g,"");
								var otherStr="";
								for(var z=1,mDz=matchData.length;z<mDz;z++){
									for(var n=0,mDn=matchData[z].length;n<mDn;n++){
										if(matchData[z][n].search(newStr)>-1){
											var colorS=this.addContentToStr(matchData[z][n],'<span class="addColorSpan">','</span>',matchData[z][n].indexOf(newStr),matchData[z][n].indexOf(newStr)+newStr.length);
											otherStr+='<li>'+colorS+'</li>';
										};
										
									};
								};
									// 进行最终渲染
								this.$city_slide_ulS.html(otherStr);
								this.$city_slide_ul.css("display","none");
								this.$city_slide_ulS.css("display","block");
								this.$city_f_fire_s.css("display","");
								this.$city_f_fire.css("display","none");
								this.$city_letter_r.parent().css("display","none");
								this.bool_fire=false;
								$(document).scrollTop(0);
							};
						}; 
					},
					//为字符窜添加内容
					addContentToStr:function(str,addContentS,addContentE,indexS,indexE){
						var newS="";
						var tmpS=str.substring(0,indexS);
						var tmpE=str.substring(indexS,indexE);
						var estr=str.substring(indexE,str.length);
						newS+=tmpS+addContentS+tmpE+addContentE+estr;
						return newS;
					}

				}
				yue_findPosition_cityChoose.do();
 	   }
  }
</script>

 
<style scoped>
/*点击顶部广州市后的城市选择模块*/
.P_cityChoose{
 	width:100%;
 	max-width:640px;
 	min-width:300px;
 	position:relative;
 	z-index:25;
 	margin:0 auto;
 	/*display:none;*/
 }
 /*城市选择中的头部*/
 .P_cityChoose > .headFixed > .head{
	width:100%;
	height:40.02px;
	max-width:640px;
	min-width:300px;
	position:fixed;
	top:0;
	background:#fff;
	/*display:flex;
	display:-webkit-flex;
	align-items: center;*/
	border-bottom:1px solid #F0F0F0;
	z-index:1;
 }
 /*城市选择搜索框*/
.P_cityChoose > .headFixed > .head > .search{
	caret-color:#28FF28;
	width:89%;
	position:relative;
	height:17px;
	padding-left:3%;
	border-right:1px solid #F0F0F0;
	margin-top:3%;
}
/*城市选择界面中的搜索框中的X*/
.P_cityChoose > .headFixed > .head > .delete{
	position:absolute;
	left:80%;
	color:#28FF28;
	display:none;
	padding:1.5px 12px;
	margin-top:3%;
}
/*城市选择中的返回主页面*/
.P_cityChoose > .headFixed > .head > .pass{
	float:right;
	margin-top:3%;
	position:relative;
	text-align:center;
	margin-right:3%;
}
/*搜索框下来一个fixed的悬浮元素整体*/
.P_cityChoose > .centerFixed{
	width:100%;
	height:73.37px;
	max-width:640px;
	min-width:300px;
	background:#F0FFF0;
	position:fixed;
	top:40.02px;
	z-index:5;
}
/*当前城市*/
.P_cityChoose > .centerFixed > .top{
	width:96%;
	height:40.02px;
	margin-left:2%;
	margin-top:6.67px;
	position:relative;
	background:#fff;
/*	text-align:center;
	line-height:330%;*/
	display:-webkit-flex;
	display:flex;
	align-items: center;
	justify-content: center;
	border-left:1px solid #E0E0E0;
	border-right:1px solid #E0E0E0;
	box-shadow:0px -1px 0px #E0E0E0;
}
/*块状分类--热点城市那边*/
.P_cityChoose > .centerFixed > .foot,
.P_cityChoose > .centerFixed > .footS{
	width:96%;
	height:26.68px;
	margin-left:2%;
	position:relative;
	background:#F0FFF0;
	/*line-height:220%;*/
	display:-webkit-flex;
	display:flex;
	align-items: center;
	border-left:1px solid #E0E0E0;
	border-right:1px solid #E0E0E0;
}
/*热点城市图标*/
.P_cityChoose > .centerFixed > .foot > .P_fire{
	margin-left:5%;
	margin-right:1%;
	color:#f40;
}

/*筛选结果*/
.P_cityChoose > .centerFixed > .footS{
	z-index:1;
}
.P_cityChoose > .centerFixed > .footS > .P_fire_s{
	margin-left:5%;
}
/*底部可点击移动的整个滑块*/
.P_cityChoose > .foot{
	width:100%;
	position:absolute;
	top:113.39px;
	background:#F0FFF0;

}
/*具体总滑块*/
.P_cityChoose > .foot > .main{
	width:96%;
	margin-left:2%;
	background:#fff;
	border-left:1px solid #E0E0E0;
	border-right:1px solid #E0E0E0;
}
/*城市格子的父亲ul*/
.P_cityChoose > .foot > .main > .ulF{
	width:100%;
	overflow:hidden;

	/*display:none; */
}
/*城市格子*/
.P_cityChoose > .foot > .main > .ulF > .ulFLi{
	 
	padding-left:5%;
	width:100%;
	height:33.35px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	/*line-height:270%;*/
	border-bottom:1px solid #F0F0F0;
}
.ulFP{
	padding-left:5%;
	width:100%;
	height:26.68px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	/*line-height:230%;*/
	background:#F0FFF0;
	border-top:1px solid #F0F0F0;
}
.P_cityChoose > .foot > .main > .ulS{
	width:100%;
	overflow:auto;
	display:none;
}
.P_cityChoose > .foot > .main > .ulS > li{
	padding-left:5%;
	width:100%;
	height:33.35px;
	line-height:270%;
	border-bottom:1px solid #F0F0F0;
}
/*侧边字母导航栏*/
.P_cityChoose > .centerFixed > .rightFixed{
	width:10vw;
	position:absolute;
	top:45px;
	right:10%;
	z-index:10;
	overflow:hidden;
}
.P_cityChoose > .centerFixed > .rightFixed > ul{
	width:100%;
	overflow:hidden;
}
/*字母导航格子*/
.P_cityChoose > .centerFixed > .rightFixed > ul > li{
	text-align:center;
	width:100%;
	color:#000;
}
/*点击字母出现小方块*/
.P_cityChoose > .centerFixed > .city_warn{
	width:5rem;
	height:5rem;
	position:absolute;
	top:44vh;
	left:50vw;
	margin-left:-2.5rem;
	margin-top:-2.5rem;
	text-align:center;
	line-height:5.3rem;
	font-size:3rem;
	border-radius:5px;
	overflow:hidden;
	display:none;
}
.P_cityChoose > .centerFixed > .city_warn > .bg{
	width:100%;
	height:100%;
	background:black;
	opacity:0.5;
	position:absolute;
	box-shadow:inset 0px 0px 15px 1px #28FF28;
}
.P_cityChoose > .centerFixed > .city_warn > span{
	position:relative;
	color:#28FF28;
	z-index:2;
}
</style>
