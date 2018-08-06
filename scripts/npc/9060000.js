/** Author: ZeaL
	NPC Name: 		Joyce
	Map(s): 		-
	Description: 		@npc NPC
*/


var status = -1;
var maps;
var pqMaps;
var bossMaps;
var pokeMaps;
var selectedMap = -1;
var selectedArea = -1;
var pastSelection = -1;
var jobStatus = -1;

var compensationAvail = false;
var compensationItems = Array(5360017, 5211048, 4030005);
var compensationExpire = 1;
var compensationQuantity = 1;

function start() {
    action(1, 0, 0);
	if (cm.isGMS()) {
		maps = Array(910001000, 680000000, 230000000, 260000000, 101000000, 211000000, 120030000, 130000200, 100000000, 103000000, 222000000, 240000000, 240070000, 104000000, 220000000, 120000000, 221000000, 200000000, 102000000, 300000000, 801000000, 540000000, 541000000, 250000000, 251000000
   ,551000000, 550000000, 800040000, 261000000, 541020000, 270000000, 682000000, 140000000, 970010000, 103040000, 555000000, 310000000, 200100000, 211060000, 310040300, 970020000, 101050000 ); 
		pqMaps = Array(682010200, 541000300, 220050300, 230040200, 541010010, 551030100, 240040500, 800020110, 801040004, 105030500, 610020004, 102040200, 105100100, 211041100, 610030010, 670010000, 310040200, 889100100, 951000000);
	} else {
		maps = Array(120030000,300000000,680000000,230000000,910001000,260000000,541000000,540000000,219000000,130000200,211060000,310000000,211000000,101000000,541020000,682000000,100000000,271010000,251000000,551000000,802000101,103000000,103040000,222000000,240000000,104000000,220000000,261000000,970010000,250000000,800000000,120000000,600000000,221000000,200000000,800040000,102000000,140000000,200100000,310040300,801000000,105000000,240070000,270000000,550000000,555000000); 
		pqMaps = Array(800020110,670010000,801040004,105100100,219010000,219020000,230040200,240040500,551030100,271030101,105030500,211041100,541010010,610030010,310040200,541000300,220050300,102040200,610020004,600020300,674030100);
		bossMaps = Array(211042200,240040700,211061001);
		pokeMaps = Array(190000000,190000001,190000002,191000000,191000001,192000000,192000001,195000000,195010000,195020000
		,195030000,196000000,196010000,197000000,197010000,600010000,880000000,881000000,809020000,922220000,924000100,925010300
		,950000100,970020001,970020002,970020003,970020004,910300000,910210000,910500000,910500100,910500200,922020100);
		
	}
}
/*271030101*/
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2 || status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (cm.getPlayer().getLevel() < 10 && cm.getPlayer().getJob() != 0) {
	cm.sendOk("Please talk to me at level 10.");
	cm.dispose();
	return;
    }
    if (status == 0) {
	    if (!cm.isQuestFinished(29003) && !cm.haveItem(1002419, 1, true, true)) {
			if (!cm.haveItem(1002419, 1, true, true) && cm.canHold(1002419,1)) {
				cm.gainItem(1002419, 1);
			}
			if (cm.canHold(2020034,100) && cm.canHold(2020035, 100)) {
				cm.gainItem(2020034, 100);
				cm.gainItem(2020035, 100);
				cm.gainMeso(100000); //yo shit who the hell added this
				cm.forceCompleteQuest(29003);
				cm.sendOk("Welcome! As a complementary gift, I present to you these for your journey! If you wish to buy Cash related items, please visit the Cash Shop or visit the NPC in FM!");
			} else {
				cm.sendOk("Please get an inventory space.");
			}
			cm.dispose();
			return;
	    }
		var xString = compensationAvail == true? "\r\n#L20#Redeem my compensation.#l" : "";
		cm.sendSimple("Hello im here to teach you monster riding.. So you're #r#h ##k!.  \r\n#b#L2#I would like to learn a skill#k");
    } else if (status == 1) {
        if (selection == 1) {
			pastSelection = selection;
            cm.sendSimple("\r\n#b#L0#Town maps#l\r\n#L1#Monster maps#l\r\n#L2#Boss entrance maps#l\r\n#L3#Pokemon Map#l#k");
			//cm.dispose();
		} else if (selection == 2) {
            status = 5;
            cm.sendSimple("\r\n#b#L1#Follow the Lead#l\r\n#L4#Monster Rider#l\r\n#L5#Monster Rider Shop#l#k");
        } else if (selection == 5) {
			if (cm.getMeso() >= 1147483647) {
					cm.sendOk("You must have room for mesos before doing the trade.");
			} else if (!cm.haveItem(4001168, 1)){
					cm.sendOk("You do not have a Golden Maple Leaf.");
			} else {
				if (cm.removeItem(4001168)) {
					cm.gainMeso(1000000000);
					cm.sendOk("Thank you for the trade, I have given you 1 billion for the Maple Leaf.");
				} else {
					cm.sendOk("Please unlock your item.");
				}
			}
			cm.dispose();
        } else if (selection == 6) {
			if (cm.getMeso() < 1030000000) {
				cm.sendOk("You must have 1,030,000,000 mesos before doing the trade.");
			} else if (!cm.canHold(4001168,1)) {
				cm.sendOk("Please make room.");
			} else {
				cm.gainItem(4001168, 1);
				cm.gainMeso(-1030000000);
				cm.sendOk("Thank you for the trade, I have given you Golden Maple Leaf for 1,030,000,000 meso (1 billion + 0.03% tax).");
			}
			cm.dispose();	
		} else if (selection == 20) {
			var record = cm.getQuestRecord(422012);
			var redeemed = record.getCustomData() == null ? false : true;
			
			if (redeemed || cm.getPlayer().getLevel() < 80) {
				cm.sendOk("Sorry, you've already redeem your compensation \r\nOr you doesn't meet the requirement to take.");
				cm.dispose();
			} else {
				var canHold = true;
				for (var i1 = 0; i1 < compensationItems.length; i1++) {
					if (!cm.canHold(compensationItems[i1],compensationQuantity)) {
						canHold = false;
					}
				}
				
				if (canHold) {
					for (var i2 = 0; i2 < compensationItems.length; i2++) {
						cm.gainItemPeriod(compensationItems[i2], compensationQuantity, compensationExpire, "COMPENSATION");
					}
					
					record.setCustomData("[040212]RDM_COMP");
					cm.sendOk("Enjoy your compensation. \r\nThank you for supporting us!");
					cm.logDonator("Redeem compensation from Joyce [04/02/2012]", 4022012);
					cm.dispose();
				} else {
					cm.sendOk("Please make room for your slots");
					cm.dispose();
				}	
			}
		}
    } else if (status == 2) {
		if (pastSelection == 1) {
        var selStr = "Select your destination.#b";
        if (selection == 0) {
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# #l";
            }
        } else if (selection == 2) {
            for (var i = 0; i < bossMaps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + bossMaps[i] + "# #l";
            }
		} else if (selection == 3) {
			for (var i = 0; i < pqMaps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + pqMaps[i] + "# #l";
            }
		} else {
			for (var i = 0; i < pokeMaps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + pokeMaps[i] + "# #l";
            }
        }
        selectedArea = selection;
		pastSelection == -1;
        cm.sendSimple(selStr);
		}
    } else if (status == 3) {
		cm.sendYesNo("So you have nothing left to do here? Do you want to go to #m" + (selectedArea == 0 ? maps[selection] : selectedArea == 2 ? bossMaps[selection] : selectedArea == 3 ? pqMaps[selection] : pokeMaps[selection]) + "#?");
		selectedMap = selection;
    } else if (status == 4) {
		if (selectedArea == 3 && selectedMap == 9){
			if (cm.haveItem(4032922, 1)){
				cm.warp(271030101, 1);
				cm.dispose();
				return;
			} else {
				cm.sendOk("Please make sure you have #v4032922##b#t4032922##k");
			}
			cm.dispose();
			return;
		}
		if (selectedMap >= 0) {
			cm.warp(selectedArea == 0 ? maps[selectedMap] : selectedArea == 2 ? bossMaps[selectedMap] : selectedArea == 3 ? pqMaps[selectedMap] : pokeMaps[selectedMap], 0);
		}
        cm.dispose();
	} else if (status == 6) {
        if (selection == 1) {
                if (cm.getPlayer().getSkillLevel(8) > 0 || cm.getPlayer().getSkillLevel(10000018) > 0 || cm.getPlayer().getSkillLevel(20000024) > 0 || cm.getPlayer().getSkillLevel(20011024) > 0 || cm.getPlayer().getSkillLevel(30001024) > 0 || cm.getPlayer().getSkillLevel(30011024) > 0 || cm.getPlayer().getSkillLevel(20021024) > 0) {
                        cm.sendOk("You already have this skill.");
                } else {
			if (cm.getJob() == 3001 || (cm.getJob() >= 3100 && cm.getJob() <= 3112)) {
				cm.teachSkill(30011024, 1, 0); // Maker
                        } else if (cm.getJob() >= 3000) {
                                cm.teachSkill(30001024, 1, 0); // Maker
                        } else if (cm.getJob() == 2002 || cm.getJob() >= 2300) {
                                cm.teachSkill(20021024, 1, 0); // Maker
                        } else if (cm.getJob() == 2001 || cm.getJob() >= 2200) {
                                cm.teachSkill(20011024, 1, 0); // Maker
                        } else if (cm.getJob() >= 2000) {
                                cm.teachSkill(20000024, 1, 0); // Maker
                        } else if (cm.getJob() >= 1000) {
                                cm.teachSkill(10000018, 1, 0); // Maker
			} else if (cm.getJob() == 1 || cm.getJob() == 501 || (cm.getJob() > 522 && cm.getJob() <= 532)) {
				cm.teachSkill(10008, 1, 0); // Maker, idk TODO JUMP
                        } else {
                                cm.teachSkill(8, 1, 0); // Maker
                        }
                        cm.sendOk("I have taught you Follow the Lead skill.");
                }
                cm.dispose();
        } else if (selection == 4) {
                if (cm.getPlayer().getSkillLevel(80001000) > 0 ) {
                        cm.sendOk("You already have this skill.");
                } else {
                        if (cm.getJob() >= 3000) {
                                cm.sendOk("Sorry but Resistance characters may not get the Monster Riding skill.");
								cm.dispose();
								return;
                        }
						cm.teachSkill(80001000, 1, 0); // Maker
                        cm.sendOk("I have taught you Monster Rider skill.");
                }
                cm.dispose();
        } else if (selection == 5) {
                cm.openShop(40);
                cm.dispose();
        }
    }
}