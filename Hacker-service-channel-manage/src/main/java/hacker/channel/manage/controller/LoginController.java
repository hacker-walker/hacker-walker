package hacker.channel.manage.controller;

import hacker.channel.manage.service.AdminService;
import hacker.framework.common.request.BaseResult;
import hacker.framework.common.request.ResultBean;
import hacker.framework.model.entity.Admin;
import hacker.framework.util.SHA256;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import javax.security.auth.Subject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * admin用户登陆界面
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 14:14
 */
@Slf4j
@RestController
@RequestMapping("/api")
@CrossOrigin(methods = { RequestMethod.GET, RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE }, origins = "*")
public class LoginController {

    @Autowired
    private AdminService adminService;


    //slat
    @Value("${salt}")
    private String slat;

    /**
     * 登陆
     * @param username 用户名
     * @param password 密码
     * @return 返回状态
     */
    @PostMapping("/login")
    @ApiOperation(value = "用户登录")
    public BaseResult login(String username, String password, HttpServletRequest request, HttpSession httpSession ){

        //接收前端传过来的信息
        System.out.println("登陆的用户名为：" +username);
        System.out.println("登陆的用户名为：" +password);

        //密码加盐sha256加密-----》看个人习惯
        password = SHA256.SHA256Encode(password + slat);
        //subject
        Subject subject = SecurityUtils.getSubject();
        //token
        AuthenticationToken authenticationToken = new UsernamePasswordToken(username, password);
        //返回信息
        try {
            //通过token和用户名去执行登陆操作
            subject.login(authenticationToken);
            //登陆成功后------》修改用户状态-------》修改成功后、存了登陆的token、IP、登陆时间
            Admin user = (Admin) subject.getPrincipal();
            adminService.updateUserStatus(user, request);

            //用户userId
            Integer userId = user.getId();
            //获取用户登陆的sessionId,目前没有传给前端,看后期需不需要
            httpSession.setAttribute("user_id", userId);
            System.out.println("用户的user_sessionId为:" + httpSession.getId());
            System.out.println("用户的userId为：" + userId);

            return new BaseResult("200","登陆成功",userId);
        }catch (Exception e){
            e.printStackTrace();
            log.error("登陆失败",e);
            return new BaseResult("500","登陆失败，用户名或密码错误",0);
        }
    }




    @GetMapping("/logout")
    @ApiOperation(value = "用户退出")
    public BaseResult logout(){
        Subject subject = SecurityUtils.getSubject();
        try {
            subject.logout();
            return new BaseResult("200","退出成功",1);
        }catch (Exception e){
            e.printStackTrace();
            log.error("登陆失败",e);
            return new BaseResult("500","退出失败",0);
        }
    }


    /**
     * 用户名查询
     * @param username 用户名
     * @return 查询返回结果
     */
    @GetMapping("/findByName")
    @ApiOperation(value = "用户名查询")
    public ResultBean findByName(String username){

        //接收前端传过来的信息
        System.out.println(username);
        //调用查询的方法
        Admin us = adminService.findByName(username);
        //判断是否存在
        if (us != null){
            return ResultBean.ofError(0,"用户名已存在");
        }else {
            return ResultBean.ofSuccess(1,"用户名可用");
        }

    }
}
