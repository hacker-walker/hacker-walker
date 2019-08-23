package hacker.framework.model.Cto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

/**
 * 封装roleid和permissionid,用来给角色赋权
 *
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 15:26
 */
@Getter
@Setter
public class RolePermissions {


    Integer rid;
    Integer pid;
    List<Integer> pids;

    public RolePermissions() {
    }

    public RolePermissions(Integer rid, List<Integer> pids) {
        this.rid = rid;
        this.pids = pids;
    }

    public RolePermissions(Integer rid, Integer pid) {
        this.rid = rid;
        this.pid = pid;
    }

    public List<RolePermissions> getObj() {
        List<RolePermissions> list = new ArrayList<>(12);
        pids.forEach(pid -> {
            list.add(new RolePermissions(this.rid, pid));
        });
        return list;
    }

}
