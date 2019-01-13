<template>
  <div class="child">
   		<div class="header">
   			<span>童星</span>
   			<router-link to="/Search?where=child" class="child-router">
   				<img src="../assets/home/search.jpg" alt="">
   			</router-link>
   		</div>
   		<div class="chooseChildMsg">
     			<ul>
          <!-- 年龄 -->
       				<li class="one">
       					  <ul class="one-ul">
                      <li>年龄</li>
                      <li @click="showAge(1,'age')">
                        {{startAge1}}<ul class="fir">
                           <li></li>
                           <li></li>
                            
                        </ul>
                        <ul class="sec reFirst" v-if="showAge1" >
                           <li v-for="(val,index) in ageData" @click="ageClickWho(5-index,1)">{{5-index}}</li>
                        </ul>
                      </li>
                      <li>至</li>

                      <li @click="showAge(2,'age')">
                          {{startAge2}}<ul class="fir">
                           <li></li>
                           <li></li>
                            
                        </ul>
                        <ul class="sec reSecond" v-if="showAge2">
                           <li v-for="(val,index) in ageData" @click="ageClickWho(10-index,1)">{{10-index}}</li>
                            
                        </ul>
                      </li>

                      <li>岁</li>
                  </ul>
       				</li>
              <!-- 身高 -->
              <li class="two">
                  <ul class="two-ul">
                      <li>身高</li>
                      <li @click="showAge(1,'height')">
                          {{startHeight1}}<ul class="fir">
                             <li></li>
                             <li></li>
                              
                          </ul>
                          <ul class="sec sec_height" v-if="showHeight1" >
                             <li v-for="(val,index) in ageData" @click="ageClickWho(60+index*10,2)">
                             {{60+index*10}}</li>
                          </ul>
                      </li>

                      <li>至</li>

                      <li @click="showAge(2,'height')">
                          {{startHeight2}}<ul class="fir">
                           <li></li>
                           <li></li>
                            
                        </ul>
                        <ul class="sec sec_height" v-if="showHeight2">
                           <li v-for="(val,index) in ageData" @click="ageClickWho(110+index*10,2)">
                           {{110+index*10}}</li>
                            
                        </ul>
                      </li>

                      <li>cm</li>
                  </ul>
              </li>
              <!-- 性别 -->
              <li>
                  <ul>
                    <!-- <li>性别</li>
                    <li @click="childFillChangeColor('sp','addColorGray','addColorGray1')" ref="noXian">不限</li>
                    <li @click="childFillChangeColor('sp','addColorGray','addColorGray1')" ref="man">男</li>
                    <li @click="childFillChangeColor('sp','addColorGray','addColorGray1')" ref="girl">女</li> -->
                        <li>性别</li>
                        <li v-bind:class="{addColorGray:sex}" @click="childFillChangeColor('sexm','sex','sex1','sex2')">不限</li>

                        <li v-bind:class="{addColorGray:sex1}" @click="childFillChangeColor('sexm','sex1','sex','sex2')">男</li>

                        <li @click="childFillChangeColor('sexm','sex2','sex1','sex')" v-bind:class="{addColorGray:sex2}">女</li>
                  </ul>
              </li>
              <!-- 地区 -->
              <li class="four">
                  <ul class="four-ul">
                      <li>地区</li>

                      <li>
                        <div class="reAdressDiv" ref="theAdressDiv" style="display:none">
                        

                              <ul class="ul-fir" @click="provCityArea(1,'provElement')">
                              <!-- 省份 -->
                                    {{prov}}</span><div class="tra" ref="provElement" >
                                          <p></p>  <!-- 做小三角形 -->
                                          <p></p>
                                    </div class="tra">
                                    <!-- 下拉块 -->
                                    <div class="province" style="display:none">
                                         <p v-for="(val,index) in province" v-on:click="chooseProv(val,index)">{{val}}</p> 
                                           
                                    </div>
                              </ul>
                                <!-- 市 -->
                               <ul class="ul-sec" @click="provCityArea(2,'cityElement')">
                                     <span ref="city_span">{{cit}}</span><div class="tra" ref="cityElement">
                                          <p></p>
                                          <p></p>
                                     </div class="tra">
                                      <!-- 下拉块 -->
                                     <div class="city city_event_fun" style="display:none" v-html="city_html">
                                          
                                    </div>

                               </ul>

                               <ul class="ul-thir" @click="provCityArea(3,'areaElement')">
                               <!-- 县 -->
                                     <span class="area-span">{{are}}</span><div class="tra" ref="areaElement">
                                          <p></p>
                                          <p></p>
                                     </div class="tra">
                                     <!-- 下拉块 -->
                                     <div class="area area_event_fun" style="display:none" ref="areaAppend">
                                        <p v-for="val in area[0][0]">{{val}}</p>
                                    </div>
                               </ul>

                               
                        </div>
                        <div @click="adress_fun()" class="clickFun_PCA"></div>
                        <!-- 小三角形 -->
                        请选择省市区<ul>
                            <li></li>
                            <li></li>
                        </ul>
                      </li>
                  </ul>
              </li>
     			</ul>
   		</div>
      <div class="childFill" v-show="child_boo">
        <!-- 视频 -->
            <div class="childFill-fir">
                <p class="childFill-p-fir">视频</p>
                <p class="childFill-p-sec rightQuick" v-bind:class="{addColorGray:addColorGray}" @click="childFillChangeColor('sp','addColorGray','addColorGray1')">不限</p>
                <p class="childFill-p-thir" @click="childFillChangeColor('sp','addColorGray1','addColorGray')" v-bind:class="{addColorGray:addColorGray1}">有视频</p>
            </div>
    <!-- 模卡 -->
            <div class="childFill-fir">
                        <p class="childFill-p-fir">模卡</p>
                        <p class="childFill-p-sec rightQuick" v-bind:class="{addColorGray:moka}" @click="childFillChangeColor('mk','moka','moka1')">不限</p>
                        <p class="childFill-p-thir" @click="childFillChangeColor('mk','moka1','moka')" v-bind:class="{addColorGray:moka1}">有模卡</p>
           </div>
              <!-- 国籍 -->
            <div class="childFill-fir">
                        <p class="childFill-p-fir">国籍</p>
                        <p class="childFill-p-sec rightQuick" v-bind:class="{addColorGray:guoji}" @click="childFillChangeColor('gj','guoji','guoji1','guoji2','guoji3')">不限</p>
                        <p class="childFill-p-thir" @click="childFillChangeColor('gj','guoji1','guoji','guoji2','guoji3')" v-bind:class="{addColorGray:guoji1}">中国</p>
                        <p class="childFill-p-sec" v-bind:class="{addColorGray:guoji2}" @click="childFillChangeColor('gj','guoji2','guoji1','guoji','guoji3')">混血</p>
                        <p class="childFill-p-thir" @click="childFillChangeColor('gj','guoji3','guoji1','guoji2','guoji')" v-bind:class="{addColorGray:guoji3}">外籍</p>
           </div>
              <!-- 标签 -->
            <div class="childFill-fir childFill-fir-b">
                        <p class="childFill-p-fir">标签</p>

                        <p class="childFill-p-sec rightQuick" v-bind:class="{addColorGray:biaoq}" @click="childFillChangeColor('bq','biaoq','biaoq1','biaoq2','biaoq3','biaoq4','biaoq5','biaoq6','biaoq7')">混血</p>

                        <p class="childFill-p-thir" @click="childFillChangeColor('bq','biaoq1','biaoq','biaoq2','biaoq3','biaoq4','biaoq5','biaoq6','biaoq7')" v-bind:class="{addColorGray:biaoq1}">外籍</p>

                        <p class="childFill-p-sec" v-bind:class="{addColorGray:biaoq2}" @click="childFillChangeColor('bq','biaoq2','biaoq1','biaoq','biaoq3','biaoq4','biaoq5','biaoq6','biaoq7')">大眼睛</p>

                        <p class="childFill-p-thir" @click="childFillChangeColor('bq','biaoq3','biaoq1','biaoq2','biaoq','biaoq4','biaoq5','biaoq6','biaoq7')" v-bind:class="{addColorGray:biaoq3}">单眼皮</p>

                        <!-- <p class="childFill-p-sec-ml"></p> -->

                        <p class="childFill-p-sec rightNow rightQuick" v-bind:class="{addColorGray:biaoq4}" @click="childFillChangeColor('bq','biaoq4','biaoq1','biaoq2','biaoq3','biaoq','biaoq5','biaoq6','biaoq7')">小胖子</p>

                        <p class="childFill-p-thir" @click="childFillChangeColor('bq','biaoq5','biaoq1','biaoq2','biaoq3','biaoq4','biaoq','biaoq6','biaoq7')" v-bind:class="{addColorGray:biaoq5}">组合</p>

                        <p class="childFill-p-sec" v-bind:class="{addColorGray:biaoq6}" @click="childFillChangeColor('bq','biaoq6','biaoq1','biaoq2','biaoq3','biaoq4','biaoq5','biaoq','biaoq7')">乐队</p>

                        <p class="childFill-p-thir" @click="childFillChangeColor('bq','biaoq7','biaoq1','biaoq2','biaoq3','biaoq4','biaoq5','biaoq6','biaoq')" v-bind:class="{addColorGray:biaoq7}">双胞胎</p>
           </div>
              <!-- 才艺 -->
            <div class="childFill-fir childFill-four">
                        <p class="childFill-p-fir">才艺</p>
                        <p class="childFill-p-sec rightQuick" v-bind:class="{addColorGray:caiyi}" @click="childFillChangeColor('cy','caiyi','caiyi1','caiyi2','caiyi3','caiyi4','caiyi5','caiyi6','caiyi7')">主持</p>

                        <p class="childFill-p-thir" @click="childFillChangeColor('cy','caiyi1','caiyi','caiyi2','caiyi3','caiyi4','caiyi5','caiyi6','caiyi7')" v-bind:class="{addColorGray:caiyi1}">唱歌</p>

                        <p class="childFill-p-sec" v-bind:class="{addColorGray:caiyi2}" @click="childFillChangeColor('cy','caiyi2','caiyi1','caiyi','caiyi3','caiyi4','caiyi5','caiyi6','caiyi7')">走秀</p>

                        <p class="childFill-p-thir" @click="childFillChangeColor('cy','caiyi3','caiyi1','caiyi2','caiyi','caiyi4','caiyi5','caiyi6','caiyi7')" v-bind:class="{addColorGray:caiyi3}">爵士</p>

                       <!--  <p class="childFill-cy-p"></p>
                        <p class="childFill-cy-p"></p> -->

                        <p class="childFill-p-sec rightNow rightQuick" v-bind:class="{addColorGray:caiyi4}" @click="childFillChangeColor('cy','caiyi4','caiyi1','caiyi2','caiyi3','caiyi','caiyi5','caiyi6','caiyi7')">街舞</p>

                        <p class="childFill-p-thir" @click="childFillChangeColor('cy','caiyi5','caiyi1','caiyi2','caiyi3','caiyi4','caiyi','caiyi6','caiyi7')" v-bind:class="{addColorGray:caiyi5}">拉丁</p>

                        <p class="childFill-p-sec" v-bind:class="{addColorGray:caiyi6}" @click="childFillChangeColor('cy','caiyi6','caiyi1','caiyi2','caiyi3','caiyi4','caiyi5','caiyi','caiyi7')">芭蕾</p>

                        <p class="childFill-p-thir changeBottom" @click="childFillChangeColor('cy','caiyi7','caiyi1','caiyi2','caiyi3','caiyi4','caiyi5','caiyi6','caiyi')" v-bind:class="{addColorGray:caiyi7}">戏剧</p>
           </div>
      </div>
      <cFilter class="cFilterMain" v-on:nextToggle="nextToggle($event)" ref="childFillEle"></cFilter>
      <router-view></router-view>
      <br>
      <br>
      <br>
      <br>
  </div>
