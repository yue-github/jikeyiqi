<template>
  <div class="home">
      <header class="header">
      		<router-link to="/Search?where=home" class="search" type="search">请输入你要搜索的内容</router-link>
      		<img src="../assets/home/search.jpg" alt="" class="searchImg" @click='gotoSearch()'>
  			<img src="../assets/home/position.jpg" @click="goPositionS()" alt="" class="position">
  			<router-link to="/PositionS?page_msg=home" class="router-p"><span class="pos-span">{{position}}</span></router-link> 
      </header>
     <banner class="banner"></banner>
     <!-- 信息导航栏 -->
     <div class="msgNav">
     	<ul>
			<li>
				<router-link to="/AnnounceList" class="msgNav-route">
					<p><img src="../assets/home/camara.jpg" alt=""></p>
					<p @click="MysStore()">通告</p>
				</router-link>
			</li>

			<li>
				<router-link to="/ActivityHome" class="msgNav-route">
					<p><img src="../assets/home/flag.jpg" alt=""></p>
					<p>活动</p>
				</router-link>
			</li>

			<li>
				<router-link to="/ChildAll" class="msgNav-route">
					<p><img src="../assets/home/star.jpg" alt=""></p>
					<p>童星</p>
				</router-link>
			</li>

			<li>
				<router-link to="/NearlyJg" class="msgNav-route">
					<p><img src="../assets/home/nearly.jpg" alt=""></p>
					<p>附近</p>
				</router-link>
			</li>

			<li>
				<router-link to="/SearchMore" class="msgNav-route">
					<p><img src="../assets/home/more.jpg" alt=""></p>
					<p>更多</p>
				</router-link>
			</li>
     	</ul>
     </div>

	<!-- 头条的一些新闻 -->
	<div class="headNew">
		<div class="top" @click="toutiao_axios()">
			<div class="left">
				<img src="../assets/home/head-tiao.jpg" alt="">
			</div>
			<div class="right_msg">
				<div class="msg_fir" ref="msg_fir">{{msgNew}}</div>
				<div class="msg_sec" ref="msg_sec">{{msg_sec}}</div>
				
			</div>
		</div>
		<div class="footer">
			<img src="../assets/home/joinUs.jpg" alt="">
		</div>
	</div>
	<!-- 具体信息展示，比如热门通告，推荐童星 -->
	<div class="tellMsgShow">
		<div class="top">
			<div class="left">热门通告</div>

			<div class="right">
				<img src="../assets/home/backRight.jpg" alt="">
			</div>

		</div>
		<div class="footer">
			<ul>
				<li>
					<router-link to="/" class="tellMsgShow-router">
						<div class="top">
							<img src="../assets/home/dream.jpg" alt="">
						</div>

						<div class="center">{{tellMsgShow_center}}</div>

						<div class="footer">
							<span class="fir">
								已经报名
									<span>
										{{tellMsgShow_footer_fir}}
									</span>
								人
							</span>
							<span class="sec">{{tellMsgShow_footer_adress}}</span>
							<span class="thir">剩余{{tellMsgShow_footer_thir}}天</span>
						</div>
					</router-link>
				</li>

				<li>
					<router-link to="/" class="tellMsgShow-router">
						<div class="top">
							<img src="../assets/home/dream.jpg" alt="">
						</div>

						<div class="center">{{tellMsgShow_center}}</div>

						<div class="footer">
							<span class="fir">
								已经报名
									<span>
										{{tellMsgShow_footer_fir}}
									</span>
								人
							</span>
							<span class="sec">{{tellMsgShow_footer_adress}}</span>
							<span class="thir">剩余{{tellMsgShow_footer_thir}}天</span>
						</div>
					</router-link>
				</li>

				<li>
					<router-link to="/" class="tellMsgShow-router">
						<div class="top">
							<img src="../assets/home/dream.jpg" alt="">
						</div>

						<div class="center">{{tellMsgShow_center}}</div>

						<div class="footer">
							<span class="fir">
								已经报名
									<span>
										{{tellMsgShow_footer_fir}}
									</span>
								人
							</span>
							<span class="sec">{{tellMsgShow_footer_adress}}</span>
							<span class="thir">剩余{{tellMsgShow_footer_thir}}天</span>
						</div>
					</router-link>
				</li>

			</ul>
				
		</div>
	</div>
	<!-- 最新活动 -->
	<div class="tellMsgShow tellMsgShow_sec">
		<div class="top">
			<div class="left">最新活动</div>

			<div class="right">
				<img src="../assets/home/backRight.jpg" alt="">
			</div>
		</div>
		<div class="addHeight">
			<ul class="no-floatL">
				<li>
					<router-link to="/" class="tellMsgShow-router">
						<div class="left">
							<img src="../assets/home/twoBaby.jpg" alt="">
						</div>
	<!-- 测试 -->
						 <div class="right">
						 	<div class="top changeBlack">{{recruit}}</div>

						 	<div class="footer">
						 		<div class="top">
						 			<div class="left">
						 				￥
							 			<span>
							 				{{price}}
							 			</span>
							 			.00
						 			</div>
						 			<div class="right">全国</div>
						 		</div>
						 		<p class="foot">{{dataDown}}</p>
						 	</div>

						 </div>
					</router-link>
				</li>

				<li>
					<router-link to="/" class="tellMsgShow-router">
						<div class="left">
							<img src="../assets/home/twoBaby.jpg" alt="">
						</div>
	<!-- 测试 -->
						 <div class="right">
						 	<div class="top changeBlack">{{recruit}}</div>

						 	<div class="footer">
						 		<div class="top">
						 			<div class="left">
						 				￥
							 			<span>
							 				{{price}}
							 			</span>
							 			.00
						 			</div>
						 			<div class="right">全国</div>
						 		</div>
						 		<p class="foot">{{dataDown}}</p>
						 	</div>

						 </div>
					</router-link>
				</li>

				<li>
					<router-link to="/" class="tellMsgShow-router">
						<div class="left">
							<img src="../assets/home/twoBaby.jpg" alt="">
						</div>
	<!-- 测试 -->
						 <div class="right">
						 	<div class="top changeBlack">{{recruit}}</div>

						 	<div class="footer">
						 		<div class="top">
						 			<div class="left">
						 				￥
							 			<span>
							 				{{price}}
							 			</span>
							 			.00
						 			</div>
						 			<div class="right">全国</div>
						 		</div>
						 		<p class="foot">{{dataDown}}</p>
						 	</div>

						 </div>
					</router-link>
				</li>

			</ul>
		</div>
	</div>
	<!-- 推荐童星 -->
	<div class="tellMsgShow tellMsgShow_thir">
		<div class="top">
			<div class="left">推荐童星</div>

			<div class="right">
				<img src="../assets/home/backRight.jpg" alt="">
			</div>
		</div>
		<ul>
			<li>
				<router-link to="/" class="child_foot" >
					<div class="top">
						<img src="../assets/home/boy.jpg" alt="">
					</div>

					<div class="foot">
						<div class="top">
							<p class="fir">{{name}}</p>
							<p class="sec"><img src="../assets/home/cap.jpg" alt=""></p>
							<p class="thir"><img src="../assets/home/blueBoy.jpg" alt=""></p>
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
						<img src="../assets/home/boy.jpg" alt="">
					</div>

					<div class="foot">
						<div class="top">
							<p class="fir">{{name}}</p>
							<p class="sec"><img src="../assets/home/girl.jpg" alt=""></p>
							<p class="thir"><img src="../assets/home/cap.jpg" alt=""></p>
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
						<img src="../assets/home/boy.jpg" alt="">
					</div>

					<div class="foot">
						<div class="top">
							<p class="fir">{{name}}</p>
							<p class="sec"><img src="../assets/home/girl.jpg" alt=""></p>
							<p class="thir"><img src="../assets/home/cap.jpg" alt=""></p>
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
						<img src="../assets/home/boy.jpg" alt="">
					</div>

					<div class="foot">
						<div class="top">
							<p class="fir">{{name}}</p>
							<p class="sec"><img src="../assets/home/blueBoy.jpg" alt=""></p>
							<p class="thir"><img src="../assets/home/cap.jpg" style="display:none" alt=""></p>
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
	 <div v-html="headerTiao"></div>

	<br>
	<br>
	<br>
  </div>
