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
  `id` int NOT NULL AUTO_INCREMENT,
  `matv` varchar(5) DEFAULT NULL,
  `masp` varchar(5) DEFAULT NULL,
  `soluong` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,'2','PT2',1),(2,'2','SP03',2),(3,'2','TV01',2),(4,'2','TV02',3);
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
  `tonggia` int DEFAULT NULL,
  `mahdn` varchar(255) NOT NULL,
  `tongtien` varchar(255) DEFAULT NULL,
  KEY `madh` (`madh`),
  KEY `masp` (`masp`),
  CONSTRAINT `ctdathang_ibfk_1` FOREIGN KEY (`madh`) REFERENCES `dathang` (`madh`),
  CONSTRAINT `ctdathang_ibfk_2` FOREIGN KEY (`masp`) REFERENCES `sanpham` (`masp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ctdathang`
--

LOCK TABLES `ctdathang` WRITE;
/*!40000 ALTER TABLE `ctdathang` DISABLE KEYS */;
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
  `ongtien` int NOT NULL,
  PRIMARY KEY (`madh`),
  KEY `matvban` (`matvban`),
  KEY `matvmua` (`matvmua`),
  CONSTRAINT `dathang_ibfk_1` FOREIGN KEY (`matvban`) REFERENCES `thanhvien` (`matv`),
  CONSTRAINT `dathang_ibfk_2` FOREIGN KEY (`matvmua`) REFERENCES `thanhvien` (`matv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dathang`
--

LOCK TABLES `dathang` WRITE;
/*!40000 ALTER TABLE `dathang` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (5);
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
INSERT INTO `loaimay` VALUES ('1','HP',1);
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
/*!40000 ALTER TABLE `nhomquyen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qlcmt`
--

DROP TABLE IF EXISTS `qlcmt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qlcmt` (
  `matv` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `masp` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `noidung` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  KEY `matv` (`matv`),
  KEY `masp` (`masp`),
  CONSTRAINT `qlcmt_ibfk_1` FOREIGN KEY (`matv`) REFERENCES `thanhvien` (`matv`),
  CONSTRAINT `qlcmt_ibfk_2` FOREIGN KEY (`masp`) REFERENCES `sanpham` (`masp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
  `mota` varchar(255) DEFAULT NULL,
  `tenquyen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`maq`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
INSERT INTO `sanpham` VALUES ('PT2','1','Asus Gaming ',150000000,'null','Laptop Asus gaming',120,0,0,0,'51343'),('Sp03','1','Lenovo Ivy 18',13500000,'3.jpg','LENOVO',13,0,0,0,'80284'),('TV01','1','HP IVY 15',3000000,'3.jpg','ko',2,0,0,0,'77642'),('TV02','1','HP IVY 16',3000000,'3.jpg','ko',3,0,0,0,'02');
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
/*!40000 ALTER TABLE `shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taikhoan` (
  `uid` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `matkhau` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `trangthai` int NOT NULL,
  `matv` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`uid`),
  KEY `matv` (`matv`),
  CONSTRAINT `taikhoan_ibfk_1` FOREIGN KEY (`matv`) REFERENCES `thanhvien` (`matv`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoan`
--

LOCK TABLES `taikhoan` WRITE;
/*!40000 ALTER TABLE `taikhoan` DISABLE KEYS */;
INSERT INTO `taikhoan` VALUES (1,'admin','admin',1,'1'),(2,'vanloi','123456',1,'2'),(3,'vanloigmailcom','277997aa',1,'77642'),(4,'jisuck','123456',1,'51343'),(5,'phongphu','123456',1,'80284');
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
  `sdt` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`matv`),
  KEY `loaithanhvien` (`loaithanhvien`),
  CONSTRAINT `thanhvien_ibfk_1` FOREIGN KEY (`loaithanhvien`) REFERENCES `loaithanhvien` (`maltv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thanhvien`
--

LOCK TABLES `thanhvien` WRITE;
/*!40000 ALTER TABLE `thanhvien` DISABLE KEYS */;
INSERT INTO `thanhvien` VALUES ('1','01',NULL,'thien',NULL,'2011-05-04',NULL,'2019-04-24',1,NULL),('2','01',NULL,'56',NULL,'2011-05-04',NULL,'2019-04-05',2,NULL),('51343','02','Thien','Tan',NULL,NULL,NULL,'2021-04-19',1,'091873458'),('77642','02','Tran','Thien',NULL,NULL,NULL,'2021-04-19',1,'0123456789'),('80284','02','loi123','12345',NULL,NULL,NULL,'2021-04-21',1,'0974546362');
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
  `mahdn` varchar(255) DEFAULT NULL,
  `tienthue` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`matv`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
  CONSTRAINT `tinhthue_ibfk_1` FOREIGN KEY (`matv`) REFERENCES `thanhvien` (`matv`),
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-27 14:59:03
