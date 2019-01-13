<template>
  <div class="position">
     <header class="header">
      		<img src="../assets/home/back.jpg" alt="" class="back" v-on:click="goHome()">
      		<input ref="position" class="search" maxlength="30" placeholder="请输入你要搜索的地址" type="position"/>
      		<img src="../assets/home/search.jpg" alt="" class="searchImg">
  			<p @click="goHome()">取消</p>
      </header>
      <aside class="aside">
			<ul></ul>
      </aside>
  </div>
</template>

<script>
import routerJs from './../router.js'
export default {
  	name: 'position',
  	data(){
  		return {
  			fromWhere:"home"
  		}
  	},
  	methods:{
	  		goHome(){
	  			console.log(this.fromWhere)
	  			switch(this.fromWhere){
	  				case 'an':
	  				this.$router.push("/AnnounceList");
	  				break;

	  				case 'activityHome':
	  				this.$router.push("/ActivityHome");
	  				break;

	  				case 'home':
	  				this.$router.push("/home");
	  				break;

	  				case 'Separate':
	  				this.$router.push("/Separate");
	  				break;
	  			}
	  			 
	  			
	  		}
  	},
  	mounted(){
  		this.$refs.position.focus()
  		this.fromWhere=this.$route.query.page_msg;
  	 
  	}
  }
</script>

 
<style scoped>
 .position{
	position:relative;
}
.position > .header{
	width:100%;
	height:50px;
	position:;
	display:flex;
	position:fixed;
	max-width:640px;
	min-width:300px;
	top:0;
	align-items: center;
	box-shadow:0px 1px 20px 1px #ccc;
}
.position > .header > .search{
	caret-color:#fff;
	background:#7fd7db;
	width:60%;
	height:25px;
	display:block;
	border-radius:100px;
	margin-left:30px;
	padding-left:10px;
	padding-right:25px;
}
.position > .header > .searchImg{
	height:22px;
	margin-left:-28px;
	border-radius:0px 100px 100px 0px;
	z-index:1;
}
 .position > .header > p{
	color:#00b1bb;
	margin-left:30px;
}
.position > .aside{
	margin-top:55px;
}
</style>
