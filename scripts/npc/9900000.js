/*
	NPC Name: 		Kin
	Map(s): 		Victoria Road : Ellinia (180000000)
	Description: 		Changes your skin, hair, hair color, face and eye color for both male and female
*/

var status = 0;
var beauty = 0;
var facenew;
var colors;
var hairnew;
var haircolor;
var skin = Array(0, 1, 2, 3, 4, 5, 9, 10, 11);
var mface;
var mhair;
var fface;
var fhair;

function start() {
    status = -1;
    action(1, 0, 0);
	if (cm.isGMS()) {
		fhair = Array(34900, 34850, 34690, 34680, 34670, 34660, 34650, 34630, 34620, 34610, 34600, 34590, 34510, 34490, 34480, 34470, 34420, 34410, 34400, 34380, 34370, 34310, 34270, 34260, 34250, 34220, 34210, 34200, 34180, 34160, 34150, 34140, 31430, 34120, 34110, 34100, 34030, 33680, 34621);
		mhair = Array(36000, 33990, 33940, 33930, 33810, 33780, 33750, 33660, 33640, 33620, 33610, 33600, 33580, 33530, 33450, 33440, 33410, 33400, 33390, 33370, 33370, 33360, 33330, 33260, 33933, 33441, 33407, 34202, 34177);
		fface = Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21016, 21017, 21018, 21019, 21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029, 21030, 21031, 21034, 21035, 21038, 21041, 21042, 21044, 21046, 21047, 21052, 21053);
		mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029, 20030, 20031, 20032, 20036, 20037, 20040, 20044, 20045, 20048, 20049, 20050, 20052, 20053, 20055, 20056);
	} else {
		fhair = Array(34900, 34850, 34690, 34680, 34670, 34660, 34650, 34630, 34620, 34610, 34600, 34590, 34510, 34490, 34480, 34470, 34420, 34410, 34400, 34380, 34370, 34310, 34270, 34260, 34250, 34220, 34210, 34200, 34180, 34160, 34150, 34140, 31430, 34120, 34110, 34100, 34030, 33680, 34621);
		mhair = Array(36000, 33990, 33940, 33930, 33810, 33780, 33750, 33660, 33640, 33620, 33610, 33600, 33580, 33530, 33450, 33440, 33410, 33400, 33390, 33370, 33370, 33360, 33330, 33260, 33933, 33441, 33407, 34202, 34177);
		fface = Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21016, 21017, 21018, 21019, 21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029, 21030, 21031, 21034, 21035, 21038, 21041, 21042, 21044, 21046, 21047, 21052, 21053);
		mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029, 20030, 20031, 20032, 20036, 20037, 20040, 20044, 20045, 20048, 20049, 20050, 20052, 20053, 20055, 20056);
	}
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	/*if (cm.getPlayerStat("GM") == 0) {
	    cm.sendOk("Sorry, but only Game Masters with a GM Level of 5 or more can use this.");
	    cm.dispose();
	} else {*/
	    cm.sendSimple("Hey there! I could change the way you look! What would you like to change?\r\n#L0##bSkin#k#l\r\n#L1##bHair#k#l\r\n#L2##bHair Color#k#l\r\n#L3##bFace#k#l\r\n#L4##bEye Color#k#l");
	//}
    } else if (status == 1) {
 if (cm.getPlayerStat("GENDER") == 0) {
       if (selection == 0) {
		beauty = 1;
		cm.sendStyle("Pick a skin color that you would like.", skin);
	    } else if (selection == 1) {
		beauty = 2;
		hairnew = Array();
		for (var i = 0; i < mhair.length; i++) {
		    if (mhair[i] == 30010 || mhair[i] == 30070 || mhair[i] == 30080 || mhair[i] == 30090 || mhair[i] == 33140 || mhair[i] == 33240 || mhair[i] == 33180) {
			hairnew.push(mhair[i]);
		    } else {
			hairnew.push(mhair[i] + parseInt(cm.getPlayerStat("HAIR") % 10));
		    }
		}
		cm.sendStyle("Pick a hairstyle that you would like.", hairnew);
	    } else if (selection == 2) {
		beauty = 3;
		haircolor = Array();
		var current = parseInt(cm.getPlayerStat("HAIR") / 10) * 10;
		if (current == 30010 || current == 30070 || current == 30080 || current == 30090 || current == 33140 || current == 33240) {
		    haircolor.push(current);
		} else {
		    for (var i = 0; i < 8; i++) {
			haircolor.push(current + i);
		    }
		}
		cm.sendStyle("Pick a hair color that you would like.", haircolor);
	    } else if (selection == 3) {
		beauty = 4;
		facenew = Array();
		for (var i = 0; i < mface.length; i++) {
		    if (mface[i] == 20015 || mface[i] == 20025 || mface[i] == 20027 || mface[i] == 20029 || mface[i] == 20030 || mface[i] == 20031 || mface[i] == 20032 || mface[i] == 20056 || mface[i] == 20055 || mface[i] == 20048 || mface[i] == 20049) {
			facenew.push(mface[i]);
		    } else {
			facenew.push(mface[i] + cm.getPlayerStat("FACE") % 1000 - (cm.getPlayerStat("FACE") % 100));
		    }
		}
		cm.sendStyle("Pick a new face that you would like.", facenew);
	    } else if (selection == 4) {
		beauty = 5;
		var current = cm.getPlayerStat("FACE") % 100 + 20000;
		colors = Array();
		if (current == 20015 || current == 20025 || current == 20027 || current == 20029 || current == 20030 || current == 20031 || current == 20032 || current == 20056 || current == 20055 || current == 20048 || current == 20049) {
		    colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700);
		} else {
		    colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700, current + 800);
		}
		cm.sendStyle("Pick a eye color that you would like.", colors);
            } 
        
        
	} else {
	    if (selection == 0) {
		beauty = 1;
		cm.sendStyle("Pick a skin color that you would like.", skin);
	    } else if (selection == 1) {
		beauty = 2;
		hairnew = Array();
		for (var i = 0; i < fhair.length; i++) {
		    if (fhair[i] == 34160) {
			hairnew.push(fhair[i]);
		    } else {
		    	hairnew.push(fhair[i] + parseInt(cm.getPlayerStat("HAIR") % 10));
		    }
		}
		cm.sendStyle("Pick a hairstyle that you would like.", hairnew);
	    } else if (selection == 2) {
		beauty = 3;
		haircolor = Array();
		var current = parseInt(cm.getPlayerStat("HAIR") / 10) * 10;
		if (current == 34160) {
			haircolor.push(current);
		} else {
			for (var i = 0; i < 8; i++) {
		    		haircolor.push(current + i);
			}
		}
		cm.sendStyle("Pick a hair color that you would like.", haircolor);
	    } else if (selection == 3) {
		beauty = 4;
		facenew = Array();
		for (var i = 0; i < fface.length; i++) {
		    if (fface[i] == 21027 || fface[i] == 21028 || fface[i] == 21029 || fface[i] == 21030 || fface[i] == 21031 || fface[i] == 21053 || fface[i] == 21054 || fface[i] == 21046 || fface[i] == 21047) {
			facenew.push(fface[i]);
		    } else {
		    	facenew.push(fface[i] + cm.getPlayerStat("FACE") % 1000 - (cm.getPlayerStat("FACE") % 100));
		    }
		}
		cm.sendStyle("Pick new eyes that you would like.", facenew);
	    } else if (selection == 4) {
		beauty = 5;
		var current = cm.getPlayerStat("FACE") % 100 + 21000;
		colors = Array();
		if (current == 21027 || current == 21028 || current == 21029 || current == 21030 || current == 21031 || current == 21053 || current == 21054 || current == 21046 || current == 21047) {
			colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700);
		} else {
			colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700, current + 800);
		}
		cm.sendStyle("Pick a eye color that you would like.", colors);
	    }
	}
    } else if (status == 2) {
	if (beauty == 1) {
	    cm.setSkin(skin[selection]);
	} else if (beauty == 2) {
	    cm.setHair(hairnew[selection]);
	} else if (beauty == 3) {
	    cm.setHair(haircolor[selection]);
	} else if (beauty == 4) {
	    cm.setFace(facenew[selection]);
	} else if (beauty == 5) {
	    cm.setFace(colors[selection]);
	} 
	cm.dispose();
    }
}