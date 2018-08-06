
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
        cm.sendSimple("HI im the KING OF FRAGMENTS! Let's exchange your fragments to some of my fantastic stuffs!"
        +"#k\r\n#L1#Trade 10 #v2430481# for 1 #v5062002#"
        +"#k\r\n#L2#Trade 100 #v2430481# for 10 #v5062002#"
        +"#k\r\n#L3#Trade 100 #v2430481# for 1 #v2049402#");
        } else if (selection == 1) {
        if(cm.haveItem(2430481, 10)) {
        cm.gainItem(5062002, 1);
        cm.gainItem(2430481, -10);
        cm.sendOk("Thanks, here is your 1 #v5062002#.");
        }
        else {
        cm.sendOk("You don't have enough fragments!");
        }
        } else if (selection == 2) {
        if(cm.haveItem(2430481, 100)) {
        cm.gainItem(5062002, 10);
        cm.gainItem(2430481, -100);
        cm.sendOk("Thanks, here is your 10 #v2430481#.");
        }
        else {
        cm.sendOk("You don't have enough fragments!");
        }
        } else if (selection == 3) {
        if(cm.haveItem(2430481, 100)) {
        cm.gainItem(2049402, 1);
        cm.gainItem(2430481, -100);
        cm.sendOk("Thanks, here is your 1 #v2049402#.");
        }
        else {
        cm.sendOk("You don't have enough fragment!");
        }
        } else if (selection == 4) {
        if(cm.haveItem(4001126, 1)) {
        cm.gainItem(4001126, -1);
        cm.gainMeso(100000000);
        cm.sendOk("Thanks, here are your mesos.");
        }
        else {
        cm.sendOk("You don't have a #v4001126#!");
        }
        }
        }
        }