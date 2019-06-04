package hacker.channel.manage.service;

import hacker.framework.model.entity.Pay;

/**
 * 支付
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi(walker)
 * @date 2019/6/4 13:39
 */
public interface PayService {


    /**
     * 支付
     * @param
     * @param pay
     * @return
     */
    String Pay(Pay pay);


    /**
     * 跟住用户id查询支付状态
     * @param tradeNo
     * @return
     */
    Pay findById(Long tradeNo);
}