</template>

<script>
import cFilter from "./CHILD/Filter"
export default {
  name: 'child',
  data(){
	  return {
	  	msg:"child",
      showAge1:false,
      showAge2:false,
      showHeight1:false,
      showHeight2:false,
      startAge1:"5",
      startAge2:"10",
      startHeight1:"100",
      startHeight2:"140",
      ageData:new Array(5),
      province:["福建","广东","广西"],
      city:[
        ["三明","泉州","厦门"],
        ["广州","深圳","茂名"],
        ["南宁","柳州","桂林"]
      ],
      area:[

        [["大田","将乐","尤溪"],["安溪","永春","德化"],["湖里区","海沧区","集美区"]],

        [["番禺","天河","越秀"],["宝安","南山","福田"],["茂南区","电白县","茂港区"]],

        [["横县","马山县","隆安县"],["柳城县","鹿寨县","融安县"],["灵川","全州","兴安"]],
      ],
      prov:"福建",
      cit:"三明",
      are:"大田",
      city_html:"<p index=0>三明</p><p index=1>泉州</p><p index=2>厦门</p>",
      // 选择处理点击事件变颜色等相关操作的boo值
      child_boo:false,
      addColorGray:true,
      addColorGray1:false,
      moka:true,
      moka1:false,
      guoji:true,
      guoji1:false,
      guoji2:false,
      guoji3:false,
      biaoq:false,
      biaoq1:false,
      biaoq2:false,
      biaoq3:false,
      biaoq4:false,
      biaoq5:false,
      biaoq6:false,
      biaoq7:false,
      caiyi:false,
      caiyi1:false,
      caiyi2:false,
      caiyi3:false,
      caiyi4:false,
      caiyi5:false,
      caiyi6:false,
      caiyi7:false,
      sex:true,
      sex1:false,
      sex2:false
      
	  }
   
   
    
  },
  components:{
  cFilter
 },
  methods:{
    showAge(ageArg,type){
      if(type=="age"){
        // console.log("age")
       this["showAge"+ageArg]=!this["showAge"+ageArg];
      }else if(type=="height"){
        this["showHeight"+ageArg]=!this["showHeight"+ageArg];
        // console.log("height")
      }
    },
    // 点击下拉的列表赋值
    ageClickWho(data,prove){
      if(prove=="1"){
        data<6?this.startAge1=data:this.startAge2=data;
      }else if(prove=="2"){
        data<101?this.startHeight1=data:this.startHeight2=data;
      }
         
    },
    // sex_fun(sex){
    //   for(let val in this.$refs){
    //     this.$refs[val].style["background"]="#F0F0F0"
    //   }
    //   this.$refs[sex].style.background="#02b0b9"
    // },
    // 地址点击
    adress_fun(){
      // return false;
      
       this.$refs.theAdressDiv.style.display=="none"?this.$refs.theAdressDiv.style.display="block":this.$refs.theAdressDiv.style.display="none"
      // console.log(111)
    },
    provCityArea(...whatPCA){
      switch(whatPCA[0]){
        case 1:
        // 优化时可函数封装
        this.$refs[whatPCA[1]].nextElementSibling.style["display"]=="none"?this.$refs[whatPCA[1]].nextElementSibling.style["display"]="block":this.$refs[whatPCA[1]].nextElementSibling.style["display"]="none";
        break;
        case 2:
         this.$refs[whatPCA[1]].nextElementSibling.style["display"]=="none"?this.$refs[whatPCA[1]].nextElementSibling.style["display"]="block":this.$refs[whatPCA[1]].nextElementSibling.style["display"]="none";
        break;
        case 3:
         this.$refs[whatPCA[1]].nextElementSibling.style["display"]=="none"?this.$refs[whatPCA[1]].nextElementSibling.style["display"]="block":this.$refs[whatPCA[1]].nextElementSibling.style["display"]="none";
        break;
      }

    
    },
    // 点击省赋值与相关操作
    chooseProv(val,index){
      this.prov=val;
       let city_val="",
           frag=document.createDocumentFragment("frag");
      for(let i=0,len=this.city[index].length;i<len;i++){
          
            let p=document.createElement("p");
            p.setAttribute("index",i);
            p.innerHTML= this.city[index][i];
            frag.appendChild(p);
      }
      let theEle= document.getElementsByClassName("city_event_fun")[0],
          area_span= document.getElementsByClassName("area-span")[0];
      // 将index储存起来等下用
      theEle.setAttribute("provIndex",index);
     theEle.innerHTML="";
     theEle.appendChild(frag);

      this.$refs["city_span"].innerHTML=this.city[index][0];
      let area_val="";
      for(let i=0,len=this.area[index].length;i<len;i++){
              area_val+="<p>"+this.area[index][0][i]+"</p>"
      }
      // 县区赋值，及随机赋值
      area_span.innerHTML=this.area[index][0].sort(function(){
        return Math.random()-0.5;
      })[0]
      this.$refs["areaAppend"].innerHTML=area_val;

    },
    nextToggle(){
      // return false;
      this.child_boo=!this.child_boo;
      // this.$refs["childFillEle"].style["margin-top"]="315px"
      // this.child_boo==true?this.$refs["childFillEle"].style["marginTop"]="260px":this.$refs["childFillEle"].style["marginTop"]="315px"
      
    },
    childFillChangeColor(type,changeTrue,...changeFalse){
       // child_boo:true,
       // addColorGray:true
       // 
       // 点击颜色切换
        switch(type){
            case 'sp':
            this[changeTrue]=!this[changeTrue];
            for(let val in changeFalse){
              this[changeFalse[val]]=false
            }
            break;
            case 'mk':
            this[changeTrue]=!this[changeTrue];
            for(let val in changeFalse){
              this[changeFalse[val]]=false
            }
            break;
            case 'gj':
            this[changeTrue]=!this[changeTrue];
            for(let val in changeFalse){
              this[changeFalse[val]]=false
            }
            break;
            case 'bq':
            this[changeTrue]=!this[changeTrue];
            for(let val in changeFalse){
              this[changeFalse[val]]=false
            }
            break;
            case 'cy':
            this[changeTrue]=!this[changeTrue];
            for(let val in changeFalse){
              this[changeFalse[val]]=false
            }
            break;
            case 'sexm':
            this[changeTrue]=!this[changeTrue];
            for(let val in changeFalse){
              this[changeFalse[val]]=false
            }
            break;
        }
    }
     
     
    
  },
  mounted(){
    let cityEle=document.getElementsByClassName("city_event_fun")[0],
        areaEle=document.getElementsByClassName("area_event_fun")[0],
        area=this.area;
    cityEle.addEventListener("click",function(e){
      let theTarget=e.target.innerHTML;
      // 获取目标元素的上上个兄弟节点对象
      cityEle.previousElementSibling.previousElementSibling.innerHTML=theTarget;
      areaEle.innerHTML="";
      let provIndex=cityEle.getAttribute("provIndex")==null?0:cityEle.getAttribute("provIndex"),
        index=e.target.getAttribute("index");
      let areaHTML="";
      // 对县区进行条件赋值
      //创建dom片段防止页面大量dom操作，先嵌入虚拟dom;
      let frag=document.createDocumentFragment();
      for(let i=0,len=area[provIndex][index].length;i<len;i++){
             let createP=document.createElement('p');
             createP.innerHTML=area[provIndex][index][i];
             createP.setAttribute("index",i);
             frag.appendChild(createP)
      }

      areaEle.innerHTML="";
      areaEle.appendChild(frag);
      areaEle.previousElementSibling.previousElementSibling.innerHTML=area[provIndex][index][0];
  
    })

    // 对县的相关dom对象进行绑定
    let area_span=document.getElementsByClassName("area-span")[0];
    areaEle.addEventListener("click",function(e){
          area_span.innerHTML=e.target.innerHTML;
    })

  },
  created(){
    this.$emit("changeChildColor","2")
  }
}
</script>

 
<style scoped>
 .header{
 	height:50px;
 	width:100%;
 	background:#7fd7db;
 	display:flex;
 	display:-webkit-flex;
 	align-items: center;
 	justify-content: center;
 	color:#fff;
  font-size:20px;

 }
 .header > .child-router{
 	width:50px;
 	height:50px;
 	position: absolute;
 	right:0;
 	display:flex;
 	display:-webkit-flex;
 	align-items:center;
 	justify-content: center;
 }
 .chooseChildMsg {
  position:relative;
 }
  .chooseChildMsg::after{
    content:"";
    height:0;
    visibility:hidden;
    display:block;
    clear:both;
  }
 .chooseChildMsg > ul > li{
 	float:left;
  height:50px;
  width:100%;
  margin-top:20px;
 }
 .chooseChildMsg > ul >:nth-child(4){
  margin-top:10px;
 }
