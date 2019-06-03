package hacker.framework.common.config;

import hacker.channel.manage.service.AdminService;
import hacker.channel.manage.service.PermissionService;
import hacker.channel.manage.service.RoleService;
import hacker.framework.model.entity.Admin;
import hacker.framework.model.entity.Permission;
import hacker.framework.model.entity.Role;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @description shiro授权，认证 realm,shiro需要自己处理异常
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 11:44
 */
@Component
public class ShiroRealm extends AuthorizingRealm {

    @Autowired
    private AdminService adminService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private PermissionService permissionService;
    /**
     * 授权
     * @param principalCollection
     * @return
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
        //获取当前登陆用户后查询该用户角色和权限并赋值
        Admin user = (Admin) SecurityUtils.getSubject().getPrincipal();
        List<Role> roles = roleService.queryRolesUser(user);
        List<Permission> permissions = permissionService.queryByUser(user);
        user.setRoles(roles);
        user.setPermissions(permissions);

        roles.forEach( role ->info.addRole(role.getDisplay_name()));
        permissions.forEach(permission -> info.addStringPermission(permission.getName()));
        return info;
    }

    /**
     * 登陆
     * @param authenticationToken
     * @return
     * @throws AuthenticationException
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken)
            throws AuthenticationException {
        if (authenticationToken.getPrincipal() == null) {
            return null;
        }
        //获取用户信息
        String username = authenticationToken.getPrincipal().toString();
        Admin user = null;
        try {
            //调用查询的方法查询用户名
            user = adminService.findByName(username);
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (user == null) {
            //这里返回后会报出对应异常
            return null;
        } else {
            //这里验证authenticationToken和simpleAuthenticationInfo的信息
            String password = user.getPassword();
            SimpleAuthenticationInfo simpleAuthenticationInfo =
                    //shiro自动检验密码
                    //user，密码，唯一权限id
            new SimpleAuthenticationInfo(user, password, getName());
            return simpleAuthenticationInfo;
        }
    }

}
