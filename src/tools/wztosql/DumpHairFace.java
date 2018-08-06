/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tools.wztosql;

import database.DBConPool;
import java.io.File;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import tools.FileoutputUtil;
import tools.StringUtil;

/**
 *
 * @author wubin
 */
public class DumpHairFace {

    private static final Map<Integer, String> chrNames = new HashMap<>();

    public static void main(String[] args) throws SQLException {
        DumpHairFace dump = new DumpHairFace();
        System.out.println("正在轉存髮型數據到MySQL......");
        dump.dumpHairFaceData("Hair");
        System.out.println("正在轉存臉型數據到MySQL......");
        dump.dumpHairFaceData("Face");
        System.out.println("轉存結束。");
    }

    public void dumpHairFaceData(String type) throws SQLException {
        File dataFile = new File((System.getProperty("path") != null ? System.getProperty("path") : "") + "wz/Character.wz/" + type);
        File strDataFile = new File((System.getProperty("path") != null ? System.getProperty("path") : "") + "wz/String.wz");
        MapleDataProvider chrData = MapleDataProviderFactory.getDataProvider(dataFile);
        MapleDataProvider stringDataWZ = MapleDataProviderFactory.getDataProvider(strDataFile);
        MapleData chrStringData = stringDataWZ.getData("Eqp.img").getChildByPath("Eqp/" + type);

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            try (PreparedStatement ps = con.prepareStatement("DELETE FROM `wz_" + type.toLowerCase() + "data`")) {
                ps.execute();
            }
            for (MapleData c : chrStringData) {
                int chrid = Integer.parseInt(c.getName());
                String n = StringUtil.getLeftPaddedStr(chrid + ".img", '0', 12);
                try {
                    if (chrData.getData(n) != null) {
                        String name = MapleDataTool.getString("name", c, "無");
                        chrNames.put(chrid, name);
                    }
                } catch (NullPointerException e) {
                } catch (RuntimeException e) {
                }
            }
            for (int key : chrNames.keySet()) {
                try {
                    try (PreparedStatement ps = con.prepareStatement(
                            "INSERT INTO `wz_" + type.toLowerCase() + "data` (`" + type.toLowerCase() + "id`, `name`) VALUES (?, ?)")) {
                        ps.setInt(1, key);
                        ps.setString(2, chrNames.get(key));
                        ps.execute();
                    }
                    System.out.println("鍵值: " + key + " 名稱: " + chrNames.get(key));
                } catch (SQLException ex) {
                    System.out.println("保存鍵值錯誤：" + key);
                }
            }
            chrNames.clear();
        } catch (SQLException ex) {
            FileoutputUtil.outputFileError("logs/資料庫異常.txt", ex);
        }
    }
}
