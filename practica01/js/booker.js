function loadOptions() {
	document.getElementById("logout").addEventListener("click", function () {
		document.cookie = "username='';max-age=-1"
		document.getElementById("logged").style.display = "none"
		document.getElementById("logRegCtrl").style.display = "block"
	})
	let xhrReq = new XMLHttpRequest()
	xhrReq.open("GET", "./php/getopts.php")
	xhrReq.send()
	xhrReq.onload = function () {
		selects = document.getElementsByTagName("select")
		let response = JSON.parse(xhrReq.response)
		if (!(selects[0].hasChildNodes())) {
			response.forEach(element => {
				option = document.createElement("option")
				option.value = element["iata_code"]
				option.innerHTML = element["iata_code"] + " - " + element["city"]
				let options = [option, option.cloneNode(true)]
				for (let i = 0; i < selects.length; i++) {
					selects[i].appendChild(options[i])
				}
				// console.log('element:', element)
			})
		}
	} 
}

function bookerSubmitActivate() {
	console.log('submit activate run')
	let orig = document.getElementById("sOrig").value
	let dest = document.getElementById("sDest").value
	let date_from = Date.parse(document.getElementById("from").value)
	let date_to = Date.parse(document.getElementById("todate").value)
	let nPass = document.getElementsByName('nPass')
	for (let idx = 0; idx < nPass.length; idx++) {
		const ccc = nPass[idx];
		if (ccc.checked) {
			let numPassengers = ccc.value
		}
	}
	if (date_from >= Date.now() && date_from < date_to && orig !== dest && nPass !== 'undefined') {
		document.getElementById("submit_booking").disabled = false
	} else {
		document.getElementById("submit_booking").disabled = true
	}
	setTimeout(bookerSubmitActivate, 500);
}
