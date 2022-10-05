document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("validate").addEventListener("click", function () {
		let dni = document.getElementById("dni").value
		let dniParts = /\w?(\d{8})(\w{1})/.exec(dni)
		if (dniParts != null) {
			let numbers = dniParts[1].split('')
			let m23 = numbers.reduce((previousValue, currentValue) => previousValue + currentValue) % 23
			let abc = 'trwagmyfpdxbnjzsqvhlcke'
			if (abc[m23] === dniParts[2].toLowerCase()) {
				document.getElementById("validation").innerHTML = "DNI is valid!"
			} else {
				document.getElementById("validation").innerHTML = "DNI is not valid..."
			}
		}
	})
})
