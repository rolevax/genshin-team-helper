<template>
  <div>
    <el-form refs="form" :model="form" label-width="80px">
      <el-checkbox-group v-model="form.usages">
        <el-form-item label="单体跑图">
          <el-checkbox label="iceSea">凝冰渡海</el-checkbox>
          <el-checkbox label="tall">腿长</el-checkbox>
          <el-checkbox label="happyClimb">快乐爬山</el-checkbox>
          <el-checkbox label="short">钻小洞</el-checkbox>
        </el-form-item>
        <el-form-item label="单体战斗">
          <el-checkbox label="shield">一键上盾</el-checkbox>
          <el-checkbox label="heal">奶妈</el-checkbox>
          <el-checkbox label="shootHigh">高台对狙</el-checkbox>
          <el-checkbox label="happyPick">快乐捡掉落</el-checkbox>
          <el-checkbox label="amCryoShield">深渊法师冰盾</el-checkbox>
          <el-checkbox label="amPyroShield">深渊法师火盾</el-checkbox>
          <el-checkbox label="amHyrdoShield">深渊法师水盾</el-checkbox>
          <!-- <el-checkbox label="pyro">丘丘人木盾</el-checkbox>
          <el-checkbox label="cryo">丘丘人冰盾 </el-checkbox>
          <el-checkbox label="">丘丘人岩盾</el-checkbox> -->
          <el-checkbox label="pyro">愚人众冰盾</el-checkbox>
          <el-checkbox label="hydro">愚人众火盾</el-checkbox>
          <!-- <el-checkbox label="">愚人众岩盾</el-checkbox> -->
          <el-checkbox label="cyro">愚人众雷盾</el-checkbox>
          <el-checkbox label="pyroOrCyro">五香雷</el-checkbox>
          <!-- <el-checkbox label="">五香岩</el-checkbox> -->
        </el-form-item>
      </el-checkbox-group>
      <el-collapse>
        <el-collapse-item title="拥有用色及 XP 设置">
          <el-form-item label="拥有角色">
            <el-checkbox-group v-model="form.box">
              <el-form-item label="火"> <el-checkbox v-for="c in elements.pyro" :key="c" :label="c">{{ names[c] }}</el-checkbox> </el-form-item>
              <el-form-item label="水"> <el-checkbox v-for="c in elements.hydro" :key="c" :label="c">{{ names[c] }}</el-checkbox> </el-form-item>
              <el-form-item label="雷"> <el-checkbox v-for="c in elements.electro" :key="c" :label="c">{{ names[c] }}</el-checkbox> </el-form-item>
              <el-form-item label="冰"> <el-checkbox v-for="c in elements.cryo" :key="c" :label="c">{{ names[c] }}</el-checkbox> </el-form-item>
              <el-form-item label="风"> <el-checkbox v-for="c in elements.anemo" :key="c" :label="c">{{ names[c] }}</el-checkbox> </el-form-item>
              <el-form-item label="岩"> <el-checkbox v-for="c in elements.geo" :key="c" :label="c">{{ names[c] }}</el-checkbox> </el-form-item>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="玩家XP">
            <el-checkbox-group v-model="form.xp">
              <el-checkbox v-for="c in form.box" :key="c" :label="c">{{ names[c] }}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-collapse-item>
      </el-collapse>
    </el-form>
    <!-- <pre style="text-align: left;">{{ form.usages }}</pre> -->
    <h2>计算结果</h2>
    <template v-if="results === []">
      没有满足全部功能的配队
    </template>
    <template v-else>
      <pre style="text-align: left;">{{ results }}</pre>
    </template>
  </div>
</template>

<script>
import * as GS from "../assets/js/genshin.js"
import * as Sol from "../assets/js/solution.js"

export default {
  name: 'MainForm',
  data () {
    return {
      elements: GS.elements,
      names: GS.names,
      form: {
        usages: [],
        box: GS.all.filter(() => true),
        xp: [],
      },
    }
  },
  methods: {
  },
  computed: {
    results() {
      return Sol.getRequiredTeams(this.form.usages, this.form.box, 4)
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
