-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: csdlwebc2c
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL,
  `soluong` int NOT NULL,
  `masp` varchar(255) COLLATE utf8mb4_vi_0900_ai_ci DEFAULT NULL,
  `matv` varchar(255) COLLATE utf8mb4_vi_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vi_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ctdathang`
--

DROP TABLE IF EXISTS `ctdathang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ctdathang` (
  `madh` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `masp` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `soluong` int DEFAULT NULL,
  `gia` int DEFAULT NULL,
  `diachigiao` varchar(255) COLLATE utf8mb4_vi_0900_ai_ci DEFAULT NULL,
  `diachinhan` varchar(255) COLLATE utf8mb4_vi_0900_ai_ci DEFAULT NULL,
  `tongtien` bigint DEFAULT NULL,
  `thanhtoan` varchar(255) COLLATE utf8mb4_vi_0900_ai_ci DEFAULT NULL,
  `tid` varchar(5) COLLATE utf8mb4_vi_0900_ai_ci NOT NULL,
  PRIMARY KEY (`madh`,`masp`),
  KEY `masp` (`masp`),
  KEY `ctdathang_ibfk_3` (`tid`),
  CONSTRAINT `ctdathang_ibfk_1` FOREIGN KEY (`madh`) REFERENCES `dathang` (`madh`),
  CONSTRAINT `ctdathang_ibfk_2` FOREIGN KEY (`masp`) REFERENCES `sanpham` (`masp`),
  CONSTRAINT `ctdathang_ibfk_3` FOREIGN KEY (`tid`) REFERENCES `transport` (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vi_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ctdathang`
--

