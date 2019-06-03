package hacker.framework.common.annotation;



/**
 *
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 11:45
 */
public enum BaseExceptionEnum {

    NOT_LOGIN(10001, "操作会话已失效，请重新登录！"),
    NOT_PERMISSION(10002, "您无该权限"),

    EC00000200(200, "success"),
    EC00000500(500, "系统异常"),
    EC00000404(404, "该接口不存在"),

    EC00000000(100000, "无法加载切点对象"),
    EC00000001(100001, "链接点参数为空"),
    EC00000002(100002, "类或对象访问权限限制"),
    EC00000003(100003, "I/O异常"),
    EC00000004(100004, "obj to json 失败"),
    EC00000005(100005, "不支持字符编码"),
    EC00000006(100006, "没有此算法"),
    EC00000007(100007, "缺少算法配置参数"),
    EC00000008(100008, "读取私钥失败"),
    EC00000009(100009, "加载私钥失败"),
    EC00000010(100010, "密文数据已损坏"),
    EC00000011(100011, "私钥长度非法"),
    EC00000012(100012, "私钥非法"),
    EC00000013(100013, "读取公钥失败"),
    EC00000014(100014, "加载公钥失败"),
    EC00000015(100015, "明文数据已损坏"),
    EC00000016(100016, "公钥非法"),
    EC00000017(100017, "公钥长度非法"),
    EC00000018(100018, "签名失败"),
    EC00000019(100019, "验签失败"),


    EL00000000(200000, "数据报为空"),
    EL00000001(200001, "转换数据报返回为空"),
    EL00000002(200002, "目标名称为空"),
    EL00000003(200003, "调用API失败"),
    EL00000004(200004, "参数名不能为空"),
    EL00000005(200005, "参数不能为空"),
    EA00000001(200001, "签名认证失败");

    private int code;

    private String message;

    BaseExceptionEnum(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
