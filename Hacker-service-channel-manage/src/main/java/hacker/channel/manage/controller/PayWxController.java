package hacker.channel.manage.controller;

import hacker.channel.manage.mapper.PayMapper;
import hacker.framework.common.request.ResultBean;
import hacker.framework.model.entity.Pay;
import hacker.framework.util.SnowflakeIdWorker;
import hacker.framework.util.TestUtil;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * @program:J X N H
 * @EnglishName LuKe
 * @authod LiuQi(walker)
 * @date 2019/5/15 10:47
 * 微信支付
 **/
@RestController
@RequestMapping("/admin/wx")
@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}, origins = "*")
public class PayWxController {

    private static final Logger log= LoggerFactory.getLogger(PayAliController.class);

    @Value("${merid}")
    private String merid;// 分配的商户号
    @Value("${key}")
    private String key;// 商户号对应的密钥
    @Value("${notifyUrl}")
    private String notifyUrl;// 用于接收回调通知的地
    @Value("${noncestr}")
    private String noncestr;//随机参数

    @Autowired
    private PayMapper payMapper;

    /***
     *
     * @param paylogDo 订单信息： 用户id，支付金额，账号id
     * @param //address 加密经纬度
     * @return
     */
    /*@RequestMapping(value = "/payLog",method = RequestMethod.POST,produces = "application/json")*/
    @PostMapping(value = "/payLog",consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ApiOperation(value = "提交微信支付", notes = "true:提交成功,false:提交失败")
    public ResultBean<String> Pay(@RequestBody Pay paylogDo){
        //第三方接口-----换成自己的调用的第三方即可
        String wxurl="https://alipay.3c-buy.com/api/createWxOrder";

        Map<String, String> paramMap = new HashMap<String, String>();

        //产生支付单号
        SnowflakeIdWorker idWorker0 = new SnowflakeIdWorker(0, 0);
        String merchantOutOrderNo = idWorker0.nextId()+"";
        //订单时间
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
        String orderTime = sdf.format(new Date());

        //商户
        paramMap.put("merchantOutOrderNo",merchantOutOrderNo);
        paramMap.put("merid",merid);
        paramMap.put("noncestr",noncestr);
        paramMap.put("notifyUrl", notifyUrl);
        paramMap.put("orderMoney",paylogDo.getPayAmount().toString());
        paramMap.put("orderTime",orderTime);

        //添加订单信息
        Pay insertPayLogDO=new Pay();
        insertPayLogDO.setUserId(paylogDo.getUserId());
        insertPayLogDO.setAdminId(paylogDo.getAdminId());//账户id
        insertPayLogDO.setPayAmount(paylogDo.getPayAmount()); //金额
        insertPayLogDO.setPayStatus(3);//支付状态：1-成功；2-失败；3-等待支付
        insertPayLogDO.setPayType(2);//支付方式：1-支付宝；2-微信；3-银联
        insertPayLogDO.setGmtCreate(new Date());
        insertPayLogDO.setMerchantOutOrderNo(merchantOutOrderNo); //编号

        payMapper.insertSelective(insertPayLogDO);

        String StringA= TestUtil.formatUrlMap(paramMap,false, false);//待签名串
        String sign=TestUtil.getMD5(StringA+"&key="+key);//签名


        //对参数按照key=value的格式,参照参数名ASCII码排序,并对value做utf-8的encode编码后得到字符串 param
        String param = TestUtil.formatUrlMap(paramMap, true, false);

        String url = wxurl + "?" + param + "&sign=" + sign + "&id=" + paylogDo.getUserId();

        log.info("url-[{}]",url);

        //返回信息
        ResultBean<String> resultBean = new ResultBean<>();
        resultBean.setData(url);
        resultBean.setCode(200);
        resultBean.setSuccess(true);
        resultBean.setMsg("微信支付");
        return resultBean;
    }
}
