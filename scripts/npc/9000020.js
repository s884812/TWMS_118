/*
 NPC Name: 		Spinel
 Map(s): 		Victoria Road : Henesys (100000000), Victoria Road : Ellinia (101000000), Victoria Road : Perion (102000000), Victoria Road : Kerning City (103000000), Victoria Road : Lith Harbor (104000000), Orbis : Orbis (200000000), Ludibrium : Ludibrium (220000000), Leafre : Leafre (240000000), Zipangu : Mushroom Shrine (800000000)
 Description: 		World Tour Guide
 */

var status = -1;
var cost, sel;
var togo1, togo2, togo3, togo4, togo5;
var map;
var back = true;

function start() {
    switch (cm.getMapId()) {
        case 800000000:
        case 500000000:
        case 501000000:
        case 701000000:
        case 702000000:
        case 740000000:
            map = cm.getSavedLocation("WORLDTOUR");
            cm.sendSimple("怎麼樣的旅遊你享受了嗎？ \n\r #b#L0#我還可以去哪邊?#l \n\r #L1#我旅行完了,我要回去#m" + map + "##l");
            break;
        default:
            back = false;
            if (cm.getJob() == 0 || cm.getJob() == 1000 || cm.getJob() == 2000 || cm.getJob() == 2001) {
                cm.sendNext("如果對疲倦的生活厭煩了，何不去旅行呢？不僅可以感受別的文化,還能學到很多知識！向您推薦由我們楓之谷旅行社準備的#b世界旅行#k!擔心會有很大爛夠嗎？請不必擔心，我們的\r\n#b楓之谷世界旅行#k! 只需 #b300 楓幣#k就可以。");
                cost = 300;
            } else {
                cm.sendNext("如果對疲倦的生活厭煩了，何不去旅行呢？不僅可以感受別的文化,還能學到很多知識！向您推薦由我們楓之谷旅行社準備的#b世界旅行#k!擔心會有很大爛夠嗎？請不必擔心，我們的\r\n#b楓之谷世界旅行#k! 只需 #b3000 楓幣#k就可以。");
                cost = 3000;
            }
            break;
    }
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if ((status <= 2 && mode == 0) || (status == 4 && mode == 1)) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (!back) {
            if (status == 0) {
                cm.sendSimple("目前我們提供這幾個地方請問你想去哪裡?:\r\n#b古代神社(日本)#k. \r\n#L0##b 是，我想要去日本的古代神社#k#l");
            } else if (status == 1) {
                cm.sendYesNo("請問你想前往 #b古代神社(日本)#k?\r\n想要去這裡旅行嗎?如果想感受一下日本的精隨，擁有日本特有情懷的神社是最好不過的了。古代神社是供奉著古代傳說中上古神仙的神祕地方。");
            } else if (status == 2) {
                if (cm.getMeso() < cost) {
                    cm.sendPrev("請確認身上楓幣是否足夠");
                } else {
                    cm.gainMeso(-cost);
                    cm.saveLocation("WORLDTOUR");
                    cm.warp(800000000, 0);
                    cm.dispose();
                }
            }
        } else {
            if (status == 0) {
                if (selection == 0) {
                    switch (cm.getMapId()) {
                        case 740000000:
                            togo1 = 800000000;
                            togo2 = 701000000;
                            togo3 = 500000000;
                            togo4 = 702000000;
                            togo5 = 501000000;
                        case 500000000:
                            togo1 = 800000000;
                            togo2 = 701000000;
                            togo3 = 740000000;
                            togo4 = 702000000;
                            togo5 = 501000000;
                            break;
                        case 800000000:
                            togo1 = 701000000;
                            togo2 = 500000000;
                            togo3 = 740000000;
                            togo4 = 702000000;
                            togo5 = 501000000;
                            break;
                        case 701000000:
                            togo1 = 500000000;
                            togo2 = 800000000;
                            togo3 = 740000000;
                            togo4 = 702000000;
                            togo5 = 501000000;
                            break;
                        case 702000000:
                            togo1 = 500000000;
                            togo2 = 701000000;
                            togo3 = 740000000;
                            togo4 = 800000000;
                            togo5 = 501000000;
                            break;
                        case 501000000:
                            togo1 = 500000000;
                            togo2 = 701000000;
                            togo3 = 740000000;
                            togo4 = 800000000;
                            togo5 = 702000000;
                            break;
                    }
                    cm.sendSimple("選擇你想要的旅行地點? \n\r #b#L0##m" + togo1 + "# (3,000 楓幣)#l \n\r #L1##m" + togo2 + "# (3,000 楓幣)#l \n\r #L2##m" + togo3 + "# (3,000 楓幣)#l \n\r #L3##m" + togo4 + "# (3,000 楓幣)#l \r\n#L4##m" + togo5 + "# (3,000 楓幣)#l");

                } else if (selection == 1) {
                    cm.warp(map == -1 ? 100000000 : map);
                    cm.clearSavedLocation("WORLDTOUR");
                    cm.dispose();
                }
            } else if (status == 1) {
                sel = selection;
                if (sel == 0) {
                    cm.sendNext("你想要去這個地方旅行? #b#m" + togo1 + "##k? 我將帶你去只需要 #b3,000 楓幣#k. 你現在願意去?");
                } else if (sel == 1) {
                    cm.sendNext("你想要去這個地方旅行? #b#m" + togo2 + "##k? 我將帶你去只需要 #b3,000 楓幣#k. 你現在願意去?");
                } else if (sel == 2) {
                    cm.sendNext("你想要去這個地方旅行? #b#m" + togo3 + "##k? 我將帶你去只需要 #b3,000 楓幣#k. 你現在願意去?");
                } else if (sel == 3) {
                    cm.sendNext("你想要去這個地方旅行? #b#m" + togo4 + "##k? 我將帶你去只需要 #b3,000 楓幣#k. 你現在願意去?");
                } else if (sel == 4) {
                    cm.sendNext("你想要去這個地方旅行? #b#m" + togo5 + "##k? 我將帶你去只需要 #b3,000 楓幣#k. 你現在願意去?");
                }
            } else if (status == 2) {
                if (sel == 0) {
                    cm.warp(togo1);
                } else if (sel == 1) {
                    cm.warp(togo2);
                } else if (sel == 2) {
                    cm.warp(togo3);
                } else if (sel == 3) {
                    cm.warp(togo4);
                } else if (sel == 4) {
                    cm.warp(togo5);
                }
                cm.dispose();
            }
        }
    }
}