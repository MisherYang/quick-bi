function AnimationControler(initMode, initInfo) {
	// 创建 jq-animation-controler（jQuery动画管理器）的构造器
	this.tipSelecter = false;
	this.tipSucc = false;
	this.tipInfo = false;
	this.tipWarn = false;
	this.tipError = false;

	this.display = function(displayMode, displayInfo) {
		// 动画控制器模式控制逻辑
		switch(displayMode) {
			case "welcome":
				this.tipSelecter = setTipSelectDisplay(this.tipSelecter, false);
				this.tipSucc = setSuccessAlertDisplay(this.tipSucc, false);
				this.tipWarn = setWarnAlertDisplay(this.tipWarn, false);
				this.tipError = setErrorAlertDisplay(this.tipError, false);
				this.tipInfo = setInfoAlertDisplay(this.tipInfo, true, '欢迎使用');
				break;
			case "success":
				this.tipSelecter = setTipSelectDisplay(this.tipSelecter, false);
				this.tipInfo = setInfoAlertDisplay(this.tipInfo, false);
				this.tipWarn = setWarnAlertDisplay(this.tipWarn, false);
				this.tipError = setErrorAlertDisplay(this.tipError, false);
				this.tipSucc = setSuccessAlertDisplay(this.tipSucc, true, displayInfo);
				break;
			case "information":
				this.tipSelecter = setTipSelectDisplay(this.tipSelecter, false);
				this.tipSucc = setSuccessAlertDisplay(this.tipSucc, false);
				this.tipWarn = setWarnAlertDisplay(this.tipWarn, false);
				this.tipError = setErrorAlertDisplay(this.tipError, false);
				this.tipInfo = setInfoAlertDisplay(this.tipInfo, true, displayInfo);
				break;
			case "warning":
				this.tipSelecter = setTipSelectDisplay(this.tipSelecter, false);
				this.tipSucc = setSuccessAlertDisplay(this.tipSucc, false);
				this.tipInfo = setInfoAlertDisplay(this.tipInfo, false);
				this.tipError = setErrorAlertDisplay(this.tipError, false);
				this.tipWarn = setWarnAlertDisplay(this.tipWarn, true, displayInfo);
				break;
			case "error":
				this.tipSelecter = setTipSelectDisplay(this.tipSelecter, false);
				this.tipSucc = setSuccessAlertDisplay(this.tipSucc, false);
				this.tipInfo = setInfoAlertDisplay(this.tipInfo, false);
				this.tipWarn = setWarnAlertDisplay(this.tipWarn, false);
				this.tipError = setErrorAlertDisplay(this.tipError, true, displayInfo);
				break;
			case "selecter":
				this.tipInfo = setInfoAlertDisplay(this.tipInfo, false);
				this.tipSucc = setSuccessAlertDisplay(this.tipSucc, false);
				this.tipWarn = setWarnAlertDisplay(this.tipWarn, false);
				this.tipError = setErrorAlertDisplay(this.tipError, false);
				this.tipSelecter = setTipSelectDisplay(this.tipSelecter, true, displayInfo);
				break;
			default:
				this.tipSelecter = setTipSelectDisplay(this.tipSelecter, false);
				this.tipSucc = setSuccessAlertDisplay(this.tipSucc, false);
				this.tipInfo = setInfoAlertDisplay(this.tipInfo, false);
				this.tipWarn = setWarnAlertDisplay(this.tipWarn, false);
				this.tipError = setErrorAlertDisplay(this.tipError, false);
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
		var position = $("body").css('backgroundPositionX');
		var positionX = position.substring(0, position.length - 2);
		if(positionX <= -100000) {
			$("body").css('backgroundPosition', '100000px center');
		}
		$("body").animate({'backgroundPosition':'-=' + pxs}, 1);
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
				$("#tips-info-container").animate({'width':'100%', 'opacity':'1'}, 200);
			} else {
				$("#tips-info-container").animate({'width':'0%', 'opacity':'0'}, 300, function() {
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
				$("#tips-info-container").animate({'width':'100%', 'opacity':'1'}, 200);
			} else {
				$("#tips-info-container").animate({'width':'0%', 'opacity':'0'}, 300, function() {
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
				$("#tips-info-container").animate({'width':'100%', 'opacity':'1'}, 200);
			} else {
				$("#tips-info-container").animate({'width':'0%', 'opacity':'0'}, 300, function() {
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
				$("#tips-info-container").animate({'width':'100%', 'opacity':'1'}, 200);
			} else {
				$("#tips-info-container").animate({'width':'0%', 'opacity':'0'}, 300, function() {
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

	function playVoice(voiceName) {
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

var animationCtrl = new AnimationControler();

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
