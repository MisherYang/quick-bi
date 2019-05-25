function getTipsList(o_url, o_data, name){
	$.ajax({
		"cache": "false",
		"url": o_url,
		"type": "get",
		"data": o_data,
		"dataType": "json",
		"success": function(data) {
			data = jsonDecode(data);
			if(data['error']) {
				errorAlert(data['error_content']);
			} else {
				translateArrayToList(data, name);
				setTipSelectDisplay(true);
			}
		},
		"error": function(XMLHttpRequest, textStatus, errorThrown) {
			alert(XMLHttpRequest.status);
			alert(XMLHttpRequest.readyState);
			alert(textStatus);
		},
	})
}

function getStudentInfo(studentid, mode) {
	alert("触发了学生信息查询模块\n学号：" + studentid + "； 模式：" + mode);
}
