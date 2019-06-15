 
### 堇夏年华        
    

```
Hello,Welcome to boot...SpringBoot的版本号:v2.0.7.RELEASE 项目制作人:LuKe(walker)

    开发不易，希望您可以保留一下版权声明。笔芯💗💗💗
```
<h1><a href="#">Hacker-walker</a></h1>

🇨🇳简体中文 | 🇺🇸[English](./README-EN.md) | [更新日志](https://gitee.com/walker-cloud/Hacker-walker)

[![author](https://img.shields.io/badge/author-walker-blue.svg)](https://wuxf.cn)
[![JDK](https://img.shields.io/badge/JDK-1.8-orange.svg)](https://github.com/hacker-walker/Hacker-walker)
[![license](https://img.shields.io/badge/license-GPL--3.0-red.svg)](https://github.com/hacker-walker/Hacker-walker/releases/tag/3.0)
[![QQ群](https://img.shields.io/badge/chat-walkerQQ%E7%BE%A4-yellow.svg)](https://jq.qq.com/?_wv=1027&k=5mjexzD)
[![发行版本](https://img.shields.io/badge/release-3.0-green.svg)](https://github.com/hacker-walker/Hacker-walker/releases)  

微信公众号:堇夏年华

![file](https://images.gitee.com/uploads/images/2019/0610/161454_710bf233_2127888.png)


### 简介
   **项目地址：https://gitee.com/walker-cloud/Hacker-walker** 

         **2019年，祝每一个努力的人都有所收获 ** 

       人生路上，泪水在左，欢笑在右，生命的鲜花铺满两旁。
       走过生命的四季，我们经历了泪水的洗礼，见证了欢笑的时刻，欣赏着朝阳的升起，凝视着花蕊的绽放。
       人生途中，我们收获着生命之神不尽的惠赠，满揣着她的礼物与祝福启程。一路走来，因为收获，我们不曾寒冷，我们从未孤独。

       
    网易邮箱 交流: a18627830855@163.com   | QQ 交流: 1722009230   | wx 交流: 18627830855   | QQ群 交流：741413607


### 账号
    
```
1.登录测试:
	访问URL: http://localhost:8888/success
	如果未登录会直接跳到登录页: http://localhost:8888/dr
2.登录账号说明:
     此处没有放服务器数据库,后面会放sql语句
     账户名：admin
     密码：abc123
     验证码(这个还没做，后面会放上去)
3.登录成功后会跳转到相关的成功页面
4.用户信息显示(登陆后)
	URL: http://localhost:8888/qdst

后端API管理：localhost:8888/swagger-ui.html
```

### 模块划分
| 模块   | 释义   |
| -- | -- |
| Hacker-service-channel-manage  |  后台管理模块,Mapper,Service等 |
| Hacker-framework-common  | 框架的各种牛逼配置   |
| Hacker-framework-model  |  数据库核心实体类  |
| Hacker-govern-gateway(center)  |  网关  |
| Hacker-framework-util  |  工具类  |



### 使用说明 
```
1.使用命令拉取代码：
    git clone https://gitee.com/walker-cloud/Hacker-walker.git 
2.创建数据库：jinnian(堇年)， 字符集：utf8;（注意：只需要你创建数据库即可）
3.最好使用IDEA导入该项目
4.仓库配置
    打开Settings选项——》选择Build Tools下面的Maven选项卡——》在Maven home direcdtory下配置自己的仓库
5.修改配置
    A.打开application.properties，配置数据库连接
          datasource:
              url: 你的数据库地址
              username: 你的数据库用户名
              password: 你的数据库密码
6.运行项目(后台管理模块)
    a.直接运行hacker.channel.manage目录下的App
    b.浏览器访问：http://127.0.0.1:8888
```


### 感谢
- Hacker-walker的诞生离不开下面这些项目（取之开源，用之开源）：
- Spring Boot：核心框架
- Apache Shiro：权限框架
- Thymeleaf：模板引擎
- MyBatis-plus：用于Java的MyBatis SQL Mapper框架
- alibaba/druid：数据库连接池
- alibaba/fastjson：用于Java的快速JSON解析器/生成器
- Lombok：让代码更简洁
- swagger：Swagger（丝袜哥）是世界上最流行的 API 表达工具。
- Html5：前端页面


### 框架演示

```
  目前还在完善开发，后面会放到这里展示效果，请笑纳！
```
```
登陆界面
```
![登陆界面](https://images.gitee.com/uploads/images/2019/0610/180431_93d56664_2127888.png)
```
后台管理界面
```
![后台界面](https://images.gitee.com/uploads/images/2019/0613/111333_0edb6d4e_2127888.png)
### 友情链接

- 作者:低调小熊猫 博客：https://aodeng.cc （我们不改变世界，我们跟着世界改变）微信公众号：低调小熊猫   
- 作者:walker 博客：https://wuxf.cn (澳大利亚不知名企业合伙人) 微信公众号：堇夏年华

### Last
    为了防止世界被毁灭，为了爱情和正义，建议大家看看提出问题的智慧。
http://doc.zengrong.net/smart-questions/cn.html

    In order to prevent the world from being destroyed, in order to love and justice, it is recommended to look at the wisdom of asking questions.
