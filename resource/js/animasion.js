function warnAlert(warning) {
	alert(warning);
}

function errorAlert(content) {
	alert(content);
}

function jsonDecode(jsonObj) {
	var jsonArr = [];
	$.each(jsonObj, function(key, value) {
		if(typeof value === 'object' && value) {
			value = jsonDecode(value);
		}
		jsonArr[key] = value;
	})
	return jsonArr;
}

function translateArrayToList(array, name) {
	var domList = "<ul class=\"list-group\">";
	var content = "";
	for(var property in array) {
		content = property + "  -  " + array[property];
		domList += "<li id=\"" + property + "\" class=\"list-group-item\" onClick=\"addItemToInput('" + property + "', '" + array[property] + "', '" + name + "')\">" + content + "</li>";
	}
	domList += "</ul>";
	$("#tips-selecter-container").empty();
	$("#tips-selecter-container").append(domList);
}

function setTipSelectDisplay(display) {
	if(display) {
		$("#tips-selecter").css("display", "inline-block");
	} else {
		$("#tips-selecter").css("display", "none");
	}
}
