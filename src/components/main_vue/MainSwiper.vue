<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><XiaoNian></XiaoNian></div>
      <div class="swiper-slide"><LaYue/></div>
      <div class="swiper-slide"><ChuXi/></div>
      <div class="swiper-slide"><ChunJie/></div>
      <div class="swiper-slide"><YuanXiao/></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>

// 引入插件
import Swiper from "swiper"
import 'swiper/css/swiper.min.css'
import XiaoNian from "@/components/main_vue/XiaoNian";
import LaYue from "@/components/main_vue/LaYue";
import ChuXi from "@/components/main_vue/ChuXi";
import ChunJie from "@/components/main_vue/ChunJie";
import YuanXiao from "@/components/main_vue/YuanXiao";



export default {
  name: "MainSwiper",
  components:{
    YuanXiao,
    ChunJie,
    ChuXi,
    LaYue,
    XiaoNian,
    Swiper,
  },
  mounted() {
    new Swiper ('.swiper-container', {
      direction:'vertical',
       // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      /* // 如果需要滚动条
       scrollbar: {
         el: '.swiper-scrollbar',
       },*/
    })
  }


}
</script>

<style scoped>

</style>
