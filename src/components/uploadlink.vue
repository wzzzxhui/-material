<template>
    <div class="islink">
        <el-dialog
        title="上传链接"
        :visible.sync="btnlink"
        width="40%">
        <p class="istips">可以批量添加，直接复制如下的文本框就可以哦，链接请用英文小写 “,” 隔开</p>
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
          let strs = this.link_text.split(","); //字符分割
          console.log(strs);
          return
            let that = this;
            let _url = "/cms/material/material.php?type=upload_fix_by_link";//上传文件接口地址
            var params = new URLSearchParams();
            params.append('pid',this.pid);
            params.append('link_str',this.link_text);
            that.axios({
                method: 'post',
                url: _url,
                data: params
            })
            .then(function (res) {
            that.$message.success(res.data.info);
            that.btnlink = false;
            this.reload();
            })
            .catch(function (error) {
              that.$message.success(error.data.info);
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