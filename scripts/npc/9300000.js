
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
        status++;
        else
        status--;
        if(status == 0) {
        cm.sendSimple("Im a rich monk, Hou Yi shot down suns and im collecting them, Offering 18 Cash for each Sun!"
        +"#k\r\n#L1#Trade 10 #v4001246# for 180 Cash"
        +"#k\r\n#L2#Trade 100 #v4001246# for 1,800 Cash"
        +"#k\r\n#L3#Trade 1000 #v4001246# for 18,000 Cash"
        +"#k\r\n#L4#Trade 10000 #v4001246# for 180,000 Cash");

        } else if (selection == 1) {
        if(cm.haveItem(4001246, 10)) {
	cm.getPlayer().modifyCSPoints(1, 180);
        cm.gainItem(4001246, -10);
        cm.sendOk("Thanks, here is your 180 Cash.");
        }
        else {
        cm.sendOk("You don't have enough suns!");
        }
        } else if (selection == 2) {
        if(cm.haveItem(4001246, 100)) {
	cm.getPlayer().modifyCSPoints(1, 1800);
        cm.gainItem(4001246, -100);
        cm.sendOk("Thanks, here is your 1,800 Cash.");
        }
        else {
        cm.sendOk("You don't have enough suns!");
        }
        } else if (selection == 3) {
        if(cm.haveItem(4001246, 1000)) {
	cm.getPlayer().modifyCSPoints(1, 18000);
        cm.gainItem(4001246, -1000);
        cm.sendOk("Thanks, here is your 18,000 NX.");
        }
        else {
        cm.sendOk("You don't have enough suns!");
        }
        } else if (selection == 4) {
        if(cm.haveItem(4001246, 10000)) {
	cm.getPlayer().modifyCSPoints(1, 180000);
        cm.gainItem(4001246, -10000);
        cm.sendOk("Thanks, here is your 180,000 NX.");
        }
        else {
        cm.sendOk("You don't have enough suns!");
        }
        }
        }
        }