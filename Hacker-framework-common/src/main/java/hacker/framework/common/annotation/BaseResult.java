package hacker.framework.common.annotation;

import lombok.Getter;
import lombok.Setter;

/**
 * @description 基础支持类
 *
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 11:36
 */
@Getter
@Setter
public class BaseResult {
    String code;
    String msg;
    Object data;

    public BaseResult() {
    }

    public BaseResult(String code, String msg, Object data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
}
