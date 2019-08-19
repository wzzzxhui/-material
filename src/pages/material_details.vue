<style scoped>
#details{
   margin: 0 -10px;
}
.details>>>.meaus .el-tabs__nav-wrap::after{
    background: none
}
.details>>>.meaus .el-tabs__active-bar{
    background:none;
}
.details>>>.el-tabs__header{
    margin: 0;
}
.details>>>.lable-l{
    float: left;line-height: 70px;font-size: 14px;padding:0 15px;
}
.details>>>.el-tabs__item{
    padding: 0 15px;height: 70px;line-height: 70px;
}
.de_item .de_left {
    padding-right: 35px
}
.de_item .de_left .grid-content{
    background: white;padding:0 22px 22px;
}
.de_item .de_left .grid-content h5{
    text-align: left;font-size: 14px;line-height: 44px
}
.de_item .de_left .grid-content img{
    width: 100%;
}
.de_item .de_left .pic_d{
    display: inline-block;
    margin: 0 -10px;
}
.de_item .de_left .pic_d li{
    width: 33.33%;height: auto;overflow: hidden;float: left;
}
.de_item .de_left .pic_d li>div{
    margin: 10px;-webkit-box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
    box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
}
.de_item .de_left .pic{
    width: 100%;max-height: 274px;
}
.de_item .de_left .pic_d li img{
     width: 100%;max-height: 244px;
}
.de_item .de_left .pic_d li p{
    line-height: 40px;font-size: 14px;background: #f8f8f8;display: inline-block; width: 100%;
}
.de_right .white_bj{
    background: white;padding: 22px 0;margin-bottom: 25px;
}
.de_right .padding_left{
    text-align: left;padding-left: 30px;font-size: 16px;
}
.btn_top button{
    margin: 0 30px;width: 30%;
}
.de_right .xiazai button{
    width: 80%;
}
.de_right>>>.liMenu{
    width:20%;margin: 15px 15px 15px 0;
}
.liMenu.active{
    color: #17A1FF;border-color: #17A1FF;
}

</style>
<template>
    <div class="details" id="details">
        <!-- 导航 -->
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
            <div class="meaus">
                <label class="lable-l">分类：</label>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="最新" name="0"></el-tab-pane>
                    <el-tab-pane label="优选" name="2"></el-tab-pane>
                </el-tabs>
            </div>
        </el-row>
        <el-row class="de_item">
            <el-col :span="16" class="de_left">
                <div class="grid-content">
                    <h5>物料/最新/255</h5>
                    <ul class="pic_d">
                        <li class="pt" v-for="(items,index) in pic_t" :key="index">
                            <div>
                                <div class="pic"><img :src="items.img"></div>
                                <p v-html="items.name"></p>
                            </div>
                        </li>
                    </ul>
                    <ul class="pic_d">
                        <li v-for="(items,index) in item" :key="index">
                            <div>
                                <div class="pic"><img :src="items.img"></div>
                                <p v-html="items.name"></p>
                            </div>
                        </li>
                    </ul>
                </div>
                </el-col>
            <el-col :span="8" class="de_right">
                <div class="grid-content">
                    <div class="white_bj btn_top">
                        <el-button type="primary" @click="btnbuchong">补充尺寸</el-button>
                        <el-button type="primary" @click="btn_link">上传链接</el-button>
                    </div>
                    <div class="white_bj padding_left" v-for="(texts,index) in text" :key="index">
                        <p>编号:{{texts.id}}</p>
                        <p>大小:{{texts.size}}</p>
                        <p>尺寸:{{texts.wh}}</p>
                        <p>上传时间:{{texts.date}}</p>
                        <p>展示量:{{texts.views}}</p>
                        <p>点赞--{{texts.likes}}</p>
                        <p>下载量:{{texts.downs}}</p>
                    </div>
                    <div class="white_bj padding_left">
                        <!--<p>选择：格式</p>-->
                        <!--<div>-->
                            <!--<el-button class="liMenu" size="small" :class="idx==geshi_index?'active':''" @click="btn_gs(geshi,idx)" v-for="(geshi,idx) in geshis" :key="idx">{{geshi}}</el-button>-->
                        <!--</div>-->
                        <p>选择：尺寸</p>
                        <div>
                            <el-button class="liMenu" size="small" :class="chicun_id==chicun.id?'active':'chicun.id'" @click="btn_cc(chicun,idx2)" v-for="(chicun,idx2) in chicuns" :key="chicun.id">{{chicun.wh}}</el-button>
                        </div>
                    </div>
                    <div class="white_bj xiazai">
                        <el-button type="primary"  @click="down()">下载 </el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div>
            <upload ref="myupload" psMsg="material000" :pid="pid"></upload>
        </div>

        <div>
            <uploadlink ref="mylink" linkMsg="material111" :pid="pid"></uploadlink>
        </div>
    </div>
