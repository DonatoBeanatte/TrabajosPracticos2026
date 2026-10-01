//Ejercicio 1
function numeroMayor(){
    let numero1 
    let numero2
} if (numero1 > numero2) {
    resultado1.textContent = 'el numero mayor es:'+ numero1
} else if(numero2 > numero1){
    resultado1.textContent = 'el numero mayor es:'+ numero2
} else {
    resultado1.textContent = 'los dos numeros son iguales'
}

//Ejercicio 2
function numeroMenor(){
    let numero1
    let numero2
} if (numero1 < numero2) {
    resultado2.textContent = 'el numero menor es:'+ numero1
} else if(numero2 < numero1){
    resultado2.textContent = 'el numero menor es:'+ numero2
} else {
    resultado2.textContent = 'los dos numeros son iguales'
}

//Ejercicio 3
function compararNumeros(){
    let numero1
    let numero2
} if (numero1 == numero2) {
    resultado3.textContent = 'los numeros son iguales'
} else {
    resultado3.textContent = 'los numeros son diferentes'
}

//Ejercicio 4
function calcularIva(){
    let compra
    let Iva = compra * 0.21
    resultado4.textContent = 'el Iva es: $'+ Iva
}     

//Ejercicio 5
function saludar(){
    let nombre
    resultado5.textContent = 'hola'+ nombre +'¿como estas?'
}

//Ejercicio 6
function modoOscuro(){
    body.style.backroundColor = '#black'
    body.style.color = '#white'
    resultado6.textContent = 'modo oscuro activado'
}

//Ejercicio 7
function modoClaro(){
    body.style.backroundColor = '#white'
    body.style.color = '#black'
    resultado7.textContent = 'modo claro activado'
}
