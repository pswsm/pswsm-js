document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("submit_login").addEventListener("click", function () {
		let xhrReq = new XMLHttpRequest()
		xhrReq.open("POST", "./php/server.php")
		xhrReq.send(JSON.stringify(
			{
				"username": document.getElementById("username_login").value,
				"password": document.getElementById("password_login").value
			})
		)
		xhrReq.onload = function() {
			document.getElementById("response").innerHTML = JSON.parse(xhrReq.response);
		}
	})
})
