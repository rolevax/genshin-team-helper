<template>
  <div :style="{ width: pageWidth, margin: '0 auto'}">
    <h1>原神大世界配队助手</h1>
    更新于 2021-07-03，同步至 1.6 万叶池
    <el-divider></el-divider>
    <h3>勾选你需要的功能，结合 BOX 与 XP，自动计算配队方案</h3>
    <MainForm />
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
