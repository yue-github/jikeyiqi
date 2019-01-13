<template>
  <div class="Join">
   		<div class="ErollHead">
	         <img src="./../../assets/person/back_left.png" alt="" class="ErollImg" @click="goPerson()">
	         <span class="ErollFont">我要加盟</span>
    	</div>
    	<div class="joinDetail">
    		<ul class="joinDetail-ul">
    			<li>
			<!-- 		shopname:"商家名称",
	  			contacter:"联系人",
	  			contacttel:"联系电话",
	  			province:"福建省",
	  			city:"三明市",
	  			area:"区",
	  			address:"详细地址",
	  			students:"生源数量",
	  			subjects:"机构课程",
	  			type:"加盟类型1入住机构,2城市合伙人",
	  			imgs:{} -->
					<div class="contentMark">
						<Icon type="ios-happy" class="icon"/>
						<span>商家名称</span>
					</div>
    				<input type="text" class="msg-input" ref="input-fir" maxlength="50" v-model="shopname">
    			</li>

    			<li>
					
					<div class="contentMark">
						<Icon type="ios-contact" class="icon"/>
						<span>联系人</span>
					</div>
    				<input type="text" class="msg-input" maxlength="50" v-model="contacter">
    			</li>

    			<li>
					
					<div class="contentMark">
						<Icon type="md-call" class="icon"/>
						<span>联系电话</span>
					</div>
    				<input type="text" class="msg-input" maxlength="11" v-model="contacttel">
    			</li>

    			<li @click="addressChoosePop()">
					
					<div class="contentMark">
						<Icon type="md-pin" class="icon"/>
						<span>地址</span>
					</div>
    				<span class="city-span">{{province}}{{city}}{{area}}</span>
    			</li>
    			<li>
					
					<div class="contentMark">
						<Icon type="ios-pin-outline" class="icon"/>
						<span>详细地址</span>
					</div>
    				<input type="text" class="msg-input" maxlength="50" v-model="address">
    			</li>
    			<li>
					
					<div class="contentMark">
						<Icon type="md-contacts" class="icon"/>
						<span>生源数量</span>
					</div>
    				<input type="text" class="msg-input" maxlength="30" v-model="students">
    			</li>
    			<li>
					
					<div class="contentMark">
						<Icon type="md-bookmarks" class="icon"/>
						<span>机构课程</span>
					</div>
    				<input type="text" class="msg-input" maxlength="50" v-model="subjects">
    			</li>
    			<li>
					
					<div class="contentMark">
						<Icon type="md-person-add" class="icon"/>
						<span>加盟类型</span>
					</div>
    				入住机构&nbsp;<input class="checkbox" type="radio" name="sex" value="男" checked="true" ref="checkFir">
					城市合伙人&nbsp;<input class="checkbox" type="radio" name="sex" value="女" ref="checkSec">
    			</li>
    			<li>
					
					<div class="contentMark">
						<Icon type="ios-image" class="icon"/>
						<span class="img-up">图片上传</span>
					</div>
					<div class="imgWarnhehe">点击底下图片上传<Icon type="ios-arrow-round-down" class="icon"/></div>
    				<!-- <input type="file" class="msg-input last-input"> -->
    			</li>
    			<!-- <Icon type="md-call" />联系电话 -->
    			<!-- <Icon type="ios-contact" />联系人 -->
    			<!-- <Icon type="ios-happy" />商家名称 -->
    			<!-- <Icon type="md-person-add" />我要加盟 -->
    			<!-- <Icon type="md-contacts" />学生 -->
    			<!-- 机构课程<Icon type="md-bookmarks" /> 课程-->
    			<!-- <Icon type="ios-image" />图片 -->
    			<!-- <Icon type="md-person" />个人 -->
    			<!-- 地址<Icon type="md-pin" />地址 -->
    			<!-- <Icon type="ios-pin-outline" />详细地址 -->
    		</ul>
    		 
			<div class="imgWarn">温馨提示:请上传格式为png或者jpg的图片,图片上传的顺序为 1.门头照片2.营业执照照片3.身份证反面4.身份证正面。</div>
			<div class="limit">
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
				        multiple
				        type="drag"
						:data="req"
				        action=" http://123.206.202.40:82/index.php/api/user/uploadJoinPic"
				        style="display: inline-block;width:58px;">
				        <div style="width: 58px;height:58px;line-height: 58px;">
				            <Icon type="ios-camera" size="20"></Icon>
				        </div>
				    </Upload>
				    <Modal title="图片预览" v-model="visible">
				        <img :src="'http://123.206.202.40:82/' + imgName" v-if="visible" style="width: 100%">
				    </Modal>
			</div>
    	</div>
    	<!-- 城市选择弹框 -->
    	<!-- 与地址新增组件城市选择组件大致雷同可复用，优化时 -->
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
    	<div class="submit" @click="submit()">提交</div>
    	<br>
    	<br>
    	<br>
    	<br>
    	<br>
  </div>
