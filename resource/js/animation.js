function AnimationControler(initMode, initInfo) {
	// 创建 jq-animation-controler（jQuery视效控制器）的构造器
	this.tipSelecter = false;
	this.tipSucc = false;
	this.tipInfo = false;
	this.tipWarn = false;
	this.tipError = false;
	this.studentInfo = false;

	this.display = function(displayMode, displayInfo) {
		// 动画控制器模式控制逻辑
		switch(displayMode) {
			case "welcome":
				this.tipSelecter = setTipSelectDisplay(this.tipSelecter, false);
				this.tipSucc = setSuccessAlertDisplay(this.tipSucc, false);
				this.tipWarn = setWarnAlertDisplay(this.tipWarn, false);
				this.tipError = setErrorAlertDisplay(this.tipError, false);
				this.studentInfo = setStudentInfoDisplay(this.studentInfo, false);
				this.tipInfo = setInfoAlertDisplay(this.tipInfo, true, '欢迎使用');
				break;
			case "success":
				this.tipSelecter = setTipSelectDisplay(this.tipSelecter, false);
				this.tipInfo = setInfoAlertDisplay(this.tipInfo, false);
				this.tipWarn = setWarnAlertDisplay(this.tipWarn, false);
				this.tipError = setErrorAlertDisplay(this.tipError, false);
				this.studentInfo = setStudentInfoDisplay(this.studentInfo, false);
				this.tipSucc = setSuccessAlertDisplay(this.tipSucc, true, displayInfo);
				break;
			case "information":
				this.tipSelecter = setTipSelectDisplay(this.tipSelecter, false);
				this.tipSucc = setSuccessAlertDisplay(this.tipSucc, false);
				this.tipWarn = setWarnAlertDisplay(this.tipWarn, false);
				this.tipError = setErrorAlertDisplay(this.tipError, false);
				this.studentInfo = setStudentInfoDisplay(this.studentInfo, false);
				this.tipInfo = setInfoAlertDisplay(this.tipInfo, true, displayInfo);
				break;
			case "warning":
				this.tipSelecter = setTipSelectDisplay(this.tipSelecter, false);
				this.tipSucc = setSuccessAlertDisplay(this.tipSucc, false);
				this.tipInfo = setInfoAlertDisplay(this.tipInfo, false);
				this.tipError = setErrorAlertDisplay(this.tipError, false);
				this.studentInfo = setStudentInfoDisplay(this.studentInfo, false);
				this.tipWarn = setWarnAlertDisplay(this.tipWarn, true, displayInfo);
				break;
			case "error":
				this.tipSelecter = setTipSelectDisplay(this.tipSelecter, false);
				this.tipSucc = setSuccessAlertDisplay(this.tipSucc, false);
				this.tipInfo = setInfoAlertDisplay(this.tipInfo, false);
				this.tipWarn = setWarnAlertDisplay(this.tipWarn, false);
				this.studentInfo = setStudentInfoDisplay(this.studentInfo, false);
				this.tipError = setErrorAlertDisplay(this.tipError, true, displayInfo);
				break;
			case "selecter":
				this.tipInfo = setInfoAlertDisplay(this.tipInfo, false);
				this.tipSucc = setSuccessAlertDisplay(this.tipSucc, false);
				this.tipWarn = setWarnAlertDisplay(this.tipWarn, false);
				this.tipError = setErrorAlertDisplay(this.tipError, false);
				this.studentInfo = setStudentInfoDisplay(this.studentInfo, false);
				this.tipSelecter = setTipSelectDisplay(this.tipSelecter, true, displayInfo);
				break;
			case "messages":
				this.tipSelecter = setTipSelectDisplay(this.tipSelecter, false);
				this.tipSucc = setSuccessAlertDisplay(this.tipSucc, false);
				this.tipInfo = setInfoAlertDisplay(this.tipInfo, false);
				this.tipWarn = setWarnAlertDisplay(this.tipWarn, false);
				this.tipError = setErrorAlertDisplay(this.tipError, false);
				this.studentInfo = setStudentInfoDisplay(this.studentInfo, true, displayInfo);
				break;
			default:
				this.tipSelecter = setTipSelectDisplay(this.tipSelecter, false);
				this.tipSucc = setSuccessAlertDisplay(this.tipSucc, false);
				this.tipInfo = setInfoAlertDisplay(this.tipInfo, false);
				this.tipWarn = setWarnAlertDisplay(this.tipWarn, false);
				this.tipError = setErrorAlertDisplay(this.tipError, false);
				this.studentInfo = setStudentInfoDisplay(this.studentInfo, false);
				break;
		}
	};
	
	// 模式初始化
	if(initMode) {
		this.display(initMode, initInfo);
	} else {
		this.display('welcome');
	}

	this.moveBackground = function moveBackground(pxs) {
		var position = $("body").css('backgroundPosition');
		var positionX = position.substring(0, position.indexOf('px'));
		if(positionX <= -100000) {
			$("body").css('backgroundPosition', '100000px center');
		}
		$("body").stop(true, false);
		$("body").animate({'backgroundPosition':'-=' + pxs}, 80);
	}
	
	function setSuccessAlertDisplay(display, o_display, displayInfo) {
		// 传入当前状态和目标状态。若量状态相等则不进行重绘，防止闪烁
		// 但若两次传入的内容不同，即使状态相同也会重绘
		if(display !== o_display || (display === true && displayInfo !== $("#tips-content").html())) {
			if(o_display) {
				$("#tips-info-container").animate({'width':'0%', 'opacity':'1'}, 1, function() {
					$("#tips-info-container").addClass("tips-success-container");
					$("#tips-content").html(displayInfo);
					$("#tips-show-box").css('display', 'inline-block');
				});
				$("#tips-info-container").animate({'width':'100%', 'opacity':'1'}, 100);
			} else {
				$("#tips-info-container").animate({'width':'0%', 'opacity':'0'}, 250, function() {
					$("#tips-info-container").removeClass("tips-success-container");
					$("#tips-content").empty();
					$("#tips-show-box").css('display', 'none');
				});
			}
		}
		return o_display;
	}
	
	function setInfoAlertDisplay(display, o_display, displayInfo) {
		// 传入当前状态和目标状态。若量状态相等则不进行重绘，防止闪烁
		// 但若两次传入的内容不同，即使状态相同也会重绘
		if(display !== o_display || (display === true && displayInfo !== $("#tips-content").html())) {
			if(o_display) {
				$("#tips-info-container").animate({'width':'0%', 'opacity':'1'}, 1, function() {
					$("#tips-info-container").addClass("tips-info-container");
					$("#tips-content").html(displayInfo);
					$("#tips-show-box").css('display', 'inline-block');
				});
				$("#tips-info-container").animate({'width':'100%', 'opacity':'1'}, 100);
			} else {
				$("#tips-info-container").animate({'width':'0%', 'opacity':'0'}, 250, function() {
					$("#tips-info-container").removeClass("tips-info-container");
					$("#tips-content").empty();
					$("#tips-show-box").css('display', 'none');
				});
			}
		}
		return o_display;
	}

	function setWarnAlertDisplay(display, o_display, displayInfo) {
		// 传入当前状态和目标状态。若量状态相等则不进行重绘，防止闪烁
		// 但若两次传入的内容不同，即使状态相同也会重绘
		if(display !== o_display || (display === true && displayInfo !== $("#tips-content").html())) {
			if(o_display) {
				$("#tips-info-container").animate({'width':'0%', 'opacity':'1'}, 1, function() {
					$("#tips-info-container").addClass("tips-warning-container");
					$("#tips-content").html(displayInfo);
					$("#tips-show-box").css('display', 'inline-block');
				});
				$("#tips-info-container").animate({'width':'100%', 'opacity':'1'}, 100);
			} else {
				$("#tips-info-container").animate({'width':'0%', 'opacity':'0'}, 250, function() {
					$("#tips-info-container").removeClass("tips-warning-container");
					$("#tips-content").empty();
					$("#tips-show-box").css('display', 'none');
				});
			}
		}
		return o_display;
	}

	function setErrorAlertDisplay(display, o_display, displayInfo) {
		// 传入当前状态和目标状态。若量状态相等则不进行重绘，防止闪烁
		// 但若两次传入的内容不同，即使状态相同也会重绘
		if(display !== o_display || (display === true && displayInfo !== $("#tips-content").html())) {
			if(o_display) {
				$("#tips-info-container").animate({'width':'0%', 'opacity':'1'}, 1, function() {
					$("#tips-info-container").addClass("tips-error-container");
					$("#tips-content").html(displayInfo);
					$("#tips-show-box").css('display', 'inline-block');
				});
				$("#tips-info-container").animate({'width':'100%', 'opacity':'1'}, 100);
			} else {
				$("#tips-info-container").animate({'width':'0%', 'opacity':'0'}, 250, function() {
					$("#tips-info-container").removeClass("tips-error-container");
					$("#tips-content").empty();
					$("#tips-show-box").css('display', 'none');
				});
			}
		}
		return o_display;
	}

	function setTipSelectDisplay(display, o_display, displayInfo) {
		// 传入当前状态和目标状态。若量状态相等则不进行重绘，防止闪烁
		if(display !== o_display) {
			if(o_display) {
				$("#tips-selecter-container").empty();
				$("#tips-selecter-container").append(displayInfo);
				$("#tips-selecter").css("display", "inline-block");
				$("#tips-selecter").animate({'opacity':'1'}, 1);
				$("#tips-selecter").animate({'opacity':'1'}, 20);
				$("#tips-selecter").animate({'opacity':'0'}, 1);
				$("#tips-selecter").animate({'opacity':'0'}, 20);
				$("#tips-selecter").animate({'opacity':'1'}, 1);
				$("#tips-selecter").animate({'opacity':'1'}, 20);
				$("#tips-selecter").animate({'opacity':'0'}, 1);
				$("#tips-selecter").animate({'opacity':'0'}, 20);
				$("#tips-selecter").animate({'opacity':'1'}, 1, function() {
				});
			} else {
				$("#tips-selecter").animate({'opacity':'0'}, 1);
				$("#tips-selecter").animate({'opacity':'0'}, 20);
				$("#tips-selecter").animate({'opacity':'1'}, 1);
				$("#tips-selecter").animate({'opacity':'1'}, 20);
				$("#tips-selecter").animate({'opacity':'0'}, 1, function() {
					$("#tips-selecter").css("display", "none");
				});
			}
		}
		return o_display;
	}

	function setStudentInfoDisplay(display, o_display, displayInfo) {
		if(display !== o_display) {
			if(o_display) {
				$("#footer").animate({'height':'0','opacity':'0'}, 1, function() {
					if(displayInfo == 1) {
						$("#footer").css("backgroundImage", "url(/resource/img/girl.gif)");
					} else {
						$("#footer").css("backgroundImage", "url(/resource/img/boy.gif)");
					}
					$("#footer").css("display", "block");
					$('#myCarousel').carousel(1);
					$('#myCarousel').carousel('pause')
				});
				$("#footer").animate({'height':$(window).height() - 75 - $("#header").height(),'opacity':'1'}, 400)
			} else {
				$("#footer").animate({'height':'0','opacity':'0'}, 200, function() {
					$("#footer").css("display", "none");
				});
			}
		}
		return o_display;
	}
}

