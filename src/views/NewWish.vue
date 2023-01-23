<template>
  <div class="main">

  <el-button @click="updateWish" >DIY你的新年愿望</el-button>

    <div class="ma">
      <el-carousel height="500px">
        <el-carousel-item v-for="file in imgList" >
          <img height="100%" width="100%" :src="file.url">
        </el-carousel-item>
      </el-carousel>
      <p>{{input}}</p>
    </div>


    <el-dialog
        title="上传图片和描述"
        :visible.sync="showDialog"
        width="60%"
    >
      <el-form ref="form" label-width="80px">
        <el-form-item label="新年愿望">
          <el-input v-model="input" placeholder="请输入你的新年愿望" ></el-input>
        </el-form-item>
        <el-form-item label="图片描述">
        <el-upload
          action="/"
          list-type="picture-card"
          :auto-upload="false"
          :on-change="changeUpload"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
        </el-form-item>
        <el-form-item >
          <el-button @click="submit">提交</el-button>
        </el-form-item>
s
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {v4} from 'uuid'
export default {
  name: "NewWish",
  data(){
    return{
      show:false,
      showDialog: false,
      imgList:[],
      input:'',
      wishnum:{
        img1 :'',
        img2:'',
        img3:'',
        text:''
      }

    }
  },
  methods: {
    updateWish() {
      this.showDialog = true
    },
    changeUpload(fileList) {
      console.log(fileList)
      this.imgList.push(fileList)
    },
    submit() {
      this.showDialog = false
      this.show = true
    }
  }
}
</script>

<style scoped>
.ma{
  width: 800px;
  height:500px;
  text-align: center;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.main{
  border: 200px;
  position: relative;
  text-align: center;
  margin: auto
}
</style>
