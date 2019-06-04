package hacker.channel.manage.service.impl;

import hacker.channel.manage.mapper.PayMapper;
import hacker.channel.manage.service.PayService;
import hacker.framework.model.entity.Pay;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import hacker.framework.util.SnowflakeIdWorker;
import hacker.framework.util.TestUtil;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * 支付
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi(walker)
 * @date 2019/6/4 13:40
 */
@Service
public class PayServiceImpl implements PayService {

    //配置
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

    /**
     * 支付
     * @author liuqi
     * @param pay
     * @return
     */
    @Override
    public String Pay(Pay pay) {
        Map<String, String> paraMap = new HashMap<String, String>();

        //产生支付单号
        SnowflakeIdWorker idWorker0 = new SnowflakeIdWorker(0, 0);
        String merchantOutOrderNo = idWorker0.nextId()+"";
        //订单时间---格式yyyyMMddHHmmss
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
        String orderTime = sdf.format(new Date());

        paraMap.put("merchantOutOrderNo", merchantOutOrderNo);
        paraMap.put("merid", merid);
        paraMap.put("noncestr", noncestr);
        paraMap.put("orderMoney", pay.getPayAmount().toString());
        paraMap.put("orderTime", orderTime);
        paraMap.put("notifyUrl", notifyUrl);

        //添加订单信息
        Pay insertPay=new Pay();
        insertPay.setUserId(pay.getUserId());
        insertPay.setAdminId(pay.getAdminId()); //账号id
        insertPay.setPayAmount(pay.getPayAmount()); //金额
        insertPay.setPayStatus(3);//支付状态：1-成功；2-失败；3-等待支付
        insertPay.setPayType(1);//支付方式：1-支付宝；2-微信；3-银联
        insertPay.setGmtCreate(new Date());
        insertPay.setMerchantOutOrderNo(merchantOutOrderNo); //编号

        //调用添加的方法
        payMapper.insertSelective(insertPay);

        //对参数按照 key=value 的格式，并参照参数名 ASCII 码排序后得到字符串 stringA
        String stringA = TestUtil.formatUrlMap(paraMap, false, false);
        //在stringA最后拼接上key得到stringsignTemp字符串,并对stringsignTemp进行MD5运算，得到sign值
        String stringsignTemp = stringA + "&key=" + key;
        String sign = TestUtil.getMD5(stringsignTemp);
        //对参数按照key=value的格式,参照参数名ASCII码排序,并对value做utf-8的encode编码后得到字符串 param
        String param = TestUtil.formatUrlMap(paraMap, true, false);

        String payUrl = "https://alipay.3c-buy.com/api/createOrder";//这是H5调支付宝的路径

        //将此URL送至APP前端页面或手机浏览器打开，即可自动调起支付宝(需要安装)发起支付
        String url = payUrl + "?" + param + "&sign=" + sign + "&id=" + pay.getUserId();
        return url;
    }


    /**
     * 跟住用户id查询支付状态
     * @param tradeNo
     * @return
     */
    @Override
    public Pay findById(Long tradeNo){

        //商户订单号
        return payMapper.selectByPrimaryKey(tradeNo);
    }


}
