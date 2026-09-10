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
        parrafo2.textContent = ''
        
    }
}