<template>
  <div id="clothes">
    <button @click="show3=show2;show2=show1;show1=show3;" style="position: relative;left: 0;top: 0;">继续</button>
    <div id="c1" v-show = "show1" style="position: absolute;left: 0;top: 40px;">
      欢迎来到元宵节！
      <img src="../assets/clothes_bg1.jpg" style="width: 200px;height: 100px;">
    </div>
    <div id="c2" v-show = "show2" style="position: absolute;left: 0;top: 40px;">
      正月是农历的元月，古人称“夜”为“宵”，正月十五是一年中第一个月圆之夜，所以称正月十五为“元宵节”
      <img src="../assets/clothes_bg2.jpg" style="width: 200px;height: 100px;">
    </div>
    <div id="c3" v-show = "show3" style="position: absolute;left: 0;top: 40px;">
      <img src="../assets/clothes_bg3.jpg" style="width: 200px;height: 100px;">
    </div>
  </div>
</template>

<script>
export default {
  name: "First_Clothes",
  data(){
    return{
      show1:1,
      show2:0,
      show3:0,
      styleobj :{
        fontSize:'16px',
        color:'red'
      }
    }
  },
  methods:{
    change(){

    }
  }
}
</script>

<style scoped>
  #c1{
    z-index: 5;
  }
  #c2{
    z-index: 10;
  }
  #c3{
    z-index: 15;
  }
</style>