package hacker.framework.common.request;

import lombok.Getter;

/**
 * 基础返回码
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 14:39
 */
@Getter
public enum BaseCode {
    /**
     * 成功
     */
    SUCCESS("200"),
    /**
     * 异常失败
     */
    FAIL("500");

    BaseCode(String code) {
        this.code = code;
    }

    private String code;

    public static void main(String[] args) {
        System.out.println(BaseCode.SUCCESS.getCode());
    }
}
