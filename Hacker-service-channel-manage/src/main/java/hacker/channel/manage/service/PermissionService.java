package hacker.channel.manage.service;


import hacker.framework.model.entity.Admin;
import hacker.framework.model.entity.Permission;

import java.util.List;

/**
 * 权限
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 15:14
 */
public interface PermissionService {

    /**
     * 查询用户的权限
     * @param user 用户
     * @return 权限
     */
    List<Permission> queryByUser(Admin user);
}
