$("#grade-container").click(function() {
	getTipsList("/search/grade", {}, "grade");
});

$("#class-container").click(function() {
	var grade = $("#grade-hidden").val();
	if(grade === "") {
		warnAlert("年级信息不能为空");
	} else {
		getTipsList("/search/class", {"grade": grade}, "class");
	}
});

$("#sname-container").click(function() {
	var classid = $("#class-hidden").val();
	if(classid === "") {
		warnAlert("班级信息不能为空");
	} else {
		getTipsList("/search/student", {"classid": classid}, "sname");
	}
});

$("#serch-button").click(function() {
	var studentid = $("#serch-input").val();
	if(studentid === "") {
		warnAlert("学号不能为空");
	} else {
		getStudentInfo(studentid, "basic");
	}
});

$("#tips-selecter-button").click(function() {
	setTipSelectDisplay(false);
});

function addItemToInput(id, content, name) {
	var inputContent = id + " - " + content;
	var hiddenContent = name === "grade" ? content : id;
	$("#" + name + "-hidden").val(hiddenContent);
	$("#" + name + "-input").val(inputContent);
	setTipSelectDisplay(false);
	// 模拟onChange事件
	// 这块儿有个坑：$('#class-button').attr("disabled", false);是设置可以操作，若为true则不能操作
	switch(name) {
		case "grade":
			$("#class-hidden").val("");
			$("#class-input").val("");
			$("#sname-hidden").val("");
			$("#sname-input").val("");
			$('#class-button').attr("disabled", false);
			$('#sname-button').attr("disabled", true);
			break;
		case "class":
			$("#sname-hidden").val("");
			$("#sname-input").val("");
			$('#sname-button').attr("disabled", false);
			break;
		case "sname":
			getStudentInfo($("#sname-hidden").val(), "basic");
	}
}
