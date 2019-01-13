<template>
  <div class="Model3">
      <!-- 此模板分三部分，在竖屏状态下,这三个部分上中下排列 -->
    	 <div class="m-left">
            <img v-bind:src="imgSrc[0]" alt="" class="m-right-img">
       </div>

       <div class="center">
            <div class="fourImg">
                <ul class="fourImg-ul">
                    <li>
                        <img v-bind:src="imgSrc[2]" alt="">
                    </li>
                    <li class="li-margin">
                        <img v-bind:src="imgSrc[3]" alt="">
                    </li>
                    <li>
                        <img v-bind:src="imgSrc[4]" alt="">
                    </li>
                    <li class="li-margin">
                        <img v-bind:src="imgSrc[5]" alt="">
                    </li>
                </ul>
            </div>
            <div class="userMsg">
                  <div class="name">{{childMsg.name}}/{{childMsg.pyName}}&nbsp;{{childMsg.wang}}</div>
                  <div class="userLogo">
                      <p class="line"></p>
                      <img v-bind:src="imgSrc[1]" alt="" class="lineImg">
                  </div>
                  <div class="userDetail">
                      身高/height:{{childMsg.height}}CM
                      年龄/AGE:{{childMsg.age}}
                      体重/weight:{{childMsg.weight}}KG
                      鞋码/shoes:{{childMsg.xiema}}
                  </div>

            </div>
       </div>

       <div class="m-right">
             <img v-bind:src="imgSrc[6]" alt="" class="m-right-img">
             <img v-bind:src="imgSrc[7]" alt="" class="erweima">
       </div>
  </div>
</template>

<script>
export default {
  name: 'Model1',
  data(){
	  return {

	  	imgSrc:[
	  		require("./../assets/otherProject/mThir/1.jpg"),
	  		require("./../assets/otherProject/map.jpg"),
	  		require("./../assets/otherProject/mThir/2.jpg"),
	  		require("./../assets/otherProject/mThir/3.jpg"),
	  		require("./../assets/otherProject/mThir/4.jpg"),
	  		require("./../assets/otherProject/mThir/5.jpg"),
        require("./../assets/otherProject/mThir/6.jpg"),
	  		require("./../assets/otherProject/mThir/7.jpg"),
	  	],
	  	 childMsg:{
	  	 	name:"王尔娅",
	  	 	pyName:"ErYa",
	  	 	wang:"wang",
	  	 	age:"12",
	  	 	height:"144",
	  	 	weight:"28",
	  	 	xiema:"35"
	  	 }
	  }
    
  },
  mounted(){
  	// let mr=this.$refs["mRight"],
  	//     ml=this.$refs["mLeft"];
  	// window.addEventListener("orientationchange",function(){
  	// 	if(window.orientation==180||window.orientation==90){
  	// 		console.log("横屏")
  	// 		 mr.style["width"]="55%"
  	// 		 mr.style["float"]="right"
  	// 		 ml.style["width"]="45%"
  	// 		 ml.style["float"]="left"
  	// 	}else{
  	// 		console.log("竖屏")
  	// 		 mr.style["width"]="100%"
  	// 		 mr.style["float"]="none"
  	// 		 ml.style["width"]="100%"
  	// 		 ml.style["float"]="none"
  	// 	}

  	// });
  	 
  }
}
</script>

 
<style scoped>
 *{
	margin:0px;
	padding:0px;
}
.center{
  width:35%;
  height:100vh;
  margin:0 auto;
  overflow:hidden;
}
.fourImg{
  width:100%;
  position:relative;
  display:flex;
  display:-webkit-flex;
  justify-content: center;
  padding-top:10%;
}
.fourImg-ul{
  width:90%;
  display: flex;
  flex-wrap:wrap;
   
  
}
.fourImg-ul > li{
  width:49.5%;
  margin-top:1%;
}
.fourImg-ul > li > img{
  width:100%;
}
.li-margin{
  margin-left:1%;
}
.userMsg{
  width:100%;
  overflow: hidden;
}
.name{
  text-align:center;
}
.userLogo{
  width:100%;
  position:relative;
  display: flex;
  display:-webkit-flex;
  justify-content: center;
  margin-top:10px;
}
.line{
  width:98%;
  margin:0 auto;
  border-bottom:1px solid #000;
  position:absolute;
}
.lineImg{
  display:block;
  width:20px;
  height: 20px;
  position: relative;
  margin-top:-10px;

   
}
.userDetail{
  width:100%;
  font-size: 12px;
  transform:scale(0.6);
  margin-left:-20%;
  /*overflow:hidden;*/
  /*text-overflow:hidden;*/
  white-space: nowrap;
}
.m-left{
  width:32%;
  position:absolute;
  left:0;
}
.m-right{
  width:32%;
  position: absolute;
  top:0;
  right:0;
  
}
.m-right-img{
  display:block;
  
  width:150%;
  /*margin:0 auto;*/
}
.m-left,
.m-right{
  height:100vh;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  overflow:hidden;
}
.erweima{
  height:50px;
  position:absolute;
  left:10px;
  bottom:10%;
}
 /*竖屏*/
@media all and (orientation:portrait){
   .m-left,
   .m-right,
   .center{
    width:100%;
    position:relative;
    height:auto;
   }

  .userDetail{
  transform: scale(1);
  margin-left:0;
  }
  .m-right{
    margin-bottom:20px;
  }
}
 
@media all and (orientation:landscape){
 .m-right-img{
  
 }
}
</style>