<template>
  <div>
    <nav class="nav">
      <div class="inner">
        <img class="logo" src="@/assets/images/logo.png" @click="btn_login">
        <el-menu :default-active="activeNav" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="landing_page">落地页</el-menu-item>
          <el-menu-item index="material">物料</el-menu-item>
        </el-menu>
        <div class="pull-right top-right">
          <div class="search pull-left">
            <el-input placeholder="请根据编号和命名查询" v-model="search" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" @click="btnsearch"></el-button>
            </el-input>
          </div>
          <el-button size="small" round  @click="btnlanding">上传落地页</el-button>
          <el-button size="small" round  @click="btnmaterial">上传物料</el-button>
        </div>
      </div>
    </nav>

    <!-- 上传落地页结束 -->
    <div class="isbox">
      <!-- 上传物料开始 -->
      <el-dialog title="上传物料" :visible.sync="dialogFormVisible">
        <div class="dia-item">
          <div class="item_t">
            <span class="title_t" v-if="istype === 'ldy'">上传落地页</span>
            <span class="title_t" v-if="istype === 'wuliao'">上传物料</span>
          </div>
          <el-divider></el-divider>
          <el-upload
            class="upload-demo"
            action=""
            ref="upload"
            :name="istype"
            :on-change="change_parent"
            :on-preview="handlePreview"
            :on-success="issuccess"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture"
            multiple
            :limit="10"
            :auto-upload="false">
            <el-button size="small" type="primary">选择文件</el-button>
          </el-upload>
          <div class="clearfix"></div>
        </div>

        <div class="dia-item" v-if="istype === 'ldy'">
          <div class="item_t">
            <span class="title_t">上传落地页banner</span>
          </div>
          <el-divider></el-divider>
          <el-upload
            class="upload-demo"
            action=""
            :on-change="change_banner"
            :on-preview="handlePreview"
            :on-success="issuccess"
            :on-remove="handleRemove"
            :file-list="fileList2"
            list-type="picture"
            :limit="10"
            name="banner"
            multiple
            :auto-upload="false">
            <el-button size="small" type="primary">选择文件</el-button>
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>
          <div class="clearfix"></div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="success" @click="submitUpload">提 交</el-button>
        </div>
      </el-dialog>
      <!-- 上传物料结束 -->
    </div>

  </div>
</template>

<script>

  export default {
    props: ['default_nav'],
    data() {
      return {
        istype:'ldy',//
        activeNav: 'landing_page',//导航默认选中
        search:'',//搜索
        dialogFormVisible: false,//弹出层
        fileList: [
         // {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
        ],
        fileList2: [
//          {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
        ],
      };
    },
    created:function(){
        this.activeNav = this.$route.params.activeNav?this.$route.params.activeNav:this.default_nav;
        if(!this.activeNav){
          this.activeNav = 'landing_page'
        }
    },
    methods: {
      navactive1(){
        this.activeNav = 'landing_page'
      }, 
      navactive2(){
        this.activeNav = 'material'
      }, 
      change_parent(file, fileList){
        console.log(file)
        //判断上传文件数量
        let that = this;
        Array.from(document.querySelector("input[name="+that.istype+"]").files).forEach(file=>{
          if(this.fileList.indexOf(file) == -1){
            // file['url']='http://p6.qhimg.com/dmfd/320_180_/t01e41d5280a6639d3e.jpg?size=750x649';
            file['url']=file.url;
            console.log(file)
            this.fileList.push(file);
          }
        });
      },
      change_banner(file, fileList){
         Array.from(document.querySelector("input[name=banner]").files).forEach(file=>{
           if(this.fileList2.indexOf(file) == -1){
             this.fileList2.push(file);
          }
        });
      },
      //点击logo返回首页
      btn_login(){
        this.$router.push({name:'landing_page'})
      },
      //顶部导航
      handleSelect(key, keyPath) {
        this.activeNav = key
        this.$router.push({name:key,params:{"activeNav":key}});
      },
      //顶部查询
      btnsearch(){
        //触发父页面事件
        this.$parent.fatherMethod();
      },
      //落地页弹窗
      btnlanding(){
        this.istype = 'ldy'
        this.dialogFormVisible = true
      },
       //物料弹窗
      btnmaterial(){
        this.istype = 'wuliao'
        this.dialogFormVisible = true
      },
      //删除物料
      handleRemove(file, fileList) {
        // console.log(file, fileList);
      },
      handlePreview(file) {
        // console.log(file);
      },
      //文件上传
      submitUpload(){
//        this.$refs.upload.submit();
//        this.$message({message: '上传成功',type: 'success'});
//        this.dialogFormVisible = false
//        console.log(this.fileList);
        let formData = new FormData();
        let that = this;
        //console.log(this.fileList);return;
        if(this.fileList.length > 0){
          this.fileList.forEach(file=> {

          formData.append(that.istype+'[]', file);
        });
        }

        if(this.fileList2.length > 0){
          this.fileList2.forEach(file2=> {

            formData.append("banner[]", file2);
        });
        }
        
        if(this.istype=='ldy'){
          formData.append("upload_type", 1);
        }else{
          formData.append("upload_type", 2);
        }

      //  console.log(formData.getAll('ldy'));return false;
        let _url = "/api/cms/material/material.php?type=upload_all";//上传文件接口地址
        this.axios({
          url: _url,
          method: 'post',
          data:formData,
        }).then((res) => {
          that.fileList=[];
          that.fileList2=[];
        //此处重置文件中间存储变量是为了相同文件能够重复传递
        this.$message.success(res.data.info);
        this.dialogFormVisible = false
      }, (err) =>{
          console.log(err)
          this.fileList=[];
          this.$message.error('提交失败！');
        })


      },
      //上传成功钩子
      issuccess(file, fileList) {
        console.log(file, fileList);
      },
    },
    mounted:function(){
      //默认跳转首页
//      this.$router.push({path:'landing_page'})
    }
  }
