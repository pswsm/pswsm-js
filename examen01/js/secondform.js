function checkValidSecond() {
	//let helpMsg = document.getElementById('help')
	let description = document.getElementById("desc").value
	let tlf = document.getElementById("tlf")
	let mail = document.getElementById("mail")
	let tlfOk = /(?:93|6\d)\d{7}/.test(tlf.value)
	let mailOk = /[\w\-]+@\w+\.\w{2,3}/.test(mail.value)
	let date = document.getElementById("datewhen")
	let dateOk = false
	if (Date.parse(date.value) <= Date.now()) {
		dateOk = true
	}
	let prioritats = document.getElementsByName('prioritat')
	let prioritype = undefined
	for (let idx = 0; idx < prioritats.length; idx++) {
		const prioritat = prioritats[idx];
		if (prioritat.checked) {
			prioritype = prioritat.value
		}
	}
	/* if (!(invidOk)) {
		helpMsg.innerHTML = 'Assegurat de que el format es el seguent:<pre>AAAA:000</pre>'
	} */
	if (description !== "" && tlfOk && mailOk && dateOk && prioritype !== undefined) {
		document.getElementById("submitinfo").disabled = false
	} else {
		document.getElementById("submitinfo").disabled = true
	}
}

function makeCookie(obj) {
	objStr = '{lloc:' + obj.lloc + ',id:' + obj.id + ',desc:' + obj.desc + ',data:' + obj.data + ',telefon:' + obj.telefon + ',email:' + obj.email + ',prioritat:' + obj.prioritat + '}'
	document.cookie = "examen=" + objStr + ";max-age=604800"
}
