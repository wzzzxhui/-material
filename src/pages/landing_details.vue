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
    text-align: left;font-size: 14px;line-height: 24px;padding-top: 10px;
}
.de_item .de_left .grid-content img{
    width: 100%;
}
.de_item .de_left .pic_d{
    display: block;
   margin: 0 -10px;
}
.de_item .de_left .pic_d .pt .pic{
    width: 100%;max-height: 625px;overflow: hidden;
}
.de_item .de_left .pic_d li{
    width: 33.333%;height: auto;overflow: hidden;float: left;
}
.de_item .de_left .pic_d li>div{
    margin: 10px;-webkit-box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
    box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
}
.de_item .de_left .pic{
    width: 100%;height: auto;overflow: hidden;
}
.de_item .de_left .pic_d li img{
     width: 100%;height: auto;
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
.de_right .padding_left p span{
    width: 100px;text-align: right;display: inline-block;
}
.btn_top button{
    margin: 0 30px;width: 30%;padding: 12px 0;
}
.de_right .xiazai button{
    width: 80%;
}
.de_right>>>.liMenu{
    width: 20%;margin: 15px 15px 15px 0;padding: 9px 0;text-align: center;
}
.liMenu.active{
    color: #17A1FF;border-color: #17A1FF;
}
/* @media screen and (max-width: 1199px) {
  .de_item .de_left .pic_d li{
        height: 240px;
    }
} */
</style>
<template>
    <div>
        <navtop default_nav="landing_details" ref="Nav"></navtop>
        <div class="details inner" id="landing_details">
            <!-- 导航 -->
            <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
                <div class="meaus">
                    <label class="lable-l">分类：</label>
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="优选" name="2"></el-tab-pane>
                        <el-tab-pane label="推广中" name="1"></el-tab-pane>
                        <el-tab-pane label="待开发" name="3"></el-tab-pane>
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
                                    <p>{{items.name}} - {{items.wh}}</p>
                                </div>
                            </li>
                        </ul>
                        <div class="clearfix"></div>
                        <ul class="pic_d">
                            <li v-for="(items,index) in item" :key="index">
                                <div>
                                    <div class="pic"><img :src="items.img"></div>
                                    <p>{{items.name}} - {{items.wh}}</p>
                                </div>
                            </li>
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                </el-col>
                <el-col :span="8" class="de_right">
                    <div class="grid-content">
                        <div class="white_bj btn_top">
                            <el-button type="primary" @click="btnbuchong">上传banner</el-button>
                            <el-button type="primary" @click="btn_link">上传链接</el-button>
                        </div>
                        <div class="white_bj padding_left" v-for="(texts,index) in text" :key="index">
                            <p><span>作品ID：</span>{{texts.id}}</p>
                            <p><span>文件大小：</span>{{texts.size}}</p>
                            <p><span>上传时间：</span>{{texts.date}}</p>
                            <p><span>预览：</span>00000次</p>
                            <p><span>点击：</span> 00000次</p>
                            <p><span>状态：</span> 使用中</p>
                            <p><span>尺寸：</span>{{texts.wh}}</p>
                            <p><span>使用平台数：</span>0000</p>
                            
                            <!-- <p>展示量：{{texts.views}}</p>
                            <p>点赞：{{texts.likes}}</p>
                            <p>下载量：{{texts.downs}}</p> -->
                        </div>
                        <div class="white_bj padding_left">
                            <p>选择banner图</p>
                            <div>
                                <el-button class="liMenu" size="small" :class="chicun_id==chicun.id?'active':'chicun.id'" @click="btn_cc(chicun,idx2)" v-for="(chicun,idx2) in chicuns" :key="chicun.id">{{chicun.wh}}</el-button>
                            </div>
                        </div>
                        <div class="white_bj xiazai">
                            <el-button type="primary" @click="down()">下载banner图</el-button>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div>
                <upload ref="myupload" psMsg="landing_page000" :pid="pid"></upload>
            </div>

            <div>
                <uploadlink ref="mylink" linkMsg="landing_page111" :pid="pid"></uploadlink>
            </div>
        </div>
    </div>
</template>
<script>
import navtop from '@/components/navtop' // top nav
import upload from '@/components/upload'
import uploadlink from '@/components/uploadlink'
export default {
    data (){
        return{
            pid:this.$route.query.ID,
            activeName: this.$route.query.activeName,//导航
            activeNav: 'landing_page',//导航默认选中
            pic_t:[
//                {'id':'12','name':'第一页','url':'http://img.zcool.cn/community/01678455dac73e32f875a1323c144f.jpg'},
//                {'id':'31','name':'第二页','url':'http://img.zcool.cn/community/01678455dac73e32f875a1323c144f.jpg'},
            ],
            item:[
//                {'id':'23','name':'百度推广1','url':'/static/img/pic1.89ee279.png'},
//                {'id':'43','name':'百度推广2','url':'http://hbimg.b0.upaiyun.com/792216e17b522e8e32de07936f9a3062b9ff9d3fc0a6a-CUYyrN_fw658'},
            ],
            chicun_index:0,
            chicuns:[],
            text:[
//                {'bianhao1':'123','bianhao2':'123','bianhao3':'123','bianhao4':'123','bianhao5':'123','bianhao6':'123','bianhao7':'123'}
            ],
            // dialogFormVisible:true
            chicun_id :0
        }
    },
    components:{
        navtop,
        upload,
        uploadlink
    },
    created:function(){
        this.get_data()
    },

     methods: {
        //获取数据
        get_data:function(){

            //发送get请求
            let url = "";
            let that = this;
            let id = that.$route.query.ID;
            this.axios.get('/cms/material/material.php?type=get_one_info&id='+id)
            .then(function (response) {
                let data = response.data.data;
                that.pic_t = data['pic_t'];
                that.item = data['item'];
                that.text = data['text'];
                that.chicuns = data['chicuns'];
                // that.chicun_id = data['item'][0]['id'];
            })
            .catch(function (error) { // 请求失败处理
                that.$message.success(error);
            });
        },

         //导航
        handleClick(tab, event) {
            console.log(tab.label);
        },
        //尺寸
        btn_cc(obj,idx2){
            let id = obj.id;
            this.chicun_id = id;
        },
        //下载图片
        down(){
            let id = this.chicun_id;
            let pid = this.pid;
            let that = this;
            if(id == '0'){
                this.$message({message: '请选择尺寸！',type: 'warning'});
                return false
            }else{
                var alink = document.createElement("a");
                alink.href = '/cms/material/material.php?type=download_by_id&id='+id+'&pid='+pid;
                alink.download = "pic"; //图片名
                alink.click();
            }
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
        this.$refs.Nav.navactive1(this.e);
    }
}
</script>

