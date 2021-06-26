import * as GS from "./genshin.js"

export const usagesNav = {
    iceSea: "凝冰渡海",
    tall: "腿长",
    happyClimb: "快乐爬山",
    short: "钻小洞",
}

export const usagesCombat = {
    shield: "一键上盾",
    heal: "奶妈",
    shootHigh: "高台对狙",
    happyPick: "快乐捡掉落",
    vinPlataGusha: "丘丘人木盾",
    vinPlataSada: "丘丘人岩盾",
    vinPlataLata: "丘丘人冰盾",
    amCryoShield: "深渊法师冰盾",
    amPyroShield: "深渊法师火盾",
    amHydroShield: "深渊法师水盾",
    fatuiCryoShield: "愚人众冰盾",
    fatuiPyroShield: "愚人众火盾",
    fatuiElectroShield: "愚人众雷盾",
    electroHypostasis: "无相之雷元素块",
    geoHypostasis: "无相之岩柱子",
    // hili shields
}

export const usagesMaterial = {
    tree: "砍树",
    dandelion: "蒲公英",
    flamingFlower: "烈焰花",
    mistFlower: "冰雾花",
    electroCrystal: "电气水晶",
    crystalCore: "晶碟",
    mine: "挖矿",
    fowl: "收鸽子",
    coldPig: "冷鲜肉",
}

export const usagesPuzzle = {
    manhole: "压力板",
    windmill: "风车机关",
    lighter: "点火把",
    gushaChest: "草箱子",
    sadaChest: "岩箱子",
    lataChest: "冰箱子",
    bigRocks: "石墙",
    smallRocks: "小石堆",
    anemoSeed: "快速触发风种子",
    geoSeed: "岩种子",
    shootBomb: "射炸药桶",
    pengpeng: "蓬蓬果",
}

const geoBreakers = GS.weapons.claymore.concat(
   GS.elements.geo,
   [ "klee", "yanfei" ]
)

const frozenBreakers = geoBreakers.concat(GS.elements.pyro)

export const single = {
    // nav
    iceSea: [ "kaeya" ],
    tall: [ "diluc", "tartaglia" , "kaeya", "zhongli" ],
    happyClimb: [ "venti", "keqing" ],
    short: [ "diona", "klee", "qiqi" ],
    // combat
    shield: [ "xinyan", "diona", "zhongli" ],
    heal: [ "bennett", "barbara", "qiqi", "diona", "jean", "noelle" ],
    shootHigh: GS.weapons.bow,
    happyPick: [ "venti" ],
    vinPlataGusha: GS.elements.pyro,
    vinPlataSada: geoBreakers,
    vinPlataLata: frozenBreakers,
    amCryoShield: frozenBreakers.concat(GS.elements.electro),
    amPyroShield: GS.elements.hydro.concat(GS.elements.electro),
    amHydroShield: GS.elements.cryo.concat(GS.elements.electro),
    fatuiCryoShield: GS.elements.pyro,
    fatuiPyroShield: GS.elements.hydro,
    fatuiElectroShield: GS.elements.cryo,
    electroHypostasis: GS.elements.pyro.concat(GS.elements.cryo),
    geoHypostasis: geoBreakers,
    // material
    tree: GS.weapons.sword.concat(GS.weapons.claymore, GS.weapons.polearm),
    dandelion: GS.elements.anemo,
    flamingFlower: GS.elements.hydro.concat(GS.elements.cryo),
    mistFlower: GS.elements.pyro,
    electroCrystal: GS.elements.pyro,
    crystalCore: [ "sayu" ],
    mine: geoBreakers,
    fowl: [ "ganyu" ],
    coldPig: GS.elements.pyro,
    // puzzle
    manhole: [ "traveler(geo)", "zhongli" ],
    windmill: GS.elements.anemo,
    lighter: GS.elements.pyro,
    gushaChest: GS.elements.pyro,
    sadaChest: geoBreakers,
    lataChest: GS.elements.pyro,
    bigRocks: geoBreakers,
    smallRocks: geoBreakers,
    anemoSeed: GS.elements.anemo,
    geoSeed: geoBreakers,
    shootBomb: GS.weapons.bow,
    pengpeng: GS.weapons.bow,
}

function checkSingle(usage, team) {
    var sols = single[usage]
    return team.some(girl => sols.includes(girl))
}

function provideSingle(usage, box) {
    var sols = single[usage]
    return sols.filter(girl => box.includes(girl))
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

function getRequiredTeams(usages, box, jobplace) {
    if (usages.length == 0) {
        return [[]] // a result which includes one team that has no required character
    }

    if (jobplace <= 0) {
        return [] // has job, no place
    }

    var usage = usages[0]
    var restUsages = usages.slice(1)
    var cands = provideSingle(usage, box)
    if (cands.length == 0) {
        return [] // no girl to satisfy usage
    }

    var restBoxes = cands.map(cand => box.filter(b => b !== cand))

    var teams = []
    for (var i = 0; i < cands.length; i++) {
        var cand = cands[i]
        var restMissing = restUsages.filter(u => !checkSingle(u, [cand]))
        var nextTeams = getRequiredTeams(restMissing, restBoxes[i], jobplace - 1)
        teams = teams.concat(nextTeams.map(t => t.concat(cand)))
    }

    removeSuperSets(teams)
    return teams
}

export function getRequiredTeamsWithXp(usages, box, xp) {
    usages = usages.filter(u => !checkSingle(u, xp))
    let teamsNoXp = getRequiredTeams(usages, box, 4 - xp.length)
    sortAndDistinct(teamsNoXp)
    return teamsNoXp.map(team => xp.concat(team))
}