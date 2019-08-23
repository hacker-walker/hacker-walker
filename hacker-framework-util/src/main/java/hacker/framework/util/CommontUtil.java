package hacker.framework.util;

import javax.servlet.http.HttpServletRequest;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.UUID;

/**
 *
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 16:58
 * @description 通用工具
 */
public class CommontUtil {
    private final static String UNKNOWN = "unknown";
    /**
     * 获取ip
     * @param request
     * @return
     */
    public static String getIpAddress(HttpServletRequest request) {
        String split = ",";
        String ip = request.getHeader("x-forwarded-for");
        if (ip == null || ip.length() == 0 || UNKNOWN.equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || UNKNOWN.equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || UNKNOWN.equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        if (ip.contains(split)) {
            return ip.split(split)[0];
        } else {
            return ip;
        }
    }

    /**
     * 返回uuid
     * @return uuid
     */
    public static String getUUID(){
        return UUID.randomUUID().toString().replace("-","");
    }

    /**
     * 返回当前时间的Timestamp格式
     * @return Timestamp
     */
    public static Timestamp getTimeStampTime(){
        LocalDateTime time = LocalDateTime.now();
        Timestamp timestamp = Timestamp.valueOf(time);
        return timestamp;
    }
}
