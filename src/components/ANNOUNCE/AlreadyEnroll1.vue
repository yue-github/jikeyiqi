<template>
  <div class="AlreadyEnroll">
   		<div class="ErollHead">
	  		 <img src="./../../assets/announce/blue_left.jpg" alt="" class="ErollImg">
	   	 	 <span class="ErollFont">已报名童星</span>
 		 </div> 
 		 <!-- 中部 -->
 		 <div class="center">
   	 	 		<div class="c-head">
   	 	 			<ul class="c-head-ul">
   	 	 				<li v-for="(val,index) in roleArr" @click="changeColor(index+1)" v-bind:ref="val.roleRef">{{val.role}}</li>
   	 	 			</ul>
   	 	 		</div>
   	 	 </div>
  </div>
</template>

<script>

export default {
  name: 'AlreadyEnroll',
  data(){
	  return {
	  	 roleArr:[
	  		{role:"角色1",roleRef:"role1"},
	  		{role:"角色2",roleRef:"role2"},
	  		{role:"角色3",roleRef:"role3"},
	  		{role:"角色4",roleRef:"role4"},
	  		{role:"角色5",roleRef:"role5"},
	  		{role:"角色6",roleRef:"role6"},
	  		{role:"角色7",roleRef:"role7"},
	  	]
	  }
    
  },
  methods:{
  	changeColor(index){
  		console.log(index)
  		console.log(this.$refs["role"+index]) ;
  		console.log(this.$refs["role"+index][0].style.background="blue")
  	}
  }








}
</script>

 
<style scoped>
.AlreadyEnroll{
	width:100%;
}
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
font-size:19px;
}
.center{
	position:relative;
	width:100%;
	height:40px;
	overflow:auto;
	border-bottom:1px solid #ccc;
}
.c-head-ul{
	width:140%;
	overflow:auto;
	display:flex;
	display:-webkit-flex;
}
::-webkit-scrollbar {
            width: 0;
            height: 0;
            overflow: hidden;
 }
.c-head-ul > li{
	width:20%;
	height:40px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
}
</style>