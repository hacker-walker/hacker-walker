package hacker.channel.manage.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import hacker.framework.model.Cto.AdminRoles;
import hacker.framework.model.entity.Admin;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 17:34
 */
@Repository
@Mapper
public interface AdminMapper extends BaseMapper<Admin> {

    //通过用户名查询
    Admin findByName(String username);

    //修改用户状态
    int updateUserStatus(Admin user);

    //删除账户角色
    void deleteAdminRole(Integer id);

    //调用了封装的obj方法
    void setRoles(List<AdminRoles> obj);
}
