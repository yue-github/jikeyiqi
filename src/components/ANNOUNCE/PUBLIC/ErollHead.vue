<template>
  <div class="ErollHead">
  		 <img src="./../../../assets/announce/blue_left.jpg" alt="" class="ErollImg" @click="gotoAnnounceList()">
   	 	 <span class="ErollFont">报名</span>
  </div>
</template>

<script>
export default {
  name: 'ErollHead',
  data(){
	  return {
	  	msg:"ErollHead"
	  }
    
  },
  methods:{
    gotoAnnounceList(){
      this.$router.push({
        path:"/AnnounceList"
      })
    },

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
  box-shadow:-1px 0px 20px 1px #ccc;
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
</style>