//Variables
let btnTexto = document.querySelector('#btnTexto')
let btnColor = document.querySelector('#btnColor')
let btnFondo = document.querySelector('#btnFondo')
let btnLetra = document.querySelector('#btnLetra')
let btnTamaño = document.querySelector('#btnTamaño')
let btnReiniciar = document.querySelector('#btnReiniciar')

let p = document.querySelector('#parrafo')
btnTexto.onclick = function () {
    p.textContent = 'Bienvenido a programación'
}
btnColor.onclick = function () {
    p.style.color = 'green'
}
btnFondo.onclick = function () {
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
