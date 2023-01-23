<template>
  <div id="home">
    <el-carousel trigger="click" style="position: absolute;left: 25%;width: 50%;top: 20%;height: 60%;">
      <el-carousel-item style="position:relative;width: 100%;height: 380px;">
        <img src="../assets/clothes.jpg" style="width: 100%;height: 380px;">
      </el-carousel-item>
      <el-carousel-item style="height: 380px;">
        <div id="first">
          <div id="1-word" style="position:relative;width: 40%;">
            <br><br><br>
            朝会--万国衣冠拜冕旒<br>
            朝会服饰是春节服饰的亮丽篇章。所谓元日朝会，即皇帝在元旦御正殿受群臣朝贺的仪式。孟元老《东京梦华录·元旦朝会》中有详细的描述：“文武百官，皆冠冕朝服，诸路举人，解首亦士服，士服为青边白袍。”魏晋时，岁首朝贺仍然是朝廷大典。曹植《元会诗》描绘了这一盛大场面： 初岁元祚，吉日惟良。乃为嘉会，宴此高堂。尊卑列叙，典而有章。衣裳鲜洁，黼黻玄黄。
          </div>
          <div id="1-img" style="position:relative;width: 60%;">
            <img src="../assets/clothes1.png" style="">
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item style="height: 380px;">
        <div id="second">
          <div id="2-word" style="position:relative;width: 40%;">
            <br><br><br>
            簪花--年年幡胜剪宫花<br>
            朝会中彼此头上银幡或许有助于君臣威仪，有助于显示皇恩浩荡，有助于同僚认同与凝聚；于是接受赐赠时表情不能不严肃神圣，并且不能轻易折御掖藏，要在光天化日之下众目睽睽之中完好无损地佩戴回家。但是真的簪戴回家，回到这个亲情不隔的环境里，回到这个随意自在的生活氛围中，没有了皇恩氛围的笼罩，鬓额灿烂绚丽且如步摇般飘逸，难免让人忍俊不禁。
          </div>
          <div id="2-img" style="position:relative;width: 60%;">
            <img src="../assets/clothes2.png" style="">
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item style="height: 380px;">
        <div id="third">
          <div id="3-word" style="position:relative;width: 40%;">
            <br><br><br>
            演艺--花鬘斗薮龙蛇动<br>
            在这代代相传的朝会拜贺中，除却自家君臣的冠冕堂皇，更有外邦的服饰异军突起。风格别致，夺人眼球。如果说王维的诗句“万国衣冠拜冕旒”俯瞰中仍觉庄严典雅的话，那么耿湋《元日早朝》诗句则直书天朝威仪的庄严与优越感：“环珮声重叠，蛮夷服等差”。
          </div>
          <div id="3-img" style="position:relative;width: 60%;">
            <img src="../assets/clothes3.png" style="">
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item style="height: 380px;">
        <div id="fourth">
          <div id="4-word" style="position:relative;width: 40%;">
            <br><br><br>
            民间--男女老幼皆鲜衣<br>
            通过旧年阈限之后，人们借新衣获得新生。穿上新衣，戴上新帽，象征着人们进入新的生命旅程。从市井到村镇，从原野到朔漠，春风清扫门前雪，谁人能不换新颜？帝王将相达官贵人自有制度供应，自有人帮助料理，而平民百姓则都需要自己动手。在男耕女织的家庭背景下，全家新装都在女主人的两只手上。一盏青油灯，窗影动刀尺。慈母手中线，全家新年衣。
          </div>
          <div id="4-img" style="position:relative;width: 60%;">
            <img src="../assets/clothes5.jpg" style="">
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

// 引入插件
import Swiper from "swiper"
import 'swiper/css/swiper.min.css'
import LiveCultureShow from "@/components/LiveSon/liveCultureShow";
import Clothes1 from "@/components/clothes1";
import Clothes2 from "@/components/clothes2";
import Clothes3 from "@/components/clothes3";
import Clothes4 from "@/components/clothes4";
import Clothes5 from "@/components/clothes5";

export default {
  name: 'clothes_word_intro',
  components: {
    Clothes5,
    Clothes4,
    Clothes3,
    Clothes2,
    Clothes1,
    Swiper,
  },
  setup() {
  },
  mounted() {

  }
};
</script>

<style>
#first{
  display: flex;
}
#second{
  display: flex;
}
#third{
  display: flex;
}
#fourth{
  display: flex;
}
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
#home {
  width: 100%;
  min-height: 100vh;
  background: url("../assets/clothes_bg1.jpg") center center no-repeat;
  background-size: 100% 100%;
}

</style>