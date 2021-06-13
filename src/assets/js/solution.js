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
}