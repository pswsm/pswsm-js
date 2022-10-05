document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("show_login").addEventListener("click", function () {
        document.getElementById("login").style.display = "block"
        document.getElementById("register").style.display = "none"
    })
    document.getElementById("show_register").addEventListener("click", function () {
        document.getElementById("login").style.display = "none"
        document.getElementById("register").style.display = "block"
    })
})
