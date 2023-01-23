<template>
<div>
  <el-container>
    <el-header style="padding: 0">
      <MainHeader :username="this.username" class="header"></MainHeader>
    </el-header>
    <el-container>
      <el-aside width="200px" >
        <MainAside :username="this.username" class="aside"></MainAside>
      </el-aside>
      <el-main class="main">
<!--        <div>
          <p>春节记忆</p>
          <div>
            图片区
            <div>
              已上传的图片
              <div>
                <ShowImg :username="this.username"></ShowImg>
              </div>
            </div>
            <div>
              上传图片
              <UploadImg :username="this.username"></UploadImg>
            </div>
          </div>
          <div>
            文字区
            <div>
              已上传的图片
            </div>
            <div>
              上传新的图片
            </div>
          </div>
        </div>
        <div>
          <p>
            新年愿望
          </p>
        </div>-->
        <router-view/>
      </el-main>

    </el-container>
  </el-container>

</div>
</template>

<script>
import cloudbase from '@cloudbase/js-sdk'
import MainHeader from '@/components/main_vue/MainHeader'

import UploadImg from "@/components/main_vue/UploadImg";
import ShowImg from "@/components/main_vue/ShowImg";
import MainAside from "@/components/main_vue/MainAside";
export default {
  name: "Remember",
  data(){
    return {
      fileList: [],
      username:this.$route.params.username
    }
  },
  components: {MainAside, ShowImg, UploadImg,MainHeader},
  mounted() {
    console.log("user"+this.username)
  }
}
</script>

<style scoped>
.aside{
  height:100%;
}
.header{
  height:100%;
}
.main{
  width: calc(100% - 200px);
  height: calc(100vh - 60px);
  padding: 0;

}
</style>
