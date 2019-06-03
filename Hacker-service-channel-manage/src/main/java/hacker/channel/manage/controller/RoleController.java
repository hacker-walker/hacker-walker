package hacker.channel.manage.controller;

import hacker.channel.manage.service.RoleService;
import hacker.framework.common.request.BaseCode;
import hacker.framework.common.request.BaseResult;
import hacker.framework.model.Cto.RolePermissions;
import hacker.framework.model.entity.Role;
import hacker.framework.util.CommontUtil;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * 角色controller
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 14:14
 */
@Slf4j
@RestController
@RequestMapping("/api")
@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}, origins = "*")
public class RoleController {

    @Autowired
    private RoleService roleService;


    @PostMapping("/addRole")
    @ApiOperation(value = "增加角色")
    public BaseResult createRole(@RequestBody Role role) {

        //创建时获取当前创建时间
        role.setCreated_at(CommontUtil.getTimeStampTime());
        try {
            roleService.add(role);
            return new BaseResult(BaseCode.SUCCESS.getCode(), "增加角色成功", 1);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("增加角色异常", e);
            return new BaseResult(BaseCode.FAIL.getCode(), "增加角色异常", 0);
        }
    }


    @PostMapping("/deleteRoleById")
    @ApiOperation(value = "根据角色id删除角色")
    public BaseResult deleteById(Integer id) {
        try {
            roleService.deleteById(id);
            log.info("删除角色成功");
            return new BaseResult(BaseCode.SUCCESS.getCode(), "删除角色成功", 1);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("删除角色异常", e);
            return new BaseResult(BaseCode.FAIL.getCode(), "删除角色异常", 0);
        }
    }


    @PostMapping("/updateRole")
    @ApiOperation(value = "根据id去修改角色")
    public BaseResult updateRole(@RequestBody Role role) {
        //修改成功时获取当前修改时间
        role.setUpdated_at(CommontUtil.getTimeStampTime());
        try {
            roleService.updateRole(role);
            log.info("修改角色成功");
            return new BaseResult(BaseCode.SUCCESS.getCode(), "修改角色成功", 1);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("修改角色异常", e);
            return new BaseResult(BaseCode.FAIL.getCode(), "修改角色异常", 0);
        }
    }


    @GetMapping("/listPermission")
    @ApiOperation(value = "根据角色id查询该角色下的权限列表")
    public BaseResult queryPermissionRole(Integer id){
        //前端传来的参数
        System.out.println(id);
        try {
            List<Map<String, Object>> result = roleService.queryPermissionRole(id);
            log.info("查询完成");
            return new BaseResult(BaseCode.SUCCESS.getCode(), "查询完成", result);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("查询角色权限异常", e);
            return new BaseResult(BaseCode.FAIL.getCode(), "查询角色权限异常", 0);
        }
    }


    @PostMapping("/allotPermission")
    @ApiOperation(value = "给某角色分配权限")
    public BaseResult allotPermission(@RequestBody RolePermissions rolePermissions) {
        //这里封装了rid和Pid在getObj方法中，前端传rid和pids-----》对应的多个pid
        try {
            roleService.allotRolePermissions(rolePermissions);
            log.info("分配权限成功");
            return new BaseResult(BaseCode.SUCCESS.getCode(),"分配权限成功",1);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("分配权限异常",e);
            return new BaseResult(BaseCode.FAIL.getCode(), "分配权限异常", 0);
        }
    }

}
