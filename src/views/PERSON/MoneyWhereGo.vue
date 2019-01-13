<template>
  <div class="MoneyWhereGo">
   	 	<div class="ErollHead">
	         <Icon class="back-left" type="ios-arrow-back" @click="goMyselve()"/>
	         <span class="ErollFont" @click="goMyselve()">全部</span>
	         <Icon class="what" type="ios-help-circle" />
    	</div>

    	<div class="detail">
			<ul class="detail-ul">
				<li v-for="val in msg.payrecord">
					<div class="moneyType">
						<div class="typeTitle">{{val.title}}</div>
						<div class="date">{{val.datetime}}</div>
					</div>
					<div class="restDetail">
						<div class="restMoney"><span>余额:</span>{{msg.balance}}</div>
						<div class="deAddMoney"></span>{{val.price}}</div>
					</div>
				</li>
			</ul>
    	</div>
  </div>
</template>

<script>
export default {
  name: 'MoneyWhereGo',
  data(){
	  return {
	  	msg:{}
	  }
    
  },
  methods:{
  	goMyselve(){
  		this.$router.push({
  			path:"/MySelve",
  			query:{
  				index:2
  			}
  		})
  	}
  },
  mounted(){
  	this.msg=this.$store.state.moneyWhere;
   
  	// for(let ind in this.msg.payrecord){
  		 
  	// 	console.log(this.msg.payrecord[ind].price)
  	// 	if(parseInt(this.msg.payrecord[ind].price)>0){
  	// 		this.msg.payrecord[ind].price="+"+this.msg.payrecord[ind].price
  	// 	}else{
  	// 		this.msg.payrecord[ind].price="-"+this.msg.payrecord[ind].price
  	// 	}
  	// }
  
  }

}
</script>

 
<style scoped>
 .ErollHead{
  width:100%;
  height:40px;
  display:flex;
  display:-webkit-flex;
  align-items: center;
  position:relative;
  border-bottom:1px solid #F0F0F0;

}
.ErollImg{
  position:absolute;
  left:15px;
  height:30px;
}
.ErollFont{
  font-size:15px;
}
.back-left{
  color:#49c7de;
  font-size: 30px;

}
.what{
  position:absolute;
  right:12px;
  color:#49c7de;
  font-size: 22px;
}
.moneyType,
 .restDetail{
 	width:100%;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	position: relative;
 }
 .detail-ul{
 	width:100%;
 }
 .detail-ul > li{
 	width:100%;
 	margin-bottom: 10px;
 	border-bottom:1px solid #F0F0F0;
 	padding:10px;
 }
 .detail{
 	width:100%;
 }
 .restMoney{
 	font-size: 12px;
 }
 .typeTitle{
 	font-size: 13px;
 }
 .date,
 .deAddMoney{
	position:absolute;
	right:0;
 }
</style>