</script>
<style scoped>
body{
  background-color: #ddd
}
.clearfix{
  clear: both;
}
.nav{
  width: 100%;height: 90px; background: white;position: fixed;top: 0;z-index: 9;-webkit-box-shadow: 0px 2px 10px rgba(0,0,0,0.1);box-shadow: 0px 2px 10px rgba(0,0,0,0.1)
}
.nav .logo{
  height: 37px;float: left;margin: 26px 70px 26px 0;cursor: pointer;
}
.el-menu{
  background: none;
}
.el-menu.el-menu--horizontal{
  border-bottom: 0;margin-left: 110px;
}
.el-menu--horizontal>.el-menu-item{
  height:90px; line-height: 90px;font-size: 16px;
}
.top-right{
  position: absolute;right: 0;top: 0;height: 90px;
}
.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 4px solid #409EFF;color: #17A1FF;
}
.search{
  margin: 30px 0 0 0;
}
.search>>>.el-input__inner{
  border-radius: 15px 0 0 15px;height: 30px;line-height: 30px;
}
.search>>>.el-input-group__append{
  border-radius: 0 15px 15px 0;color: white;background:linear-gradient(90deg,rgba(23,161,255,1),rgba(23,120,253,1));border-color: #17A1FF;
}
.top-right .el-button--small.is-round[data-v-47323bf2]{
  height: 30px;line-height: 30px;padding: 0 15px;margin-top: 30px;
}
.top-right .el-button--small.is-round {
  padding: 9px 15px;margin: 30px 0 0 30px;
}
/* 弹出框 */
.isbox>>>.el-dialog__header{
  display: none
}
.isbox>>>.el-dialog{
  width: 760px;
}
.title_t{
  float: left;font-size: 16px;line-height: 32px;
}
.upload-demo{
  text-align: left;width: 100%;
}
.isbox>>>.el-upload-list{
  min-height: 50px;
}
.isbox>>>.el-dialog__body{
  text-align: right;max-height: 600px;overflow: auto;
}
.isbox>>>.el-input--small{
  margin-right: 100px;
}
.isbox .el-input--small{
  width: 200px;
}
.dia-item{
  position: relative;padding-bottom: 30px
}
.item_t{
  height: 32px;
}
.isbox .upload-demo>>>.el-upload{
  margin: 0;padding: 0;position: absolute;top: 0;right: 0;
}
.upload-demo>>>.el-upload__tip{
  text-align: left;
}
.upload-demo>>>ul li{
  float: left;width: 214px;height: auto; margin:0 20px 25px 0;padding: 0;border-radius: 0;
}
.upload-demo>>>ul li img{
  width: 100%;height: auto;margin: 0;z-index: 0;
}
.upload-demo>>>.el-upload-list__item-name{
  padding: 0;width: 100%;text-align: center
}
.upload-demo>>>.el-upload-list--picture .el-upload-list__item-name i{
  display: none
}
/* 弹出框 */
</style>
