package hacker.framework.model.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * 管理员表
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 15:19
 */

@Data
@TableName("tb_channel")
public class Admin implements Serializable {

    @TableId(type = IdType.AUTO)
    private Integer id;

    private String phone;
    private String username;
    private String nickname;
    private String password;
    private Integer status;
    //是否只允许读操作 0否 1是
    private Integer is_readonly;
    private String last_login_token;
    private String last_login_ip;
    private Date login_at;
    private Date created_at;
    private Date updated_at;

    //角色和权限
    @TableField(exist = false)
    private List<Role> roles;
    @TableField(exist = false)
    private List<Permission> permissions;


    @Override
    public String toString() {
        return "Admin{" +
                "id=" + id +
                ", phone='" + phone + '\'' +
                ", username='" + username + '\'' +
                ", nickname='" + nickname + '\'' +
                ", password='" + password + '\'' +
                ", status=" + status +
                ", is_readonly=" + is_readonly +
                ", last_login_token='" + last_login_token + '\'' +
                ", last_login_ip='" + last_login_ip + '\'' +
                ", login_at=" + login_at +
                ", created_at=" + created_at +
                ", updated_at=" + updated_at +
                ", roles=" + roles +
                ", permissions=" + permissions +
                '}';
    }
}

