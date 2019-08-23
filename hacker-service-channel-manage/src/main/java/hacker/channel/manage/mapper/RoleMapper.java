package hacker.channel.manage.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import hacker.framework.model.Cto.RolePermissions;
import hacker.framework.model.entity.Admin;
import hacker.framework.model.entity.Role;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 角色
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 16:14
 */
@Mapper
@Repository
public interface RoleMapper extends BaseMapper<Role> {

    //查询用户的角色
    List<Role> queryRolesUser(Admin user);

    //删除角色对应的权限
    void deleteRolePermission(Integer id);

    //删除账号角色
    void deleteAdminRole(Integer id);

    //调用了封装的obj方法
    void allotPermission(List<RolePermissions> obj);

}
