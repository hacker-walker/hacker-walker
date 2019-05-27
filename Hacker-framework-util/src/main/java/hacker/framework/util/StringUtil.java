package hacker.framework.util;

import org.apache.commons.lang3.StringUtils;

import java.util.UUID;

public class StringUtil {
    /**
     * 字符串去掉前后空格后是否为空字符串
     * @param source
     * @return
     */
    public static final boolean isEmpty(String source){

        return StringUtils.isEmpty(StringUtils.trimToEmpty(source));
    }

    /**
     * 字符串去掉前后空格后是否不为空字符串
     * @param source
     * @return
     */
    public static final boolean isNotEmpty(String source){
        return StringUtils.isNotEmpty(StringUtils.trimToEmpty(source));
    }

    /**
     * 字符串去掉前后空格后是否为空
     * @param source
     * @return
     */
    public static final boolean isNull(String source){
        return StringUtils.isBlank(StringUtils.trimToNull(source));
    }

    /**
     * 字符串去掉前后空格后是否不为空
     * @param source
     * @return
     */
    public static final boolean isNotNull(String source){
        return StringUtils.isNotBlank(StringUtils.trimToNull(source));
    }

    /**
     * 获取去除间隔符号的UUID字符串
     * @return
     */
    public static final String getKey(){
        String uuidStr = UUID.randomUUID().toString();
        return uuidStr.replace("-", "");
    }

    public static String toUnicodeEx(String str){
        String result="";
        for (int i = 0; i < str.length(); i++){
            int chr1 = (char) str.charAt(i);
            if(chr1>=19968&&chr1<=171941){//\u4e00-\u9fa5
                result+="\\\\\\\\\\u" + Integer.toHexString(chr1);
            }else{
                if(chr1<255) {
                    result += "\\\\\\\\\\u" + String.format("%04x", chr1);
                }else {
                    result += str.charAt(i);
                }
            }
        }
        return result;
    }
}
