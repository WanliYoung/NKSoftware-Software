<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#9D8141FF"
      text-color="#fff"
      active-text-color="#ffd04b">
    <el-submenu index="1">
      <template slot="title" >
        <i class="el-icon-location"></i>
        <span>新年记忆</span>
      </template>
      <el-menu-item index="1-1" @click="showimg">图片记忆</el-menu-item>
      <el-menu-item index="1-2" @click="showWord">文字记忆</el-menu-item>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span> 上传记忆 </span>
      </template>
      <el-menu-item index="2-1" @click="updateimg">上传图片</el-menu-item>
      <el-menu-item index="2-2" @click="updateWord">上传文字</el-menu-item>
    </el-submenu>

    <el-menu-item index="3" @click="newWish">
      <i class="el-icon-menu"></i>
      <span slot="title">新年愿望</span>
    </el-menu-item>

  </el-menu>
</template>

<script>

export default {
  name: "MainAside",
  props: {
    username:{type: String,}
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    test(){
      this.$message('success')
    },
    newWish(){
      this.$router.push({
        name:'newWish',
        params: {
          username: this.username
        }
      })
    },
    showimg(){
      console.log('try'+this.username)
      this.$router.push({
        name: 'showImg',
        params:{
          username: this.username
        }
      })
    },
    updateimg(){
      this.$router.push({
        name: 'updateImg',
        params:{
          username: this.username
        }
      })
    },
    showWord(){
      this.$router.push({
        name: 'showWord',
        params:{
          username: this.username
        }
      })
    },
    updateWord(){
      this.$router.push({
        name: 'updateWord',
        params:{
          username: this.username
        }
      })
    }

  }
}
</script>

<style scoped>
.el-menu-vertical-demo{
}

</style>
