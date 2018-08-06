/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package handling.netty;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.Channel;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import server.ServerProperties;
import tools.FileoutputUtil;

/**
 *
 * @author wubin
 */
public class ServerConnection {

    private final int port;
    private int world = -1;
    private int channels = -1;
    private boolean cs;
    private ServerBootstrap boot;
    private final EventLoopGroup bossGroup = new NioEventLoopGroup(1); //The initial connection thread where all the new connections go to
    private final EventLoopGroup workerGroup = new NioEventLoopGroup(); //Once the connection thread has finished it will be moved over to this group where the thread will be managed
    private Channel channel;

    public ServerConnection(int port) {
        this.port = port;
    }

    public ServerConnection(int port, int world, int channels, boolean cs) {
        this.port = port;
        this.world = world;
        this.channels = channels;
        this.cs = cs;

    }

    public void run() {
        try {
            boot = new ServerBootstrap().group(bossGroup, workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .option(ChannelOption.SO_BACKLOG, Integer.parseInt(ServerProperties.getProperty("net.sf.odinms.login.userlimit")))
                    .childOption(ChannelOption.TCP_NODELAY, true)
                    .childOption(ChannelOption.SO_KEEPALIVE, true)
                    .childHandler(new ServerInitializer(world, channels, cs));
            try {
                channel = boot.bind(port).sync().channel().closeFuture().channel();
            } catch (InterruptedException e) {
                FileoutputUtil.outputFileError("logs/異常輸出.txt", e);
                e.printStackTrace();
            } finally {
//                System.out.println("Listening to port: " + port);
            }
        } catch (Exception e) {
            System.out.printf("Connection to %s failed.", channel == null ? e.toString() : channel.remoteAddress());
            FileoutputUtil.outputFileError("logs/異常輸出.txt", e);
            close();
        }
    }

    public void close() {
        if (channel != null) {
            channel.close();
        }
        bossGroup.shutdownGracefully();
        workerGroup.shutdownGracefully();
    }
}
