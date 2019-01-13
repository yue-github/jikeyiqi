<template>
  <div class="Announce">
    	<ErollHead></ErollHead>
    	<div class="content">
    		<ul class="content-ul" v-for="val in msgArr">
    			<li>
	    			<div class="firLi-top">选择萌娃<p class="firLi-line"></p></div>

	    				<div class="firLi-center-img">
			    			<div class="firLi-bottom" v-for="(childVal,index) in val.cuteChildArr">
			    				<div class="childPhoto" v-bind:class="{addBorder:childVal.add_boo1}"@click="changeColor('add_boo1',index)">
			    					<img v-bind:src="childVal.childImg" alt="" class="childPhoto-img">
			    				</div>
			    				<p class="childName-fir">
			    					{{childVal.childName}}
			    				</p>
			    			</div>
			    		</div>
    			</li>

    			<li class="sec-li">
    				<div class="secLi-top">选择角色<p class="firLi-line"></p></div>

						<div class="role-center">
		    				<span class="secLi-span" v-for="(secVal,index) in val.cuteChildArr" v-bind:class="{addRoleColor:secVal.add_boo2}" @click="changeColor('add_boo2',index)">
		    					{{secVal.role}}
		    				</span>
	    				</div>
    			</li>

    			<li class="thir-li">
    				<div class="thir-top">
    					<span class="proveUser">认证用户</span><span class="detailP">￥{{val.p_userPrice}}.00</span>

    				</div>
    				<div class="thir-foot">
    				<span class="vipProve">VIP用户</span><span class="font-vip">￥{{val.vipPrice}}.00</span>
    				</div>
    			</li>

    			<li class="four-li">

					<div class="four-top">
						<span>联系人</span><input type="text" placeholder="请填写联系人姓名" class="phone-input">
					</div>

					<div class="four-foot">
						<span>联系方式</span><span class="p-number">15136897542</span>
					</div>

					<!-- 额外提示信息 -->
					<div class="warn">若报名失效则原路返回报名费用</div>
    			</li>

    			<li class="five-li">
    				<div class="fiveLi-left">
    					<span class="moneyCount">合计:</span><span class="countPrice">￥{{val.count}}.00</span>
    				</div>
    				<div class="erollSoon" @click="popShow()">立即报名</div>
    			</li>
    		</ul>
    	</div>
    	<div class="pop" v-show="pop_SH_boo">
    		<ul class="pop-ul">
    			<li class="integrateC">积分奖励</li>
				<li class="howInt">{{integrate}}</li>
				<li class="erollOK" @click='popShow()' v-on:click.stop="">确认</li>
				<li class="eroll_warn">分享通告后即可获得积分奖励</li>
    		</ul>
    		
    	</div>
    	<div class="p-hidden" v-show="pop_SH_boo" @click="popHidden()"></div>
    	<br>
    	<br>
    	<br>
    	<br>
    	<br>
    	<br>
    	<br>
  </div>
</template>

<script>
import ErollHead from "./PUBLIC/ErollHead"
export default {
  name: 'Announce',
  data(){
	  return {
	  	pop_SH_boo:false,
	  	integrate:"20",
	  	msgArr:[
	  		{
	  			cuteChildArr:[
	  				{
	  					childImg:require("./../../assets/mall/user_logo.jpg"),
	  					childName:"童星姓名",
	  					role:"角色1",
	  				 	
	  					add_boo1:true,
	  					add_boo2:true
	  				},
	  				{
	  					childImg:require("./../../assets/mall/user_logo.jpg"),
	  					childName:"吴同岳",
	  					role:"角色2",

	  					add_boo1:false,
	  					add_boo2:false,
	  				},

	  			],
	  			p_userPrice:7500,
				vipPrice:7200,
				count:7800
	  			
	  		}

	  	]

	  }
    
  },
  components:{
  	ErollHead
  },
  methods:{
  	changeColor(whatEle,index){
  	 	for(let val in this.msgArr[0].cuteChildArr){
  				 // 循环遍历，将图片外圈改为消失
  			     this.msgArr[0].cuteChildArr[val][whatEle]=false;
  			     
  			}
  			this.msgArr[0].cuteChildArr[index][whatEle]=true;

  		// switch(whatEle){
  		// 	case "name":
  		// 	for(let val in this.msgArr[0].cuteChildArr){
  		// 		 // 循环遍历，将图片外圈改为消失
  		// 	     this.msgArr[0].cuteChildArr[val].add_boo1=false;
  			     
  		// 	}
  		// 	this.msgArr[0].cuteChildArr[index].add_boo1=true;
  		// 	break;
  		// 	case "role":
  		// 	for(let val in this.msgArr[0].cuteChildArr){
  		// 		 // 循环遍历，将图片外圈改为消失
  		// 		 console.log(this.msgArr[0].cuteChildArr[val].add_boo2)
  		// 	     this.msgArr[0].cuteChildArr[val].add_boo2=false;
  			  
  		// 	}
  		// 	this.msgArr[0].cuteChildArr[index].add_boo2=true;
  		// 	break;
  		// }
  		 
  		 
  	},
  	popShow(){
  		document.documentElement.scrollTop=0;
  		this.pop_SH_boo=!this.pop_SH_boo;
  	},
  	popHidden(){
  		this.pop_SH_boo=false;
  	},

  	



  }
}
</script>

 
<style scoped>
.Announce{
	width:100%;
	overflow:auto;
}
 .content{
 	width:100%;
 }
 .content-ul{
 	width:100%;
 }
 .content-ul > li{
	border-bottom:1px solid #ccc;
	border-radius:1px;
	padding:15px;
 }
 .firLi-top{
 	font-size:18px;
 	position:relative;
 }
 .firLi-line{
 	width:50px;
 	height:1px;
 	background:#02b0b9;
 	/*margin-top:-12px;
 	margin-left:13px;*/
 	margin:-12px 0 12px 13px;
 	box-shadow:0 0 5px 1px #02b0b9;
 	opacity:0.8;
 }
 .firLi-bottom{
 	 padding-top:10px;
 	 width:73px;
 	 text-align:center;
 	 margin-right:40px;
 }
 .childPhoto{
 	width:73px;
 	height:73px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
 	border-radius:100%;
 	/*background:#02b0b9;*/
 	margin:0 auto;
 }

 .childPhoto-img{
 	display:block;
 	border-radius:100%;
 	height:65px;

 }
 .addBorder{
 	background:#02b0b9;
 }
 .childName-fir{
 	 margin-top:8px;
 	 color:#02b0b9;
 	 opacity:0.8;
 	 font-size:15px;
 }
 .secLi-top{
 	font-size:18px;
 	margin-bottom:10px;
 }
 .secLi-span{

 }
 .firLi-center-img{
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 }
 .sec-li{

 }
 .secLi-span{
 	padding:4px 15px;
 	border-radius:100px;
 	color:#000;
 	margin-right:40px;
 	border:1px solid #ADADAD;
 }
