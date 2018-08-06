package handling.cashshop;

import handling.MapleServerHandler;
import handling.channel.PlayerStorage;
import handling.netty.ServerConnection;
import server.MTSStorage;
import server.ServerProperties;

public class CashShopServer {

    private static String ip;
    private final static int PORT = 8600;
    private static ServerConnection acceptor;
    private static PlayerStorage players;
    private static boolean finishedShutdown = false;

    public static final void run_startup_configurations() {
        ip = ServerProperties.getProperty("net.sf.odinms.channel.net.interface") + ":" + PORT;

        players = new PlayerStorage(-10);

        try {
            acceptor = new ServerConnection(PORT, 0, -1, true);
            acceptor.run();
            System.out.println("綁定商城端口 " + PORT + ".");
        } catch (final Exception e) {
            System.err.println("Binding to port " + PORT + " failed");
            e.printStackTrace();
            throw new RuntimeException("Binding failed.", e);
        }
    }

    public static final String getIP() {
        return ip;
    }

    public static final PlayerStorage getPlayerStorage() {
        return players;
    }

    public static final void shutdown() {
        if (finishedShutdown) {
            return;
        }
        System.out.println("正在關閉商城伺服器...");
        players.disconnectAll();
        System.out.println("正在解除商城伺服器端口綁定...");
        acceptor.close();
        finishedShutdown = true;
    }

    public static boolean isShutdown() {
        return finishedShutdown;
    }
}
