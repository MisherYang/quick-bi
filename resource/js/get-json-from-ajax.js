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
				errorCodeTranslater(data['error']);
			} else {
				var domList = translateArrayToList(data, name);
				animationCtrl.display('selecter', domList);
			}
		},
		"error": function(XMLHttpRequest, textStatus, errorThrown) {
			animationCtrl.display('error', '服务器访问异常');
		},
	})
}

function getStudentInfo(studentid, mode) {
	$.ajax({
		"cache": "false",
		"url": "/messages/" + mode + "/studentid/" + studentid,
		"type": "get",
		"dataType": "json",
		"success": function(data) {
			data = jsonDecode(data);
			if(data['error']) {
				errorCodeTranslater(data['error']);
			} else {
				var domList = translateArrayToList(data, name);
				// animationCtrl.display('selecter', domList);
				animationCtrl.display('success', '查询成功');
			}
		},
		"error": function(XMLHttpRequest, textStatus, errorThrown) {
			animationCtrl.display('error', '服务器访问异常');
		},
	})
}
