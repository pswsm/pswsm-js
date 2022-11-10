$(document).ready(() => {
	$("tr:even > td:even").css("background-color", "black")
	$("tr:even > td:odd").css("background-color", "#ff1493")
	$("tr:odd > td:odd").css("background-color", "black")
	$("tr:odd > td:even").css("background-color", "#ff1493")
})
