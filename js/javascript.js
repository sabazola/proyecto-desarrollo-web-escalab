// TRANSFORMAR DOLARES A PESOS CHILENOS
function dolar_peso() {
    var n1 = document.getElementById('dolar').value;
    var mult = n1 * 711.12;
    if (isNaN(mult)){
        alert("Debe ingresar un valor")
    }
    else{
    alert(n1 + " dolares son: "+mult.toFixed(3)+" pesos chilenos.")
    }
}
// TRANSFORMAR PESOS CHILENOS A DOLARES
function peso_dolar() {
    var n1 = document.getElementById('peso').value;
    var mult = n1 / 711.12;
    if (isNaN(mult)){
        alert("Debe ingresar un valor")
    }
    else{
    alert(n1 + " pesos chilenos son: "+mult.toFixed(3)+" dolares.")
    }
}
// MENSAJE REGISTRO EXITOSO
function registroexitoso(){
    alert("Gracias por registrarte, pronto nos pondremos en contacto con usted.");
}