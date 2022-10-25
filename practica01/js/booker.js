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
		response.forEach(element => {
			option = document.createElement("option")
			option.value = element["iata_code"]
			option.innerHTML = element["iata_code"] + " - " + element["city"]
			for (let i = 0; i < selects.length; i++) {
				console.log('select:', selects[i])
				selects[i].appendChild(option)
			}
			// console.log('element:', element)
		})
	} 
}
