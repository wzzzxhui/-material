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
.de_item .de_left .el-breadcrumb{
    font-size: 14px;line-height: 24px;padding-top: 10px;
}
.details>>>.el-breadcrumb__inner.is-link,.details>>>.el-breadcrumb__inner a{
    font-weight: normal!important
}
.de_item .de_left .grid-content img{
    width: 100%;
}
.de_item .de_left .pic_d{
    display: block;
    margin: 0 -10px;
    text-align: left;
}
.de_item .de_left .pic_d li{
    width: 33.33%;
    /* float: left;display: block */
    vertical-align: top;
    display:inline-block;
}
.de_item .de_left .pic_d li>div{
    margin: 10px;-webkit-box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
    box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
}
.de_item .de_left .pd .pic{
    width: 100%;
}
.de_item .de_left .pd .pic_d li img{
     width: 100%;
}
.de_item .de_left .pic_d li p{
    line-height: 20px;font-size: 14px;background: #f8f8f8;display: inline-block; width: 100%;text-align: center;padding: 10px 0;
}
.de_item .de_left .pic_d .pt{
    width: 100%;height: auto;
}
.de_item .de_left .pt .pic{
    width: 100%;height: auto;
}
.de_item .de_left .pt img{
    width: 100%;height: auto;
}
.de_right .white_bj{
    background: white;padding: 22px 0;margin-bottom: 25px;
}
.de_right .padding_left{
    text-align: left;padding-left: 30px;font-size: 16px;
}
.de_right .padding_left p{
    line-height: 26px;
}
.de_right .padding_left p span{
    width: 80px;text-align: right;display: inline-block;
}
.btn_top button{
    margin: 0 30px;width: 30%;
}
.de_right .xiazai button{
    width: 80%;
}
.de_right>>>.liMenu{
    width:20%;margin: 15px 15px 15px 0;padding: 9px 0;text-align: center;
}
.liMenu.active{
    color: #17A1FF;border-color: #17A1FF;
}

</style>
<template>
    <div>
        <navtop default_nav="material_details" ref="Nav"></navtop>
        <div class="details inner" id="material_details">
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
                        <!-- <h5>物料/最新/255</h5> -->
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: 'material' }">物料</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{name:'material',params:{num:this.activeName}}">{{this.$route.query.navtable}}</el-breadcrumb-item>
                            <el-breadcrumb-item>{{this.$route.query.ID}}</el-breadcrumb-item>
                        </el-breadcrumb>
                        <ul class="pic_d">
                            <li class="pt" v-for="(items,index) in pic_t" :key="index">
                                <div>
                                    <div class="pic"><img :src="items.img"></div>
                                    <p>{{items.name}} - {{items.wh}}</p>
                                </div>
                            </li>
                            
                        </ul>
                        <ul class="pic_d">
                            <li class="pd" v-for="(items,index) in item" :key="index">
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
                            <el-button type="primary" @click="btnbuchong">补充尺寸</el-button>
                            <el-button type="primary" @click="btn_link">上传链接</el-button>
                        </div>
                        <div class="white_bj padding_left" v-for="(texts,index) in text" :key="index">
                            <p><span>编号：</span>{{texts.id}}</p>
                            <p><span>大小：</span>{{texts.size}}</p>
                            <p><span>上传时间：</span>{{texts.date}}</p>
                            <p><span>展示量：</span>{{texts.views}}</p>
                            <p><span>尺寸：</span>{{texts.wh}}</p>
                            <p><span>点击：</span>{{texts.likes}}</p>
                            <p><span>下载量：</span>{{texts.downs}}</p>
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
                            <el-button type="primary" @click="down()">下载 </el-button>
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
            navtable:this.$route.query.navtable,//导航,
            pic_t:[],
            item:[],
            geshis:[],
            geshi_index:0,
            chicun_index:0,
            chicuns:[],
            text:[],
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
                that.geshis = data['geshi'];
                if(data.chicuns.length > 1){
                that.chicun_id = data['item'][0]['id'];
                }
            })
            .catch(function (error) { // 请求失败处理
                that.$message.success(error);
            });
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
         //导航
        handleClick(tab, event) {
            console.log(this.activeName)
            this.$router.push({
                name: 'material',
                params:{num:this.activeName}
            })
        },
        //格式
        btn_gs(geshi,idx){
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
        this.$refs.Nav.navactive2(this.e);
    }
    
}
</script>

