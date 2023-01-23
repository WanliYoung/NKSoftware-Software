<template>
  <div style="background-color: #f52212;padding: 0" class="all">

        <p @click="main" style="font-size: xx-large;" class="main">线上春节</p>

        <p style="" class ="ge">个人中心</p>

        <p  @click="owner" class="xiu" style="font-size: large">修改密码</p>

      <el-button plain icon="el-icon-switch-button" circle @click="exit" class="tui"> </el-button>

    <el-dialog
        title="修改密码"
        :visible.sync="showDialog"
        width="60%"
    >
      <el-form ref="form" label-width="80px">
        <el-form-item label="旧密码">
          <el-input v-model="input1" placeholder="请输入旧密码" ></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="input2" placeholder="请输入新密码" ></el-input>
        </el-form-item>
        <el-form-item >
          <el-button @click="submit">提交</el-button>
        </el-form-item>

      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import methods from "methods";

export default {
  name: "MainHeader",
  data(){
    return{
      showDialog:false,
      input1:'',
      input2:''
    }
  },
  props:{
    username:{type:String,}
  },
  methods:{
    newYearRemember() {
      this.$router.push({
        name : 'remember',
        params:{
          username:this.username
        }
      })
    },
    owner()
    {
      this.showDialog=true
    },

    submit()
    {
      this.$db.collection("User")
          .where({
            username : this.username
          })
          .update({
            password: this.input2
          })
      this.input1=''
      this.input2=''
      this.showDialog=false
      this.$message("修改密码成功")
    },
    main() {
      this.$router.push({
        name : 'lun',
        params:{
          username:this.username,
          isShow:true
        }
      })
    },
    exit() {
      this.$router.push('/')
    }
  },
  mounted() {
    console.log('头部组件传参成功'+this.username)
  }
}
</script>

<style scoped>
.main {
  position: absolute;
  left:0;
  top:-20px;


}
.main:hover {
  color: #ff9100;
  cursor:pointer;

}
.all{
  height:100%;
  margin: 0;
  position:relative;
}
.ge{
  position: absolute;
  left :750px;
  bottom:-10px;

}
.xiu{
  position: absolute;
  right:100px;
  top:2px

}
.xiu:hover{
  cursor:pointer;

}
.tui{
  position: absolute;
  right:10px;
  top:10px;
}
</style>
