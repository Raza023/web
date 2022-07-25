-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Jul 17, 2022 at 05:38 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `tweets`
--

CREATE TABLE `tweets` (
  `id` int(11) NOT NULL,
  `tweet` varchar(10000) NOT NULL,
  `userid` int(11) NOT NULL,
  `datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tweets`
--

INSERT INTO `tweets` (`id`, `tweet`, `userid`, `datetime`) VALUES
(1, 'There is no player in the world can play cover drive better than Babar Azam.\r\n~Naser Hussain', 6, '2022-07-14 06:34:22'),
(2, 'Babar Azam is the best test player in the world!\r\n~Shane Watson', 4, '2022-07-15 08:29:31'),
(3, 'Babar Azam is a class act.', 4, '2022-07-15 15:26:23'),
(4, 'My name is Hassan Raza.', 3, '2022-07-15 19:41:27'),
(5, 'I am Jawad Ali', 6, '2022-07-15 22:51:09'),
(6, 'I am Hussain Raza.', 4, '2022-07-15 23:08:22'),
(7, 'pakistan zindabaad', 6, '2022-07-15 23:09:40'),
(8, 'Hi twitter!', 3, '2022-07-17 14:33:40'),
(9, 'Twitter is almost completed.', 3, '2022-07-17 14:35:22'),
(10, 'Good to be back here😃', 3, '2022-07-17 18:43:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tweets`
--
ALTER TABLE `tweets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tweets`
--
ALTER TABLE `tweets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
