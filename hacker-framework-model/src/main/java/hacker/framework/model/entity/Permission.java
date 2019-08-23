package hacker.framework.model.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * 权限表
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 15:17
 */

@Data
@TableName("tb_permission")
public class Permission implements Serializable {

    @TableId(type = IdType.AUTO)
    private Integer id;

    private String name;        //权限唯一ID
    private Integer parent_id;  //父类ID,根节点为0
    private String index_name;
    private String display_name;//权限展示名
    private Integer is_show;    //是否展示在菜单栏
    private Integer status;     //状态 1：正常 0：禁用
    private Date created_at;
    private Date updated_at;


    @Override
    public String toString() {
        return "Permission{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", index_name='" + index_name + '\'' +
                ", parent_id=" + parent_id +
                ", display_name='" + display_name + '\'' +
                ", is_show=" + is_show +
                ", status=" + status +
                ", created_at=" + created_at +
                ", updated_at=" + updated_at +
                '}';
    }
}
