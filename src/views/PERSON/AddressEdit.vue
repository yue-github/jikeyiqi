<template>
  <div class="AddressEdit">
   	 	<div class="ErollHead">
	         <img src="./../../assets/person/back_left.png" alt="" class="ErollImg" @click="goGetThingAddress()">
	         <span class="ErollFont">编辑收货地址</span>
	         <span class="delete" @click="isDelete()">删除</span>
    	</div>



		<div class="userMsg">
			<ul class="userMsg-ul">
				<li>
					<ul class="userMsg-ul-ul">
						<li>
							<span class="msg-li">收货人</span><input type="text" v-model="msg.name" class="fir-input" maxlength="10">
						</li>
						<li>
							<span class="msg-li">手机号码</span><input type="text" v-model="msg.tel" maxlength="11">
						</li>
						<li>
							<span class="msg-li">所在地区</span><span class="atAddress" @click="gotoCityChoose()" ref="atAddress">{{msg.province}}{{msg.city}}{{msg.area}}</span>
						</li>
						<li>
							<span class="msg-li">详细地址</span><input type="text" v-model="msg.address" maxlength="50">
						</li>
					</ul>
				</li>
			</ul>
			<!-- 设置默认地址 -->
			<div class="setDefault">
				<div class="defMain">
					<div class="defTitle">设置默认地址</div>
					<div class="defContent">
						<div class="warn">
							提醒:{{warn}}
						</div>
					</div>
				</div>
				
				<div class="defButtom">
					<div class="iosOurter">
						<div class="defColor" ref="iosBar" @click="changeColor()"></div>
					</div>
					
				</div>
			</div>
		</div>


		
		<div class="addressChoose" v-show="choose_boo">
			<div class="chooseBg"></div>
			<div class="choose-content">
				<div class="address-head">
					<span>地址选择</span><span class="chi" @click="chooseHide()">&Chi;</span>
				</div>

				<div class="chooseDetail">
				<!-- Cascader 级联选择 -->
					 <Cascader :data="arrCity" :render-format="format" style="width:40%"></Cascader>
				</div>
			</div>
		</div>



    	<div class="popUp" v-show="pop_boo" catchtouchmove="false">
			<div class="popBg"></div>
			<div class="popContent">
				<div class="ifDeleteContent">是否删除该地址</div>
				<div class="deleteButtom">
					<p class="cancelD" @click="cancelD()">取消</p>
					<p class="deleteIs" @click="deleteOK()">删除地址</p>
				</div>
			</div>
    	</div>

    	<div class="footer">
  			<div class="f-child" @click="setChange()"> 
  				保存
  			</div>
    	</div>
 </div>
</template>

<script>
import city from './../../../public/city.js'
export default {
  name: 'AddressEdit',
  data(){
	  return {
	  	msg:{
	  			  address:"南开",
				  area:"河东区",
		          city:"市辖区",
		          id:"5",
		          isdefault:"0",
		          name:"李老六",
		          province:"天津市",
		          tel:"13237485732",
		          uid:1
		  	},
	  	pop_boo:false,
	  	choose_boo:false,
	  	color_boo:false,
	  	warn:"默认每次都会使用该地址哦",

	  	arrCity: [{
                    value: 'zhejiang',
                    label: '浙江',
                    children: [{
                        value: 'hangzhou',
                        label: '杭州',
                        children: [{
                            value: 'xihu',
                            label: '西湖',
                            code: 310000
                        }]
                    }]
                }, 
                {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [{
                        value: 'nanjing',
                        label: '南京',
                        children: [{
                            value: 'zhonghuamen',
                            label: '中华门',
                            code: 210000
                        }]
                    }]
                }]
            
        }
  },
  methods:{
  	isDelete(){
  		 this.pop_boo=true
  	},
  	cancelD(){
  		this.pop_boo=false
  	},
  	goGetThingAddress(){
  		this.$router.push("/GetThingAddress")
  	},
  	deleteOK(){
  		// return false;
  		if(this.msg.id&&this.$store.state.token){
  			this.$axios.post("http://123.206.202.40:82/index.php/api/user/delMyAddress",{
	  			id:this.msg.id,
	  			token:this.$store.state.token
  			})
  			.then(data=>{
  				console.log(data)
  			})
  		}else{
  			this.pop_boo=false;
  			alert("删除失败")
  		}
  		this.pop_boo=false;
  		this.$router.push("/GetThingAddress");
  		
  	},
  	// 定义iview联级组件方法
  	format (labels, selectedData) {
                // const index = labels.length - 1;
                // const data = selectedData[index] || false;
                // if (data && data.code) {
                //     return labels[index] + ' - ' + data.code;
                // }
              	
                // return labels[index];
                if(labels!=[]){
                	// this.msg.address=labels[0]+labels[1]+labels[2];
                	if(labels[0])this.msg.province=labels[0];
                	if(labels[1])this.msg.city=labels[1];
                	if(labels[2])this.msg.area=labels[2];
                	this.choose_boo=false;
                }
                
    },
    chooseHide(){
    	this.choose_boo=false;
    },
    gotoCityChoose(){
    	this.choose_boo=true;
    },
    setChange(){
    	
    	// return false;
    	if(this.$store.state.token){
    		this.msg.token=this.$store.state.token;
    		this.$axios.post("http://123.206.202.40:82/index.php/api/user/editMyAddress",this.msg)
    		.then(data=>{
    			if(data.data.code=="0"){
    				console.log(data.data.code)
    				this.$router.push("/GetThingAddress")
    			}
    		})
    	}
    	
    },
    changeColor(){
 	
	    	if(this.msg.isdefault=="0"){
	    	 
	    		this.$refs.iosBar.style.background="#f40"
	    		this.msg.isdefault="1"
	    	}else{
	    	 
	    		this.$refs.iosBar.style.background="#ccc";
	    		this.msg.isdefault="0"
	    	}
    	
    }

  },
  beforeMount(){
  	 
  	  	// 对主页脚部进行隐藏
  	this.$store.state.enterHome_boo=false;
  	this.$emit("hiddenFooter");
  },
  mounted(){
  	// console.log(this.$route.query.id)
  	this.msg=this.$route.query.id;

  	this.arrCity=city;
  	this.msg.isdefault=="0"?this.$refs.iosBar.style.background=="#ccc":this.$refs.iosBar.style.background="#f40"
  }

}
</script>

 
<style scoped>
.AddressEdit{
	width:100%;
	position:relative;
	min-width:640px;
	min-width:300px;

}
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
  max-width: 640px;
  min-width:300px;
  box-shadow:-1px 0px 20px 1px #ccc;
  z-index:10;

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
.delete{
	position:absolute;
	right:10px;
	opacity:0.8;
	color:#f40;
}
.popUp{
	width:100%;
	height:100vh;
	position:absolute;
	top:0;
	left:0;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	z-index:50;
}



