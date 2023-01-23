<template>
    <div class="out" id="out">
      <div class="bj" id="background_image">
        <!-- <img id="bkg1" style="width: 100%; height: 100%;" src="img/bkg01.jpg" alt="#" />
        <img id="bkg2" style="width: 100%; height: 100%;" src="img/bkg02.jpg" alt="#" /> -->
      </div>
      <div class="content">
        <div class="content_top">春节倒计时</div>
        <div class="content_center">2022</div>
        <div class="content_bottom" id="time">
          <div class="content_bottom_day" >
            <div class="content_bottom_day_top" id="timeDay">{{newDay}}</div>
            <div class="content_bottom_day_bottom">天</div>
          </div>
          <div class="content_bottom_day" >
            <div class="content_bottom_day_top" id="timeHour">{{newHour}}</div>
            <div class="content_bottom_day_bottom">时</div>
          </div>
          <div class="content_bottom_day" >
            <div class ="content_bottom_day_top" id="timeMin">{{newMin}}</div>
            <div class="content_bottom_day_bottom">分</div>
          </div>
          <div class="content_bottom_day" >
            <div class="content_bottom_day_top" id="timeSec">{{newSec}}</div>
            <div class="content_bottom_day_bottom">秒</div>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "main",
  data(){
    return {
      userName: this.$route.params.username,
      endDay :new Date(2023,1,23,0,0,0),
      staDay:0,
      newDay:0,
      newHour:0,
      newMin:0,
      newSec:0,
      cha:0,
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

  methods: {
    // let day = 24*60*60*1000
    // let hour = 60*60*1000
    // let minute = 60*1000
    // let second = 1000
    timeCount(){
      setInterval(() => {
        this.endDay = new Date("2023-01-22").getTime()
        this.staDay = new Date().getTime()
        this.cha = this.endDay - this.staDay
        this.newSec = parseInt(this.cha / 1000 % 60)
        this.newMin = parseInt(this.cha / 1000 / 60 % 60)
        this.newHour = parseInt(this.cha / 1000 / 60 / 60 % 24)
        this.newDay = parseInt(this.cha / 1000 / 60 / 60 / 24)

      })
    }
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
*,div,img{
  padding:0;
  margin:0;
}

.out{
  /* 以下三行实现div充满屏幕 */
  width: 100%;
  height: 100%;
  position: absolute;
}
.bj{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url(@/assets/timebackground.jpg);
  background-size: 100% 100%;
}
.content {
  width: 400px;
  height: 500px;
  color: white;
  /* 此盒子垂直居中 */
  position: absolute;
  top: calc(50% - 250px);
  left: calc(50% - 200px);
  /* 子元素垂直居中 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content_top{
  letter-spacing: 5px;
}
.content_center{
  letter-spacing: 5px;
  font-size: 70px;
  font-weight: bold;

}
.content_bottom{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
  height: 200px;
}

.content_bottom_day{
  width:50px;
  height: 80px;
  border-radius: 4px;
}

.content_bottom_day_top{
  font-size: 18px;
  min-width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: #000000;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.content_bottom_day_bottom {
  font-size: 14px;
  min-width: 50px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: rgb(176, 0, 0);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