.chooseChildMsg > ul > li > ul{
  /*overflow:auto;*/
  margin-left:3px;
}
.chooseChildMsg > ul > li > ul > li{
  width:50px;
  height:30px;
  float:left;
  display:flex;
  display:-webkit-flex;
  align-items:center;
  padding-left:15px;
  border-radius:5px;
}
.chooseChildMsg > ul >:first-child{
  padding-top:10px;
}
.chooseChildMsg > ul > li > ul >:nth-child(4){
  width:60px;
}
.chooseChildMsg > ul > li > ul >:nth-child(2),
.chooseChildMsg > ul > li > ul >:nth-child(4){
  background:#F0F0F0;
  position:relative;
  margin-left:10px;
  
}
.chooseChildMsg > ul > li > ul >:nth-child(2) > .fir,
.chooseChildMsg > ul > li > ul >:nth-child(4) > .fir{
  margin-left:8px;
}
.chooseChildMsg > ul > li > ul >:nth-child(2) > .fir > li,
.chooseChildMsg > ul > li > ul >:nth-child(4) > .fir > li{
  width:0;
  height:0;
  border:4px solid transparent;
  border-top-color:#8E8E8E;
}

.chooseChildMsg > ul > li > ul >:nth-child(2) > .fir >:nth-child(1),
.chooseChildMsg > ul > li > ul >:nth-child(4) > .fir >:nth-child(1){
  visibility:hidden;
}
.chooseChildMsg > ul > li > ul >:nth-child(2) > .sec,
.chooseChildMsg > ul > li > ul >:nth-child(4) > .sec{
  width:50px;
  position:fixed;
  background:#F0F0F0;
  top:110px;
  z-index:10;
  padding-left:15px;
  margin-left:-15px;
}
.chooseChildMsg > ul > li > ul >:nth-child(2) > .sec > li,
.chooseChildMsg > ul > li > ul >:nth-child(4) > .sec > li{
  border-top:1px solid #fff;
  /*display:none;*/
}
.chooseChildMsg > ul > li > ul >:nth-child(4) > .sec{
  width:60px;
}
.chooseChildMsg > ul > li > ul >:nth-child(4) > .sec > li{
  width:60px;
}
/*重新定义复用的组件的点击出现的ul的距离浏览器顶点的距离(fixed)和宽度*/
.chooseChildMsg > ul > li > ul >:nth-child(2) > .sec_height,
.chooseChildMsg > ul > li > ul >:nth-child(4) > .sec_height{
  top:170px;
  width:70px;
}
.chooseChildMsg > ul >:nth-child(2) > ul >:nth-child(2),
.chooseChildMsg > ul >:nth-child(2) > ul >:nth-child(4){
  width:70px;
}
 /*定义z-index防止上面出现的下拉列表被挡了*/