</template>

<script>
 
import Search from './../components/Search'
import routerJs from './../router.js'
import banner from './HOME/Banner'
export default {
  name: 'home',
  data(){
  	return {

  	  msgNew:"童星汇将打造世界知名品牌,欢迎大家关注本平台,将为连接家长与演艺信息搭建桥梁",
  	  msg_sec:"",
  	  tellMsgShow_center:"梦之缘大型舞台表演欢迎大家共同参与",
  	  tellMsgShow_footer_fir:4,
  	  tellMsgShow_footer_adress:"全国",
  	  tellMsgShow_footer_thir:0,
  	  recruit:"香港拓展活动7天6夜正在火爆招募中...",
  	  dataDown:"15天后截止",
  	  price:6988,
  	  age:8,
  	  stature:136,
  	  weight:31,
  	  name:"小演员姓名",
  	  headerTiao:""
  	}
  },
  components: {
      banner
  },
  props:["position"],
  methods:{
  	goPositionS(){
  		routerJs.push({
  			path:"/PositionS",
  			query:{
  				page_msg:"home"
  			}
  		})
  	},
  	gotoSearch(){
  		this.$router.push({
  			path:"/Search",
  			query:{
  				where:'home'
  			}
  		})
  	},
  	toutiao_axios(){
	  	this.$axios.get("http://123.206.202.40:82/index.php/api/Index/getSwriper")
	  .then(res=>{
	   		this.headerTiao=res.data;
	   		console.log(res)
	   		routerJs.push({
	   			path:"/ToutiaoNew",
	   			query:{
	   				toutiaoMain:res,
	   				toutiao:this.headerTiao
	   			}
	   		})
	   })
  	},
  	MysStore(){
  		// this.$store.commit("DO")
  	}
  },
  // height:"100cm",
  // 		 sex:0,
  // 		 place:'福建三明',
  // 		 cardmode:0,
  // 		 nationatily:"中国",
  // 		 lookstyle:"可爱",
  // 		 speciality:"善于演出",
  // 		 age:"9",
  // 		 video:"否"
 // mobile:'18814137320',
 // name:'1545456',
 // email:'23wedfew4@de.com',
 // password:'523',
 // c_password:'523'
// 报名参数错	
// babyid:'123',
// type:'面议',
// noticeid:'23',
// nstarid:'56',
// contacts:"父亲名",
// contactmode:'110',
// token:''	 
  mounted(){
  	// 注册
  	// this.$axios.post("http://localhost/vc/public/api/user/register",{
  	// 	"email":"1443250458@qq.com",
  	// 	'password':"123",
  	// 	// 'c_password':"123"
  	// })
  	// .then(res=>{
  	// 	console.log(res);
  	// })
  	// 用于开发登录
	let promise=new Promise((resolve,reject)=>{
	  		this.$axios.post("http://localhost/vc/public/api/user/login",{
	  	    email:"1443250458@qq.com",
	  		password:'123'
	  	})
	  	.then((data)=>{
	  		resolve(data)
	  	})
  	})
  	promise.then(res=>{
  		// 用于测试
  		this.$store.state.tok=res.data.token;
  		console.log(this.$store.state.tok);
  		// return false;
  		this.$axios.post('http://localhost/vc/public/api/vcTest',{
  			// id:12,
  			// id:12,
  			// token:this.$store.state.tok
  		})
	  	.then((data)=>{
	  		console.log(data)
	  	})
  	})
  
  	
  	// this.$axios.post("http://localhost/appPHP/public/api/GetFilterChild",{
  	// 	mobile:'13366667777',
   //      password:'12345'
  	// })
  	// .then(data=>{
  	// 	console.log(data)
  	// })
  	let index_boo=true;
  	setInterval(()=>{
  		if(index_boo){
  			$(this.$refs.msg_fir).hide(1000);
  			$(this.$refs.msg_sec).show(1000);
  			index_boo=!index_boo;
  		}else{
  			$(this.$refs.msg_fir).show(1000);
  			$(this.$refs.msg_sec).hide(1000);
  			index_boo=!index_boo;
  		}
  	},3000)
 	// $(".pos-span").css("color","yellow")
  	// window.location="localhost:8080";
  	this.$emit("changeColor","将首页的字颜色改为蓝色")
  	document.documentElement.scrollTop=0;
   //获取头条
   		this.$axios.get("http://123.206.202.40:82/index.php/api/Index/getTops")
   		.then(data=>{
   		 
   			this.msgNew=data.data[0].name;
   			this.msg_sec=data.data[1].name;

   		})
  	 
  	// this.$axios.get("http://123.206.202.40:82/index.php/api/nav/getNavCate")
  	// .then((response)=>{
  	// 	console.log(response)
  	// })



  	// fetch
   // fetch("https://www.kancloud.cn/yunye/axios/234845",{
   // 		methods:"get",
   // 		headers:{

   // 		},
   // 		body:{}
   // })
   // .then(response=>{

   // })
   



  	// this.$axios.post("http://123.206.202.40:82/index.php/api/baby/addbaby")
  	// .then(data=>{
  	// 	console.log(data)
  	// })
  	
  	
  	
  	
  	
  	
  // axios
   // this.$axios.get("http://www.xiaoyaoji.cn/share/xpMxddpF1/yEtLA5oOD")
   // .then(res=>{
   // 		console.log(res.data)
   // })

   // '/apis': {
   //          // 测试环境
   //          target: 'https://goods.footer.com',  // 接口域名
   //          changeOrigin: true,  //是否跨域
   //          pathRewrite: {
   //              '^/apis': ''   //需要rewrite重写的,
   //          }              
   //      }



  }
  
}
</script>
<style scoped>
.home{
	width:100%;
	position:relative;
}
.home > .header{
	width:100%;
	height:50px;
	position:;
	display:flex;
	position:fixed;
	max-width:640px;
	min-width:300px;
	top:0;
	align-items: center;
	border-bottom:1px solid #F0F0F0;
	background:#fff;
	z-index:100;
}
.home > .header > .searchImg{
	height:22px;
	margin-left:-28px;
	border-radius:0px 100px 100px 0px;
}
.home > .header > .search{
	background:#7fd7db;
	width:60%;
	height:25px;
	display:block;
	color:#000;
	border-radius:100px;
	margin-left:55px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	padding-left:10px;
	font-size:15px;
	color:#6C6C6C;
}
.home > .header > .position{
	margin-left:10px;
}
.home > .header > .router-p{
	display:block;
	width:38px;
	width:48px;
	text-decoration:none;
	color:#00b1bb;
	overflow: hidden;
	white-space: nowrap;
	text-overflow:ellipsis;
	 
	/*right:15px;*/
	/*font-size:12px;*/
}
 @media screen and (max-width: 330px){
 	.pos-span{
 		font-size:13px;
 	}
 }
