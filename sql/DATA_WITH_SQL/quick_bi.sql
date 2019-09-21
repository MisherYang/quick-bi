-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2019-05-23 17:41:06
-- 服务器版本： 8.0.15
-- PHP 版本： 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `quick_bi`
--

-- --------------------------------------------------------

--
-- 表的结构 `class_info`
--

CREATE TABLE `class_info` (
  `class_ID` int(11) NOT NULL COMMENT '班级ID',
  `grade` enum('高一','高二','高三','') NOT NULL COMMENT '年级',
  `class_name` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '班级名称'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='班级表';

-- --------------------------------------------------------

--
-- 表的结构 `family_type_info`
--

CREATE TABLE `family_type_info` (
  `type_ID` int(11) NOT NULL COMMENT '家庭类型ID',
  `type_name` varchar(10) NOT NULL COMMENT '家庭类型描述'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='家庭类型表' ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- 表的结构 `nation_info`
--

CREATE TABLE `nation_info` (
  `nation_ID` int(11) NOT NULL COMMENT '民族ID',
  `nation_name` varchar(10) NOT NULL COMMENT '民族名称'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='民族表';

-- --------------------------------------------------------

--
-- 表的结构 `political_outlook_info`
--

CREATE TABLE `political_outlook_info` (
  `outlook_ID` int(11) NOT NULL COMMENT '政治面貌ID',
  `outlook_name` varchar(10) NOT NULL COMMENT '政治面貌描述'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='政治面貌表';

-- --------------------------------------------------------

--
-- 表的结构 `student_info`
--

CREATE TABLE `student_info` (
  `student_ID` int(11) NOT NULL COMMENT '学生ID',
  `home_address` varchar(20) NOT NULL COMMENT '籍贯',
  `student_name` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '姓名',
  `student_sex` tinyint(1) NOT NULL DEFAULT '0' COMMENT '性别 0-男，1-女',
  `birth_year` char(4) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '出生年份',
  `nation_ID` int(11) NOT NULL COMMENT '民族ID',
  `type_ID` int(11) NOT NULL COMMENT '家庭类型ID',
  `outlook_ID` int(11) NOT NULL COMMENT '政治面貌ID',
  `class_ID` int(11) NOT NULL COMMENT '班级ID',
  `dorm_number` int(11) NOT NULL COMMENT '寝室号',
  `discouraged_sign` tinyint(1) NOT NULL COMMENT '劝退标记'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='学生表' ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- 表的结构 `student_teacher`
--

CREATE TABLE `student_teacher` (
  `student_ID` int(11) NOT NULL COMMENT '学生ID',
  `teacher_ID` int(11) NOT NULL COMMENT '教师ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='学生教师表';

-- --------------------------------------------------------

--
-- 表的结构 `subject_info`
--

CREATE TABLE `subject_info` (
  `subject_ID` int(11) NOT NULL COMMENT '科目ID',
  `subject_name` varchar(10) NOT NULL COMMENT '科目名称'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='科目表';

-- --------------------------------------------------------

--
-- 表的结构 `teacher_info`
--

CREATE TABLE `teacher_info` (
  `teacher_ID` int(11) NOT NULL COMMENT '教师ID',
  `teacher_name` char(3) NOT NULL COMMENT '教师姓名',
  `subject_ID` int(11) NOT NULL COMMENT '科目ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='教师表';

--
-- 转储表的索引
--

--
-- 表的索引 `class_info`
--
ALTER TABLE `class_info`
  ADD PRIMARY KEY (`class_ID`);

--
-- 表的索引 `family_type_info`
--
ALTER TABLE `family_type_info`
  ADD PRIMARY KEY (`type_ID`);

--
-- 表的索引 `nation_info`
--
ALTER TABLE `nation_info`
  ADD PRIMARY KEY (`nation_ID`);

--
-- 表的索引 `political_outlook_info`
--
ALTER TABLE `political_outlook_info`
  ADD PRIMARY KEY (`outlook_ID`);

--
-- 表的索引 `student_info`
--
ALTER TABLE `student_info`
  ADD PRIMARY KEY (`student_ID`),
  ADD KEY `class_ID` (`class_ID`),
  ADD KEY `nation_ID` (`nation_ID`),
  ADD KEY `outlook_ID` (`outlook_ID`),
  ADD KEY `type_ID` (`type_ID`);

--
-- 表的索引 `student_teacher`
--
ALTER TABLE `student_teacher`
  ADD PRIMARY KEY (`student_ID`,`teacher_ID`),
  ADD KEY `teacher_ID` (`teacher_ID`);

--
-- 表的索引 `subject_info`
--
ALTER TABLE `subject_info`
  ADD PRIMARY KEY (`subject_ID`);

--
-- 表的索引 `teacher_info`
--
ALTER TABLE `teacher_info`
  ADD PRIMARY KEY (`teacher_ID`),
  ADD KEY `subject_ID` (`subject_ID`);

--
-- 限制导出的表
--

--
-- 限制表 `student_info`
--
ALTER TABLE `student_info`
  ADD CONSTRAINT `student_info_ibfk_1` FOREIGN KEY (`class_ID`) REFERENCES `class_info` (`class_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `student_info_ibfk_2` FOREIGN KEY (`nation_ID`) REFERENCES `nation_info` (`nation_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `student_info_ibfk_3` FOREIGN KEY (`outlook_ID`) REFERENCES `political_outlook_info` (`outlook_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `student_info_ibfk_4` FOREIGN KEY (`type_ID`) REFERENCES `family_type_info` (`type_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 限制表 `student_teacher`
--
ALTER TABLE `student_teacher`
  ADD CONSTRAINT `student_teacher_ibfk_1` FOREIGN KEY (`student_ID`) REFERENCES `student_info` (`student_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `student_teacher_ibfk_2` FOREIGN KEY (`teacher_ID`) REFERENCES `teacher_info` (`teacher_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 限制表 `teacher_info`
--
ALTER TABLE `teacher_info`
  ADD CONSTRAINT `teacher_info_ibfk_1` FOREIGN KEY (`subject_ID`) REFERENCES `subject_info` (`subject_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
