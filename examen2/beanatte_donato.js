let body = document.querySelector('#body')
//Ejercicio 1 
let boton1 = document.querySelector('#boton1')
let parrafo1 = document.querySelector('#parrafo1')
let input1 = document.querySelector('#input1')
let temperatura = 0
boton1.onclick = function(){
    temperatura = input1.value 
    if (temperatura <10) {
        parrafo1.textContent = 'Hace frio'
        body.style.backroundColor = 'blue'
    } else if ((temperatura >=10) && (temperatura <=25)){
        parrafo1.textContent = 'Clima agradable'
        body.style.backroundColor = 'green'
    } else if (temperatura >25){
        parrafo1.textContent = 'Hace calor'
        body.style.backroundColor = 'red'
    }
}
//Ejercicio 2
let boton2 = document.querySelector('#boton2')
let parrafo2 = document.querySelector('#parrafo2')
let input2 = document.querySelector('#input2')
let diaBasura = ''
boton2.onclick = function(){
    diaBasura = input2.value
    if ((diaBasura == 'Lunes') || (diaBasura == 'Miercoles') || (diaBasura == 'Viernes')) {
        parrafo2.textContent = 'Residuos secos'
    } else if ((diaBasura == 'Martes') || (diaBasura == 'Jueves') || (diaBasura == 'Domingo')){
        parrafo2.textContent = 'Residuos humedos'
    } else if (diaBasura == 'Sabado') {
        parrafo2.textContent = 'No hay recoleccion de residuos'
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
    if ((usuario == 'admin') && (contrasenia == '1234')) {
        parrafo3.textContent = 'Acceso concedido '
    } else {
        parrafo3.textContent = 'Acceso denegado'
    }
}
//Ejercicio 4
let boton4 = document.querySelector('#boton4')
let parrafo4 = document.querySelector('#parrafo4')
let input5 = document.querySelector('#input5')
let nombre = ''
boton4.onclick = function(){
    nombre = input5.value
    if ((nombre == 'Benja') || (nombre == 'Alejo') || (nombre == 'Ramiro') || (nombre == 'Maxi') || (nombre == 'Nahuel')) {
        parrafo4.textContent = 'Esta presente'
    } else {
        parrafo4.textContent = 'Esta ausente'
    }
}