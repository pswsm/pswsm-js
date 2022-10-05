document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("tuNombre").addEventListener("blur", function() {
		document.getElementById("errorN").innerHTML = ""
		valor = document.getElementById("tuNombre").value
		if (/[A-ZÓÀÒ]{1}[a-zàíúèéòó]+/.exec(valor) == null) {
			document.getElementById("errorN").innerHTML = "Nom amb format incorrecte"
		}
	})

	document.getElementById("tuApellidos").addEventListener("blur", function() {
		document.getElementById("errorA").innerHTML = ""
		valor = document.getElementById("tuApellidos").value
		if (/[A-ZÓÀÒ]{1}[a-zàíúèéòó]+ (?:i |el )?[A-ZÓÀÒ]{1}[a-zàíúèéòó]+/.exec(valor) == null) {
			document.getElementById("errorA").innerHTML = "Cognoms amb format incorrecte"
		}
	})
   
	document.getElementById("tuEmail").addEventListener("blur", function() {
		document.getElementById("errorE").innerHTML = ""
		valor = document.getElementById("tuEmail").value
		if (/\w+@\w+\.\w{3}/.exec(valor) == null) {
			document.getElementById("errorE").innerHTML = "Email amb format incorrecte"
		}
	})
   
	document.getElementById("tuDni").addEventListener("blur", function () {
		let dni = document.getElementById("tuDni").value
		let dniParts = /\w?(\d{8})(\w{1})/.exec(dni)
		if (dniParts != null) {
			let numbers = dniParts[1].split('')
			let m23 = numbers.reduce((previousValue, currentValue) => previousValue + currentValue) % 23
			let abc = 'trwagmyfpdxbnjzsqvhlcke'
			if (abc[m23] !== dniParts[2].toLowerCase()) {
				document.getElementById("errorD").innerHTML = "El DNI no és vàlid"
			} else {
				document.getElementById("errorD").innerHTML = ""
			}
		}
	})

	document.getElementById("tuNac").addEventListener("blur", function () {
		let adate = new Date()
		let bdate = new Date(document.getElementById("tuNac").value)
		if ((adate - bdate) < 18) {
			document.getElementById("errorDa").innerHTML = "Has de ser major d'edat"
		}
	})
    //es valida en sortir de cada camp
    //haig de cridar als validadors
    
    //si hi ha algun error, missatge d'error al camp corresponent i botó deshabilitat
    
    //si tot OK, botó s'habilita i es construeix dinàmicament el text que diu el teu nom i cognoms, email, dni, data de naixement, 
    //edat i dies que et falten per al teu aniversari
        
 });
