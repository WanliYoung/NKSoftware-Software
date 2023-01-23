<template>
  <div>
  <div  vlaue="四种传统习俗的视频展示" style="display: flex ; justify-content: center">
    <div class = 'living'>
    <div ref='con2' class="livingSon" style="background-color: #f64232">
      <button v-show ="button2Show" @click="button2">春联</button>
      <img src="@/assets/chunlian.jpeg" v-show ='!button2Show' style="width:100%;height:100%;opacity:0.9">
    </div>
    <div ref='con3' class="livingSon" style="background-color: #f54259">
      <button v-show ="button3Show" @click="button3">年画</button>
      <img src="@/assets/nianhua.jpeg" v-show ='!button3Show' style="width:100%;height:100%;opacity:0.9">
    </div>
    <div ref = 'con4' class="livingSon" style="background-color: #F8233FFF">
      <button  v-show ="button4Show" @click="button4">窗花</button>
      <img src="@/assets/chuanhua.jpeg" v-show ='!button4Show' style="width:100%;height:100%;opacity:0.9">
    </div>
    <div ref ='con5' class="livingSon" style="background-color: #f52212">
      <button v-show ="button5Show" @click="button5">福字</button>
      <img src="@/assets/fuzi.jpeg" v-show ='!button5Show' style="width:100%;height:100%;opacity:0.9">
    </div>
    </div>
  </div>
  <div class="showTxt">
    <div class="txt">
    <chuanghua v-if="!button4Show"> </chuanghua>
    <chunlian v-if="!button2Show"></chunlian>
    <fuzi v-if="!button5Show"></fuzi>
    <nianhua v-if="!button3Show"></nianhua>
    </div>

  </div>
  </div>
</template>

<script>

import Chunlian from "@/components/LiveSon/chunlian";
import chuanghua from "@/components/LiveSon/chuanghua";
import fuzi from "@/components/LiveSon/fuzi"
import nianhua from "@/components/LiveSon/nianhua"
export default {
  name: "liveCultureShow",
  components: {
    Chunlian,
    chuanghua,
    fuzi,
    nianhua,
  },
  data() {
    return {
      button1Show: true,
      button2Show: true,
      button3Show: true,
      button4Show: true,
      button5Show: true
    }
  },
  methods:{
    button2(){
      this.$refs.con2.style.width ='64%'
      this.$refs.con3.style.width ='12%'
      this.$refs.con4.style.width ='12%'
      this.$refs.con5.style.width ='12%'
      this.button2Show= false
      this.button5Show=true
      this.button4Show=true
      this.button3Show=true

    },
    button3(){
      this.$refs.con3.style.width ='64%'
      this.$refs.con2.style.width ='12%'
      this.$refs.con4.style.width ='12%'
      this.$refs.con5.style.width ='12%'
      this.button3Show= false
      this.button5Show=true
      this.button4Show=true
      this.button2Show=true
    },
    button4(){
      this.$refs.con4.style.width ='64%'
      this.$refs.con2.style.width ='12%'
      this.$refs.con3.style.width ='12%'
      this.$refs.con5.style.width ='12%'
      this.button4Show= false
      this.button5Show=true
      this.button2Show=true
      this.button3Show=true
    },
    button5(){
      this.$refs.con5.style.width ='64%'
      this.$refs.con2.style.width ='12%'
      this.$refs.con4.style.width ='12%'
      this.$refs.con3.style.width ='12%'
      this.button5Show= false
      this.button4Show=true
      this.button2Show=true
      this.button3Show=true

    },

  }
}
</script>

<style scoped>
.living{
  display:flex

}
.living{
  align-items: stretch;
  flex-direction: row;
  width: 55%;
  background-color:#332324;
  height: 500px;
  justify-content: center;
}
.livingSon {
  width:25%;
  margin: 0;
  transition: 1.3s;
}
.showTxt{
  display:flex;
}
.showTxt{
  justify-content: center;
}
.txt{
  width: 50%;
}
</style>
