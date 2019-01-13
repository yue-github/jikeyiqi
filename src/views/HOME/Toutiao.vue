<template>
  <div class="toutiao" v-html="headTiaoMsg">
   	{{headTiaoMsg}}
  </div>
</template>

<script>
export default {
  name: 'toutiao',
  data(){
	  return {
	  	headTiaoMsg:"toutiao111"
	  }
    
  },
  mounted(){
  	console.log(this.$route.query.toutiaoMain)
  	console.log(this.$route.query.toutiao)
  	
  	// this.headTiaoMsg=this.$route.query.toutiao
  }
}
</script>

 
<style scoped>
 
</style>