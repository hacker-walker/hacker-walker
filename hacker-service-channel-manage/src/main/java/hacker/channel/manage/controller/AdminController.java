package hacker.channel.manage.controller;

import org.apache.shiro.SecurityUtils;
import hacker.channel.manage.service.AdminService;
import hacker.framework.common.request.BaseCode;
import hacker.framework.common.request.BaseResult;
import hacker.framework.model.Cto.AdminRoles;
import hacker.framework.model.entity.Admin;
import hacker.framework.util.SHA256;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;


/**
 * 管理员界面
 *
 * @Description: J X N H
 * @EnglishName LuKe
 * @author  LiuQi(walker)
 * @date 2019/6/3 16:17
 */
@Slf4j
@RestController
@RequestMapping("/api")
@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}, origins = "*")
public class AdminController {

    @Autowired
    private AdminService adminService;

    //slat
    @Value("${salt}")
    private String slat;

    /**
     * 新建管理用户
     *
     * @param user 要新建的用户
     * @return 返回信息
     */
    @PostMapping("/addUser")
    @ApiOperation(value = "新建管理用户")
    public BaseResult createAdminUser(@RequestBody Admin user) {
        //接收前端传过来的参数
        System.out.println(user);
        //接收的参数不能为空
        Admin loginUser = (Admin) SecurityUtils.getSubject().getPrincipal();
        Assert.notNull(user.getUsername(), "用户名不可为空");
        Assert.notNull(user.getPassword(), "密码不可为空");

        //对密码进行加密
        user.setPassword(SHA256.SHA256Encode(user.getPassword() + slat));
        int us = adminService.createNewAdmin(user);
        if (us == -1) {
            return new BaseResult("-1", "用户名重复", 0);
        } else {

            log.info("用户(id=" + loginUser.getId() + ") 新建用户（   name：" + user.getUsername() + ")");
            return new BaseResult(BaseCode.SUCCESS.getCode(), "新建成功", 1);
        }
    }

    /**
     * 根据id删除管理员用户
     *
     * @param id id
     * @return 删除信息
     */
    @PostMapping("/deleteById")
    @ApiOperation(value = "根据id删除管理员用户")
    public BaseResult deleteById(Integer id) {
        //接收前端传过来的id
        System.out.println(id);
        Admin loginUser = (Admin) SecurityUtils.getSubject().getPrincipal();
        try {
            //调用删除的方法
            adminService.deleteById(id);
            log.info("当前登陆用户(id:" + loginUser.getId() + " ,name:" + loginUser.getUsername() + ") 删除了当前id=" + id + "的管理员");
            return new BaseResult(BaseCode.SUCCESS.getCode(), "删除成功", 1);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("删除管理员用户失败", e);
            return new BaseResult(BaseCode.FAIL.getCode(), "删除管理员用户失败", 0);
        }
    }


    /**
     * 为管理员分配角色
     *
     * @param adminRoles 用户id和分配的角色id
     */
    @PostMapping("/allotRole")
    @ApiOperation(value = "添加管理员对应的角色")
    public BaseResult setRoles(@RequestBody AdminRoles adminRoles) {
        //这里封装了uid和rid在getObj方法中，前端传uid和roles-----》对应的多个role
        try {
            adminService.setRoles(adminRoles);
            log.info(" 添加管理员对应的=" + adminRoles + "角色");
            return new BaseResult(BaseCode.SUCCESS.getCode(), "分配成功", 1);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("分配角色时异常", e);
            return new BaseResult(BaseCode.FAIL.getCode(), "分配失败", 0);
        }
    }


}

