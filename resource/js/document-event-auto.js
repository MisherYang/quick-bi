$(document).ready(function() {
	console.log(" ________       ___  ___      ___      ________      ___  __                       ________      ___     \n|\\   __  \\     |\\  \\|\\  \\    |\\  \\    |\\   ____\\    |\\  \\|\\  \\                    |\\   __  \\    |\\  \\    \n\\ \\  \\|\\  \\    \\ \\  \\\\\\  \\   \\ \\  \\   \\ \\  \\___|    \\ \\  \\/  /|_    ____________  \\ \\  \\|\\ /_   \\ \\  \\   \n \\ \\  \\\\\\  \\    \\ \\  \\\\\\  \\   \\ \\  \\   \\ \\  \\        \\ \\   ___  \\  |\\____________\\ \\ \\   __  \\   \\ \\  \\  \n  \\ \\  \\\\\\  \\    \\ \\  \\\\\\  \\   \\ \\  \\   \\ \\  \\____    \\ \\  \\\\ \\  \\ \\|____________|  \\ \\  \\|\\  \\   \\ \\  \\ \n   \\ \\_____  \\    \\ \\_______\\   \\ \\__\\   \\ \\_______\\   \\ \\__\\\\ \\__\\                  \\ \\_______\\   \\ \\__\\\n    \\|___| \\__\\    \\|_______|    \\|__|    \\|_______|    \\|__| \\|__|                   \\|_______|    \\|__|\n          \\|__|                                                                                          \n                                                                                                         ");
	console.log("预祝比赛圆满成功！");
});

$(document).ready(function() {
	setTimeout(function() {
		$("#unsmooth").fadeIn(100);
	}, 3000);
});

var backgroundMotion;
$(document).ready(function() {
	backgroundMotion = setInterval(function() {
		animationCtrl.moveBackground(1);
	}, 50);
});

$(document).ready(function() {
	$("#tips-selecter-container").css("max-height", Math.floor(($(window).height() - 200) * 0.8));
});

$(window).resize(function() {
	$("#tips-selecter-container").css("max-height", Math.floor(($(window).height() - 200) * 0.8));
});

window.onload = function() {
	animationCtrl.display('welcome');
	$("#loader").html("加载完成");
	$("#preloader").delay(300);
	$("#preloader").fadeOut(300);
};
