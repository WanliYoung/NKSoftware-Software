<template>
    <div id="app1">
      <el-row>

        <el-col :span="2">
          <div class="upload">
            <input type="file" id="file" multiple @change="upload">
          </div>
        </el-col>
        <el-col :span="4">
          <el-button type="success"  @click="save">保存图片</el-button>
        </el-col>
      </el-row>
      <ul class="view">
        <li v-for="(item,index) in list" :key="index" >
          <img :src="item">
          <div class="delect" @click="delect(index)">×</div>
        </li>
      </ul>
    </div>
</template>

<script>
import cloudbase from '@cloudbase/js-sdk'
import MainHeader from '@/components/main_vue/MainHeader'

let num;
export default {
  name: "UploadImg",
  data() {
    return {
      list: [],
      templist:[],
    }
  },
  props:{
    username:{type: String,}
  },
  components:{
    MainHeader
  },
  methods: {
    async save() {
      //cloudbase好像自定义的id就找不到
      await this.$db.collection("image")
          .where({
            username: this.username
          })
          .get()
          .then((res) => {
            num = res.data.length
            console.log(num)
          })
     for (let i = 0; i < this.templist.length; i++) {
          let item = this.templist[i];
          let path = `User/${this.username}/image/${i + num}.jpg`
       await this.$app
              .uploadFile({
                // 云存储的路径
                cloudPath: path,
                // 需要上传的文件，File 类型
                filePath: item
              })
              .then((res) => {
                console.log(res)
                this.$db.collection('image')
                    .add({
                      username: this.username,
                      fileID: res.fileID
                    })
              });
        }
      this.templist=[]
      this.list=[]
    },
    upload(e) {
      this.templist=[]
      this.list=[]
      //e.target指向事件执行时鼠标所点击区域的那个元素//------------------------------------------------------
      for (let i = 0; i <e.target.files.length; i++) {
        let item = e.target.files[i]
        if (!/image\/\w+/.test(item.type)) {
          alert("只能选择图片");
          return;
        }
        var _this = this;
        let reader = new FileReader();
        // readAsDataURL方法可以将上传的图片格式转为base64,然后在存入到图片路径,这样就可以上传任意位置的图片
        reader.readAsDataURL(item);
        console.log(item)
        reader.addEventListener('load', function () {
          _this.templist.push(item)
          _this.list.push(this.result)
        })
      }
      //------------------------------------------------------------
    },
    delect(index) {
      this.templist.splice(index, 1);
      this.list.splice(index, 1);
    },
    //
    noDelect() {
      alert('默认图片无法删除。')
    }
  }
}
</script>
<style scoped>

.view{
  width: 100%;
  height:500px;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}
.view > li{
  width: 200px;
  height: 120px;
  background-color: rgba(54, 194, 35,0.1);
  list-style: none;
  margin: 20px;
  position: relative;
}
.view > li > img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.delect{
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 15px;
  background-color: rgba(255, 255, 255,0.5);
  user-select: none;
  cursor: pointer;
  opacity: 0;
}
.delect:hover{
  background-color: rgba(31, 31, 31, 0.5);
  color: white;
}
.view>li:hover .delect{
  opacity: 1;
}
.upload{
  width: 90px;
  height: 36px;
  background-color: rgba(135, 206, 235,0.2);
  border: 1px dashed black;
  border-radius: 5px;
  position: relative;
}
.upload:hover{
  background-color: rgba(135, 206, 235,1);
}
.upload::before{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '上传图片';
  font-size: 13px;
  text-align: center;
  font-family: 'fangsong';
  line-height: 20px;
  user-select: none;
}
#file{
  width: 100%;
  height: 100%;
  opacity: 0;
}

</style>
