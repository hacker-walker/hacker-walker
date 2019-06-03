package hacker.framework.common.annotation;


/**
 * 自定义阳光系统异常
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod liuqi
 * @date 2019/5/22 18:34
 */
public class JxnhException extends RuntimeException {

    private int code;

    private String msg;


    public JxnhException() {
        super();
    }

    public JxnhException(Throwable cause) {
        super(cause);
    }

    public JxnhException(String msg) {
        super(msg);
        this.msg = msg;
    }

    public JxnhException(int code, String msg) {
        super(msg);
        this.code = code;
        this.msg = msg;
    }

    public JxnhException(BaseExceptionEnum exEnum) {
        this.code = exEnum.getCode();
        this.msg = exEnum.getMessage();
    }

    public int getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }

}
