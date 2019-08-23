package hacker.framework.model.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * 角色表
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 15:14
 */

@Data
@TableName("tb_role")
public class Role implements Serializable {

    @TableId(type = IdType.AUTO)
    private Integer id;

    private String display_name;//角色展示名
    private Integer level;      //角色等级
    private Date created_at;
    private Date updated_at;

    @Override
    public String toString() {
        return "Role{" +
                "id=" + id +
                ", display_name='" + display_name + '\'' +
                ", level=" + level +
                ", created_at=" + created_at +
                ", updated_at=" + updated_at +
                '}';
    }
}
