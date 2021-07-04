<template>
  <div :style="{ width: pageWidth, margin: '0 auto'}">
    <h1>原神大世界配队助手</h1>
    更新于 2021-07-03，同步至 1.6 万叶池
    <el-divider></el-divider>
    <h3>勾选你需要的功能，结合 BOX 与 XP，自动计算配队方案</h3>
    <MainForm />
    <el-collapse>
      <el-collapse-item title="设计原则及已知问题" style="text-align: left;">
        <h3>功能选项收录原则</h3>
        <ul>
          <li>本工具的目的是让开荒或锄地更加舒适，减少更换队伍配置的次数。</li>
          <li>元素方碑这种没办法的情况，不在考虑范围内。</li>
          <li>
            选项对应需求，而非手段。
            例如，射炸药桶和蓬蓬果，都等价于弓，但因为是两种事情，所以不能合并为一个选项。
            这也可以从侧面看出 ch 对哪种属性更加偏心。
          </li>
        </ul>
        <h3>如何判断某角色是否具备某功能</h3>
        <ul>
          <li>以血压不升高为准。例如，单手剑可以刮冰盾，但血压会升高，因此不计入可破冰盾的范围。</li>
          <li>每个人的易怒程度不同，本工具会尽可能保持中庸。</li>
          <li>有普遍分歧的，提供选项开关。</li>
          <li>采集类功能中，不考虑元素爆发。例如，许多角色都可以用 Q 收鸽子，但因为不能保证每次看到鸽子都是满能量，所以不计入。</li>
          <li>考虑到多数人的习惯，护盾选项不考虑结晶盾和自动保命盾。</li>
          <li>
            旅行者以外的五星角色及御三家默认零命；御三家以外的四星角色及旅行者默认六命。
            功能性因命之座产生变化时，提供选项开关。
          </li>
        </ul>
        <h3>已知问题</h3>
        <ul>
          <li>大长腿的标准尚未定义，目前暂定为所有成男。</li>
          <li>快乐爬山的标准尚未定义，目前暂定为温迪+万叶+刻晴。</li>
          <li>破冰盾的可接受速度尚未定义，目前暂定为火系+大剑+凝光。</li>
        </ul>
      </el-collapse-item>
    </el-collapse>
    <el-divider style="margin-top: 64px;">喵打出品，都是垃圾</el-divider>
    <el-space wrap>
      <a href="https://github.com/rolevax/genshin-team-helper" target="_blank"><img src="./assets/GitHub-Mark-32px.png"></a>
      <a @click="qqDialogVisible = true" style="cursor: pointer;"><img src="./assets/qq-32px.png"></a>
    </el-space>
  </div>
  <el-dialog title="QQ 群" v-model="qqDialogVisible" width="30%" >
    <span>709486713</span>
  </el-dialog>
</template>

<script>
import MainForm from './components/MainForm.vue'

export default {
  name: 'App',
  components: {
    MainForm
  },
  data: function() {
    return {
      'pageWidth': '100%',
      'qqDialogVisible': false,
    }
  },
  mounted: function() {
    if (!this.isMobile()) {
      this.pageWidth = '720px'
    }
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    },
  },
  metaInfo: {
    title: "原神大地图配队助手 | 喵打"
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0 auto;
}
</style>
