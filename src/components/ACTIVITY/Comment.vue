<template>
  <div class="comment"> 
  		<div class="ErollHead"> 
  			<img src="./../../assets/announce/blue_left.jpg" alt="" class="ErollImg" @click="gotoActivityDetail()">
	   		 <span class="ErollFont">全部评论</span>
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
  </div>
</template>

<script>
export default {
  name: 'comment',
  data(){
	  return {
	  	 arrCmt:[
	  	  	{
	  	  		userImg:require("./../../assets/mall/user_logo.jpg"),
	  	  		cmtDate:"2018/04/28",
	  	  		content:`
	  	  			如果你无法简洁的表达你的想法，那只能说明你还不够了解它。阿尔伯特-爱因斯坦如果你
	  	  		`,
	  	  		username:"用户名"

	  	  	},
	  	  	{
	  	  		userImg:require("./../../assets/mall/user_logo.jpg"),
	  	  		cmtDate:"2018/04/28",
	  	  		content:`
	  	  			如果你无法简洁的表达你的想法，那只能说明你还不够了解它。阿尔伯特-爱因斯坦如果你
	  	  		`,
	  	  		username:"用户名"

	  	  	},
	  	  	{
	  	  		userImg:require("./../../assets/mall/user_logo.jpg"),
	  	  		cmtDate:"2018/04/28",
	  	  		content:`
	  	  			如果你无法简洁的表达你的想法，那只能说明你还不够了解它。阿尔伯特-爱因斯坦如果你
	  	  		`,
	  	  		username:"用户名"

	  	  	},
	  	  	{
	  	  		userImg:require("./../../assets/mall/user_logo.jpg"),
	  	  		cmtDate:"2018/04/28",
	  	  		content:`
	  	  			如果你无法简洁的表达你的想法，那只能说明你还不够了解它。阿尔伯特-爱因斯坦如果你
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
  	},
  	gotoActivityDetail(){
  		this.$router.push({
  			path:"/ActivityDetail",
  			// 借助order
  			query:{
  				order:true
  			}

  		})
  	}
  },
  mounted(){
  	document.documentElement.scrollTop=0;
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
	font-size:20px;
 }
 .cmt-detail{
	width:100%;
	margin-top:18px;
	overflow: auto;

}
.cmt-detail-ul{
	width:100%;
	overflow:hidden;
}
.cmt-detail-ul > li{
	width:100%;
	margin-left:15px;
	overflow:auto;
	display:flex;
	display:-webkit-flex;
	border-bottom:1px solid #ADADAD;
	border-radius: 1px;
	padding:0px 20px 15px 0px;
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
}
.wc-right{
	float:right;
	font-weight:bold;
}
.writeCmt{
	width:100%;
	padding:0px 15px;
	overflow:auto;
	margin-top:10px;
}
.wcImput{
	width:100%;
	height:200px;
	font-size:15px;
	word-wrap: wrap;
	border:none;
	outline: none;
}
.cmtData-span{
	position:absolute;
	right:15px;
	font-size:13px;
	color:#ccc;
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