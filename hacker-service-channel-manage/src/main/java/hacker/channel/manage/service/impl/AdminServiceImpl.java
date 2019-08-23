package hacker.channel.manage.service.impl;

import hacker.channel.manage.mapper.AdminMapper;
import hacker.channel.manage.service.AdminService;
import hacker.framework.model.Cto.AdminRoles;
import hacker.framework.model.entity.Admin;
import hacker.framework.util.CommontUtil;
import hacker.framework.util.LuKeIp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 15:34
 */
@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminMapper adminMapper;


    //查询用户名
    @Override
    public Admin findByName(String username) {

        return adminMapper.findByName(username);
    }

    //新建管理员用户
    @Override
    public int createNewAdmin(Admin user) {
        //map
        Map<String, Object> map = new HashMap<>(1);
        //username
        map.put("username",user.getUsername());
        //查询
        List<Admin> admins = adminMapper.selectByMap(map);
        //如果已存在该用户名的用户，新建失败
        if (null != admins && admins.size() > 0) {
            return -1;
        } else {
            //添加创建时间
            user.setCreated_at(CommontUtil.getTimeStampTime());

            //执行添加操作
            System.out.println(user.getUsername());
            //同步手机号和用户名，保持一致
            user.setPhone(user.getUsername());
            //调用添加方法
            return adminMapper.insert(user);
        }
    }

    //修改用户状态
    @Override
    public int updateUserStatus(Admin user, HttpServletRequest request) {
        //CommontUtil获取IP的格式是 0:0:0:0:0:0:0:1
        Timestamp timestamp = CommontUtil.getTimeStampTime();
        user.setLogin_at(timestamp);
        //获取登陆ip----》必须要调用自己的工具类,用java获取ip地址会出现问题,获取的ip将是 0:0:0:0:0:0:0:1---->调用工具类获取当前的登陆IP
        String ip = LuKeIp.getIpAddress(request);
        user.setLast_login_ip(ip);
        //token
        user.setLast_login_token(CommontUtil.getUUID());
        return adminMapper.updateUserStatus(user);
    }

    //根据id删除管理员操作
    @Override
    public void deleteById(Integer id) {
        //删除主键id
        adminMapper.deleteById(id);
        //删除账号角色
        adminMapper.deleteAdminRole(id);
    }

    //为管理员分配角色
    @Override
    public void setRoles(AdminRoles adminRoles) {

        List<AdminRoles> obj = adminRoles.getResult();
        //给管理员分配角色时，先删除该管理员对应的所有角色，重新分配角色
        adminMapper.deleteAdminRole(adminRoles.getUid());
        //为管理员分配角色
        adminMapper.setRoles(obj);
    }


}
