package hacker.channel.manage.controller;

import hacker.channel.manage.service.PayService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * 支付
 * @Description: sunshine
 * @EnglishName LuKe
 * @authod LiuQi(walker)
 * @date 2019/6/4 13:41
 */
@Slf4j
@RestController
@RequestMapping("/api")
@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}, origins = "*")
public class PayController {

    @Autowired
    private PayService payService;


}
