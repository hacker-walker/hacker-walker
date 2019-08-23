package hacker.framework.common.object;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

/**
 * 用于bootstrap table返回json格式
 *
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi(walker)
 * @date 2019/6/15 23:15
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class PageResultVo {
    private Long total;
    private List rows;

    public PageResultVo(Long total, List rows) {
        this.total = total;
        this.rows = rows;
    }

    public PageResultVo() {
    }
}
