import * as GS from "./genshin.js"

export const usagesNav = {
    iceSea: "凝冰渡海",
    tall: "大长腿",
    happyClimb: "快乐爬山",
    short: "钻小洞",
}

export const usagesCombat = {
    shield: "战技盾",
    heal: "奶妈",
    shootHigh: "高台对狙",
    shootTower: "每日拆塔",
    happyPick: "快乐捡掉落",
    vinPlataGusha: "木盾丘",
    vinPlataSada: "岩盾丘",
    vinPlataLata: "冰盾丘",
    amCryoShield: "冰法",
    amPyroShield: "火法",
    amHydroShield: "水法",
    amElectroShield: "雷法",
    fatuiCryoShield: "冰胖",
    fatuiPyroShield: "火铳",
    fatuiElectroShield: "雷锤",
    fatuiGeoShield: "岩使",
    electroHypostasis: "无相之雷元素块",
    geoHypostasis: "无相之岩柱子",
}

export const usagesMaterial = {
    tree: "砍树",
    mine: "挖矿",
    dandelion: "蒲公英",
    flamingFlower: "烈焰花",
    mistFlower: "冰雾花",
    electroCrystal: "电气水晶",
    crystalCore: "晶蝶",
    fowl: "收鸽子",
    coldPig: "冷鲜肉",
    sakura: "绯樱绣球",
}

export const usagesPuzzle = {
    manhole: "小压力板脱身",
    manholeDetach: "大压力板脱身",
    windmill: "风车机关",
    lighter: "点火把",
    gushaChest: "草箱子",
    sadaChest: "岩箱子",
    lataChest: "冰箱子",
    bigRocks: "石墙",
    smallRocks: "小石堆",
    electroRocks: "雷石堆",
    anemoSeed: "风种子",
    geoSeed: "岩种子",
    shootBomb: "射炸药桶",
    shootAnemoSlime: "奇怪的风史莱姆",
    pengpeng: "蓬蓬果",
}

export const usagesResonance = {
    doubleAnemo: "双风",
}

Object.defineProperty(Array.prototype, 'union', {
    value: function (...arrays) {
        return arrays.reduce((sum, a) => sum = sum.concat(a.filter(e => !sum.includes(e))), this)
    }
})

const geoBreakers = GS.weapons.claymore.union(
   GS.elements.geo,
   [ "klee", "yanfei" ]
)

const frozenBreakers = GS.elements.pyro.union(
    GS.weapons.claymore,
    [ "ningguang" ]
)

const single = {
    // nav
    iceSea: [ "kaeya", "ayaka" ],
    tall: [ "diluc", "tartaglia" , "kaeya", "zhongli" ],
    happyClimb: [ "venti", "keqing", "kazuha" ],
    short: [ "diona", "klee", "qiqi", "sayu" ],
    // combat
    shield: [ "xinyan", "diona", "noelle", "zhongli" ],
    heal: [ "bennett", "barbara", "qiqi", "diona", "jean", "noelle", "sayu", "kokomi" ],
    shootHigh: GS.weapons.bow,
    shootTower: [ "ganyu" ],
    happyPick: [ "venti", "kazuha" ],
    vinPlataGusha: GS.elements.pyro,
    vinPlataSada: geoBreakers,
    vinPlataLata: GS.elements.pyro,
    amCryoShield: frozenBreakers.union(GS.elements.electro),
    amPyroShield: GS.elements.hydro.union(GS.elements.electro),
    amHydroShield: GS.elements.cryo.union(GS.elements.electro),
    amElectroShield: GS.elements.pyro.union(GS.elements.cryo, GS.elements.hydro),
    fatuiCryoShield: GS.elements.pyro,
    fatuiPyroShield: GS.elements.hydro,
    fatuiElectroShield: GS.elements.cryo,
    fatuiGeoShield: geoBreakers,
    electroHypostasis: GS.elements.pyro.union(GS.elements.cryo),
    geoHypostasis: geoBreakers,
    // material
    tree: GS.weapons.sword.union(GS.weapons.claymore, GS.weapons.polearm),
    mine: geoBreakers,
    dandelion: GS.elements.anemo,
    flamingFlower: GS.elements.hydro.union(GS.elements.cryo),
    mistFlower: GS.elements.pyro,
    electroCrystal: GS.elements.pyro,
    crystalCore: [ "sayu" ],
    fowl: [ "ganyu", "sara", "aloy" ],
    coldPig: GS.elements.pyro,
    sakura: GS.elements.electro,
    // puzzle
    manhole: [ "traveler(geo)", "zhongli", "ningguang", "albedo", "klee", "amber", "ganyu", "mona", "fischl" ],
    manholeDetach: [ "traveler(geo)", "zhongli", "ningguang", "albedo", "klee" ],
    windmill: GS.elements.anemo,
    lighter: GS.elements.pyro,
    gushaChest: GS.elements.pyro,
    sadaChest: geoBreakers,
    lataChest: GS.elements.pyro,
    bigRocks: geoBreakers,
    smallRocks: geoBreakers,
    electroRocks: GS.elements.pyro.union(GS.elements.hydro, GS.elements.anemo, GS.elements.cryo, GS.elements.geo),
    anemoSeed: GS.elements.anemo,
    geoSeed: geoBreakers,
    shootBomb: GS.weapons.bow,
    shootAnemoSlime: GS.weapons.bow,
    pengpeng: GS.weapons.bow,
}