LOCK TABLES `ctdathang` WRITE;
/*!40000 ALTER TABLE `ctdathang` DISABLE KEYS */;
INSERT INTO `ctdathang` VALUES ('1','SP1',5,16000000,'273 An Duong Vuong','149 Ly Tu Trong ',80000000,'80000000','GHN'),('1','SP14',6,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('10','SP14',5,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'114900000','GHN'),('11','SP1',5,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('11','SP6',5,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('12','SP6',5,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('15j0','TT3',1,4800000,NULL,'40 Su Van Hanh',4820000,'0','GHTK'),('16','SP1',5,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('16','SP13',5,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('18','SP13',5,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('18G0','SP1',2,16000000,'40 Su Van Hanh','40 Su Van Hanh',44040000,'0','GHTK'),('19','SP13',5,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('2','SP14',6,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('20','SP14',5,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('23Q3','PAG',1,38000000,NULL,'273 An Duong Vuong',86069000,'0','Grab'),('27o6','AKS3',2,12000000,'273 An Duong Vuong','40 Su Van Hanh',49029000,'0','Grab'),('3','SP14',6,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('3970','TT2',1,38000000,NULL,NULL,50020000,'0','GHTK'),('4','SP14',6,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('4784','SP12',1,17190000,'273 An Duong Vuong','Bangkok,Thai Lan',17190000,'17190000','GHN'),('47F7','TT1',1,12000000,NULL,NULL,50020000,'0','GHTK'),('5','SP13',10,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('5','SP14',6,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('56N3','SP10',2,12490000,'273 An Duong Vuong','Hàng Trống, Hoàn Kiếm, Hà Nội, Việt Nam',24980000,'0','GHN'),('57b6','SP12',1,17190000,'273 An Duong Vuong','40 Su Van Hanh',31029000,'0','Grab'),('5f2','AKS3',1,12000000,'273 An Duong Vuong','40 Su Van Hanh',44040000,'0','GHTK'),('6','SP13',10,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('6','SP14',5,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('63N3','SP10',2,12490000,'40 Le Trong Tan','40 Su Van Hanh',49029000,'0','Grab'),('7','SP13',10,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('7','SP14',5,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('73B3','SP1',1,16000000,'40 Su Van Hanh','40 Su Van Hanh',16020000,'0','GHTK'),('73S4','AKS3',4,12000000,'273 An Duong Vuong','149 Ly Tu Trong,Quan 1,TPHCM',48000000,'48000000','GHN'),('76d4','SP1',2,16000000,'40 Su Van Hanh','40 Su Van Hanh',32069000,'0','Grab'),('8','SP6',5,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('9','SP14',5,11490000,'273 An Duong Vuong','149 Ly Tu Trong ',114900000,'0','GHN'),('9n1','PAG2',1,48000000,NULL,'273 An Duong Vuong',86069000,'0','Grab');
/*!40000 ALTER TABLE `ctdathang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dathang`
--

DROP TABLE IF EXISTS `dathang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dathang` (
  `madh` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `matvban` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `matvmua` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ngaytao` datetime NOT NULL,
  `tongtien` int NOT NULL,
  `trangthai` int NOT NULL,
  PRIMARY KEY (`madh`),
  KEY `matvban` (`matvban`),
  KEY `matvmua` (`matvmua`),
  CONSTRAINT `dathang_ibfk_1` FOREIGN KEY (`matvban`) REFERENCES `userdetail` (`matv`),
  CONSTRAINT `dathang_ibfk_2` FOREIGN KEY (`matvmua`) REFERENCES `userdetail` (`matv`),
  CONSTRAINT `FK7wqv3l9dj98ww067xc81jxg65` FOREIGN KEY (`matvmua`) REFERENCES `userdetail` (`matv`),
  CONSTRAINT `FKgc66nbgjdafgt8mnvvsuh9clg` FOREIGN KEY (`matvban`) REFERENCES `userdetail` (`matv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dathang`
--

LOCK TABLES `dathang` WRITE;
/*!40000 ALTER TABLE `dathang` DISABLE KEYS */;
INSERT INTO `dathang` VALUES ('1','01','02','2021-04-30 00:00:00',6890000,4),('10','01','05','2021-05-02 00:00:00',25000000,4),('11','01','03','2021-01-09 00:00:00',60000000,1),('12','01','02','2021-01-08 00:00:00',15000000,1),('13','01','04','2021-03-04 00:00:00',25400000,1),('14','01','05','2021-02-04 00:00:00',25000000,1),('15','01','05','2021-05-09 00:00:00',30000000,1),('15j0','4810','01','2021-05-11 00:00:00',4820000,2),('16','01','05','2021-05-06 00:00:00',50000000,1),('17','01','04','2021-05-07 00:00:00',100000000,1),('18','01','02','2021-05-24 00:00:00',14000000,1),('18G0','01','01','2021-05-11 00:00:00',44040000,1),('19','01','03','2021-05-28 00:00:00',24000000,1),('2','01','03','2021-05-03 00:00:00',240000,1),('20','01','04','2021-05-30 00:00:00',21450000,1),('23Q3','4311','02','2021-05-11 00:00:00',86069000,1),('27h5','04','01','2021-05-11 00:00:00',12490000,1),('27o6','02','01','2021-05-11 00:00:00',49029000,1),('3','01','04','2021-02-04 00:00:00',250000,1),('30V7','04','01','2021-05-11 00:00:00',12490000,1),('35q2','02','01','2021-05-11 00:00:00',34380000,1),('3970','318','318','2021-05-11 00:00:00',50020000,1),('4','01','05','2021-04-10 00:00:00',600000,1),('4432','02','01','2021-05-11 00:00:00',24000000,1),('4784','02','02','2021-05-10 00:00:00',17190000,4),('47F7','327','318','2021-05-11 00:00:00',50020000,1),('5','01','04','2021-04-28 00:00:00',200000,1),('56N3','04','02','2021-05-10 00:00:00',24980000,1),('57b6','02','01','2021-05-11 00:00:00',31029000,0),('59a0','02','01','2021-05-11 00:00:00',34380000,1),('5f2','02','01','2021-05-11 00:00:00',44040000,1),('6','01','03','2021-01-12 00:00:00',150000,1),('63N3','04','01','2021-05-11 00:00:00',49029000,1),('7','01','02','2021-05-10 00:00:00',100000000,1),('72n0','02','01','2021-05-11 00:00:00',36490000,1),('73B3','01','01','2021-05-11 00:00:00',16020000,1),('73S4','02','02','2021-05-10 00:00:00',48000000,4),('76d4','01','01','2021-05-10 00:00:00',32069000,1),('76j3','02','01','2021-05-11 00:00:00',24000000,1),('77R6','01','01','2021-05-11 00:00:00',16000000,1),('79a0','02','01','2021-05-11 00:00:00',34380000,1),('8','01','01','2021-05-01 00:00:00',50000000,1),('8054','01','01','2021-05-11 00:00:00',16000000,1),('8095','04','01','2021-05-11 00:00:00',36490000,1),('89S6','01','01','2021-05-11 00:00:00',16000000,1),('9','01','02','2021-05-15 00:00:00',50000000,1),('9n1','3712','02','2021-05-11 00:00:00',86069000,1);
/*!40000 ALTER TABLE `dathang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dsquyen`
--

DROP TABLE IF EXISTS `dsquyen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dsquyen` (
  `maq` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tenq` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `trangthai` int NOT NULL,
  PRIMARY KEY (`maq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dsquyen`
--

LOCK TABLES `dsquyen` WRITE;
/*!40000 ALTER TABLE `dsquyen` DISABLE KEYS */;
INSERT INTO `dsquyen` VALUES ('1','Quản lý doanh số',1),('2','Quản lý đơn hàng',1),('3','Quản lý sản phẩm',1),('4','Quản lý bình luận',1),('5','Quản lý tài khoản',1),('6','Quản lý quản lý thuế',1),('7','Quản lý quản report',1);
/*!40000 ALTER TABLE `dsquyen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dssanpham`
--

DROP TABLE IF EXISTS `dssanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dssanpham` (
  `masp` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `matv` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `trangthai` int DEFAULT NULL,
  KEY `masp` (`masp`),
  KEY `matv` (`matv`),
  CONSTRAINT `dssanpham_ibfk_1` FOREIGN KEY (`masp`) REFERENCES `sanpham` (`masp`),
  CONSTRAINT `dssanpham_ibfk_2` FOREIGN KEY (`matv`) REFERENCES `thanhvien` (`matv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vi_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dssanpham`
--

LOCK TABLES `dssanpham` WRITE;
/*!40000 ALTER TABLE `dssanpham` DISABLE KEYS */;
/*!40000 ALTER TABLE `dssanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vi_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (33);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khuyenmai`
--

DROP TABLE IF EXISTS `khuyenmai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khuyenmai` (
  `makm` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `masp` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `trangthai` int NOT NULL,
  PRIMARY KEY (`makm`),
  KEY `masp` (`masp`),
  CONSTRAINT `khuyenmai_ibfk_1` FOREIGN KEY (`masp`) REFERENCES `sanpham` (`masp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khuyenmai`
--

LOCK TABLES `khuyenmai` WRITE;
/*!40000 ALTER TABLE `khuyenmai` DISABLE KEYS */;
/*!40000 ALTER TABLE `khuyenmai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loaimay`
--

DROP TABLE IF EXISTS `loaimay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loaimay` (
  `maloai` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tenloai` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `trangthai` int DEFAULT NULL,
  PRIMARY KEY (`maloai`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaimay`
--

LOCK TABLES `loaimay` WRITE;
/*!40000 ALTER TABLE `loaimay` DISABLE KEYS */;
INSERT INTO `loaimay` VALUES ('1','DELL',1),('2','HP',1),('3','ASUS',1),('4','LENOVO',1),('5','ACER',1),('6','MSI',1),('7','accessories',1);
/*!40000 ALTER TABLE `loaimay` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loaithanhvien`
--

DROP TABLE IF EXISTS `loaithanhvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loaithanhvien` (
  `maltv` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tenltv` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `trangthai` int NOT NULL,
  PRIMARY KEY (`maltv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaithanhvien`
--

LOCK TABLES `loaithanhvien` WRITE;
/*!40000 ALTER TABLE `loaithanhvien` DISABLE KEYS */;
INSERT INTO `loaithanhvien` VALUES ('01','Admin',1),('02','User',1);
/*!40000 ALTER TABLE `loaithanhvien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhomquyen`
--

DROP TABLE IF EXISTS `nhomquyen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhomquyen` (
  `maltv` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `maq` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  KEY `maltv` (`maltv`),
  KEY `maq` (`maq`),
  CONSTRAINT `nhomquyen_ibfk_1` FOREIGN KEY (`maltv`) REFERENCES `loaithanhvien` (`maltv`),
  CONSTRAINT `nhomquyen_ibfk_2` FOREIGN KEY (`maq`) REFERENCES `dsquyen` (`maq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhomquyen`
--

LOCK TABLES `nhomquyen` WRITE;
/*!40000 ALTER TABLE `nhomquyen` DISABLE KEYS */;
INSERT INTO `nhomquyen` VALUES ('01','5'),('01','6'),('01','7'),('02','1'),('02','2'),('02','3'),('02','4'),('02','6');
/*!40000 ALTER TABLE `nhomquyen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qlcmt`
--

DROP TABLE IF EXISTS `qlcmt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qlcmt` (
  `madh` varchar(5) COLLATE utf8mb4_vi_0900_ai_ci NOT NULL,
  `masp` varchar(5) COLLATE utf8mb4_vi_0900_ai_ci NOT NULL,
  `noidung` varchar(255) COLLATE utf8mb4_vi_0900_ai_ci DEFAULT NULL,
  `sao` varchar(255) COLLATE utf8mb4_vi_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`madh`,`masp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vi_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qlcmt`
--

LOCK TABLES `qlcmt` WRITE;
/*!40000 ALTER TABLE `qlcmt` DISABLE KEYS */;
/*!40000 ALTER TABLE `qlcmt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quyen`
--

DROP TABLE IF EXISTS `quyen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quyen` (
  `maq` bigint NOT NULL AUTO_INCREMENT,
  `mota` varchar(255) COLLATE utf8mb4_vi_0900_ai_ci DEFAULT NULL,
  `tenquyen` varchar(255) COLLATE utf8mb4_vi_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`maq`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vi_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quyen`
--

LOCK TABLES `quyen` WRITE;
/*!40000 ALTER TABLE `quyen` DISABLE KEYS */;
/*!40000 ALTER TABLE `quyen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sanpham` (
  `masp` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `maloai` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tensp` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `gia` int DEFAULT NULL,
  `hinhanh` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `thongtinsanpham` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `soluong` int DEFAULT NULL,
  `danhgia` int DEFAULT NULL,
  `luotxem` int DEFAULT NULL,
  `trangthai` int NOT NULL,
  `matv` varchar(5) NOT NULL,
  PRIMARY KEY (`masp`),
  KEY `maloai` (`maloai`),
  CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`maloai`) REFERENCES `loaimay` (`maloai`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sanpham`
--

LOCK TABLES `sanpham` WRITE;
/*!40000 ALTER TABLE `sanpham` DISABLE KEYS */;
INSERT INTO `sanpham` VALUES ('AKS3','1','Asus Gaming I5-7100U 3.4Ghz',12000000,'3732520212.jpg','Asus Gaming ',36,0,2,1,'02'),('PAG','1','Asus Gaming 8',38000000,'27711520211.jpg','Asus Gaming 8',9,0,0,1,'4311'),('PAG2','1','Asus Gaming 8',48000000,'20211520213.jpg','Asus Gaming 8',44,0,0,1,'3712'),('PT2','3','Asus Gaming ',15000000,'null','Laptop Asus gaming',120,0,0,0,'51343'),('Sp03','4','Lenovo Ivy 18',13500000,'3.jpg','LENOVO',7,0,5,1,'80284'),('SP1','1','Dell Vos V3405 ',16000000,'1.jpg','Bộ Vi Xử Lý / CPU	AMD Ryzen 3-3250U ( 2.60GHz upto 3.50GHz, 4 MB cache, 2 cores 4 threads)',3,0,88,1,'01'),('SP10','2','HP ProBook 445 G7',12490000,'2.jpg','Bộ Vi Xử Lý / CPU	Ryzen R3-4300U 2.7 GHz up to 3.7 GHz, 4MB',11,0,4,1,'04'),('SP11','2','HP Pavilion x360 14',13790000,'3.jpg','Bộ Vi Xử Lý / CPU	Intel Core i3-1115G4 1.7GHz up to 4.1GHz 6MB',10,0,1,1,'03'),('SP12','2','HP Pavilion 15',17190000,'4.jpg','Bộ Vi Xử Lý / CPU	Intel Core i5-1135G7 2.4GHz up to 4.2GHz 8MB',6,0,3,1,'02'),('SP13','3','Asus Vivobook X515MA-BR074T : N4020 ',6890000,'1.jpg','Bộ Vi Xử Lý / CPU	Intel Celeron N4020 ( 1.10 GHz - Turbo Boost 2.8 GHz)',105,0,8,1,'01'),('SP14','3','Asus D509DA-EJ286T',11490000,'2.jpg','Bộ Vi Xử Lý / CPU	Ryzen 5 3500U ( 2.1GHz up to 3.7GHz, 4 Cores, 8 Threads, 4MB Cache)',16,0,1,1,'01'),('SP15','3','ASUS VivoBook Flip 14 ',12990000,'3.jpg','Bộ Vi Xử Lý / CPU	AMD Ryzen 3-4300U 2.7GHz up to 3.7GHz 4MB',10,0,55,1,'02'),('SP16','3','ASUS VivoBook A415EA-EB360T',16390000,'4.jpg','Bộ Vi Xử Lý / CPU	Intel Core i5-1135G7 0.9GHz up to 4.2GHz 8MB',10,0,0,1,'03'),('SP17','4','Lenovo IdeaPad Slim 3',9990000,'1.jpg','Bộ Vi Xử Lý / CPU	AMD Ryzen 3-4300U ( 2.70GHz upto 3.70GHz, 4 cores 4 threads )',10,0,0,1,'04'),('SP18','4','Lenovo IdeaPad 3 15ITL6 ',12690000,'2.jpg','Bộ Vi Xử Lý / CPU	Intel Core i3-1115G4 3.0GHz up to 4.1GHz 6MB',10,0,0,1,'05'),('SP19','4','Lenovo IdeaPad 5 14ALC05',14290000,'3.jpg','Bộ Vi Xử Lý / CPU	AMD Ryzen 5-5500U ( 2.60GHz upto 4.40GHz )',10,0,0,1,'05'),('SP2','1','Dell Inspiron 3501A',11560000,'2.jpg','Bộ Vi Xử Lý / CPU	Intel Core i3-1005G1 (4MB Cache, 1.2GHz, Turbo Boost 3.4GHz)',10,0,0,1,'02'),('SP20','4','Lenovo IdeaPad Gaming 3',16690000,'4.jpg','Bộ Vi Xử Lý / CPU	AMD Ryzen™ 5 4600H Mobile Processor (3.0Ghz Up to 4.0GHz, 6Cores, 12Threads, 8MB Cache)',10,0,0,1,'04'),('SP21','5','Acer Aspire 7',22190000,'1.jpg','Bộ Vi Xử Lý / CPU	AMD Ryzen 7 3750H 2.3GHz up to 4.0GHz 4MB 4 nhân, 8 luồng',10,0,0,1,'05'),('SP22','5','ACER NITRO 5 ',19990000,'2.jpg','Bộ Vi Xử Lý / CPU	Intel Core i5-10300H ( 2.5 GHz - 4.5 GHz / 8MB / 4 nhân, 8 luồng )',10,0,0,1,'05'),('SP23','5','Acer Swift 5',24790000,'3.jpg','Bộ Vi Xử Lý / CPU	Intel Core i5-1135G7 (2.40GHz upto 4.20GHz, 8MB Cache)',10,0,0,1,'04'),('SP24','5','Acer Predator Helios 300',39990000,'4.jpg','Bộ Vi Xử Lý / CPU	Intel Core i7-10750H (12M Cache, Max Turbo Frequency 5.0GHz)',10,0,0,1,'03'),('SP3','1','Dell Inspiron 5391',13490000,'3.jpg','Bộ Vi Xử Lý / CPU	Intel® Core i3-10110U Processor (2.1Ghz upto 4.10GHz, 2 Cores, 4 Threads, 4MB Cache)',10,0,0,1,'03'),('SP4','1','Dell Inspiron 5502 1XGR11',19490000,'4.jpg','Bộ Vi Xử Lý / CPU	Intel Core i5-1135G7 Tiger Lake 10nm (2.40GHz Up to 4.20 GHz, 4 Cores, 8 Threads, 8MB Cache)',10,0,0,1,'04'),('SP5','1','Dell Latitude E7400',21890000,'5.jpg','Bộ Vi Xử Lý / CPU	Intel® Core™ I5 8365U Processor 1.6GHz (8*1.6Ghz) (6MB Cache, upto 4.1GHz)',10,0,0,1,'05'),('SP6','1','Dell G5 5500',20990000,'6.jpg','Bộ Vi Xử Lý / CPU	Intel Core i5-10300H ( 8M Cache, Max Turbo Frequency 4.5GHz)',10,0,2,1,'01'),('SP7','1','Dell Inspiron 5406 TYCJN1',25790000,'7.jpg','Bộ Vi Xử Lý / CPU	Intel Core i7-1165G7 Tiger Lake 10nm (2.80GHz Up to 4.70 GHz, 4 Cores, 8 Threads, 12MB Cache)',10,0,0,1,'02'),('SP8','1','Dell XPS 7390',29290000,'8.jpg','Bộ Vi Xử Lý / CPU	Intel Core i7 10510U (1.80GHz upto 4.90GHz, 4 nhân, 8 luồng, 8MB)',10,0,0,1,'03'),('SP9','2','HP 14s-dk1055AU 171K9PA',9890000,'1.jpg','Bộ Vi Xử Lý / CPU	AMD Ryzen 3-3250U (2.6 GHz base clock, up to 3.5 GHz max boost clock, 4MB)',10,0,0,1,'05'),('TT1','1','Asus Gaming 2',12000000,'17211520212.jpg','Asus Gaming 2',44,0,0,1,'327'),('TT2','1','Asus Gaming 2',38000000,'84011520213.jpg','Asus Gaming 2',44,0,0,1,'318'),('TT3','1','Asus Gaming 2',4800000,'21111520214.jpg','Asus Gaming 2',9,0,0,1,'4810'),('TV01','2','HP IVY 15',3000000,'3.jpg','ko',2,0,0,0,'77642'),('TV02','2','HP IVY 16',3000000,'3.jpg','ko',3,0,0,0,'02');
/*!40000 ALTER TABLE `sanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop`
--

DROP TABLE IF EXISTS `shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop` (
  `mashop` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tenshop` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `mota` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `trangthai` int NOT NULL,
  `uid` bigint NOT NULL,
  PRIMARY KEY (`mashop`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop`
--

LOCK TABLES `shop` WRITE;
/*!40000 ALTER TABLE `shop` DISABLE KEYS */;
INSERT INTO `shop` VALUES ('1','Viễn Thông A','N/A',1,6),('10','My Computer','N/A',1,5),('2','FPT Shop','N/A',1,7),('3','Nguyễn Kim','N/A',1,8),('4','Thế giới di động','N/A',1,9),('5','Cell phones','N/A',1,10),('6','Hoàng hà','N/A',1,1),('7','Link kiện Computer','N/A',1,2),('8','HaiAnhComputer','N/A',1,3),('9','CentraTer','N/A',1,4);
/*!40000 ALTER TABLE `shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taikhoan` (
  `uid` bigint NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_vi_0900_ai_ci DEFAULT NULL,
  `matkhau` varchar(255) COLLATE utf8mb4_vi_0900_ai_ci DEFAULT NULL,
  `matv` varchar(255) COLLATE utf8mb4_vi_0900_ai_ci DEFAULT NULL,
  `trangthai` varchar(255) COLLATE utf8mb4_vi_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vi_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoan`
--

LOCK TABLES `taikhoan` WRITE;
/*!40000 ALTER TABLE `taikhoan` DISABLE KEYS */;
INSERT INTO `taikhoan` VALUES (1,'admin','admin','1','1'),(2,'vanloi','123456','2','1'),(23,'nguoiban2@gmail.com','277997aA','318','1'),(0,'mua@gmail.com','123456aA','327','1'),(6,'khachhang1','123456','01','0'),(7,'khachhang2','123456','02','0'),(8,'khachhang3','123456','03','0'),(9,'khachhang4','123456','04','0'),(10,'khachhang5','123456','05','0'),(26,'abc@gmail.com','123456aA','259','1'),(27,'trantran@gmail.com','123456aA','4810','1'),(29,'nguoiban11@gmail.com','123456aA','4311','1'),(30,'nguoiban12@gmail.com','123456aA','3712','1');
/*!40000 ALTER TABLE `taikhoan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thanhvien`
--

DROP TABLE IF EXISTS `thanhvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thanhvien` (
  `matv` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `loaithanhvien` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ho` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ten` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `diachi` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ngaysinh` date DEFAULT NULL,
  `gmail` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ngaytao` date NOT NULL,
  `trangthai` int NOT NULL,
  PRIMARY KEY (`matv`),
  KEY `loaithanhvien` (`loaithanhvien`),
  CONSTRAINT `thanhvien_ibfk_1` FOREIGN KEY (`loaithanhvien`) REFERENCES `loaithanhvien` (`maltv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vi_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thanhvien`
--

LOCK TABLES `thanhvien` WRITE;
/*!40000 ALTER TABLE `thanhvien` DISABLE KEYS */;
/*!40000 ALTER TABLE `thanhvien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thue`
--

DROP TABLE IF EXISTS `thue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thue` (
  `matv` bigint NOT NULL AUTO_INCREMENT,
  `mahdn` varchar(255) COLLATE utf8mb4_vi_0900_ai_ci DEFAULT NULL,
  `tienthue` varchar(255) COLLATE utf8mb4_vi_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`matv`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vi_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thue`
--

LOCK TABLES `thue` WRITE;
/*!40000 ALTER TABLE `thue` DISABLE KEYS */;
/*!40000 ALTER TABLE `thue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tinhthue`
--

DROP TABLE IF EXISTS `tinhthue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tinhthue` (
  `matv` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `madh` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tienthue` int DEFAULT NULL,
  KEY `matv` (`matv`),
  KEY `madh` (`madh`),
  CONSTRAINT `tinhthue_ibfk_1` FOREIGN KEY (`matv`) REFERENCES `userdetail` (`matv`),
  CONSTRAINT `tinhthue_ibfk_2` FOREIGN KEY (`madh`) REFERENCES `dathang` (`madh`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tinhthue`
--

LOCK TABLES `tinhthue` WRITE;
/*!40000 ALTER TABLE `tinhthue` DISABLE KEYS */;
/*!40000 ALTER TABLE `tinhthue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transport`
--

DROP TABLE IF EXISTS `transport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transport` (
  `tid` varchar(5) COLLATE utf8mb4_vi_0900_ai_ci NOT NULL,
  `fee` varchar(255) COLLATE utf8mb4_vi_0900_ai_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_vi_0900_ai_ci NOT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vi_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transport`
--

LOCK TABLES `transport` WRITE;
/*!40000 ALTER TABLE `transport` DISABLE KEYS */;
INSERT INTO `transport` VALUES ('GHN','20000','Giao Hang Nhanh'),('GHTK','20000','Giao Hang Tiet Kiem'),('Grab','49000','Grab');
/*!40000 ALTER TABLE `transport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userdetail`
--

DROP TABLE IF EXISTS `userdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userdetail` (
  `matv` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `loaithanhvien` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ho` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ten` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `diachi` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ngaysinh` date DEFAULT NULL,
  `gmail` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ngaytao` date NOT NULL,
  `trangthai` int NOT NULL,
  `sdt` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`matv`),
  KEY `loaithanhvien` (`loaithanhvien`),
  CONSTRAINT `userdetail_ibfk_1` FOREIGN KEY (`loaithanhvien`) REFERENCES `loaithanhvien` (`maltv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userdetail`
--

LOCK TABLES `userdetail` WRITE;
/*!40000 ALTER TABLE `userdetail` DISABLE KEYS */;
INSERT INTO `userdetail` VALUES ('01','02','Nguyễn','Văn A','40 Su Van Hanh','2000-05-04','nguyenvane@gmail.com','2021-04-21',1,'0367895512'),('02','02','Nguyễn','Văn B','273 An Duong Vuong','2000-05-04','nguyenvane@gmail.com','2021-04-21',1,'0367895512'),('03','02','Nguyễn','Văn c','40 Le Trong Tan','2000-05-04','nguyenvane@gmail.com','2021-04-21',1,'0367895512'),('04','02','Nguyễn','Văn D','40 Le Trong Tan','2000-05-04','nguyenvane@gmail.com','2021-04-21',1,'0367895512'),('05','02','Nguyễn','Văn E','599 Le Trong Tan','2000-05-04','nguyenvane@gmail.com','2021-04-21',1,'0367895512'),('1','01','Nguyễn','Thiên','A1F2','2000-05-04','nguyenvana@gmail.com','2019-04-24',1,'0123455687'),('2','01','Nguyễn','Thiên Long','A1F2','2000-05-04','nguyenthienlong2@gmail.com','2019-04-05',2,'0254575578'),('259','02','tran','tran','273 An Duong Vuong',NULL,'nguyenvanb@gmail.com','2021-05-11',1,'0918752362'),('318','02','taikhoan2','taikhoan2',NULL,NULL,NULL,'2021-05-11',1,'0912352623'),('327','02','ban1','ban1',NULL,NULL,NULL,'2021-05-11',1,'0912312514'),('3712','02','tran 3','Tran',NULL,NULL,NULL,'2021-05-11',1,'0916623852'),('418','02','ban2','ban2',NULL,NULL,NULL,'2021-05-11',1,'0915423623'),('4311','02','tran 2','tran ',NULL,NULL,NULL,'2021-05-11',1,'0918526314'),('458','02','taikhoan2','taikhoan2',NULL,NULL,NULL,'2021-05-11',1,'0912352623'),('478','02','ban2','ban2',NULL,NULL,NULL,'2021-05-11',1,'0915423623'),('4810','02','Tran','Tran',NULL,NULL,NULL,'2021-05-11',1,'0918425362'),('51343','02','Thien','Tan','A1F2','2000-05-04','nguyenvanc@gmail.com','2021-04-19',1,'0918734585'),('5912','02','loi2','van ',NULL,NULL,NULL,'2021-05-01',1,'0918752362'),('6610','02','van','loi',NULL,NULL,NULL,'2021-05-01',1,'0123456789'),('68','02','taikhoan2','taikhoan2',NULL,NULL,NULL,'2021-05-11',1,'0912352623'),('688','02','ban2','ban2',NULL,NULL,NULL,'2021-05-11',1,'0915423623'),('69210','02','van','van 2',NULL,NULL,NULL,'2021-05-01',1,'0918752362'),('7411','02','van loi 3','loi van 2',NULL,NULL,NULL,'2021-05-01',1,'0918452362'),('77642','02','Tran','Thien','A1F2','2000-05-04','nguyenvand@gmail.com','2021-04-19',1,'0123456789'),('80284','02','loi123','12345','A1F2','2000-05-04','nguyenvane@gmail.com','2021-04-21',1,'0974546362'),('878','02','taikhoan2','taikhoan2',NULL,NULL,NULL,'2021-05-11',1,'0912352623');
/*!40000 ALTER TABLE `userdetail` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-11 15:08:48
