document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("sum").addEventListener("click", function () {
		numbers = [document.getElementById("n1").value, document.getElementById("n2").value]
		document.getElementById("result").value = Number(numbers[0]) + Number(numbers[1])
	})
	document.getElementById("min").addEventListener("click", function () {
		numbers = [document.getElementById("n1").value, document.getElementById("n2").value]
		document.getElementById("result").value = Number(numbers[0]) - Number(numbers[1])
	})
	document.getElementById("mlt").addEventListener("click", function () {
		numbers = [document.getElementById("n1").value, document.getElementById("n2").value]
		document.getElementById("result").value = Number(numbers[0]) * Number(numbers[1])
	})
	document.getElementById("div").addEventListener("click", function () {
		numbers = [document.getElementById("n1").value, document.getElementById("n2").value]
		document.getElementById("result").value = Number(numbers[0]) / Number(numbers[1])
	})
})