.popBg{
	width:100%;
	height:100%;
	background:#000;
	position:absolute;
	top:0;
	left:0;
	opacity:0.8;
}
.popContent{
	width:80%;
	height:150px;
	position:relative;
	background:#fff;
	z-index:10;
	border-radius:10px;
	overflow:hidden;
}


/*地址选择*/
/*可以向上合并*/
.addressChoose{
	width:100%;
	height:100vh;
	position:absolute;
	top:0;
	left:0;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	z-index:50;
	transition: 5s;
}

.chooseBg{
	width:100%;
	height:100%;
	background:#000;
	position:absolute;
	top:0;
	left:0;
	opacity:0.5;
}

.choose-content{
	width:100%;
	height:75%;
	position:absolute;
	bottom:0;
	background:#fff;
	z-index:10;
	overflow:hidden;
	 
}
.address-head{
	width:100%;
	height:40px;
	 
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	position:relative;
	border-bottom:1px solid #ccc;
}

.chi{
	position:absolute;
	right:15px;
	font-size:20px;
}

.chooseDetail{
	width:100%;
	display:flex;
	display:-webkit-flex;
	margin-top:5px;
	padding-left:5px;

}


.ifDeleteContent,
.deleteButtom{
	width:100%;
	height:110px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;

}
.ifDeleteContent{
	font-weight:700;
}
.deleteButtom{
	height:40px;
}
.cancelD,
.deleteIs{
	width:50%;
	height:40px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
}
.deleteIs{
	background:#025285;
	color:#fff;
}
.footer{
	width:100%;
	height:55px;

	background:#fff;

	position:fixed;
	bottom:0;
	max-width:640px;
	min-width:300px;
	display: flex;
	display: -webkit-flex;
	align-items: center;
	justify-content: center;
	z-index:10;
}
.f-child{
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
}
.userMsg{
	width:100%;
	position:absolute;
	top:60px;
	/*margin-top:70px;*/
	
}
.userMsg-ul{
	width:100%;
}
.userMsg-ul > li{
	width:100%;
}
.userMsg-ul-ul > li{
	width:100%;
	padding:10px 10px;
	border-bottom:1px solid #ccc;
	border-radius:1px;
}
.fir-input{
	margin-left:14px;
}
.userMsg-ul-ul > li > .msg-li{
	margin-right:15px;
	font-size:13px;
}
.userMsg-ul-ul > li > input,
.atAddress{
	font-weight:bold;
	font-size:13px;
}
.setDefault{
	width:100%;
	padding-left:10px;
	margin-top:18px;
	display:flex;
	display:-webkit-flex;
	position:relative;
	padding-bottom: 18px;
	border-bottom:1px solid #ccc;
}
.defMain{
	width:80%;
 
}
.defButtom{
	width:20%;
	height:100%;
	 
	position: absolute;
	right:10px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
}
.iosOurter{
	padding:3px 10px;
	border: 1px solid #ccc;
	border-radius:20px;
}
.defColor{
	width:30px;
	height:20px;
	background:#ccc;
	border-radius:20px;
}
</style>