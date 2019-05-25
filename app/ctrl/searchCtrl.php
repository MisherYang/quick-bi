<?php
namespace app\ctrl;
use core\lib\model;

class searchCtrl extends \core\wege
{
	public function grade()
	{
		header('Content-Type:application/json; charset=utf-8');
		$model = new model();
		$grade_data = $model->query('SELECT DISTINCT grade FROM class_info WHERE 1 ORDER BY grade ASC;')->fetchAll();
		if(count($grade_data) == 0) {
			exit(json_encode(stackTrace("20102", "年级列表查询结果为空")));
		} else {
			$num = count($grade_data);
			for($i = 0; $i < $num; $i++) {
				$grade_data[$i] = $grade_data[$i]['grade'];
			}
			exit(json_encode($grade_data));
		}
	}

	public function class()
	{
		header('Content-Type:application/json; charset=utf-8');
		$model = new model();
		if(array_key_exists('grade', $_GET)) {
			$grade = $_GET['grade'];
			// "SELECT class_id, class_name FROM class_info WHERE grade = '$grade';"
			$data = $model->select("class_info",
				[
					"class_id",
					"class_name"
				],
				[
					"grade" => $grade
				]
			);
			$num = count($data);
			$class_data = array();
			for($i = 0; $i < $num; $i++) {
				$class_data[$data[$i]['class_id']] = $data[$i]['class_name'];
			}
			if(count($class_data) == 0) {
				exit(json_encode(stackTrace("20202", "班级列表查询结果为空")));
			} else {
				exit(json_encode($class_data));
			}
		} else {
			exit(json_encode(stackTrace("20201", "grade未指定")));
		}
	}

	public function student()
	{
		header('Content-Type:application/json; charset=utf-8');
		$model = new model();
		if(array_key_exists('classid', $_GET)) {
			$classid = $_GET['classid'];
			// "SELECT student_id, student_name FROM student_info WHERE class_id = '$classid';"
			$data = $model->select("student_info",
				[
					"student_id",
					"student_name"
				],
				[
					"class_id" => $classid
				]
			);
			$num = count($data);
			$student_data = array();
			for($i = 0; $i < $num; $i++) {
				$student_data[$data[$i]['student_id']] = $data[$i]['student_name'];
			}
			if(count($student_data) == 0) {
				exit(json_encode(stackTrace("20302", "学生列表查询结果为空")));
			} else {
				exit(json_encode($student_data));
			}
		} else {
			exit(json_encode(stackTrace("20301", "classid未指定")));
		}
	}
}
