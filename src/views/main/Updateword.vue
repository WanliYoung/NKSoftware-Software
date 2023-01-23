<template>
  <div>
    <el-row>
      <el-col :span="2">
        <el-button @click="updateWord">上传</el-button>
      </el-col>
      <el-col :span="2">
        <el-button @click="save">保存到云端</el-button>
      </el-col>
    </el-row>


    <div>
      <div v-for="word in words" >
        <!--        //日期-->
        <!--        //标题-->
        <!--        //内容-->
        <el-row>
          <el-col :span="22">
            <p style="font-size: x-large;">{{word.title }}</p>
          </el-col>
          <el-col :span="2">
            <p style="font-size: x-large;">{{word.date}}</p>
          </el-col>
        </el-row>
        <p>{{word.text}}</p>
        <hr />
        <hr />
      </div>
    </div>


    <el-dialog
        title="上传文字记忆"
        :visible.sync="showDialog"
        width="60%"
    >
      <el-form ref="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="input1" placeholder="请输入标题" ></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker
              v-model="input2"
              type="date"
              placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="正文">
          <el-input v-model="input3" placeholder="请输入内容" ></el-input>
        </el-form-item>
        <el-form-item >
          <el-button @click="submit">提交</el-button>
        </el-form-item>

      </el-form>
    </el-dialog>
  </div>

</template>

<script>
export default {
  name: "Updateword",
  data(){
    return{
      words:[],
      showDialog:false,
      input1:'',
      input2:'',
      input3:'',
      username: this.$route.params.username,
    }


  },
  methods:{
    updateWord(){
      this.showDialog= true;

    },
    submit(){
      this.showDialog= false;
      let temp = {
        title:this.input1,
        date:this.input2.getFullYear()+"/"+(this.input2.getMonth()+1)+"/"+this.input2.getDate(),
        text:this.input3
      }
      this.words.push(temp);
      this.input1 ='';
      this.input2='';
      this.input3='';
    },
    save(){
      for(let word of this.words){
        this.$db.collection("words")
            .add({
              username:this.username,
              date: word.date,
              title:word.title,
              text:word.text,
            })
            .then((res)=>{
              console.log("插入数据成功");
            });
      }
      this.words= []
    }

  }

}
</script>

<style scoped>

</style>
