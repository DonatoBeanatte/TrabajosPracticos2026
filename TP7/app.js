let ej1 = document.querySelector('#ej1')
let botonEj1 = document.querySelector('#botonEj1')
let edad = 14
botonEj1.onclick = function(){
    //ej1.textContent = 'resultado'
    if (edad>= 20) {
        ej1.textContent = 'sos mayor de edad'
    } else {
        ej1.textContent = 'sos menor de edad'
    }
}