.home > .banner{
	margin-top:50px;
}
.home > .msgNav{
	margin-top:20px;
	width:100%;
	background:#fff;
}
.home > .msgNav > ul{
	width:100%;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	overflow:auto;
}
.home > .msgNav > ul > li{
	width:20%;
	display:flex;
	display:-webkit-flex;
	justify-content: center;
	float:left;
}
.home > .msgNav > ul > li > .msgNav-route{
	text-decoration: none;
	color:#000;
	display:block;

}
.home > .msgNav > ul > li > .msgNav-route > p{
	height:50%;
	display:flex;
	display:-webkit-flex;
	justify-content: center;
	/*margin-bottom:6px;*/
}
.home > .msgNav > ul > li > .msgNav-route > p > img {
	width:100%;
}
/*头条的一些新闻*/
.home > .headNew{
	width:100%;
	background:#fff;
	padding:6px 0 10px 0;
	border-top:1px solid #F0F0F0;
}
.home > .headNew > .top{
	display:block;
	text-decoration: none;
	color:#000;
	width:100%;
	height:50px;
	display:-webkit-flex;
	display:flex;
	align-items: center;
	background:#fff;

}
.right_msg{
	width:100%;
	position:relative;
	display:flex;
	display:-webkit-flex;
	flex-direction:column;

}
.msg_fir{
	word-break: break-all;
}
.msg_sec{
	/*position:absolute;*/
	display:none;
	word-break: break-all;
}
.home > .headNew > .top > .left{
	height:50px;
}
.home > .headNew > .footer{
	margin-top:8px;
}
.home > .headNew > .footer > img{
	display: block;
	width:100%;
}
/*具体信息展示，比如热门通告，推荐童星*/
.tellMsgShow{
	width:100%;
}
.tellMsgShow > .top{
	display:flex;
	display:-webkit-flex;
	position:relative;
	align-items:center;
	width:100%;
	background:#fff;
	padding:18px 0;
	border-bottom:1px solid #F0F0F0;
}
.tellMsgShow > .top > .left{
	margin-left:18px;
	font-size: 18px;
}
.tellMsgShow > .top > .right{
	position:absolute;
	padding-top:6px;
	right:15px;
}
.tellMsgShow{
	width:100%;
}
.tellMsgShow > .footer{
	width:100%;
	margin-top:18px;
	position:relative;
	overflow:auto;
}
.tellMsgShow > .footer > ul{
	width:200%;
	overflow:auto;
}
::-webkit-scrollbar {
            width: 0;
            height: 0;
            overflow: hidden;
 }
