package hacker.channel.manage.controller;

import hacker.framework.common.object.ResultUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;

/**
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi(walker)
 * @date 2019/6/15 23:15
 */
@Api(value = "错误", description = "错误页面处理")
@Controller
public class ErrorController {
    private static final Logger log = LoggerFactory.getLogger(LoginController.class);

    /***
     * 错误页面
     * @param model
     * @return
     */
    @ApiOperation(
            value = "错误页面",
            notes = "错误页面",
            produces = "application/json, application/xml",
            consumes = "application/json, application/xml")
    @RequestMapping("/error1")
    public ModelAndView error1(Model model, HttpServletResponse response) {

        log.info("错误页面");
        response.setStatus(HttpStatus.FORBIDDEN.value());

        return ResultUtil.view("templates/error/010");
    }
}
