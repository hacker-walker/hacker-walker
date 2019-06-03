package hacker.channel.manage.service;


import hacker.framework.model.Cto.AdminRoles;
import hacker.framework.model.entity.Admin;

import javax.servlet.http.HttpServletRequest;

/**
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 15:34
 */
public interface AdminService {

    /**
     * 通过用户名查询
     * @param username 用户名
     * @return 管理员用户
     */
    Admin findByName(String username);

    /**
     * 新建管理员用户
     * @param user 用户参数
     * @return
     */
    int createNewAdmin(Admin user);

    /**
     * 修改用户状态
     * @param user
     * @return
     */
    int updateUserStatus(Admin user, HttpServletRequest request);

    /**
     * 根据id删除管理员
     * @param id id
     * @return
     */
    void deleteById(Integer id);


    /**
     * 为管理员分配角色
     * @param adminRoles 在实体类封装了管理员id和所分配的角色id集合
     */
    void setRoles(AdminRoles adminRoles);

}