function StudentInfoControler() {
	// 创建打字机效果控制器的构造器
	this.display = 1;

	this.changeShowMode = function(o_display, displayInfo) {
		clearParagraphBox(this.addressQuery(this.display));
		if(displayInfo == "") {
			clearParagraphBox(this.addressQuery(o_display));
		} else {
			fillParagraphToBox(displayInfo, this.addressQuery(o_display));
		}
		this.display = o_display;
	}

	this.addressQuery = function(address) {
		switch(address) {
			case 0: return 'identical';
			case 1: return 'basic';
			case 2: return 'schooling';
			case 'identical': return 0;
			case 'basic': return 1;
			case 'schooling': return 2;
		}
	}

	function clearParagraphBox(address) {
		var currentId = "#student-info-" + address;
		$(currentId).html("_");
		$(currentId).nextAll("button").css("display", "none");
	}

	function fillParagraphToBox(array, o_address) {
		var currentId = "#student-info-" + o_address;
		var currentHtml = "";
		var index = 0;
		var timer = setInterval(function() {
			currentHtml = $(currentId).html();
			$(currentId).html(currentHtml.substring(0, currentHtml.length - 1) + array[index] + "_");
			$(currentId).parent('.pre-scrollable')[0].scrollTop = $(currentId).parent('.pre-scrollable')[0].scrollHeight;
			index++;
			if(index == array.length) {
				clearInterval(timer);
				setTimeout(function() {
					$(currentId).nextAll("button").css("display", "block");
					$(currentId).parent('.pre-scrollable')[0].scrollTop = $(currentId).parent('.pre-scrollable')[0].scrollHeight;
				}, 100);
			}
		}, 50);
	}
}

