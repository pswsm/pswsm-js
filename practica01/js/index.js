document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("submit_login").addEventListener("click", function () {
		let xhrReq = new XMLHttpRequest()
		xhrReq.open("POST", "./php/server.php")
		xhrReq.send(JSON.stringify(
			{
				"operation": "login",
				"username": document.getElementById("username_login").value,
				"password": document.getElementById("password_login").value
			})
		)
		xhrReq.onload = function() {
			//console.log('xhrReq:', xhrReq);
			document.getElementById("response").innerHTML = JSON.parse(xhrReq.response);
		}
	})
	document.getElementById("submit_register").addEventListener("click", function () {
		if (document.getElementById("password_login_1").value === document.getElementById("password_login_2").value) {
			let xhrReq = new XMLHttpRequest()
			xhrReq.open("POST", "./php/server.php")
			xhrReq.send(JSON.stringify(
				{
					"operation": "create",
					"username": document.getElementById("username_register").value,
					"password": document.getElementById("password_login_1").value
				})
			)

			xhrReq.onload = function() {
				console.log('xhrReq:', xhrReq);
				// document.getElementById("response").innerHTML = JSON.parse(xhrReq.response);
			}
		} else {
			document.getElementById("response").innerHTML = "Passwords must match!"
		}
	})
})
