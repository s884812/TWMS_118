package server;

import handling.cashshop.CashShopServer;
import handling.channel.ChannelServer;
import handling.login.LoginServer;
import handling.world.World;
import java.lang.management.ManagementFactory;
import java.sql.SQLException;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.management.MBeanServer;
import javax.management.ObjectName;
import server.Timer.BuffTimer;
import server.Timer.CloneTimer;
import server.Timer.EtcTimer;
import server.Timer.EventTimer;
import server.Timer.MapTimer;
import server.Timer.PingTimer;
import server.Timer.WorldTimer;
import server.shops.HiredMerchantSave;
import tools.FileoutputUtil;
import tools.packet.MaplePacketCreator;

public class ShutdownServer implements ShutdownServerMBean {

    public static ShutdownServer instance;
    public int mode = 0;

    public static void registerMBean() {
        MBeanServer mBeanServer = ManagementFactory.getPlatformMBeanServer();
        try {
            instance = new ShutdownServer();
            mBeanServer.registerMBean(instance, new ObjectName("server:type=ShutdownServer"));
        } catch (Exception e) {
            System.out.println("Error registering Shutdown MBean");
            e.printStackTrace();
        }
    }

    public static ShutdownServer getInstance() {
        return instance;
    }

    public void shutdown() {//can execute twice
        run();
    }

    @Override
    public void run() {
        if (mode == 0) {
            int ret = 0;
            World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(0, "遊戲伺服器即將關閉維護，請玩家安全下線..."));
            for (ChannelServer cs : ChannelServer.getAllInstances()) {
                cs.setShutdown();
                cs.setServerMessage("遊戲伺服器即將關閉維護，請玩家安全下線...");
                ret += cs.closeAllMerchant();
            }
            /*AtomicInteger FinishedThreads = new AtomicInteger(0);
            HiredMerchantSave.Execute(this);
            synchronized (this) {
                try {
                    wait();
                } catch (InterruptedException ex) {
                    Logger.getLogger(ShutdownServer.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
            while (FinishedThreads.incrementAndGet() != HiredMerchantSave.NumSavingThreads) {
                synchronized (this) {
                    try {
                        wait();
                    } catch (InterruptedException ex) {
                        Logger.getLogger(ShutdownServer.class.getName()).log(Level.SEVERE, null, ex);
                    }
                }
            }*/
            World.Guild.save();
            World.Alliance.save();
            World.Family.save();
            System.out.println("關閉線程 1 已完成。共保存精靈商人: " + ret + "個");
            mode++;
        } else if (mode == 1) {
            mode++;
            System.out.println("正在關閉線程 2 ...");
            try {
                World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(0, "遊戲伺服器即將關閉維護，請玩家安全下線..."));
                Integer[] chs = ChannelServer.getAllInstance().toArray(new Integer[0]);

                for (int i : chs) {
                    try {
                        ChannelServer cs = ChannelServer.getInstance(i);
                        synchronized (this) {
                            cs.shutdown();
                        }
                    } catch (Exception e) {
                        FileoutputUtil.outputFileError("logs/關閉伺服器異常.txt", e);
                        e.printStackTrace();
                    }
                }
                LoginServer.shutdown();
                CashShopServer.shutdown();
            } catch (Exception e) {
                System.err.println("THROW" + e);
                FileoutputUtil.outputFileError("logs/關閉伺服器異常.txt", e);
            }
            WorldTimer.getInstance().stop();
            MapTimer.getInstance().stop();
            BuffTimer.getInstance().stop();
            CloneTimer.getInstance().stop();
            EventTimer.getInstance().stop();
            EtcTimer.getInstance().stop();
            PingTimer.getInstance().stop();
            System.out.println("關閉線程 2 已完成。");
            try {
                Thread.sleep(5000);
                System.out.println("伺服器已關閉完成。");
            } catch (Exception e) {
                FileoutputUtil.outputFileError("logs/關閉伺服器異常.txt", e);
                //shutdown
            }
            System.exit(0); //not sure if this is really needed for ChannelServer
        }
    }
}
