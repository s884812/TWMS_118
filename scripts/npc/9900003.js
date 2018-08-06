var henesys1; 
var henesys2; 
var henesys3; 
var henesys4; 
var henesys5; 
var ariant1; 
var ariant2; 
var ariant3; 
var ariant4; 
var ariant5; 
var orbis1; 
var orbis2; 
var orbis3; 
var orbis4; 
var orbis5; 
var ludi1; 
var ludi2; 
var ludi3; 
var ludi4; 
var ludi5; 
var leafre1; 
var leafre2; 
var leafre3; 
var leafre4; 
var leafre5; 
var mulung1; 
var mulung2; 
var mulung3; 
var mulung4; 
var mulung5; 
var aqua1; 
var aqua2; 
var aqua3; 
var aqua4; 
var aqua5; 

function start() { 
    status = -1; 
    henesys1 = cm.itemQuantity(4000016); 
    henesys2 = cm.itemQuantity(4000004); 
    henesys3 = cm.itemQuantity(4000001); 
    henesys4 = cm.itemQuantity(4000039); 
    henesys5 = cm.itemQuantity(4000022); 
    ariant1 = cm.itemQuantity(4000329); 
    ariant2 = cm.itemQuantity(4010007); 
    ariant3 = cm.itemQuantity(4000331); 
    ariant4 = cm.itemQuantity(4000328); 
    ariant5 = cm.itemQuantity(4000324); 
    orbis1 = cm.itemQuantity(4000059); 
    orbis2 = cm.itemQuantity(4000083); 
    orbis3 = cm.itemQuantity(4000084); 
    orbis4 = cm.itemQuantity(4000072); 
    orbis5 = cm.itemQuantity(4000062); 
    ludi1 = cm.itemQuantity(4000143); 
    ludi2 = cm.itemQuantity(4000109); 
    ludi3 = cm.itemQuantity(4000130); 
    ludi4 = cm.itemQuantity(4000114); 
    ludi5 = cm.itemQuantity(4000144); 
    ludi5 = cm.itemQuantity(4000144); 
    leafre1 = cm.itemQuantity(4000229); 
    leafre2 = cm.itemQuantity(4000231); 
    leafre3 = cm.itemQuantity(4000242); 
    leafre4 = cm.itemQuantity(4000266); 
    leafre5 = cm.itemQuantity(4000270); 
    mulung1 = cm.itemQuantity(4000276); 
    mulung2 = cm.itemQuantity(4000280); 
    mulung3 = cm.itemQuantity(4000282); 
    mulung4 = cm.itemQuantity(4000288); 
    mulung5 = cm.itemQuantity(4000287); 
    aqua1 = cm.itemQuantity(4000166); 
    aqua2 = cm.itemQuantity(4000164); 
    aqua3 = cm.itemQuantity(4000154); 
    aqua4 = cm.itemQuantity(4000157); 
    aqua5 = cm.itemQuantity(4000179); 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    selected = selection; 
    if (mode == -1) { 
        cm.dispose(); 
    } else { 
        if (status >= 0 && mode == 0) { 
            cm.sendOk("#eTalk to me when you're ready."); 
            cm.dispose(); 
            return; 
        } 
        if (mode == 1) 
            status++; 
        else 
            status--; 
        if (status == 0) { 
            cm.sendNext("#eHey lazy bum #d#h ##k. I am #rWei JIe#k, master Core Books. I believe you might wanna gain some intelligence frmo me!"); 
        } else if (status == 1) { 
            cm.sendSimple("#eHunt for me pleaseeeeeeeeeeee I'll give you core books in return!. \r\n#b#L0#What items do I have to collect?#l"); 
        } else { 
            if (selection == 0) { 
                cm.sendSimple("#eWell, you will need to collect a lot of items. You need to collect 200 of each item. There will be 5 items per type Job Cores. Once you turn in the required amount of items for the quest, you will be rewarded #bMY GODLY CORE BOOKS!#k. \r\n#b#L2#Warrior Jobs - (Swordman & Aran)#l\r\n#L3#Magician - (Mages & Evan)#l\r\n#L4#Thief - (Dual Blades & Rogues)#l"); 
            } else if (selection == 1) { 
                if (cm.itemQuantity(4001009) > 0 && cm.itemQuantity(4001010) > 0 && cm.itemQuantity(4001011) > 0 && cm.itemQuantity(4001012) > 0 && cm.itemQuantity(4001013) > 0 && cm.itemQuantity(4001014) > 0 && cm.itemQuantity(4001021) > 0) { 
                    cm.gainItem(4001009, -1); 
                    cm.gainItem(4001010, -1); 
                    cm.gainItem(4001011, -1); 
                    cm.gainItem(4001012, -1); 
                    cm.gainItem(4001013, -1); 
                    cm.gainItem(4001014, -1); 
                    cm.gainItem(4001021, -1); 
                    cm.gainExp(10000000); 
                    cm.sendOk("#eThere you are #d#h ##k, I hope you enjoy your prize!"); 
                    cm.dispose(); 
                } else { 
                    cm.sendSimple("#eYou do not have all 7 erasers, please come back when you do. \r\n#b#L9#See the Erasers#l"); 
                } 
            } else if (selection == 9) { 
                cm.sendOk("#e#r#i4001009# - From Henesys\r\n#i4001010# - From Ariant\r\n#i4001011# - From Orbis\r\n#i4001012# - From Ludibrium\r\n#i4001013# - From Leafre\r\n#i4001014# - From Mu Lung\r\n#i4001021# - From Aquarium"); 
                cm.dispose(); 
            } else if (selection == 2) { 
                cm.sendSimple("#e#i4000016# - Red Snail Shell\r\n#i4000004# - Squishy Liquid\r\n#i4000001# - Orange Mushroom Cap\r\n#i4000039# - Iron Hog's Metal Hoof\r\n#i4000022# - Stone Golem Rubble\r\n\r\n#b#L10#I have 200 of each item.#l"); 
            } else if (selection == 10) { 
                if (cm.itemQuantity(4000016) > 199 && cm.itemQuantity(4000004) > 199 && cm.itemQuantity(4000001) > 199 && cm.itemQuantity(4000039) > 199 && cm.itemQuantity(4000022) > 199) { 
                    cm.gainItem(2280016, 1); 
                    cm.gainItem(2280013, 1); 
                    cm.gainItem(2280014, 1); 
                    cm.gainItem(2280015, 1); 
                    cm.gainItem(2280008, 1); 
                    cm.gainItem(2280012, 1); 
                    cm.gainItem(2280007, 1); 
                    cm.gainItem(4000004, -200); 
                    cm.gainItem(4000001, -200); 
                    cm.gainItem(4000039, -200); 
                    cm.gainItem(4000022, -200); 
                    cm.gainItem(4000016, -200); 
                    cm.dispose(); 
                } else { 
                    cm.sendOk("#eYou do not have 200 or more of each of those items.\r\n\r\n#i4000016# - "+henesys1+"\r\n#i4000004# - "+henesys2+"\r\n#i4000001# - "+henesys3+"\r\n#i4000039# - "+henesys4+"\r\n#i4000022# - "+henesys5+""); 
                    cm.dispose(); 
                } 
            } else if (selection == 3) { 
                cm.sendSimple("#e#i4000329# - Cactus Stem\r\n#i4010007# - Lidium Ore\r\n#i4000331# - Cactus' Flower\r\n#i4000328# - Snake Rattle\r\n#i4000324# - Clover\r\n\r\n#b#L11#I have 200 of each item.#l"); 
            } else if (selection == 11) { 
                if (cm.itemQuantity(4000329) > 199 && cm.itemQuantity(4010007) > 199 && cm.itemQuantity(4000331) > 199 && cm.itemQuantity(4000328) > 199 && cm.itemQuantity(4000324)) { 
                    cm.gainItem(2280027, 1); 
                    cm.gainItem(2280026, 1); 
                    cm.gainItem(2280028, 1); 
                    cm.gainItem(2280029, 1); 
                    cm.gainItem(2280009, 1); 
                    cm.gainItem(2280004, 1); 
                    cm.gainItem(4010007, -200); 
                    cm.gainItem(4000331, -200); 
                    cm.gainItem(4000328, -200); 
                    cm.gainItem(4000324, -200); 
                    cm.gainItem(4000329, -200); 
                    cm.dispose(); 
                } else { 
                    cm.sendOk("#eYou do not have 200 or more of each of those items.\r\n\r\n#i4000329# - "+ariant1+"\r\n#i4010007# - "+ariant2+"\r\n#i4010007# - "+ariant3+"\r\n#i4000328# - "+ariant4+"\r\n#i4000324# - "+ariant5+""); 
                    cm.dispose(); 
                } 
            } else if (selection == 4) { 
                cm.sendSimple("#e#i4000059# - Star Pixie's Starpiece\r\n#i4000083# - Jr. Sentinel Shellpiece\r\n#i4000084# - Ice Sentinel Shellpiece\r\n#i4000072# - Grupin Tail\r\n#i4000062# - Dark Nependeath Seed\r\n\r\n#b#L12#I have 200 of each item.#l"); 
            } else if (selection == 12) { 
                if (cm.itemQuantity(4000059) > 199 && cm.itemQuantity(4000083) > 199 && cm.itemQuantity(4000084) > 199 && cm.itemQuantity(4000072) > 199 && cm.itemQuantity(4000062) > 199) { 
                    cm.gainItem(2280031, 1); 
                    cm.gainItem(2280030, 1); 
                    cm.gainItem(2280010, 1); 
                    cm.gainItem(4000059, -200); 
                    cm.gainItem(4000083, -200); 
                    cm.gainItem(4000084, -200); 
                    cm.gainItem(4000072, -200); 
                    cm.gainItem(4000062, -200); 
                    cm.dispose(); 
                } else { 
                    cm.sendOk("#eYou do not have 200 or more of each of those items.\r\n\r\n#i4000059# - "+orbis1+"\r\n#i4000083# - "+orbis2+"\r\n#i4000084# - "+orbis3+"\r\n#i4000072# - "+orbis4+"\r\n#i4000062# - "+orbis5+""); 
                    cm.dispose(); 
                } 
            } else if (selection == 5) { 
                cm.sendSimple("#e#i4000143# - Zombie Teddy Bear\r\n#i4000109# - Toy Duckling\r\n#i4000130# - Buffoon's Grandpa Clock\r\n#i4000114# - Table Clock\r\n#i4000144# - Free Spirit\r\n\r\n#b#L13#I have 200 of each item.#l"); 
            } else if (selection == 13) { 
                if (cm.itemQuantity(4000143) > 199 && cm.itemQuantity(4000109) > 199 && cm.itemQuantity(4000130) > 199 && cm.itemQuantity(4000114) > 199 && cm.itemQuantity(4000144) > 199) { 
                    cm.gainItem(5220094, 20); 
                    cm.gainItem(4000143, -200); 
                    cm.gainItem(4000109, -200); 
                    cm.gainItem(4000130, -200); 
                    cm.gainItem(4000114, -200); 
                    cm.gainItem(4000144, -200); 
                    cm.dispose(); 
                } else { 
                    cm.sendOk("#eYou do not have 200 or more of each of those items.\r\n\r\n#i4000143# - "+ludi1+"\r\n#i4000109# - "+ludi2+"\r\n#i4000130# - "+ludi3+"\r\n#i4000114# - "+ludi4+"\r\n#i4000144# - "+ludi5+""); 
                    cm.dispose(); 
                } 
            } else if (selection == 6) { 
                cm.sendSimple("#e#i4000229# - Dark Rash's Furball\r\n#i4000231# - Hankie's Pan Flute\r\n#i4000242# - Dual Birk's Tiny Tail\r\n#i4000266# - Wooden Shoulder Pad\r\n#i4000270# - Wyvern Toenail\r\n\r\n#b#L14#I have 200 of each item.#l"); 
            } else if (selection == 14) { 
                if (cm.itemQuantity(4000229) > 199 && cm.itemQuantity(4000231) > 199 && cm.itemQuantity(4000242) > 199 && cm.itemQuantity(4000266) > 199 && cm.itemQuantity(4000270) > 199) { 
                    cm.gainItem(2022179, 20); 
                    cm.gainItem(4000229, -200); 
                    cm.gainItem(4000231, -200); 
                    cm.gainItem(4000242, -200); 
                    cm.gainItem(4000266, -200); 
                    cm.gainItem(4000270, -200); 
                    cm.dispose(); 
                } else { 
                    cm.sendOk("#eYou do not have 200 or more of each of those items.\r\n\r\n#i4000229# - "+leafre1+"\r\n#i4000231# - "+leafre2+"\r\n#i4000242# - "+leafre3+"\r\n#i4000266# - "+leafre4+"\r\n#i4000270# - "+leafre5+""); 
                    cm.dispose(); 
                } 
            } else if (selection == 7) { 
                cm.sendSimple("#e#i4000276# - Acorn\r\n#i4000280# - Necki Swimming Cap\r\n#i4000282# - Peach Seed\r\n#i4000288# - Broken Deer Horn\r\n#i4000287# - Wooden Doll\r\n\r\n#b#L15#I have 200 of each item.#l"); 
            } else if (selection == 15) { 
                if (cm.itemQuantity(4000276) > 199 && cm.itemQuantity(4000280) > 199 && cm.itemQuantity(4000282) > 199 && cm.itemQuantity(4000288) > 199 && cm.itemQuantity(4000287) > 199) { 
                    cm.gainItem(5220000, 25); 
                    cm.gainItem(4000276, -200); 
                    cm.gainItem(4000280, -200); 
                    cm.gainItem(4000282, -200); 
                    cm.gainItem(4000288, -200); 
                    cm.gainItem(4000287, -200); 
                    cm.dispose(); 
                } else { 
                    cm.sendOk("#eYou do not have 200 or more of each of those items.\r\n\r\n#i4000276# - "+mulung1+"\r\n#i4000280# - "+mulung2+"\r\n#i4000282# - "+mulung3+"\r\n#i4000288# - "+mulung4+"\r\n#i4000287# - "+mulung5+""); 
                    cm.dispose(); 
                } 
            } else if (selection == 8) { 
                cm.sendSimple("#e#i4000166# - Shrimp Meat\r\n#i4000164# - Bubble Fish's Thoughts\r\n#i4000154# - Toy Baby Seal\r\n#i4000157# - Seal Meat\r\n#i4000179# - A Bundle of Goby\r\n\r\n#b#L16#I have 200 of each item.#l"); 
            } else if (selection == 16) { 
                if (cm.itemQuantity(4000166) > 199 && cm.itemQuantity(4000164) > 199 && cm.itemQuantity(4000154) > 199 && cm.itemQuantity(4000157) > 199 && cm.itemQuantity(4000179) > 199) { 
                    cm.gainMeso(10000000); 
                    cm.gainItem(4000166, -200); 
                    cm.gainItem(4000164, -200); 
                    cm.gainItem(4000154, -200); 
                    cm.gainItem(4000157, -200); 
                    cm.gainItem(4000179, -200); 
                    cm.dispose(); 
                    } else { 
                    cm.sendOk("#eYou do not have 200 or more of each of those items.\r\n\r\n#i4000166# - "+aqua1+"\r\n#i4000164# - "+aqua2+"\r\n#i4000154# - "+aqua3+"\r\n#i4000157# - "+aqua4+"\r\n#i4000179# - "+aqua5+""); 
                    cm.dispose(); 
                } 
            } 
        } 
    } 
}  