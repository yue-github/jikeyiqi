<template>
  <div class="BindPhone">

	   	<div class="header">
	   		<div class="left">
	   			<img src="./../../assets/person/blackBack.jpg" alt=""><span>返回</span>
	   		</div>
	   		<div class="center">绑定手机号</div>
	   		<img class="right" src="./../../assets/person/sandian.jpg" alt=""> 
	   	</div>

		<div class="bind">

			<div class="bind-top">
				<img src="./../../assets/person/bPhone.jpg" alt="" class="bt-img">
				<input type="text" class="phoneN" placeholder="请输入手机号" maxlength="30">
			</div>	
			
			<div class="bind-top bind-center">
				<img src="./../../assets/person/prove.jpg" alt="" class="bt-img prove-img">
				<input type="text" class="phoneN" placeholder="请输入密码" maxlength="30">
				<p class="proveN">发送验证码</p>
			</div>



			<!-- <div class="bind-center">
				<img src="./../../assets/person/prove.jpg" alt="">
				<input type="password" class="password" placeholder="请输入验证码">
				
			</div> -->	

			<div class="bind-footer">确&nbsp;认&nbsp;绑&nbsp;定</div>	
		</div>
  </div>
</template>

<script>
export default {
  name: 'BindPhone',
  data(){
	  return {
	  	msg:"BindPhone"
	  }
    
  }
}
</script>

 
<style scoped>
 .header{
 	width:100%;
 	height:60px;
 	background:#3c3d41;
 	display:flex;
 	display:-webkit-flex;
 	justify-content: center;
 	align-items: center;
 	color:#fff;
 }
 .left{
 	position:absolute;
 	left:10px;
 	display:flex;
 	display:-webkit-flex;
 	justify-content: center;
 	align-items: center;
 }
 .left > img{
 	padding-top:3px;
 }
 .right{
 	position:absolute;
 	right:10px;
 	height:40px;
 }
 .center{
 	font-size:20px;
 }
.bind{
	width:100%;
	margin-top:50px;
}

.bind-top{
	width:80%;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	border-bottom: 1px solid #6C6C6C;
 	margin:0 auto;
 	position:relative;
 	padding-bottom:5px;
 	overflow: hidden;
 	border-radius:6px;
}
.phoneN{
	height:35px;
	/*background:#ccc;*/
	margin-left:5px;
	padding-left:5px;
	font-size:14px;
}
.bt-img{
	height:25px;
	margin-left:-4px;
}
.proveN{
	background:#02b0b9;
	height:20px;
	padding:5px;
	border-radius:5px;
	color:#FCFCFC;
	font-size:13px;
	margin-left: 10px;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
	box-shadow:0px 0px 1px 1px #02b0b9;
}
.bind-center{
	margin-top:18px;
	border-radius:6px;
}
.bind-footer{
	width:80%;
	margin:0 auto;
	height:45px;
	background:#02b0b9;
	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	margin-top:40px;
 	color:#FCFCFC;
 	box-shadow:0px 0px 3px 1px #02b0b9;
 	border-radius: 4px;
 	font-size:18px;
}
.prove-img{
	margin-left:-7.5px;
}
</style>