function SoundEffectControler() {
	// 创建 jq-sound-effect-controler（jQuery声效控制器）的构造器
	this.playVoice = function(voiceName) {
		// console.log(voiceName);
		var audioDom = $("#" + voiceName);
		// var currentTime = audioDom.currentTime // 当前音频/视频的播放位置（以秒计）
		// var duration = audioDom.duration; // 当前音频/视频的长度（以秒计)
		// 如果当前音视频未开始播放，或者播放结束，则让它播放
		// if (currentTime <= 0 || currentTime == duration) {
			audioDom.play();
		// }
	}
}

// 实例化视效和声效控制器
var animationCtrl = new AnimationControler();
var soundCtrl = new SoundEffectControler();

// 实例化信息显示控制器
var studentInfoCtrl = new StudentInfoControler();

function errorCodeTranslater(errorCode) {
	if(errorCode.substring(3, 5) == "02") {
		animationCtrl.display('error', '查无此人');
	} else {
		animationCtrl.display('error', '请求失败');
	}
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
	return domList;
}

function translateArrayToParagraph(array, mode) {
	function sentenceToArray(sentence) {
		var arraylist = [];
		for(var character in sentence) {
			arraylist.push(sentence[character]);
		}
		return arraylist;
	}

	var domParagraph = [];
	var content = "";
	switch(mode) {
		case 'basic':
			domParagraph = domParagraph.concat(sentenceToArray('姓名：' + array['student_name']));
			domParagraph.push('</br>');
			domParagraph = domParagraph.concat(sentenceToArray('性别：' + (array['student_sex'] == 1 ? '女' : '男')));
			domParagraph.push('</br>');
			domParagraph = domParagraph.concat(sentenceToArray('学号：' + array['student_id']));
			domParagraph.push('</br>');
			domParagraph = domParagraph.concat(sentenceToArray('年级：' + array['grade']));
			domParagraph.push('</br>');
			domParagraph = domParagraph.concat(sentenceToArray('班级：' + array['class_name']));
			domParagraph.push('</br>');
			break;
		case 'identical':
			domParagraph = domParagraph.concat(sentenceToArray('姓名：' + array['student_name']));
			domParagraph.push('</br>');
			domParagraph = domParagraph.concat(sentenceToArray('性别：' + (array['student_sex'] == 1 ? '女' : '男')));
			domParagraph.push('</br>');
			domParagraph = domParagraph.concat(sentenceToArray('出生年份：' + array['birth_year'] + '年'));
			domParagraph.push('</br>');
			domParagraph = domParagraph.concat(sentenceToArray('家庭住址：' + array['home_address']));
			domParagraph.push('</br>');
			domParagraph = domParagraph.concat(sentenceToArray('民族：' + array['nation_name']));
			domParagraph.push('</br>');
			domParagraph = domParagraph.concat(sentenceToArray('家庭类别：' + array['type_name']));
			domParagraph.push('</br>');
			domParagraph = domParagraph.concat(sentenceToArray('政治面貌：' + array['outlook_name']));
			domParagraph.push('</br>');
			break;
		case 'schooling':
			domParagraph = domParagraph.concat(sentenceToArray('姓名：' + array['student_name']));
			domParagraph.push('</br>');
			domParagraph = domParagraph.concat(sentenceToArray('性别：' + (array['student_sex'] == 1 ? '女' : '男')));
			domParagraph.push('</br>');
			domParagraph = domParagraph.concat(sentenceToArray('学号：' + array['student_id']));
			domParagraph.push('</br>');
			domParagraph = domParagraph.concat(sentenceToArray('班级：' + array['class_name']));
			domParagraph.push('</br>');
			if(array['dorm_number'] != -1) {
				domParagraph = domParagraph.concat(sentenceToArray('寝室号：' + array['dorm_number']));
				domParagraph.push('</br>');
			}
			domParagraph = domParagraph.concat(sentenceToArray('教师信息：'));
			domParagraph.push('</br>');
			var teacherInfo = array['teacher_info'];
			var length = 0;
			for(var teacher in teacherInfo) {
				domParagraph.push('&emsp;&emsp;');
				domParagraph = domParagraph.concat(sentenceToArray(teacher + "：" + teacherInfo[teacher]));
				domParagraph.push('</br>');
				length++;
			}
			if(length === 0) {
				domParagraph.push('&emsp;&emsp;');
				domParagraph.push('无');
				domParagraph.push('</br>');
			}
			if(array['discouraged_sign'] == 1) {
				domParagraph.push('</br>');
				domParagraph.push("<span style=\"color: rgb(212, 57, 53)\">该学生已被劝退！</span>");
				domParagraph.push('</br>');
			}
			break;
		default:
			break;
	}
	return domParagraph;
}
