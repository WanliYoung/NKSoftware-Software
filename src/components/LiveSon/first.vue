<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="@/assets/tuanyuan1.png" style="width: 100% ;height:100%"></div>
      <div class="swiper-slide"><img src="@/assets/tuanyuan2.png" style="width: 100% ;height:100%"></div>
      <div class="swiper-slide"><img src="@/assets/tuanyuan3.png" style="width: 100% ;height:100%"></div>
      <div class="swiper-slide"><live-culture-show></live-culture-show></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>

// 引入插件
import Swiper from "swiper"
import 'swiper/css/swiper.min.css'
import LiveCultureShow from "@/components/LiveSon/liveCultureShow";
export default {
  name: 'first',
  components: {
    LiveCultureShow,
    Swiper,
  },
  setup() {
  },
  mounted() {
    new Swiper ('.swiper-container', {
      autoplay: true,
      //direction: '', // 垂直切换选项
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
};
</script>

<style  >
.swiper-container {
  width: 600px;
  height: 300px;
}
.recommendPage .swiper-container{
  position: relative;
  left: 0;
  display:flex;
  width: 60%;
  height: 500px;
}
.recommendPage{
  justify-content: flex-start;

}

</style>

