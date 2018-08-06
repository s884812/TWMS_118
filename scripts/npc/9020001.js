var status = 0;

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
        cm.sendSimple("Hello, I am the Donation Party Quest NPC! I could let you enter if you have the entry coupon!"
        +"#k\r\n#L1#Pay coupon and enter the DPQ!");
        } else if (selection == 1) {
        if(cm.haveItem(5220001, 1)) {
	cm.gainItem(5220001, -1);
        cm.warp(910340100, 0);
        cm.sendOk("Welcome to the donation PQ Map. Please use @checkdrop to check the items offered in the PQ map.");
        }
        else {
        cm.sendOk("You don't have the entry coupon.");
        }       }
        }
        }