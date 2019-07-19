<-- 数据库数据展示 -->
/*
SQLyog Ultimate v8.32
MySQL - 8.0.15 : Database - jinnian
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`jinnian` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `jinnian`;

/*Table structure for table `tb_admin` */

DROP TABLE IF EXISTS `tb_admin`;

CREATE TABLE `tb_admin` (
  `id` int(32) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `username` varchar(64) NOT NULL,
  `password` varchar(122) NOT NULL,
  `phone` varchar(64) DEFAULT NULL,
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '状态 成功:1 失败:0',
  `is_readonly` int(2) NOT NULL DEFAULT '1' COMMENT '是否只允许读操作 0:否 1:是',
  `last_login_ip` varchar(64) NOT NULL DEFAULT '' COMMENT '登陆IP',
  `last_login_token` varchar(64) DEFAULT NULL COMMENT '登陆的token',
  `login_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '登陆时间',
  `created_at` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  `updated_at` timestamp NULL DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `tb_admin` */

insert  into `tb_admin`(`id`,`username`,`password`,`phone`,`status`,`is_readonly`,`last_login_ip`,`last_login_token`,`login_at`,`created_at`,`updated_at`) values (1,'admin','9feb61735eae35a19c709cdcda699f80e087bc3f0e1049768fbb457a0d38702b','admin',1,1,'192.168.101.9','4e7ead6c8d6e4167ae4f13aac878956a','2019-06-16 10:39:15','2019-05-26 10:14:15','2019-05-26 10:14:15');

/*Table structure for table `tb_admin_role` */

DROP TABLE IF EXISTS `tb_admin_role`;

CREATE TABLE `tb_admin_role` (
  `role_id` int(10) unsigned NOT NULL,
  `admin_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`role_id`,`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `tb_admin_role` */

insert  into `tb_admin_role`(`role_id`,`admin_id`) values (1,1),(1,2),(2,1);

/*Table structure for table `tb_permission` */

DROP TABLE IF EXISTS `tb_permission`;

CREATE TABLE `tb_permission` (
  `id` int(32) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL COMMENT '权限对应的唯一ID',
  `index_name` varchar(64) NOT NULL DEFAULT '' COMMENT '前端路由',
  `parent_id` int(32) NOT NULL DEFAULT '0' COMMENT '父类id 根节点为0',
  `display_name` varchar(64) NOT NULL COMMENT '权限展示名',
  `is_show` int(2) NOT NULL DEFAULT '1' COMMENT '是否展示在菜单栏',
  `status` int(2) NOT NULL DEFAULT '1' COMMENT '状态 禁用:0 未禁用:1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NULL DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `tb_permission` */

insert  into `tb_permission`(`id`,`name`,`index_name`,`parent_id`,`display_name`,`is_show`,`status`,`created_at`,`updated_at`) values (1,'sytem.admin.list','/system/admin/list',0,'管理员列表',1,1,'2019-05-24 16:21:28','2019-05-24 16:21:28');

/*Table structure for table `tb_role` */

DROP TABLE IF EXISTS `tb_role`;

CREATE TABLE `tb_role` (
  `id` int(32) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `display_name` varchar(64) NOT NULL COMMENT '角色展示名',
  `level` int(2) NOT NULL DEFAULT '0' COMMENT '角色等级',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NULL DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `tb_role` */

insert  into `tb_role`(`id`,`display_name`,`level`,`created_at`,`updated_at`) values (1,'超级管理员',1,'2019-05-26 10:14:15','2019-05-26 10:14:15'),(2,'管理员',0,'2019-06-25 12:42:12','2019-06-26 10:12:18');

/*Table structure for table `tb_role_permission` */

DROP TABLE IF EXISTS `tb_role_permission`;

CREATE TABLE `tb_role_permission` (
  `permission_id` int(10) unsigned NOT NULL,
  `role_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `tb_role_permission` */

insert  into `tb_role_permission`(`permission_id`,`role_id`) values (1,1),(1,2),(2,1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
