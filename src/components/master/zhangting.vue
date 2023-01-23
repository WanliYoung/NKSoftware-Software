<template>
  <div class="mydiv">
    <MainSwiper class ='test' />
  </div>
</template>

<script>
import MainSwiper from "@/components/main_vue/MainSwiper";

export default {
  name: "zhangting",
  components:{
    MainSwiper
  }
}
</script>

<style scoped>
.mydiv{
  left:5%;
  background-image: url('@/assets/zhangting.png');
  background-size:100% 100%;
  width:90%;
  padding-top:50%;
  position: relative;
}
.test{
  position: absolute;
  top: 25%;
  left:13%;
  width:74%;
  height:60%;
}
</style>
