(function(e){function t(t){for(var l,i,u=t[0],o=t[1],c=t[2],f=0,d=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);b&&b(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],l=!0,u=1;u<n.length;u++){var o=n[u];0!==a[o]&&(l=!1)}l&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var l={},a={app:0},r=[];function i(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=l,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(n,l,function(t){return e[t]}.bind(null,l));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/genshin-team-helper/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var b=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04a7":function(e,t,n){},"195a":function(e,t,n){},"1b4e":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},"3ada":function(e,t,n){"use strict";n("04a7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var l=n("7a23"),a=n("1b4e"),r=n.n(a),i=n("c88f"),u=n.n(i),o=Object(l["m"])("h1",null,"原神大世界配队助手",-1),c=Object(l["l"])(" 民间制作，更新于 2021-07-11，同步至 1.6 万叶池 "),b=Object(l["m"])("span",null,"勾选需要的功能，结合 BOX 与 XP，自动计算配队方案",-1),f=Object(l["m"])("h3",null,"功能选项收录原则",-1),d=Object(l["m"])("ul",null,[Object(l["m"])("li",null,"本工具的目的是让开荒或锄地更加舒适，减少更换队伍配置的次数。"),Object(l["m"])("li",null,"元素方碑这种没办法的情况，不在考虑范围内。"),Object(l["m"])("li",null," 选项对应需求，而非手段。 例如，射炸药桶和蓬蓬果，都等价于弓，但因为是两种事情，所以不能合并为一个选项。 ")],-1),j=Object(l["m"])("h3",null,"如何判断某角色是否具备某功能",-1),m=Object(l["m"])("ul",null,[Object(l["m"])("li",null,"以血压不升高为准。例如，单手剑可以刮冰盾，但血压会升高，因此不计入可破冰盾的范围。"),Object(l["m"])("li",null,"每个人的易怒程度不同，本工具会尽可能保持中庸。"),Object(l["m"])("li",null,"有普遍分歧的，提供选项开关。"),Object(l["m"])("li",null,"许多角色都可以用 Q 或偷袭收鸽子，但因为不能保证每次看到鸽子都是满能量，偷袭也不一定成功，仍会导致血压升高，所以不计入。"),Object(l["m"])("li",null," 旅行者以外的五星角色及御三家默认零命；御三家以外的四星角色及旅行者默认六命。 功能性因命之座产生变化时，提供选项开关。 ")],-1),s=Object(l["m"])("h3",null,"已知问题",-1),O=Object(l["m"])("ul",null,[Object(l["m"])("li",null,"大长腿、快乐爬山、冰盾丘、冰法的功能定义尚无理论支持，当前逻辑是临时的。")],-1),g=Object(l["l"])("喵打出品，都是垃圾"),h=Object(l["m"])("a",{href:"https://github.com/rolevax/genshin-team-helper",target:"_blank"},[Object(l["m"])("img",{src:r.a})],-1),p=Object(l["m"])("img",{src:u.a},null,-1),y=Object(l["m"])("span",null,"709486713",-1);function v(e,t,n,a,r,i){var u=Object(l["M"])("el-divider"),v=Object(l["M"])("MainForm"),k=Object(l["M"])("el-collapse-item"),A=Object(l["M"])("el-collapse"),D=Object(l["M"])("el-space"),M=Object(l["M"])("el-dialog");return Object(l["D"])(),Object(l["i"])(l["b"],null,[Object(l["m"])("div",{style:{width:e.pageWidth,margin:"0 auto"}},[o,c,Object(l["m"])(u),b,Object(l["m"])(v),Object(l["m"])(A,null,{default:Object(l["bb"])((function(){return[Object(l["m"])(k,{title:"设计原则及已知问题",style:{"text-align":"left"}},{default:Object(l["bb"])((function(){return[f,d,j,m,s,O]})),_:1})]})),_:1}),Object(l["m"])(u,{style:{"margin-top":"64px"}},{default:Object(l["bb"])((function(){return[g]})),_:1}),Object(l["m"])(D,{wrap:""},{default:Object(l["bb"])((function(){return[h,Object(l["m"])("a",{onClick:t[1]||(t[1]=function(t){return e.qqDialogVisible=!0}),style:{cursor:"pointer"}},[p])]})),_:1})],4),Object(l["m"])(M,{title:"QQ 群",modelValue:e.qqDialogVisible,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.qqDialogVisible=t}),width:"30%"},{default:Object(l["bb"])((function(){return[y]})),_:1},8,["modelValue"])],64)}var k=Object(l["fb"])("data-v-ea82a304");Object(l["G"])("data-v-ea82a304");var A=Object(l["l"])(" 选择所有必须出场的角色，最多可选 4 人。 "),D=Object(l["l"])("钟离六命"),M=Object(l["l"])("法师带金珀"),w=Object(l["l"])("行秋算奶"),x=Object(l["l"])("更多选项敬请期待"),S=Object(l["l"])("冻结持盾丘"),_=Object(l["l"])("逆克制破元素盾"),P=Object(l["l"])("灌伤害破元素盾"),B=Object(l["l"])("超载破岩"),E=Object(l["l"])("兔兔伯爵破岩"),R=Object(l["l"])("更多选项敬请期待"),I=Object(l["l"])("单手剑挖矿"),Q=Object(l["l"])("甘雨凝冰渡海"),Z=Object(l["l"])("更多选项敬请期待"),T=Object(l["m"])("h2",null,"计算结果",-1),z=Object(l["l"])(" 没有满足全部功能的配队，请适当取舍 ");Object(l["E"])();var J=k((function(e,t,n,a,r,i){var u=Object(l["M"])("el-checkbox"),o=Object(l["M"])("el-form-item"),c=Object(l["M"])("el-checkbox-group"),b=Object(l["M"])("el-collapse-item"),f=Object(l["M"])("el-collapse"),d=Object(l["M"])("el-form");return Object(l["D"])(),Object(l["i"])("div",null,[Object(l["m"])(d,{refs:"form",model:r.form,"label-width":"80px",style:{"text-align":"left"}},{default:k((function(){return[Object(l["m"])(c,{modelValue:r.form.usages,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.form.usages=e})},{default:k((function(){return[Object(l["m"])(o,{label:"跑图"},{default:k((function(){return[(Object(l["D"])(!0),Object(l["i"])(l["b"],null,Object(l["K"])(r.usagesNav,(function(e,t){return Object(l["D"])(),Object(l["i"])(u,{key:t,label:t},{default:k((function(){return[Object(l["l"])(Object(l["Q"])(e),1)]})),_:2},1032,["label"])})),128))]})),_:1}),Object(l["m"])(o,{label:"战斗"},{default:k((function(){return[(Object(l["D"])(!0),Object(l["i"])(l["b"],null,Object(l["K"])(r.usagesCombat,(function(e,t){return Object(l["D"])(),Object(l["i"])(u,{key:t,label:t},{default:k((function(){return[Object(l["l"])(Object(l["Q"])(e),1)]})),_:2},1032,["label"])})),128))]})),_:1}),Object(l["m"])(o,{label:"元素共鸣"},{default:k((function(){return[(Object(l["D"])(!0),Object(l["i"])(l["b"],null,Object(l["K"])(r.usagesResonance,(function(e,t){return Object(l["D"])(),Object(l["i"])(u,{key:t,label:t},{default:k((function(){return[Object(l["l"])(Object(l["Q"])(e),1)]})),_:2},1032,["label"])})),128))]})),_:1}),Object(l["m"])(o,{label:"采集"},{default:k((function(){return[(Object(l["D"])(!0),Object(l["i"])(l["b"],null,Object(l["K"])(r.usagesMaterial,(function(e,t){return Object(l["D"])(),Object(l["i"])(u,{key:t,label:t},{default:k((function(){return[Object(l["l"])(Object(l["Q"])(e),1)]})),_:2},1032,["label"])})),128))]})),_:1}),Object(l["m"])(o,{label:"解密挑战"},{default:k((function(){return[(Object(l["D"])(!0),Object(l["i"])(l["b"],null,Object(l["K"])(r.usagesPuzzle,(function(e,t){return Object(l["D"])(),Object(l["i"])(u,{key:t,label:t},{default:k((function(){return[Object(l["l"])(Object(l["Q"])(e),1)]})),_:2},1032,["label"])})),128))]})),_:1})]})),_:1},8,["modelValue"]),Object(l["m"])(f,{accordion:""},{default:k((function(){return[Object(l["m"])(b,{title:"拥有用色及 XP 设置"},{default:k((function(){return[Object(l["m"])(o,{label:"拥有角色"},{default:k((function(){return[Object(l["m"])(c,{modelValue:r.form.box,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.form.box=e})},{default:k((function(){return[Object(l["m"])(o,{label:"火"},{default:k((function(){return[(Object(l["D"])(!0),Object(l["i"])(l["b"],null,Object(l["K"])(r.elements.pyro,(function(e){return Object(l["D"])(),Object(l["i"])(u,{key:e,label:e},{default:k((function(){return[Object(l["l"])(Object(l["Q"])(r.names[e]),1)]})),_:2},1032,["label"])})),128))]})),_:1}),Object(l["m"])(o,{label:"水"},{default:k((function(){return[(Object(l["D"])(!0),Object(l["i"])(l["b"],null,Object(l["K"])(r.elements.hydro,(function(e){return Object(l["D"])(),Object(l["i"])(u,{key:e,label:e},{default:k((function(){return[Object(l["l"])(Object(l["Q"])(r.names[e]),1)]})),_:2},1032,["label"])})),128))]})),_:1}),Object(l["m"])(o,{label:"雷"},{default:k((function(){return[(Object(l["D"])(!0),Object(l["i"])(l["b"],null,Object(l["K"])(r.elements.electro,(function(e){return Object(l["D"])(),Object(l["i"])(u,{key:e,label:e},{default:k((function(){return[Object(l["l"])(Object(l["Q"])(r.names[e]),1)]})),_:2},1032,["label"])})),128))]})),_:1}),Object(l["m"])(o,{label:"冰"},{default:k((function(){return[(Object(l["D"])(!0),Object(l["i"])(l["b"],null,Object(l["K"])(r.elements.cryo,(function(e){return Object(l["D"])(),Object(l["i"])(u,{key:e,label:e},{default:k((function(){return[Object(l["l"])(Object(l["Q"])(r.names[e]),1)]})),_:2},1032,["label"])})),128))]})),_:1}),Object(l["m"])(o,{label:"风"},{default:k((function(){return[(Object(l["D"])(!0),Object(l["i"])(l["b"],null,Object(l["K"])(r.elements.anemo,(function(e){return Object(l["D"])(),Object(l["i"])(u,{key:e,label:e},{default:k((function(){return[Object(l["l"])(Object(l["Q"])(r.names[e]),1)]})),_:2},1032,["label"])})),128))]})),_:1}),Object(l["m"])(o,{label:"岩"},{default:k((function(){return[(Object(l["D"])(!0),Object(l["i"])(l["b"],null,Object(l["K"])(r.elements.geo,(function(e){return Object(l["D"])(),Object(l["i"])(u,{key:e,label:e},{default:k((function(){return[Object(l["l"])(Object(l["Q"])(r.names[e]),1)]})),_:2},1032,["label"])})),128))]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),Object(l["m"])(o,{label:"性癖"},{default:k((function(){return[A,Object(l["m"])(c,{modelValue:r.form.xp,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.form.xp=e}),max:4},{default:k((function(){return[(Object(l["D"])(!0),Object(l["i"])(l["b"],null,Object(l["K"])(r.form.box,(function(e){return Object(l["D"])(),Object(l["i"])(u,{key:e,label:e},{default:k((function(){return[Object(l["l"])(Object(l["Q"])(r.names[e]),1)]})),_:2},1032,["label"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(l["m"])(b,{title:"角色细节设置（开发中）"},{default:k((function(){return[Object(l["m"])(o,{label:"治疗相关"},{default:k((function(){return[Object(l["m"])(u,{disabled:""},{default:k((function(){return[D]})),_:1}),Object(l["m"])(u,{disabled:""},{default:k((function(){return[M]})),_:1}),Object(l["m"])(u,{disabled:""},{default:k((function(){return[w]})),_:1}),Object(l["m"])(u,{disabled:""},{default:k((function(){return[x]})),_:1})]})),_:1})]})),_:1}),Object(l["m"])(b,{title:"操作习惯（开发中）"},{default:k((function(){return[Object(l["m"])(o,{label:"破盾相关"},{default:k((function(){return[Object(l["m"])(u,{disabled:""},{default:k((function(){return[S]})),_:1}),Object(l["m"])(u,{disabled:""},{default:k((function(){return[_]})),_:1}),Object(l["m"])(u,{disabled:""},{default:k((function(){return[P]})),_:1}),Object(l["m"])(u,{disabled:""},{default:k((function(){return[B]})),_:1}),Object(l["m"])(u,{disabled:""},{default:k((function(){return[E]})),_:1}),Object(l["m"])(u,{disabled:""},{default:k((function(){return[R]})),_:1})]})),_:1}),Object(l["m"])(o,{label:"其它"},{default:k((function(){return[Object(l["m"])(u,{disabled:""},{default:k((function(){return[I]})),_:1}),Object(l["m"])(u,{disabled:""},{default:k((function(){return[Q]})),_:1}),Object(l["m"])(u,{disabled:""},{default:k((function(){return[Z]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["model"]),T,0===i.teams.length?(Object(l["D"])(),Object(l["i"])(l["b"],{key:0},[z],64)):(Object(l["D"])(),Object(l["i"])(l["b"],{key:1},[Object(l["l"])(" 共 "+Object(l["Q"])(i.teams.length)+" 种方案，最少需要 "+Object(l["Q"])(i.teams[0].length)+" 名成员 ",1),Object(l["m"])("ul",null,[(Object(l["D"])(!0),Object(l["i"])(l["b"],null,Object(l["K"])(i.results,(function(e){return Object(l["D"])(),Object(l["i"])("li",{key:e},Object(l["Q"])(e),1)})),128))])],64))])})),W=(n("4de4"),n("4e82"),n("d81d"),n("a15b"),["amber","bennett","diluc","klee","xiangling","xinyan","hutao","yanfei","barbara","mona","xingqiu","tartaglia","beidou","fischl","keqing","lisa","razor","chongyun","kaeya","qiqi","diona","ganyu","rosaria","eula","jean","sucrose","venti","xiao","kazuha","traveler(anemo)","ningguang","noelle","zhongli","albedo","traveler(geo)"]),q={amber:"安柏",bennett:"班尼特",diluc:"迪卢克",klee:"可莉",xiangling:"香菱",xinyan:"辛焱",hutao:"胡桃",yanfei:"烟绯",barbara:"芭芭拉",mona:"莫娜",xingqiu:"行秋",tartaglia:"达达利亚",beidou:"北斗",fischl:"菲谢尔",keqing:"刻晴",lisa:"丽莎",razor:"雷泽",chongyun:"重云",kaeya:"凯亚",qiqi:"七七",diona:"迪奥娜",ganyu:"甘雨",rosaria:"罗莎莉亚",eula:"优菈",jean:"琴",sucrose:"砂糖",venti:"温迪",xiao:"魈",kazuha:"枫原万叶","traveler(anemo)":"风主",ningguang:"凝光",noelle:"诺艾尔",zhongli:"钟离",albedo:"阿贝多","traveler(geo)":"岩主",sayu:"早柚"},G={pyro:["amber","bennett","diluc","klee","xiangling","xinyan","hutao","yanfei"],hydro:["barbara","mona","xingqiu","tartaglia"],electro:["beidou","fischl","keqing","lisa","razor"],cryo:["chongyun","kaeya","qiqi","diona","ganyu","rosaria","eula"],anemo:["jean","sucrose","venti","xiao","kazuha","traveler(anemo)"],geo:["ningguang","noelle","zhongli","albedo","traveler(geo)"]},U={sword:["bennett","xingqiu","keqing","kaeya","qiqi","jean","kazuha","albedo","traveler(geo)","traveler(anemo)"],claymore:["diluc","xinyan","beidou","razor","chongyun","eula","noelle"],polearm:["xiangling","hutao","rosaria","xiao","zhongli"],bow:["amber","tartaglia","fischl","diona","ganyu","venti"],catalyst:["klee","yanfei","barbara","mona","lisa","sucrose","ningguang"]},N=(n("99af"),n("caad"),n("2532"),n("fb6a"),n("a434"),n("2ca0"),n("159b"),{iceSea:"凝冰渡海",tall:"大长腿",happyClimb:"快乐爬山",short:"钻小洞"}),Y={shield:"战技盾",heal:"奶妈",shootHigh:"高台对狙",shootTower:"每日拆塔",happyPick:"快乐捡掉落",vinPlataGusha:"木盾丘",vinPlataSada:"岩盾丘",vinPlataLata:"冰盾丘",amCryoShield:"冰法",amPyroShield:"火法",amHydroShield:"水法",fatuiCryoShield:"冰胖",fatuiPyroShield:"火铳",fatuiElectroShield:"雷锤",fatuiGeoShield:"岩枪",electroHypostasis:"无相之雷元素块",geoHypostasis:"无相之岩柱子"},C={tree:"砍树",mine:"挖矿",dandelion:"蒲公英",flamingFlower:"烈焰花",mistFlower:"冰雾花",electroCrystal:"电气水晶",crystalCore:"晶蝶",fowl:"收鸽子",coldPig:"冷鲜肉"},V={manhole:"小压力板脱身",manholeDetach:"大压力板脱身",windmill:"风车机关",lighter:"点火把",gushaChest:"草箱子",sadaChest:"岩箱子",lataChest:"冰箱子",bigRocks:"石墙",smallRocks:"小石堆",anemoSeed:"风种子",geoSeed:"岩种子",shootBomb:"射炸药桶",shootAnemoSlime:"奇怪的风史莱姆",pengpeng:"蓬蓬果"},H={doubleAnemo:"双风"};Object.defineProperty(Array.prototype,"union",{value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return e=e.concat(t.filter((function(t){return!e.includes(t)})))}),this)}});var F=U.claymore.union(G.geo,["klee","yanfei"]),X=G.pyro.union(U.claymore,["ningguang"]),L={iceSea:["kaeya"],tall:["diluc","tartaglia","kaeya","zhongli"],happyClimb:["venti","keqing","kazuha"],short:["diona","klee","qiqi"],shield:["xinyan","diona","noelle","zhongli"],heal:["bennett","barbara","qiqi","diona","jean","noelle"],shootHigh:U.bow,shootTower:["ganyu"],happyPick:["venti","kazuha"],vinPlataGusha:G.pyro,vinPlataSada:F,vinPlataLata:G.pyro,amCryoShield:X.union(G.electro),amPyroShield:G.hydro.union(G.electro),amHydroShield:G.cryo.union(G.electro),fatuiCryoShield:G.pyro,fatuiPyroShield:G.hydro,fatuiElectroShield:G.cryo,fatuiGeoShield:F,electroHypostasis:G.pyro.union(G.cryo),geoHypostasis:F,tree:U.sword.union(U.claymore,U.polearm),mine:F,dandelion:G.anemo,flamingFlower:G.hydro.union(G.cryo),mistFlower:G.pyro,electroCrystal:G.pyro,crystalCore:["sayu"],fowl:["ganyu"],coldPig:G.pyro,manhole:["traveler(geo)","zhongli","ningguang","albedo","klee","amber","ganyu","mona","fischl"],manholeDetach:["traveler(geo)","zhongli","ningguang","albedo","klee"],windmill:G.anemo,lighter:G.pyro,gushaChest:G.pyro,sadaChest:F,lataChest:G.pyro,bigRocks:F,smallRocks:F,anemoSeed:G.anemo,geoSeed:F,shootBomb:U.bow,shootAnemoSlime:U.bow,pengpeng:U.bow},K={doubleAnemo:function(e,t,n){var l=e.filter((function(e){return G.anemo.includes(e)})).length;if(l>=2)return[e];var a=t.filter((function(e){return G.anemo.includes(e)}));if(1==l&&n>=1)return a.map((function(t){return e.concat(t)}));if(0==l&&n>=2){var r=a.reduce((function(e,t,n){return e.concat(a.slice(n+1).map((function(e){return[t,e]})))}),[]);return r.map((function(t){return e.concat(t)}))}return[]}};function $(e,t){var n=L[e];return t.some((function(e){return n.includes(e)}))}function ee(e,t,n,l){return $(t,e)?[e]:l<=0?[]:L[t].filter((function(e){return n.includes(e)})).map((function(t){return e.concat(t)}))}function te(e,t,n,l){return K[t](e,n,l)}function ne(e){for(var t=function(t){var n=e.filter((function(e){return e.length===t}));for(var l in n)for(var a=n[l],r=function(n){var l=e[n];l.length>t&&a.every((function(e){return l.includes(e)}))&&(e.splice(n,1),n--),i=n},i=0;i<e.length;i++)r(i)},n=1;n<4;n++)t(n)}function le(e){for(var t=0;t<e.length;t++){var n=e[t];n.filter((function(e){return e.startsWith("traveler")})).length>=2&&(e.splice(t,1),t--)}}function ae(e,t){return 0===re(e,t)}function re(e,t){var n=e.length-t.length;if(0!=n)return n;for(var l=0;l<e.length;l++){if(e[l]<t[l])return-1;if(e[l]>t[l])return 1}return 0}function ie(e){e.forEach((function(e){return e.sort()})),e.sort(re);for(var t=1;t<e.length;t++)ae(e[t],e[t-1])&&(e.splice(t,1),t--)}function ue(e,t,n,l){return t in L?ee(e,t,n,l):te(e,t,n,l)}function oe(e,t,n,l){if(0==t.length)return[e];for(var a=t[0],r=ue(e,a,n,l),i=t.slice(1),u=r.map((function(e){return n.filter((function(t){return!e.includes(t)}))})),o=r.map((function(t){return l-(t.length-e.length)})),c=[],b=0;b<r.length;b++){var f=r[b],d=oe(f,i,u[b],o[b]);c=c.concat(d)}return ne(c),c}function ce(e,t,n){var l=oe(n,e,t,4-n.length);return le(l),ie(l),l}var be={name:"MainForm",data:function(){return{elements:G,names:q,usagesNav:N,usagesCombat:Y,usagesMaterial:C,usagesPuzzle:V,usagesResonance:H,form:{usages:[],coopUsages:[],box:W.filter((function(){return!0})),xp:[]}}},methods:{},computed:{teams:function(){var e=ce(this.form.usages,this.form.box,this.form.xp);return e.sort((function(e,t){return e.length-t.length})),e},results:function(){return this.teams.map((function(e){return e.map((function(e){return q[e]})).join(" + ")}))}}};n("a72e");be.render=J,be.__scopeId="data-v-ea82a304";var fe=be,de={name:"App",components:{MainForm:fe},data:function(){return{pageWidth:"100%",qqDialogVisible:!1}},mounted:function(){this.isMobile()||(this.pageWidth="720px")},methods:{isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},metaInfo:{title:"原神大地图配队助手 | 喵打"}};n("3ada");de.render=v;var je=de,me=n("3fd4"),se=(n("7dd6"),n("3ef0")),Oe=n.n(se),ge=function(e){e.use(me["a"],{locale:Oe.a})},he=Object(l["h"])(je);ge(he),he.mount("#app")},a72e:function(e,t,n){"use strict";n("195a")},c88f:function(e,t,n){e.exports=n.p+"img/qq-32px.4eda192b.png"}});
//# sourceMappingURL=app.5c2d9476.js.map