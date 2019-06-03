package hacker.framework.common.exception;


import hacker.framework.common.enums.BaseExceptionEnum;

/**
 * 自定义阳光系统异常
 *
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 14:58
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
