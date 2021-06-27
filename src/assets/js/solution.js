import * as GS from "./genshin.js"

export const usagesNav = {
    iceSea: "凝冰渡海",
    tall: "大长腿",
    happyClimb: "快乐爬山",
    short: "钻小洞",
}

export const usagesCombat = {
    shield: "一键上盾",
    heal: "奶妈",
    shootHigh: "高台对狙",
    shootTower: "每日拆塔",
    happyPick: "快乐捡掉落",
    vinPlataGusha: "丘丘人木盾",
    vinPlataSada: "丘丘人岩盾",
    vinPlataLata: "丘丘人冰盾",
    amCryoShield: "深渊法师冰盾",
    amPyroShield: "深渊法师火盾",
    amHydroShield: "深渊法师水盾",
    fatuiCryoShield: "愚人众冰甲",
    fatuiPyroShield: "愚人众火甲",
    fatuiElectroShield: "愚人众雷甲",
    fatuiGeoShield: "愚人众岩甲",
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
    manhole: "小压力板脱身",
    manholeDetach: "大压力板脱身",
    windmill: "风车机关",
    lighter: "点火把",
    gushaChest: "草箱子",
    sadaChest: "岩箱子",
    lataChest: "冰箱子",
    bigRocks: "石墙",
    smallRocks: "小石堆",
    anemoSeed: "风种子一顶仨",
    geoSeed: "岩种子",
    shootBomb: "射炸药桶",
    shootAnemoSlime: "射轨道风史莱姆",
    pengpeng: "蓬蓬果",
}

export const usagesResonance = {
    doubleAnemo: "双风",
}

const geoBreakers = GS.weapons.claymore.concat(
   GS.elements.geo,
   [ "klee", "yanfei" ]
)

const frozenBreakers = geoBreakers.concat(GS.elements.pyro)

const single = {
    // nav
    iceSea: [ "kaeya" ],
    tall: [ "diluc", "tartaglia" , "kaeya", "zhongli" ],
    happyClimb: [ "venti", "keqing" ],
    short: [ "diona", "klee", "qiqi" ],
    // combat
    shield: [ "xinyan", "diona", "zhongli" ],
    heal: [ "bennett", "barbara", "qiqi", "diona", "jean", "noelle" ],
    shootHigh: GS.weapons.bow,
    shootTower: [ "ganyu" ],
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
    fatuiGeoShield: geoBreakers,
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
    manhole: [ "traveler(geo)", "zhongli", "ningguang", "albedo", "klee", "amber", "ganyu", "mona", "fischl" ],
    manholeDetach: [ "traveler(geo)", "zhongli", "ningguang", "albedo", "klee" ],
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