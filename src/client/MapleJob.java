/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client;

/**
 *
 * @author wubin
 */
public enum MapleJob {
    初心者(0),
    劍士(100),
    狂戰士(110),
    十字軍(111),
    英雄(112),
    見習騎士(120),
    騎士(121),
    聖騎士(122),
    槍騎兵(130),
    嗜血狂騎(131),
    黑騎士(132),
    法師(200),
    巫師_火毒(210),
    魔導士_火毒(211),
    大魔導士_火毒(212),
    巫師_冰雷(220),
    魔導士_冰雷(221),
    大魔導士_冰雷(222),
    僧侶(230),
    祭司(231),
    主教(232),
    弓箭手(300),
    獵人(310),
    遊俠(311),
    箭神(312),
    弩弓手(320),
    狙擊手(321),
    神射手(322),
    盜賊(400),
    刺客(410),
    暗殺者(411),
    夜使者(412),
    俠盜(420),
    神偷(421),
    暗影神偷(422),
    下忍(430),
    中忍(431),
    上忍(432),
    隱忍(433),
    影武者(434),
    海盜(500),
    砲手(501),
    打手(510),
    格鬥家(511),
    拳霸(512),
    槍手(520),
    神槍手(521),
    槍神(522),
    MANAGER(800),
    管理員(900),
    貴族(1000),
    聖魂劍士1轉(1100),
    聖魂劍士2轉(1110),
    聖魂劍士3轉(1111),
    聖魂劍士4轉(1112),
    烈焰巫師1轉(1200),
    烈焰巫師2轉(1210),
    烈焰巫師3轉(1211),
    烈焰巫師4轉(1212),
    破風使者1轉(1300),
    破風使者2轉(1310),
    破風使者3轉(1311),
    破風使者4轉(1312),
    暗夜行者1轉(1400),
    暗夜行者2轉(1410),
    暗夜行者3轉(1411),
    暗夜行者4轉(1412),
    閃雷悍將1轉(1500),
    閃雷悍將2轉(1510),
    閃雷悍將3轉(1511),
    閃雷悍將4轉(1512),
    傳說(2000),
    龍魔導士(2001),
    狂狼勇士1轉(2100),
    狂狼勇士2轉(2110),
    狂狼勇士3轉(2111),
    狂狼勇士4轉(2112),
    龍魔導士1轉(2200),
    龍魔導士2轉(2210),
    龍魔導士3轉(2211),
    龍魔導士4轉(2212),
    龍魔導士5轉(2213),
    龍魔導士6轉(2214),
    龍魔導士7轉(2215),
    龍魔導士8轉(2216),
    龍魔導士9轉(2217),
    龍魔導士10轉(2218),
    ADDITIONAL_SKILLS(9000),
    未知(999999),;
    private final int jobid;

    private MapleJob(int id) {
        this.jobid = id;
    }

    public int getId() {
        return this.jobid;
    }

    public static String getName(MapleJob mjob) {
        return mjob.name();
    }

    public static MapleJob getById(int id) {
        for (MapleJob l : values()) {
            if (l.getId() == id) {
                return l;
            }
        }
        return null;
    }

    public static boolean isExist(int id) {
        for (MapleJob job : values()) {
            if (job.getId() == id) {
                return true;
            }
        }
        return false;
    }
}
