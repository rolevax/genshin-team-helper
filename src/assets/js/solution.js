import * as GS from "./genshin.js"

export const single = {
    iceSea: [ "kaeya" ],
    tall: [ "diluc", "tartaglia" , "kaeya", "zhongli" ],
    happyClimb: [ "venti", "keqing" ],
    short: [ "diona", "klee", "qiqi" ],
    shield: [ "xinyan", "diona", "zhongli" ],
    heal: [ "bennett", "barbara", "qiqi", "diona", "jean", "noelle" ],
    shootHigh: GS.weapons.bow,
    happyPick: [ "venti" ],
    amCryoShield: GS.elements.pyro.concat(GS.elements.electro),
    amPyroShield: GS.elements.hydro.concat(GS.elements.electro),
    amHydroShield: GS.elements.cryo.concat(GS.elements.electro),
    fatuiCryoShield: GS.elements.pyro,
    fatuiPyroShield: GS.elements.hydro,
    fatuiElectroShield: GS.elements.cryo,
    electroHypostasis: GS.elements.pyro.concat(GS.elements.cryo),
    tree: GS.weapons.sword.concat(GS.weapons.claymore, GS.weapons.polearm),
    dandelion: GS.elements.anemo,
    flamingFlower: GS.elements.hydro.concat(GS.elements.cryo),
    mistFlower: GS.elements.pyro,
    electroCrystal: GS.elements.pyro,
    crystalCore: [ "sayu" ],
    mine: GS.weapons.claymore.concat([ "zhongli", "ningguang", "klee" ]),
    fowl: [ "ganyu" ]
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
    return getRequiredTeams(usages, box, 4 - xp.length).map(team => xp.concat(team))
}