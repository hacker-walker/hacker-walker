package hacker.framework.common.annotation;

/**
 * @description 自定义异常类
 *
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 12:34
 */
public class AppException extends Exception {

    public AppException() {
        super();
    }

    public AppException(String message) {
        super(message);
    }

    public AppException(String message, Throwable cause) {
        super(message, cause);
    }

    public AppException(Throwable cause) {
        super(cause);
    }
}
