function fieldOk(username, password) {
	let usernameOk = false
	let pwdOk = false
	if (/[a-záíúéóàèòçñA-ZÁÍÚÉÓÀÈÒÇÑ ]+/.test(username)) {
		 usernameOk = true
	}
	if (/[\w\d]{4,8}/.test(password)) {
		pwdOk = true
	}
	return[usernameOk, pwdOk]
}

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
			resp = JSON.parse(xhrReq.response)
			switch (resp.status) {
				case true:
					document.cookie = "username=" + resp.message.user + ";max-age=86400"
					document.getElementById("logged").style.display = "block"
					document.getElementById("logRegCtrl").style.display = "none"
					loadOptions()
					break;

				case false:
					document.getElementById("response_login").innerHTML = resp.message
					break;

				default:
					document.getElementById("response_login").innerHTML = "Could not contact server"
					break;
			}
		}
	})
	document.getElementById("submit_register").addEventListener("click", function () {
		let fieldEvalRes = fieldOk(document.getElementById("username_register").value, document.getElementById("password_login_1").value)
		if (!fieldEvalRes[0]) {
			document.getElementById("response_login").innerHTML = "Username not valid."
		} else if (!fieldEvalRes[1]) {
			document.getElementById("response_login").innerHTML = "Passwords can only contain A-Z, a-z, _, and 0-9."
		} else {
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
					// console.log('xhrReq:', xhrReq);
					resp = JSON.parse(xhrReq.response)
					switch (resp.status) {
						case true:
							document.getElementById("response_login").innerHTML = resp.message
							break;

						case false:
							document.getElementById("response_login").innerHTML = resp.message
							break;

						default:
							document.getElementById("response_login").innerHTML = "Could not contact server"
							break;
					}
				}
			} else {
				document.getElementById("response_login").innerHTML = "Passwords must match!"
			}
		}
	})
})
