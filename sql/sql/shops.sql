/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50533
Source Host           : localhost:3306
Source Database       : v118

Target Server Type    : MYSQL
Target Server Version : 50533
File Encoding         : 65001

Date: 2017-03-21 00:18:12
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `shops`
-- ----------------------------
DROP TABLE IF EXISTS `shops`;
CREATE TABLE `shops` (
  `shopid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `npcid` int(11) DEFAULT '0',
  PRIMARY KEY (`shopid`)
) ENGINE=MyISAM AUTO_INCREMENT=9595019 DEFAULT CHARSET=latin1 ROW_FORMAT=FIXED;

-- ----------------------------
-- Records of shops
-- ----------------------------
INSERT INTO `shops` VALUES ('1', '11000');
INSERT INTO `shops` VALUES ('2', '11100');
INSERT INTO `shops` VALUES ('3', '21000');
INSERT INTO `shops` VALUES ('4', '1001000');
INSERT INTO `shops` VALUES ('5', '1001001');
INSERT INTO `shops` VALUES ('6', '1001100');
INSERT INTO `shops` VALUES ('7', '1011000');
INSERT INTO `shops` VALUES ('8', '1011001');
INSERT INTO `shops` VALUES ('9', '1011100');
INSERT INTO `shops` VALUES ('10', '1021000');
INSERT INTO `shops` VALUES ('11', '1021001');
INSERT INTO `shops` VALUES ('12', '1021100');
INSERT INTO `shops` VALUES ('13', '1031000');
INSERT INTO `shops` VALUES ('14', '1031001');
INSERT INTO `shops` VALUES ('15', '1031100');
INSERT INTO `shops` VALUES ('16', '1051000');
INSERT INTO `shops` VALUES ('17', '1051001');
INSERT INTO `shops` VALUES ('18', '1051002');
INSERT INTO `shops` VALUES ('19', '1061001');
INSERT INTO `shops` VALUES ('20', '1061002');
INSERT INTO `shops` VALUES ('21', '1032103');
INSERT INTO `shops` VALUES ('22', '1052104');
INSERT INTO `shops` VALUES ('23', '1081000');
INSERT INTO `shops` VALUES ('24', '9201058');
INSERT INTO `shops` VALUES ('25', '9201059');
INSERT INTO `shops` VALUES ('26', '9201060');
INSERT INTO `shops` VALUES ('27', '9110003');
INSERT INTO `shops` VALUES ('28', '9110004');
INSERT INTO `shops` VALUES ('29', '9110005');
INSERT INTO `shops` VALUES ('30', '9110006');
INSERT INTO `shops` VALUES ('31', '9110007');
INSERT INTO `shops` VALUES ('32', '9201020');
INSERT INTO `shops` VALUES ('33', '2012003');
INSERT INTO `shops` VALUES ('34', '2012004');
INSERT INTO `shops` VALUES ('35', '2012005');
INSERT INTO `shops` VALUES ('36', '2020001');
INSERT INTO `shops` VALUES ('37', '2022000');
INSERT INTO `shops` VALUES ('38', '2022001');
INSERT INTO `shops` VALUES ('39', '2030009');
INSERT INTO `shops` VALUES ('40', '2060003');
INSERT INTO `shops` VALUES ('41', '2060004');
INSERT INTO `shops` VALUES ('42', '2060007');
INSERT INTO `shops` VALUES ('43', '2070001');
INSERT INTO `shops` VALUES ('44', '2070002');
INSERT INTO `shops` VALUES ('45', '2070003');
INSERT INTO `shops` VALUES ('46', '2022002');
INSERT INTO `shops` VALUES ('47', '2040051');
INSERT INTO `shops` VALUES ('48', '2041002');
INSERT INTO `shops` VALUES ('49', '2041003');
INSERT INTO `shops` VALUES ('50', '2041006');
INSERT INTO `shops` VALUES ('51', '2050000');
INSERT INTO `shops` VALUES ('52', '2050003');
INSERT INTO `shops` VALUES ('53', '2051000');
INSERT INTO `shops` VALUES ('54', '2040049');
INSERT INTO `shops` VALUES ('55', '2041016');
INSERT INTO `shops` VALUES ('100', '9120004');
INSERT INTO `shops` VALUES ('101', '9120019');
INSERT INTO `shops` VALUES ('102', '9120002');
INSERT INTO `shops` VALUES ('103', '9120000');
INSERT INTO `shops` VALUES ('104', '9120001');
INSERT INTO `shops` VALUES ('105', '1012004');
INSERT INTO `shops` VALUES ('106', '1100001');
INSERT INTO `shops` VALUES ('107', '1100002');
INSERT INTO `shops` VALUES ('56', '9270065');
INSERT INTO `shops` VALUES ('57', '9330086');
INSERT INTO `shops` VALUES ('58', '1091000');
INSERT INTO `shops` VALUES ('59', '9270021');
INSERT INTO `shops` VALUES ('60', '9270027');
INSERT INTO `shops` VALUES ('61', '9090000');
