<template>
  <div id="home" style="position:relative;">
    <div class="input" style="position: absolute;left:30%; top: 30%;width: 40%;">
      <h2>输入您的基本信息获取相关服饰推荐</h2>
      输入您的性别: <input type="text" v-model:value="gender"><br/>
      输入您的年龄: <input type="text" v-model:value="age"><br/>
      <br>
      <button @click="handleClick((gender+age+type))">确认提交信息</button>
      <ClothesDialog v-if="Visiable" ref="dialog"></ClothesDialog>
      <!-- v-model只适用于表单 -->
    </div>
  </div>
</template>

<script>
import ClothesDialog from "@/components/ClothesDialog";
export default {
  name: "clothes_recommend",
  components: {ClothesDialog},
  data(){
    return{
      path:"../assets/",
      type:".jpg",
      name:"ywl",
      gender:'male',
      age:'10',
      Visiable:false,
    }
  },
  methods:{
    showInfo1(){
      alert('提交成功！')
    },
    handleClick(data){
      this.Visiable=true;
      this.$nextTick(()=>{
        //这里的dialog与上面dialog-component组件里面的ref属性值是一致的
        //init调用的是dialog-component组件里面的init方法
        //data是传递给弹窗页面的值
        this.$refs.dialog.init(data);
      })
    },
  }
}
</script>

<style scoped>
#home {
  width: 100%;
  min-height: 100vh;
  background: url("../assets/clothes_bg3.jpg") center center no-repeat;
  background-size: 100% 100%;
}
</style>