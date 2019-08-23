package hacker.channel.manage.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import hacker.channel.manage.mapper.PermissionMapper;
import hacker.channel.manage.mapper.RoleMapper;
import hacker.channel.manage.service.RoleService;
import hacker.framework.model.Cto.RolePermissions;
import hacker.framework.model.entity.Admin;
import hacker.framework.model.entity.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 角色
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 15:24
 */
@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleMapper roleMapper;

    @Autowired
    private PermissionMapper permissionMapper;

    //查询用户的角色
    @Override
    public List<Role> queryRolesUser(Admin user) {

        return roleMapper.queryRolesUser(user);
    }

    //增加角色
    @Override
    public void add(Role role) {

        roleMapper.insert(role);
    }

    //根据id删除角色
    @Override
    public void deleteById(Integer id) {

        //要删除角色，先删除角色<---->权限关系，角色<---->用户关系
        roleMapper.deleteRolePermission(id);
        roleMapper.deleteAdminRole(id);
        roleMapper.deleteById(id);
    }

    //根据id修改角色
    @Override
    public void updateRole(Role role) {

        roleMapper.updateById(role);
    }

    //根据角色id查询权限
    @Override
    public List<Map<String, Object>> queryPermissionRole(Integer id) {
        //存放该角色所拥有的权限id
        List<Long> ids = new ArrayList<>(12);
        //存放一级权限的id和在result中的索引值
        Map<String, Object> keys = new HashMap<>(16);
        //总的返回值
        List<Map<String, Object>> result = new ArrayList<>(12);
        //根据角色id查询该角色对应的所有权限--->map
        List<Map> maps = permissionMapper.queryByRole(id);
        QueryWrapper wrapper = new QueryWrapper();
        wrapper.eq("status", 1);  //------------>对应数据库权限的状态，查询为禁用的数据
        //根据 Wrapper 条件，查询全部
        List<Map<String, Object>> maps1 = permissionMapper.selectMaps(wrapper);
        //将该角色有的权限id拿出来
        maps.forEach(map -> {
            Long pid = (Long) map.get("id");
            ids.add(pid);
        });
        //遍历所有的权限，取出一级，如果是该角色有的，做上私人标记-----------》有对应的权限会带上标记
        maps1.forEach(map -> {
            Long pid = (Long) map.get("id");
            if (ids.contains(pid)) {
                map.put("selected", 1);
            }
            Integer parentId = (Integer) map.get("parentId");  //----------》父类id等于0，就是最高权限---->一级权限
            //筛选出一级权限
            if (0 == parentId) {
                //将一级权限先放入返回值中
                result.add(map);
                //一级权限id和索引放入map
                keys.put(pid.toString(), result.size() - 1);
            }
        });
        //遍历二级，组装到一级下-----------》没有对应的权限不会带上标记，但是也会全部显示出来
        maps1
                .stream()
                //过滤掉一级
                .filter(map -> (Integer) map.get("parentId") != 0)
                .forEach(map -> {
                    Integer parentId = (Integer) map.get("parentId");
                    Integer i = (Integer) keys.get(parentId.toString());
                    Map<String, Object> parent = result.get(i);
                    //根据二级权限的父节点id进行组装
                    List<Map<String, Object>> children =
                            (List<Map<String, Object>>) parent.get("children");
                    if (null == children) {
                        children = new ArrayList<>();
                        parent.put("children", children);
                    }
                    children.add(map);
                });
        return result;
    }

    //给某角色分配权限
    @Override
    public void allotRolePermissions(RolePermissions rolePermissions) {

        //给角色分配权限时，先删除该角色的所有权限，重新分配权限
        roleMapper.deleteRolePermission(rolePermissions.getRid());
        //给某角色分配权限
        roleMapper.allotPermission(rolePermissions.getObj());
    }

}
