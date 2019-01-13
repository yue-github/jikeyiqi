<template>
  <div class="tellMsgShow_thir">
  知名童星
   	 	<ul>
				<li>
					<router-link to="/" class="child_foot" >
						<div class="top">
							<img src="./../../assets/home/boy.jpg" alt="">
						</div>

						<div class="foot">
							<div class="top">
								<p class="fir">{{name}}</p>
								<p class="sec"><img src="./../../assets/home/cap.jpg" alt=""></p>
								<p class="thir"><img src="./../../assets/home/blueBoy.jpg" alt=""></p>
							</div>

							<div class="foot">
								<p class="fir">{{age}}岁</p>
								<p class="sec">{{stature}}cm</p>
								<p class="thir">{{weight}}kg</p>
							</div>
						</div>
					</router-link>
				</li>

				<li>
					<router-link to="/" class="child_foot" >
						<div class="top">
							<img src="./../../assets/home/boy.jpg" alt="">
						</div>

						<div class="foot">
							<div class="top">
								<p class="fir">{{name}}</p>
								<p class="sec"><img src="./../../assets/home/girl.jpg" alt=""></p>
								<p class="thir"><img src="./../../assets/home/cap.jpg" alt=""></p>
							</div>

							<div class="foot">
								<p class="fir">{{age}}岁</p>
								<p class="sec">{{stature}}cm</p>
								<p class="thir">{{weight}}kg</p>
							</div>
						</div>
					</router-link>
				</li>

				<li>
					<router-link to="/" class="child_foot" >
						<div class="top">
							<img src="./../../assets/home/boy.jpg" alt="">
						</div>

						<div class="foot">
							<div class="top">
								<p class="fir">{{name}}</p>
								<p class="sec"><img src="./../../assets/home/girl.jpg" alt=""></p>
								<p class="thir"><img src="./../../assets/home/cap.jpg" alt=""></p>
							</div>

							<div class="foot">
								<p class="fir">{{age}}岁</p>
								<p class="sec">{{stature}}cm</p>
								<p class="thir">{{weight}}kg</p>
							</div>
						</div>
					</router-link>
				</li>

				<li>
					<router-link to="/" class="child_foot" >
						<div class="top">
							<img src="./../../assets/home/boy.jpg" alt="">
						</div>

						<div class="foot">
							<div class="top">
								<p class="fir">{{name}}</p>
								<p class="sec"><img src="./../../assets/home/blueBoy.jpg" alt=""></p>
								<p class="thir"><img src="./../../assets/home/cap.jpg" style="display:none" alt=""></p>
							</div>

							<div class="foot">
								<p class="fir">{{age}}岁</p>
								<p class="sec">{{stature}}cm</p>
								<p class="thir none">{{weight}}kg</p>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>

<script>
export default {
  name: 'ChildAll',
  data(){
	  return {
	  	  age:8,
	  	  stature:136,
	  	  weight:31,
	  	  name:"小演员姓名"
	  }
    
  }
}
</script>

 
<style scoped>
 /*童星all*/
.tellMsgShow_thir{
	width:100%;
	background:#fff
}
.tellMsgShow_thir > ul{
	width:100%;
	overflow:auto;
}
.tellMsgShow_thir > ul > li{
	width:50%;
	float:left;
}
.tellMsgShow_thir > ul > li > .child_foot{
	display:block;
	color:#000;
	text-decoration: none;
}
.tellMsgShow_thir > ul > li > .child_foot > .top{
	width:100%;

}
.tellMsgShow_thir > ul > li > .child_foot > .top > img{
	display:block;
	width:100%;
}
.tellMsgShow_thir > ul > li > .child_foot > .foot{
	width:100%;
}
.tellMsgShow_thir > ul > li > .child_foot > .foot > .top{
	width:100%;
	height:30px;
	/*display:flex;
	display:-webkit-flex;
	align-items: center;*/
}
.tellMsgShow_thir > ul > li > .child_foot > .foot > .top > .fir{
	float:left;
	margin-left:15px;
}



.tellMsgShow_thir > ul > li > .child_foot > .foot > .top > .thir{
	width:25px;
	height:25px;
}
.tellMsgShow_thir > ul > li > .child_foot > .foot > .top > .sec{
	float:right;
}
.tellMsgShow_thir > ul > li > .child_foot > .foot > .top > .thir{
	float:right;
}

.tellMsgShow_thir > ul > li > .child_foot > .foot > .foot{
	width:100%;
	height:30px;
	position:relative;
}
.tellMsgShow_thir > ul > li > .child_foot > .foot > .foot > p{
	color:#CCC;
}
.tellMsgShow_thir > ul > li > .child_foot > .foot > .foot > .fir{
	position:absolute;
	left:15px;
}
.tellMsgShow_thir > ul > li > .child_foot > .foot > .foot > .sec{
	position:relative;
	text-align:center;
}
.tellMsgShow_thir > ul > li > .child_foot > .foot > .foot > .thir{
	position:absolute;
	top:0;
	right:0;
}
</style>