package hacker.channel.manage.service.impl;


import hacker.channel.manage.mapper.PermissionMapper;
import hacker.channel.manage.service.PermissionService;
import hacker.framework.model.entity.Admin;
import hacker.framework.model.entity.Permission;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 权限
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 15:44
 */
@Service
public class PermissionServiceImpl implements PermissionService {

    @Autowired
    private PermissionMapper permissionMapper;

    //查询用户的权限
    @Override
    public List<Permission> queryByUser(Admin user) {

        return permissionMapper.queryByUser(user);
    }
}
