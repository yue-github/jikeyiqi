<template>
  <div class="GoEditChildHome">
   		<div class="ErollHead">
	         <img src="./../../assets/person/back_left.png" alt="" class="ErollImg" @click="goPerson()">
	         <span class="ErollFont">萌娃主页编辑/查看</span>
    	</div>
    	<div class="addFixedHeight"></div>
    	<div class="nav">
    		<p class="look" @click="changeColor('look')" ref="look">查看</p>
    		<p class="edit" ref="edit" @click="changeColor('edit')">编辑</p>
    	</div>
    	<div class="babyContentEdit">
				<div class="childContent">
					<ul class="childContent-ul">
						<li>
							<span class="childContent-span moveRight">称呼:</span><input class="conInput" type="text"  v-model="babyMsgObj.name" ref="fir-input" maxlength="30">
						</li>
						<li>
							<span class="childContent-span moveRight">体重:</span><input class="conInput" type="text"  v-model="babyMsgObj.weight" ref="sec-input" maxlength="30">
						</li>
						<li>
							<span class="childContent-span moveRight">身高:</span><input class="conInput" type="text"  v-model="babyMsgObj.height" ref="thir-input" maxlength="30">
						</li>
						<li>
							<span class="childContent-span moveRight">鞋码:</span><input class="conInput" type="text"  v-model="babyMsgObj.shoesize" ref="four-input" maxlength="30">
						</li>
						<li>
							<span class="childContent-span moveRight">生日:</span><input class="conInput" type="text"  v-model="babyMsgObj.brithday" ref="fiv-input" maxlength="30">
						</li>
						<li>
							<span class="childContent-span moveRight">地区:</span><input class="conInput" type="text"  v-model="babyMsgObj.place" ref="six-input" maxlength="30">
						</li>
						<li>
							<span class="childContent-span moveRight">性别:</span>男&nbsp;<input class="conInput checkbox" type="radio" name="sex" value="男" checked="true" ref="checkFir">
							女&nbsp;<input class="conInput checkbox" type="radio" name="sex" value="女" ref="checkSec">
						</li>
						<li>
							<span class="childContent-span moveRight">国籍:</span><input class="conInput" type="text"  v-model="babyMsgObj.nationality" ref="eight-input" maxlength="30">
						</li>
						
						<li>
							<span class="childContent-span">长相风格:</span><input class="conInput" type="text"  v-model="babyMsgObj.lookstyle" ref="nine-input" maxlength="30">
						</li>
						<li>
							<span class="childContent-span moveRight">特长:</span><input class="conInput" type="text"  v-model="babyMsgObj.speciality" ref="ten-input" maxlength="30">
						</li>
						<li>
							<span class="childContent-span">拍摄经历:</span><input class="conInput" type="text"  v-model="babyMsgObj.shotexp" ref="ele-input" maxlength="30">
						</li>
						<li>
							<span class="childContent-span">演出经历:</span><input class="conInput" type="text"  v-model="babyMsgObj.showexp" ref="twel-input">
						</li>
						<li>
							<span class="childContent-span">获奖经历:</span><input class="conInput" type="text"  v-model="babyMsgObj.awardexp" ref="thirT-input">
						</li>
						<li>
							<span class="childContent-span moveRight">头像:</span><span class="conInput" ref="fourT-input">点击底下<Icon type="ios-arrow-round-down" class="icon"/>萌娃头像选择</span>
						</li>
						<UpHeadImg v-on:getUrl="getUrl($event)" ref="setChildUrl"></UpHeadImg>
					</ul>
				</div>
    	</div>
    	<div class="submit" @click="submit()">保存</div>
    	<br>
    	<br>
    	<br>
    	<br>
    	<br>
  </div>
</template>

