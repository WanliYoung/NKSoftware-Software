<template>
  <div id='play'>
  <video id="my-video" class="video-js vjs-default-skin" controls preload="auto">
  <source :src="src">
  </video>
  </div>
</template>
<script>
  import videojs from 'video.js'
  import 'videojs-contrib-hls'
  export default {
    name:'MyVideoPlayer',
    data(){
      return{		src:''
    }
    },
    created(){	//应该去后台获取播放地址，实际上模拟地址了
      this.src='../assets/test.mp4';
    },
    mounted(){
      videojs('my-video',{		bigPlayButton:true,		textTrackDisplay:false,		posterImage:true,		errorDisplay:false,		controlBar:true
      },function(){		this.play()
      })
    }
}</script>
