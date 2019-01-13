<template>
  <div class="cFilter">
   		<div class="header" @click="childToggle()">{{filterAll}}&nbsp; <span v-html="upDown"></span></div>
   		<div class="center">
   			<div class="center-recommond">
					今日推荐
			</div>
   			<ul class="center-ul">
	   			<li v-for="val in (new Array(3))" class="center-li">
	   				<router-link to="/" class="center-router">
	   					<img src="./../../assets/child/rec-child.jpg" alt="">
	   					<p class="router-p">
	   						<span class="router-span">会员vip</span><span>童星姓名</span>
	   					</p>
	   				</router-link>
	   			</li>
	   			 
   			</ul>
   		</div>
   		<!-- 童星 -->
		<div class="tellMsgShow_thir">
			<div class="tellMsgShow_top">
				 <ul class="tellMsgShow-ul">
				 		<li class="tellMsgShow-li-fir" @click="changeBlue('liOne',1)">
				 			<router-link to="/ChildAll" class="tell-router changeColor"><span ref="liOne">全部</span></router-link>	
				 		</li>

				 		<li @click="changeBlue('liTwo',2)">
				 			<router-link to="/SmallRec" class="tell-router"><span ref="liTwo">小演员推荐</span></router-link>	
				 		</li>

				 		<li  @click="changeBlue('liThree',3)">
				 			<router-link to="/FamousChild" class="tell-router"><span  ref="liThree">童模推荐</span></router-link>
				 		</li>

				 		<li  @click="changeBlue('liFour',4)">
				 			<router-link to="/ChildRec" class="tell-router"><span  ref="liFour">知名童星</span></router-link>
				 		</li>
				 </ul>
			</div>
			
		</div>
  </div>
</template>

<script>
import childAll from "./ChildAll"
import route from "./../../router.js"
export default {
  name: 'cFilter',
  data(){
	  return {
	  upDown:"&or;",//改为向下箭头&and;
	  filterAll:"全部筛选"
    }
  },
  methods:{
  	changeBlue(element,index){
  		for(let i in this.$refs){
  			this.$refs[i].className="tell-router";
  		}
  		this.$refs[element].className="tell-router changeColor";
  	},
  	childToggle(){
  		this.$emit("nextToggle","出现与消失");
  		 if(this.upDown=="&or;"){
  		 	this.upDown="&and;"
  		 	// console.log(1)
  		 	this.filterAll="收起"
  		 }else{
  		 	this.upDown="&or;"
  		 	this.filterAll="全部筛选"

  		 }
  		 

  	}
  },
  components:{
  	childAll
  },
  created(){
  	console.log(this.$store.state.name+"filter")
  	this.$store.commit('DO')
  }

}
</script>

 
<style scoped>
 .cFilter{
 	width:100%;
 }
 .header{
 	width:100%;
 	height:50px;
 	display:flex;
 	display:-webkit-flex;
 	align-items:center;
 	justify-content: center;
 	padding-left:10px;
 	border-bottom:1px solid #F0F0F0;
	font-size:14px;
	color:#ccc;
	padding-bottom:8px;
 }
 .center{
 	width:100%;
 	overflow: auto;
 }

 .center-ul{
 	width:180%;
 	overflow:auto;
 	position:relative;
 }
 ::-webkit-scrollbar {
            width: 0;
            height: 0;
            overflow: hidden;
 }
 .center-li{
 	width:30%;
 	margin-left:18px;
 	float:left;
 	position:relative;
 }
  .center-router{
 	width:100%;
 	display:block;
 	text-decoration: none;
 	color:#000;
 }

 .center-router img{
 	width:100%;
 }
 .center-recommond{
 	position: absolute;
 	width:100%;
 	height:50px;
 	z-index:1;
 	display:flex;
 	display:-webkit-flex;
 	justify-content: center;
 	align-items: center;
 }
 .router-p{
 	width:100%;
 	height:30px;
 	position:absolute;
 	background:#ccc;
 	bottom:0px;
 	display:flex;
 	display:-webkit-flex;
 	justify-content: center;
 	align-items: center;
 	border-radius:5px;
 }
.router-span{
	margin-right:10px;
}

.tellMsgShow_top{
	width:100%;
	height:50px;
}
.tellMsgShow-ul{
	width:100%;
	height:50px;
	overflow:auto;
} 
.tellMsgShow-ul > li{
	width:25%;
	height:50px;
	float:left;
	display:-webkit-flex;
	align-items: center;
	justify-content:center;
	display:flex;
	color:#00b1bb;	
}
.tell-router{
	padding-bottom:10px;
	color:#000;
}
.changeColor{
	color:#00b1bb;
	border-bottom:1px solid #00b1bb;
}

</style>