document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("logout").addEventListener("click", function () {
		document.cookie = "username='';max-age=-1"
		document.getElementById("logged").style.display = "none"
		document.getElementById("logRegCtrl").style.display = "block"
	})
	let xhrReq = new XMLHttpRequest()
	xhrReq.open("GET", "../php/getopts.php")
	xhrReq.send
	xhrReq.onload = function () {

	} 
})