.tellMsgShow > .footer > ul > li{
	width:30%;
	background: #fff;
	overflow:hidden;
	float:left;
	

	margin-left:18px;
}
.tellMsgShow > .footer > ul > li > .tellMsgShow-router{
	display:block;
	text-decoration: none;
	color:#000;
	display:block;
	width:100%;
}
.tellMsgShow > .footer > ul > li > .tellMsgShow-router > .top{
	width:100%;
	border-radius:10px;
	overflow:hidden;
}
.tellMsgShow > .footer > ul > li > .tellMsgShow-router > .top > img{
	width:100%;
	display:block;
}
.tellMsgShow > .footer > ul > li > .tellMsgShow-router > .center{
	width:100%;
	white-space: nowrap;
	text-overflow:ellipsis;
	overflow:hidden;
	padding:8px;
}
.tellMsgShow > .footer > ul > li > .tellMsgShow-router > .footer{
	width:100%;
	position:relative;
	display:-webkit-flex;
	display:flex;
	align-items: center;
	padding-bottom:2px;
}
.tellMsgShow > .footer > ul > li > .tellMsgShow-router > .footer > span{
	font-size:12px;
	color:#ccc;
}
.tellMsgShow > .footer > ul > li > .tellMsgShow-router > .footer > .fir{
	position:absolute;
	left:8px;
	margin-bottom:2px;
}
.tellMsgShow > .footer > ul > li > .tellMsgShow-router > .footer > .sec{
	 margin:0 auto;
	 padding-left:38px;
	 padding-top:5px;
}
.tellMsgShow > .footer > ul > li > .tellMsgShow-router > .footer > .thir{
	position:absolute;
	right:0;
	top:5px;
}
.tellMsgShow > .footer > ul > li > .tellMsgShow-router > .footer > span > span{
	color:red;
	margin:0;
	font-size:19px;
}
/*position*/
.tellMsgShow_sec{
	width:100%;
	margin-top:18px;
	overflow:auto;
}
 
