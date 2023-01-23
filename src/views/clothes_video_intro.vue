<template>
  <div>
    <div class="video-content">
      <player-video src:="src"></player-video>
    </div>
  </div>
</template>

<script>
import PlayerVideo from "@/components/PlayerVideo";
export default {
  name: "clothes_video_intro",
  components: {
    PlayerVideo,
  },
  data(){
    return{
      src:require("../assets/clothes_intro1.mp4")
    }
  },
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    .video-content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }
</style>