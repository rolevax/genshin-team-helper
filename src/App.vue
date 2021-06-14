<template>
  <div :style="{ width: pageWidth, margin: '0 auto'}">
    <h1>原神大地图配队助手（开发中）</h1>
    <el-divider></el-divider>
    <h3>输入你需要的功能，结合 BOX 与 XP，自动计算配队方案</h3>
    <MainForm />
    <el-divider>喵打出品，都是垃圾</el-divider>
    <a href="https://github.com/rolevax/genshin-team-helper" target="_blank"><img src="./assets/GitHub-Mark-32px.png"></a>
  </div>
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
    }
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
