/**
	Warrior Job Instructor - Warrior's Rocky Mountain (108000300)
**/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.gainItem(4031012);
	    cm.completeQuest(100004);
	    cm.startQuest(100005);
	    cm.sendOk("You're a true hero! Take this and Dances with Balrog will acknowledge you.");
    } else if (status == 1) {
	cm.gainItem(4031012, 1);
	cm.warp(102000000, 0);
	cm.dispose();
    }
}	