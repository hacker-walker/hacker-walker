package hacker.framework.util;


import org.apache.commons.codec.binary.Hex;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * @Description: jinxianianhua
 * @EnglishName LuKe
 * @authod liuqi
 * @date 2019/5/27 15:35
 */
public class SHA256 {
private static final String CHARSET_NAME = "UTF-8";

    /**
     * SHA256加密
     * @param str 明文
     * @return  密文
     */
    public static String SHA256Encode(String str){
        MessageDigest messageDigest;
        String encodeStr = "";
        try {
            messageDigest = MessageDigest.getInstance("SHA-256");
            byte[] hash = messageDigest.digest(str.getBytes(CHARSET_NAME));
            encodeStr = Hex.encodeHexString(hash);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return encodeStr;
    }

    public static void main(String[] args) {
        //对自己的密码加密-----》》64位以上
        String name = SHA256Encode("abc123"+"Jhuiabn9_DhiebFIJ==jel%$dafe4fs@deaerf_");
        //cpu核心数
        int i = Runtime.getRuntime().availableProcessors();
        System.out.println(name);
    }
}
