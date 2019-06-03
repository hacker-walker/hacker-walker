package hacker.channel.manage.service;

import hacker.framework.model.Cto.RolePermissions;
import hacker.framework.model.entity.Admin;
import hacker.framework.model.entity.Role;

import java.util.List;
import java.util.Map;

/**
 * 角色
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 14:14
 */
public interface RoleService {

    /**
     * 查询用户的角色
     * @param user 用户
     * @return 角色
     */
    List<Role> queryRolesUser(Admin user);

    /**
     * 增加角色
     * @param role 角色
     */
    void add(Role role);

    /**
     * 根据id删除角色
     * @param id id
     */
    void deleteById(Integer id);

    /**
     * 根据id修改角色
     * @param role role
     */
    void updateRole(Role role);

    /**
     * 根据角色id查询权限
     * @param id 角色id
     */
    List<Map<String, Object>> queryPermissionRole(Integer id);

    /**
     * 给某角色分配权限
     * @param rolePermissions 参数封装
     */
    void allotRolePermissions(RolePermissions rolePermissions);

}
