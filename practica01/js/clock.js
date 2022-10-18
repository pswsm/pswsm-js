document.addEventListener("DOMContentLoaded", function () {
	function showTime(clock_id) {
		var date = new Date()
		var h = date.getHours() // 0 - 23
		var m = date.getMinutes() // 0 - 59
		var s = date.getSeconds() // 0 - 59
		
		if(h == 0){
			h = 24
		}
		
		h = (h < 10) ? "0" + h : h
		m = (m < 10) ? "0" + m : m
		s = (s < 10) ? "0" + s : s
		
		var time = h + ":" + m + ":" + s + " " 
		document.getElementById(clock_id).innerText = time
		document.getElementById(clock_id).textContent = time
		
		setTimeout(showTime, 1000, clock_id)
	}
	showTime("rellotge")
})
