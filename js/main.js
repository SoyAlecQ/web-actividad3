// Array para almacenar los datos enviados
var datosPersonas = [];

// Función guardar datos
function guardarDatos() {
    var identificacion = document.getElementById("formIdentificacion").value
    var nombre = document.getElementById("formNombre").value
    var apellidos = document.getElementById("formApellidos").value
    var direccion = document.getElementById("formDireccion").value

    var datosPersona = {
        identificacion: identificacion,
        nombre: nombre,
        apellidos: apellidos,
        direccion: direccion
    }

    datosPersonas.push(datosPersona)
    mostrarDatosRegistrados()
}

// Función mostrar datos
function mostrarDatosRegistrados() {
    var identificacion = document.getElementById("formIdentificacion").value
    var nombre = document.getElementById("formNombre").value
    var apellidos = document.getElementById("formApellidos").value
    var direccion = document.getElementById("formDireccion").value

    var tabla = document.getElementById("tablaDatos")
    var tbody = document.getElementById("cuerpoTabla")

    var fila = tbody.insertRow()
    var celdaIdentificacion = fila.insertCell(0)
    var celdaNombre = fila.insertCell(1)
    var celdaApellidos = fila.insertCell(2)
    var celdaDireccion = fila.insertCell(3)

    celdaIdentificacion.innerHTML = identificacion
    celdaNombre.innerHTML = nombre
    celdaApellidos.innerHTML = apellidos
    celdaDireccion.innerHTML = direccion

    // Limpiar los campos del formulario
    document.getElementById("formIdentificacion").value = ""
    document.getElementById("formNombre").value = ""
    document.getElementById("formApellidos").value = ""
    document.getElementById("formDireccion").value = ""
}

// Buscar dato registrado
function buscarDato() {
    var buscarIdentificacion = document.getElementById("busquedaIdentificacion").value

    for (var i = 0; i < datosPersonas.length; i++) {
        if (datosPersonas[i].identificacion === buscarIdentificacion) {
            var numeroIdentificacion = datosPersonas[i].identificacion
            var nombreCompleto = datosPersonas[i].nombre + " " + datosPersonas[i].apellidos

            alert("Identificación: " + numeroIdentificacion + "\n" + "Nombre: " + nombreCompleto)
            return
        }
    }

    alert("El número ingresado no existe en la BD")
}