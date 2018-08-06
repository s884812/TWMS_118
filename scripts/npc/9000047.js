/*
@	Name: Chair item Gachapon
	AcarsiaSEA
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.haveItem(5680021)) {
	    cm.sendYesNo("You have some #bChair Gachapon Tickets#k there.\r\nWould you like to redeem for a random Chair??");
	} else {
	    cm.sendOk("You don't have any Chair gachapon tickets with you. Please get a Chair gachapon ticket before coming back to me. Thank you.");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	var item;
	if (Math.floor(Math.random() * 70) == 0) {
	    var rareList = new Array(03010014, 03010110, 03010131, 03010040);

	    item = cm.gainGachaponItem(rareList[Math.floor(Math.random() * rareList.length)], 1);
	} else {
	    var itemList = new Array(3010007, 3010045, 3010041, 3010101, 3010103, 3010130, 3010123, 3010144, 3010191, 3010340, 3010353, 3010006, 3010012, 3010046, 3010047, 3010049, 3010026, 3010056, 3010057, 3010058, 3010067, 3010102);
	    item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1);
	}
	if (item != -1) {
	    cm.gainItem(5680021, -1);
	    cm.sendOk("You have obtained #b#t" + item + "##k.");
	} else {
	    cm.sendOk("Please check your item inventory and see if you have any Chair Gachapon Ticket, or if the inventory is full.");
	}
	cm.safeDispose();
    }
}