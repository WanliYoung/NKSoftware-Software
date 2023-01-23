<template>
  <div>
    <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
import cloudbase from '@cloudbase/js-sdk'
import MainHeader from '@/components/main_vue/MainHeader'
const app =cloudbase.init({
  env:"project-6g3zt5t9ff1310b4"
})
app
    .auth({
      persistence: "local",
    })
    .anonymousAuthProvider()
    .signIn()
    .then(() => {
      console.log("登录云开发成功！");
    });
var db = app.database();

export default {
  name: "test",
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }

}
</script>
<style scoped>

</style>
