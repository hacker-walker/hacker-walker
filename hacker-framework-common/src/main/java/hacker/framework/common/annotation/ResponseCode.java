package hacker.framework.common.annotation;

/**
 *
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 12:34
 */
public enum ResponseCode {
    SUCCESS("0", "OK"),
    ERROR("1", "数据异常!");

    private String status;

    private String message;

    ResponseCode(String status, String message) {
        this.status = status;
        this.message = message;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
