<?php
namespace app\ctrl;
use core\lib\model;

class messagesCtrl extends \core\wege
{
	public function basic()
	{
		header('Content-Type:application/json; charset=utf-8');
		$model = new model();
		if(array_key_exists('studentid', $_GET)) {
			$studentid = $_GET['studentid'];
			// "SELECT student_id, student_name, student_sex, class_name, grade FROM student_info, class_info WHERE student_id = '$studentid';"
			$data = $model->select("student_info",
				[
					"[>]class_info" => "class_id"
				],
				[
					"student_id",
					"student_name",
					"student_sex",
					"class_name",
					"grade"
				],
				[
					"student_id" => $studentid
				]
			);
			if(count($data) == 0) {
				exit(json_encode(stackTrace("30102", "学生信息查询结果为空")));
			} else {
				$basic_data = $data[0];
				exit(json_encode($basic_data));
			}
		} else {
			exit(json_encode(stackTrace("30101", "studentid未指定")));
		}
	}

	public function identical()
	{
		header('Content-Type:application/json; charset=utf-8');
		$model = new model();
		if(array_key_exists('studentid', $_GET)) {
			$studentid = $_GET['studentid'];
			// "SELECT student_id, student_name, student_sex, home_address, birth_year, nation_name, type_name, outlook_name FROM student_info, nation_info, family_type_info, political_outlook_info WHERE student_id = '$studentid' AND student_info.nation_id = nation_info.nation_id AND student_info.type_id = family_type_info.type_id AND student_info.outlook_id = political_outlook_info.outlook_id;"
			$data = $model->select("student_info",
				[
					"[>]nation_info" => "nation_id",
					"[>]family_type_info" => "type_id",
					"[>]political_outlook_info" => "outlook_id"
				],
				[
					"student_id",
					"student_name",
					"student_sex",
					"home_address",
					"birth_year",
					"nation_name",
					"type_name",
					"outlook_name"
				],
				[
					"student_id" => $studentid
				]
			);
			if(count($data) == 0) {
				exit(json_encode(stackTrace("30202", "学生信息查询结果为空")));
			} else {
				$identical_data = $data[0];
				exit(json_encode($identical_data));
			}
		} else {
			exit(json_encode(stackTrace("30201", "studentid未指定")));
		}
	}

	public function schooling()
	{
		header('Content-Type:application/json; charset=utf-8');
		$model = new model();
		if(array_key_exists('studentid', $_GET)) {
			$studentid = $_GET['studentid'];
			// "SELECT student_id, student_name, student_sex, class_name, dorm_number, discouraged_sign FROM student_info, class_info WHERE student_id = '$studentid' AND student_info.class_id = class_info.class_id;"
			$data = $model->select("student_info",
				[
					"[>]class_info" => "class_id"
				],
				[
					"student_id",
					"student_name",
					"student_sex",
					"class_name",
					"dorm_number",
					"discouraged_sign"
				],
				[
					"student_id" => $studentid
				]
			);
			if(count($data) == 0) {
				exit(json_encode(stackTrace("30302", "学生信息查询结果为空")));
			} else {
				$schooling_data = $data[0];
				// "SELECT subject_name, teacher_name FROM student_teacher, teacher_info, subject_info WHERE student_teacher.student_id = '$studentid' AND teacher_info.teacher_id = student_teacher.teacher_id AND subject_info.subject_id = teacher_info.subject_id ORDER BY subject_info.subject_id ASC;"
				$data = $model->select("teacher_info",
					[
						"[>]student_teacher" => "teacher_id",
						"[>]subject_info" => "subject_id"
					],
					[
						"subject_name",
						"teacher_name"
					],
					[
						"student_id" => $studentid,
						"ORDER" => [
							"subject_info.subject_id" => "ASC"
						]
					]
				);
				$num = count($data);
				$teacher_data = array();
				for($i = 0; $i < $num; $i++) {
					$teacher_data[$data[$i]['subject_name']] = $data[$i]['teacher_name'];
				}
				$schooling_data['teacher_info'] = $teacher_data;
				exit(json_encode($schooling_data));
			}
		} else {
			exit(json_encode(stackTrace("30301", "studentid未指定")));
		}
	}
}