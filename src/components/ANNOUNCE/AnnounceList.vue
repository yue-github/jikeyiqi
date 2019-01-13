<template>
  <div class="AlreadyEnroll">
   		<header class="header">
   			<img src="./../../assets/search/blue_left.jpg" alt="" class="backLeft" @click="gotoHome()">
   			<div class="h-center">
   				<div class="h-announce">通告</div>
   			</div>
	      		
      		<div class="positionM">
      			<img src="./../../assets/announce/an_search.jpg" alt="" class="searchImg">
      			<img src="./../../assets/announce/position.jpg" @click="goPositionS()" alt="" class="position">
	  			<div class="city" @click="goPositionS()">{{pos}}</div>
      		</div>
	  			
      </header>
	  <div class="center">
	  		<ul class="center-ul">
	  			<li>
	  				类型<ul class="tri-ul">
		  					<li class="triHidden"></li><!-- 制作小三角形 -->
		  					<li></li>
	  					</ul>
	  			</li>
	  			<li>性别<ul class="tri-ul">
		  					<li class="triHidden"></li><!-- 制作小三角形 -->
		  					<li></li>
	  					</ul>

	  			</li>
	  			<li class="clearLine">年龄<ul class="tri-ul">
		  					<li class="triHidden"></li><!-- 制作小三角形 -->
		  					<li></li>
	  					</ul>
	  			</li>
	  		</ul>
	  </div>

	  <div class="detail">
			<ul v-for="(val,index) in contentArr" class="detail-ul">
				<li>
					 <ul class="fiveLi-ul">
					 		<li class="topLi" @click="gotoAnDetail(index)">
					 			<p class="fiveLi-top" v-show="val.palceTop">置顶</p>
					 		</li>
					 		<li class="title-li" @click="gotoAnDetail(index)">
					 			<div class="secLi-left">{{val.title}}</div>
					 			<div class="secLi-right">{{val.talk_pay}}</div>
					 		</li>
					 		<li @click="gotoAnDetail(index)">
								<p class="type">{{val.film}}</p>
					 		</li>
					 		<li class="deadline-li" @click="gotoAnDetail(index)">
					 			<img src="./../../assets/announce/dingwei.jpg" alt="" class="pos">
					 			<span class="scope-span">{{val.place}}</span>
					 			<img src="./../../assets/announce/date.jpg" alt="" class="deadLine">
					 			<span>剩余&nbsp;{{val.endtime}}&nbsp;天截至报名</span>
					 		</li>

					 		<li class="eroll-li"> 
					 			<div class="alreadyEnroll">已报名&nbsp;<span class="changeColor">{{val.people}}</span>&nbsp;人</div>
					 			<div class="enroll" @click="gotoEnroll()">报名</div>
					 		</li>
					 </ul>
				</li>
			</ul>
	  </div>
	






 
<br>
<br>
<br>
  </div>
</template>

