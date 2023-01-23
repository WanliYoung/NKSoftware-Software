<template>
  <el-container>
    <el-header style="padding: 0">
      <MainHeader :username="this.$route.params.username">
      </MainHeader>
    </el-header>
    <el-container>
      <el-aside width="200px" >Aside</el-aside>
      <el-main>
        <el-form :model="form" label-width="80px">
          <el-form-item label="旧密码:">
            <el-input v-model="form.oldpassword"></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input v-model="form.newpassword"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="modify">确认修改</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>

  </el-container>

</template>

<script>
import MainHeader from "@/components/main_vue/MainHeader";
export default {
  name: "Owner",
  components: {MainHeader},
  data(){
    return{

      form: {
        oldpassword: "",
        newpassword: "",
      }
    }
  },
  methods: {
    modify(){

    }
  }
}
</script>

<style scoped>

</style>