.chooseChildMsg > ul >:nth-child(1) > ul > li > :nth-child(2){
  z-index:4;
}
.chooseChildMsg > ul >:nth-child(2) > ul > li > :nth-child(2){
  z-index:3;
} 
/*性别*/
.chooseChildMsg > ul >:nth-child(3){
  margin-top:10px;
  /*background:blue;*/
}
.chooseChildMsg > ul >:nth-child(3) > ul > li{
  width:70px;
  height:40px;
}
.chooseChildMsg > ul >:nth-child(3) > ul >:nth-child(2){
  /*background:#02b0b9;*/
  width:65px;
  margin-right:10px;
}
.chooseChildMsg > ul >:nth-child(3) > ul >:nth-child(2){
  height:30px;
  margin-left:-10px;
}
.chooseChildMsg > ul >:nth-child(3) > ul >:nth-child(1){
  height:30px;
}
.chooseChildMsg > ul >:nth-child(3) > ul >:nth-child(3),
.chooseChildMsg > ul >:nth-child(3) > ul >:nth-child(4){
  width:37px;
  height:30px;
  padding:10px;
  background:#F0F0F0;
}
/*.chooseChildMsg > ul >:nth-child(4){
  background:blue;
}*/
.chooseChildMsg > ul >:nth-child(4) > ul > li{
  height:40px;
}
.chooseChildMsg > ul >:nth-child(4) > ul >:last-child{
  /*background:#ccc;*/
  width:230px;
  display:flex;
  justify-content: center;
}
.chooseChildMsg > ul >:nth-child(4) > ul >:last-child > ul > li{
  width:0;
  height:0;
  border:4px solid transparent;
  margin-left:5px;
  border-top-color:#8E8E8E;
}
.chooseChildMsg > ul >:nth-child(4) > ul >:last-child > ul >:first-child{
  visibility:hidden;
  /*background:blue;*/
}

