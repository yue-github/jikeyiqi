<template>
 <div class="comment">
   		<div class="ErollHead">
	  		 <img src="./../../assets/announce/blue_left.jpg" alt="" class="ErollImg" @click="gotoActivityDetail()">
	   	 	 <span class="ErollFont">确认订单</span>
 		</div>


 		<div class="content-fir">
			<div class="title">{{msgArr[0].title}}</div>

			<div class="time">
				<img src="./../../assets/announce/date.jpg" alt="" class="timeImg">
				<span class="timeDetail" v-html="msgArr[0].time"></span>
			</div>

			<div class="adress">
				<img src="./../../assets/announce/dingwei.jpg" alt="" class="timeImg">
				<span class="timeDetail small">{{msgArr[0].adress}}</span>
			</div>
 		</div>


 		<div class="chooseChild">
 			<div class="c-price">
 				<span class="priceRed">￥{{msgArr[0].price}}.00</span>
 				<div class="c-count">
 					<span class="count-inc" @click="countDeIn('1')">-</span>
 					<span class="count-number">{{howCount}}</span>
 					<span class="add" @click="countDeIn('2')">+</span>
 				</div>
 			</div>
 			<div class="c-alt">选择萌娃<p class="bg"></p></div>
 			<div class="c-child">
 				<ul class="c-child-ul">
					<li v-for="(val,index) in msgArr[1].child" v-bind:ref="index" @click="changeColor(index)">

						<p class="c-child-p">
							<img v-bind:src="val.childImg" alt="">
						</p>

						<p class="childName">
							{{val.name}}
						</p>

					</li>
 				</ul>
 			</div>
 		</div>
		

		<div class="concatMain">

			<div class="concatWarn">联系方式<p class="bg"></p></div>

			<div class="concatPerson">
				<span class="c-person">联系人</span>
				<input type="text" class="concatWho" placeholder="请填写联系人姓名">
			</div>

			<div class="concat">
				<span class="concat-fun">联系方式</span>
				<span class="p-number">{{msgArr[2].concat}}</span>
			</div>
		</div>
		

		<div class="countAdd">
			<div class="count-money">
				合计: <span class="money">￥{{msgArr[2].count*howCount}}.00</span>
			</div>
			<div class="erollSoon">立即报名</div>
		</div>



		<br>
		<br>
		<br>
		<br>
		<br>
 </div>
</template>

<script>
export default {
  name: 'comment',
  data(){
	  return {
	  	msgArr:[
	  		{
	  			title:"厦门首届《环保小天使》少儿电视车模大赛区域赛区海选",
	  			time:"2018-06-24&nbsp;00:00:00&nbsp;至&nbsp;2018-08-31&nbsp;00:00:00",//需要v-html,有空格
	  			adress:"全国",
	  			price:"7500",

	  		},
	  		{
	  			child:[
	  				{
	  					childImg:require("./../../assets/mall/user_logo.jpg"),
	  					name:"童星姓名"
	  				},
	  				{
	  					childImg:require("./../../assets/mall/user_logo.jpg"),
	  					name:"童星姓名"
	  				},
	  			]

	  		},
	  		{
	  			concat:"18814137320",
	  			count:7800
	  		}
	  	],
	  	howCount:1
	  }

    
  },
  methods:{
  	changeColor(index){
  		console.log(index)
  		for(let ind in this.$refs){
  			this.$refs[ind][0].children[0].style.background="";
  			this.$refs[ind][0].children[1].style.color="#000";
  		}
  		this.$refs[index][0].children[0].style.background="#02b0b9";
  		this.$refs[index][0].children[1].style.color="#02b0b9";
  	},
  	countDeIn(whatClick){
  		if(whatClick=="1"){
  			if(this.howCount==1){
  				return false;
  			}
  			this.howCount--;
  		}else{
  			this.howCount++;
  		}
  	},
  	gotoActivityDetail(){
  		this.$router.push({
  			path:"/ActivityDetail",
  			query:{
  				order:true
  			}
  		})
  	}
  },
  mounted(){
  		document.documentElement.scrollTop=0;
  		this.$refs[0][0].children[0].style.background="#02b0b9";
  		this.$refs[0][0].children[1].style.color="#02b0b9";
  }
}
</script>

 
<style scoped>
 .ErollHead{
 	width:100%;
 	height:55px;
 	background:#02b0b9;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content:center;
 	position:relative;
  box-shadow:-1px 0px 20px 1px #ccc;
 }
 .ErollImg{
 	position:absolute;
 	left:15px;
 	height:35px;
 }
 .ErollFont{
	color:#fff;
	font-size:21px;
 }
 .content-fir,
 .chooseChild{
 	width:100%;
 	padding:15px;
 	border-bottom:1px solid #ccc;
 	border-radius:1px;
 }
 .time,
 .adress,
 .title{
 	width:100%;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	margin-bottom:10px;
 	/*flex-wrap:wrap;*/
 }
  .time{
  	font-size:12px;

  }
  .time > span,
  .time > span{
  	margin-left:10px;
  }
  /*.chooseChild{
  	width:100%;
  	padding:15px;
  	border-bottom:1px solid #ccc;
 	border-radius:1px;
  }*/
  .c-price,
  .c-alt,
  .c-child{
  	width:100%;
  	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	position:relative;
  }
.priceRed{
	color:#f40;
	font-size:19px;
}
.c-count{
	position:absolute;
	right:0px;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;


}
.count-inc,
.add{
	width:30px;
	height:30px;
	font-size:20px;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
	background:#F0F0F0;
	border: 1px solid #ccc;
}
.count-number{
	width: 45px;
	height:30px;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
}
.c-alt{
	margin-top:30px;
	font-size:18px;
}
.bg{
	width:50px;
	height:0px;
	margin-left:-60px;
	box-shadow:0px 0px 10px 1px coral;
}
.c-child{
	width:100%;
	overflow:auto;
}
.c-child-ul{
	width:100%;
	margin-top:15px;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
}
.c-child-ul > li{
	width:20%;
	margin-right:35px;
	text-align: center;
}
.c-child-p{
	width:100%;
	padding:5px;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	/*background:#02b0b9;*/
 	border-radius: 100%;
}
.c-child-p > img{
	width:100%;
	border-radius:100%;
}
.childName{
	font-size: 13px;
	margin-top:8px;
}
.concatMain{
	width:100%;
	padding:15px;
}
.concatWarn,
.concatPerson,
.concat{
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	margin-bottom:25px;
 	position:relative;
}
.concatWarn{
	font-size:17px;
}
.concatWho{
	position:absolute;
	right:0;
	width:110px;
}
.p-number{
	position:absolute;
	right:0;
}
.concatWarn > .bg{
	box-shadow:0px 0px 10px 1px #02b0b9;
}
.countAdd{
	width:100%;
	margin-top:50px;
	height:55px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
}
.count-money,
.erollSoon{
	width:50%;
	height:55px;
	
}
.erollSoon{
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	font-size:18px;
	background:#02b0b9;
}
.count-money{
	display:flex;
	display:-webkit-flex;
	align-items: center;
	padding-left:15px;
	font-size:19px;
	border-top:1px solid #ccc;
	/*border-radius:1px;*/
}
.money{
	color:#f40;
	margin-left:2%;
}
.timeDetail{
	margin-left:8px;
}
.timeImg{
	height:20px;
}
.small{
	font-size:13px;	
}
</style>
