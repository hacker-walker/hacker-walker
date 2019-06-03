package hacker.framework.common.annotation;

import javafx.scene.control.Pagination;
import lombok.Data;

import java.io.Serializable;


/**
 * 返回结果封装
 *
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 11:44
 */
@Data
public class ResultInfo implements Serializable {


    private String status;

    private String message;

    private Object data;

    private Pagination pagination;    //标记页码数

    private String code;


}