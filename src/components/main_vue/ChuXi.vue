<template>
  <div class="chuxi">
    <p class="wenan">
      温馨的是除夕夜<br>
      温暖的是合家欢<br>
      温柔的是彩灯闪<br>
      温情的是人团圆
    </p>
    <img src="@/assets/main/chuxi.jpg" class="img1">
    <img src="@/assets/main/shousui1.png" class="img3">
    <img src="@/assets/main/chunwan.png" class="img4">
  </div>


</template>

<script>
export default {
  name: "ChuXi",
  data(){
      return {

      }



  }
}
</script>

<style scoped>
.chuxi{
  position: relative;
  margin: 0;
  border:0;
  padding:0;
  width: 100%;
  height: 100%;
}
.wenan{
  margin: 0;
  position:absolute;
  top:10%;
  left:10%;
}
.img1{
  position:absolute;
  width:45%;
  height:100%;
  top:0;
  right:10%;
}

.img3{
  position:absolute;
  top:40%;
  left:0;
  width:35%;
  height:28%;
}
.img4{
  position:absolute;
  top:70%;
  left:0;
  width:35%;
  height:28%;
}


</style>
