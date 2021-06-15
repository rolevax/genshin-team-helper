<template>
  <div>
    <el-form refs="form" :model="form" label-width="80px" style="text-align: left;">
      <el-checkbox-group v-model="form.usages">
        <el-form-item label="单体跑图">
          <el-checkbox v-for="(text, key) in usagesNav" :key="key" :label="key">{{ text }}</el-checkbox>
        </el-form-item>
        <el-form-item label="单体战斗">
          <el-checkbox v-for="(text, key) in usagesCombat" :key="key" :label="key">{{ text }}</el-checkbox>
        </el-form-item>
        <el-form-item label="采集">
          <el-checkbox v-for="(text, key) in usagesMaterial" :key="key" :label="key">{{ text }}</el-checkbox>
        </el-form-item>
        <el-form-item label="解密挑战">
          <el-checkbox v-for="(text, key) in usagesPuzzle" :key="key" :label="key">{{ text }}</el-checkbox>
        </el-form-item>
      </el-checkbox-group>
      <el-collapse accordion>
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
        <el-collapse-item title="角色细节设置（开发中）">
          <el-form-item label="操作">
            <el-checkbox disabled>钟离六命</el-checkbox>
            <el-checkbox disabled>法师带金珀</el-checkbox>
            <el-checkbox disabled>更多选项敬请期待</el-checkbox>
          </el-form-item>
        </el-collapse-item>
        <el-collapse-item title="痛苦度设置（开发中）">
          <el-form-item label="操作">
            <el-checkbox disabled>接受单手剑挖矿</el-checkbox>
            <el-checkbox disabled>接受甘雨凝冰渡海</el-checkbox>
            <el-checkbox disabled>更多选项敬请期待</el-checkbox>
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
      usagesNav: Sol.usagesNav,
      usagesCombat: Sol.usagesCombat,
      usagesMaterial: Sol.usagesMaterial,
      usagesPuzzle: Sol.usagesPuzzle,
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
