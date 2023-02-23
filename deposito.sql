-- MariaDB dump 10.19  Distrib 10.4.27-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: deposito
-- ------------------------------------------------------
-- Server version	10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alcoolicas`
--

DROP TABLE IF EXISTS `alcoolicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alcoolicas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `tamanho` varchar(255) NOT NULL,
  `preco` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alcoolicas`
--

LOCK TABLES `alcoolicas` WRITE;
/*!40000 ALTER TABLE `alcoolicas` DISABLE KEYS */;
INSERT INTO `alcoolicas` VALUES (2,'Heineken','5 L','100.00','Cerveja','https://us-southeast-1.linodeobjects.com/storage/supercentral/media/uploads/produto/cerveja_barril_5_l_heineken_3ea1d7f0-19f4-4cde-aa8c-770a5b04df54.jpg','2023-02-11 12:02:02','2023-02-11 12:02:02'),(4,'Antarctica','473 ml','5.00','Cerveja','http://d3ugyf2ht6aenh.cloudfront.net/stores/455/258/products/antarctica-473ml1-2c2682b74ed5003ed116639071441061-640-0.png','2023-02-11 15:43:40','2023-02-11 15:44:14'),(5,'Lokal','473 ml','1.99','Cerveja','https://tb1304.vtexassets.com/arquivos/ids/196604/Cerveja-lokal-lt-473ML.jpg?v=638089911601330000','2023-02-11 23:09:14','2023-02-11 23:09:14'),(6,'Brahma','473 ml','5.00','Cerveja','https://us-southeast-1.linodeobjects.com/storage/dika/media/uploads/produto/cerv_brahma_latao_473ml__252dcdc7-6e1b-49e4-a735-1e21b0733e59.png','2023-02-23 11:05:39','2023-02-23 11:06:46'),(7,'Brahma','600 ml','8.50','Cerveja','https://choppbrahmaexpress.vtexassets.com/arquivos/ids/155796-800-800?v=637353454952430000&width=800&height=800&aspect=true','2023-02-23 11:18:03','2023-02-23 11:18:03');
/*!40000 ALTER TABLE `alcoolicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `naoalcoolicas`
--

DROP TABLE IF EXISTS `naoalcoolicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `naoalcoolicas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `tamanho` varchar(255) NOT NULL,
  `preco` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `naoalcoolicas`
--

LOCK TABLES `naoalcoolicas` WRITE;
/*!40000 ALTER TABLE `naoalcoolicas` DISABLE KEYS */;
INSERT INTO `naoalcoolicas` VALUES (1,'Pepsi','2 L','8.00','Refrigerante','https://www.imigrantesbebidas.com.br/bebida/images/products/full/1879-refrigerante-pepsi-pet-2l.jpg','2023-02-11 11:53:29','2023-02-11 11:58:19'),(2,'Fanta Laranja','2 L','10.00','Refrigerante','https://trimais.vteximg.com.br/arquivos/ids/1023034-1000-1000/foto_original.jpg?v=637582493123800000','2023-02-11 15:12:51','2023-02-11 15:12:51'),(4,'Coca-Cola','2 L','12.00','Refrigerante','https://www.setegotas.com.br/wp-content/uploads/2020/06/refr.coca_cola_2l.jpg','2023-02-11 15:45:28','2023-02-11 15:45:44'),(5,'Pepsi Black','2 L','8.00','Refrigerante','https://www.imigrantesbebidas.com.br/bebida/images/products/full/1899-refrigerante-pepsi-black-sem-acucares-2l.jpg','2023-02-23 11:23:47','2023-02-23 11:23:47'),(6,'Red Bull','473 ml','10.00','Energético','https://superprix.vteximg.com.br/arquivos/ids/171662-600-600/Bebida-Energetica-Red-Bull-473ml.jpg?v=636094620391330000','2023-02-23 11:25:58','2023-02-23 11:26:50');
/*!40000 ALTER TABLE `naoalcoolicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `cpf` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Marcelo','12345678910','$2a$10$66fzDBfo47K4rjuJQAOcXu04T8GhCdA4E4VVErZzYjHFeqcC1JvwC','2023-02-22 13:26:18','2023-02-22 13:26:18'),(2,'Teste','00000000000','$2a$10$7mSZwFnffjh1t6XvppyIhebxb6E2caXV/E7SRyg/VlhTBBz.fKYM6','2023-02-22 14:25:14','2023-02-22 14:25:14'),(3,'Gerente','123456789','$2a$10$TpOtMTfLmoyHYarJaB6yg.FcfnHZRsVHPafLIgCCl4gzm051HAeyq','2023-02-22 16:44:16','2023-02-22 16:44:16'),(4,'Gerente','123','$2a$10$NmHNEe66DlsLL2KiiZ.nouidtKQaBDgfwhZ0uyZ620INhzqvu4v4O','2023-02-22 16:45:18','2023-02-22 16:45:18'),(5,'Gerente','12','$2a$10$4095iDY8XNTg7t8liY9MBeLvMnwGjVH8YYKzwWZR8SU0oDqBBrGHK','2023-02-22 16:46:24','2023-02-22 16:46:24'),(6,'Auxiliar','11111111111','$2a$10$8rUqaLmJx0aIF/rhRZ00KOUFeDpM5Y.YF0h8q3iWUr1PDUragn1ae','2023-02-23 12:13:42','2023-02-23 12:13:42');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-23  9:53:02
