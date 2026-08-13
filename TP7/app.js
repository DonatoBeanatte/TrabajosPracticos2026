let Ej1 = document.querySelector('#Ej1')
let botonEj1 = document.querySelector('#botonEj1')
let edad = 14
botonEj1.onclick = function(){
    //Ej1.textContent = 'resultado'
    if (edad>= 20) {
        ej1.textContent = 'sos mayor de edad'
    } else {
        ej1.textContent = 'sos menor de edad'
    }
}
let Ej2 = document.querySelector('#Ej2')
let botonEj2 = document.querySelector('#botonEj2')
let nombreUsuario = 'Juan'
botonEj2.onclick = function(){
    if (nombreUsuario = 'Juan'){
        Ej2.textContent = 'Bienvenido Juan, ¿como estas?'
    } else {
        Ej2.textContent = 'Bienvenido usuario'
    }
}
let Ej3 = document.querySelector('#Ej3')
let botonEj3 = document.querySelector('#botonEj3')
let nombreUsuario2 = 'Raul'
botonEj3.onclick = function(){
    if (nombreUsuario2 == 'Raul'||nombreUsuario2 == 'Pedro'){
        Ej3.textContent = 'Bienvenido + nombreUsuario2 + , ¿como estas?' 
    } else {
        Ej3.textContent = 'Bienvenido + nombreUsuario2'
    }
}
let Ej4 = document.querySelector('#Ej4')
let botonEj4 = document.querySelector('#botonEj4')
let numero = 5
botonEj4.onclick = function(){
    if (numero > 0) {
        Ej4.textContent = 'el numero es positivo'
    } else if (numero < 0) {
        Ej4.textContent = 'el numero es negativo'
    } else {
        Ej4.textContent = 'el numero es cero'
    }
}
let Ej5 = document.querySelector('#Ej5')
let botonEj5 = document.querySelector('#botonEj5')
let edad2 = 14
botonEj5.onclick = function(){
    if (edad2>= 6 && edad2 <= 11) {
        Ej5.textContent = 'niño'
    } else if (edad2>= 19 && edad2 <= 18) {
        Ej5.textContent = 'adolescente'
    } else if (edad2>= 19 && edad2 <= 26) {
        Ej5.textContent = 'joven'
    } else if (edad2>= 27 && edad2 <= 59) {
        Ej5.textContent = 'adulto'
    } else if (edad2>= 60) {
        Ej5.textContent = 'anciano'
    } else {
        Ej5.textContent = 'edad no valida'
    }
}
let Ej6 = document.querySelector('#Ej6')
let botonEj6 = document.querySelector('#botonEj6')
let dia = 'domingo'
botonEj6.onclick = function(){
    if (dia == 'lunes, martes, miercoles, jueves o viernes') {
        Ej6.textContent = 'es un dia laborable'
    } else if (dia = 'sabado o domingo') {
        Ej6.textContent = 'es fin de semana'
    }
}
let Ej7 = document.querySelector('#Ej7')
let botonEj7 = document.querySelector('#botonEj7')
let contraseña = 'secreto'
botonEj7.onclick = function(){
    if (contraseña == 'secreto') {
        Ej7.textContent = 'acceso concedido'
    } else {
        Ej7.textContent = 'acceso denegado'
    }
}