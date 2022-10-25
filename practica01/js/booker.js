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
