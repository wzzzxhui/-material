<style scoped>
/* #landing_page{
    margin: 90px -10px 0;
} */
.landing_page>>>.meaus .el-tabs__nav-wrap::after{
    background: none
}
.landing_page>>>.meaus .el-tabs__active-bar{
    background:none;
}
.landing_page>>>.el-tabs__header{
    margin: 0;
}
.landing_page>>>.lable-l{
    float: left;line-height: 70px;font-size: 14px;padding:0 15px;
}
.landing_page>>>.el-tabs__item{
    padding: 0 15px;height: 70px;line-height: 70px;
}
.landing_page>>>.main{
    width: 100%; height: 700px;
}
.main .main-item{
    margin-bottom: 30px;padding: 0 10px;
}
.main .pic-item{
    -webkit-box-shadow: 0px 2px 4px rgba(0,0,0,0.2);box-shadow: 0px 2px 4px rgba(0,0,0,0.2)
}
.main .pic-item:hover{
    -webkit-box-shadow: 0px 4px 10px rgba(0,0,0,0.4);box-shadow: 0px 4px 10px rgba(0,0,0,0.4);
}
.main .main-item .pic{
    height: 420px;overflow: hidden;position: relative;background: white
}
.main .main-item .pic span{
    position: absolute;right: 0;top: 0;width: 62px;height: 24px;background: #62B8F2;border-radius: 0 0 0 16px;font-size: 12px;color: white;line-height: 24px;
}
.main .main-item .pic img{
    width: 100%;
}
.down{
    height: 60px;background: white;display: flex;flex-direction: row;justify-content: space-between;padding: 0 10px;border-top:1px #eee solid;
}
.down span{
  min-width: 40px;line-height: 60px;padding-left: 30px; display: inline-block;text-align: left;color: #181818;
}
.down-item1{
    background: url('../assets/images/icon_z1.png') no-repeat left;
}
.down-item2{
    background: url('../assets/images/icon_z2.png') no-repeat left;
}
.down-item3{
    background: url('../assets/images/icon_z3.png') no-repeat left;
}
.ispages{
    width: 100%;display: inline-block;padding: 20px 0 40px;
}
@media screen and (min-width: 1200px) and (max-width: 1399px) {
  .main .main-item .pic{height:356px;}
}
@media screen and (max-width: 1199px) {
  .main .main-item .pic{height:294px;}
}
</style>
<template>
    <div>
        <navtop default_nav="landing_page" ref="headerChild"></navtop>
        <div class="landing_page inner" id="landing_page">
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
            <el-row class="main" :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)">
                <el-col :span="6" class="main-item" v-for="(items,index) in list" :key="index">
                        <div class="pic-item">
                            <div class="pic" :data-id="items.id" @click="getData(index,$event)">
                                <span>{{items.id}}</span>
                                <img :src="items.img">
                            </div>
                            <div class="down">
                                <span class="down-item1">{{items.views}}</span>
                                <span class="down-item2">{{items.likes}}</span>
                                <span class="down-item3">{{items.downs}}</span>
                            </div>
                        </div>
                </el-col>
            </el-row>
            <div class="ispages">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[8, 12, 16, 20]"
                    :page-size="pagesize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="list_length">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
//引用分页
//import pag from '@/components/pag'
import navtop from '@/components/navtop' // top nav
export default {
    data (){
        return{
            activeName: '2',//导航
            currentPage:1, //初始页
            pagesize:12,    //每页的数据
            list:[],
            navid:'1',
            key:'',
            list_length:10
        }
    },
    inject:['reload'],
    created: function () {
        this.get_all(1)
    },

    methods: {
        //查询
        fatherMethod() {
           this.key = this.$refs.headerChild.search
            this.get_all(this.navid);
        },
         //获取列表
         get_all:function(status){
            //发送get请求
            let url = "";
            let that = this;
            this.axios.get('/cms/material/material.php?type=get_all&upload_type=1&status='+status+'&page_size='+this.pagesize+'&current_page='+this.currentPage+'&key='+that.key)
            // +'&key='+this.aaa
            .then(function (response) {
                let data = response.data.data;
                that.list = data;
                that.list_length = parseInt( response.data.list_length);
            })
            .catch(function (error) { // 请求失败处理
                console.log(error);
            });
         },

        //点击logo返回首页
         //顶部导航
         handleClick(tab, event) {
             this.navid = tab.name;
             this.get_all(this.navid);
        },
        //点击查看详情
        getData:function (index,event) {
            
            //获取点击对象
            let that = this
            let id = that.list[index].id;
            that.$router.push({name:"landing_details",query:{'ID':id,'activeName':that.activeName}});
        },
         // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
            this.pagesize = size;
            this.get_all(this.navid);
        },
        handleCurrentChange: function(currentPage){
            this.currentPage = currentPage;
            this.get_all(this.navid);
        }
    },
    components:{
        navtop
    }
}
</script>

