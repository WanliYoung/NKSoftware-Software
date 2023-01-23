<template>
  <div class="liveMain">
    <p>这一刻，乡愁停下了脚步，聊起了回家的路</p>

    <div>回家成为一种必然。回家不是为尽自己的孝道，也不是沽名钓誉为自己争得不忘本的虚荣，而是为自己寻找供漂泊远方疲劳的身躯休息的港湾，让疲惫的心灵在清净之地休养。回家成为医疗心灵的良药。</div>
    <first style="margin-bottom: 50px"></first>

    <liveCultureShow></liveCultureShow>
    <div>

    </div>
    <div>互动</div>
  </div>
</template>

<script>

import MyVideoPlayer from '@/components/MyVideoPlayer'
import cloudbase from '@cloudbase/js-sdk'
import first from '@/components/LiveSon/first'
import liveCultureShow from "@/components/LiveSon/liveCultureShow";

let videourl ='a';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "live",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MyVideoPlayer,
    first,
    liveCultureShow
  },
  data(){
    return {
      isClick: false,
      button1Show: true,
      button2Show: true,
      myvideo: String
    }
  },
  mounted(){
    console.log(1)
  },
  methods:{
    click() {
      this.isClick =!this.isClick
    },

  }
}
</script>

<style scoped>

.livingSon1{
  margin: 0;
  width:20%;
  height: 36%;
  background-color: #d57878;
  transition: 1s;

}
.livingSon1:hover{
  background-color: #432422;
  width:30% ;
}
.liveMain{
  background: #EE29298E;
}
</style>
