<style scoped>
/* 弹出框 */
.clearfix{
    clear: both;
}
.isbox>>>.el-dialog__header{
  display: none
}
.isbox>>>.el-dialog{
  width: 760px;
}
.title_t{
  float: left;
  font-size: 16px;
  line-height: 32px;
}
.upload-demo{
text-align: left;width: 100%;min-height: 50px;
}
.item_t{
  height: 32px;
}
.isbox>>>.el-dialog__body{
  text-align: right;
}
.isbox>>>.el-upload-list{
  max-height: 500px;overflow: auto
}
.isbox>>>.el-input--small{
  margin-right: 100px;
}
.isbox .el-input--small{
  width: 200px;
}
.isbox .upload-demo>>>.el-upload{
  margin: 0;padding: 0;position: absolute;
  top: 30px;
  right: 22px;
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

<template>
    <div>
        <div class="isbox">
            <!-- 上传物料开始 -->
            <el-dialog title="补充尺寸" :visible.sync="dialogFormVisible">
              <div class="item_t">
                <span class="title_t">补充尺寸</span>
              </div>
              <el-divider></el-divider>
              <el-upload
              class="upload-demo"
              ref="upload"
              action=""
              :on-preview="handlePreview"
              :on-success="issuccess"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture"
              :on-change="change_parent"
              :limit="10"
              name="files"
              :auto-upload="false">
              <el-button size="small" type="primary">选择文件</el-button>
              <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
              </el-upload>
              <div class="clearfix"></div>
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
    data() {
      return {
        dialogFormVisible: false,//弹出层
        fileList: [],
        ispsMsg:this.psMsg,//
//        pid:this.pid
      };
    },
    props:['psMsg','pid'],//接手psMsg值
    inject:['reload'],
    methods: {
      //删除物料
      handleRemove(file, fileList) {
        this.fileList.splice(file, 1);
        // console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      change_parent(file, fileList){
        //判断上传文件数量
        let that = this;
        let file_url = file.url;
        Array.from(document.querySelector("input[name=files]").files).forEach(file=>{
          if(that.fileList.indexOf(file) == -1){
            file['url']=file_url;
            this.fileList.push(file);
        }
      });

      },

      //文件上传
      submitUpload(){
        let formData = new FormData();
        let that = this;
        let pid = this.pid;
        if(this.fileList.length > 0){
          this.fileList.forEach(file=> {
            formData.append('files[]', file);
          });
        }
        
        formData.append("pid", pid);
        let _url = "/cms/material/material.php?type=upload_fix";//上传文件接口地址
        this.axios({
          url: _url,
          method: 'post',
          data:formData,
        }).then((res) => {
          that.fileList=[];
        //此处重置文件中间存储变量是为了相同文件能够重复传递
        this.$message.success(res.data.info);
        this.dialogFormVisible = false
        this.reload();
      }, (err) =>{
          this.fileList=[];
        })

      },
      //上传成功钩子
      issuccess(file, fileList) {
        console.log(file, fileList);
      },
      mabtn(){
        this.dialogFormVisible = true
      }
    },
    watch:{
      //监听弹出框
      dialogFormVisible:function(obj){
        if(obj == false){
          this.fileList=[];
        }
      }
    }
  }
</script>