function validarCamposObligatorios() {
    var bandera = false;

    var nombres, apellidos;

    for (var i = 0; i < document.forms[0].length; i++) {
        var elemento = document.forms[0].elements[i];
        if (elemento.value.trim() == '') {
            if (elemento.id == 'cedula') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeCedula").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeCedula").style.color = "red"


            }
            if (elemento.id == 'nombres') {
                nombres = elemento.id.value;
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeNombres").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeNombres").style.color = "red"
            }
            if (elemento.id == 'apellidos') {
                apellidos = elemento.id.value;
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeApellidos").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeApellidos").style.color = "red"
            }
            if (elemento.id == 'direccion') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeDireccion").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeDireccion").style.color = "red"
            }
            if (elemento.id == 'telefono') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeTelefono").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeTelefono").style.color = "red"
            }
            if (elemento.id == 'fechaNacimiento') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeFecha").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeFecha").style.color = "red"
            }
            if (elemento.id == 'correo') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeCorreo").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeCorreo").style.color = "red"
            }
            bandera = true;

        }
    }

    if (bandera) {
        alert('Llenar todos los campos')
        return false;
    } else {
        return true;
    }




}

function ValidarLetras(event, label, elemento) {
    let span = document.getElementById(label);
    let letra = event.which || event.keyCode;

    if (letra >= 65 && letra <= 90 || letra >= 97 && letra <= 122 || letra == 32 || letra == 8 || letra == 16) {
        span.style.display = "none";
    } else {
        span.innerHTML = "Ingrese Letras"
        span.style.display = "block"
        span.style.color = "red"
        let frase = elemento.value;
        frase = frase.substring(0, frase.length - 1)
        elemento.value = frase
    }

    let wordCount = elemento.value.trim().replace(/\s+/gi, ' ').split(' ').length;

    if (wordCount > 2) {
        span.innerHTML = "Ingrese solo dos nombres"
        span.style.display = "block"
        span.style.color = "red"
        let frase = elemento.value;
        frase = frase.substring(0, frase.length - 2)
        elemento.value = frase
    }

}

function ValidarNumeros(event, label, elemento) {
    let span = document.getElementById(label);
    let numero = event.which || event.keyCode;

    if (numero >= 48 && numero <= 57) {
        span.style.display = "none";
    } else {
        span.innerHTML = "Ingrese Numeros"
        span.style.color = "red"
        span.style.display = "block"
        let cantidad = elemento.value;
        cantidad = cantidad.substring(0, cantidad.length - 1)
        elemento.value = cantidad
    }

    if (elemento.value.length === 10) {
        validar(label, elemento);

    }

}

function validar(label, elemento) {
    cedula = elemento.value;
    let span = document.getElementById(label);
    var cad = cedula.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;

    if (cad !== "" && longitud === 10) {
        for (i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i));
            }
        }

        total = total % 10 ? 10 - total % 10 : 0;

        if (cad.charAt(longitud - 1) == total) {
            span.innerHTML = "Cedula Válida";
            span.style.display = "block"
            span.style.color = "green"
        } else {
            span.innerHTML = "Cedula Inválida";
            span.style.display = "block"
            span.style.color = "red"
        }
    }
}

function ValidarTelefono(event, label, elemento) {
    let span = document.getElementById(label);
    let numero = event.which || event.keyCode;

    if (numero >= 48 && numero <= 57) {
        span.style.display = "none";
    } else {
        span.innerHTML = "Ingrese Numeros"
        span.style.display = "block"
        span.style.color = "red"
        let cantidad = elemento.value;
        cantidad = cantidad.substring(0, cantidad.length - 1)
        elemento.value = cantidad
    }

    if (elemento.value.length >= 10) {
        validar(label, elemento);
        span.innerHTML = "Solo ingrese diez numeros"
        span.style.display = "block"
        span.style.color = "red"
        let cantidad = elemento.value;
        cantidad = cantidad.substring(0, cantidad.length - 1)
        elemento.value = cantidad
    }


}

function ValidarCorreo(event, label, elemento) {
    let span = document.getElementById(label);
    let caracter = event.which || event.keyCode;
    let correo = elemento.value;
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    span.innerHTML = ""
    span.style.display = "block"

    if (!email.test(correo)) {
        span.innerHTML = "Correo Invalido"
        span.style.display = "block"
        span.style.color = "red"

    } else if (!email.test(correo)) {
        span.innerHTML = "Correo Invalido"
        span.style.display = "block"
        span.style.color = "red"

    } else {
        span.innerHTML = "Correo Valido"
        span.style.display = "block"
        span.style.color = "green"

    }


}

function validarFecha(event, label, element) {
    let span = document.getElementById(label);
    let caracter = event.which || event.keyCode;
    let elemento = element.value

    if (validarFormatoFecha(element)) {
        if (fechaExistente(elemento)) {
            span.innerHTML = "Fecha Valida"
            span.style.display = "block"
            span.style.color = "green"
        } else {
            span.innerHTML = "Fecha Invalida"
            span.style.display = "block"
            span.style.color = "red"
        }
    } else {
        span.innerHTML = "Formato Invalido"
        span.style.display = "block"
        span.style.color = "red";
    }

    if (elemento.length >= 11) {
        span.innerHTML = "Fecha fuera de rango"
        span.style.display = "block"
        span.style.color = "red"
        let cantidad = element.value;
        cantidad = cantidad.substring(0, cantidad.length - 1)
        element.value = cantidad
    }

}

function validarFormatoFecha(element) {
    let elemento = element.value
    var formato = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    if ((elemento.match(formato)) && (elemento != '')) {
        return true;
    } else {
        return false;
    }
}

function fechaExistente(fecha) {
    var fechaf = fecha.split("/");
    var day = fechaf[0];
    var month = fechaf[1];
    var year = fechaf[2];
    var date = new Date(year, month, '0');
    if ((day - 0) > (date.getDate() - 0)) {
        return false;
    }
    return true;
}