.chooseChildMsg > ul >:nth-child(4) > ul >:last-child{
  position:relative;
}
.chooseChildMsg > ul >:nth-child(4) > ul >:last-child > :first-child{
  /*position:fixed;*/
  /*width:230px;
  top:310px;*/
  border:none;
  margin-left:-10px;
  border-radius:5px;
}
.chooseChildMsg > ul >:nth-child(4) > ul >:nth-child(2)> .reAdressDiv{
  /*overflow: auto;*/
  z-index:100;
  position:absolute;
  top:40px;
}
/*.chooseChildMsg > ul >:nth-child(4) > ul >:last-child > :first-child > .ul-fir{

}*/
.chooseChildMsg > ul >:nth-child(4) > ul >:last-child > :first-child > ul{
  width:70px;
  height:30px;
  margin-left:5px;
  background:#F0F0F0;
  border-radius: 5px;
  float:left;
  display:flex;
  display:-webkit-flex;
  align-items:center;
  justify-content: center;
}
.chooseChildMsg > ul >:nth-child(4) > ul >:last-child > :first-child > ul > .tra > p{
  width:0;
  height:0;
  /*background: #8F8F8F;*/
  border:4px solid transparent;
  margin-left:5px;
  border-top-color:#000;
}
.chooseChildMsg > ul >:nth-child(4) > ul >:last-child > :first-child > ul > .tra > :first-child{
  visibility:hidden;
}
.chooseChildMsg > ul >:nth-child(4) > ul >:last-child > :first-child > .ul-fir> .province,.city,.area{
  position:absolute;
  top:30px;
  width:70px;
  text-align: center;
  background:#F0F0F0;
}
.clickFun_PCA{
  width:230px;
  height:40px;
  position:absolute;
  top:0;
  left:0;
  z-index:10;
}

