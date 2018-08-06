/* Natalie
 Henesys VIP Hair/Hair Color Change.
 */
var status = -1;
var beauty = 0;
var hair_Colo_new;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }

    if (status == 0) {
        cm.sendSimple("我是美髮店店長娜塔麗。如果你有#b#t5150001##k或#b#t5151001##k，就來我這裡做個頭髮吧？請選擇你要做的項目。\r\n#L0#更換髮型: #i5150001##t5150001##l\r\n#L1#染色: #i5151001##t5151001##l");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            beauty = 1;

            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [30030, 30020, 30000, 30310, 30330, 30060, 30150, 30410, 30210, 30140, 30120, 30200];
            } else {
                hair_Colo_new = [31050, 31040, 31000, 31150, 31310, 31300, 31160, 31100, 31410, 31030, 31080, 31070];
            }
            for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            hair_Colo_new = cm.getCanHair(hair_Colo_new);
            cm.askAvatar("我能把你現在的髮型變成全新的髮型。你對現在的髮型不厭倦嗎?只要你有#b#t5150001##k，我就幫你換髮型，慢慢挑選你想要的髮型吧~。", hair_Colo_new);
        } else if (selection == 1) {
            var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
            hair_Colo_new = [];
            beauty = 2;

            for (var i = 0; i < 8; i++) {
                hair_Colo_new[i] = currenthaircolo + i;
            }
            hair_Colo_new = cm.getCanHair(hair_Colo_new);
            cm.askAvatar("我能把你現在的頭髮換個顏色。你對現在的髮色不厭倦嗎? 只要你有#b#t51051001##k，我就幫你染發。慢慢挑選你想要的發色吧！~", hair_Colo_new);
        }
    } else if (status == 2) {
        if (beauty == 1) {
            if (cm.setAvatar(5150001, hair_Colo_new[selection]) == 1) {
                cm.sendOk("享受你的新髮型吧!");
            } else {
                cm.sendOk("呃...你好像沒有我們理髮店的專用理髮卡啊？...很抱歉，沒有理髮卡的話，我不能給你做頭髮...");
            }
        } else {
            if (cm.setAvatar(5151001, hair_Colo_new[selection]) == 1) {
                cm.sendOk("享受你的新髮色吧!");
            } else {
                cm.sendOk("呃...你好像沒有我們理髮店的專用染色卡啊？...很抱歉，沒有染色卡的話，我不能給你做染色...");
            }
        }
        cm.dispose();
    }
}
