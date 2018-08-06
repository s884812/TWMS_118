function start() {
	var map = cm.getSavedLocation("EVENT");
	if (map > -1 && map != cm.getMapId()) {
		cm.warp(map, 0);
                cm.sendOk("No More Trophy For You :)");
                cm.gainItem(4000038, 0);
                cm.dispose();
	} else {
    		cm.warp(910000000, 0);
                cm.sendOk("No More Trophy For You :)");
                cm.gainItem(4000038, 0);
                cm.dispose();
	}
    cm.dispose();
}

function action(mode, type, selection) {
}
