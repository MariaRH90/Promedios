var nombres = []
var apellidos = []
var momentos1 = []
var momentos2 = []
var momentos3 = []

function agregarAlumnos() {
    console.log("funcion")
    var nombre = document.getElementById("nombre").value
    if (!pasoElFiltroPorTamanho(nombre, 3)) {
        console.log("el tamaño minimo del nombre debe ser de tres letras")
        return
    }
    var apellido = document.getElementById("apellido").value
    if (!pasoElFiltroPorTamanho(apellido, 3)) {
        console.log("el tamaño minimo del apellido debe ser de tres letras")
        return
    }
    var nota1 = parseInt(document.getElementById("nota1").value)
    // if (pasoELFiltroPorCantidadDeNumero(nota,1) ) {
    //     return true
    // } 
    // return false
    var nota2 = parseInt(document.getElementById("nota2").value)

    var nota3 = parseInt(document.getElementById("nota3").value)

    var materiaSelect = document.getElementById("Materia")
   
    nombres.push(nombre)
    apellidos.push(apellido)
    momentos1.push(nota1)
    momentos2.push(nota2)
    momentos3.push(nota3)

    imprimir()

}

function imprimir() {
    // var contenedor = document.getElementById("contenedorDeNombresYPromedios")
    // contenedor.insertAdjacentHTML("beforeend", "<tr> <td>" + nombre + "</td> <td>" + apellido + "</td> <td>" + momento1 + "</td> <td>" + momento2 + "</td> <td>" + momento3 + "</td>" + obtenerTdEstaAprobado(promedio))
    var htmlAlumnosPromedio = ""
    for (var i = 0; i < nombres.length; i++) {
        var nombre = nombres[i];
        var apellido = apellidos[i];
        var nota1 = momentos1[i];
        var nota2 = momentos2[i];
        var nota3 = momentos3[i];
        var promedio = sacarPromedio(nota1, nota2, nota3)
        htmlAlumnosPromedio += "<tr> <td>" + nombre + "</td> <td>"
            + apellido + "</td> <td>" + nota1 + "</td> <td>" + nota2
            + "</td> <td>" + nota3 + "</td>" + obtenerTdEstaAprobado(promedio)

    }
    document.getElementById("contenedorDeNombresYPromedios")
        .innerHTML = htmlAlumnosPromedio
}

function sacarPromedio(nota1, nota2, nota3) {
    return Math.ceil((nota1 + nota2 + nota3) / 3)
}

function obtenerTdEstaAprobado(promedio) {
    if (promedio == 20) {
        return "<td class='aprobado'>" + promedio + "</td>"
    }
    else if (promedio < 10) {
        return "<td class='reprobado'>" + promedio + "</td>"
    }
    return "<td>" + promedio + "</td>"
}

function pasoElFiltroPorTamanho(texto, tamanhoMin) {
    if (texto.length >= tamanhoMin) {
        return true
    }
    return false
}

function pasoELFiltroPorCantidadDeNumero(nota, tamanhoMin) {
    if (nota >= 1) {
        return true
    }
    return false
}

// var resultado = parseInt("hgfrrr 3434")

