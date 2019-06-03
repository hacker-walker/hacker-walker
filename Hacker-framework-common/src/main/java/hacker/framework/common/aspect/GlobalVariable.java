package hacker.framework.common.aspect;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;


/**
 * 全局变量相关配置信息
 *
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 11:44
 */
@Component
@Data
public class GlobalVariable {


    /**
     * 消息校验token
     */
    @Value("${token}")
    private String token;

    @Value("${secret}")
    private String secret;

}
