//Variables
let btnTexto = document.querySelector('BotonCambiarTexto')
let btnColor = document.querySelector('BotonCambiarColor')
let btnFondo = document.querySelector('BotonCambiarFondo')
let btnLetra = document.querySelector('BotonCambiarLetra')
let btnTamaño = document.querySelector('BotonCambiarTamaño')
let btnReiniciar = document.querySelector('BotonReiniciar')

let p = document.querySelector('p')
btnTexto.onclick = function(){
    p.textContent = 'Bienvenido a programación'
}
btnColor.onclick = function (){
    p.style.color = 'green'
}
btnFondo.onclick = function(){
    p.style.backgroundColor = 'purple'
}
btnLetra.onclick = function(){
    p.style.fontFamily = 'IMPACT'
}
btnTamaño.onclick = function(){
    p.style.fontSize = '30px'
}
btnReiniciar.onclick = function(){
    p.textContent = 'Bienvenido al TP6'
    p.style.backgroundColor = 'rgb(80, 87, 87)'
    p.style.color = 'rgb(4, 4, 5)'
    p.style.fontFamily = 'Arial, Helvetica, sans-serif'
    p.style.fontSize = '15px'
}
