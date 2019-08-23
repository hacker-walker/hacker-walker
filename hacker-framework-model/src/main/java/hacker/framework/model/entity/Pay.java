package hacker.framework.model.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

/**
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi(walker)
 * @date 2019/6/4 13:45
 */
@Data
@TableName("tb_pay")
public class Pay {

    private Long tradeNo;  //用户订单号

    private Integer userId;

    private Integer adminId;

    private Date payTime;

    private BigDecimal payAmount;

    private Integer payStatus;

    private Integer payType;

    private Date gmtCreate;

    private String merchantOutOrderNo; //商家支付订单号

    @Override
    public String toString() {
        return "Pay{" +
                "tradeNo=" + tradeNo +
                ", userId=" + userId +
                ", adminId=" + adminId +
                ", payTime=" + payTime +
                ", payAmount=" + payAmount +
                ", payStatus=" + payStatus +
                ", payType=" + payType +
                ", gmtCreate=" + gmtCreate +
                ", merchantOutOrderNo='" + merchantOutOrderNo + '\'' +
                '}';
    }
}