</template>

<script>
import city from './../../../public/city.js'
export default {
  name: 'Join',
  data(){
	  return {
	  	
	   
	  			token:"",
	  			shopname:"阿里巴巴",
	  			contacter:"马云",
	  			contacttel:"18888888888",
	  			province:"福建省",
	  			city:"三明市",
	  			area:"大田县",
	  			address:"梅山",
	  			students:"20",
	  			subjects:"童话",
	  			type:1,
	  			 


	  	 
	  	
	  	choose_boo:false,
	  	req:{
	  		token:this.$store.state.token?this.$store.state.token:""

	  	},
	  	
	  	msg:"Join",
	  	defaultList: [
                    // {
                    //     'name': 'a42bdcc1178e62b4694c830f028db5c0',
                    //     'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                    // },
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
                ],
                // 定义iview联级组件数据
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
  	goPerson(){
  		this.$router.push("/Person")
  	},
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
    },
    handleSuccess (res, file) {
    	file.url='http://123.206.202.40:82'+file.response.url
    	 
        // file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
        file.name = res.url;
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
        const check = this.uploadList.length < 5;
        if (!check) {
            this.$Notice.warning({
                title: '最多上传5张图片'
            });
        }
        return check;
    },
    // 提交
    submit(){
    	for(let index in this.$refs.upload.fileList){
    		if(index==4){
    			break;
    		}

    		this.imgs[index].url=this.$refs.upload.fileList[index].url
    	}
    	if(this.$store.state.token){
    		this.$axios.post("http://123.206.202.40:82/index.php/api/user/myJoin",{
    			token:this.$store.state.token,
	  			shopname:this.shopname,
	  			contacter:this.contacter,
	  			contacttel:this.contacttel,
	  			province:this.province,
	  			city:this.city,
	  			area:this.area,
	  			address:this.address,
	  			students:this.students,
	  			subjects:this.subjects,
	  			type:this.$refs.checkFir.checked==true?1:2,
	  			imgs:this.imgs
    		})
    		.then(res=>{
    			if(res.data.code=="0"){
    				alert("提交成功")
    				console.log(res)
    				this.$router.push("/Person")
    			}else{
    				alert("提交失败")
    			}
    		})
    	}

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
                	if(labels[0])this.province=labels[0];
                	if(labels[1])this.city=labels[1];
                	if(labels[2])this.area=labels[2];
                	this.choose_boo=false;
                }
                
    },
    addressChoosePop(){
    	
    	this.choose_boo=true;
    },
    chooseHide(){
    	this.choose_boo=false;
    },
  },
  mounted(){
  	this.$refs["input-fir"].focus();
  	this.uploadList = this.$refs.upload.fileList;
  	this.arrCity=city;
  }

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
  position:fixed;
  top:0;
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
.joinDetail{
	width:100%;
	margin-top:50px;
	font-size:16px;
}
.joinDetail-ul{
	width:100%;
	padding-top:10px;
	margin-bottom:10px;
}
.joinDetail-ul > li{
	width:100%;
	border-bottom:1px dashed #ccc;
	padding-bottom: 10px;
	padding-top: 10px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
}
.city-span{
	color:#000;
}
.contentMark{
	display:flex;
	display:-webkit-flex;
	align-items: center;
	/*background:red;*/
	width:110px;
}
.icon{
	font-size:20px;
	margin-right:5px;
	color:#49c7de;
	margin-left:10px;
}
.img-up{

	width:70px;
}
.last-input{
	opacity:0;
	position: absolute;
	width:100%;
}
.imgWarnhehe{
	font-size:14px;
}
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
.limit{
	width:100%;
	padding-left:10px;
}
.submit{
	width:80%;
	height:35px;
	display:flex;
	display:-webkit-flex;
	align-items: center;
	justify-content: center;
	background:blue;
	margin:0 auto;
	color: #fff;
	border-radius:20px;
	font-size:17px;
	margin-top:15px;
	/*渐变效果*/
	background: -webkit-linear-gradient(left, #025285 , #49c7de); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(right, #025285, #49c7de); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(right, #025285, #49c7de); /* Firefox 3.6 - 15 */
	background: linear-gradient(to bottom, #025285 , #49c7de); /* 标准的语法 */
}
.imgWarn{
	width:100%;
	padding:10px;
	color:#ADADAD;

}
/*地址选择弹窗*/
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
	z-index:50000000;
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
/*属于radio选择*/
.checkbox{
	width:20px;
	height:20px;
	margin-right:18px;
	margin-left:1px;
	background:#49c7de;
	-webkit-appearance:radio;
	box-shadow:none;
}
</style>