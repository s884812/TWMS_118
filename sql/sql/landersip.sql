/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50533
Source Host           : localhost:3306
Source Database       : tongbu

Target Server Type    : MYSQL
Target Server Version : 50533
File Encoding         : 65001

Date: 2017-03-22 23:38:35
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `wz_facedata`
-- ----------------------------
DROP TABLE IF EXISTS `wz_facedata`;
CREATE TABLE `wz_facedata` (
  `faceid` int(11) NOT NULL,
  `name` tinytext CHARACTER SET utf8,
  PRIMARY KEY (`faceid`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of wz_facedata
-- ----------------------------