const doubleProviders = {
    doubleAnemo(team, box, jobplace) {
        let anemoCount = team.filter(g => GS.elements.anemo.includes(g)).length
        if (anemoCount >= 2) {
            return [ team ]
        }

        let anemoBox = box.filter(g => GS.elements.anemo.includes(g))
        if (anemoCount == 1 && jobplace >= 1) {
            return anemoBox.map(g => team.concat(g))
        }

        if (anemoCount == 0 && jobplace >= 2) {
            let doubleAnemoBox = anemoBox.reduce((res, g1, i) => res.concat(anemoBox.slice(i + 1).map(g2 => [ g1, g2 ])), [])
            return doubleAnemoBox.map(gg => team.concat(gg))
        }

        return []
    },
}

function checkSingle(usage, team) {
    var sols = single[usage]
    return team.some(girl => sols.includes(girl))
}

function provideSingle(team, usage, box, jobplace) {
    if (checkSingle(usage, team)) {
        return [ team ]
    }

    if (jobplace <= 0) {
        return []
    }

    return single[usage].filter(girl => box.includes(girl)).map(g => team.concat(g))
}

function provideDouble(team, usage, box, jobplace) {
    return doubleProviders[usage](team, box, jobplace)
}

function removeSuperSets(teams) {
    for (let subsetSize = 1; subsetSize < 4; subsetSize++) {
        let subsets = teams.filter(t => t.length === subsetSize)
        for (let j in subsets) {
            let subset = subsets[j]
            for (let i = 0; i < teams.length; i++) {
                let team = teams[i]
                if (team.length > subsetSize && subset.every(girl => team.includes(girl))) {
                    teams.splice(i, 1)
                    i--
                }
            }
        }
    }
}

function removeMultipleTravelers(teams) {
    for (let i = 0; i < teams.length; i++) {
        let team = teams[i]
        if (team.filter(g => g.startsWith("traveler")).length >= 2) {
            teams.splice(i, 1)
            i--
        }
    }
}

function sortedTeamEqual(t1, t2) {
    return compareSortedTeam(t1, t2) === 0
}

function compareSortedTeam(t1, t2) {
    let lengthDiff = t1.length - t2.length
    if (lengthDiff != 0) {
        return lengthDiff
    }

    for (let i = 0; i < t1.length; i++) {
        if (t1[i] < t2[i]) {
            return -1
        }

        if (t1[i] > t2[i]) {
            return 1
        }
    }

    return 0
}

function sortAndDistinct(teams) {
    teams.forEach(t => t.sort())
    teams.sort(compareSortedTeam)
    for (let i = 1; i < teams.length; i++) {
        if (sortedTeamEqual(teams[i], teams[i - 1])) {
            teams.splice(i, 1)
            i--
        }
    }
}

function branchTeamByOneUsage(team, usage, box, jobplace) {
    if (usage in single) {
        return provideSingle(team, usage, box, jobplace)
    }

    return provideDouble(team, usage, box, jobplace)
}

function branchTeam(team, usages, box, jobplace) {
    if (usages.length == 0) {
        return [ team ] // all usages satisfied
    }

    let usage = usages[0]
    let tempTeams = branchTeamByOneUsage(team, usage, box, jobplace)
    let restUsages = usages.slice(1)
    let restBoxes = tempTeams.map(t => box.filter(g => !t.includes(g)))
    let restJobplaces = tempTeams.map(t => jobplace - (t.length - team.length))
    let teams = []
    for (let i = 0; i < tempTeams.length; i++) {
        let tempTeam = tempTeams[i]
        var nextTeams = branchTeam(tempTeam, restUsages, restBoxes[i], restJobplaces[i])
        teams = teams.concat(nextTeams)
    }

    removeSuperSets(teams)
    return teams
}

export function getRequiredTeamsWithXp(usages, box, xp) {
    // usages = usages.filter(u => !checkDouble(u, xp)).filter(u => !checkSingle(u, xp))
    // let teamsNoXp = getRequiredTeams(usages, box, 4 - xp.length)
    // sortAndDistinct(teamsNoXp)
    // return teamsNoXp.map(team => xp.concat(team))
    let teams = branchTeam(xp, usages, box, 4 - xp.length)
    removeMultipleTravelers(teams)
    sortAndDistinct(teams)
    return teams
}
