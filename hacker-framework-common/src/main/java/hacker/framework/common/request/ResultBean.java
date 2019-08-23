package hacker.framework.common.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import hacker.framework.common.enums.BaseExceptionEnum;

import java.io.Serializable;
import java.util.Collection;


/**
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 12:34
 */
public class ResultBean<T> implements Serializable {

    private static final long serialVersionUID = -2361820086956983473L;

    /**
     * 数据明细
     */
    private T data;

    private T data1;


    private Boolean success;

    private int code;

    private String msg;

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public T getData1() {
        return data1;
    }

    public void setData1(T data1) {
        this.data1 = data1;
    }


    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Integer getTotalNum() {
        return totalNum;
    }

    public void setTotalNum(Integer totalNum) {
        this.totalNum = totalNum;
    }

    public Integer getPageIndex() {
        return pageIndex;
    }

    public void setPageIndex(Integer pageIndex) {
        this.pageIndex = pageIndex;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Integer getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(Integer totalPage) {
        this.totalPage = totalPage;
    }

    /**
     * 为null时,不参与序列化
     */
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Integer totalNum;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Integer pageIndex;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Integer pageSize;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Integer totalPage;

    public static <T> ResultBean<T> ofSuccess() {
        return of(null, true, BaseExceptionEnum.EC00000200);
    }

    public static <T> ResultBean<T> ofSuccess(T data) {
        return of(data, true, BaseExceptionEnum.EC00000200);
    }

    public static <T> ResultBean<T> ofSuccess(T data, String msg) {
        return of(data, true, BaseExceptionEnum.EC00000200.getCode(), msg);
    }

    public static <T> ResultBean<T> ofSuccess(T data, T date1, String msg) {
        return of(data, date1, true, BaseExceptionEnum.EC00000200.getCode(), msg);
    }


    public static <T> ResultBean<T> ofSuccess(T data, BaseExceptionEnum baseExceptionEnum) {
        return of(data, true, baseExceptionEnum);
    }

    public static <T> ResultBean<T> ofSuccess(T data, Integer totalNum, Integer pageIndex, Integer pageSize) {
        return of(data, true, BaseExceptionEnum.EC00000200, totalNum, pageIndex, pageSize);
    }

    public static <T> ResultBean<T> ofSuccess(T data, Integer totalNum, Integer pageIndex, Integer pageSize, String msg) {
        return of(data, true, BaseExceptionEnum.EC00000200, totalNum, pageIndex, pageSize, msg);
    }

    public static <T> ResultBean<T> of(T data, boolean success, BaseExceptionEnum baseExceptionEnum,
                                       Integer totalNum, Integer pageIndex, Integer pageSize) {
        return of(data, success, baseExceptionEnum, totalNum, pageIndex, pageSize, null);
    }

    public static <T> ResultBean of(T data, boolean success, BaseExceptionEnum baseExceptionEnum) {
        if (null != baseExceptionEnum) {
            return of(data, success, baseExceptionEnum.getCode(), baseExceptionEnum.getMessage());
        } else {
            return of(data, success, null, null);
        }
    }

    public static <T> ResultBean of(T data, boolean success, Integer code, String msg) {
        ResultBean resultBean = new ResultBean<>();
        resultBean.setData(data);
        resultBean.setSuccess(success);
        resultBean.setCode(code);
        resultBean.setMsg(msg);
        if (data instanceof Collection) {
            resultBean.setTotalNum(((Collection) data).size());
        }
        return resultBean;
    }


    public static <T> ResultBean of(T data, T data1, boolean success, Integer code, String msg) {
        ResultBean resultBean = new ResultBean<>();
        resultBean.setData(data);
        resultBean.setData1(data1);
        resultBean.setSuccess(success);
        resultBean.setCode(code);
        resultBean.setMsg(msg);
        if (data instanceof Collection) {
            resultBean.setTotalNum(((Collection) data).size());
        }
        return resultBean;
    }

    public static <T> ResultBean<T> of(T data, boolean success, BaseExceptionEnum baseExceptionEnum,
                                       Integer totalNum, Integer pageIndex, Integer pageSize, String msg) {

        ResultBean resultBean = new ResultBean();
        resultBean.setData(data);
        resultBean.setSuccess(success);
        if (null != baseExceptionEnum) {
            resultBean.setCode(baseExceptionEnum.getCode());
            resultBean.setMsg(baseExceptionEnum.getMessage());
        }
        if (data instanceof Collection && null == totalNum) {
            resultBean.setTotalNum(((Collection) data).size());
        }
        resultBean.setTotalNum(totalNum);
        resultBean.setPageIndex(pageIndex);
        resultBean.setPageSize(pageSize);
        resultBean.setTotalPage((null == pageSize || pageSize == 0) ? null : (totalNum % pageSize == 0 ? totalNum / pageSize : (totalNum / pageSize + 1)));
        resultBean.setMsg(msg);
        return resultBean;
    }


    public static ResultBean ofError(BaseExceptionEnum baseExceptionEnum) {
        return ofError(baseExceptionEnum.getCode(), baseExceptionEnum.getMessage());
    }

    public static ResultBean ofError(String msg) {
        return ofError(BaseExceptionEnum.EC00000500.getCode(), msg);
    }

    public static ResultBean ofError(int code, String msg) {
        ResultBean resultBean = new ResultBean();
        resultBean.setSuccess(false);
        resultBean.setCode(code);
        resultBean.setMsg(msg);
        resultBean.setData(null);
        return resultBean;
    }


}