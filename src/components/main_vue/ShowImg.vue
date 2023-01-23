<template>
<div class="main">
  <div class ='imglist'>
    <ul v-for="(value,index) in ImgList">
      <img :src="value" class="img">
    </ul>
  </div>
</div>
</template>

<script>

export default {
  name: "ShowImg",
  data(){
    return{
      username: this.$route.params.username,
      ImgList: []
    }
  },
  methods: {
    imgShow(){
      this.$app.database().collection("image")
          .where({
            username:this.username
          })
          .get()
          .then((res) =>{
            let fileIdList=[]
            console.log(res)
            for(let i = 0; i < res.data.length; i++){
              console.log(res.data[i].fileID)
              fileIdList.push(res.data[i].fileID)
            }
            console.log("fileIdList:"+fileIdList.length)
              this.$app.getTempFileURL({
                fileList: fileIdList
              })
                  .then((res)=>{
                    console.log(res)
                    for(let i = 0; i < res.fileList.length; i++){
                      let tempfileUrl = res.fileList[i].tempFileURL
                      if (this.ImgList.indexOf(tempfileUrl) === -1)
                        this.ImgList.push(tempfileUrl)
                    }
                  })
          })
    }
  },
  mounted(){
    this.imgShow();
  }
}
</script>

<style scoped>
.img{
  width:200px;
  height:auto
}
.imglist{
  width:100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.main{



}
</style>
