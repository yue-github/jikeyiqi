<template>
  <div class="GetThingAddress">
   		<div class="ErollHead">
	         <img src="./../../assets/person/back_left.png" alt="" class="ErollImg" @click="goPerson()">
	         <span class="ErollFont">收货地址管理</span>
    	</div>

    	<div class="content">
    			<ul class="content-ul">
    				<li v-for="(val,index) in msg">
                <div class="user">
                    <div class="username">{{val.name}}</div>
                    <div class="phoneN">{{val.tel}}</div>
                    <div class="default" v-show="val.isdefault==0?false:true">默认</div>
                </div>
                <div class="address">
                  <div class="addressDetail">{{val.province}}{{val.city}}{{val.area}}{{val.address}}</div>
                  <div class="addressLogo" @click="goAddressEdit(val)">
                      <img src="./../../assets/person/personDetail/edit.jpg" alt="" class="editLogo">
                  </div>
                </div>
    				</li>
    			</ul>
    	</div>

    	<div class="footer">
  			<div class="f-child" @click="gotoCreateAddress()">
  				+新建地址
  			</div>
    	</div>
      <br>
      <br>
      <br>
      <br>
  </div>
</template>

<script>
export default {
  name: 'GetThingAddress',
  data(){
	  return {
	  	msg:[

	  		{
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
	  	]
	  }
    
  },
  methods:{
  	goPerson(){
  		this.$router.push("/Person")
  	},
    goAddressEdit(id){
       
      // return false;
      this.$router.push({
        path:"/AddressEdit",
        query:{
          id:id
        }
      })
    },
    gotoCreateAddress(){
      this.$router.push("/CreateAddress")
    }
  },
  beforeMount(){
  	 
  	  	// 对主页脚部进行隐藏
  	this.$store.state.enterHome_boo=false;
  	this.$emit("hiddenFooter");
  },
  mounted(){
    
  	this.$axios.post("http://123.206.202.40:82/index.php/api/user/getMyAddress",{
  		token:this.$store.state.token

  	})
  	.then(data=>{
  		 this.msg=data.data;
  	})
   
  },

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
  position:relative;
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
.GetThingAddress{
	width:100%;
	max-width:640px;
	min-width:300px;
	position:relative;
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
}
.f-child{
	width:60%;
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
}
.content{
  width:100%;
  margin-top:1px;
  font-size: 17px;
  margin-top:15px;
  
  
}
.content-ul{
  width:100%;
  padding-left:10px;
  
  
}
.content-ul > li{
   width:100%;
   padding-bottom:10px;
   border-bottom:1px solid #ccc;
   margin-bottom:20px;
}
.user{
  width:100%;
  display:flex;
  display:-webkit-flex;
  align-items: center;
  flex-wrap:wrap;
  word-break: break-all;
  font-weight:1000;
  font-size:17px;
}
.phoneN{
  margin-left:10%;
}
.address{
  width:100%;
  display:flex;
  display: -webkit-flex;
  font-size:13px;
  margin-top:5px;

}
.addressDetail{
  width:75%;
  white-space: wrap;
  word-break: break-all;

}
.addressLogo{
  width:25%;
   
}
.editLogo{
  width:25px;
  float:right;
  margin-right:10px;
}
.phoneN{
  font-weight: 600;
  font-size: 14px;
}
.default{
  padding:0 5px;
  background:#025285;
  border-radius:20px;
  font-size: 12px;
  color:#fff;
  font-weight:100;
  margin-left:3%;
}
</style>