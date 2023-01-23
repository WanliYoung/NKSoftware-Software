<template>
  <div>
    <el-container >
      <el-header style="padding: 0">
        <MainHeader :username="this.userName" class="header"></MainHeader>
      </el-header>
        <el-main class="max" :style="styleObject">
        <div>
          <Deng/>
        </div>
        <div>
          过年倒计时：{{newDay}}天{{newHour}}时{{newMin}}分{{newSec}}秒
        </div>
        <div>
          <el-button @click="clothes">衣</el-button>
          <el-button @click="eat">食</el-button>
          <el-button @click="live">住</el-button>
          <el-button @click="behavior">行</el-button>
        </div>
        <div class="mydiv">
          <MainSwiper class ='test' />
        </div>
        <div class="test1">
          <img src="@/assets/1.jpg">
        </div>
        </el-main>
    </el-container>
    </div>
</template>

<script>
import MainSwiper from "@/components/main_vue/MainSwiper";
import Deng from "@/components/main_vue/Deng";
import LiveCultureShow from "@/components/LiveSon/liveCultureShow";
import MainHeader from "@/components/main_vue/MainHeader";
let day = 24*60*60*1000
let hour = 60*60*1000
let minute = 60*1000
let second = 1000
let endDay = new Date(2023,1,22,24,0,0)
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "main",
  data(){
    return {
      userName: this.$route.params.username,
      endDay :new Date(2023,1,22,24,0,0),
      staDay:0,
      newDay:0,
      newHour:0,
      newMin:0,
      newSec:0,
      styleObject: {
        height: '',
      },
    }
  },
  computed:{
    time:{
      get(){
        return this.staDay
      }
    }
  },

  components: {MainHeader, LiveCultureShow, Deng, MainSwiper},
  methods: {

    timeCount(){
      setInterval(() => {
        this.staDay = new Date().getTime()

        this.newDay= parseInt((this.endDay-this.staDay)/day,10)
        this.newHour = parseInt(((this.endDay-this.staDay)%day)/hour,10)
        this.newMin = parseInt(((this.endDay-this.staDay)%day)%hour/minute,10)
        this.newSec = parseInt(((this.endDay-this.staDay)%day)%hour%minute/1000,10)
      }, 1000)
    },
    clothes() {
      this.$router.push("/clothes")
    },
    eat() {
      this.$router.push("/eat")
    },
    live() {
      this.$router.push("/live")
    },
    behavior() {
      this.$router.push("/behavior")
    },
  },
  created(){
    this.timeCount()

  },
  mounted() {
    console.log("user is mounted"+this.userName)
  }


}
</script>

<style scoped>
.el-header{
  background-color: #ffe;
  height: 120px;
}
.max{
  display:flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: calc(100vh - 60px);
}
.mydiv{
  background-image: url('@/assets/zhangting.png');
  background-size:100% 100%;
  width:70%;
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
.test1{
  width:100px;
  height:1000px;
  background-color: black;
}
.header{
  height: 100%;
}
</style>
