<template>
  <div :style="{ width: pageWidth, margin: '0 auto'}">
    <h1>原神功能性配队助手</h1>
    <MainForm />
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
