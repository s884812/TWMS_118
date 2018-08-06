
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
        cm.sendSimple("Are you one of the winners in the event? If so, you're entitled to exchange rewards with your #v4032733#!"
        +"#k\r\n#L1#Trade 10 #v4032733# for 1 #v5000027#"
        +"#k\r\n#L2#Trade 10 #v4032733# for 1 #v5000030#"
        +"#k\r\n#L3#Trade 10 #v4032733# for 1 #v5000031#"
        +"#k\r\n#L4#Trade 10 #v4032733# for 1 #v5000032#"
        +"#k\r\n#L5#Trade 10 #v4032733# for 1 #v5000033#"
        +"#k\r\n#L6#Trade 10 #v4032733# for 1 #v5000034#"
        +"#k\r\n#L7#Trade 10 #v4032733# for 1 #v5000035#"
        +"#k\r\n#L8#Trade 10 #v4032733# for 1 #v5000038#"
        +"#k\r\n#L9#Trade 10 #v4032733# for 1 #v5000039#"
        +"#k\r\n#L10#Trade 10 #v4032733# for 1 #v5000044#"
        +"#k\r\n#L11#Trade 10 #v4032733# for 1 #v5000045#"
        +"#k\r\n#L12#Trade 10 #v4032733# for 1 #v5000049#"
        +"#k\r\n#L13#Trade 10 #v4032733# for 1 #v5000050#"
        +"#k\r\n#L14#Trade 10 #v4032733# for 1 #v5000051#"
        +"#k\r\n#L15#Trade 10 #v4032733# for 1 #v5000052#"
        +"#k\r\n#L16#Trade 10 #v4032733# for 1 #v5000055#"
        +"#k\r\n#L17#Trade 10 #v4032733# for 1 #v5000056#"
        +"#k\r\n#L18#Trade 10 #v4032733# for 1 #v5000062#"
        +"#k\r\n#L19#Trade 10 #v4032733# for 1 #v5000064#"
        +"#k\r\n#L20#Trade 10 #v4032733# for 1 #v5000066#"
        +"#k\r\n#L21#Trade 10 #v4032733# for 1 #v5000070#"
        +"#k\r\n#L22#Trade 10 #v4032733# for 1 #v5000071#"
        +"#k\r\n#L23#Trade 10 #v4032733# for 1 #v5000076#"
        +"#k\r\n#L24#Trade 10 #v4032733# for 1 #v5000077#"
        +"#k\r\n#L25#Trade 10 #v4032733# for 1 #v5000081#"
        +"#k\r\n#L26#Trade 10 #v4032733# for 1 #v5000084#"
        +"#k\r\n#L27#Trade 10 #v4032733# for 1 #v5000085#"
        +"#k\r\n#L28#Trade 10 #v4032733# for 1 #v5000086#"
        +"#k\r\n#L29#Trade 10 #v4032733# for 1 #v5000089#"
        +"#k\r\n#L30#Trade 10 #v4032733# for 1 #v5000090#"
	+"#k\r\n#L31#Trade 10 #v4032733# for 1 #v5000091#"
	+"#k\r\n#L32#Trade 10 #v4032733# for 1 #v5000092#"
	+"#k\r\n#L33#Trade 10 #v4032733# for 1 #v5000093#"
	+"#k\r\n#L34#Trade 10 #v4032733# for 1 #v5000094#"
	+"#k\r\n#L35#Trade 10 #v4032733# for 1 #v5000097#"
	+"#k\r\n#L36#Trade 10 #v4032733# for 1 #v5000098#"
	+"#k\r\n#L37#Trade 10 #v4032733# for 1 #v5000100#"
	+"#k\r\n#L38#Trade 10 #v4032733# for 1 #v5000136#"
	+"#k\r\n#L39#Trade 10 #v4032733# for 1 #v5000138#"
	+"#k\r\n#L40#Trade 10 #v4032733# for 1 #v5000139#"
	+"#k\r\n#L41#Trade 10 #v4032733# for 1 #v5000142#"
	+"#k\r\n#L42#Trade 10 #v4032733# for 1 #v5000146#");
	 } else if (selection == 1) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000027, 1);
        cm.sendOk("Thanks, here is your #v5000027#");
        }
        else {
        cm.sendOk("You don't have enough #v4032733#");
        }
         } else if (selection == 2) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
	cm.gainItem(5000030, 1);
        cm.sendOk("Thanks, here is your #v5000030#.");
        }
	else {
        cm.sendOk("You don't have enough #v4032733#");
        }
	} else if (selection == 3) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000031, 1);
        cm.sendOk("Thanks, here is your #v5000031#");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
	} else if (selection == 4) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000032, 1);
        cm.sendOk("Thanks, here is your #v5000032#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
	} else if (selection == 5) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000033, 1);
        cm.sendOk("Thanks, here is your #v5000033#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
		} else if (selection == 6) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000034, 1);
        cm.sendOk("Thanks, here is your #v5000034#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
		} else if (selection == 7) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000035, 1);
        cm.sendOk("Thanks, here is your #v5000035#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
		} else if (selection == 8) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000038, 1);
        cm.sendOk("Thanks, here is your #v5000038#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
		} else if (selection == 9) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000039, 1);
        cm.sendOk("Thanks, here is your #v5000039#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
		} else if (selection == 10) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000044, 1);
        cm.sendOk("Thanks, here is your #v5000044#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
	} else if (selection == 11) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000045, 1);
        cm.sendOk("Thanks, here is your #v2049300#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
	} else if (selection == 12) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000049, 1);
        cm.sendOk("Thanks, here is your #v5000049#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
	} else if (selection == 13) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000050, 1);
        cm.sendOk("Thanks, here is your #v5000050#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
	} else if (selection == 14) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000051, 1);
        cm.sendOk("Thanks, here is your #v5000051#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
	} else if (selection == 15) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000052, 1);
        cm.sendOk("Thanks, here is your #v5000052#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
	} else if (selection == 16) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000055, 1);
        cm.sendOk("Thanks, here is your #v5000055#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
	} else if (selection == 17) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000056, 1);
        cm.sendOk("Thanks, here is your #v5000056#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
	} else if (selection == 18) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000062, 1);
        cm.sendOk("Thanks, here is your #v5000062#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
        } else if (selection == 19) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000063, 1);
        cm.sendOk("Thanks, here is your #v5000063#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
		} else if (selection == 20) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000066, 1);
        cm.sendOk("Thanks, here is your #v5000066#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
		} else if (selection == 21) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000070, 1);
        cm.sendOk("Thanks, here is your #v5000070#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
		} else if (selection == 22) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000071, 1);
        cm.sendOk("Thanks, here is your #v5000071#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
		} else if (selection == 23) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000076, 1);
        cm.sendOk("Thanks, here is your #v5000076#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
		} else if (selection == 24) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000077, 1);
        cm.sendOk("Thanks, here is your #v5000077#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
		} else if (selection == 25) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000081, 1);
        cm.sendOk("Thanks, here is your #v5000081#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
		} else if (selection == 26) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000084, 1);
        cm.sendOk("Thanks, here is your #v5000084#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
		} else if (selection == 27) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000085, 1);
        cm.sendOk("Thanks, here is your #v5000085#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
		} else if (selection == 28) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000086, 1);
        cm.sendOk("Thanks, here is your #v5000086#.");
        }
        else {
        cm.sendOk("You don't have #v4032733#");
        }
        } else if (selection == 29) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000089, 1);
        cm.sendOk("Thanks, here is your #v5000089#.");
        }
        else {
        cm.sendOk("You dont have 10 #v4032733#")
        }
        } else if (selection == 30) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000090, 1);
        cm.sendOk("Thanks, here is your #v5000090#.");
        }
        else {
        cm.sendOk("You dont have 10 #v4032733#")}
        } else if (selection == 31) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000091, 1);
        cm.sendOk("Thanks, here is your #v5000091#.");
        }
        else {
        cm.sendOk("You dont have 10 #v4032733#")
	}
        } else if (selection == 32) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000092, 1);
        cm.sendOk("Thanks, here is your #v5000092#.");
        }
        else {
        cm.sendOk("You dont have 10 #v4032733#")
	}
        } else if (selection == 33) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000093, 1);
        cm.sendOk("Thanks, here is your #v5000093#.");
        }
        else {
        cm.sendOk("You dont have 10 #v4032733#")
	}
        } else if (selection == 34) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000094, 1);
        cm.sendOk("Thanks, here is your #v5000094#.");
        }
        else {
        cm.sendOk("You dont have 10 #v4032733#")
	}
        } else if (selection == 35) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000097, 1);
        cm.sendOk("Thanks, here is your #v5000097#.");
        }
        else {
        cm.sendOk("You dont have 10 #v4032733#")
	}
        } else if (selection == 36) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000098, 1);
        cm.sendOk("Thanks, here is your #v5000098#.");
        }
        else {
        cm.sendOk("You dont have 10 #v4032733#")
	}
        } else if (selection == 37) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000100, 1);
        cm.sendOk("Thanks, here is your #v5000100#.");
        }
        else {
        cm.sendOk("You dont have 10 #v4032733#")
	}
        } else if (selection == 38) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000136, 1);
        cm.sendOk("Thanks, here is your #v5000136#.");
        }
        else {
        cm.sendOk("You dont have 10 #v4032733#")
	}
        } else if (selection == 39) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000138, 1);
        cm.sendOk("Thanks, here is your #v5000138#.");
        }
        else {
        cm.sendOk("You dont have 10 #v4032733#")
	}
        } else if (selection == 40) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000139, 1);
        cm.sendOk("Thanks, here is your #v5000139#.");
        }
        else {
        cm.sendOk("You dont have 10 #v4032733#")
	}
        } else if (selection == 41) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000142, 1);
        cm.sendOk("Thanks, here is your #v5000142#.");
        }
        else {
        cm.sendOk("You dont have 10 #v4032733#")
	}
        } else if (selection == 42) {
        if(cm.haveItem(4032733, 10)){
        cm.gainItem(4032733, -10);
        cm.gainItem(5000146, 1);
        cm.sendOk("Thanks, here is your #v5000146#.");;
        }
        else {
        cm.sendOk("You dont have 10 #v4032733#")
        }
        }
        }
        }