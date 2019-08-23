package hacker.channel.manage.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import hacker.framework.model.entity.Admin;
import hacker.framework.model.entity.Permission;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.ResultType;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * 权限
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 16:34
 */
@Mapper
@Repository
public interface PermissionMapper extends BaseMapper<Permission> {

    //查询用户id的权限
    @Select({"select p.* from sun_permission p " ,
            "join tb_role_permission rp on rp.permission_id = p.id " ,
            "join tb_role r on r.id = rp.role_id " ,
            "join tb_admin_role ar on ar.role_id = r.id " ,
            "join tb_admin u on u.id = ar.admin_id " ,
            "where u.id = #{user.id} and p.status = 1"})
    List<Permission> queryByUser(@Param("user") Admin user);


    //根据角色id查询该角色对应的所有权限
    @Select({"select p.id, p.name,p.index_name, p.parent_id pid, p.display_name sName, p.is_show isShow ",
            "from tb_permission p ",
            "join tb_role_permission rp on p.id = rp.permission_id ",
            "join tb_role r on r.id = rp.role_id ",
            "where r.id = #{id} and p.status = 1 ",
            "order by pid"})
    @ResultType(Map.class)
    List<Map> queryByRole(Integer id);

}