</template>
<script>
import upload from '@/components/upload'
import uploadlink from '@/components/uploadlink'
export default {
    data (){
        return{
            pid:this.$route.query.ID,
            activeName: 'nav1',//导航
            item:[
//                {'id':'23','name':'百度推广1','url':'/static/img/pic1.89ee279.png'},
//                {'id':'43','name':'百度推广2','url':'http://hbimg.b0.upaiyun.com/792216e17b522e8e32de07936f9a3062b9ff9d3fc0a6a-CUYyrN_fw658'},
//                {'id':'65','name':'百度推广3','url':'/static/img/pic1.89ee279.png'},
//                {'id':'43','name':'百度推广4','url':'http://hbimg.b0.upaiyun.com/792216e17b522e8e32de07936f9a3062b9ff9d3fc0a6a-CUYyrN_fw658'},
//                {'id':'65','name':'百度推广5','url':'http://hbimg.b0.upaiyun.com/792216e17b522e8e32de07936f9a3062b9ff9d3fc0a6a-CUYyrN_fw658'},
            ],
            geshis:[],
            geshi_index:0,

            chicun_index:0,
            chicuns:[],
            text:[
                {}
            ],
            // dialogFormVisible:true
            chicun_id :0
        }
    },
    //  beforeCreate(){
    //     console.log('222')
    // },
    components:{
        upload,
        uploadlink
    },

    created:function(){
        this.get_data()
    },
     methods: {

         get_data:function(){

             //发送get请求
             let url = "";
             let that =this;
             let id = that.$route.query.ID;
             this.axios.get('http://sd.admin_sd.com/cms/material/material.php?type=get_one_info&id='+id)
                     .then(function (response) {
                         let data = response.data.data;
                         that.pic_t = data['pic_t'];
                         that.item = data['item'];
                         that.text = data['text'];
                         that.chicuns = data['chicuns'];
                         that.chicun_id = data['item'][0]['id'];
                         that.geshis = data['geshi'];
                     })
                     .catch(function (error) { // 请求失败处理
                         that.$message.success(error);
                     });
         },

         down(){
             let id = this.chicun_id;
             let pid = this.pid;
             let that = this;
             window.open('http://sd.admin_sd.com/cms/material/material.php?type=download_by_id&id='+id+'&pid='+pid);
//             this.axios.get('http://sd.admin_sd.com/cms/material/material.php?type=download_by_id&id='+id)
//                     .then(function (response) {
//                         //window.open(response.data.data);
//                     })
//                     .catch(function (error) { // 请求失败处理
//                         that.$message.success(error);
//                     });
         },
         //导航
        handleClick(tab, event) {
            console.log(tab.label);
        },
        //格式
        btn_gs(geshi,idx){
            console.log(geshi);
            console.log(idx +'选中');
            this.geshi_index=idx;
        },
        //尺寸
        btn_cc(obj,idx2){
            let id = obj.id;
            this.chicun_id = id;
        },
        //补充
        btnbuchong(){
            this.$refs.myupload.mabtn(this.e); 
        },
        //上传链接
        btn_link(){
            this.$refs.mylink.material_link(this.e); 
        }
    },
    mounted:function(){ 
        let that = this;
    }
    
}
</script>