.tellMsgShow_sec > .addHeight{
	overflow:auto;
}
.tellMsgShow_sec > .addHeight > .no-floatL{
	width:100%;
}
.tellMsgShow > .footer > .no-floatL > li{
	float:none;
	width:100%;
	/*height:100px;*/
	display:flex;
	display:-webkit-flex;
	align-items: center;
	margin-bottom:20px;
}
.tellMsgShow_sec > .addHeight > .no-floatL li > .tellMsgShow-router{
	display:block;
	display:flex;
	display:-webkit-flex;
	align-items:center;
	overflow:auto;
}
.tellMsgShow_sec > .addHeight > .no-floatL > li > .tellMsgShow-router > .left{
	width:30%;
	/*height:100px;*/
	float:left;
}
.tellMsgShow_sec > .addHeight > .no-floatL > li > .tellMsgShow-router > .left > img{
	width:100%;
}
.tellMsgShow_sec > .addHeight > .no-floatL > li > .tellMsgShow-router > .right{
	float:right;
	width:68%;
	padding:0 10px;
	/*height:100px;*/
}
.tellMsgShow_sec > .addHeight > .no-floatL > li > .tellMsgShow-router > .right > .top{
	width:100%;
	white-space: wrap;
	font-size:17px;
	height:50px;
}
.tellMsgShow_sec > .addHeight > .no-floatL > li > .tellMsgShow-router > .right > .footer{
	width:100%;
	height:50px;
}
.tellMsgShow_sec > .addHeight > .no-floatL > li > .tellMsgShow-router > .right > .footer > .top{
	width:100%;
	height:22.5px;
	overflow:hidden;
	position:relative;
}
.tellMsgShow_sec > .addHeight > .no-floatL > li > .tellMsgShow-router > .right > .footer > .top > .left{
	position:absolute;
	color:#f40;
	left:0;
}
.tellMsgShow_sec > .addHeight > .no-floatL > li > .tellMsgShow-router > .right > .footer > .top > .left > span{
	font-size:18px;
}
.tellMsgShow_sec > .addHeight > .no-floatL > li > .tellMsgShow-router > .right > .footer > .top > .right{
	position:absolute;
	padding:0 20px;
	color:#CCC;
	font-size:17px;
	right:0;
}
.tellMsgShow_sec > .addHeight > .no-floatL > li > .tellMsgShow-router > .right > .footer > .foot{
	display:inline-block;
	color:yellow;
	background:url("../assets/home/dataDown.jpg");
}
/*推荐童星*/
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
.changeBlack{
	color:#000;
}
</style>