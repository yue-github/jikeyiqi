<template>
  <div class="Model7">
   	 

   	 <div class="m-right">
			<div class="twoImg">
  				<ul class="twoImg-ul">
  					<li><img v-bind:src="msgSrc[5]" alt=""></li>
  					<li><img v-bind:src="msgSrc[6]" alt=""></li>
  				</ul>
			</div>
			<div class="userMsg">
				<ul class="userMsg-ul">
					<li class="textCenter boyName">{{userDetail[0].name}}</li>
					<li class="textCenter personType">{{userDetail[1].personType}}</li>
					<li class="flexPortrait">
						   <div class="map">
						  		 <img v-bind:src="msgSrc[1]" alt="" class="mapImg">
						   </div>
						   <div class="userMSG">
						   	 
						   			年龄:{{userDetail[2].age}}岁&nbsp;|&nbsp;
						   			身高:{{userDetail[3].height}}cm&nbsp;|&nbsp;
						   			体重:{{userDetail[4].weight}}kg&nbsp;|&nbsp;
						   			鞋码:{{userDetail[5].xiema}}码
						   		 
						   </div>
						   <div class="erweima">
						   		<img v-bind:src="msgSrc[1]" alt="" class="erweimaImg">
						   </div>
					</li>
				</ul>
			</div>
   	 </div>


    <div class="m-left">
            <ul class="m-left-ul">
              <li class="marginLeft"><img v-bind:src="msgSrc[0]" alt=""></li>
              <li><img v-bind:src="msgSrc[2]" alt=""></li>
              <li class="marginLeft"><img v-bind:src="msgSrc[3]" alt=""></li>
              <li><img v-bind:src="msgSrc[4]" alt=""></li>
            </ul>
     </div>



  </div>
</template>

<script>
export default {
  name: 'Model7',
  data(){
	  return {
	  	msgSrc:[
	  		require("./../assets/otherProject/mSeven/1.jpg"),
	  		require("./../assets/otherProject/map.jpg"),
	  		require("./../assets/otherProject/mSeven/2.jpg"),
	  		require("./../assets/otherProject/mSeven/3.jpg"),
	  		require("./../assets/otherProject/mSeven/4.jpg"),
	  		require("./../assets/otherProject/mSeven/5.jpg"),
	  		require("./../assets/otherProject/mSeven/8.jpg"),
	  		require("./../assets/otherProject/mFour/erweima.jpg"),
	  	],
	  	userDetail:[
	  		{name:"张允钊"},
	  		{personType:"zhang yun zhao"},
	  		{age:"7"},
	  		{height:"108"},
	  		{weight:"18"},
	  		{xiema:"27"},
	  		 
	  	]
	  }
	  
    
  }
}
</script>

 
<style scoped>
 .m-left{
 	width:48%;
 	height:100vh;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
  position:absolute;
  left:0;
 }
 .m-left-ul{
 	width:100%;
 	display:flex;
 	display:-webkit-flex;
	flex-wrap:wrap;
 }
  .m-left-ul > li{
  	width:49.5%;
  	margin-top:1%;
  }
  .m-left-ul > li > img{
  	width:100%;
  }
  .marginLeft{
  	margin-right:1%;
  }
  .m-right{
  	width:52%;
  	height:100vh;
    position:absolute;
    right:0;

  }
  .Model4{
  	width:100%;
    position:relative;
  	display:flex;
  	display:-webkit-flex;
  }

  .twoImg{
  	width:100%;
  	padding-top:10%;
  }
  .twoImg-ul{
  	width:100%;
  	display:flex;
  	display:-webkit-flex;
	  justify-content: center;
  }
  .twoImg-ul > li{
  	width:48%;
  }
   .twoImg-ul > li > img{
   	width:100%;
   }
   .textCenter{
   	text-align:center;
   }
   .flexPortrait{
   	width:100%;
   	display:-webkit-flex;
   	display:flex;
   	justify-content: center;
    /*line-height:100px;*/
    overflow:hidden;
   
   }
   .map,
   .erweima{
   	width:15%;
    height:60px;
    display:flex;
    display:-webkit-flex;
    justify-content: center;
    align-items: center;
   }
   .userMSG{
   	width:60%;
   	display:flex;
   	display:-webkit-flex;
   	justify-content: center;
   	font-size:12px;
   	white-space: nowrap;
   	align-items: center;
    transform:scale(0.8);
    font-family:"华文行楷";
    box-sizing: border-box;
    padding-top:30px;

   }
   .mapImg,
   .erweimaImg{
    width:100%;
    
   }
   .mapImg{
    visibility:hidden;
   }
  .textCenter{
    font-size:28px;
    font-family:"华文行楷";
  }
  .personType{
    font-size:14px;
    margin-top:10px;
  }
  .boyName{
    margin-top:-18px;
  }
    @media all and (orientation:portrait){
    .m-left,
    .m-right{
      width:100%;
      position:relative;
      height: auto;
    }
    .Model4{
      display:block;
    }
    .m-right{
      margin-top:-30px;
    }
  }
</style>