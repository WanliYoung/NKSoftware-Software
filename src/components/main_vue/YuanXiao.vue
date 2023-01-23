<template>
  <div class="XiaoNian">
    <p class="wenan">
      人安心安，花好月圆<br>
      月圆向吉，花开向喜<br>
    </p>
    <img src="@/assets/main/yuanxiao.png" class="img1">
    <img src="@/assets/main/wulong.png" class="img3">
    <img src="@/assets/main/dengmi.png" class="img4">
  </div>
</template>

<script>
export default {
  name: "YuanXiao"
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
  left:0%;
}
.wenan{
  margin: 0;
  position:absolute;
  top:10%;
  right:10%;
}
.img3{
  position:absolute;
  top:40%;
  right:10%;
  width:35%;
  height:28%;
}
.img4{
  position:absolute;
  top:70%;
  right:10%;
  width:35%;
  height:28%;
}
</style>
