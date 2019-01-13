<template>
  <div class="vDetail">
   		<header class="h-sm">
	   	 		<img src="./../../assets/search/blue_left.jpg" alt="" class="h-sm-left" @click="goNewMain()">
	   	 		 
	   </header>
	   <div class="center">
	   		
	   		<div class="c-m">
	   			{{content}}
	   			<div class="c-m-bott">
	   				<span>{{newType}}</span>
	   				<span class="dataChange">{{data}}</span>
	   			</div>
	   		</div>
			<!-- 文字展示区 -->
	   		<div class="c-f">
	   			{{dataDetail}}
	   		</div>
	   		<!-- 图片展示区 -->
	   		<div class="c-top">
	   			<img v-bind:src="img" alt="" class="c-img-left">
	   			<div class="audio-right">
		   			<div class="content-left">
		   				<img src="./../../assets/toutiaoNew/audio_play.jpg" alt="" class="c-f-img">
		   			<audio v-bind:src="d_audio" class="audioClick" preload="meta"></audio>
		   			</div>
		   			<div class="audioC-right">1"123"</div>
	   			</div>

	   		</div>
	   		
			<!-- 隔开 -->
			<div class="split"></div>
			<!-- 评论内容 -->
			<div class="commont">
				<div class="cmt-top">评论<span></span></div>
				<div class="cmt-top"></div>
				<div class="cmt-top"></div>
			</div>
			<div class="cmt-detail">
				<ul class="cmt-detail-ul">
					<li v-for="val in arrCmt">
						<div class="c-d-left"><img v-bind:src="val.userImg" alt="" class="userHead"></div>
						<div class="c-d-right">
							<div class="cd-r-t">
								<span class="username">{{val.username}}</span>
								<span class="cmtData-span">{{val.cmtDate}}</span>
							</div>
							<div class="cd-r-f">
								{{val.content}}
							</div>
						</div>
						
	

					</li>
				</ul>
			</div>
	   </div>
	   <div class="writeCmt">
			   <div class="content-down">

						<div class="wc-imput">
								
								<textarea name="" class="wcImput" placeholder="期待你的评论..." ref="textarea">
								</textarea>
									<!-- <input type="text" class="wcImput" placeholder="期待你的评论...">  -->
								</div>

								<div class="wc-right" @click="send()">
									发送
						</div>
			  </div>
			  <div class="doubleLine"></div>
		</div>
	   <br>
	   <br>
	   <br>
	   <br>
	   <br>
	   <br>
	   <br>
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
export default {
  name: 'vDetail',
  data(){
	  return {
	  	  d_audio:require("./../../assets/audio/child.mp3"),
	  	  img:"",
	  	  content:"",
	  	  newType:"腾讯新闻",
	  	  data:"2018/11/23",
	  	  dataDetail:`
	  	  	视网消息(新闻联播):习近平总书记在深入推动长江经济带发展座谈会上强调，要正确把握生态环境保护和经济发展的关系，探索协同推进生态优先和绿色发展的新路子
	  	  `,
	  	  dataInsert:`
	  	  	视网消息(新闻联播):蒲老师在深入推动长江经济带发展座谈会上强调，要正确把握生态环境保护和经济发展的关系，探索协同推进生态优先和绿色发展的新路子,新路子怎么走？这几天，我们的记者在长江沿线记录了各地的积极实践。<br><span>&nbsp;</span>
	  	  	位于青海沱沱河流域的帮的湖，距离我家很远很远很远很远很远很远很远很远很远很远很远很远很远很远很远很远很远很远


	  	  `,
	  	  arrCmt:[
	  	  	{
	  	  		userImg:require("./../../assets/mall/user_logo.jpg"),
	  	  		cmtDate:"2018/04/28",
	  	  		content:`
	  	  			如果你无法简洁的表达你的想法，那只能说明你还不够了解它。阿尔伯特-爱因斯坦如果你干嘛干嘛
	  	  		`,
	  	  		username:"用户名"

	  	  	},
	  	  	{
	  	  		userImg:require("./../../assets/mall/user_logo.jpg"),
	  	  		cmtDate:"2018/04/28",
	  	  		content:`
	  	  			如果你无法简洁的表达你的想法，那只能说明你还不够了解它。阿尔伯特-爱因斯坦如果你干嘛干嘛
	  	  		`,
	  	  		username:"用户名"

	  	  	},
	  	  
	  	  ]
	  }
    
  },
  methods:{
  	send(){
  		let obj={
  			userImg:require("./../../assets/mall/user_logo.jpg"),
	  	  		cmtDate:"2018/11/23",
	  	  		content:`
	  	  			如果你无法简洁的表达你的想法，那只能说明你还不够了解它。阿尔伯特-爱因斯坦如果你干嘛干嘛
	  	  		`,
	  	  	username:"吴同岳"

  		}
  		let val=this.$refs.textarea.value,
  			nowDate=new Date();
  			obj.cmtDate=nowDate.getFullYear()+"/"+(nowDate.getMonth()+1)+"/"+nowDate.getDate();


  		obj.content=val;
  		this.arrCmt.push(obj);
  		this.$refs.textarea.value="";
  	},
  	goNewMain(){
  		this.$router.push("/ToutiaoNew")
  	}
  },
  mounted(){
  	document.documentElement.scrollTop=0;
  	let data=this.$route.query;
  	this.img=data.vedioImg;
  	this.content=data.vedioC;
  	let audio=document.getElementsByClassName("audioClick")[0],
  		rightBlue=document.getElementsByClassName("audio-right")[0],
  		audio_boo=true;
  	rightBlue.addEventListener("click",()=>{
  		// 音频的播放和暂停
  		if(audio_boo){
  			audio_boo=!audio_boo;
  			audio.play();

  		}else{
  			audio_boo=!audio_boo;
  			audio.pause();

  		}
  		
  	})
  }

}
</script>

 
<style scoped>
 .h-sm{
 	width:100%;
 	height:50px;
 	background:#02b0b9;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	color:#fff;
 	font-size:19px;
 	box-shadow: 0px 1px 20px 1px #ccc;
 }
 .h-sm-left{
 	position:absolute;
 	left:15px;
 	height:35px;
 }
 .center{
 	width:100%;
 }
