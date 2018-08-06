/**
 * Created by : Shawn of RaGEZONE
 **/
var name = "#b#eTesting#k#n";
var talk = "Which category would you like to browse?\r\n";
var menu = ["Warrior","Magician","Archer","Thief","Pirate"];//,"NX Items","ETC"];
var options = [
/*Warrior*/	["Hats","Tops","Bottoms","Overalls","Gloves","Shields","Shoes","1H Axes","2H Axes","1H BWs","2H BWs","1H Swords","2H Swords","Spears","Pole Arms"], 
/*Mage*/	["Hats","Overalls","Gloves","Shields","Shoes","Wands","Staffs"], 
/*Archer*/	["Hats","Overalls","Gloves","Shoes","Bows","CrossBows","Dual Bowguns","Arrows"], 
/*Thief*/	["Hats","Tops","Bottoms","Overalls","Gloves","Shields","Shoes","Daggers","Kataras","Claws","Throwing Stars"], 
/*Pirate*/	["Hats","Overalls","Gloves","Shoes","Gun and Knuckles","Cannons","Bullets and Capsules"], 
/*NX*/		["Hats","Earrings","Face","Tops","Bottoms","Capes","Overalls","Rings","Gloves","Shields","Shoes","Weapons","Throwing Stars","Pets","Pet Misc","Emotion","Effects","Accessories","Player FM Stores"], 
/*ETC*/		["Messengers","Super Megaphones, Gachapon Tickets, Rocks, and Morphs","Boss Pieces","Buffs and Potions","Scrolls","Summoning Sacks","Chairs","Mounts"]];
var colors = ["#r"];
var rand = Math.floor(Math.random()*colors.length);
var rand2 = Math.ceil(Math.floor(Math.random()*colors.length));
var c;
npc = 0;
function start(){
	var text = "Select a Category:\r\n";
	for (var z = 0; z < menu.length; z++)
		text+= "#L"+z+"##e"+colors[rand]+""+menu[z]+"#l\r\n";
	cm.sendSimple(text);
}
function action(m,t,s){
	if (m != 1){
		cm.dispose();
		return;
	}else{
		npc++;
	}
	if (npc == 1){
		c = s;
		for (var i = 0; i < options[c].length; i++)
			talk+="#L"+i+"##e"+colors[rand2]+""+options[c][i]+"#k#l\r\n";
		cm.sendSimple(talk);
	} else if (npc == 2){
		cm.openShop(6000+((c*100+100)+s));
		//cm.sendOk(6000+((c*100+100)+s));
		cm.dispose();
	}
}