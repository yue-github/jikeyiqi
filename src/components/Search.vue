<template>
  <div class="search">
     <header class="header">
      		<img src="../assets/home/back.jpg" alt="" class="back" v-on:click="goHome()">
      		<input ref="search" class="search" maxlength="30" placeholder="请输入你要搜索的内容" type="search"/>
      		<img src="../assets/home/search.jpg" alt="" class="searchImg">
  			<p @click="goHome()">取消</p>
      </header>
      <aside class="aside">
			<ul></ul>
      </aside>
  </div>
</template>

<script>
 
export default {
  	name: 'search',
  	data(){
  		return {
  			fromWhere:"home"
  		}
  	},
  	methods:{
  		goHome(){
  			switch(this.fromWhere){
  				// 跳转到童星
  				case 'child':
  				console.log('跳转到童星')
  				this.$router.push({
  					path:'/ChildAll'
  				});
  				break;
  				// 跳转到主页
  				case 'home':
  				console.log('跳转到主页')
  				this.$router.push({
  					path:'/home'
  				});
  				break;
  			}
  			
  		}
  	},
  	mounted(){
  		this.$refs.search.focus();
  		this.fromWhere=this.$route.query.where;
  		console.log(this.fromWhere)

  		 
  	}
  }
</script>

 
<style scoped>
 .search{
	position:relative;

}
.search > .header{
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
.search > .header > .search{
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
.search > .header > .searchImg{
	height:22px;
	margin-left:-28px;
	border-radius:0px 100px 100px 0px;
	z-index:1;
}
 .search > .header > p{
	color:#00b1bb;
	margin-left:30px;
}
.search > .aside{
	margin-top:55px;
}
</style>
