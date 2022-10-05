document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("show1").addEventListener("click", function () {
        document.getElementById("e1").style.display = "block"
        document.getElementById("e2").style.display = "none"
        document.getElementById("e3").style.display = "none"
    })
    document.getElementById("show2").addEventListener("click", function () {
        document.getElementById("e1").style.display = "none"
        document.getElementById("e2").style.display = "block"
        document.getElementById("e3").style.display = "none"
    })
    document.getElementById("show3").addEventListener("click", function () {
        document.getElementById("e1").style.display = "none"
        document.getElementById("e2").style.display = "none"
        document.getElementById("e3").style.display = "block"
    })
})
