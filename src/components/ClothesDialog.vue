<template>
  <!--1.首先，弹窗页面中要有el-dialog组件即弹窗组件，我们把弹窗中的内容放在el-dialog组件中-->
  <!--2.设置:visible.sync属性，动态绑定一个布尔值，通过这个属性来控制弹窗是否弹出-->
  <el-dialog title="我们认为您可以尝试的春节服装" :visible.sync="detailVisible" style="left:20%;width: 60%;">
    <img :src="imgsrc" style="width: 100%;height: 350px;">
  </el-dialog>
</template>

<script>
export default {
  name: "ClothesDialog",
  data(){
    return{
      detailVisible:false,
      imgsrc:require("../assets/woman3.jpg"),
    }
  },
  methods:{
    //3.定义一个init函数，通过设置detailVisible值为true来让弹窗弹出，这个函数会在父组件的方法中被调用
    init(data){
      console.log(data)
      this.imgsrc = require("../assets/recommand/"+data);
      console.log(this.imgsrc)
      this.detailVisible=true;
      //data是父组件弹窗传递过来的值，我们可以打印看看
    }
  }
}
</script>


<style scoped>

</style>