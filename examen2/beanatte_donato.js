//Ejercicio1
let temperatura = document.querySelector('#input1')
let p = document.querySelector('#p')
let boton1 = document.querySelector('#boton1')
let temperatura = 30
boton1.onlick = function(){
    if (temperatura<=10) {
        p.textContent = 'Hace frio'
        p.style.backroundColor = 'blue'
    } else if{ ((input.value >=10) && (input.value <=25))
    p.textContent = 'Clima agradable'
    p.style.backroundColor = 'green'
    } else {
        (input.value >=25)
        p.style.backroundColor = 'red'
    }
}
//Ejercicio2
let p2 = document.querySelector('#p2')
let boton2 = document.querySelector('#boton2')
let input2 = document.querySelector('#input2')
boton2.onclick = function(){
    if (input2.value == 'lunes, miercoles y viernes') {
        p2.textContent = 'residuos secos'
    } else if(input2.value == 'martes, jueves y domingo'){
        p2.textContent = 'residuos humedos'
    } else {
        (input2.value == 'sabado')
        p2.textContent = 'no hay recoleccion de residuos'
    }
}
//Ejercicio3
let input3 = document.querySelector('#input3')
let p3 = document.querySelector('#p3')
let boton3 = document.querySelector('#boton3')
boton3.onclick = function(){
    if ((input3.value == 'admin') && (input3.value == '1234')) {
        p3.textContent = 'accesso permitido'
    } else {
        ((input3.value == 'admin') || (input3.value == '1234'))
        p3.textContent = 'acceso no permitido'
    }
}
//Ejercicio4
let input4 = document.querySelector('#input4')
let p4 = document.querySelector('#p4')
let boton4 = document.querySelector('#boton4')
nombreAlumno = ''
boton4.onclick = function(){
    if (condition) {
        
    } else {
        
    }
}