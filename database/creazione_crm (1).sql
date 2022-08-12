-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 12, 2022 at 07:38 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `creazione_crm`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(80) NOT NULL,
  `lmage` varchar(100) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `name`, `phone`, `email`, `lmage`, `password`, `created_at`) VALUES
(1, 'Bilash Halder', '9609327424', 'ibilashhalder@gmail.com', NULL, '', '2022-08-05 12:05:06');

-- --------------------------------------------------------

--
-- Table structure for table `agreement`
--

CREATE TABLE `agreement` (
  `agreement_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `file_name` varchar(100) DEFAULT NULL,
  `upload_date` datetime DEFAULT NULL,
  `print_date` datetime DEFAULT NULL,
  `status` tinyint(4) NOT NULL COMMENT '0-Not generated 1-Genarated'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `agreement`
--

INSERT INTO `agreement` (`agreement_id`, `customer_id`, `file_name`, `upload_date`, `print_date`, `status`) VALUES
(2, 3, 'myfile.pdf', '2022-08-10 00:09:55', '2022-08-10 00:09:33', 0),
(3, 2, NULL, NULL, NULL, 0),
(4, 7, NULL, NULL, NULL, 0),
(7, 9, 'myfile.pdf', '2022-08-10 00:27:41', '2022-08-10 00:27:46', 0);

-- --------------------------------------------------------

--
-- Table structure for table `bank_account`
--

CREATE TABLE `bank_account` (
  `account_no` varchar(30) NOT NULL,
  `user_id` int(11) NOT NULL,
  `bank_name` varchar(100) NOT NULL,
  `bank_ifsc` varchar(50) NOT NULL,
  `bank_address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bank_account`
--

INSERT INTO `bank_account` (`account_no`, `user_id`, `bank_name`, `bank_ifsc`, `bank_address`) VALUES
('6362613622', 4, 'State Bank Of India', 'SBI0000123', 'sbdbsandbsanbdnsdbdbsnabd'),
('6362s13622', 23, 'saabxansbxnasbcnasvcnbvascnb', '26153651236521365', 'sbdbsandbsanbdnsdbdbsnabd');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(60) NOT NULL,
  `customer_type` tinyint(4) NOT NULL COMMENT '1-RE 2-BA 3-Customer',
  `refereed_by` int(11) NOT NULL,
  `stat` tinyint(4) NOT NULL COMMENT '0-Not Verified 1-Verified & Active 2-Deactivate	',
  `pass` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `name`, `phone`, `email`, `customer_type`, `refereed_by`, `stat`, `pass`, `image`) VALUES
(1, 'demo user Update', '99999999', 'test5@test.com', 1, 1, 1, 'sjakfkgfkgakjjjjjjfgkasgfkafsgaskf', ''),
(2, 'demo user api', '99999988', 'test2@test.com', 1, 1, 1, 'jdahdjahgsdjhagsdjhagsd', 'default.png');

-- --------------------------------------------------------

--
-- Table structure for table `customer_documents`
--

CREATE TABLE `customer_documents` (
  `user_id` int(11) NOT NULL,
  `pan_no` varchar(20) NOT NULL,
  `pan_verified` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0-Not Verified 1-verified',
  `pan_verified_by` varchar(10) NOT NULL,
  `adhar` varchar(20) NOT NULL,
  `adhar_verified` varchar(10) NOT NULL,
  `adhar_verified_by` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer_documents`
--

INSERT INTO `customer_documents` (`user_id`, `pan_no`, `pan_verified`, `pan_verified_by`, `adhar`, `adhar_verified`, `adhar_verified_by`) VALUES
(2, 'XNNXNXNSJS', 1, 'online', '2819281921928', '1', 'admin'),
(3, 'XNNXABCSJS', 0, '', '2810000021928', '1', 'online'),
(4, 'XNNXABCSJS', 0, '', '2810000021928', '1', 'online');

-- --------------------------------------------------------

--
-- Table structure for table `investment`
--

CREATE TABLE `investment` (
  `investment_id` int(11) NOT NULL,
  `ammount` double NOT NULL,
  `investment_date` datetime NOT NULL DEFAULT current_timestamp(),
  `customer_id` int(11) NOT NULL,
  `payment_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `investment`
--

INSERT INTO `investment` (`investment_id`, `ammount`, `investment_date`, `customer_id`, `payment_id`) VALUES
(1, 100000, '2022-08-05 16:18:12', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `nomini`
--

CREATE TABLE `nomini` (
  `id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `dob` date NOT NULL,
  `customer_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `payment_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `ammount` double NOT NULL,
  `transaction_id` varchar(100) NOT NULL,
  `payment_time` datetime NOT NULL DEFAULT current_timestamp(),
  `payment_type` tinyint(4) NOT NULL COMMENT '1-debit 2-credit',
  `payment_verified` tinyint(4) NOT NULL COMMENT '0-No 1-Yes',
  `payment_mode` tinyint(4) NOT NULL COMMENT '1-Cash 2-Online 3-cheque 4-others	'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`payment_id`, `customer_id`, `ammount`, `transaction_id`, `payment_time`, `payment_type`, `payment_verified`, `payment_mode`) VALUES
(3, 1, 20000, 'VADE0B248932', '2022-08-06 10:25:08', 1, 1, 2),
(5, 2, 50000, 'VADE048932', '2022-08-06 10:26:09', 1, 1, 2),
(6, 1, 20000.39, 'TESTTRAN0001', '2022-08-09 14:00:57', 1, 1, 2),
(7, 1, 99000.39, 'TESTTRAN0001', '2022-08-09 14:02:24', 1, 1, 2),
(8, 1, 99000.39, 'TESTTRAN00066', '2022-08-09 14:05:07', 0, 1, 2),
(9, 1, 99000.39, 'TESTTRAN00066', '2022-08-09 14:09:18', 0, 1, 2),
(10, 2, 99000, 'T00ESTTRAN00066', '2022-08-09 14:11:19', 0, 1, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `agreement`
--
ALTER TABLE `agreement`
  ADD PRIMARY KEY (`agreement_id`);

--
-- Indexes for table `bank_account`
--
ALTER TABLE `bank_account`
  ADD PRIMARY KEY (`account_no`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `customer_documents`
--
ALTER TABLE `customer_documents`
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `investment`
--
ALTER TABLE `investment`
  ADD PRIMARY KEY (`investment_id`);

--
-- Indexes for table `nomini`
--
ALTER TABLE `nomini`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`payment_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `agreement`
--
ALTER TABLE `agreement`
  MODIFY `agreement_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `investment`
--
ALTER TABLE `investment`
  MODIFY `investment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `nomini`
--
ALTER TABLE `nomini`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
