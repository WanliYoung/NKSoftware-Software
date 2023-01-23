<template>
  <div>
    <el-upload
        action="/"
        list-type="picture-card"
        :auto-upload="false"
        :on-change="changeUpload"
    >
      <i class="el-icon-plus"></i>
    </el-upload>

    <el-button  @click="test">
      点击
    </el-button>
    <br />
    <a href="https://project-6g3zt5t9ff1310b4-1314392317.tcloudbaseapp.com/tcb-cms" >dasda</a>
  </div>
</template>

<script>
export default {
  name: "test1",
  data() {
    return {
      dialogImageUrl: [],
      dialogVisible: false
    }
  },
  methods: {

     changeUpload(fileList){
       console.log(fileList)
       this.dialogImageUrl.push(fileList)

     },
    test(){
       this.$router.push('https://project-6g3zt5t9ff1310b4-1314392317.tcloudbaseapp.com/tcb-cms')
    }

  }
}
</script>

<style scoped>

</style>
