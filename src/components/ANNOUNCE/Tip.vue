<template>
  <div class="Announce">
   	 	<div class="ErollHead">
	  		 <img src="./../../assets/announce/blue_left.jpg" alt="" class="ErollImg" @click="gotoAnDetail()">
	   	 	 <span class="ErollFont">举报</span>
  		</div>
		<div class="center">

			<ul class="c-ul">
				<li>
					 <input type="checkbox" class="checkbox" @click="checkDo('checkOne')" ref="checkOne"><span>虚假
					、不实信息</span>
					 
				</li>
				<li>
					<input type="checkbox" class="checkbox" @click="checkDo('checkOne')" ref="checkOne"><span>色情、低俗内容</span>
				</li>
				<li>
					<input type="checkbox" class="checkbox" @click="checkDo('checkOne')" ref="checkOne"><span>诈骗、骗钱、诱导交费</span>
				</li>
				<li>
					<input type="checkbox" class="checkbox" @click="checkDo('checkOne')" ref="checkOne"><span>联系方式有误</span>
				</li>
				<li>
					<input type="checkbox" class="checkbox" @click="checkDo('checkOne')" ref="checkOne"><span>泄露他人隐私</span>
				</li>
				<li>
					<input type="checkbox" class="checkbox" @click="checkDo('checkOne')" ref="checkOne"><span>其它</span>
				</li>
			</ul>


			<div class="inputFont">
				<textarea  class="textarea" placeholder="请详细描述举报问题以便我们更快处理"></textarea>
			</div>
			<div class="submit-f">
					立即提交
			</div>

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

  </div>
</template>

<script>
export default {
  name: 'Announce',
  data(){
	  return {
	  	msg:"Announce"
	  }
    
  },
  methods:{
  	checkDo(whoEle){
  		// console.log(whoEle)
  		// this.$refs[whoEle].checked=true;
  		// console.log(this.$refs[whoEle])
  	},
  	gotoAnDetail(){
  		this.$router.push({
  			path:"/AnDetail"
  		})
  	}
  },
  mounted(){
  	document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop=0
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
 	box-shadow:1px 0px  20px 1px #ccc;

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
 .center{
 	width:100%;
 }
 .c-ul{
 	width:100%;
 	padding:15px;
 }
  .c-ul > li{
  	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	margin-bottom:23px;
  }
.checkbox{
	width:25px;
	height:25px;
	margin-right:18px;
	margin-left:1px;
	-webkit-appearance:radio;
}
.textarea{
	width:100%;
	height:180px;
	padding:10px;
	border:1px solid #ccc;
	font-size:14px;
	outline: none;
	border-radius:5px;
}
.inputFont{
	width:100%;
	padding:0 15px;
}
.submit-f{
	width:100%;
	height:55px;
	background:#02b0b9;
	color:#fff;
	font-size:20px;
	/*box-shadow:inline 1px 0px  50px 0px #02b0b9;*/
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	margin-top:100px;

}
</style>