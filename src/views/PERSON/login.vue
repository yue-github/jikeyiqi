<template>
  <div class="login">
    <div class="ErollHead">
         <img src="./../../assets/person/back_left.png" alt="" class="ErollImg" @click="goHome()">
         <span class="ErollFont">登录/注册页面</span>
    </div>
    <!-- <img src="./../../img/back.png" v-on:click="toHome()"> -->
  	<div class="lo" v-on:click="submitDo()">{{register}}</div>
  	<form method="post" action="javascript:">
  	   <label id="text">用户名:</label>
       <input class="text" id="text" type="text" placeholder="请输入用户名" maxlength=30/></br>
       <label id="password">密码:</label>  
       <input class="password" id="password" type="password" placeholder="请输入密码" maxlength=30/><br v-show="shou_boo">
      
       <label id="passwordS" v-show="shou_boo">确认密码:</label>  
       <input class="password passwordS" id="passwordS" type="password" placeholder="请再次输入密码" maxlength=30 v-show="shou_boo"/><br v-show="shou_boo">

       <label id="phone" v-show="shou_boo">手机号码:</label>
       <input class="text phone" id="phone" type="text" placeholder="请输入手机号码" maxlength=11 ref="phone" v-model="phoneN" v-show="shou_boo" @blur="phone_blur()"/></br v-show="shou_boo">

       <label id="yzm" v-show="shou_boo">验证码:</label>
       <input class="text" id="yzm" type="text" placeholder="请输入验证码" maxlength=30 v-show="shou_boo"/>
       <span class="bottom" @click="getIdentify()" v-show="shou_boo">点击获取</span>
       <br v-show="shou_boo">
       <input class="submit" type="submit" v-bind:value="submitChange()" v-on:click="loginTo()"/> 
    </form> 
  </div>
</template>

<script>
// import toJs from "./../../router.js"
export default {
  name: 'login',
  data(){
    return {
        loginValue:"登录",
        register:"注册",
        phoneN:"",
    
        shou_boo:true
    }
     
  },
  methods:{
  	submitDo(){
  		 if(this.register=="注册"){
  		 	this.loginValue="注册"
  		 	this.register="登录"
        this.shou_boo=true;
  		 }else{
  		 	this.loginValue="登录"
  		 	this.register="注册"
        this.shou_boo=false;
  		 }

  	},
    goHome(){
        this.$router.push("/")
    },
  	submitChange(){
  		return this.loginValue
  	},
  	loginTo(){
      if(sessionStorage.getItem("token")){
        return false;
      }
  		if(this.loginValue=="登录"){
        console.log(12)
        // let tocken=sessionStorage.getItem("tocken");
        //  if(tocken){
        //     this.$store.state.tocken=tocken;
        //     this.$store.state.login_boo=true;
        //     this.$router.push({
        //        path:"/Person"
        //     })
        //     return false;
        //  }
         // 发送请求
         this.$axios.post("http://123.206.202.40:82/index.php/api/user/login",{
              mobile:"13952274461",
              password:"admin123"
         })

         .then(data=>{
            console.log(data)
            if(data.data.code==0){
              this.$store.state.token=data.data.token;
              sessionStorage.setItem("token",data.data.token);
              this.$store.state.login_boo=true;
              // 登录成功的后续操作
               // this.$axios.post("http://123.206.202.40:82/index.php/api/user/getMyAddress",{
               //    tocken:this.$store.state.tocken
               // })
               



              // 自动跳到个人中心页面
              this.$router.push({
                 path:"/Person"
              })

            }else{
              
              this.$store.state.token="";
              this.$store.state.login_boo=false;
            }
          // console.log(this.$store.state.login_boo)
         })

         

  		}else{
        return false;
        this.$axios.post("",{

              })
              .then(data=>{
                console.log(data)
          })
      }

     
  		 
  	},
    getIdentify(){
       
      
      if(this.phoneN.replace(/\s+/g,"").length==11){

          this.$refs.phone.style.border="none";
          this.$refs.phone.style.background="#fff";
          
      }else{
        this.$refs.phone.style.border="1px solid red"
        this.$refs.phone.focus();
      };
      this.$axios.post("http://123.206.202.40:82/index.php/api/user/getValidCode",{
          mobile:"18814137320"
      })
    },
    phone_blur(){
       
      this.$refs.phone.style.border="none";
      this.$refs.phone.style.background="#fff";
    }

  },
  mounted(){
    this.submitDo();
    document.documentElement.scrollTop=0;
    this.$emit("changeChildColor","4");
    if(sessionStorage.getItem("token")){
        this.$store.state.login_boo=true;
        this.$router.push("/Person")
    }
  }
}
</script>

<style scoped>
  .login{
  	width:96%;
  	margin:100px auto;
  	border:1px solid #024a7a;
  	padding:50px 10px;
  	background:url("./../../img/login-b.jpg");
  	color:#fff;
  	border-radius:8px;
    max-width:640px;
    min-width:300px;
    position:relative;
  }
  .login > img{
    display:block;
    position:absolute;
    top:10px;
    left:10px;
    height:30px;
    width:30px;
  } 
  .login > form > input{
  	background:#fff;
    height:30px;
  	border-radius:6px;
  	padding-left:5px;
    margin-top:10px;
  }
  .login > .lo{
  	text-align:right;
  	font-size:15px;
  	padding-right:50px;
  	padding-bottom:10px;
  	border-bottom:1px dashed #fff;
  	margin-bottom:10px;
  }
  .login > form > .submit{
  	display:block;
  	width:80%;
  	height:38px;
  	border-radius:10px;
  	box-shadow:0 0 5px -1px blue;
  	margin:20px auto;
  	color:#fff;
    font-size:18px;
  	background:blue;
  }
  .login > form > .password{
  	margin-left:18px;
  }
  .login > form > label{
  	margin-left:20px;
    margin-right:30px;
    font-size:18px
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
  left:0;
  box-shadow:-1px 0px 20px 1px #ccc;

}
.ErollImg{
  position:absolute;
  left:15px;
  height:35px;
}
.ErollFont{
color:#fff;
font-size:19px;
}
#yzm{
  /*margin-left:10px;*/
  width:95px;
}
.bottom{
  width:30px;
  height:50px;
  padding:3px;
  background:#025285;
  border-radius:10px;
  box-shadow: 0 0 10px 1px #fff;
  margin-left:35px;
}
.phone{
  margin-left:-18px;

}
.login > form > .passwordS{
   margin-left:-18px;
}
</style>