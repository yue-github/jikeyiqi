<template>
  <div class="ImgChooseM" v-on:getbabyUrl="getbabyUrl($event)">
   	 			
			<div class="demo-upload-list" v-for="item in uploadList">
				        <template v-if="item.status === 'finished'">
				            <img :src="item.url">
				            <div class="demo-upload-list-cover">
				                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
				                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
				            </div>
				        </template>
				        <template v-else>
				            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
				        </template>
				    </div>
				    <Upload
				        ref="upload"
				        :show-upload-list="false"
				        :default-file-list="defaultList"
				        :on-success="handleSuccess"
				        :format="['jpg','jpeg','png']"
				        :max-size="2048"
				        :on-format-error="handleFormatError"
				        :on-exceeded-size="handleMaxSize"
				        :before-upload="handleBeforeUpload"
				       
				        type="drag"
						:data="req"
				        action=" http://123.206.202.40:82/index.php/api/baby/uploadheadpic"
				        style="display: inline-block;width:58px;">
				        <div style="width: 58px;height:58px;line-height: 58px;">
				            <Icon type="ios-camera" size="20"></Icon>
				        </div>
				    </Upload>
				    <Modal title="图片预览" v-model="visible" style="text-align: center">
				        <img :src="'http://123.206.202.40:82/' + imgName" v-if="visible" style="width: 200px;height:200px;border-radius:100%;">
				    </Modal>
			</div>
    	  <!-- multiple -->
  </div>
</template>

<script>
export default {
	// this.$refs.upload.fileList这个为已经上传的图片信息数组集合
  name: 'ImgChooseM',
  data(){
  	  
	  return {

	  	msg:"ImgChooseM",
	  	// 图片上传的参数
	  	req:{
	  		token:this.$store.state.token?this.$store.state.token:""

	  	},

  	  	defaultList: [
                {
                    'name':'',
                    'url':''
                },
                // {
                //     'name': 'bc7521e033abdd1e92222d733590f104',
                //     'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                // }
            ],
            imgName: '',
            visible: false,
            uploadList: [],
            imgs:[
            	{type:"head",url:""},
            	{type:"license",url:""},
            	{type:"iddown",url:""},
            	{type:"idup",url:""},
            ]
	  }
    
  },
  
  methods:{
  	  	// 图片预览
  	handleView (name) {
  		console.log(name)
                this.imgName = name;
                this.visible = true;
    },
    // 图片移除
    handleRemove (file) {
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        // console.log("nihao")
        this.$emit('getUrl','')
    },
    handleSuccess (res, file) {
    	file.url='http://123.206.202.40:82'+file.response.url
    	 
        // file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
        file.name = res.url;
        this.$emit('getUrl',this.$refs.upload.fileList)
    },
    handleFormatError (file) {
        this.$Notice.warning({
            title: '文件格式不正确',
            desc: '文件 ' + file.name + ' 格式不正确, 请选择 jpg 或者 png.'
        });
    },
    handleMaxSize (file) {
        this.$Notice.warning({
            title: '尺寸限制',
            desc: '文件  ' + file.name + ' 太大, 别超过2M.'
        });
    },
    handleBeforeUpload () {
        const check = this.uploadList.length < 1;
        if (!check) {
            this.$Notice.warning({
                title: '最多上传1张图片'
            });
        }
        return check;
    },
   
    getUrlAction(url){
    	console.log("父向子传的url",url)
    	


    	// this.defaultList=urlArr;
    	 
    	this.$refs.upload.fileList[0].name=url.replace(/http:\/\/123.206\.202\.40:82\//,'');
    	this.$refs.upload.fileList[0].url=url;
    	console.log(this.$refs.upload.fileList)
    	 
    },
    submitGetUrl(){
    	return this.$refs.upload.fileList[0].url;
    }
  },
  mounted(){
  	this.uploadList = this.$refs.upload.fileList;
  	// console.log(this.defaultList[0].name)
   
  },
  
  
}
</script>

 
<style scoped>
.demo-upload-list{
	display: inline-block;
	width: 60px;
	height: 60px;
	text-align: center;
	line-height: 60px;
	border: 1px dashed #f40;
	border-radius: 4px;
	overflow: hidden;
	background: #fff;
	position: relative;
	box-shadow: 0 1px 1px rgba(0,0,0,.2);
	margin-right: 4px;
	margin-top:5px;
	margin-left:10px;


}
.demo-upload-list img{
	width: 100%;
	height: 100%;
	border-radius:100%;


}
.demo-upload-list-cover{
/*display: none;*/
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0,0,0,.6);
}
.demo-upload-list:hover .demo-upload-list-cover{
	display: block;
}
.demo-upload-list-cover i{
	color: #fff;
	font-size: 20px;
	cursor: pointer;
	margin: 0 2px;
}
</style>