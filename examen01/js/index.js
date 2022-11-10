document.addEventListener("DOMContentLoaded", function () {
	// Primer formulari
	getWhereOpts()
	document.getElementById("genubi").addEventListener("blur", () => {
		checkValid()
	})
	document.getElementById("specubi").addEventListener("blur", () => {
		checkValid()
	})
	document.getElementById("invid").addEventListener("blur", () => {
		checkValid()
	})
	document.getElementById("submitloc").addEventListener("click", () => {
		document.getElementById("div1").style.display = 'none'
		document.getElementById("div2").style.display = 'block'
		document.getElementById("where").innerHTML = document.getElementById("genubi").value + ' - ' + document.getElementById("specubi").value
		document.getElementById("thing").innerHTML = document.getElementById("invid").value
	})
	
	// Segon formulari

	document.getElementById("desc").addEventListener("blur", () => {
		checkValidSecond()
	})
	document.getElementById("tlf").addEventListener("blur", () => {
		checkValidSecond()
	})
	document.getElementById("datewhen").addEventListener("blur", () => {
		checkValidSecond()
	})
	document.getElementById("mail").addEventListener("blur", () => {
		checkValidSecond()
	})
	document.getElementById("baixa").addEventListener("blur", () => {
		checkValidSecond()
	})
	document.getElementById("normal").addEventListener("blur", () => {
		checkValidSecond()
	})
	document.getElementById("alta").addEventListener("blur", () => {
		checkValidSecond()
	})
	document.getElementById("submitinfo").addEventListener("click", () => {
		let prioritats = document.getElementsByName('prioritat')
		let prioritype = undefined
		for (let idx = 0; idx < prioritats.length; idx++) {
			const prioritat = prioritats[idx];
			if (prioritat.checked) {
				prioritype = prioritat.value
			}
		}
		info = {
			'lloc': document.getElementById('genubi').value + ' - ' + document.getElementById('specubi').value,
			'id': document.getElementById('invid'),
			'desc': document.getElementById('desc').value,
			'data': document.getElementById('datewhen').value,
			'telefon': document.getElementById('tlf').value,
			'email': document.getElementById('mail').value,
			'prioritat': prioritype
		}
		document.getElementById("div2").style.display = 'none'
		document.getElementById("div3").style.display = 'block'
		makeCookie(info)
		makeBoxDom(info)
	})
	document.getElementById('gofirst').addEventListener('click', () => {
		document.getElementById("div3").style.display = 'none'
		document.getElementById("div2").style.display = 'none'
		document.getElementById("div1").style.display = 'block'
	})

	// Final

})
