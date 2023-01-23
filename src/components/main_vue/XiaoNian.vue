<template>
<div class="XiaoNian">
  <p class="wenan">
    旧岁近暮，新岁即至<br>
    年味渐重，思念逾浓<br>
  </p>
  <img src="@/assets/main/xiaonian.png" class="img1">
  <img src="@/assets/main/saocheng.png" class="img3">
  <img src="@/assets/main/jizhao.png" class="img4">
</div>
</template>

<script>
export default {
  name: "XiaoNian"
}
</script>

<style scoped>
.XiaoNian{
  position: relative;
  margin: 0;
  border:0;
  padding:0;
  width: 100%;
  height: 100%;
}
.img1{
  position:absolute;
  width:45%;
  height:100%;
  top:0;
  right:10%;
}
.wenan{
  margin: 0;
  position:absolute;
  top:10%;
  left:10%;
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
