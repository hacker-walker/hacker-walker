package hacker.framework.common.object;

import hacker.framework.common.consts.CommonConst;
import hacker.framework.common.enums.BaseExceptionEnum;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

/**
 * 接口返回工具
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi(walker)
 * @date 2019/6/15 23:15
 */
public class ResultUtil {
    /**
     * ModelAndView
     **/
    public static ModelAndView view(String view) {
        return new ModelAndView(view);
    }

    public static ModelAndView view(String view, Map<String, Object> model) {
        return new ModelAndView(view, model);
    }

    public static ModelAndView redirect(String view) {
        return new ModelAndView("redirect:" + view);
    }

    /**
     * vo
     **/
    public static ResponseVo vo(int code, String message, Object data) {
        return new ResponseVo<>(code, message, data);
    }


    /**
     * error
     **/
    public static ResponseVo error(int code, String message) {
        return vo(code, message, null);
    }

    public static ResponseVo error(BaseExceptionEnum statusEnum) {
        return vo(statusEnum.getCode(), statusEnum.getMessage(), null);
    }

    public static ResponseVo error(String message) {
        return vo(CommonConst.DEFAULT_ERROR_CODE, message, null);
    }

    /**
     * success
     **/
    public static ResponseVo success(String message, Object data) {
        return vo(CommonConst.DEFAULT_SUCCESS_CODE, message, data);
    }

    public static ResponseVo success(String message) {
        return success(message, null);
    }

    public static ResponseVo success(BaseExceptionEnum statusEnum) {
        return vo(statusEnum.getCode(), statusEnum.getMessage(), null);
    }

}
