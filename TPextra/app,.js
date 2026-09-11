//Ejercicio 1 
let boton1 = document.querySelector('#boton1')
let parrafo1 = document.querySelector('#parrafo1')
let input1 = document.querySelector('#input1')
let edad = 0
boton1.onclick = function(){
    edad = input1.value
    if (edad <=12) {
        parrafo1.textContent = 'Pagan $3000'
    } else if (edad >=12){
        parrafo1.textContent = 'Pagan $5000'
    }
}
//Ejercicio 2
let boton2 = document.querySelector('#boton2')
let parrafo2 = document.querySelector('#parrafo2')
let input2 = document.querySelector('#input2')
let compra = ''
boton2.onclick = function(){
    compra = input2.value
    if (compra <=20.000) {
        parrafo2.textContent = 'No tiene descuento'
    } else if ((compra >=20.000) && (compra <=50.000)){
        parrafo2.textContent = 'Hay descuento del 10%'
    } else if (compra >=50.000){
        parrafo2.textContent = 'Hay descuento del 20%'
    }
}
//Ejercicio 3
let boton3 = document.querySelector('#boton3')
let parrafo3 = document.querySelector('#parrafo3')
let input3 = document.querySelector('#input3')
let consumo = ''
boton3.onclick = function(){
    consumo = input3.value
    if (consumo <=100) {
        parrafo3.textContent = 'Cada kWh cuesta $50'
    } else if ((consumo >=100) && (consumo <=300)){
        parrafo3.textContent = 'Cada kWh cuesta $70'
    } else if (consumo >=300) {
        parrafo3.textContent = 'Cada kWh cuesta $100'
    }
}
//Ejercicio 4 
let boton4 = document.querySelector('#boton4')
let parrafo4 = document.querySelector('#parrafo4')
let input4 = document.querySelector('#input4')
let paquetes = ''
boton4.onclick = function(){
    paquetes = input4.value
    if (paquetes <=2) {
        parrafo4.textContent = 'Costo de $3000'
    } else if ((paquetes >=2) && (paquetes <=5)) {
        parrafo4.textContent = 'Costo de $5000'
    } else if (paquetes >=5) {
        parrafo4.textContent = 'Costo de $8000'
    }
}
//Ejercicio 5
let boton5 = document.querySelector('#boton5')
let parrafo5 = document.querySelector('#parrafo5')
let input5 = document.querySelector('#input5')
let estacionamiento = ''
boton5.onclick = function(){
    estacionamiento = input5.value
    if (estacionamiento <=2) {
        parrafo5.textContent = 'Se cobran $1000 por hora'
    } else if ((estacionamiento >=2) && (estacionamiento <=5)) {
        parrafo5.textContent = 'Se cobran $800 por hora'
    } else if (estacionamiento >=5){
        parrafo5.textContent = 'Se cobran $600 por hora'
    }
}