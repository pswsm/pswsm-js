document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById('tablero').classList.add('esconder');
    
    document.getElementById('nombre').addEventListener('input', validateName);
    document.getElementById('nombre').addEventListener('blur', validateName);
    document.getElementById('start').addEventListener('click', function(e){
        if(validateName(e)){
            document.getElementById('formulario').classList.add('esconder');
            let size = document.getElementById('size').value;
            console.log(size);
            
            for (let i = 0; i < parseInt(size); i++) {
                for (let i = 0; i < parseInt(size); i++) {
                    let div = document.createElement('div');
                    div.className = "carta";
                    document.getElementById('tablero').append(div);
                }
                document.getElementById('tablero').innerHTML = document.getElementById('tablero').innerHTML + '<br>';
            }
                
            document.getElementById('tablero').classList.remove('esconder');
        }
    });

});


function validateName(e){
    let validate = true;
    //validación del nombre
    let nombre = document.querySelector('#nombre').value;
    let errorDIv = document.getElementById('errorNombre'); 

    if (e.type === 'input'){
        if(nombre.length > 10){
            //ERROR
            errorDIv.classList.remove('esconder');
            document.querySelector('#nombre').focus();
            validate = false;
        }else{
            errorDIv.classList.add('esconder');
        }
    }else{
        if(nombre.length < 4 || nombre.length > 10){
            //ERROR
            errorDIv.classList.remove('esconder');
            document.querySelector('#nombre').focus();
            validate = false;
        }else{
            errorDIv.classList.add('esconder');
        }
    }
    if (!isNaN(nombre)){
        document.getElementById('errorNombre2').classList.remove('esconder');
        validate = false;
    }else{
        document.getElementById('errorNombre2').classList.add('esconder');
    }
    return validate;
}