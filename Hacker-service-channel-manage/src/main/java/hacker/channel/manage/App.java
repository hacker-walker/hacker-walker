package hacker.channel.manage;

import com.github.pagehelper.autoconfigure.PageHelperAutoConfiguration;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScans;
import org.springframework.web.bind.annotation.RequestMapping;


@SpringBootApplication(exclude = {PageHelperAutoConfiguration.class})
// 扫描common、util下的所有类
@ComponentScans(@ComponentScan("hacker"))
// 扫描实体类
@EntityScan("hacker.framework.model")
//扫描接口
@MapperScan("hacker.channel.manage.mapper")
//mapper
@RequestMapping(value = "/")
public class App {

    public static void main(String[] args) {

        SpringApplication.run(App.class, args);

        System.out.println("代码开源不易，且珍惜!");
        System.out.println("2019年，祝每一个努力的人都有所收获");
    }

}
