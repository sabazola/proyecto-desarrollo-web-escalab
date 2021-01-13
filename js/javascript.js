// TRANSFORMAR DOLARES A PESOS CHILENOS
function dolar_peso() {
    var n1 = document.getElementById('dolar').value;
    var mult = parseInt(n1) * 711.12;
    if (isNaN(mult) || (n1<=0) ){
        alert("Ingrese un valor mayor a cero")
    }
    else{
    alert(n1 + " dolares son: "+mult.toFixed(3)+" pesos chilenos.")
    }
}
// TRANSFORMAR PESOS CHILENOS A DOLARES
function peso_dolar() {
    var n1 = document.getElementById('peso').value;
    var mult = parseInt(n1) / 711.12;
    if (isNaN(mult) || (n1<=0) ){
        alert("Ingrese un valor mayor a cero")
    }
    else{
    alert(n1 + " pesos chilenos son: "+mult.toFixed(3)+" dolares.")
    }
}
// VALIDAR FORMULARIO REGISTRO
function valida_registro(){
    alert("Gracias por registrarte, pronto nos pondremos en contacto con usted.");
}