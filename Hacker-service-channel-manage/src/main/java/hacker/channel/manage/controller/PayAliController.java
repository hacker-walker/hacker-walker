package hacker.channel.manage.controller;

import hacker.channel.manage.service.PayService;
import hacker.framework.common.request.ResultBean;
import hacker.framework.model.entity.Pay;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @Description: J X N H
 * @EnglishName LuKe
 * @author LiuQi(walker)
 * @date 2019/6/4 16:47
 * 支付宝支付
 */
@RestController
@RequestMapping("/admin/pay")
@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}, origins = "*")
public class PayAliController {

    //日志
    private static final Logger log= LoggerFactory.getLogger(PayAliController.class);

    @Autowired
    private PayService payService;

    /***
     * 支付宝订单支付
     * @param pay  payAmount channelId 订单信息：用户id，支付金额，账户id
     * @return 返回url和状态
     */
    @PostMapping(value = "/pay",consumes = "application/json")
    @ApiOperation(value = "提交支付宝支付", notes = "true:提交成功,false:提交失败")
    public ResultBean<String> Pay(@RequestBody Pay pay){

        String url = payService.Pay(pay);

        log.info("url-[{}]",url);

        ResultBean<String> resultBean = new ResultBean<>();
        resultBean.setData(url);
        resultBean.setCode(200);
        resultBean.setSuccess(true);
        resultBean.setMsg("支付宝支付");
        return resultBean;
    }

    /**
     * 根据ID去查询支付状态
     */
    @GetMapping("/findOne")
    @ApiOperation(value = "跟住ID去查询支付状态")
    public ResultBean findById(Long tradeNo){

        return ResultBean.ofSuccess(payService.findById(tradeNo));
    }

}
