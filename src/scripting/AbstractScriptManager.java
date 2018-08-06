package scripting;

import client.MapleClient;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.stream.Collectors;
import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import tools.FileoutputUtil;
import static tools.StringUtil.codeString;

public abstract class AbstractScriptManager {

    private static final ScriptEngineManager sem = new ScriptEngineManager();

    protected Invocable getInvocable(String path, MapleClient c) {
        return getInvocable(path, c, false);
    }

    protected Invocable getInvocable(String path, MapleClient c, boolean npc) {
        //FileReader fr = null;
        InputStream fr = null;
        try {
            path = "scripts/" + path;
            ScriptEngine engine = null;

            if (c != null) {
                engine = c.getScriptEngine(path);
            }
            if (engine == null) {
                File scriptFile = new File(path);
                if (!scriptFile.exists()) {
                    return null;
                }
                //engine = sem.getEngineByName("javascript");
                engine = sem.getEngineByName("nashorn");
                if (c != null) {
                    c.setScriptEngine(path, engine);
                }
                //fr = new FileReader(scriptFile);
                fr = new FileInputStream(scriptFile);
                BufferedReader bf = new BufferedReader(new InputStreamReader(fr, codeString(path)));
                String lines = "load('nashorn:mozilla_compat.js');";
                lines += bf.lines().collect(Collectors.joining(System.lineSeparator()));
                //engine.eval(fr);
                engine.eval(lines);
            } else if (c != null && npc) {
                c.getPlayer().dropMessage(-1, "你現在不能攻擊或不能跟npc對話,請在對話框打 @解卡/@ea 來解除異常狀態。");
            }
            return (Invocable) engine;
        } catch (Exception e) {
            System.err.println("Error executing script. Path: " + path + "\nException " + e);
            FileoutputUtil.log(FileoutputUtil.ScriptEx_Log, "Error executing script. Path: " + path + "\nException " + e);
            return null;
        } finally {
            try {
                if (fr != null) {
                    fr.close();
                }
            } catch (IOException ignore) {
            }
        }
    }
}
