<template>
  <div>
    <div v-for="word in words">
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
      <hr>
    </div>
  </div>


</template>

<script>
import input from "element-ui/packages/input";

export default {

  name: "ShowWord",
  data(){
    return{
      words:[],
      username: this.$route.params.username,
    }
  },
  created(){
    this.getWord();
  },
  methods:{
    getWord(){
      this.$db.collection("words")
          .where({
              username: this.username
          })
          .get()
          .then((res) =>{
            this.words=[];
            for(var one of res.data)
            {
              this.words.push(one)
            }
          })
    }
  }

}
</script>

<style scoped>

</style>
