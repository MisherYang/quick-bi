$("#grade-link").click(function() {
	getTipsList("/search/grade", {}, "grade");
});

$("#class-link").click(function() {
	var grade = $("#grade-hidden").val();
	if(grade === "") {
		animationCtrl.display('warning', '年级信息不能为空');
	} else {
		getTipsList("/search/class", {"grade": grade}, "class");
	}
});

$("#sname-link").click(function() {
	var classid = $("#class-hidden").val();
	if(classid === "") {
		animationCtrl.display('warning', '班级信息不能为空');
	} else {
		getTipsList("/search/student", {"classid": classid}, "sname");
	}
});

$("#serch-button").click(function() {
	var studentid = $("#serch-input").val();
	if(studentid === "") {
		animationCtrl.display('warning', '学号不能为空');
	} else {
		studentInfoAjaxCtrl.getStudentInfo(studentid, "basic", true);
	}
});

$("#serch-input").keydown(function(e) {
	if(e.keyCode === 13) {
		var studentid = $("#serch-input").val();
		if(studentid === "") {
			animationCtrl.display('warning', '学号不能为空');
		} else {
			studentInfoAjaxCtrl.getStudentInfo(studentid, "basic", true);
		}
	}
});

$("#tips-selecter-button").click(function() {
	animationCtrl.display('default');
});

$("#tips-info-container").click(function() {
	animationCtrl.display('default');
});

$("#student-info-remove").click(function() {
	animationCtrl.display('default');
});

$("#carousel-btn-01").click(function() {
	studentInfoAjaxCtrl.getStudentInfo($("#serch-hidden").val(), 'basic');
});

$("#carousel-btn-10").click(function() {
	studentInfoAjaxCtrl.getStudentInfo($("#serch-hidden").val(), 'identical');
});

$("#carousel-btn-12").click(function() {
	studentInfoAjaxCtrl.getStudentInfo($("#serch-hidden").val(), 'schooling');
});

$("#carousel-btn-21").click(function() {
	studentInfoAjaxCtrl.getStudentInfo($("#serch-hidden").val(), 'basic');
});

function addItemToInput(id, content, name) {
	var inputContent = id + " - " + content;
	var hiddenContent = name === "grade" ? content : id;
	$("#" + name + "-hidden").val(hiddenContent);
	$("#" + name + "-input").val(inputContent);
	animationCtrl.display('default');
	// 模拟onChange事件
	// 这块儿有个坑：$('#class-button').attr("disabled", false);是设置可以操作，若为true则不能操作
	switch(name) {
		case "grade":
			$("#class-hidden").val("");
			$("#class-input").val("");
			$("#sname-hidden").val("");
			$("#sname-input").val("");
			$('#class-link').attr("disabled", false);
			$('#sname-link').attr("disabled", true);
			break;
		case "class":
			$("#sname-hidden").val("");
			$("#sname-input").val("");
			$('#sname-link').attr("disabled", false);
			break;
		case "sname":
			$("#serch-input").val($("#sname-hidden").val());
	}
}
