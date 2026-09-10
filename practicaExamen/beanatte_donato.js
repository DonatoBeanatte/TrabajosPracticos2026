let body = document.querySelector('#body')
//Ejercicio 1
let boton1 = document.querySelector('#boton1')
let parrafo1 = document.querySelector('#parrafo1')
let input1 = document.querySelector('#input1')
let velocidad = ''
boton1.onclick = function(){
    velocidad = input1.value
    if (velocidad <30) {
        parrafo1.textContent = 'Velocidad baja'
        body.style.backroundColor = 'blue'
    } else if ((velocidad >=30) && (velocidad <=60)) {
        parrafo1.textContent = 'Velocidad normal'
        body.style.backroundColor = 'green'
    } else if (velocidad >60) {
        parrafo1.textContent = 'Velocidad alta'
        body.style.backroundColor = 'red'
    }
}
//Ejercicio 2
let boton2 = document.querySelector('#boton1')
let parrafo2 = document.querySelector('#parrafo2')
let input2 = document.querySelector('#input2')
let dia = ''
boton2.onclick = function(){
    dia = input2.value
    if ((dia == 'Lunes') || (dia == 'Miercoles') || (dia == 'Viernes')) {
        parrafo2.textContent = 'Tenes clases de programacion'
    } else if ((dia == 'Martes') || (dia == 'Jueves')) {
        parrafo2.textContent = 'No tenes programacion'
    } else if ((dia == 'Sabado') || (dia == 'Domingo')) {
        parrafo2.textContent = 'Es fin de semana'
    }
}
//Ejercicio 3
let boton3 = document.querySelector('#boton3')
let parrafo3 = document.querySelector('#parrafo3')
let input3 = document.querySelector('#input3')
let input4 = document.querySelector('#input4')
let usuario = ''
let contrasenia = ''
boton3.onclick = function(){
    usuario = input3.value
    contrasenia = input4.value
    if ((usuario == 'Alumno') || (contrasenia == '2026')) {
        parrafo3.textContent = 'Acceso permitido'
    } else {
        parrafo3.textContent = 'Acceso denegado'
    }
}
//Ejercicio 4 
let boton4 = document.querySelector('#boton4')
let parrafo4 = document.querySelector('#parrafo4')
let input5 = document.querySelector('#input5')
let jugador = ''
boton4.onclick = function(){
    jugador = input5.value
    if (jugador >100) {
        parrafo4.textContent = 'Es nivel avanzado'
    } else if ((jugador >=50) && (jugador <=99)) {
        parrafo4.textContent = 'Es nivel intermedio'
    } else if (jugador <50) {
        parrafo4.textContent = 'Es nivel principiante'
    }
}
//Ejercicio 5
let boton5 = document.querySelector('#boton5')
let parrafo5 = document.querySelector('#parrafo5')
let input6 = document.querySelector('#input6')
let edad = 0
boton5.onclick = function(){
    edad = input6.value
    if (edad <13) {
        parrafo5.textContent = 'Categoria infantil'
    } else if ((edad >=13) && (edad <=17)){
        parrafo5.textContent = 'Categoria adolescente'
    } else if (edad >18) {
        parrafo5.textContent = 'Categoria adulto'
    }
}