.c-top{
	/*margin:1px 0px;*/

	width:100%;
	padding: 10px 15px;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	border-bottom:1px solid #ADADAD;
 	border-radius: 1px;
 	margin-bottom:15px;

}

.audio-right{
	width:60%;
	background:#005eb8;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	margin-left:18px;
 	border-radius:20px;
 	overflow: hidden;
 	padding:5px 10px;
 	position:relative;
 	/*渐变效果*/
 	background: -webkit-linear-gradient(left, #005eb8 , #01adb7); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(right, #005eb8, #01adb7); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(right, #005eb8, #01adb7); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #005eb8 , #01adb7); /* 标准的语法 */
}
.audioC-right{
	 position:absolute;
	 margin-right:10px;
	 right:0;
	 color:#fff;

}
.c-f-img{
	margin-top:3px;
}
.c-top > img{
	display:block;
	width:20%;

}
.audioC-right{
	color:;
}
.c-m{
	padding:15px;
	border-bottom:1px solid #ADADAD;
	border-radius:1px;
}
.c-m-bott{
	width:100%;
	display: flex;
	display:-webkit-flex;
	align-items: center;
	color:#ccc;
	font-size:13px;
	margin-top:15px;
}
.dataChange{
	position: absolute;
	right:10px;
}
.c-f{
	padding:10px 15px;
	line-height:30px;
	font-size:13px;
	border-bottom:1px solid #ADADAD;
	border-radius:1px;
}
.split{
	height:10px;
	width:100%;
	background:#F0F0F0;
}
.commont{
	padding:15px;
	font-size: 18px;
	font-weight:bold;
	border-bottom:1px solid #F0F0F0;
	border-radius: 1px;
}
.cmt-top > span{
	 box-shadow: 0px 10px 10px 2px #F9F900;
	 width:30px;
	 position:absolute;
	 margin-left: -30px;
	 margin-top:3px;
}
.cmt-detail{
	width:100%;
	margin-top:15px;
	overflow: auto;

}
.cmt-detail-ul{
	width:100%;
	overflow:auto;
}
.cmt-detail-ul > li{
	width:100%;
	overflow:auto;
	display:flex;
	display:-webkit-flex;
	border-bottom:1px solid #ADADAD;
	border-radius: 1px;
	padding:0px 10px 15px;
	margin-bottom:10px;
}
.c-d-left{
	margin-right:10px;
}
.c-d-right{
	padding-top:8px;
}
.userHead{
	border-radius:100%;
	display:block;
	height:45px;
}
.cd-r-f{
	line-height: 25px;
	font-size:14px;
}
.wc-imput{
	float:left;
	width:85%;
	z-index:3;
}
.wc-right{
	float:right;
	font-weight:bold;
}
.writeCmt{
	width:100%;
	padding:0px 15px;
	overflow:auto;
	margin-top:80px;
	position:relative;

}
.wcImput{
	width:100%;
	height:200px;
	font-size:15px;
	word-wrap: wrap;
	border:none;
	outline: none;
	background:transparent;

}
.cmtData-span{
	position:absolute;
	right:15px;
	font-size:13px;
	color:#ccc;
}
.doubleLine{
	width:100%;
	height:60px;
	/*border-top:1px solid #ADADAD;
	border-bottom:1px solid #ADADAD;*/
	position:absolute;
	top:10px;
	left:0;
	/*display:none;*/
	box-shadow:1px 0px 20px 1px #ccc;
	/*box-shadow:-1px 0px 20px 1px #ccc;*/
}
.content-down{
	position:relative;
	padding-top:32px;
	overflow:auto;
	z-index:15;
	
}
</style>