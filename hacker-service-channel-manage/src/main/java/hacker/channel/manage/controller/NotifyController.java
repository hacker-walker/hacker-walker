package hacker.channel.manage.controller;

import hacker.channel.manage.mapper.PayMapper;
import hacker.framework.model.entity.Pay;
import hacker.framework.util.TestUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * 支付回调
 * @Description: J X N H
 * @EnglishName LuKe
 * @author LiuQi(walker)
 * @date 2019/6/9 19:14
 */
@RestController
@RequestMapping("/api/notify")
public class NotifyController {

    //日志
    private static final Logger log = LoggerFactory.getLogger(PayAliController.class);

    //配置
    @Value("${merid}")
    private String merid;// 分配的商户号
    @Value("${key}")
    private String key;// 商户号对应的密钥
    @Value("${notifyUrl}")
    private String notifyUrl;// 用于接收回调通知的地址
    @Value("${noncestr}")
    private String noncestr;//随机参数

    @Autowired
    private PayMapper payMapper;

    /***
     * 支付回调 更新订单支付状态
     * @param request
     * @param response
     * @return
     */
    @ResponseBody
    @RequestMapping("/callback")
    public String callback(HttpServletRequest request, HttpServletResponse response) {
        //订单号1
        String merchantOutOrderNo = request.getParameter("merchantOutOrderNo");
        //商户号
        String merid = request.getParameter("merid");
        //订单详情
        String msg = request.getParameter("msg");
        //随机字符串，和商户下单时传的一致
        String noncestr = request.getParameter("noncestr");
        //平台订单号
        String orderNo = request.getParameter("orderNo");
        //支付结果
        String payResult = request.getParameter("payResult");
        //签名
        String sign = request.getParameter("sign");
        //和下单时所填id字段一致，下单时未传则为空
        String id = request.getParameter("id");
        //支付宝订单号 支付宝渠道才会有
        String aliNo = request.getParameter("aliNo");

        //拼接签名参数
        Map<String, String> signParamMap = new HashMap<String, String>();
        signParamMap.put("merchantOutOrderNo", merchantOutOrderNo);
        signParamMap.put("merid", merid);
        signParamMap.put("msg", msg);
        signParamMap.put("noncestr", noncestr);
        signParamMap.put("orderNo", orderNo);
        signParamMap.put("payResult", payResult);
        //转换为key=value模式
        String signParam = TestUtil.formatUrlMap(signParamMap, false, false);
        //生成签名
        String signLocal = TestUtil.getMD5(signParam + "&key=" + key);
        //对比签名
        if (signLocal.equals(sign)) {
            //更新订单支付状态 订单返回结果,1 为成功,0为失败，3为处理中
            Pay payLogDO = new Pay();

            if ("1".equals(payResult)) {
                payLogDO.setPayTime(new Date());
                payLogDO.setPayStatus(1);//支付状态：1-成功；2-失败；3-等待支付
                payLogDO.setMerchantOutOrderNo(merchantOutOrderNo);
                payMapper.updateOrderStatus(payLogDO);
            }
            if ("0".equals(payResult)) {
                payLogDO.setPayTime(new Date());
                payLogDO.setPayStatus(2);//支付状态：1-成功；2-失败；3-等待支付
                payLogDO.setMerchantOutOrderNo(merchantOutOrderNo);
                payMapper.updateOrderStatus(payLogDO);
            }
            if ("3".equals(payResult)) {
                payLogDO.setPayTime(new Date());
                payLogDO.setPayStatus(3);//支付状态：1-成功；2-失败；3-等待支付
                payLogDO.setMerchantOutOrderNo(merchantOutOrderNo);
                payMapper.updateOrderStatus(payLogDO);
            }
            log.info("验签成功");
            return "success";
        } else {
            /*PayLogDO payLogDO=new PayLogDO();
            payLogDO.setPayTime(new Date());
            payLogDO.setPayStatus(2);//支付状态：1-成功；2-失败；3-等待支付
            payLogDO.setMerchantOutOrderNo(merchantOutOrderNo);
            payLogDOMapper.updateOrderStatus(payLogDO);*/
            log.info("验签失败");
            return "faild";
        }
    }
}
