<style scoped>
    #material{
        margin: 90px -10px 0;
    }
.material>>>.meaus .el-tabs__nav-wrap::after{
    background: none
}
.material>>>.meaus .el-tabs__active-bar{
    background:none;
}
.material>>>.el-tabs__header{
    margin: 0;
}
.material>>>.lable-l{
    float: left;line-height: 70px;font-size: 14px;padding:0 15px;
}
.material>>>.el-tabs__item{
    padding: 0 15px;height: 70px;line-height: 70px;
}
.material>>>.main{
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
.material>>>.main .main-item .pic{
   height: 215px;overflow: hidden;position: relative;
}
.main .main-item .pic span{
   position: absolute;right: 0;top: 0;width: 62px;height: 24px;background: #62B8F2;border-radius: 0 0 0 16px;font-size: 12px;color: white;line-height: 24px;
}
.main .main-item .pic img{
  width: 100%;
}
.down{
    height: 60px;background: white;display: flex;flex-direction: row;justify-content: space-between;padding: 0 10px;
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
</style>
<template>
    <div>
        <navtop default_nav="material"></navtop>
        <div class="material inner" id="material">
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
            <el-row class="main" :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)">
                <el-col :span="6" class="main-item" v-for="(items,index) in list" :key="index">
                        <div class="pic-item">
                            <div class="pic" :value="items.id" @click="getData(index,$event)">
                                <span>{{items.id}}</span>
                                <img :src="items.img">
                            </div>
                            <div class="down">
                                <span class="down-item1">{{items.look}}</span>
                                <span class="down-item2">{{items.zan}}</span>
                                <span class="down-item3">{{items.zai}}</span>
                            </div>
                        </div>
                </el-col>
            </el-row>
            <div class="ispages">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[5, 10, 20, 40]"
                    :page-size="pagesize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="list.length">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import navtop from '@/components/navtop'
export default {
    data (){
        return{
            activeName: 'nav1',//导航
            currentPage:1, //初始页
            pagesize:10,    //每页的数据
            list:[

            ],
            navid:'1',
        }
    },
    created: function () {
//        let send_key = this.$route.params.key;
//        if(send_key != '' && typeof (send_key) != 'undefined' && send_key != null){
//            this.key = send_key;
//        }

        this.get_all(1)
    },
     methods: {

         //获取列表
         get_all:function(status){

             //发送get请求
             let url = "";
             let that =this;
             this.axios.get('http://sd.admin_sd.com/cms/material/material.php?type=get_all&upload_type=2&status='+status+'&page_size='+this.pagesize+'&current_page='+this.currentPage)
                     .then(function (response) {
                         let data = response.data.data;
                         that.list = data;
                     })
                     .catch(function (error) { // 请求失败处理
                         console.log(error);
                     });
         },

        //顶部导航
        handleClick(tab, event) {
            this.navid = tab.name;
            this.get_all(this.navid);
        },
        //点击查看详情
        getData:function (index,event) {
            //获取点击对象
            let that = this;
            let id = that.list[index].id;
            that.$router.push({name:"material_details",query:{'ID':id}});
         },
         // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
            this.pagesize = size;
            console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange: function(currentPage){
            this.currentPage = currentPage;
            console.log(this.currentPage)  //点击第几页
        }
    },
    components:{
        navtop
    }
}
</script>

