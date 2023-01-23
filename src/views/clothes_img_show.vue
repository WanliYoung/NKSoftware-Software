<template>
  <div id="home">
    <el-carousel trigger="click" style="position: absolute;left: 35%;width: 30%;top: 20%;height: 50%;">
      <el-carousel-item>
        <img src="../assets/child1.jpg" style="width: 400px;height: 300px">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/woman1.webp" style="width: 400px;height: 300px">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/man1.webp" style="width: 400px;height: 300px">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/old1.webp" style="width: 400px;height: 300px">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/woman2.jpg" style="width: 400px;height: 300px">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/child2.jpg" style="width: 400px;height: 300px">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/family1.jpg" style="width: 400px;height: 300px">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/woman3.jpg" style="width: 400px;height: 300px">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "clothes_img_show",
  data(){
    return{

    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  #home {
    width: 100%;
    min-height: 100vh;
    background: url("../assets/clothes_bg4.jpg") center center no-repeat;
    background-size: 100% 100%;
  }
</style>