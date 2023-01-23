<template>
  <div id="home" style="position: relative;width: 100%;">
    <div id="left" style="position:relative;width: 50%;height: 45%;">
      <el-table
          :data="tableData1"
          :row-class-name="tableRowClassName"
          stripe
          @row-click="handleEdit"
          style="position:relative;width: 100%;">
        <el-table-column
            prop="notice"
            label="资讯"
            width="480">
        </el-table-column>

        <el-table-column
            prop="date"
            width="180">
          <template slot="header" slot-scope="scope">
            <a href="" target="_blank">More<<</a>
          </template>
        </el-table-column>
      </el-table>
      <div id="image" style="width: 100%;height: 55%;"></div>
    </div>
    <div id="content" style="width: 50%">
      <div id="default" v-show="flag">

      </div>
      <div id="content0" v-show="flag0" style="">
        <h2>春节，将温暖呈现给世界--新闻报道-中国共产党新闻网</h2>
        <h4>2022年新年，是欢庆的新年。农历虎年岁首，我们敞开大门，迎接来自世界各国的冬奥会运动员与嘉宾。世界聚焦中国，中国春节瞬间成为世界人民共同欣赏与品味的节日，同时也引爆人们探究中国传统文化的兴趣，为何在冬雪皑皑的银色世界里，中国人要以红色春联、红色灯笼、火红的烟花烘托出一个温暖的、红红火火的、声光色俱美的中国年。
          </br>
          众所周知，随着20世纪80年代中国大门的打开，中国与世界的交流日益频密，一方面我们欣赏到来自世界各地多姿多彩的文化，另一方面中华文化随着中国人的脚步走向更广阔的世界。几十年来，我们看到在法国巴黎，美国纽约、洛杉矶，巴西圣保罗，日本神户、横滨等地，中国春节成为当地城市的节日；新马泰等东南亚国家更是将春节设为法定假日。在欢度春节期间，中华文化成为人们共同参与欣赏的世界文化。</h4>
        <img src="../../assets/news0.png" style="height: 240px;width: 360px;">
      </div>
      <div id="content1" v-show="flag1" style="">
        <h2>桑植县长：与其推隔游子在外，不如构建回家氛围</h2>
        <h4>2023年的春节，比以往来得更早一些。
          </br>
          疫情三年，很多人已经习惯了“就地过年”，三年没有回家过春节。
          </br>
          “外地回家的乡亲们，有钱无钱回家过年，欢迎你们回来！”近日，湖南省张家界市桑植县委副书记、县长梁高武，喊话欢迎在外打工的游子春节回家过年并注意防护的视频，收获广泛点赞。</h4>
        <img src="../../assets/news1.png" style="width: 360px;height: 240px;">
        <h4>桑植县亦在日前发布的致入（返）桑人员的信中也提到，“月是故乡明，人是家乡亲”。春节将至，你们的平安健康始终是我们最大的牵挂，全县家乡父老期盼你们平安回家。刚打赢一场疫情防控歼灭战，“你们可以放心回家”，但因为周边疫情形势严峻复杂，防控还不可放松；提醒返乡人员提前报备、途中做好个人防护、抵桑主动配合查验等。
          </br>
          “现在已至年关，人们想回家的心愿愈发强烈。在做好疫情防控工作的同时，我们想，与其把他们推出去，隔离在家乡之外，莫不如构建一个有人情味、让大家有共鸣的回家的氛围。”12月6日晚，梁高武接受澎湃新闻记者采访时表示，他拍摄这条视频的本意，是希望回乡的人们能共同守护家园，共同做好防疫。</h4>
      </div>
      <div id="content2" v-show="flag2" style="">
        <h2>春节期间各行各业劳动者坚守岗位，保障平安幸福年</h2>
        <h4>习近平总书记在2022年春节团拜会上指出：壬寅虎年，我们要以虎虎生威的雄风、生龙活虎的干劲、气吞万里如虎的精神，继续书写中国特色社会主义伟大事业的历史新篇章！
          </br>
          平凡铸就伟大，英雄来自人民。万家团圆之时，许多人以坚守岗位诠释不渝初心，许多人以无私奉献保障平安祥和，无数点滴微光照亮了一个温暖的中国。</h4>
        <img src="../../assets/news2.jpg" style="width: 360px;height: 240px;">
        <h4>2月11日，中国邮政揽投员刘元元将快递送到安徽省合肥市一名客户家中。
          </br>
          当日是除夕，不少行业的工作人员依然坚守岗位，在工作中迎接春节的到来。</h4>
      </div>
      <div id="content3" v-show="flag3" style="">
        <h2>“就地”过春节，精彩不一样</h2>
        <h4>春节临近，疫情反复，各地疫情防控面临高压态势。河南、北京、天津、辽宁等多地陆续发出倡议，鼓励市民“非必要不离开”“就地过年”。
            </br>
          　留下，是为了未来更好地团圆。然而提出倡议之后，许多人们关心的问题还要解决：在当地如何安心过年？就地过年有哪些政策保障？将为生产生活带来哪些新变化？记者梳理发现，目前，多地相关部门、企业、景区等，发放了各类补贴、消费券，出台景区免费政策……为就地过年的人们，带来了保障和温暖。</h4>
        <img src="../../assets/news3_1.jpg">
        <h4>自1月8日至23日，河南安阳累计报告确诊病例460例，疫情防控形势严峻。日前，安阳市发出《致安阳在外同乡的一封信》，恳切希望目前仍在外地的同乡就地过年，非必要不返安。在河南郑州工作的安阳女孩小张，在朋友圈晒图表示“春节不回去了，家人和我都心安”。</h4>
      </div>
      <div id="content4" v-show="flag4" style="">
        <h2>连长对我说：团领导关心，让你们春节回去，跟父母团圆</h2>
        <h4>那段时间基本快要过年了，三人每天晚饭后，总是要在一起商量着回家过年的事情。我和班长老弟当时是战士，就是回家划分区域问题，可排长大哥是干部，能不能回去还有待进一步研究。
          </br>
          我们先掌握的第一个动态就是划分区域问题，划到北京之内，能够解决90%的人员回家过年，但还有10%的人员要争取。就在这个节骨眼上，有一个沈阳的后门兵，他的母亲跟团里一个主要领导曾经是一个部队的战友，他母亲多次跟这个团领导沟通，终于答应过年放他回家。</h4>
        <img src="../../assets/news4.jpg" style="height: 240px;width: 380px;">
        <h4>这个迟来的消息，一夜间传遍了兵营。我们又看到了希望。
          </br>
          已经到了腊月二十五了，我们再次聚会，最后达成的意见，是一定要当面找找团里领导。
          </br>
          那天晚上，我们三人来到了团领导办公室。他先是看看我们，而后客气地叫我们坐下。又问我们三人是那个连队的？有什么事情？。班长老弟先作了简要的汇报，我也说了两句，排长大哥没有吭声。</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    handleEdit(row, column, event) {
      switch (row.index) {
        case 0:
          this.flag = 0
          this.flag0 = 1
          this.flag1 = 0
          this.flag2 = 0
          this.flag3 = 0
          this.flag4 = 0
          break
        case 1:
          this.flag = 0
          this.flag0 = 0
          this.flag1 = 1
          this.flag2 = 0
          this.flag3 = 0
          this.flag4 = 0
          break
        case 2:
          this.flag = 0
          this.flag0 = 0
          this.flag1 = 0
          this.flag2 = 1
          this.flag3 = 0
          this.flag4 = 0
          break
        case 3:
          this.flag = 0
          this.flag0 = 0
          this.flag1 = 0
          this.flag2 = 0
          this.flag3 = 1
          this.flag4 = 0
          break
        case 4:
          this.flag = 0
          this.flag0 = 0
          this.flag1 = 0
          this.flag2 = 0
          this.flag3 = 0
          this.flag4 = 1
          break
      }
    }
  },
  data() {
    return {
      flag: 1,
      flag0: 0,
      flag1: 0,
      flag2: 0,
      flag3: 0,
      flag4: 0,
      tableData1: [{
        notice: '春节，将温暖呈现给世界--新闻报道-中国共产党新闻网',
        date: '2022-01-31'
      }, {
        notice: '桑植县长：与其推隔游子在外，不如构建回家氛围',
        date: '2022-12-07',
      }, {
        notice: '春节期间各行各业劳动者坚守岗位，保障平安幸福年',
        date: '2022-02-05',
      }, {
        notice: '“就地”过春节，精彩不一样',
        date: '2022-01-27',
      }, {
        notice: '连长对我说：团领导关心，让你们春节回去，跟父母团圆',
        date: '2022-12-08',
      }],
    }
  }
}
</script>

<style>
a{
  color: red;
}

#home {
  width: 100%;
  min-height: 100vh;
  background: url("../../assets/clothes_bg4.jpg") center center no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
}
#image {
  width: 100%;
  min-height: 58vh;
  background: url("../../assets/news_bg.jpg") center center no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
}
#content {
  width: 100%;
  min-height: 100vh;
  background: url("../../assets/content_bg.jpg") center center no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
}
#default {
  width: 100%;
  min-height: 100vh;
  background: url("../../assets/content_bg.png") center center no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
}
</style>

