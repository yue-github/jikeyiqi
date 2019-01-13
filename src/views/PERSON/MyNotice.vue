<template>
  <div class="MyNotice">
   	{{msg}}
  </div>
</template>

<script>
export default {
  name: 'MyNotice1',
  data(){
	  return {
	  	msg:"MyNotice"
	  }
    
  },
 
  mounted(){
  	 console.log(this.$route.query.data)
  }
  
}
</script>

 
<style scoped>
 
</style>