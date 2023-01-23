<!-- controls：向用户显示播放按钮控件 -->
<template>
  <video
      ref="video"
      class="video-js vjs-default-skin"
      style="width: 100%;height: 100%;"
      controls
  >
    <source src="../assets/clothes_intro1.mp4" />
  </video>
</template>
export default {
  data() {
    return {
      player: null, // 用来存储当前 video
    };
  },
  mounted() { // 渲染视频
    this.player = this.$video(this.$refs.video);
  },
};