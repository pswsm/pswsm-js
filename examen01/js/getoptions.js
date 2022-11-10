function getWhereOpts() {
	let xhrReq = new XMLHttpRequest()
	xhrReq.open("GET", "./server.php")
	xhrReq.send()
	xhrReq.onload = function () {
		selectGenubi = document.getElementById("genubi")
		selectSpecubi = document.getElementById("specubi")
		let response = JSON.parse(xhrReq.response)
		response['general'].forEach(element => {
			option = document.createElement("option")
			option.value = element["ciutat"]
			option.innerHTML = element["ciutat"] + " - " + element["oficina"]
			selectGenubi.appendChild(option)
		})
		response['especifica'].forEach(element => {
			option = document.createElement("option")
			option.value = element
			option.innerHTML = element
			selectSpecubi.appendChild(option)
		})
	} 
}

function checkValid() {
	let helpMsg = document.getElementById('help')
	let genubi = document.getElementById("genubi").value
	let specubi = document.getElementById("specubi").value
	let invid = document.getElementById("invid")
	let invidOk = /\w{4}\:\d{3}/.test(invid.value)
	if (!(invidOk)) {
		helpMsg.innerHTML = 'Assegurat de que el format es el seguent:<pre>AAAA:000</pre>'
	}
	if (genubi !== "" && specubi !== "" && invidOk) {
		document.getElementById("submitloc").disabled = false
	} else {
		document.getElementById("submitloc").disabled = true
	}
}