.role-center{
	margin-top:28px;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	margin-bottom:5px;
}
.addRoleColor{
	color:#fff;
	/*渐变效果*/
 	background: -webkit-linear-gradient(left, #005eb8 , #01adb7); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(right, #005eb8, #01adb7); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(right, #005eb8, #01adb7); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #005eb8 , #01adb7); /* 标准的语法 */
    border:1px solid #01adb7;
}
.thir-top{
	font-size:15px;


}
.proveUser{
	
}
.vipProve{
	font-size:15px;
}
.font-vip{
	color:#f40;
	font-size:19px;

}
.detailP{
	font-size:17px;
}
.detailP,
.font-vip{
	font-weight:bold;
	position:absolute;
	right:15px;
}
.thir-top,
.thir-foot{
	display:flex;
	display:-webkit-flex;
	align-items: center;
	margin-top:25px;
}
.four-li{
	font-size:19px;
	margin-top:25px;
}
.four-top,
.four-foot{
	width:100%;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	margin-top:25px;
	position:relative;
}
.warn{
	text-align:center;
	color:#ccc;
	font-size:13px;
	margin-bottom: 15px;
	margin-top:35px;
}
.phone-input{
	position:absolute;
	/*right:15px;*/
	font-size:16px;
	right:0;
	width:129px;

}
.p-number{
	position:absolute;
	right:0;
	font-size:17px;
	text-align:right;
}
 .content-ul > .five-li{
	display:flex;
	display:-webkit-flex;
	padding:0;
	border:none;
}
.moneyCount{
	padding-left:15px;
	font-size:20px;
}
.erollSoon{
	width:200px;
	height:55px;
	background:#02b0b9;
	justify-content:center;
	color:#fff;
	font-size:19px;
}
.five-li > div{
	width:50%;
	display:flex;
	display:-webkit-flex;
	align-items: center;
}
.countPrice{
	color:#f40;
	font-size:1.3rem;
	font-weight:bold;
	opacity:0.8;
	margin-left:5px;
}
.thir-li{
	margin-top:25px;
}
.pop{
	position:absolute;
	width:210px;
	height:220px;
	background:#fff;
	z-index:10;
	left:50%;
	top:110px;
 	margin-left:-100px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	box-shadow:0px 0px 20px 1px #ccc;
	transition:2s;
	z-index:3;
}
.pop-ul{
	width:100%;
	text-align:center;
}
.pop-ul > li{
	margin-bottom:18px;
}
.integrateC{
	font-size:20px;
	 
}
.howInt{
	color:#02b0b7;
	font-size:35px;
}
.erollOK{
	width:165px;
	height:35px;
	color:#fff;
	/*渐变效果*/
 	background: -webkit-linear-gradient(left, #005eb8 , #01adb7); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(right, #005eb8, #01adb7); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(right, #005eb8, #01adb7); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #005eb8 , #01adb7); /* 标准的语法 */
    display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	margin:0 auto;
	border-radius:100px;
	font-size:18px;
}
.eroll_warn{
	font-size:12px;
	color:#ccc;
	transform:scale(0.9);
}
.p-hidden{
	width:100%;
	height:100%;
	position:absolute;
	top:0;
	left:0;
	z-index:2;
}
</style>