<script>
import UpHeadImg from './UpHeadImg'
export default {
  name: 'GoEditChildHome',
  data(){
	  return {
	  	babyMsgObj:{
		  	name:"小呆瓜",
			weight:"50kg",
			height:"120cm",
			shoesize:"48码",
			brithday:"1994-11-06",
			place:"福建三明",
			sex:"男",
			nationality:"中国",
			headpic:"",
			lookstyle:"可爱",
			speciality:"活泼",
			shotexp:"无",
			showexp:"无",
			awardexp:"获奖经历",
			token:"",
			id:""
	  	},
	  	 
	  	
	  }
    
  },
  methods:{
  	goPerson(){
  		this.$router.push("/Person")
  	},
  	changeColor(clickWho){
  		this.$refs.look.style.color="#000";
  		this.$refs.edit.style.color="#000";
  		this.$refs[clickWho].style.color="#f40";
  	},
  	submit(){
  	 	// console.log(this.babyMsgObj)
  		// return false;
  		this.sex=this.$refs.checkFir.checked==true?1:2;
  		// console.log(this.sex)
  		// return false;
  		this.$axios.post("http://123.206.202.40:82/index.php/api/baby/updatebaby",this.babyMsgObj)
  		.then(data=>{
  			console.log('萌娃修改返回的数据:',data)
  			if(data.statusText=="OK"){
  				alert("添加成功")
  				this.$router.push("/Person")
  			}else{
  				alert("添加失败")
  			}
  			 
  		})
  	},
  	getUrl(url){
  		// 参数代表子组件删除或者增加图片的url信息
  		console.log('代表子组件删除或者增加图片的url信息',url)
  		if(url){
  			this.babyMsgObj.headpic=url[0].url;
  		}else{
  			this.babyMsgObj.headpic='';
  		}
  		// this.headpic=url[0].url;
  		// console.log(url)
  		//  console.log(this.headpic)
  		console.log(this.babyMsgObj.headpic)
  	}
  },
  components:{
  	UpHeadImg
  },
  mounted(){
  	this.babyMsgObj.id=this.$route.query.babyid;
  	this.$axios.post("http://123.206.202.40:82/index.php/api/baby/getbabyinfo",{
  		babyid:this.$route.query.babyid,
  		token:this.$store.state.token

  	})
  	.then(babyMsgDetail=>{
  		console.log("萌娃详细信息",babyMsgDetail)
  		this.babyMsgObj=babyMsgDetail.data;
  	
  		this.$refs.setChildUrl.getUrlAction(babyMsgDetail.data.headpic)

  	})
  	
  	document.documentElement.scrollTop=0;
    this.$refs["fir-input"].focus();
    // console.log('http://123.206.202.40:82/'.replace(/http:\/\/123.206\.202\.40:82\//,''))
  }

}
</script>

 
<style scoped>
.ErollHead{
  width:100%;
  height:55px;
  /*background:#025285;*/
  /*渐变效果*/
  background: -webkit-linear-gradient(left, #025285 , #49c7de); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #025285, #49c7de); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #025285, #49c7de); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #025285 , #49c7de); /* 标准的语法 */
  display:flex;
  display:-webkit-flex;
  align-items: center;
  justify-content:center;
  position:fixed;
  top:0;
  box-shadow:-1px 0px 20px 1px #ccc;

}
.ErollImg{
  position:absolute;
  left:15px;
  height:30px;
}
.ErollFont{
color:#fff;
font-size:19px;
}
.addFixedHeight{
	width:100%;
	height:15px;
	position:fixed;
	top:55px;
	background:#fff;
 
}
.nav{
	width:100%;
	height:30px;
 	background:#fff;
	position: fixed;
	top:70px;
	display:flex;
	display:-webkit-flex;
	align-items: center;

}
.nav > p{
	width:50%;
	height:30px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	font-size:15px;
}
.edit{
	color:#f40;
}
.babyContentEdit{
	width:100%;
	margin-top:100px;
}
.conInput{
	border-bottom:1px solid #49c7de;
	box-shadow: 0 1px 10px -1px #49c7de;
}
.childContent{
	width:100%;
	font-size:15px;
	margin-top: 65px;

}
.childContent-ul{
	width:100%;
	padding: 10px;

}
.childContent-ul > li{
	width:100%;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	margin-bottom:18px;
 
}
.childContent-span{
	margin-right:15px;
	color:#ADADAD;
}
.icon{
	font-size:20px;
	margin-right:5px;
	color:#49c7de;
	margin-left:10px;
}
.moveRight{
	margin-right:45px;
}
.checkbox{
	width:20px;
	height:20px;
	margin-right:18px;
	margin-left:1px;
	background:#49c7de;
	-webkit-appearance:radio;
	box-shadow:none;
}
.submit{
	width:80%;
	height:40px;
	display: flex;
	display: -webkit-flex;
	align-items: center;
	justify-content: center;
	 /*渐变效果*/
	background: -webkit-linear-gradient(left, #025285 , #49c7de); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(right, #025285, #49c7de); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(right, #025285, #49c7de); /* Firefox 3.6 - 15 */
	background: linear-gradient(to right, #025285 , #49c7de); /* 标准的语法 */
	color:#fff;
	border-radius:100px;
	font-size: 14px;
	margin:0 auto;
} 
</style>