<script>
export default {
  name: 'AlreadyEnroll',
  data(){
	  return {
	  	pos:"全国",
	  		contentArr:[
	  			{
	  				palceTop:0,
	  				title:`45集大型电视连续剧招募小演员`,
	  				id:2,
	  				film:"影视组迅",
	  				place:"全国",
	  				endtime:"30",
	  				people:4,
	  				talk_pay:"面议",
	  				time:29243,
	  				 

	  			},
	  			{
	  				top_boo:true,
	  				msg:`41集大型电视连续剧招募小演员`,
	  				type:"影视组迅",
	  				scope:"全国",
	  				endtime:"30",
	  				enroll:4,
	  				payType:"面议",
	  				interview:false

	  			},
	  			{
	  				top_boo:true,
	  				msg:`40集大型电视连续剧招募小演员`,
	  				type:"影视组迅",
	  				scope:"全国",
	  				endtime:"30",
	  				enroll:4,
	  				payType:"面议"

	  			},
	  			{
	  				top_boo:true,
	  				msg:`40集大型电视连续剧招募小演员`,
	  				type:"影视组迅",
	  				scope:"全国",
	  				endtime:"30",
	  				enroll:4,
	  				payType:"面议"

	  			},
	  			{
	  				top_boo:true,
	  				msg:`40集大型电视连续剧招募小演员`,
	  				type:"影视组迅",
	  				scope:"全国",
	  				endtime:"30",
	  				enroll:4,
	  				payType:"面议"

	  			},
	  		],
	  		idArr:[]
	  }
    
  },
  methods:{
  	goPositionS(){
  		this.$router.push({
  			path:"/PositionS",
  			query:{
  				page_msg:"an"
  			}
  		})
  		
  	},
  	gotoHome(){
  		this.$router.push("/home")
  	},
  	gotoEnroll(){
  			this.$router.push({
  				path:"/Enroll"
  			})
  	},
  	gotoAnDetail(index){
  		const vue=this;
  			this.$router.push({
  				path:"/AnDetail",
  				query:{
  					announceID:this.idArr[index]
  				}
  			})
  			 
  		 
  		
  	}
  	
  },

  mounted(){
  	document.documentElement.scrollTop=0;
  	this.pos=this.$store.state.position;

  	// 获取通告列表
  	this.$axios.post("http://123.206.202.40:82/index.php/api/notice/getNotice")
  	.then(data=>{

  		 
  		let arr1=data.data.filter((val,index,item)=>{
  			return val.palceTop==1
  		})
  		 
  		let arr2=data.data.filter((val,index,item)=>{
  			return val.palceTop==0
  		})
  		 
  		let arr3=arr1.concat(arr2).map((val,index,item)=>{
  			  
  			val.placeTop==0?val.placeTop=false:val.placeTop=true;
  			return val;
  		})
  		// console.log(arr3)
  		this.contentArr=arr3;
  		arr3.forEach((val,index,item)=>{
  			 this.idArr.push(val.id)
  		})
  		console.log(arr3)
  	})





  }
}
</script>

 
<style scoped>
.AlreadyEnroll{
	width:100%;
}
.header{
	width:100%;
	height:50px;
	position:relative;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	box-shadow: 1px 0px 20px 1px #ccc;
	background:#02b0b9;
}
.positionM{
 	position:absolute;
 	right:15px;
 	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	color:#fff;
}
.h-announce{
	color:#fff;
	font-size:19px;
} 
.backLeft{
	position:absolute;
	left:0px;
	margin-left:15px;
	height:30px;
}
.positionM{
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	position:absolute;

	right:15px;
}
.searchImg{
	height:30px;
	margin-right:10px;
}
.position{
	height:25px;
	margin-right:3px;
}
.city{
 width:50px;
 overflow: hidden;
 white-space: nowrap;
 text-overflow: ellipsis;
 font-size:17px;
	 
}
.center{
	width:100%;
	margin-top:10px;
	border-bottom:1px solid #ccc;
	border-radius: 1px;
	box-sizing:content-box;
	padding-bottom:10px;
}
.center-ul{
	width:100%;
	overflow:auto;
	display:flex;
}
.center-ul > li{

	width:33.3333%;
	display:flex;
	display:-webkit-flex;
	justify-content: center;
	align-items: center;
	border-right:1px solid #ccc;
}
.center-ul > .clearLine{
	border:none;
}
.tri-ul{
	margin-left:5px;
}
.tri-ul > li{
	width:0;
	height:0;
	border:4px solid transparent;
	border-top-color:#ADADAD;

}
.tri-ul > .triHidden{
	visibility:hidden;
}
.detail{
	width:100%;
	padding:15px;
}
.etail-ul{
	width:100%;
}
.etail-ul > li{
	width:100%;

}
.fiveLi-ul{
	width:100%;
	border:1px solid #ccc;
	border-radius:8px;
	padding:10px;
	position:relative;
	overflow: hidden;
}
.fiveLi-ul > li{
	width:100%;
	display:flex;
	display:-webkit-flex;
	align-items: center;

}
.fiveLi-ul > .topLi{
	 
}
.fiveLi-top{
	padding:2px 10px;
	background:#01afb6;
	margin-top:-10px;
	margin-left:-10px;
	font-size:13px;
}
.secLi-left{
	font-size:18px;
}
.secLi-right{
	font-size:20px;
	color:#f40;
	position:absolute;
	right:10px;

}
.type{
	border:1px solid #ccc;
	padding:3px;
	font-size: 13px;
	border-radius: 3px;
	margin-top:5px;
}
.deadline-li{
	margin-top:10px;
	border-bottom:1px solid #ccc;
	border-radius:1px;
	box-sizing:content-box;
	padding-bottom:10px;
}
.scope-span{
	margin-right:20px;
}
.deadline-li > img{
	margin-right:10px;
	height:23px;
}
.title-li{
	margin-top:5px;
}
.eroll-li{
	padding:15px 0px;
	position:relative;
}
.enroll{
	right:0;
	position:absolute;
	padding:5px 30px;
	background:#0161b8; 
	/*渐变效果*/
 	background: -webkit-linear-gradient(left, #0161b8 , #01adb9); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(right, #0161b8, #01adb9); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(right, #0161b8, #01adb9); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #0161b8 , #01adb9); /* 标准的语法 */
    color:#fff;
    font-size:19px;
    border-radius:100px;
}
.changeColor{
	color:#f40;
	font-size:25px;
}
.detail-ul{
	width:100%;
}
.detail-ul > li{
	margin-bottom:15px;
}
</style>