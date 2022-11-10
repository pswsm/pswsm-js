$("document").ready(function() {
	console.log('logged:')
	$("#sum").click(function() {
		numbers = [$("#n1").val(), $("#n2").val()]
		$("#result").val(Number(numbers[0]) + Number(numbers[1]))
	})
	$("#min").click(function() {
		numbers = [$("#n1").val(), $("#n2").val()]
		$("#result").val(Number(numbers[0]) - Number(numbers[1]))
	})
	$("#mlt").click(function() {
		numbers = [$("#n1").val(), $("#n2").val()]
		$("#result").val(Number(numbers[0]) * Number(numbers[1]))
	})
	$("#div").click(function() {
		numbers = [$("#n1").val(), $("#n2").val()]
		$("#result").val(Number(numbers[0]) / Number(numbers[1]))
	})
})
