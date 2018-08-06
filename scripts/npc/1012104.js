/* Brittany
	Henesys Random Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("我是理髮店助手伯麗特。如果你有#b#t5150010##k或#b#t5151000##k，在我這裡做個頭髮吧？? \r\n#L0#更換发型: #i5150000##t5150000##l\r\n#L1#染色: #i5151000##t5151000##l");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [30310, 30330, 30060, 30150, 30410, 30210, 30140, 30120, 30200, 30560, 30510, 30610, 30470];
	    } else {
		hair_Colo_new = [31150, 31310, 31300, 31160, 31100, 31410, 31030, 31080, 31070, 31610, 31350, 31510, 31740];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
            hair_Colo_new = cm.getCanHair(hair_Colo_new);
	    cm.sendYesNo("使用美髮店一般會員卡可以隨機更換髮型。你確定要使用#b#t5150010##k更換髮型嗎?");

	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
            hair_Colo_new = cm.getCanHair(hair_Colo_new);
	    cm.sendYesNo("使用染色一般會員卡可以隨機更換髮色。你確定要使用#b#t5151000##k更換髮色嗎??");
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setRandomAvatar(5150000, hair_Colo_new) == 1) {
		cm.sendOk("享受你的新髮型吧!");
	    } else {
		cm.sendOk("呃...你好像沒有我們理髮店的專用理髮卡啊？...很抱歉，沒有理髮卡的話，我不能給你做頭髮...");
	    }
	} else {
	    if (cm.setRandomAvatar(5151000, hair_Colo_new) == 1) {
		cm.sendOk("享受你的新髮色吧!");
	    } else {
		cm.sendOk("呃...你好像沒有我們理髮店的專用染色卡啊？...很抱歉，沒有染色卡的話，我不能給你做染色...");
	    }
	}
	cm.safeDispose();
    }
}
