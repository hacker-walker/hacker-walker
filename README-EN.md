### Jin Xia Nian Hua

```
Hello,Welcome to boot...SpringBoot The version number of the:v2.0.7.RELEASE Project producer:LuKe(walker)

It's not easy to develop,I hope you can keep the copyright declaration for a while。Pencil lead💗💗💗
```

<h1><a href="#">hacker-walker</a></h1>

🇨🇳[简体中文](./README.md) | 🇺🇸English | [更新日志](https://github.com/java-aodeng/hope-plus/commits/master)

[![author](https://img.shields.io/badge/author-walker-blue.svg)](https://wuxf.cn)
[![JDK](https://img.shields.io/badge/JDK-1.8-orange.svg)](https://github.com/hacker-walker/hacker-walker)
[![license](https://img.shields.io/badge/license-GPL--3.0-red.svg)](https://github.com/hacker-walker/hacker-walker/releases/tag/3.0)
[![QQ群](https://img.shields.io/badge/chat-walkerQQ%E7%BE%A4-yellow.svg)](https://jq.qq.com/?_wv=1027&k=5mjexzD)
<a href="https://github.com/hacker-walker/hacker-walker"><img alt="star" src="https://img.shields.io/github/stars/hacker-walker/hacker-walker.svg?label=Stars&style=social"/></a>
[![star](https://gitee.com/walker-cloud/hacker-walker/badge/star.svg?theme=dark)](https://gitee.com/walker-cloud/hacker-walker/stargazers)
[![released version](https://img.shields.io/badge/release-3.0-green.svg)](https://github.com/hacker-walker/hacker-walker/releases)  

Wechat Public Number:Jin Xia Nian Hua

![file](https://images.gitee.com/uploads/images/2019/0610/161454_710bf233_2127888.png)

### brief introduction
   **Project address：https://gitee.com/walker-cloud/hacker-walker**
```
     In 2019, I wish everyone who works hard a reward
On the road of life, tears are on the left, laughter is on the right, and flowers of life are on both sides.
Through the four seasons of life, we experienced the baptism of tears, witnessed the moment of laughter, appreciated the rise of the morning sun, gazed at the blooming of flower stamens.
On the way of life, we harvest the inexhaustible gift of the God of life, and set out with her gifts and blessings. All the way, because of the harvest, we have never been cold, we have never been lonely.

Netease Mailbox Communication: a18627830855@163.com   | QQ Communication: 1722009230   | wx Communication: 18627830855   | QQ-Group Communication：741413607

```
### Account number
```
1.Logon test:
     Visit URL: http://localhost:8888/success
     If you are not logged in, you will jump directly to the login page: http://localhost:8888/dr
2.Login account description:
     Login account shows that there is no server database, and SQL statement will be placed later
     Account Name：admin
     Password：abc123
     Verification code (this is not done yet, it will be put on later)
3.After successful login, it will jump to the relevant success page
4.User Information Display (after login)
     URL: http://localhost:8888/qdst

Backend API management：localhost:8888/swagger-ui.html
```
### Modular Partitioning
| Modular   | Interpretation   |
| -- | -- |
| hacker-db | DatabaseSql |
| hacker-service-channel-manage  |  Background management module,Mapper,Service etc |
| hacker-framework-common  | Various forcing configurations for iso-frameworks   |
| hacker-framework-model  |  Database Core Entity Class  |
| hacker-govern-gateway(center)  |  gateway  |
| hacker-framework-util  |  Tool class  |

### Instructions
```
1.Use command pull substitution code：
    git clone https://gitee.com/walker-cloud/Hacker-walker.git 
2.Create a database：jinnian(jin nian)， character set：utf8;（Note: All you need to do is create a database）
3.IDEA is the best way to import this project
4.Warehouse Configuration
    open Settings option——》Choice Build Tools The following Maven tab——》Configure your own warehouse under Maven home direcdtory
5.Modify configuration
    A.open application.properties，Configure database connection
          datasource:
              url: Your database address
              username: Your database username
              password: Your database password
6.Running Project (Background Management Module)
    a.Direct operation hacker.channel.manage App in Directory
    b.Browser access：http://127.0.0.1:8888
```
### Thank
- hacker-walker The birth of the project is inseparable from the following (take open source, use open source)：
- Spring Boot：Core Framework
- Apache Shiro：Permission Framework
- Thymeleaf：template engine
- MyBatis-plus：Be used for Java Of MyBatis SQL Mapper frame
- alibaba/druid：Database connection pool
- alibaba/fastjson：Fast JSON parser/generator for Java
- Lombok：Make the code more concise
- swagger：Swagger（Swagger）The most popular API expression tool in the world。
- Html5：Front-end page

### Framework demonstration
```
At present, it is still in perfect development, and will be put here to show the effect, please laugh!
```
```
Login interface
```
![Login interface](https://images.gitee.com/uploads/images/2019/0610/180431_93d56664_2127888.png)
```
Background management interface
```
![Background management interface](https://images.gitee.com/uploads/images/2019/0613/111333_0edb6d4e_2127888.png)
![1](https://i.loli.net/2019/07/03/5d1c94263e68624395.png)
![2](https://i.loli.net/2019/07/03/5d1c943d8714f56661.png)
![3](https://i.loli.net/2019/07/03/5d1c9443c143583430.png)
### Friendship Links

- Author: Low-key Panda  Blog：http://ilovey.live （Reading ten thousand books, traveling ten thousand miles, making a lot of money）Wechat Public Number: Low-key Panda  
- Author:walker Blog：https://wuxf.cn (Unknown Partners in Australia) Wechat Public Number：jin xia nian hua

### Last
http://doc.zengrong.net/smart-questions/cn.html   
In order to prevent the world from being destroyed, in order to love and justice, it is recommended to look at the wisdom of asking questions.

## You thumb up encouragement is the motivation for us to move forward
![cartridge](https://i.loli.net/2019/07/13/5d29c699493f847597.png)