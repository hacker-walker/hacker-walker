package hacker.channel.manage.mapper;

import hacker.framework.model.entity.Pay;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * 支付
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi(walker)
 * @date 2019/6/4 13:41
 */
@Mapper
@Repository
public interface PayMapper {

    //跟住id查询支付状态
    Pay selectByPrimaryKey(Long key);

    //保存
    int insertSelective(Pay record);

   // List<Pay> query(PayQuery query);

    String Pay(String id, String orderMoney);

    //修改订单状态
    int updateOrderStatus(Pay record);
}
