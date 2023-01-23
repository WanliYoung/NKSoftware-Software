<template>
  <div id="home" style="position: relative">
    <div class="title" style="position: relative;left: 30%;width: 40%;">
      <h1>这里是衣界面</h1>
      <h2>主要介绍中国春节与穿衣有关的传统习俗</h2>
    </div>

    <div id="but" style="position: absolute;left: 25%;top: 25%;width: 50%;">
      <button @click="word_intro" style="">文字图片介绍</button>
      <button @click="video_intro" style="">视频资料介绍</button>
      <button @click="img_show" style="">更多图片展示</button>
      <button @click="recommend" style="">向您推荐服装</button>
    </div>

    <div class="my_left" style="position: absolute; left:6%;top:10%;width: 7%;height: 70%;">
      <h1>寒</h1>
      <h1>衣</h1>
      <h1>熨</h1>
      <h1>出</h1>
      <h1>春</h1>
      <h1>风</h1>
      <h1>暖</h1>
    </div>

    <div class="my_right" style="position: absolute; right:6%;top:10%;width: 7%;height: 70%;">
      <h1>彩</h1>
      <h1>线</h1>
      <h1>添</h1>
      <h1>来</h1>
      <h1>瑞</h1>
      <h1>日</h1>
      <h1>长</h1>
    </div>

  </div>
</template>

<script>
import First_Clothes from "@/components/First_Clothes";

export default {
  name: "clothes",
  components: { First_Clothes,},
  data(){
    return{
      swiperOption: {
        autoplay : {
          disableOnInteraction: false, //用户操作后是否禁止自动循环
          delay: 1500 //自自动循环时间
        }, //可选选项，自动滑动
        speed: 1000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
        loop:true, //循环切换
        grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
        scrollbar: '.swiper-scrollbar',
        mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
        observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
        pagination: {
          el: '.swiper-pagination',
          // type : 'progressbar', //分页器形状
          clickable :true, //点击分页器的指示点分页器会控制Swiper切换
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  methods:{
    word_intro(){
      this.$router.push("/clothes_word_intro");
    },
    video_intro(){
      this.$router.push("/clothes_video_intro");
      alert('即将进入视频介绍界面！\n以下视频将为您介绍春节有关穿衣的传统\n点击播放按钮即可开始观看视频！')
    },
    img_show(){
      this.$router.push("/clothes_img_show");
    },
    recommend(){
      this.$router.push("/clothes_recommend");
    },
    showInfo1(){
      alert('提交成功！')
    },
    showInfo2(number, a){
      console.log(a)
      console.log(number)
      alert('同学你好!!')
    }
  }
}
</script>

<style scoped>
  #home {
    width: 100%;
    min-height: 100vh;
    background: url("../assets/title_img2.jpg") center center no-repeat;
    background-size: 100% 100%;
  }
  #but{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
  }
  .title{
    width: 600px;
    height: 120px;
  }
  .introduction{
    width: 1260px;
    height: 100px;
  }
  .input{
    width: 1260px;
    height: 150px;
  }
  .my_left{
    background-color: red;
  }
  .my_right{
    background-color: red;
  }
</style>
