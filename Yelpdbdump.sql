CREATE DATABASE  IF NOT EXISTS `yelpdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `yelpdb`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: yelpdb
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `cust_id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `dateofbirth` varchar(50) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `nickname` varchar(100) DEFAULT NULL,
  `headline` varchar(255) DEFAULT NULL,
  `profilepic` varchar(255) DEFAULT NULL,
  `yelping_since` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `not_yelping` varchar(255) DEFAULT NULL,
  `thingsilove` varchar(255) DEFAULT NULL,
  `findmein` varchar(255) DEFAULT NULL,
  `myblog` varchar(255) DEFAULT NULL,
  `zipcode` int DEFAULT NULL,
  PRIMARY KEY (`cust_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (27,'Poojitha','vb2','pooji@gmail.com','sha1$6563ee3e$1$089f903adcfa8e9b0e678093efe027ce9979e488','2000-06-04','San Jose','CA','USA','pooh','Mood for a icecream','mine (2).jpg','2020','+1 234 456 678','','reading books, watching tv','home123','www.blog.com',65432),(28,'Yathi','K','yk@gmail.com','sha1$51217fba$1$bafafc0fe7bdf7f9671ee06fee5b64e8b9886c24','1999-06-15','San Jose','CA','USA','yath','testing',NULL,'2020',NULL,'camping','','Heaven','www.yathindra.com',95126),(29,'deepika','k','dk@gmail.com','sha1$d344ad77$1$52dd505bce44ff385a324816b47efb790d90103a','2020-09-29','','','','deeps','',NULL,'2020',NULL,NULL,NULL,NULL,NULL,NULL),(30,'Dwight','K Schrute','dwight.s@gmail.com','sha1$a124146d$1$adadcd73ec528d7d913fa7fdf12b5dfe1f163ad8','1975-10-10','Scranton','Pensilvania','USA','D-Money','','Dwight_Schrute.jpg','2020','+123-456-1234','camping','Framing','Heaven','www.dwight.com',18449);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_orders`
--

DROP TABLE IF EXISTS `customer_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `totalPrice` float DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `order_status` varchar(100) DEFAULT NULL,
  `order_type` varchar(100) DEFAULT NULL,
  `cust_id` int DEFAULT NULL,
  `rest_id` int DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `fk_order_rest_id_idx` (`rest_id`),
  KEY `fk_order_cust_id_idx` (`cust_id`),
  CONSTRAINT `fk_order_cust_id` FOREIGN KEY (`cust_id`) REFERENCES `customer` (`cust_id`),
  CONSTRAINT `fk_order_rest_id` FOREIGN KEY (`rest_id`) REFERENCES `restaurant` (`rest_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_orders`
--

LOCK TABLES `customer_orders` WRITE;
/*!40000 ALTER TABLE `customer_orders` DISABLE KEYS */;
INSERT INTO `customer_orders` VALUES (4,36.49,'PickUp','2020-10-06 10:51:48','Preparing','New Order',27,9),(5,16,'Delivery','2020-10-06 10:54:22','Cancelled','Cancelled',27,9),(6,10.5,'Delivery','2020-10-06 11:00:33','Delivered','Delivered',27,9),(7,3.99,'Delivery','2020-10-06 11:01:56','Order Placed','New Order',27,9),(8,24,'PickUp','2020-10-06 11:03:00','Order Placed','New Order',27,10),(9,2.99,'PickUp','2020-10-06 14:25:28','Order Placed','New Order',27,11),(10,21.25,'Delivery','2020-10-07 07:44:39','Cancelled','Cancelled',28,12),(12,23,'PickUp','2020-10-08 00:56:23','Cancelled','Cancelled',28,12),(14,32,'Delivery','2020-10-08 01:00:16','Order Placed','New Order',28,13),(15,38,'PickUp','2020-10-08 01:02:04','Order Placed','New Order',28,13),(16,17.97,'PickUp','2020-10-08 18:02:46','Order Received','New Order',28,11),(17,17.5,'PickUp','2020-10-10 16:58:05','Order Placed','New Order',30,14),(18,13.5,'Delivery','2020-10-10 17:07:57','Preparing','New Order',30,14);
/*!40000 ALTER TABLE `customer_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_registration`
--

DROP TABLE IF EXISTS `event_registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_registration` (
  `event_reg_id` int NOT NULL AUTO_INCREMENT,
  `event_id` int DEFAULT NULL,
  `rest_id` int NOT NULL,
  `cust_id` int NOT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`event_reg_id`),
  KEY `fk_ev_event_id_idx` (`event_id`),
  KEY `fk_ev_cust_id_idx` (`cust_id`),
  KEY `fk_ev_rest_id` (`rest_id`),
  CONSTRAINT `fk_ev_cust_id` FOREIGN KEY (`cust_id`) REFERENCES `customer` (`cust_id`),
  CONSTRAINT `fk_ev_event_id` FOREIGN KEY (`event_id`) REFERENCES `events` (`event_id`),
  CONSTRAINT `fk_ev_rest_id` FOREIGN KEY (`rest_id`) REFERENCES `restaurant` (`rest_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_registration`
--

LOCK TABLES `event_registration` WRITE;
/*!40000 ALTER TABLE `event_registration` DISABLE KEYS */;
INSERT INTO `event_registration` VALUES (1,2,9,27,'Poojitha','vb2'),(3,8,10,27,'Poojitha','vb2'),(4,1,9,28,'Yathi','K'),(5,10,14,30,'Dwight','K Schrute');
/*!40000 ALTER TABLE `event_registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `hashtags` varchar(255) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `rest_id` int DEFAULT NULL,
  PRIMARY KEY (`event_id`),
  KEY `fk_rest_id_idx` (`rest_id`),
  CONSTRAINT `fk_rest_id` FOREIGN KEY (`rest_id`) REFERENCES `restaurant` (`rest_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'Yael Urban','We are excited to bring you ongoing market updates and are inviting you to join us this Sunday, October 4th at 1:25 PM, to participate in our Silicon Valley Home Buyers Webinar.','3:30 AM','2020-11-10','The Silicon Valley Home Buyers Webinar 467 N FIRST STREET Los Altos, CA 94022','#yaelurban','yael urban.png',9),(2,'John Rybak + Friends at The Bistro','Come join us as we return with a fun evening of music @ The Bistro in Hayward. I will be joined by Perry Spinali on fiddle + Ben Rivera on upright bass. It is just a 5 minute walk from The Downtown Hayward BART station. It is free, and we hope to see you!','6:00 PM','2020-10-16','The Bistro 1001 B Street @ Main Hayward, CA 94541','#rybak','John Rybak.jpg',9),(8,'Dublin CPR Classes','The American Heart Association CPR class is 3 hours long. You will learn how to perform CPR on an adult, child and infant, choke-saving and how to use the AED.  ','1:00 PM','2020-10-27','7567 Amador Valley Blvd Dublin, CA 94568','#cpr','Dublin CPR Classes.jpg',10),(9,'Voyager Craft Coffee','Voyager is turning 4! To celebrate, visit us on Saturday, October 10th, for 30% off all drinks from 7AM to 1PM at all 3 of our locations:  3985 Stevens Creek Blvd, Santa Clara 2221 The Alameda, Santa Clara, CA 95050 San Pedro Square Market in DTSJ','7.00 AM','2020-10-30','Santa Clara','#voyager','voyager.jpg',14),(10,'PPIE Week of the Stars @Bak Kung Korean BBQ','Take a break from cooking during the week of Friday, October 9 to Saturday, October 17. By ordering a meal at Bak Kung Korean BBQ you will also be supporting local kids educational programs! ','11.00 AM','2020-10-28','2693 Stoneridge Dr Pleasanton, CA 94588','#Weekofstars','weekofstars.png',14);
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_items`
--

DROP TABLE IF EXISTS `menu_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_items` (
  `idmenu_items` int NOT NULL AUTO_INCREMENT,
  `dishname` varchar(100) NOT NULL,
  `ingredients` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `itemCategory` varchar(45) DEFAULT NULL,
  `item_image` varchar(255) DEFAULT NULL,
  `rest_id` int DEFAULT NULL,
  PRIMARY KEY (`idmenu_items`),
  KEY `rest_id_menu_fk_idx` (`rest_id`),
  CONSTRAINT `rest_id_menu_fk` FOREIGN KEY (`rest_id`) REFERENCES `restaurant` (`rest_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_items`
--

LOCK TABLES `menu_items` WRITE;
/*!40000 ALTER TABLE `menu_items` DISABLE KEYS */;
INSERT INTO `menu_items` VALUES (1,'Minos Grilled Cheese','Garlic, butter torta bread, beef birria, pickled onions, cilantro,  mozzarella and Monterey Jack cheese',10.5,'Garlic butter torta bread stuffed with our beef birria and suadero, pickled onions, cilantro and gooey melted mozzarella and Monterey Jack cheese. Side of consomme.','Main Course','Minos_Grilled_Cheese2.jpg',9),(2,'Elote Fritter','Guajillo salsa, lime aioli, Cotija cheese and chili powder',13.5,'Deep fried cheesy corn fritters topped with suadero (beef brisket confit). Guajillo salsa, lime aioli, Cotija cheese and chili powder.','Main Course','Elote_Fritter.jpg',9),(4,'Side of Birria Consom (Broth)','Beef bone, cilantro and diced onions',2.5,'Beef bone stock with a side of cilantro and diced onions','Appetizer','Side_of_Birria_Consom_(Broth).jpg',9),(5,'Minos Cobb Salad','Spring mixed greens, beef brisket suadero, cherry tomatoes, yellow roasted corn, avocados, eggs, and chipotle ranch',13.5,'Spring mixed greens topped with beef brisket suadero, cherry tomatoes, yellow roasted corn, avocados, hard boiled eggs, and housemade chipotle ranch dressing.','Salads','Minos_Cobb_Salad.jpg',9),(6,'Truffle Mushroom Tacos','Mushroom, white truffle oil, pickled red onions, white onions, cilantro, and oaxacan bean paste ',13.5,'Pearl oyster mushroom confit in white truffle oil. Topped with pickled red onions, white onions, cilantro, and oaxacan bean paste. Served with a side of tortilla chips and salsa.','Main Course','Truffle_Mushroom_Tacos.jpg',9),(7,'Fountain Drinks','',1.99,'Assorted flavors','Beverages','',9),(8,'Aguas Frescas','Horchata, Strawberry | Fresa, Mango, Watermelon | Sandia, Melon, Hibiscus | Jamaica, Pineapple | Piña',3.99,'','Beverages','',9),(9,'Mexican Soda','',2.99,'Assorted flavors','Beverages','',9),(10,'Cobb Salad','romaine lettuce, grape tomatoes, crumbled blue cheese, eggs, Applewood bacon, chicken, avocado',14.45,'Crisp romaine lettuce hearts, grape tomatoes, crumbled blue cheese, hard boiled eggs, Applewood bacon, chicken breast, Hass avocado and served with blue cheese dressing','Salads','cobb_salad.jpg',9),(14,'Tomato Soup','tomatoes',13,'early girl tomato soup, parmesan croutons','Appetizer','tomato-soup.jpg',10),(15,'House made Pappardelle with Mushroom Sugo','House made papperdelle, mushroom sugo, Parmigiano Reggiano',24,'','Main Course','pappa-ragu-2.jpg',10),(16,'2018 SANCERRE, ANDRE VATAN HALF BOTTLE','',20,'Wine','Beverages','',10),(17,'Selles Sur Cher','Goats milk cheese',12,'4-5oz wheel of bloomy ash rind goats milk cheese. clean, cakey and light','Desserts','Selles sur Cher.jpg',10),(18,'Rajwadi Weekday Thali','Dhokla, Rice, roti',12.99,'Fixed meal of Khaman Dhokla (1 pc.) + 3 Vegetable Curries of the day + Choice of Dal + Choice of Rice + Dessert of the day. + Roti (3 pcs.)','Main Course','Special Thali.jpg',11),(19,'Rajwadi Jain Thali (No Onion, Garlic, Potato)','Dhokla, Rice, Roti',10.99,'Fixed meal of Khaman Dhokla (1 pc.) + 2 Veg. Jain Curries of the day + Choice of Dal + Choice of Rice + Roti (3 pcs.) + Dessert of the day.','Main Course','Gujurati Thali.jpg',11),(20,'Mango/Aam Ras','',3.99,'','Beverages','',11),(21,'Gulabjamun','',2.99,'','Desserts','gulab-jamun.jpg',11),(22,'Vegan Egg Rolls','Veggies, Chili Sauce',8.5,'3 pieces. Taro and mixed veggie served with sweet chili sauce.','Appetizer','Vegan Egg Rolls.jpg',12),(23,'Tom Yum','Hot and sour soup, mushroom, baby corn, red onion, tomatoes, galangal, and lemongrass.',14.5,'','Appetizer','tom-yum-12-1-sur-1.jpg',12),(24,'Thai Fried Rice','Egg, tomatoes, and onion.',12.75,'','Main Course','Thai-Fried-Rice-1-3.jpg',12),(25,'Green Tea Sweet Rice with Mango','Green Tea',8.5,'','Desserts','Green Tea Sweet Rice with Mango.jpg',12),(26,'Tonpeiyaki','Pork, Long Green Onions Naganegi, cabbage, Pepper, Egg',16,'Tonpeiyaki means flat grilled pork and the dish is popular in the Kansai region, especially in Osaka. ','Appetizer','Tonpeiyaki.jpg',13),(27,'Negimayo Shiosoba ','squid, prawn, cabbage, bean sprouts, green onions and mayo',20,'House special noodles with squid, prawn, cabbage, bean sprouts, green onions and mayo in salt based sauce','Main Course','Negimayo Shisoba.jpg',13),(28,'Chanpon (everything) Yakisoba',' Squid, prawn, pork, beef, cabbage and egg',22,'House special stir fried noodles with squid, prawn, pork, beef, cabbage and egg','Main Course','Chanpon Yakisoba.jpg',13),(29,'Mio','',12,'','Beverages','Mio.jpg',13),(30,'Summer Roll','pork, beef, or fish',9.9,'pork, beef, or fish meatball tossed in house special tamarind sauce topped with cilantro and chili (S)','Main Course','lukechintodd.jpg',14),(31,'Khao Soi','egg, chicken drumstick, shallot,',15.9,'traditional egg noodle with chicken drumstick, shallot, pickled mustard served in creamy peanut curry sauce','Main Course','khao.jpg',14),(32,'Pad Thai','tofu, egg, ground peanuts, bean sprouts, and chive (GF)',17.5,'Rice noodles wok-fried with tofu, egg, ground peanuts, bean sprouts, and chive (GF)','Main Course','pad-thai-1.jpg',14),(33,'Koncham Chan','rice flour, tapioca, arrowroot starch, coconut milk',13.5,'Think of these silky, chewy, coconutty gummies as richer, more flavorful Jello jigglers, made with a steamed batter of coconut milk with sticky rice flour and tapioca and arrowroot starches.','Desserts','konchamchn.jpg',14);
/*!40000 ALTER TABLE `menu_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `order_item_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `item_name` varchar(55) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`order_item_id`),
  KEY `fk_orditems_orderid_idx` (`order_id`),
  CONSTRAINT `fk_orditems_orderid` FOREIGN KEY (`order_id`) REFERENCES `customer_orders` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES (2,4,'Minos Grilled Cheese',2),(3,4,'Elote Fritter',1),(4,4,'Fountain Drinks',1),(5,5,'Side of Birria Consom (Broth)',1),(6,5,'Truffle Mushroom Tacos',1),(7,6,'Minos Grilled Cheese',1),(8,7,'Aguas Frescas',1),(9,8,'House made Pappardelle with Mushroom Sugo',1),(10,9,'Gulabjamun',1),(11,10,'Vegan Egg Rolls',1),(12,10,'Thai Fried Rice',1),(13,14,'Mio',1),(14,14,'Negimayo Shiosoba ',1),(15,15,'Tonpeiyaki',1),(16,15,'Chanpon (everything) Yakisoba',1),(17,16,'Rajwadi Jain Thali (No Onion, Garlic, Potato)',1),(18,16,'Mango/Aam Ras',1),(19,16,'Gulabjamun',1),(20,17,'Pad Thai',1),(21,18,'Koncham Chan',1);
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `rest_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `zipcode` int DEFAULT NULL,
  PRIMARY KEY (`rest_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (9,'Minos Eatery','minos@gmail.com','sha1$83102a94$1$1fb86924170ec94c878024a62b921d8e1fa4695f','45 Post St',95113),(10,'Devine Cheese and Wine','devinecheeseandwine@gmail.com','sha1$56926e0a$1$463e7af0553828f14f98c3fe62fa4a5f1459922c','27 Devine St',95110),(11,'Rajwadi Thali','rajwadithali@gmail.com','sha1$70589c36$1$0a1755c28da32bbadc90502f39a46663a69496c7','573 E El Camino Real',94087),(12,'Red Chili','redchilirestaurants@gmail.com','sha1$d70634d8$1$780aad4fb2d3347b8bf7bfae8e547266c22caa7c','2538 Berryessa Rd',95132),(13,'Fugetsu','fugetsu-usa@gmail.com','sha1$d2d2b2cd$1$744dccb3c7e907854b41d69464a425f88560c9ad','2783 El Camino Real',95051),(14,'Must be Thai','mustbethai@gmail.com','sha1$f091f0ad$1$b0e583d3d5b5982737de66e31f568cd4333b3ed1','3143 Stevens Creek Blvd',95117);
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant_profile`
--

DROP TABLE IF EXISTS `restaurant_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant_profile` (
  `idrestaurant_profile` int NOT NULL AUTO_INCREMENT,
  `rest_id` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `opening_time` varchar(45) DEFAULT NULL,
  `closing_time` varchar(45) DEFAULT NULL,
  `delivery_method` varchar(45) DEFAULT NULL,
  `filename` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idrestaurant_profile`),
  KEY `rest_id_fk_idx` (`rest_id`),
  CONSTRAINT `rest_id_fk` FOREIGN KEY (`rest_id`) REFERENCES `restaurant` (`rest_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_profile`
--

LOCK TABLES `restaurant_profile` WRITE;
/*!40000 ALTER TABLE `restaurant_profile` DISABLE KEYS */;
INSERT INTO `restaurant_profile` VALUES (1,9,'Mexican','San Jose','CA','(408) 352-5686','11:30','07:30','Curbside Pickup','minos.jpg'),(2,10,'Wine Bars, American (New)','San Jose','CA','(408) 924-0818','11:30','23:30','Dine In','devine.jpg'),(3,11,'Indian, Vegetarian','Sunnyvale','CA','(408) 739-9999','11:00','22:00','Yelp Delivery','rajwadi.png'),(4,12,'Vietnamese, Thai','San Jose','CA','(408) 937-8888','11:00','21:00','Curbside Pickup','redchili.jpg'),(5,13,'Teppanyaki, Izakaya, Tapas/Small Plates','Santa Clara','CA','(408) 244-8500','11:00','20:00','Yelp Delivery','fugetsu.jpeg'),(6,14,'Thai','San Jose','CA','+ (408) 816-7179','10:30','23:39','Dine In','mustbethai.jpg');
/*!40000 ALTER TABLE `restaurant_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `rating` int DEFAULT NULL,
  `review` varchar(255) DEFAULT NULL,
  `rest_id` int DEFAULT NULL,
  `cust_id` int DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`review_id`),
  KEY `fk_rest_id_idx` (`rest_id`),
  KEY `fk_cust_id_idx` (`cust_id`),
  CONSTRAINT `fk_cust_id` FOREIGN KEY (`cust_id`) REFERENCES `customer` (`cust_id`),
  CONSTRAINT `fk_restaurant_id` FOREIGN KEY (`rest_id`) REFERENCES `restaurant` (`rest_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,3,'Food is good',9,27,'03/10/2020'),(2,4,'Very tasty food',9,27,'03/10/2020'),(3,4,'Ambiance is good',9,27,'02/10/2020'),(6,5,'Lovely, local business that opened right before the pandemic hit. Their online cheese classes have been selling out....and while I have not taken one, I decided to try out their currently available foods (plus, I live nearby so I wanted to support them).',9,27,'03/10/2020'),(8,5,'Visited for first time today, mid-COVID. Nice small patio, well- distanced tables, staff masked, hand wash station out front. ',9,27,'01/10/2020'),(9,4,'Had the honor of coming here last night, short ribs, cauliflower soup, cheese spreads.....Yum!',10,27,'03/10/2020'),(10,4,'Visited for first time today, mid-COVID. We thoroughly enjoyed our first visit and cant wait to go back for a full meal next time. Dinner menu looked amazing!',13,27,'03/10/2020'),(11,4,'Ambience is good',11,28,'08/10/2020'),(12,5,'Great service and good quality. Mostly took takeout and have enjoyed the meal thoroughly each time.',11,28,'10/10/2020'),(13,5,'Great service and good quality. Mostly took takeout and have enjoyed the meal thoroughly each time.',11,28,'10/10/2020'),(14,5,'Visited this place for the first time this week.  When I told the person at the cash counter that I wanted food without milk products, they cooked the chana saag without cream, and gave me masala chai with soymilk.  ',14,30,'10/10/2020');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'yelpdb'
--
/*!50003 DROP PROCEDURE IF EXISTS `cancel_orders` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `cancel_orders`(in in_orderid int)
BEGIN
	UPDATE customer_orders
	set order_type = 'Cancelled',
     order_status='Cancelled'
	where order_id=in_orderid;
    
SELECT 'cancelled' as status;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Fetchuserpassword` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Fetchuserpassword`(email_id VARCHAR(255))
BEGIN
	IF EXISTS (SELECT cust_id FROM customer WHERE email=email_id)THEN
    BEGIN
	SELECT cust_id, firstname, lastname, email, password, 1 as status from customer where email=email_id;
	END;
    ELSE IF EXISTS(SELECT rest_id FROM restaurant WHERE email=email_id) THEN
    BEGIN
    SELECT rest_id, name, email, password, address, zipcode, 1 as status from restaurant where email=email_id;
    END;
    else
    SELECT 0 as status;
    END IF;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_all_restaurants` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_restaurants`()
BEGIN
		SELECT r.rest_id, r.name, r.email, r.address, r.zipcode, rp.description, rp.city,
		rp.state, rp.phone,rp.opening_time,rp.closing_time, rp.filename FROM 
		restaurant r JOIN restaurant_profile rp ON r.rest_id = rp.rest_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_customer_details` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_customer_details`(in in_cust_id int)
BEGIN
SELECT cust_id,firstname,lastname,email, dateofbirth,city,state,country,nickname,headline,profilepic,phone_number,yelping_since,not_yelping,thingsilove,findmein,myblog,not_yelping,zipcode from customer where cust_id=in_cust_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_customer_order_details` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_customer_order_details`(in in_custid int)
BEGIN
SELECT co.order_id, co.totalPrice, co.order_status, co.category, co.order_type, DATE_FORMAT(co.date,'%m-%d-%Y') as date, r.name, rp.filename
 from customer_orders co join restaurant r on co.rest_id = r.rest_id join restaurant_profile rp on co.rest_id=rp.rest_id where co.cust_id=in_custid ORDER BY co.date ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_event` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_event`(in in_eventid int)
BEGIN
IF in_eventid IS NOT NULL THEN
	SELECT event_id, name, description, time, date, location, hashtags, filename,rest_id from events where event_id=in_eventid;
END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_events` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_events`(in in_rest_id int)
BEGIN
IF in_rest_id IS NOT NULL THEN
	SELECT event_id, name, description, time, date, location, hashtags, filename from events where rest_id=in_rest_id order by date asc;
ELSE
	SELECT event_id, name, description, time, date, location, hashtags, filename from events order by date asc;
END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_event_registration` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_event_registration`(in in_eventid int)
BEGIN
IF in_eventid IS NOT NULL THEN
	SELECT event_reg_id, event_id, rest_id, cust_id, first_name, last_name  from event_registration where event_id=in_eventid;
END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_event_registration_customer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_event_registration_customer`(in in_custid int)
BEGIN
IF in_custid IS NOT NULL THEN
	SELECT er.event_reg_id, er.event_id, e.name, e.date,e.location, er.rest_id, er.cust_id, er.first_name, er.last_name  from event_registration er join events e on er.event_id = e.event_id where cust_id=in_custid;
END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_menu_item` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_menu_item`(in in_itemid int)
BEGIN
SELECT idmenu_items as item_id, dishname, ingredients, price, description, itemCategory, item_image from menu_items  where idmenu_items=in_itemid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_menu_items` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_menu_items`(in in_rest_id int)
BEGIN
SELECT m.idmenu_items as item_id, m.dishname, m.ingredients, m.price, m.description, m.itemCategory, m.item_image, m.rest_id, r.name from menu_items m join restaurant r on m.rest_id=r.rest_id where m.rest_id=in_rest_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_order_items` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_order_items`(in in_orderid INT)
BEGIN
SELECT co.order_id, co.totalPrice, DATE_FORMAT(co.date,'%m-%d-%Y') as date, od.item_name, od.quantity, m.price
 from customer_orders co join order_details od on co.order_id = od.order_id join menu_items m on od.item_name=m.dishname where co.order_id=in_orderid;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_restaurant_details` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_restaurant_details`(in in_rest_id int)
BEGIN
	DECLARE restid INT;
    SELECT rest_id INTO restid FROM restaurant_profile WHERE rest_id=in_rest_id;
	IF restid IS NOT NULL THEN
		SELECT r.rest_id, r.name, r.email, r.address, r.zipcode, rp.description, rp.city,
		rp.state, rp.phone,rp.opening_time,rp.closing_time,rp.filename FROM 
		restaurant r JOIN restaurant_profile rp ON r.rest_id = rp.rest_id
		WHERE r.rest_id=in_rest_id;
	ELSE
    	SELECT r.rest_id, r.name, r.email, r.address, r.zipcode from restaurant r where rest_id=in_rest_id;
	END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_restaurant_orders` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_restaurant_orders`(in in_restid int)
BEGIN
SELECT co.order_id, co.totalPrice, co.order_status, co.category, co.order_type, DATE_FORMAT(co.date,'%m-%d-%Y') as date, r.name, c.cust_id, c.firstname, c.lastname
 from customer_orders co join restaurant r on co.rest_id = r.rest_id join customer c on co.cust_id=c.cust_id where co.rest_id=in_restid ORDER BY co.date ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_reviews` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_reviews`(in in_rest_id int)
BEGIN
SELECT r.rating, r.review, r.rest_id, r.cust_id, r.date, c.firstname, c.lastname from reviews r JOIN customer c on r.cust_id=c.cust_id  where rest_id=in_rest_id ORDER BY date desc ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_searchRest` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_searchRest`(in in_keyword VARCHAR(45), in in_selectOption INT)
BEGIN
	IF in_selectOption = 1 THEN
    BEGIN
			SELECT * FROM 
			restaurant r JOIN restaurant_profile rp ON r.rest_id = rp.rest_id
			WHERE rp.delivery_method
			LIKE CONCAT('%',in_keyword,'%');
	END; 
    ELSE IF in_selectOption = 2
    THEN 
		BEGIN
			SELECT * FROM 
			restaurant r JOIN restaurant_profile rp ON r.rest_id = rp.rest_id 
			WHERE rp.city 
			LIKE CONCAT('%',in_keyword,'%');
		END;
	ELSE IF in_selectOption = 3
    THEN 
		BEGIN
			SELECT * FROM 
			restaurant r JOIN restaurant_profile rp ON r.rest_id = rp.rest_id
			WHERE rp.description
			LIKE CONCAT('%',in_keyword,'%');
		END;
	ELSE IF in_selectOption = 4
    THEN
		BEGIN
			SELECT * FROM 
			restaurant r JOIN restaurant_profile rp ON r.rest_id = rp.rest_id
			JOIN menu_items ON rp.rest_id = menu_items.rest_id
			WHERE dishname 
			LIKE CONCAT('%',in_keyword,'%');
		END;
        ELSE IF in_selectOption = 5 THEN
        BEGIN
			SELECT r.rest_id, r.name, r.email, r.address, r.zipcode, rp.description, rp.city,
			rp.state, rp.phone,rp.opening_time,rp.closing_time, rp.delivery_method,rp.filename FROM 
			restaurant r JOIN restaurant_profile rp ON r.rest_id = rp.rest_id where r.name LIKE CONCAT('%',in_keyword,'%');
        END;
         ELSE 
         BEGIN
			SELECT r.rest_id, r.name, r.email, r.address, r.zipcode, rp.description, rp.city,
			rp.state, rp.phone,rp.opening_time,rp.closing_time, rp.delivery_method,rp.filename FROM 
			restaurant r JOIN restaurant_profile rp ON r.rest_id = rp.rest_id;
         END;
        END IF;
		END IF;
		END IF;
	END IF;
END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_search_events` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_search_events`(in in_keyword VARCHAR(45))
BEGIN
SELECT event_id, name, description, time, date, location, hashtags, filename from events
			WHERE name
			LIKE CONCAT('%',in_keyword,'%');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertEvent` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertEvent`(in in_name VARCHAR(100),in in_description VARCHAR(255),in in_time VARCHAR(45), in in_date VARCHAR(45),in in_location VARCHAR(255), in in_hashtags VARCHAR(255),in in_filename VARCHAR(255), in in_rest_id int)
BEGIN

    IF in_rest_id IS NOT NULL THEN
		INSERT into events (name, description, time, date, location, hashtags, filename, rest_id)
		VALUES(in_name, in_description, in_time, in_date, in_location, in_hashtags, in_filename, in_rest_id);
		SELECT 'Inserted' as status;
    END IF; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertEventRegistration` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertEventRegistration`(in in_eventid INT,in in_restid INT,in in_custid INT, in in_firstname VARCHAR(100),in in_lastname VARCHAR(100))
BEGIN

    IF in_eventid IS NOT NULL THEN
		INSERT into event_registration (event_id, rest_id, cust_id, first_name, last_name)
		VALUES(in_eventid, in_restid, in_custid, in_firstname, in_lastname);
		SELECT 'Inserted' as status;
    END IF; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Insertmenuitem` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Insertmenuitem`(in in_name VARCHAR(100),in in_ingredients VARCHAR(255),in in_price float, in in_desc VARCHAR(255),in in_category VARCHAR(45), in in_filename VARCHAR(255), in in_rest_id int)
BEGIN

    IF in_rest_id IS NOT NULL THEN
		INSERT into menu_items (dishname,ingredients,price,description,itemCategory,item_image,rest_id)
		VALUES(in_name,in_ingredients,in_price,in_desc,in_category,in_filename,in_rest_id);
		SELECT 'Inserted' as status;
    END IF; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertRestaurantSignUpDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertRestaurantSignUpDetails`(in name varchar(100),in email_id VARCHAR(100), in password VARCHAR(100),in res_address VARCHAR(255), in res_zipcode int)
BEGIN
	DECLARE restid INT;
	SELECT rest_id INTO restid FROM restaurant WHERE email=email_id;
    IF restid IS NULL THEN
		INSERT into restaurant (name,email,password,address,zipcode)
		VALUES(name,email_id,password,res_address,res_zipcode);
		SELECT 'Inserted' as status;
    ELSE
		SELECT 'RestaurantExists' as status;
    END IF; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertReview` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertReview`(in in_rating INT, in in_review VARCHAR(255),in in_restid INT, in in_custid INT)
BEGIN
DECLARE curdate VARCHAR(10);
 SET curdate:=DATE_FORMAT(current_date,'%d/%m/%Y');
    IF in_restid IS NOT NULL THEN
		INSERT into reviews (rating, review, rest_id, cust_id,date)
		VALUES(in_rating, in_review, in_restid, in_custid,curdate);
		SELECT 'Inserted' as status;
    END IF; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUserData` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUserData`(in first_name VARCHAR(50),in last_name VARCHAR(50),in email_id VARCHAR(255), in password VARCHAR(255))
BEGIN
	DECLARE custid INT;
    DECLARE yelping VARCHAR(10);
    SET yelping:= YEAR(CURDATE());
	SELECT cust_id INTO custid FROM customer WHERE email=email_id;
    IF custid IS NULL THEN
		INSERT into customer (firstname,lastname,email,password,yelping_since)
		VALUES(first_name,last_name,email_id,password,yelping);
		SELECT 'Inserted' as status;
    ELSE
		SELECT 'UserExists' as status;
    END IF; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Insert_Orders` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Insert_Orders`(
	in_totalprice FLOAT,
	in_category varchar(45), 
	order_status varchar(100), 
	in_custid int ,
	in_restid int
)
BEGIN
    DECLARE _order_datetime DATETIME;
    DECLARE _order_id INT;
    
    SELECT CURRENT_TIMESTAMP() INTO _order_datetime;
    
    IF in_restid IS NOT NULL THEN
    BEGIN
		INSERT INTO customer_orders(totalprice, category, date, order_status, order_type, cust_id, rest_id)
        VALUES(in_totalprice, in_category, CURRENT_TIMESTAMP(), order_status , 'New Order', in_custid, in_restid);
		
        SELECT order_id INTO _order_id FROM customer_orders WHERE cust_id = in_custid AND rest_id = in_restid AND date = _order_datetime;
        
		SELECT _order_id AS order_id, 'ORDER_PLACED' AS status;
    END;
    ELSE
		SELECT 'ORDER_ERROR' AS status;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Insert_Orders_Items` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Insert_Orders_Items`(
	in in_orderid INT,
    in in_itemname VARCHAR(55),
    in in_itemquantity INT
)
BEGIN
	IF NOT EXISTS(SELECT * FROM order_details WHERE order_id = in_orderid AND item_name = in_itemname) THEN
    BEGIN
		INSERT INTO order_details(order_id, item_name, quantity)
        VALUES(in_orderid, in_itemname, in_itemquantity);
        
	END;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `test` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `test`(in in_custid INT)
BEGIN
SELECT * FROM customer_orders where cust_id = in_custid;
SELECT item_name FROM order_details od join customer_orders co on od.order_id=co.order_id; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Updatemenuitem` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Updatemenuitem`(in item_id int,in in_name VARCHAR(100),in in_ingredients VARCHAR(255),in in_price float, in in_desc VARCHAR(255),in in_category VARCHAR(45), in in_filename VARCHAR(255), in in_rest_id int)
BEGIN

    IF item_id IS NOT NULL THEN
		UPDATE menu_items 
        SET dishname = in_name,
        ingredients = in_ingredients,
        price = in_price,
        description = in_desc,
        itemCategory = in_category,
        item_image = in_filename,
        rest_id = in_rest_id
        WHERE idmenu_items = item_id;
		SELECT 'Updated' as status;
    END IF; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_orders` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_orders`(in in_orderid int, in in_orderstatus VARCHAR(55))
BEGIN
	
	UPDATE customer_orders
	set order_status = in_orderstatus
	where order_id=in_orderid;
    
    IF in_orderstatus='Picked up' or in_orderstatus='Delivered' then
    BEGIN
		UPDATE customer_orders
	set order_type = 'Delivered'
	where order_id=in_orderid;
    END;
    
END IF;
    
SELECT 'updated' as status;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_restaurant_details` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_restaurant_details`(in in_rest_id int, in in_name VARCHAR(100),  in in_email VARCHAR(100), in in_address VARCHAR(255),  in in_desc VARCHAR(255), in in_city VARCHAR(100), in in_state VARCHAR(100), in in_phone VARCHAR(100), in in_deliveryMethod VARCHAR(100), in in_opening_time VARCHAR(45),in in_closing_time VARCHAR(45),in in_zipcode int)
BEGIN
	DECLARE restid INT;
 
	UPDATE restaurant
	set name = in_name,
		email = in_email,
		address = in_address,
		zipcode = in_zipcode
	where rest_id=in_rest_id;

    SELECT rest_id INTO restid FROM restaurant_profile WHERE rest_id=in_rest_id;
	IF restid IS NOT NULL THEN

	UPDATE restaurant_profile
	set description = in_desc,
		city = in_city,
		state = in_state,
		phone = in_phone,
        delivery_method = in_deliveryMethod,
		opening_time = in_opening_time,
		closing_time = in_closing_time
		where rest_id=in_rest_id;
        
        else
		INSERT INTO restaurant_profile (rest_id, description, city, state, phone, delivery_method, opening_time, closing_time)
		values(in_rest_id, in_desc, in_city, in_state, in_phone, in_deliveryMethod, in_opening_time, in_closing_time);
		END IF;
SELECT 'updated' as status;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_restaurant_image` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_restaurant_image`(in in_rest_id int, in in_filename VARCHAR(100))
BEGIN
 
UPDATE restaurant_profile
set filename = in_filename
where rest_id=in_rest_id;
    
SELECT 'updated' as status;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_user_aboutme` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_user_aboutme`(in in_cust_id int, in in_thingsilove VARCHAR(255), in in_findmein VARCHAR(255), in in_myblog varchar(255), in in_notyelping varchar(255))
BEGIN
 
UPDATE CUSTOMER
set thingsilove = in_thingsilove,
	findmein = in_findmein,
    myblog = in_myblog,
    not_yelping = in_notyelping
    where cust_id=in_cust_id;
    
SELECT 'updated' as status;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_user_basicdetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_user_basicdetails`(in in_cust_id int, in in_fname VARCHAR(100), in in_lname VARCHAR(100), in in_nickname varchar(100), in in_headline varchar(255), in dob VARCHAR(50), in in_city varchar(100), in in_state varchar(100), in in_country varchar(100), in in_zipcode int)
BEGIN
 
UPDATE CUSTOMER
set firstname = in_fname,
	lastname = in_lname,
    nickname = in_nickname,
    headline = in_headline,
    dateofbirth = dob,
    city=in_city,
    state=in_state,
    country = in_country,
    zipcode=in_zipcode
    where cust_id=in_cust_id;
    
SELECT 'updated' as status;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_user_contact` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_user_contact`(in in_cust_id int, in in_email VARCHAR(255), in in_contactnum VARCHAR(255))
BEGIN
 
	UPDATE CUSTOMER
	set email = in_email,
	phone_number=in_contactnum
    where cust_id=in_cust_id;
    
SELECT 'updated' as status;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_user_image` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_user_image`(in in_cust_id int, in in_filename VARCHAR(100))
BEGIN
 
UPDATE CUSTOMER
set profilepic = in_filename
where cust_id=in_cust_id;
    
SELECT 'updated' as status;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-10 21:20:07
