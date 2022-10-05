function factorize() {
	let result = 1
	for (let i = 10; i > 0; i--) {
		result = result * i
	}
	document.getElementById("factorized").innerHTML = result
}

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("bFact").addEventListener("click", factorize)
})
