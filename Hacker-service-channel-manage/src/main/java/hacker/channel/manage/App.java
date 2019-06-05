package hacker.channel.manage;

import com.baomidou.mybatisplus.extension.spring.MybatisSqlSessionFactoryBean;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.BeansException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScans;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.sql.DataSource;


@SpringBootApplication
// 扫描common、util下的所有类
@EnableScheduling
@ComponentScans(@ComponentScan("hacker.framework"))
// 扫描实体类
@EntityScan("hacker.framework.model")
//扫描接口
@MapperScan("hacker.channel.manage.mapper")
//dao
@RequestMapping(value = "/")
public class App implements ApplicationContextAware {

    public static void main(String[] args) {

        SpringApplication.run(App.class, args);

        System.out.println("代码开源不易，且珍惜!");
        System.out.println("2019年，祝每一个努力的人都有所收获");
    }

    //applicationContext
    private ApplicationContext applicationContext;
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }

    //加载dataSource
    @Bean
    public SqlSessionFactory sqlSessionFactory() throws Exception {
        MybatisSqlSessionFactoryBean sessionFactoryBean = new MybatisSqlSessionFactoryBean();
        sessionFactoryBean.setDataSource((DataSource) applicationContext.getBean("dataSource"));
        return sessionFactoryBean.getObject();
    }

}
