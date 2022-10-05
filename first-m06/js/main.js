function calc (n1, n2, op) {
    if (op === '+') { 
        return n1 + n2
    } else if (op === '-') {
        return n1 - n2
    } else if (op === '*') { 
        return n1 * n2
    }
}

function show(slf, oposite) {
    slf.style.display = "block"
    oposite.style.display = "none"
}

function ready () {
    let button1 = document.getElementById('exercici1')
    let button2 = document.getElementById('exercici2')
    button1.addEventListener('click', show(document.getElementById('e1res'), document.getElementById('e2res')))
    button2.addEventListener('click', show(document.getElementById('e2res'), document.getElementById('e1res')))
    console.log('ok')
}

document.addEventListener("DOMContentLoaded", ready)
