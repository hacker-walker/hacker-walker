package hacker.framework.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * @Description: jinxianianhua
 * @EnglishName LuKe
 * @authod liuqi
 * @date 2019/5/27 15:35
 */
public class MD5Util {
    private static final Logger logger = LoggerFactory.getLogger( MD5Util.class );

    /**
     * MDB加密方法
     * @param s
     * @return
     */
    public static final String to_32_MD5(String s) {
        if(StringUtil.isEmpty(s)){
            throw new RuntimeException("被加密字段不能为空");
        }

        char hexDigits[] = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'};
        byte[] strTemp = s.getBytes();
        MessageDigest mdTemp = null;
        try {
            mdTemp = MessageDigest.getInstance("MD5");
        } catch (NoSuchAlgorithmException e) {
            logger.error("数据加密发生异常 {}",e.getMessage());
            return null;
        }
        mdTemp.update(strTemp);
        byte[] md = mdTemp.digest();
        int j = md.length;
        char str[] = new char[j * 2];
        int k = 0;
        for (int i = 0; i < j; i++) {
            byte byte0 = md[i];
            str[k++] = hexDigits[byte0 >>> 4 & 0xf];
            str[k++] = hexDigits[byte0 & 0xf];
        }
        return new String(str).toUpperCase();
    }

    /**
     * 16位MD5串
     * @param s
     * @return
     */
    public static final String to_16_MD5(String s){
        if(StringUtil.isEmpty(s)){
            throw new RuntimeException("被加密字段不能为空");
        }
        String md5Str = to_32_MD5(s);
        md5Str = md5Str.substring(8, 24);
        return md5Str.toUpperCase();
    }

    /**
     * 将32位的md5字符串截断成16位
     * @param s
     * @return
     */
    public static final String md5To16(String s){
        if(StringUtil.isEmpty(s)){
            throw new RuntimeException("加密字段不能为空");
        }
        String md5Str = s.substring(8, 24);
        return md5Str.toUpperCase();
    }
}
