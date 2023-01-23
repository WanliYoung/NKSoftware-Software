<template>
  <div class="ls">
    <el-form :model="form" label-width="80px"  class="container">
      <el-form-item label="用户选择">
        <el-select v-model="value" clearable placeholder="请选择你的身份">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
      </el-form-item>

      <el-form-item label="输入账号" wi>
      <el-input

          placeholder="请输入内容"
          :prefix-icon="value==='选项2'?'el-icon-user-solid':'el-icon-user'"
          v-model="inputAccount"
          clearable>
      </el-input>
      </el-form-item>

      <el-form-item label="输入密码">
       <el-input placeholder="请输入密码"
                v-model="inputPassword"
                show-password
                prefix-icon="el-icon-user"
                >
      </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="LoginUser">
          登录
        </el-button>
        <el-button type="primary" plain @click="Login=true">
          注册
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="youke">
          以游客视角登录
        </el-button>
      </el-form-item>
    </el-form>

    <el-dialog title="" :visible.sync="Login">
      <el-form :model="form">
        <el-form-item label="用户：" :label-width="formLabelWidth">
          <el-input v-model="insertAcc"></el-input>
        </el-form-item>
        <el-form-item label="密码：" :label-width="formLabelWidth">
          <el-input v-model="insertPass" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="Login= false">取 消</el-button>
        <el-button type="primary" @click="register">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      options: [{
        value: '选项1',
        label: '普通用户'
      }, {
        value: '选项2',
        label: '超级管理员'
      },],
      value: '',
      inputAccount: '',
      inputPassword:'',
      Login: false,
      formLabelWidth:'120px',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      insertPass:'',
      insertAcc:''

    }
  },
  methods:{
    youke(){
      this.$router.push({
        name : 'lun',
        params:{
          username:this.inputAccount,
          isShow:false
        }
      })
    },

    LoginUser(){
      if(this.value==="选项1"){
        this.$db.collection('User')
            .where({
              username:this.inputAccount,
              password:this.inputPassword
            })
            .get()
            .then((res)=> {
              if (res.data.length !== 0) {
                this.$router.push({
                  name : 'lun',
                  params:{
                    username:this.inputAccount,
                    isShow:true
                  }
                })
              } else {
                this.$message('登录失败，请检查用户名和密码是否正确')
                this.inputAccount = ''
                this.inputPassword = ''
              }
            })
            }

      else{
        if(this.inputAccount ==='root' && this.inputPassword==='root-password'){
          this.$router.push('/adim')
        }
        else{
          this.$message('登录失败')
          this.inputPassword = ''
          this.inputAccount=''
        }
      }
    },
    register(){
      this.$db.collection('User')
          .where({
            username:this.insertAcc
          })
          .get()
          .then((result) =>{
            console.log(result)
            if (result.data.length===0){
              this.$db.collection('User')
                  .add({
                    username: this.insertAcc,
                    password: this.insertPass
                  }).
              then(()=>{
                console.log('注册成功')
              })
              this.Login =false;
            }
            else{
              this.$message('用户已存在，请重新尝试')
              this.insertAcc =''
              this.insertPass =''
            }
          })

    }
  }
}
</script>

<style scoped>
.ls{
  background-image: url('@/assets/main/loginback.png') ;
  position:absolute;
  background-size: 100% 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;  /*关键*/
  background-position: center;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  zoom:1;
}
.container{
  width: 400px;
  width: 300px;
  position: absolute;
  top: 40%;
  left: 40%;
}
</style>
