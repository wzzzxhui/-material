<template>
    <div class="islink">
        <el-dialog
        title="上传链接"
        :visible.sync="btnlink"
        width="40%">
        <p class="istips">可以批量添加，直接复制如下的文本框就可以哦，链接请用英文 “***” 隔开</p>
        <el-input clear="textarea" type="textarea" v-model="link_text" placeholder="请输入..."></el-input>
        <span slot="footer" class="dialog-footer">
            <el-button @click="btnlinkNo">取 消</el-button>
            <el-button type="primary" @click="submitUpload">提 交</el-button>
        </span>
        <!-- {{linkMsg}} -->
        </el-dialog>

    </div>
</template>
<script>
  export default {
    data() {
      return {
        btnlink: false,
        link_text:''
      };
    },
    props:['linkMsg','pid'],
    methods: {
        submitUpload(){
          let that = this;
          console.log(that.link_text)
          that.axios.post({
            url:"/api/cms/material/material.php?type=upload_fix_by_link",//上传文件接口地址
            method: 'post',
            data: {"pid": that.pid, link_str: that.link_text},
          })
          .then(function (response) {
            console.log(response);
            // that.btnlink = false;
          })
          .catch(function (error) {
            console.log(error);
            that.btnlink = false;
          });

        },

      //物料页面入口
      material_link(e){
        this.btnlink = true;
      },
      btnlink1(){
        let that = this;
        //分割字符串
        let text1 = that.link_text.split(",");
        if(that.linkMsg == 'landing_page111'){
        }
        if(that.linkMsg == 'material111'){
        }
      },
      btnlinkNo(){
         this.link_text = '';
         this.btnlink = false;
      }
    }
  };
</script>
<style scoped>
.islink>>>.istips{
    text-align: left;color: #A2A1A1;font-size: 14px;line-height: 32px;
}
.islink>>>.el-dialog__body{
    padding: 0 20px 20px;
}
.islink>>>.el-textarea__inner{
    height: 200px;resize: none;overflow: auto
}
</style>