/*补充*/
.chooseChildMsg > ul > .one > .one-ul > :nth-child(2) > .reFirst,
.chooseChildMsg > ul > .one > .one-ul > :nth-child(4) > .reSecond{
  position:absolute;
  top:30px;
}
.chooseChildMsg > ul > .two > .two-ul > :nth-child(2) > .sec_height,
.chooseChildMsg > ul > .two > .two-ul > :nth-child(4) > .sec_height{
  position:absolute;
  top:30px;
}
.chooseChildMsg > ul > .four > .four-ul > :nth-child(2){
  position:relative;
}
.cFilterMain{
  position:relative;
}
/*.chooseChildMsg > ul >:nth-child(4) > ul{
  background:blue;
}*/
/*.cFilter{
  height:60px;
  width:100%;
  display:flex;
  display:-webkit-flex;
  align-items: center;
  justify-content: center;
  background:red;
  margin-top:50px;
  border-bottom:1px solid #F0F0F0;
}*/
 .childFill{
  width:100%;
  margin-top:20px;
  overflow:auto;
 }
 .childFill-fir{
  width:90%;
  display:flex;
  display:-webkit-flex;
  align-items: center;
  flex-warp:warp; /*CSS3样式，支持webkit，ms*/
  -ms-flex-wrap: wrap;/*IE9以及一下不支持*/
  -webkit-flex-wrap: wrap;
  margin-left:18px;
  margin-bottom:12px;

 }
  .childFill-fir > p{
    height:30px;
    background:#F0F0F0;
    display:flex;
    display:-webkit-flex;
    align-items: center;

    margin-bottom:18px;
  }
  .childFill-fir > .rightQuick{
    /*background:red;*/
    margin-left:13px;
  }
  .childFill-fir > .childFill-p-sec-ml{
    width:32px;
    visibility:hidden;
  }
  .childFill-four > .childFill-cy-p{
    visibility:hidden;
    width:32px;
  }
  .childFill-fir > .childFill-p-fir{
    background:#fff;
  }
  .childFill-p-sec,
  .childFill-p-thir{
    margin-left:10px;
    padding:10px;
    border-radius:6px;
  }
  .childFill-fir > .addColorGray{
    background:#02b0b9;
  }
  .chooseChildMsg > ul >:nth-child(3) > ul > .addColorGray{
    background:#02b0b9;
  }
  .childFill-fir > .rightNow{
    margin-left:45px;
  }

</style>
