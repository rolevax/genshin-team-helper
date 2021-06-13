<template>
  <div>
    <el-form refs="form" :model="form" label-width="80px" style="text-align: left;">
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
          <el-checkbox label="amHydroShield">深渊法师水盾</el-checkbox>
          <!-- <el-checkbox label="pyro">丘丘人木盾</el-checkbox>
          <el-checkbox label="cryo">丘丘人冰盾 </el-checkbox>
          <el-checkbox label="">丘丘人岩盾</el-checkbox> -->
          <el-checkbox label="fatuiCryoShield">愚人众冰盾</el-checkbox>
          <el-checkbox label="fatuiPyroShield">愚人众火盾</el-checkbox>
          <!-- <el-checkbox label="">愚人众岩盾</el-checkbox> -->
          <el-checkbox label="fatuiElectroShield">愚人众雷盾</el-checkbox>
          <el-checkbox label="electroHypostasis">五香雷</el-checkbox>
          <!-- <el-checkbox label="">五香岩</el-checkbox> -->
        </el-form-item>
        <el-form-item label="采集">
          <el-checkbox label="tree">砍树</el-checkbox>
          <el-checkbox label="dandelion">蒲公英</el-checkbox>
          <el-checkbox label="flamingFlower">烈焰花</el-checkbox>
          <el-checkbox label="mistFlower">冰雾花</el-checkbox>
          <el-checkbox label="electroCrystal">电气水晶</el-checkbox>
          <el-checkbox label="crystalCore">晶碟</el-checkbox>
          <el-checkbox label="mine">挖矿</el-checkbox>
          <el-checkbox label="fowl">收鸽子</el-checkbox>
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
            选择所有必须出场的角色，最多可选 4 人。
            <el-checkbox-group v-model="form.xp" :max="4">
              <el-checkbox v-for="c in form.box" :key="c" :label="c">{{ names[c] }}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-collapse-item>
      </el-collapse>
    </el-form>
    <!-- <pre style="text-align: left;">{{ form.xp }}</pre> -->
    <h2>计算结果</h2>
    <template v-if="teams.length === 0">
      没有满足全部功能的配队
    </template>
    <template v-else>
      共 {{ teams.length }} 种方案，最少需要 {{ teams[0].length }} 名成员
      <ul>
        <li v-for="team in results" :key="team">{{ team }}</li>
      </ul>
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
    teams() {
      let t = Sol.getRequiredTeamsWithXp(this.form.usages, this.form.box, this.form.xp)
      t.sort((a, b) => a.length - b.length)
      return t
    },
    results() {
      return this.teams.map(team => team.map(g => GS.names[g]).join(" + "))
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
