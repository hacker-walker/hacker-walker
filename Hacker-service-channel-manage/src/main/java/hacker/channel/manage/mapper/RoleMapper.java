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

    List<Role> queryRolesUser(Admin user);

    void deleteRolePermission(Integer id);

    void deleteAdminRole(Integer id);

    //调用了封装的obj方法
    void allotPermission(List<RolePermissions> obj);

}
